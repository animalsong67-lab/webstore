import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  DollarSign,
  Globe,
  Lock,
  Mail,
  RefreshCw,
  ShieldCheck,
  Star,
  TrendingUp,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { RevenueVerificationTab } from "../components/RevenueVerificationTab";
import {
  useCustomOrders,
  useSellerListings,
  useUpdateOrderStatus,
} from "../hooks/useListings";
import type { CustomOrderStatus } from "../types";

const STATUS_OPTIONS: { value: CustomOrderStatus; label: string }[] = [
  { value: "pending", label: "⏳ Pending" },
  { value: "in_progress", label: "🔄 In Progress" },
  { value: "completed", label: "✅ Completed" },
  { value: "cancelled", label: "❌ Rejected" },
];

type ListingStatus = "active" | "pending" | "sold";

const listingStatusBadge: Record<ListingStatus, string> = {
  active:
    "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.35)] shadow-[0_0_10px_oklch(0.72_0.2_142/0.2)]",
  pending:
    "bg-[oklch(0.72_0.18_88/0.15)] text-[oklch(0.72_0.18_88)] border-[oklch(0.72_0.18_88/0.35)]",
  sold: "bg-[oklch(0.78_0.24_195/0.15)] text-[oklch(0.78_0.24_195)] border-[oklch(0.78_0.24_195/0.35)]",
};

const orderStatusConfig: Record<
  string,
  { badge: string; dot: string; glow: string; label: string }
> = {
  pending: {
    badge:
      "bg-[oklch(0.78_0.24_195/0.15)] text-[oklch(0.78_0.24_195)] border-[oklch(0.78_0.24_195/0.4)]",
    dot: "bg-[oklch(0.78_0.24_195)] shadow-[0_0_6px_oklch(0.78_0.24_195)] animate-pulse",
    glow: "shadow-[0_0_14px_oklch(0.78_0.24_195/0.2)]",
    label: "Pending",
  },
  in_progress: {
    badge: "bg-primary/15 text-primary border-primary/40",
    dot: "bg-primary shadow-[0_0_6px_oklch(0.7_0.22_270)] animate-pulse",
    glow: "shadow-[0_0_14px_oklch(0.7_0.22_270/0.2)]",
    label: "In Progress",
  },
  completed: {
    badge:
      "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.4)]",
    dot: "bg-[oklch(0.72_0.2_142)] shadow-[0_0_6px_oklch(0.72_0.2_142)]",
    glow: "shadow-[0_0_14px_oklch(0.72_0.2_142/0.18)]",
    label: "Completed",
  },
  cancelled: {
    badge: "bg-destructive/15 text-destructive border-destructive/30",
    dot: "bg-destructive",
    glow: "",
    label: "Rejected",
  },
};

function TrustScoreRing({ score }: { score: number }) {
  const [animated, setAnimated] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = () => {
            start += 2;
            setAnimated(Math.min(start, score));
            if (start < score) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [score]);

  const radius = 36;
  const circ = 2 * Math.PI * radius;
  const pct = animated / 100;
  const trustLabel =
    score >= 80
      ? "Trusted"
      : score >= 60
        ? "Established"
        : score >= 40
          ? "Rising"
          : "New";
  const ringColor =
    score >= 80
      ? "oklch(0.72 0.2 142)"
      : score >= 60
        ? "oklch(0.72 0.18 88)"
        : "oklch(0.7 0.22 270)";

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300"
      data-ocid="seller-dashboard.trust_score"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Trust Score
      </p>
      <div className="relative w-24 h-24">
        <svg
          className="w-24 h-24 -rotate-90"
          viewBox="0 0 88 88"
          aria-label="Trust score ring"
          role="img"
        >
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke="oklch(0.16 0.02 270)"
            strokeWidth="6"
          />
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke={ringColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - pct)}
            style={{
              transition: "stroke-dashoffset 0.05s linear",
              filter: `drop-shadow(0 0 6px ${ringColor})`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold font-mono gradient-text">
            {animated}
          </span>
          <span className="text-[10px] text-muted-foreground">/ 100</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <Star
          className="w-3.5 h-3.5 text-[oklch(0.72_0.18_88)]"
          fill="oklch(0.72 0.18 88)"
        />
        <span className="text-sm font-semibold" style={{ color: ringColor }}>
          {trustLabel}
        </span>
      </div>
    </div>
  );
}

function DashboardEmptyState({
  icon,
  title,
  description,
  cta,
  ocid,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: React.ReactNode;
  ocid?: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 text-center glass-card rounded-2xl border-2 border-dashed border-border/40 hover:border-primary/25 transition-all duration-500"
      data-ocid={ocid}
    >
      <div className="w-16 h-16 rounded-2xl glass-card border border-primary/25 flex items-center justify-center mb-4 shadow-[0_0_20px_oklch(0.7_0.22_270/0.15)]">
        {icon}
      </div>
      <p className="font-semibold text-foreground mb-1">{title}</p>
      <p className="text-sm text-muted-foreground max-w-xs mb-6">
        {description}
      </p>
      {cta}
    </div>
  );
}

type SellerListing = {
  id: bigint | string;
  title: string;
  url: string;
  status: string;
  niche: string;
  platform: string;
  askingPrice: bigint | number;
  monthlyRevenue: bigint | number;
};

function SellerListingCard({
  listing,
  index,
}: { listing: SellerListing; index: number }) {
  const statusCls =
    listingStatusBadge[listing.status as ListingStatus] ??
    "bg-muted text-muted-foreground border-border";
  return (
    <div
      className="glass-card rounded-2xl p-5 border border-border/50 group cursor-pointer transition-all duration-300 hover:border-primary/35 hover:shadow-[0_0_28px_oklch(0.7_0.22_270/0.2)] hover:-translate-y-1"
      data-ocid={`seller-dashboard.listing.${index + 1}`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:shadow-[0_0_14px_oklch(0.7_0.22_270/0.3)] transition-all duration-300">
          <Globe className="w-5 h-5 text-primary" />
        </div>
        <Badge className={`text-xs border capitalize ${statusCls}`}>
          {listing.status}
        </Badge>
      </div>
      <p className="font-semibold text-foreground line-clamp-1 mb-1">
        {listing.title}
      </p>
      <p className="text-xs text-muted-foreground truncate mb-3">
        {listing.url}
      </p>
      <div className="flex gap-2 mb-4">
        <Badge
          variant="outline"
          className="text-xs capitalize border-border/50"
        >
          {listing.niche}
        </Badge>
        <Badge variant="outline" className="text-xs border-border/50">
          {listing.platform}
        </Badge>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-border/30">
        <div>
          <p className="text-lg font-bold font-mono gradient-text">
            ₹{Number(listing.askingPrice).toLocaleString()}
          </p>
          <p className="text-xs text-muted-foreground">
            ₹{Number(listing.monthlyRevenue).toLocaleString()}/mo
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs text-[oklch(0.72_0.2_142)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>View</span>
        </div>
      </div>
    </div>
  );
}

type SellerOrder = {
  id: bigint | string;
  websiteType: string;
  contactName: string;
  contactEmail: string;
  status: string;
  budget: string;
  timeline: string;
  submittedAt: bigint | number;
  requirements?: string | null;
};

function SellerOrderCard({
  order,
  index,
  updatingId,
  onStatusUpdate,
}: {
  order: SellerOrder;
  index: number;
  updatingId: string | null;
  onStatusUpdate: (id: string, status: string) => void;
}) {
  const cfg = orderStatusConfig[order.status] ?? {
    badge: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground",
    glow: "",
    label: order.status,
  };
  return (
    <div
      className={`glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/25 transition-all duration-300 ${cfg.glow}`}
      data-ocid={`seller-dashboard.order.${index + 1}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-accent" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground">
              {order.websiteType} Website
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {order.contactName}
              </span>
              <span className="opacity-40">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {order.contactEmail}
              </span>
            </div>
          </div>
        </div>
        <Badge
          className={`shrink-0 text-xs border font-medium flex items-center gap-1.5 ${cfg.badge}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
          {cfg.label}
        </Badge>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Budget", val: order.budget },
          { label: "Timeline", val: order.timeline },
          {
            label: "Submitted",
            val: new Date(
              Number(order.submittedAt) / 1_000_000,
            ).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
          },
        ].map(({ label, val }) => (
          <div
            key={label}
            className="bg-muted/20 rounded-xl p-3 border border-border/30"
          >
            <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
            <p className="text-sm font-semibold text-foreground">{val}</p>
          </div>
        ))}
      </div>
      {order.requirements && (
        <p className="text-xs text-muted-foreground bg-primary/5 border border-primary/15 rounded-xl p-3 line-clamp-2 mb-4">
          {order.requirements}
        </p>
      )}
      <div className="flex items-center gap-3 pt-3 border-t border-border/30">
        <span className="text-xs text-muted-foreground">Update:</span>
        <Select
          defaultValue={order.status}
          onValueChange={(val) => onStatusUpdate(order.id.toString(), val)}
          disabled={updatingId === order.id.toString()}
        >
          <SelectTrigger
            className="w-44 h-8 text-xs bg-muted/30 border-border/50"
            data-ocid={`seller-dashboard.order-status.${index + 1}`}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {STATUS_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value} className="text-xs">
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {updatingId === order.id.toString() && (
          <div
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
            data-ocid={`seller-dashboard.order-updating.${index + 1}`}
          >
            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Saving…
          </div>
        )}
      </div>
    </div>
  );
}

function GlassStatCard({
  icon: Icon,
  label,
  value,
  accent,
  glowColor,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  accent?: string;
  glowColor?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="glass-card p-5 rounded-2xl flex flex-col gap-3 border border-border/50 group cursor-default transition-all duration-300"
      style={
        hovered
          ? {
              boxShadow: `0 0 28px ${glowColor ?? "oklch(0.7 0.22 270 / 0.2)"}`,
              transform: "scale(1.02) translateY(-2px)",
            }
          : {}
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center ${accent ?? "bg-primary/15 text-primary"} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <p className="text-3xl font-bold font-mono gradient-text tracking-tight">
        {value}
      </p>
    </div>
  );
}

function LoginRequired() {
  const { login, loginStatus } = useInternetIdentity();
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center"
      data-ocid="seller-dashboard.empty_state"
    >
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-3xl glass-card border border-primary/30 flex items-center justify-center mx-auto shadow-[0_0_40px_oklch(0.7_0.22_270/0.3)]">
          <Lock className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute inset-0 rounded-3xl animate-glow-pulse opacity-40 pointer-events-none" />
      </div>
      <h2 className="text-4xl font-bold font-display gradient-text mb-3">
        Seller Dashboard
      </h2>
      <p className="text-muted-foreground mb-2 max-w-sm">
        This area is protected. Log in with Internet Identity to manage your
        listings and custom orders.
      </p>
      <p className="text-xs text-muted-foreground/60 mb-8">
        Internet Identity provides secure, private authentication with no
        passwords.
      </p>
      <Button
        size="lg"
        onClick={() => login()}
        disabled={loginStatus === "logging-in"}
        className="gap-2 bg-primary/90 hover:bg-primary shadow-[0_0_20px_oklch(0.7_0.22_270/0.4)] hover:shadow-[0_0_32px_oklch(0.7_0.22_270/0.6)] transition-all duration-300"
        data-ocid="seller-dashboard.login_button"
      >
        {loginStatus === "logging-in" ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin" />
            Logging in…
          </>
        ) : (
          <>
            <Lock className="w-4 h-4" />
            Login with Internet Identity
          </>
        )}
      </Button>
    </div>
  );
}

export default function SellerDashboard() {
  const { identity } = useInternetIdentity();
  const { data: listings = [], isLoading: loadingListings } =
    useSellerListings();
  const { data: orders = [], isLoading: loadingOrders } = useCustomOrders();
  const updateStatus = useUpdateOrderStatus();
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("listings");

  if (!identity) return <LoginRequired />;

  const totalRevenue = listings.reduce(
    (sum, l) => sum + Number(l.monthlyRevenue),
    0,
  );
  const activeListings = listings.filter((l) => l.status === "active").length;
  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const trustScore = Math.min(
    100,
    40 + activeListings * 10 + (listings.length > 0 ? 20 : 0),
  );

  const handleStatusUpdate = async (orderId: string, status: string) => {
    setUpdatingId(orderId);
    try {
      await updateStatus.mutateAsync({ orderId, status, notes: null });
      toast.success("Order status updated successfully");
    } catch (_e) {
      toast.error("Failed to update order status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div
      className="min-h-screen bg-background"
      data-ocid="seller-dashboard.page"
    >
      {/* Animated Gradient Hero Header */}
      <section className="relative overflow-hidden pb-2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-[oklch(0.75_0.2_300/0.08)] to-accent/15 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_0%,oklch(0.7_0.22_270/0.18),transparent)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle,oklch(0.78_0.24_195/0.12),transparent_70%)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_12px_oklch(0.7_0.22_270/0.3)]">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Seller Hub
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display gradient-text mb-2">
                Seller Dashboard
              </h1>
              <p className="text-muted-foreground text-sm">
                Manage listings, orders & revenue verification
              </p>
            </div>
            <div className="flex items-center gap-3">
              {pendingOrders > 0 && (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[oklch(0.78_0.24_195)] bg-[oklch(0.78_0.24_195/0.1)] border border-[oklch(0.78_0.24_195/0.35)] rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-[oklch(0.78_0.24_195)] animate-pulse shadow-[0_0_6px_oklch(0.78_0.24_195)]" />
                  {pendingOrders} new orders
                </div>
              )}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-1.5 border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_12px_oklch(0.7_0.22_270/0.3)] transition-all duration-300"
                data-ocid="seller-dashboard.admin_revenue_link"
              >
                <Link to="/admin/revenue-verification">
                  <ShieldCheck className="w-3.5 h-3.5" /> Admin
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="gap-1.5 bg-primary/90 hover:bg-primary shadow-[0_0_16px_oklch(0.7_0.22_270/0.35)] hover:shadow-[0_0_28px_oklch(0.7_0.22_270/0.55)] transition-all duration-300"
                data-ocid="seller-dashboard.new_listing_button"
              >
                <Link to="/sell">
                  <TrendingUp className="w-3.5 h-3.5" /> New Listing
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <GlassStatCard
              icon={Globe}
              label="Active Listings"
              value={activeListings}
              accent="bg-primary/15 text-primary"
              glowColor="oklch(0.7 0.22 270 / 0.22)"
            />
            <GlassStatCard
              icon={DollarSign}
              label="Monthly Revenue"
              value={`₹${totalRevenue.toLocaleString()}`}
              accent="bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)]"
              glowColor="oklch(0.72 0.2 142 / 0.22)"
            />
            <GlassStatCard
              icon={ClipboardList}
              label="Pending Orders"
              value={pendingOrders}
              accent="bg-[oklch(0.78_0.24_195/0.15)] text-[oklch(0.78_0.24_195)]"
              glowColor="oklch(0.78 0.24 195 / 0.22)"
            />
            <GlassStatCard
              icon={BarChart3}
              label="Total Listings"
              value={listings.length}
              accent="bg-[oklch(0.75_0.2_300/0.15)] text-[oklch(0.75_0.2_300)]"
              glowColor="oklch(0.75 0.2 300 / 0.22)"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-48 shrink-0">
            <TrustScoreRing score={trustScore} />
          </div>
          <div className="flex-1 min-w-0">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList
                className="w-full grid grid-cols-3 mb-8 h-auto glass-card border border-border/50 p-1 rounded-2xl gap-1"
                data-ocid="seller-dashboard.tabs"
              >
                <TabsTrigger
                  value="listings"
                  className="gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_14px_oklch(0.7_0.22_270/0.35)] transition-all duration-300"
                  data-ocid="seller-dashboard.listings_tab"
                >
                  <BarChart3 className="w-3.5 h-3.5" /> My Listings
                  {listings.length > 0 && (
                    <Badge className="ml-1 px-1.5 py-0 h-4 text-[10px] bg-primary/20 text-primary border-0">
                      {listings.length}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="orders"
                  className="gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:shadow-[0_0_14px_oklch(0.78_0.24_195/0.35)] transition-all duration-300"
                  data-ocid="seller-dashboard.orders_tab"
                >
                  <ClipboardList className="w-3.5 h-3.5" /> Custom Orders
                  {pendingOrders > 0 && (
                    <Badge className="ml-1 px-1.5 py-0 h-4 text-[10px] bg-[oklch(0.78_0.24_195/0.25)] text-[oklch(0.78_0.24_195)] border-0 animate-glow-pulse">
                      {pendingOrders}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="verification"
                  className="gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-[oklch(0.72_0.2_142/0.2)] data-[state=active]:text-[oklch(0.72_0.2_142)] data-[state=active]:shadow-[0_0_14px_oklch(0.72_0.2_142/0.35)] transition-all duration-300"
                  data-ocid="seller-dashboard.verification_tab"
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Revenue
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="listings"
                data-ocid="seller-dashboard.listings_section"
              >
                {loadingListings ? (
                  <div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    data-ocid="seller-dashboard.listings.loading_state"
                  >
                    {[1, 2, 3].map((k) => (
                      <Skeleton key={k} className="h-52 rounded-2xl" />
                    ))}
                  </div>
                ) : listings.length === 0 ? (
                  <DashboardEmptyState
                    icon={<Globe className="w-8 h-8 text-primary" />}
                    title="No listings yet"
                    description="Submit your first website to start selling on WebStore!"
                    cta={
                      <Button
                        asChild
                        size="sm"
                        className="bg-primary/90 hover:bg-primary shadow-[0_0_16px_oklch(0.7_0.22_270/0.3)] transition-all"
                        data-ocid="seller-dashboard.listings.add_button"
                      >
                        <Link to="/sell">List Your First Website</Link>
                      </Button>
                    }
                    ocid="seller-dashboard.listings.empty_state"
                  />
                ) : (
                  <div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    data-ocid="seller-dashboard.listings_list"
                  >
                    {listings.map((listing, i) => (
                      <SellerListingCard
                        key={listing.id.toString()}
                        listing={listing}
                        index={i}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent
                value="orders"
                data-ocid="seller-dashboard.orders_section"
              >
                {loadingOrders ? (
                  <div
                    className="space-y-3"
                    data-ocid="seller-dashboard.orders.loading_state"
                  >
                    {[1, 2, 3].map((k) => (
                      <Skeleton key={k} className="h-32 rounded-2xl" />
                    ))}
                  </div>
                ) : orders.length === 0 ? (
                  <DashboardEmptyState
                    icon={<ClipboardList className="w-8 h-8 text-accent" />}
                    title="No custom orders yet"
                    description="Custom website orders from buyers will appear here once submitted."
                    ocid="seller-dashboard.orders.empty_state"
                  />
                ) : (
                  <div
                    className="space-y-4"
                    data-ocid="seller-dashboard.orders_list"
                  >
                    {orders.map((order, i) => (
                      <SellerOrderCard
                        key={order.id.toString()}
                        order={order}
                        index={i}
                        updatingId={updatingId}
                        onStatusUpdate={handleStatusUpdate}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent
                value="verification"
                data-ocid="seller-dashboard.verification_section"
              >
                <RevenueVerificationTab
                  listings={listings}
                  isLoading={loadingListings}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
