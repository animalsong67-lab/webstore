import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Minus,
  RefreshCw,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { CredentialSource } from "../backend.d";
import type { CredentialToken } from "../backend.d";
import type { Listing } from "../backend.d";
import {
  useRefreshVerificationMetrics,
  useSubmitVerificationRequest,
  useVerificationStatus,
  useVerifiedBadge,
} from "../hooks/useListings";

type Provider = {
  key: CredentialSource;
  label: string;
  icon: string;
  placeholder: string;
};

const PROVIDERS: Provider[] = [
  {
    key: CredentialSource.googleAnalytics,
    label: "Google Analytics",
    icon: "📊",
    placeholder: "GA4 API key or OAuth token",
  },
  {
    key: CredentialSource.googleAdSense,
    label: "Google AdSense",
    icon: "💰",
    placeholder: "AdSense API access token",
  },
  {
    key: CredentialSource.stripe,
    label: "Stripe",
    icon: "💳",
    placeholder: "Stripe restricted API key",
  },
  {
    key: CredentialSource.paypal,
    label: "PayPal",
    icon: "🅿️",
    placeholder: "PayPal API access token",
  },
];

function VerificationStatusBadge({
  status,
}: {
  status:
    | { unverified: null }
    | { pending: null }
    | { verified: null }
    | { rejected: string }
    | null;
}) {
  if (!status || "unverified" in status) {
    return (
      <Badge variant="outline" className="border-border text-muted-foreground">
        Unverified
      </Badge>
    );
  }
  if ("pending" in status) {
    return (
      <Badge className="bg-amber-50 text-amber-700 border border-amber-200 font-medium">
        ⏳ Pending Review
      </Badge>
    );
  }
  if ("verified" in status) {
    return (
      <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
        <CheckCircle2 className="w-3 h-3 mr-1" />
        Verified
      </Badge>
    );
  }
  if ("rejected" in status) {
    return (
      <div className="flex flex-col gap-1">
        <Badge className="bg-red-50 text-red-700 border border-red-200 font-medium">
          <AlertCircle className="w-3 h-3 mr-1" />
          Rejected
        </Badge>
        {status.rejected && (
          <p className="text-xs text-red-600">{status.rejected}</p>
        )}
      </div>
    );
  }
  return null;
}

function VerifiedBadgePreview({ listingId }: { listingId: bigint }) {
  const { data: badge, isLoading } = useVerifiedBadge(listingId);
  if (isLoading) return <Skeleton className="h-20 rounded-xl" />;
  if (!badge) return null;

  const TrendIcon =
    badge.trend === "up"
      ? TrendingUp
      : badge.trend === "down"
        ? TrendingDown
        : Minus;
  const trendColor =
    badge.trend === "up"
      ? "text-emerald-600"
      : badge.trend === "down"
        ? "text-red-500"
        : "text-muted-foreground";

  return (
    <div
      className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4"
      data-ocid="revenue-verification.verified_badge_preview"
    >
      <div className="flex items-center gap-2 mb-3">
        <ShieldCheck className="w-5 h-5 text-emerald-600" />
        <span className="font-semibold text-emerald-800 text-sm">
          Verified Badge Preview
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-background rounded-lg p-2.5 border border-emerald-100">
          <p className="text-xs text-muted-foreground mb-0.5">
            Monthly Revenue
          </p>
          <p className="font-bold text-foreground">
            ${badge.monthlyRevenue.toLocaleString()}
          </p>
        </div>
        <div className="bg-background rounded-lg p-2.5 border border-emerald-100">
          <p className="text-xs text-muted-foreground mb-0.5">
            Monthly Traffic
          </p>
          <p className="font-bold text-foreground">
            {Number(badge.trafficVolume).toLocaleString()}
          </p>
        </div>
        <div className="bg-background rounded-lg p-2.5 border border-emerald-100">
          <p className="text-xs text-muted-foreground mb-0.5">Trend</p>
          <div className={`flex items-center gap-1 font-bold ${trendColor}`}>
            <TrendIcon className="w-4 h-4" />
            <span className="capitalize">
              {badge.trend === "up"
                ? "Up"
                : badge.trend === "down"
                  ? "Down"
                  : "Flat"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListingVerificationPanel({ listing }: { listing: Listing }) {
  const listingId = listing.id as bigint;
  const { data: status, isLoading: loadingStatus } =
    useVerificationStatus(listingId);
  const submitVerification = useSubmitVerificationRequest();
  const refreshMetrics = useRefreshVerificationMetrics();

  const [tokens, setTokens] = useState<
    Partial<Record<CredentialSource, string>>
  >({});
  const [claimedRevenue, setClaimedRevenue] = useState("");
  const [claimedTraffic, setClaimedTraffic] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const credentialTokens: CredentialToken[] = PROVIDERS.filter((p) =>
      tokens[p.key]?.trim(),
    ).map(
      (p) =>
        ({
          source: p.key,
          token: tokens[p.key]!.trim(),
        }) satisfies CredentialToken,
    );

    if (credentialTokens.length === 0) {
      toast.error("Please enter at least one provider token.");
      return;
    }
    if (!claimedRevenue || !claimedTraffic) {
      toast.error("Please fill in claimed revenue and traffic.");
      return;
    }

    try {
      await submitVerification.mutateAsync({
        listingId,
        claimedMonthlyRevenue: Number.parseFloat(claimedRevenue),
        claimedTrafficVolume: BigInt(claimedTraffic),
        credentialTokens,
      });
      toast.success(
        "Verification request submitted! Admin will review it shortly.",
      );
    } catch (_e) {
      toast.error("Failed to submit verification request. Please try again.");
    }
  };

  const handleRefresh = async () => {
    try {
      await refreshMetrics.mutateAsync(listingId);
      toast.success("Verification metrics refreshed.");
    } catch (_e) {
      toast.error("Failed to refresh metrics.");
    }
  };

  const isVerified = status && "verified" in status;
  const isPending = status && "pending" in status;

  return (
    <div className="space-y-4">
      {/* Status row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-muted/20 rounded-xl border border-border">
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground mb-1">
            {listing.title}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {listing.url}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {loadingStatus ? (
            <Skeleton className="h-7 w-24" />
          ) : (
            <VerificationStatusBadge status={status ?? null} />
          )}
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={handleRefresh}
            disabled={refreshMetrics.isPending}
            className="gap-1.5 h-7 text-xs"
            data-ocid="revenue-verification.refresh_button"
          >
            <RefreshCw
              className={`w-3 h-3 ${refreshMetrics.isPending ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
        </div>
      </div>

      {/* Verified badge preview */}
      {isVerified && <VerifiedBadgePreview listingId={listingId} />}

      {/* Submission form — hide when pending or verified */}
      {!isPending && !isVerified && (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Claimed metrics */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Claimed Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="claimed-revenue"
                  className="text-xs font-medium"
                >
                  Monthly Revenue (USD)
                </Label>
                <Input
                  id="claimed-revenue"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="e.g. 2500"
                  value={claimedRevenue}
                  onChange={(e) => setClaimedRevenue(e.target.value)}
                  data-ocid="revenue-verification.claimed_revenue_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="claimed-traffic"
                  className="text-xs font-medium"
                >
                  Monthly Traffic (visits)
                </Label>
                <Input
                  id="claimed-traffic"
                  type="number"
                  min="0"
                  placeholder="e.g. 15000"
                  value={claimedTraffic}
                  onChange={(e) => setClaimedTraffic(e.target.value)}
                  data-ocid="revenue-verification.claimed_traffic_input"
                />
              </div>
            </CardContent>
          </Card>

          {/* Provider tokens */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Provider Credentials
                <span className="text-xs font-normal text-muted-foreground">
                  (enter at least one)
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {PROVIDERS.map((provider) => (
                <div key={provider.key} className="space-y-1.5">
                  <Label
                    htmlFor={`token-${provider.key}`}
                    className="text-xs font-medium flex items-center gap-1.5"
                  >
                    <span>{provider.icon}</span>
                    {provider.label}
                  </Label>
                  <Input
                    id={`token-${provider.key}`}
                    type="password"
                    placeholder={provider.placeholder}
                    value={tokens[provider.key] ?? ""}
                    onChange={(e) =>
                      setTokens(
                        (prev) =>
                          ({
                            ...prev,
                            [provider.key]: e.target.value,
                          }) as Partial<Record<CredentialSource, string>>,
                      )
                    }
                    autoComplete="off"
                    data-ocid={`revenue-verification.${provider.key}_token_input`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Button
            type="submit"
            className="w-full gap-2"
            disabled={submitVerification.isPending}
            data-ocid="revenue-verification.submit_button"
          >
            {submitVerification.isPending ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                Submit for Verification
              </>
            )}
          </Button>
        </form>
      )}

      {isPending && (
        <div
          className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800"
          data-ocid="revenue-verification.pending_state"
        >
          <p className="font-semibold mb-1">⏳ Verification Pending</p>
          <p>
            Your credentials have been submitted. Admin will review and approve
            your verification request. This usually takes 1–2 business days.
          </p>
        </div>
      )}
    </div>
  );
}

export function RevenueVerificationTab({
  listings,
  isLoading,
}: { listings: Listing[]; isLoading: boolean }) {
  const [selectedListingId, setSelectedListingId] = useState<string | null>(
    null,
  );

  const selectedListing =
    listings.find((l) => l.id.toString() === selectedListingId) ??
    listings[0] ??
    null;

  if (isLoading) {
    return (
      <div className="space-y-4" data-ocid="revenue-verification.loading_state">
        <Skeleton className="h-10 rounded-xl" />
        <Skeleton className="h-40 rounded-xl" />
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div
        className="text-center py-16 border-2 border-dashed border-border rounded-2xl bg-muted/10"
        data-ocid="revenue-verification.empty_state"
      >
        <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-7 h-7 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold font-display text-foreground mb-1">
          No listings to verify
        </h3>
        <p className="text-sm text-muted-foreground">
          Create a listing first to submit revenue verification.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5" data-ocid="revenue-verification.section">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-foreground">
            Revenue Verification
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Connect provider accounts to earn a verified revenue badge. Admin
            approval required before the badge shows publicly.
          </p>
        </div>
        <div className="sm:w-72">
          <Select
            value={selectedListing?.id.toString() ?? ""}
            onValueChange={(v) => setSelectedListingId(v)}
          >
            <SelectTrigger
              data-ocid="revenue-verification.listing_select"
              className="h-9"
            >
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground mr-1" />
              <SelectValue placeholder="Select a listing" />
            </SelectTrigger>
            <SelectContent>
              {listings.map((l) => (
                <SelectItem key={l.id.toString()} value={l.id.toString()}>
                  <span className="truncate">{l.title}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedListing && (
        <ListingVerificationPanel listing={selectedListing} />
      )}
    </div>
  );
}
