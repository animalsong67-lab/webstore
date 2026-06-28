import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import {
  ArrowUpDown,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Gavel,
  Globe,
  Lightbulb,
  Search,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Tag,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { WishlistButton } from "../components/wishlist/WishlistButton";
import {
  type AuctionStateView,
  useFilteredListings,
  useListActiveAuctions,
  useRecommendations,
  useSmartSearch,
} from "../hooks/useListings";
import type { Listing, ListingFilter, SearchQuery } from "../types";
import { SortBy } from "../types";

// ─── Constants ──────────────────────────────────────────────────────────────

const NICHES = ["All", "eCommerce", "Blog", "SaaS", "News", "Tools", "Other"];
const PLATFORMS = ["All", "WordPress", "Shopify", "Custom", "Other"];
const MONETIZATION_TYPES = [
  "Ads",
  "Affiliate",
  "Subscription",
  "Products",
  "Hybrid",
];
const COUNTRIES = ["India", "USA", "UK", "International", "Mixed"];
const CMS_TYPES = ["WordPress", "Shopify", "Custom", "Static", "Other"];
const PAGE_SIZE = 12;

type ModeFilter = "all" | "fixed" | "auction";

const SORT_LABELS: Record<string, string> = {
  priceAsc: "Price: Low to High",
  priceDesc: "Price: High to Low",
  highestRating: "Highest Rating",
  newest: "Newest First",
  bestMatch: "Best Match",
};

function toSortBy(val: string): SortBy {
  const map: Record<string, SortBy> = {
    priceAsc: SortBy.priceAsc,
    priceDesc: SortBy.priceDesc,
    highestRating: SortBy.highestRating,
    newest: SortBy.newest,
    bestMatch: SortBy.bestMatch,
  };
  return map[val] ?? SortBy.newest;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatCurrency(n: bigint) {
  return `${Number(n).toLocaleString()}`;
}

function formatCountdown(secs: number): string {
  if (secs <= 0) return "Ended";
  const d = Math.floor(secs / 86400);
  const h = Math.floor((secs % 86400) / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${s}s`;
}

function countdownClass(secs: number): string {
  if (secs <= 0) return "bg-muted text-muted-foreground border-border";
  if (secs < 1800)
    return "bg-red-500/20 text-red-300 border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.5)] animate-pulse";
  if (secs < 7200)
    return "bg-orange-500/20 text-orange-300 border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.4)]";
  return "bg-primary/20 text-primary border-primary/40 shadow-[0_0_8px_oklch(0.7_0.22_270/0.3)]";
}

function formatTraffic(n: bigint) {
  const v = Number(n);
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
  return v.toLocaleString();
}

function sortListings(listings: Listing[], sort: string): Listing[] {
  return [...listings].sort((a, b) => {
    if (sort === "priceAsc") return Number(a.askingPrice - b.askingPrice);
    if (sort === "priceDesc") return Number(b.askingPrice - a.askingPrice);
    if (sort === "highestRating")
      return Number(b.monthlyRevenue - a.monthlyRevenue);
    if (sort === "newest") return Number(b.id - a.id);
    return 0;
  });
}

function calculateTrustScore(listing: Listing): number {
  const rev = Number(listing.monthlyRevenue);
  const traf = Number(listing.monthlyTraffic);
  return Math.min(
    100,
    Math.round((rev / 1000) * 10 + (traf / 10000) * 20 + 40),
  );
}

// ─── Auction Countdown Badge ──────────────────────────────────────────────────

function AuctionBadge({ auction }: { auction: AuctionStateView }) {
  const [remaining, setRemaining] = useState(
    Number(auction.timeRemainingSeconds),
  );
  useEffect(() => {
    if (auction.ended) return;
    const id = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(id);
  }, [auction.ended]);
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${countdownClass(remaining)}`}
    >
      <Clock className="w-3 h-3" />
      {auction.ended ? "Ended" : formatCountdown(remaining)}
    </span>
  );
}

// ─── Niche Badge Colors ──────────────────────────────────────────────────────

const NICHE_COLORS: Record<string, string> = {
  eCommerce:
    "bg-primary/15 text-primary border-primary/30 shadow-[0_0_8px_oklch(0.7_0.22_270/0.25)]",
  Blog: "bg-accent/15 text-accent border-accent/30 shadow-[0_0_8px_oklch(0.78_0.24_195/0.25)]",
  SaaS: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  News: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Tools: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  Other: "bg-muted/80 text-muted-foreground border-border",
};

function nicheBadgeClass(niche: string) {
  return NICHE_COLORS[niche] ?? NICHE_COLORS.Other;
}

function trustGlowClass(score: number): string {
  if (score >= 80)
    return "text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]";
  if (score >= 60)
    return "text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.7)]";
  return "text-red-400 drop-shadow-[0_0_6px_rgba(248,113,113,0.7)]";
}

function trustDotClass(score: number): string {
  if (score >= 80)
    return "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]";
  if (score >= 60) return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]";
  return "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]";
}

// ─── Auction Stats Panel ───────────────────────────────────────────────────────

function AuctionStats({ auction }: { auction: AuctionStateView }) {
  const currentBid = auction.highestBidAmount ?? auction.startingBid;
  return (
    <div className="grid grid-cols-2 gap-2 pt-1">
      <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-lg px-2.5 py-1.5 shadow-[0_0_8px_oklch(0.7_0.22_270/0.2)]">
        <Gavel className="w-3.5 h-3.5 text-primary shrink-0" />
        <div className="min-w-0">
          <p className="text-[10px] text-muted-foreground leading-none mb-0.5">
            {auction.highestBidAmount ? "Current Bid" : "Starting"}
          </p>
          <p className="text-xs font-bold text-primary truncate">
            ${Number(currentBid).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 bg-muted/40 border border-border/50 rounded-lg px-2.5 py-1.5">
        <Users className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        <div className="min-w-0">
          <p className="text-[10px] text-muted-foreground leading-none mb-0.5">
            Bids
          </p>
          <p className="text-xs font-semibold text-foreground">
            {Number(auction.bidCount)}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Listing Card ─────────────────────────────────────────────────────────────

function ListingCard({
  listing,
  auction,
  isVerified,
  index,
}: {
  listing: Listing;
  auction?: AuctionStateView;
  isVerified?: boolean;
  index: number;
}) {
  const navigate = useNavigate();
  const score = calculateTrustScore(listing);
  const isAuction = !!auction;

  return (
    <Link
      to="/listing/$id"
      params={{ id: listing.id.toString() }}
      data-ocid={`browse.card.${index + 1}`}
      className="block h-full group"
    >
      <div
        className={[
          "glass-card rounded-2xl flex flex-col overflow-hidden h-full cursor-pointer",
          "transition-all duration-300 hover:scale-[1.02]",
          isAuction
            ? "border-primary/40 hover:border-primary/70 hover:shadow-[0_20px_60px_oklch(0.1_0.015_270/0.7),0_0_30px_oklch(0.7_0.22_270/0.35)]"
            : "hover:border-primary/50 hover:shadow-[0_20px_60px_oklch(0.1_0.015_270/0.7),0_0_24px_oklch(0.7_0.22_270/0.2)]",
        ].join(" ")}
      >
        {/* Thumbnail with hover zoom overlay */}
        <div className="relative overflow-hidden h-40 flex items-center justify-center">
          <div
            className={`absolute inset-0 transition-transform duration-500 group-hover:scale-110 ${
              isAuction
                ? "bg-gradient-to-br from-primary/25 via-amber-500/15 to-purple-600/20"
                : "bg-gradient-to-br from-primary/20 via-accent/10 to-purple-600/15"
            }`}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, oklch(0.7 0.22 270 / 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, oklch(0.78 0.24 195 / 0.2) 0%, transparent 45%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[oklch(0.1_0.015_270/0.95)] to-transparent" />
          {isAuction ? (
            <Gavel className="w-11 h-11 text-primary/50 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/70" />
          ) : (
            <Globe className="w-11 h-11 text-muted-foreground/40 relative z-10 transition-transform duration-500 group-hover:scale-110" />
          )}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-20">
            {isAuction ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary text-primary-foreground shadow-[0_0_14px_oklch(0.7_0.22_270/0.6)] backdrop-blur-sm">
                <Gavel className="w-2.5 h-2.5" /> LIVE AUCTION
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-background/70 border border-border/60 text-muted-foreground backdrop-blur-sm">
                <Tag className="w-2.5 h-2.5" /> Fixed Price
              </span>
            )}
            {isVerified && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.4)]">
                <CheckCircle2 className="w-2.5 h-2.5" /> Verified
              </span>
            )}
          </div>
          <div className="absolute top-2.5 right-2.5 z-20">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${nicheBadgeClass(listing.niche)}`}
            >
              {listing.niche}
            </span>
          </div>
          {isAuction && !auction.ended && (
            <div className="absolute bottom-2.5 right-2.5 z-20">
              <AuctionBadge auction={auction} />
            </div>
          )}
          <div className="absolute top-2.5 right-[84px] z-20">
            <WishlistButton
              listingId={listing.id}
              className="h-7 w-7 rounded-full bg-background/70 backdrop-blur-sm border border-border/60 hover:border-rose-500/60 hover:shadow-[0_0_12px_rgba(244,63,94,0.5)] transition-all duration-300"
            />
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1 gap-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-1 min-w-0 flex-1">
              {listing.title}
            </h3>
            <div
              className="flex items-center gap-1.5 shrink-0 px-2 py-1 rounded-lg bg-background/40 border border-border/40"
              title={`Trust Score: ${score}`}
            >
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${trustDotClass(score)}`}
              />
              <span
                className={`text-[10px] font-bold ${trustGlowClass(score)}`}
              >
                {score}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-border/60 text-muted-foreground bg-muted/50">
              {listing.platform}
            </span>
            {isAuction && auction.reserveMet && (
              <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-emerald-400">
                <Shield className="w-3 h-3" /> Reserve met
              </span>
            )}
          </div>

          <p className="text-xs text-muted-foreground line-clamp-2 flex-1">
            {listing.description}
          </p>

          {isAuction ? (
            <AuctionStats auction={auction} />
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/15 rounded-lg px-2.5 py-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] text-muted-foreground leading-none mb-0.5">
                    Revenue
                  </p>
                  <p className="text-xs font-semibold text-foreground truncate">
                    {formatCurrency(listing.monthlyRevenue)}/mo
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-accent/10 border border-accent/15 rounded-lg px-2.5 py-1.5">
                <Users className="w-3.5 h-3.5 text-accent shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] text-muted-foreground leading-none mb-0.5">
                    Traffic
                  </p>
                  <p className="text-xs font-semibold text-foreground truncate">
                    {formatTraffic(listing.monthlyTraffic)}/mo
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-2.5 border-t border-border/30 mt-auto">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                {isAuction
                  ? auction.highestBidAmount
                    ? "Highest Bid"
                    : "Starting Bid"
                  : "Asking Price"}
              </p>
              <p className="font-display font-bold text-lg text-primary leading-tight glow-text-primary">
                $
                {isAuction
                  ? Number(
                      auction.highestBidAmount ?? auction.startingBid,
                    ).toLocaleString()
                  : formatCurrency(listing.askingPrice)}
              </p>
            </div>
            <Button
              size="sm"
              variant={isAuction ? "default" : "outline"}
              className={[
                "gap-1.5 text-xs ripple-button glow-button-hover transition-all duration-300",
                isAuction
                  ? "glow-primary"
                  : "border-border/60 hover:border-primary/60 hover:bg-primary/10 hover:text-primary",
              ].join(" ")}
              onClick={(e) => {
                e.preventDefault();
                navigate({
                  to: "/listing/$id",
                  params: { id: listing.id.toString() },
                });
              }}
              data-ocid={`browse.view_details.${index + 1}`}
            >
              {isAuction ? (
                <>
                  <Gavel className="w-3 h-3" /> Bid Now
                </>
              ) : (
                "View Details"
              )}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="glass-card rounded-2xl flex flex-col overflow-hidden">
      <div className="h-36 bg-muted/30 animate-pulse" />
      <div className="p-4 flex flex-col gap-3">
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2 rounded-full" />
        </div>
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
        <div className="grid grid-cols-2 gap-2">
          <Skeleton className="h-10 rounded-lg" />
          <Skeleton className="h-10 rounded-lg" />
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-border/30">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// ─── Filter Pill ──────────────────────────────────────────────────────────────

function FilterPill({
  label,
  active,
  onClick,
  ocid,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  ocid: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      data-ocid={ocid}
      className={[
        "px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border whitespace-nowrap",
        active
          ? "bg-primary/20 text-primary border-primary/50 shadow-[0_0_10px_oklch(0.7_0.22_270/0.35)] glow-text-primary"
          : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary bg-muted/30 hover:bg-primary/10",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

// ─── Recommendation Card ─────────────────────────────────────────────────────

function RecommendationCard({
  listing,
  reason,
}: { listing: Listing; reason: string }) {
  const score = calculateTrustScore(listing);
  return (
    <Link
      to="/listing/$id"
      params={{ id: listing.id.toString() }}
      data-ocid={`browse.rec-card-${listing.id}`}
      className="block group"
    >
      <div className="glass-card glass-card-hover rounded-xl flex flex-col overflow-hidden h-full transition-all duration-300">
        <div className="h-0.5 bg-gradient-to-r from-accent via-primary to-accent/60" />
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-1 min-w-0">
              {listing.title}
            </h4>
            <Badge
              variant="secondary"
              className="shrink-0 text-[10px] bg-primary/15 text-primary border-primary/30 shadow-[0_0_6px_oklch(0.7_0.22_270/0.3)]"
            >
              <Lightbulb className="w-3 h-3 mr-1" />
              AI Pick
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {listing.description}
          </p>
          <div className="flex items-center gap-2 mt-auto pt-1">
            <span className={`w-2 h-2 rounded-full ${trustDotClass(score)}`} />
            <span
              className={`text-[10px] font-medium ${trustGlowClass(score)}`}
            >
              Trust {score}
            </span>
            <span className="text-[10px] text-muted-foreground ml-auto">
              {formatCurrency(listing.askingPrice)}
            </span>
          </div>
          <p className="text-[10px] text-accent font-medium">{reason}</p>
        </div>
      </div>
    </Link>
  );
}

// ─── Mode Filter Pills ────────────────────────────────────────────────────────

const MODE_PILLS: { value: ModeFilter; label: string }[] = [
  { value: "all", label: "All Listings" },
  { value: "fixed", label: "Fixed Price" },
  { value: "auction", label: "Auctions" },
];

function ModeFilterBar({
  mode,
  onChange,
  auctionCount,
}: {
  mode: ModeFilter;
  onChange: (m: ModeFilter) => void;
  auctionCount: number;
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {MODE_PILLS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          aria-pressed={mode === value}
          data-ocid={`browse.mode_filter.${value}`}
          onClick={() => onChange(value)}
          className={[
            "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200",
            mode === value
              ? "bg-primary/20 text-primary border-primary/50 shadow-[0_0_14px_oklch(0.7_0.22_270/0.4)]"
              : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary bg-muted/30",
          ].join(" ")}
        >
          {value === "auction" && <Gavel className="w-3 h-3" />}
          {value === "fixed" && <Tag className="w-3 h-3" />}
          {value === "all" && <Globe className="w-3 h-3" />}
          {label}
          {value === "auction" && auctionCount > 0 && (
            <span
              className={`ml-0.5 text-[10px] rounded-full px-1.5 py-0.5 leading-none ${
                mode === value
                  ? "bg-primary/30 text-primary"
                  : "bg-primary/15 text-primary"
              }`}
            >
              {auctionCount}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

// ─── Browse Page ──────────────────────────────────────────────────────────────

export default function Browse() {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: "/browse" }) as Record<
    string,
    string | undefined
  >;

  const [nlQuery, setNlQuery] = useState(searchParams.q ?? "");
  const [selectedNiche, setSelectedNiche] = useState(
    searchParams.niche ?? "All",
  );
  const [selectedPlatform, setSelectedPlatform] = useState(
    searchParams.platform ?? "All",
  );
  const [maxPrice, setMaxPrice] = useState(searchParams.maxPrice ?? "");
  const [sortBy, setSortBy] = useState<string>(searchParams.sort ?? "newest");
  const [showFilters, setShowFilters] = useState(false);
  const [modeFilter, setModeFilter] = useState<ModeFilter>(
    (searchParams.mode as ModeFilter) ?? "all",
  );
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [minSeo, setMinSeo] = useState(Number(searchParams.minSeo ?? 0));
  const [selectedMonetization, setSelectedMonetization] = useState<string[]>(
    searchParams.monetization ? searchParams.monetization.split(",") : [],
  );
  const [minAge, setMinAge] = useState(Number(searchParams.minAge ?? 0));
  const [countryTraffic, setCountryTraffic] = useState(
    searchParams.country ?? "",
  );
  const [cmsType, setCmsType] = useState(searchParams.cms ?? "");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [_resultCountKey, setResultCountKey] = useState(0);
  const _searchFocusRef = useRef<HTMLInputElement>(null);

  const hasActiveFilters =
    selectedNiche !== "All" ||
    selectedPlatform !== "All" ||
    maxPrice !== "" ||
    minSeo > 0 ||
    selectedMonetization.length > 0 ||
    minAge > 0 ||
    countryTraffic !== "" ||
    cmsType !== "";

  const hasActiveNl = nlQuery.trim().length > 0;

  const filter: ListingFilter = {
    niche: selectedNiche !== "All" ? selectedNiche : undefined,
    platform: selectedPlatform !== "All" ? selectedPlatform : undefined,
    maxPrice: maxPrice ? BigInt(maxPrice) : undefined,
  };

  const searchQuery: SearchQuery | null = hasActiveNl
    ? {
        naturalLanguage: nlQuery,
        niche: selectedNiche !== "All" ? selectedNiche : undefined,
        sortBy: toSortBy(sortBy),
        minSeoScore: minSeo > 0 ? BigInt(minSeo) : undefined,
        monetizationType:
          selectedMonetization.length > 0
            ? selectedMonetization.join(",")
            : undefined,
        minAgeYears: minAge > 0 ? BigInt(minAge) : undefined,
        countryTraffic: countryTraffic || undefined,
        cmsType: cmsType || undefined,
        maxRevenue: maxPrice ? BigInt(maxPrice) : undefined,
      }
    : null;

  const { data: regularListings, isLoading: regularLoading } =
    useFilteredListings(filter);
  const { data: smartResults, isLoading: smartLoading } =
    useSmartSearch(searchQuery);
  const { data: recommendations } = useRecommendations(searchQuery);
  const { data: activeAuctions } = useListActiveAuctions();

  const isLoading = hasActiveNl ? smartLoading : regularLoading;
  const listings = hasActiveNl ? (smartResults ?? []) : (regularListings ?? []);

  const auctionMap = useMemo(() => {
    const map = new Map<string, AuctionStateView>();
    for (const a of activeAuctions ?? []) map.set(a.listingId.toString(), a);
    return map;
  }, [activeAuctions]);

  const modeFiltered = useMemo(() => {
    if (modeFilter === "auction")
      return listings.filter((l) => auctionMap.has(l.id.toString()));
    if (modeFilter === "fixed")
      return listings.filter((l) => !auctionMap.has(l.id.toString()));
    return listings;
  }, [listings, auctionMap, modeFilter]);

  const filtered = useMemo(
    () => sortListings(modeFiltered, sortBy),
    [modeFiltered, sortBy],
  );

  const auctionCount = useMemo(
    () => listings.filter((l) => auctionMap.has(l.id.toString())).length,
    [listings, auctionMap],
  );

  const _visibleListings = filtered.slice(0, visibleCount);
  const _hasMore = visibleCount < filtered.length;

  // biome-ignore lint/correctness/useExhaustiveDependencies: filter-change reset
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setResultCountKey((k) => k + 1);
  }, [
    nlQuery,
    selectedNiche,
    selectedPlatform,
    maxPrice,
    modeFilter,
    minSeo,
    minAge,
    countryTraffic,
    cmsType,
  ]);

  useEffect(() => {
    const next: Record<string, string | undefined> = {
      q: nlQuery || undefined,
      niche: selectedNiche !== "All" ? selectedNiche : undefined,
      platform: selectedPlatform !== "All" ? selectedPlatform : undefined,
      maxPrice: maxPrice || undefined,
      sort: sortBy,
      mode: modeFilter !== "all" ? modeFilter : undefined,
      minSeo: minSeo > 0 ? String(minSeo) : undefined,
      monetization:
        selectedMonetization.length > 0
          ? selectedMonetization.join(",")
          : undefined,
      minAge: minAge > 0 ? String(minAge) : undefined,
      country: countryTraffic || undefined,
      cms: cmsType || undefined,
    };
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(next)) {
      if (v !== undefined && v !== "") params.set(k, v);
    }
    navigate({ to: "/browse", search: Object.fromEntries(params) });
  }, [
    nlQuery,
    selectedNiche,
    selectedPlatform,
    maxPrice,
    sortBy,
    modeFilter,
    minSeo,
    selectedMonetization,
    minAge,
    countryTraffic,
    cmsType,
    navigate,
  ]);

  function clearFilters() {
    setSelectedNiche("All");
    setSelectedPlatform("All");
    setMaxPrice("");
    setNlQuery("");
    setMinSeo(0);
    setSelectedMonetization([]);
    setMinAge(0);
    setCountryTraffic("");
    setCmsType("");
    setModeFilter("all");
  }

  function toggleMonetization(type: string) {
    setSelectedMonetization((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  }

  function handleNlSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    params.set("q", nlQuery);
    navigate({ to: "/browse", search: Object.fromEntries(params) });
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.08 0.015 270)" }}
    >
      {/* Animated gradient page header */}
      <div className="relative overflow-hidden border-b border-primary/20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, oklch(0.55 0.22 270 / 0.4) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, oklch(0.65 0.24 195 / 0.35) 0%, transparent 50%), oklch(0.09 0.02 270)",
          }}
        />
        <div
          className="absolute -top-20 left-1/4 w-96 h-96 rounded-full opacity-20 animate-glow-pulse pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.22 270 / 0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.22 270 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 270 / 1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_24px_oklch(0.7_0.22_270/0.5)] animate-glow-pulse">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1">
                WebStore Marketplace
              </p>
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl gradient-text leading-none">
                Browse Websites for Sale
              </h1>
            </div>
          </div>
          <p className="text-muted-foreground text-base ml-14">
            {isLoading
              ? "Scanning available digital assets..."
              : `Discover ${listings?.length ?? 0}+ premium digital assets ready for acquisition`}
          </p>
          <div className="flex items-center gap-3 mt-5 ml-14 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/15 border border-primary/30 text-primary">
              <Zap className="w-3 h-3" /> AI-Powered Search
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/15 border border-accent/30 text-accent">
              <Gavel className="w-3 h-3" /> Live Auctions
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
              <Shield className="w-3 h-3" /> Verified Sellers
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Smart Search Bar */}
        <form onSubmit={handleNlSubmit} className="mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl" />
            <div className="relative flex items-center">
              <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" />
              <input
                id="browse-nl-search"
                type="text"
                placeholder="AI Search: e.g. passive income websites under ₹50,000"
                value={nlQuery}
                onChange={(e) => setNlQuery(e.target.value)}
                data-ocid="browse.nl_search_input"
                aria-label="Smart search websites"
                className="w-full pl-11 pr-28 py-3.5 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_20px_oklch(0.7_0.22_270/0.25)] transition-all duration-300"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 glow-primary"
                data-ocid="browse.nl_search_button"
              >
                Search
              </Button>
            </div>
          </div>
        </form>

        {/* Controls */}
        <div className="flex flex-col gap-3 mb-6">
          <ModeFilterBar
            mode={modeFilter}
            onChange={setModeFilter}
            auctionCount={auctionCount}
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                id="browse-search"
                type="text"
                placeholder="Search by title or description..."
                value={nlQuery}
                onChange={(e) => setNlQuery(e.target.value)}
                data-ocid="browse.search_input"
                aria-label="Search websites"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_12px_oklch(0.7_0.22_270/0.2)] transition-all duration-300"
              />
            </div>
            <div className="flex gap-2 shrink-0">
              <Select value={sortBy} onValueChange={(v) => setSortBy(v)}>
                <SelectTrigger
                  className="w-44 gap-1.5 text-sm border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all"
                  data-ocid="browse.sort_select"
                >
                  <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(SORT_LABELS).map(([val, label]) => (
                    <SelectItem key={val} value={val}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                type="button"
                variant={
                  showFilters || hasActiveFilters ? "default" : "outline"
                }
                onClick={() => setShowFilters((v) => !v)}
                className={[
                  "gap-2 shrink-0 transition-all duration-200",
                  showFilters || hasActiveFilters
                    ? "glow-primary"
                    : "border-border/50 hover:border-primary/40 bg-card/60 backdrop-blur-sm",
                ].join(" ")}
                data-ocid="browse.filter_toggle"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Filters</span>
                {hasActiveFilters && (
                  <span className="bg-primary-foreground/20 text-primary-foreground text-xs rounded-full px-1.5 py-0.5 leading-none">
                    On
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="glass-card rounded-2xl p-5 mb-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
                  Niche
                </p>
                <div className="flex flex-nowrap overflow-x-auto gap-1.5 pb-1 -mb-1 scrollbar-none">
                  {NICHES.map((n) => (
                    <FilterPill
                      key={n}
                      label={n}
                      active={selectedNiche === n}
                      onClick={() => setSelectedNiche(n)}
                      ocid={`browse.filter-niche-${n.toLowerCase()}`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
                  Platform
                </p>
                <div className="flex flex-nowrap overflow-x-auto gap-1.5 pb-1 -mb-1 scrollbar-none">
                  {PLATFORMS.map((p) => (
                    <FilterPill
                      key={p}
                      label={p}
                      active={selectedPlatform === p}
                      onClick={() => setSelectedPlatform(p)}
                      ocid={`browse.filter-platform-${p.toLowerCase()}`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label
                  htmlFor="max-price-input"
                  className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block"
                >
                  Max Price ($)
                </label>
                <input
                  id="max-price-input"
                  type="number"
                  placeholder="e.g. 50000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  data-ocid="browse.filter-max-price"
                  className="w-full px-3 py-2 rounded-xl border border-border/50 bg-background/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-border/30">
              <button
                type="button"
                onClick={() => setShowAdvanced((v) => !v)}
                className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                data-ocid="browse.advanced_toggle"
              >
                {showAdvanced ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
                Advanced Filters
              </button>
            </div>

            {showAdvanced && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                <div>
                  <label
                    htmlFor="filter-seo"
                    className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block"
                  >
                    Min SEO Score:{" "}
                    <span className="text-primary">{minSeo}</span>
                  </label>
                  <input
                    id="filter-seo"
                    type="range"
                    min={0}
                    max={100}
                    value={minSeo}
                    onChange={(e) => setMinSeo(Number(e.target.value))}
                    data-ocid="browse.filter-seo"
                    className="w-full accent-primary"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
                    Monetization
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {MONETIZATION_TYPES.map((m) => (
                      <FilterPill
                        key={m}
                        label={m}
                        active={selectedMonetization.includes(m)}
                        onClick={() => toggleMonetization(m)}
                        ocid={`browse.filter-monetization-${m.toLowerCase()}`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="filter-age"
                    className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block"
                  >
                    Min Age:{" "}
                    <span className="text-primary">{minAge} years</span>
                  </label>
                  <input
                    id="filter-age"
                    type="range"
                    min={0}
                    max={20}
                    value={minAge}
                    onChange={(e) => setMinAge(Number(e.target.value))}
                    data-ocid="browse.filter-age"
                    className="w-full accent-primary"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
                    Country Traffic
                  </p>
                  <Select
                    value={countryTraffic}
                    onValueChange={setCountryTraffic}
                  >
                    <SelectTrigger
                      className="w-full text-sm border-border/50 bg-background/50"
                      aria-label="Country Traffic"
                      data-ocid="browse.filter-country"
                    >
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any</SelectItem>
                      {COUNTRIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
                    CMS Type
                  </p>
                  <Select value={cmsType} onValueChange={setCmsType}>
                    <SelectTrigger
                      className="w-full text-sm border-border/50 bg-background/50"
                      aria-label="CMS Type"
                      data-ocid="browse.filter-cms"
                    >
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any</SelectItem>
                      {CMS_TYPES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {hasActiveFilters && (
              <div className="flex items-center justify-between pt-2 border-t border-border/30">
                <p className="text-xs text-muted-foreground">Filters active</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-colors"
                  data-ocid="browse.clear_filters"
                >
                  <X className="w-3 h-3" /> Clear all
                </button>
              </div>
            )}
          </div>
        )}

        {!isLoading && (
          <p
            className="text-sm text-muted-foreground mb-5"
            data-ocid="browse.results_count"
          >
            {filtered.length === 0
              ? "No websites found"
              : `${filtered.length} website${filtered.length !== 1 ? "s" : ""} found`}
            {modeFilter !== "all" && (
              <span className="ml-1 text-xs">
                (
                {modeFilter === "auction"
                  ? "auctions only"
                  : "fixed price only"}
                )
              </span>
            )}
            {nlQuery && ` for "${nlQuery}"`}
          </p>
        )}

        {/* AI Recommendations */}
        {hasActiveNl && recommendations && recommendations.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shadow-[0_0_10px_oklch(0.78_0.24_195/0.3)]">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <h2 className="font-display font-semibold text-lg gradient-text">
                AI Recommendations
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {recommendations.slice(0, 5).map((rec) => (
                <RecommendationCard
                  key={rec.id.toString()}
                  listing={rec}
                  reason="AI Recommended"
                />
              ))}
            </div>
          </div>
        )}

        {/* Listings Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => (
              <SkeletonCard key={k} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-24 text-center"
            data-ocid="browse.empty_state"
          >
            <div className="w-20 h-20 rounded-3xl glass-card flex items-center justify-center mb-5 shadow-[0_0_30px_oklch(0.7_0.22_270/0.2)] animate-float">
              <Search className="w-10 h-10 text-primary/50" />
            </div>
            <h3 className="font-display font-bold text-xl gradient-text mb-2">
              No websites found
            </h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Try adjusting your filters or search terms.
            </p>
            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                variant="outline"
                className="gap-2 border-primary/40 hover:border-primary/70 hover:bg-primary/10 hover:text-primary"
                data-ocid="browse.empty_state.clear_button"
              >
                <X className="w-4 h-4" /> Clear Filters
              </Button>
            )}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            data-ocid="browse.listing_grid"
          >
            {filtered.map((listing) => (
              <ListingCard
                key={listing.id.toString()}
                listing={listing}
                auction={auctionMap.get(listing.id.toString())}
                isVerified={false}
                index={0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
