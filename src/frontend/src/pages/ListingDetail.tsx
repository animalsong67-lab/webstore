import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  BarChart3,
  Bot,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  ExternalLink,
  Gavel,
  Globe,
  Mail,
  MessageSquare,
  Shield,
  ShieldAlert,
  Star,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { Listing, SellerReview, TrustScore } from "../types";
import { TrustTier } from "../types";

// ─── Niche Colors ─────────────────────────────────────────────────────

const NICHE_COLORS: Record<string, string> = {
  eCommerce: "bg-primary/10 text-primary border-primary/20",
  Blog: "bg-accent/10 text-accent-foreground border-accent/20",
  SaaS: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  News: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Tools: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Other: "bg-muted text-muted-foreground border-border",
};

// ─── Related Card ───────────────────────────────────────────────────────

function RelatedCard({ listing }: { listing: Listing }) {
  const fmt = (n: bigint) => `${Number(n).toLocaleString("en-US")}`;
  const nicheClass = NICHE_COLORS[listing.niche] ?? NICHE_COLORS.Other;
  return (
    <Link
      to="/listing/$id"
      params={{ id: listing.id.toString() }}
      className="group block h-full flex-shrink-0 w-72 sm:w-80"
      data-ocid={`related.item.${listing.id}`}
    >
      <div className="glass-card glass-card-hover rounded-2xl overflow-hidden h-full transition-smooth">
        <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary/60" />
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1 flex-1">
              {listing.title}
            </h4>
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
          </div>
          <div className="flex flex-wrap gap-1">
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${nicheClass}`}
            >
              {listing.niche}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-border text-muted-foreground bg-muted/40">
              {listing.platform}
            </span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {listing.description}
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-border/40 mt-auto">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                Asking Price
              </p>
              <p className="font-display font-bold text-base text-primary">
                {fmt(listing.askingPrice)}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              {fmt(listing.monthlyRevenue)}/mo
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

import { Textarea } from "@/components/ui/textarea";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ListingStatus } from "../backend.d";
import { PerformanceReportCard } from "../components/PerformanceReportCard";
import { WishlistButton } from "../components/wishlist/WishlistButton";
import {
  useAuctionState,
  useGetReviews,
  useListing,
  useListings,
  usePlaceBid,
  useSellerTrustScore,
  useSetAutoBid,
  useSubmitReview,
  useVerifiedBadge,
} from "../hooks/useListings";
import type { AuctionStateView } from "../hooks/useListings";

// ─── Verified Revenue Badge ───────────────────────────────────────────────

function VerifiedRevenueBadge({ listingId }: { listingId: bigint }) {
  const { data: badge, isLoading } = useVerifiedBadge(listingId);

  if (isLoading) return <Skeleton className="h-10 w-72 rounded-lg" />;
  if (!badge) return null;

  const trendIcon =
    badge.trend === "up" ? (
      <TrendingUp className="w-4 h-4 text-success" />
    ) : badge.trend === "down" ? (
      <TrendingDown className="w-4 h-4 text-destructive" />
    ) : (
      <span className="w-4 h-4 inline-flex items-center justify-center text-muted-foreground text-xs">
        →
      </span>
    );

  const trendLabel =
    badge.trend === "up"
      ? "Growing"
      : badge.trend === "down"
        ? "Declining"
        : "Stable";

  return (
    <div
      className="flex flex-wrap items-center gap-3 p-3 rounded-xl glass-card border border-success/30"
      style={{ boxShadow: "0 0 8px oklch(0.72 0.2 142 / 0.25)" }}
      data-ocid="listing-detail.verified_revenue_badge"
    >
      <div className="flex items-center gap-1.5">
        <CheckCircle2 className="w-5 h-5 text-success" />
        <span className="text-sm font-semibold text-foreground">
          Verified Revenue
        </span>
      </div>
      <Separator orientation="vertical" className="h-4 hidden sm:block" />
      <div className="flex items-center gap-1 text-sm">
        <DollarSign className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-muted-foreground">Monthly:</span>
        <span className="font-semibold text-foreground">
          ${badge.monthlyRevenue.toLocaleString("en-US")}
        </span>
      </div>
      <Separator orientation="vertical" className="h-4 hidden sm:block" />
      <div className="flex items-center gap-1 text-sm">
        <Users className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-muted-foreground">Traffic:</span>
        <span className="font-semibold text-foreground">
          {Number(badge.trafficVolume).toLocaleString("en-US")}
        </span>
      </div>
      <Separator orientation="vertical" className="h-4 hidden sm:block" />
      <div className="flex items-center gap-1 text-sm">
        {trendIcon}
        <span className="font-medium text-foreground">{trendLabel}</span>
      </div>
    </div>
  );
}

// ─── Auction Countdown Timer ──────────────────────────────────────────────

// ─── Animated Counter ───────────────────────────────────────────────

function useCountUp(target: number, duration = 1200) {
  const [countVal, setCountVal] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const inView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!inView || target === 0) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - (1 - progress) ** 3;
      setCountVal(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return { value: countVal, ref: countRef };
}

function useCountdown(timeRemainingSeconds: number, ended: boolean) {
  const [display, setDisplay] = useState(timeRemainingSeconds);
  const ref = useRef(timeRemainingSeconds);

  useEffect(() => {
    ref.current = timeRemainingSeconds;
    setDisplay(timeRemainingSeconds);
  }, [timeRemainingSeconds]);

  useEffect(() => {
    if (ended || ref.current <= 0) return;
    const id = setInterval(() => {
      ref.current = Math.max(0, ref.current - 1);
      setDisplay(ref.current);
    }, 1000);
    return () => clearInterval(id);
  }, [ended]);

  return display;
}

function formatCountdown(secs: number): string {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return [
    String(h).padStart(2, "0"),
    String(m).padStart(2, "0"),
    String(s).padStart(2, "0"),
  ].join(":");
}

// ─── Auction Panel ────────────────────────────────────────────────────────

function AuctionPanel({
  auction,
  listingId,
}: {
  auction: AuctionStateView;
  listingId: bigint;
}) {
  const placeBid = usePlaceBid();
  const setAutoBid = useSetAutoBid();

  const timeRemaining = useCountdown(
    Number(auction.timeRemainingSeconds),
    auction.ended,
  );
  const isUrgent = !auction.ended && timeRemaining < 300;
  const isVeryUrgent = !auction.ended && timeRemaining < 60;

  const currentBid = auction.highestBidAmount[0];
  const minBid =
    currentBid !== undefined ? currentBid + 1n : auction.startingBid;

  const [bidAmount, setBidAmount] = useState("");
  const [bidError, setBidError] = useState("");
  const [bidSuccess, setBidSuccess] = useState(false);
  const [maxAmount, setMaxAmount] = useState("");
  const [stepAmount, setStepAmount] = useState("");
  const [autoBidError, setAutoBidError] = useState("");
  const [autoBidSuccess, setAutoBidSuccess] = useState(false);

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBidError("");
    setBidSuccess(false);
    const amount = Number(bidAmount);
    if (!bidAmount || Number.isNaN(amount) || amount <= 0) {
      setBidError("Please enter a valid bid amount.");
      return;
    }
    const amountBig = BigInt(Math.floor(amount));
    if (amountBig < auction.startingBid) {
      setBidError(
        `Bid must be at least ${Number(auction.startingBid).toLocaleString("en-US")} (starting bid).`,
      );
      return;
    }
    if (currentBid !== undefined && amountBig <= currentBid) {
      setBidError(
        `Bid must be higher than current bid of ${Number(currentBid).toLocaleString("en-US")}.`,
      );
      return;
    }
    placeBid.mutate(
      { listingId, amount: amountBig },
      {
        onSuccess: (result) => {
          const r = result as Record<string, unknown>;
          if ("success" in r) {
            setBidSuccess(true);
            setBidAmount("");
          } else if ("belowCurrentBid" in r || "belowStartingBid" in r) {
            setBidError("Your bid is too low. Please raise it.");
          } else if ("auctionEnded" in r) {
            setBidError("This auction has already ended.");
          } else {
            setBidError("Bid failed. Please try again.");
          }
        },
        onError: () => setBidError("Network error. Please try again."),
      },
    );
  };

  const handleAutoBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAutoBidError("");
    setAutoBidSuccess(false);
    const max = Number(maxAmount);
    const step = Number(stepAmount);
    if (!maxAmount || Number.isNaN(max) || max <= 0) {
      setAutoBidError("Please enter a valid maximum amount.");
      return;
    }
    if (!stepAmount || Number.isNaN(step) || step <= 0) {
      setAutoBidError("Please enter a valid step amount.");
      return;
    }
    setAutoBid.mutate(
      {
        listingId,
        maxAmount: BigInt(Math.floor(max)),
        stepAmount: BigInt(Math.floor(step)),
      },
      {
        onSuccess: () => {
          setAutoBidSuccess(true);
          setMaxAmount("");
          setStepAmount("");
        },
        onError: () =>
          setAutoBidError("Failed to set auto-bid. Please try again."),
      },
    );
  };

  const fmtCurrency = (n: bigint) => `${Number(n).toLocaleString("en-US")}`;

  return (
    <div
      className="glass-card rounded-2xl border-primary/40 overflow-hidden"
      data-ocid="listing-detail.auction_panel"
    >
      <div className="h-0.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />
      <div className="p-5">
        {/* Title + Timer */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Gavel className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-foreground">
              Live Auction
            </span>
          </div>
          <div className="flex items-center gap-2">
            {auction.reserveMet && (
              <Badge className="bg-success/15 text-success border-success/30 text-xs">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Reserve Met
              </Badge>
            )}
            {!auction.reserveMet && !auction.ended && (
              <Badge
                variant="outline"
                className="text-xs text-muted-foreground"
              >
                Reserve Not Met
              </Badge>
            )}
            {auction.ended ? (
              <Badge className="bg-muted text-muted-foreground border-border text-xs">
                Ended
              </Badge>
            ) : (
              <span
                className={[
                  "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold border",
                  isVeryUrgent
                    ? "bg-destructive/20 text-destructive border-destructive/40 animate-pulse shadow-[0_0_12px_oklch(0.65_0.22_22/0.5)]"
                    : isUrgent
                      ? "bg-amber-500/20 text-amber-400 border-amber-500/40"
                      : "bg-accent/10 text-accent border-accent/30 shadow-[0_0_8px_oklch(0.78_0.24_195/0.3)]",
                ].join(" ")}
                data-ocid="listing-detail.auction_timer"
              >
                <Clock className="w-3 h-3" />
                {formatCountdown(timeRemaining)}
              </span>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">
              Current Bid
            </p>
            <p
              className="text-xl font-bold font-display text-primary"
              data-ocid="listing-detail.auction_current_bid"
            >
              {currentBid !== undefined
                ? fmtCurrency(currentBid)
                : fmtCurrency(auction.startingBid)}
            </p>
            {currentBid === undefined && (
              <p className="text-[10px] text-muted-foreground">Starting bid</p>
            )}
          </div>
          <div className="p-3 rounded-xl bg-muted/40 border border-border/40 text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">
              Bids
            </p>
            <p
              className="text-xl font-bold font-display text-foreground"
              data-ocid="listing-detail.auction_bid_count"
            >
              {Number(auction.bidCount)}
            </p>
          </div>
          {auction.highestBidder[0] && (
            <div className="p-3 rounded-xl bg-muted/40 border border-border/40 text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">
                Top Bidder
              </p>
              <p className="text-sm font-semibold text-foreground truncate">
                {auction.highestBidder[0].slice(0, 10)}…
              </p>
            </div>
          )}
        </div>

        {auction.ended ? (
          <div
            className={[
              "flex items-start gap-3 p-4 rounded-xl border",
              auction.winner[0]
                ? "bg-success/5 border-success/25"
                : "bg-muted/40 border-border",
            ].join(" ")}
            data-ocid="listing-detail.auction_ended_state"
          >
            {auction.winner[0] ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">
                    Auction Ended — Winner!
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Won by:{" "}
                    <span className="font-medium text-foreground">
                      {auction.winner[0].slice(0, 20)}…
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Auction Ended</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Reserve not met — the auction closed without a winner.
                  </p>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <div
              className="p-4 glass-card rounded-xl space-y-3 mb-3"
              data-ocid="listing-detail.bid_form"
            >
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                <Gavel className="w-4 h-4 text-primary" />
                Place a Bid
              </h4>
              <p className="text-xs text-muted-foreground">
                Minimum bid:{" "}
                <span className="font-medium text-foreground">
                  {fmtCurrency(minBid)}
                </span>
              </p>
              <form onSubmit={handleBidSubmit} className="flex gap-2">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                    $
                  </span>
                  <Input
                    type="number"
                    min={Number(minBid)}
                    step="1"
                    value={bidAmount}
                    onChange={(e) => {
                      setBidAmount(e.target.value);
                      setBidError("");
                    }}
                    placeholder={Number(minBid).toString()}
                    className="pl-7 bg-secondary/40 border-border/50 focus:border-primary focus:ring-primary/30"
                    data-ocid="listing-detail.bid_input"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={placeBid.isPending}
                  className="glow-primary font-semibold px-5"
                  data-ocid="listing-detail.bid_submit_button"
                >
                  {placeBid.isPending ? (
                    <span className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Bidding…
                    </span>
                  ) : (
                    "Bid Now"
                  )}
                </Button>
              </form>
              {bidError && (
                <p
                  className="text-sm text-destructive flex items-center gap-1"
                  data-ocid="listing-detail.bid_error_state"
                >
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  {bidError}
                </p>
              )}
              {bidSuccess && (
                <p
                  className="text-sm text-success flex items-center gap-1"
                  data-ocid="listing-detail.bid_success_state"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Bid placed successfully!
                </p>
              )}
            </div>

            <div
              className="p-4 rounded-xl border border-accent/25 bg-accent/5 space-y-3"
              data-ocid="listing-detail.auto_bid_section"
            >
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-accent" />
                Auto-Bid
                <Badge
                  variant="outline"
                  className="text-[10px] ml-1 border-accent/40 text-accent"
                >
                  Smart
                </Badge>
              </h4>
              <p className="text-xs text-muted-foreground">
                Set your maximum price and we'll automatically bid for you in
                increments.
              </p>
              <form onSubmit={handleAutoBidSubmit} className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor="auto-bid-max"
                      className="text-[11px] text-muted-foreground mb-1 block"
                    >
                      Max Amount ($)
                    </label>
                    <Input
                      id="auto-bid-max"
                      type="number"
                      min={Number(minBid)}
                      step="1"
                      value={maxAmount}
                      onChange={(e) => {
                        setMaxAmount(e.target.value);
                        setAutoBidError("");
                      }}
                      placeholder="e.g. 5000"
                      className="bg-secondary/40 border-border/50"
                      data-ocid="listing-detail.auto_bid_max_input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="auto-bid-step"
                      className="text-[11px] text-muted-foreground mb-1 block"
                    >
                      Step Amount ($)
                    </label>
                    <Input
                      id="auto-bid-step"
                      type="number"
                      min="1"
                      step="1"
                      value={stepAmount}
                      onChange={(e) => {
                        setStepAmount(e.target.value);
                        setAutoBidError("");
                      }}
                      placeholder="e.g. 50"
                      className="bg-secondary/40 border-border/50"
                      data-ocid="listing-detail.auto_bid_step_input"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full border-accent/40 text-accent hover:bg-accent/10"
                  disabled={setAutoBid.isPending}
                  data-ocid="listing-detail.auto_bid_submit_button"
                >
                  {setAutoBid.isPending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Setting Auto-Bid…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      Enable Auto-Bid
                    </span>
                  )}
                </Button>
              </form>
              {autoBidError && (
                <p
                  className="text-sm text-destructive flex items-center gap-1"
                  data-ocid="listing-detail.auto_bid_error_state"
                >
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  {autoBidError}
                </p>
              )}
              {autoBidSuccess && (
                <p
                  className="text-sm text-success flex items-center gap-1"
                  data-ocid="listing-detail.auto_bid_success_state"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Auto-bid enabled!
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  numericValue,
  sub,
  prefix = "",
  suffix = "",
  accent = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  numericValue?: number;
  sub?: string;
  prefix?: string;
  suffix?: string;
  accent?: boolean;
}) {
  const { value: animated, ref } = useCountUp(numericValue ?? 0);
  const displayVal =
    numericValue !== undefined && numericValue > 0
      ? `${prefix}${animated.toLocaleString()}${suffix}`
      : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={[
        "glass-card rounded-2xl p-4 flex flex-col gap-2 transition-smooth hover:scale-[1.02] cursor-default",
        accent
          ? "hover:shadow-[0_0_16px_oklch(0.78_0.24_195/0.3)]"
          : "hover:glow-primary",
      ].join(" ")}
      data-ocid="listing-detail.stat_card"
    >
      <div
        className={[
          "flex items-center gap-2",
          accent ? "text-accent" : "text-primary",
        ].join(" ")}
      >
        <Icon className="w-4 h-4" />
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>
      <p
        className={[
          "text-2xl font-bold font-display",
          accent ? "text-accent" : "text-foreground",
        ].join(" ")}
      >
        {displayVal}
      </p>
      {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-display-${i + 1}`}
          className={`w-4 h-4 ${
            i < rating
              ? "text-yellow-500 fill-yellow-500"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

function TrustScoreSection({ sellerId }: { sellerId: string }) {
  const { data: trust, isLoading } = useSellerTrustScore(sellerId);

  if (isLoading) {
    return (
      <div
        className="glass-card rounded-2xl p-6 space-y-4"
        data-ocid="listing-detail.trust_score.loading_state"
      >
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-4 w-full" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={`skeleton-card-${i + 1}`}
              className="h-16 rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!trust) return null;

  const score = Number(trust.score);
  const tier = trust.tier;
  const tierConfig: Record<
    TrustTier,
    { label: string; color: string; bg: string; border: string }
  > = {
    [TrustTier.trusted]: {
      label: "Trusted",
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/30",
    },
    [TrustTier.established]: {
      label: "Established",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
    },
    [TrustTier.new_]: {
      label: "New",
      color: "text-muted-foreground",
      bg: "bg-muted/60",
      border: "border-border",
    },
    [TrustTier.caution]: {
      label: "Caution",
      color: "text-destructive",
      bg: "bg-destructive/10",
      border: "border-destructive/30",
    },
  };
  const config = tierConfig[tier] ?? tierConfig[TrustTier.new_];
  const progressColor =
    score >= 80
      ? "bg-success"
      : score >= 60
        ? "bg-amber-500"
        : score >= 40
          ? "bg-yellow-500"
          : "bg-destructive";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl overflow-hidden"
      data-ocid="listing-detail.trust_score.card"
    >
      <div className="h-0.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-foreground">
              Seller Trust Score
            </span>
          </div>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${config.bg} ${config.color} ${config.border}`}
          >
            {config.label}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-5">
          <div
            className={`text-center w-16 h-16 rounded-2xl flex flex-col items-center justify-center ${config.bg} border ${config.border}`}
          >
            <p className={`text-2xl font-bold font-display ${config.color}`}>
              {score}
            </p>
            <p className="text-[9px] text-muted-foreground">/ 100</p>
          </div>
          <div className="flex-1">
            <div className="h-3 bg-muted/60 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full rounded-full ${progressColor}`}
              />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            {
              icon: BarChart3,
              label: "Transactions",
              value: Number(trust.transactionCount).toString(),
              iconCls: "text-muted-foreground",
              valCls: "text-foreground",
            },
            {
              icon: Star,
              label: "Avg Rating",
              value: Number(trust.avgRating).toFixed(1),
              iconCls: "text-yellow-400",
              valCls: "text-foreground",
            },
            {
              icon: CheckCircle2,
              label: "Completion",
              value: `${Number(trust.completionRate)}%`,
              iconCls: "text-success",
              valCls: "text-foreground",
            },
            {
              icon: Clock,
              label: "Response Time",
              value: `${Number(trust.responseTimeHours)}h`,
              iconCls: "text-muted-foreground",
              valCls: "text-foreground",
            },
            {
              icon: trust.isVerified ? CheckCircle2 : ShieldAlert,
              label: "Verification",
              value: trust.isVerified ? "Verified" : "Unverified",
              iconCls: trust.isVerified
                ? "text-success"
                : "text-muted-foreground",
              valCls: trust.isVerified
                ? "text-success"
                : "text-muted-foreground",
            },
            {
              icon: trust.hasRedFlags ? AlertTriangle : CheckCircle2,
              label: "Red Flags",
              value: trust.hasRedFlags ? "Yes" : "None",
              iconCls: trust.hasRedFlags ? "text-amber-400" : "text-success",
              valCls: trust.hasRedFlags ? "text-amber-400" : "text-success",
            },
          ].map(({ icon: Ic, label, value: val, iconCls, valCls }) => (
            <div
              key={label}
              className="flex items-center gap-2 p-3 bg-muted/30 rounded-xl border border-border/40"
            >
              <Ic className={`w-4 h-4 flex-shrink-0 ${iconCls}`} />
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className={`font-semibold text-sm ${valCls}`}>{val}</p>
              </div>
            </div>
          ))}
        </div>

        {Number(trust.transactionCount) === 0 && (
          <div className="flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl mt-4">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <p className="text-sm text-amber-400">
              New seller — no reviews yet. Proceed with standard due diligence.
            </p>
          </div>
        )}
        {trust.hasRedFlags && (
          <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-xl mt-4">
            <ShieldAlert className="w-4 h-4 text-destructive shrink-0" />
            <p className="text-sm text-destructive">
              This seller has red flag indicators. Review carefully before
              purchasing.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ValuationBadge({ price }: { price: bigint }) {
  const min = Math.round(Number(price) * 0.8);
  const max = Math.round(Number(price) * 1.2);
  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <div
      className="inline-flex items-center gap-2.5 px-4 py-2 glass-card rounded-xl border-primary/30"
      style={{ boxShadow: "0 0 10px oklch(0.7 0.22 270 / 0.25)" }}
      data-ocid="listing-detail.valuation_badge"
    >
      <TrendingUp className="w-4 h-4 text-primary" />
      <span className="text-sm">
        <span className="text-muted-foreground">AI Estimated Value:</span>{" "}
        <span className="font-bold gradient-text">
          {fmt(min)} – {fmt(max)}
        </span>
      </span>
    </div>
  );
}

function ReviewsSection({ listingId }: { listingId: string }) {
  const { data: reviews, isLoading } = useGetReviews(listingId);
  const [isOpen, setIsOpen] = useState(false);
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const submitReview = useSubmitReview();

  const inputCls =
    "w-full px-3.5 py-3 rounded-xl border border-border/50 bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth backdrop-blur-sm";

  if (isLoading) {
    return (
      <div
        className="glass-card rounded-2xl p-6 space-y-3"
        data-ocid="listing-detail.reviews.loading_state"
      >
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !comment.trim()) return;
    submitReview.mutate(
      {
        listingId,
        sellerId: "seller",
        reviewerName: reviewerName.trim(),
        rating: BigInt(rating),
        comment: comment.trim(),
      },
      {
        onSuccess: () => {
          setReviewerName("");
          setRating(5);
          setComment("");
          setIsOpen(false);
        },
      },
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl overflow-hidden"
      data-ocid="listing-detail.reviews.card"
    >
      <div className="h-0.5 w-full bg-gradient-to-r from-accent via-primary to-accent" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-accent" />
            </div>
            <span className="font-display font-bold text-foreground">
              Reviews ({reviews?.length ?? 0})
            </span>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="border-border/50 hover:border-primary/50 hover:text-primary"
            data-ocid="listing-detail.write_review.toggle"
          >
            {isOpen ? "Cancel" : "Write a Review"}
          </Button>
        </div>

        {isOpen && (
          <form
            onSubmit={handleSubmit}
            className="space-y-3 p-4 bg-muted/20 rounded-xl border border-border/50 mb-4"
            data-ocid="listing-detail.review_form"
          >
            <div>
              <label
                htmlFor="reviewer-name"
                className="text-sm font-medium text-foreground block mb-1"
              >
                Your Name
              </label>
              <input
                id="reviewer-name"
                type="text"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                className={inputCls}
                placeholder="Enter your name"
                required
                data-ocid="listing-detail.review.name_input"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground block mb-1">
                Rating
              </p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    key={`star-rating-${i + 1}`}
                    type="button"
                    onClick={() => setRating(i + 1)}
                    className="p-0.5 transition-transform hover:scale-110"
                    data-ocid={`listing-detail.review.star.${i + 1}`}
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="review-comment"
                className="text-sm font-medium text-foreground block mb-1"
              >
                Comment
              </label>
              <Textarea
                id="review-comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience with this seller..."
                rows={3}
                required
                className="bg-secondary/40 border-border/50 focus:border-primary"
                data-ocid="listing-detail.review.comment_input"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                type="submit"
                size="sm"
                disabled={submitReview.isPending}
                className="glow-primary"
                data-ocid="listing-detail.review.submit_button"
              >
                {submitReview.isPending ? "Submitting..." : "Submit Review"}
              </Button>
              {submitReview.isError && (
                <p className="text-sm text-destructive">
                  {submitReview.error?.message || "Failed to submit"}
                </p>
              )}
            </div>
          </form>
        )}

        {reviews && reviews.length > 0 ? (
          <div className="space-y-3">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 bg-muted/20 rounded-xl border border-border/40"
                data-ocid={`listing-detail.review.item.${idx + 1}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/30 flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">
                        {review.reviewerName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        {review.reviewerName}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {new Date(
                          Number(review.timestamp) / 1_000_000,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <StarRating rating={Number(review.rating)} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.comment}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-8 text-muted-foreground"
            data-ocid="listing-detail.reviews.empty_state"
          >
            <MessageSquare className="w-10 h-10 mx-auto mb-2 opacity-40" />
            <p className="text-sm">No reviews yet. Be the first to review!</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ListingDetail() {
  const { id } = useParams({ from: "/listing/$id" });
  const listingId = BigInt(id);
  const { data: listing, isLoading, error } = useListing(listingId);
  const { data: allListings } = useListings();
  const { data: auctionState } = useAuctionState(
    listingId,
    !isLoading && !!listing,
  );

  const relatedListings =
    listing && allListings
      ? allListings
          .filter((l) => l.niche === listing.niche && l.id !== listingId)
          .slice(0, 3)
      : [];

  const statusColors: Record<ListingStatus, string> = {
    [ListingStatus.active]: "bg-success/15 text-success border-success/30",
    [ListingStatus.pending]:
      "bg-yellow-100/80 text-yellow-700 border-yellow-300/50",
    [ListingStatus.sold]: "bg-muted text-muted-foreground border-border",
  };

  if (isLoading) {
    return (
      <div
        className="max-w-4xl mx-auto px-4 py-12 space-y-6"
        data-ocid="listing-detail.loading_state"
      >
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full rounded-2xl" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["skel-1", "skel-2", "skel-3", "skel-4"].map((key) => (
            <Skeleton key={key} className="h-24 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div
        className="max-w-4xl mx-auto px-4 py-24 text-center"
        data-ocid="listing-detail.error_state"
      >
        <Globe className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-2xl font-bold font-display text-foreground mb-2">
          Listing Not Found
        </h2>
        <p className="text-muted-foreground mb-6">
          This listing may have been removed or the ID is invalid.
        </p>
        <Button asChild data-ocid="listing-detail.back_button">
          <Link to="/browse">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse
          </Link>
        </Button>
      </div>
    );
  }

  const formatCurrency = (n: bigint) => `$${Number(n).toLocaleString("en-US")}`;
  const formatNum = (n: bigint) => Number(n).toLocaleString("en-US");
  const listedDate = new Date(Number(listing.listedDate) / 1_000_000);
  const daysAgo = Math.floor((Date.now() - listedDate.getTime()) / 86_400_000);

  const nicheClass = NICHE_COLORS[listing.niche] ?? NICHE_COLORS.Other;
  const revenueNum = Number(listing.monthlyRevenue);
  const trafficNum = Number(listing.monthlyTraffic);
  const priceNum = Number(listing.askingPrice);
  const revenueMultiple = revenueNum > 0 ? priceNum / (revenueNum * 12) : 0;

  return (
    <div className="bg-background min-h-screen" data-ocid="listing-detail.page">
      {/* ── Gradient Hero ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        data-ocid="listing-detail-hero"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.08 0.015 270) 0%, oklch(0.12 0.04 270) 50%, oklch(0.10 0.03 195) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.22 270), transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <Link
            to="/browse"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors group"
            data-ocid="listing-detail.back_link"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />{" "}
            Back to Browse
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge
                  className={`capitalize text-xs border ${statusColors[listing.status as ListingStatus] ?? "bg-muted text-muted-foreground"}`}
                >
                  {listing.status}
                </Badge>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${nicheClass}`}
                >
                  {listing.niche}
                </span>
                <Badge variant="outline" className="capitalize text-xs">
                  {listing.platform}
                </Badge>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold font-display text-foreground mb-2 break-words">
                {listing.title}
              </h1>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
                <Calendar className="w-4 h-4" />
                <span>
                  Listed {daysAgo === 0 ? "today" : `${daysAgo}d ago`}
                </span>
                <span className="mx-1">·</span>
                <Globe className="w-4 h-4" />
                <a
                  href={listing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1 truncate max-w-xs"
                  data-ocid="listing-detail.url_link"
                >
                  {listing.url}
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 shrink-0">
              <div className="text-right">
                <p className="text-4xl font-bold font-display gradient-text">
                  {formatCurrency(listing.askingPrice)}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Asking price
                </p>
              </div>
              <WishlistButton
                listingId={listingId}
                data-ocid="listing-detail.wishlist_button"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content */}
      <section
        className="max-w-5xl mx-auto px-4 sm:px-6 py-8"
        data-ocid="listing-detail-section"
      >
        {/* Stat Cards with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={DollarSign}
            label="Monthly Revenue"
            value={formatCurrency(listing.monthlyRevenue)}
            numericValue={revenueNum}
            prefix="$"
            sub="avg/month"
          />
          <StatCard
            icon={Users}
            label="Monthly Traffic"
            value={formatNum(listing.monthlyTraffic)}
            numericValue={trafficNum}
            sub="unique visitors"
            accent
          />
          <StatCard
            icon={BarChart3}
            label="Revenue Multiple"
            value={
              listing.monthlyRevenue > 0n
                ? `${revenueMultiple.toFixed(1)}x`
                : "N/A"
            }
            sub="annual revenue"
          />
          <StatCard
            icon={TrendingUp}
            label="Price/Visitor"
            value={
              listing.monthlyTraffic > 0n
                ? `${(priceNum / trafficNum).toFixed(2)}`
                : "N/A"
            }
            sub="per monthly visitor"
            accent
          />
        </div>

        <section
          className="mb-6"
          data-ocid="listing-detail.verified_revenue_section"
        >
          <VerifiedRevenueBadge listingId={listingId} />
        </section>

        {/* Description + CTA sidebar */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card rounded-2xl overflow-hidden"
            data-ocid="listing-detail.description_card"
          >
            <div className="h-0.5 w-full bg-gradient-to-r from-primary to-accent" />
            <div className="p-5">
              <h3 className="font-display font-bold text-foreground mb-3">
                About This Website
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {listing.description || "No description provided."}
              </p>
              <Separator className="my-4 bg-border/40" />
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { label: "Seller", value: listing.sellerName },
                  { label: "Platform", value: listing.platform },
                  { label: "Niche", value: listing.niche },
                  { label: "Status", value: listing.status },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="text-muted-foreground text-xs uppercase tracking-wider">
                      {label}
                    </span>
                    <p className="font-medium text-foreground capitalize mt-0.5">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {auctionState ? (
              <AuctionPanel auction={auctionState} listingId={listingId} />
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden"
                data-ocid="listing-detail.contact_card"
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-display font-bold text-foreground text-sm">
                      Interested in buying?
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Contact our team to start the acquisition process.
                  </p>
                  <Button
                    asChild
                    className="w-full glow-primary font-semibold"
                    data-ocid="listing-detail.contact_button"
                  >
                    <Link to="/contact">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-border/50 hover:border-accent/50 hover:text-accent"
                    data-ocid="listing-detail.browse_button"
                  >
                    <Link to="/browse">Browse More</Link>
                  </Button>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-4"
              data-ocid="listing-detail.seller_card"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {listing.sellerName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-sm truncate">
                    {listing.sellerName}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-[11px] mt-0.5 border-primary/40 text-primary"
                  >
                    Verified Seller
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <section className="mb-5" data-ocid="listing-detail.valuation_section">
          <ValuationBadge price={listing.askingPrice} />
        </section>

        <section className="mb-6" data-ocid="listing-detail.trust_section">
          <TrustScoreSection sellerId={listing.sellerName ?? "seller"} />
        </section>

        <section
          className="mb-6"
          data-ocid="listing-detail.performance_section"
        >
          <PerformanceReportCard listingId={listingId.toString()} />
        </section>

        <section className="mb-8" data-ocid="listing-detail.reviews_section">
          <ReviewsSection listingId={listingId.toString()} />
        </section>

        {relatedListings.length > 0 && (
          <section
            className="mt-4 pt-8 border-t border-border/30"
            data-ocid="listing-detail.related_section"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <h2 className="font-display font-bold text-xl text-foreground">
                Similar in{" "}
                <span className="gradient-text">{listing.niche}</span>
              </h2>
            </motion.div>
            <div
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              {relatedListings.map((rel, i) => (
                <motion.div
                  key={rel.id.toString()}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="snap-start"
                >
                  <RelatedCard listing={rel} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
