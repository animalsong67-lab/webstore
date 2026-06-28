import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  DollarSign,
  Globe,
  Lock,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  User,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import {
  useAdminApproveVerification,
  useAdminListPendingVerifications,
  useAdminRejectVerification,
} from "../hooks/useListings";

// ── Types ────────────────────────────────────────────────────────────────────

type RejectState = {
  requestId: bigint;
  reason: string;
};

// ── Sub-components ───────────────────────────────────────────────────────────

function MetaBit({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
        <Icon className="w-3 h-3" />
        {label}
      </span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}

function AccessDenied() {
  const { login, loginStatus } = useInternetIdentity();
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center"
      data-ocid="admin-revenue.empty_state"
    >
      <div className="w-20 h-20 rounded-3xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mx-auto mb-6">
        <Lock className="w-10 h-10 text-destructive" />
      </div>
      <h2 className="text-2xl font-bold font-display text-foreground mb-2">
        Admin Access Required
      </h2>
      <p className="text-muted-foreground mb-8 max-w-sm">
        This page is restricted to platform administrators. Log in with your
        admin Internet Identity to continue.
      </p>
      <Button
        size="lg"
        onClick={() => login()}
        disabled={loginStatus === "logging-in"}
        className="gap-2"
        data-ocid="admin-revenue.login_button"
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

// ── Main page ────────────────────────────────────────────────────────────────

export default function AdminRevenueDashboard() {
  const { identity } = useInternetIdentity();
  const { actor } = useActor(createActor);
  const {
    data: requests = [],
    isLoading,
    refetch,
  } = useAdminListPendingVerifications();
  const approve = useAdminApproveVerification();
  const reject = useAdminRejectVerification();

  const [rejectState, setRejectState] = useState<RejectState | null>(null);
  const [approvedIds, setApprovedIds] = useState<Set<string>>(new Set());
  const [rejectedIds, setRejectedIds] = useState<Set<string>>(new Set());

  if (!identity || !actor) return <AccessDenied />;

  const pending = requests.filter(
    (r) =>
      !approvedIds.has(r.id.toString()) && !rejectedIds.has(r.id.toString()),
  );
  const approved = requests.filter((r) => approvedIds.has(r.id.toString()));
  const rejected = requests.filter((r) => rejectedIds.has(r.id.toString()));

  const handleApprove = async (id: bigint) => {
    try {
      await approve.mutateAsync(id);
      setApprovedIds((prev) => new Set(prev).add(id.toString()));
      toast.success("Verification approved — revenue badge is now visible.");
    } catch (_e) {
      toast.error("Approval failed. Please try again.");
    }
  };

  const handleReject = async () => {
    if (!rejectState || !rejectState.reason.trim()) {
      toast.error("Please provide a rejection reason.");
      return;
    }
    try {
      await reject.mutateAsync({
        requestId: rejectState.requestId,
        reason: rejectState.reason.trim(),
      });
      setRejectedIds((prev) =>
        new Set(prev).add(rejectState.requestId.toString()),
      );
      setRejectState(null);
      toast.success("Verification rejected.");
    } catch (_e) {
      toast.error("Rejection failed. Please try again.");
    }
  };

  const formatDate = (ts: bigint | number) =>
    new Date(Number(ts) / 1_000_000).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="bg-background min-h-screen" data-ocid="admin-revenue.page">
      {/* Page header */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 15% 40%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 50% at 85% 60%, oklch(0.78 0.24 195 / 0.25) 0%, transparent 55%), " +
            "oklch(0.08 0.015 270)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Admin Panel
                </span>
              </div>
              <h1 className="text-2xl font-bold font-display text-foreground">
                Revenue Verification Queue
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Review and approve seller-submitted revenue claims before the
                verified badge appears publicly.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
                className="gap-1.5"
                data-ocid="admin-revenue.refresh_button"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Refresh
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="gap-1.5"
                data-ocid="admin-revenue.back_button"
              >
                <Link to="/seller-dashboard">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Dashboard
                </Link>
              </Button>
            </div>
          </div>

          {/* Summary counts */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              {
                label: "Pending",
                count: pending.length,
                color: "text-amber-600",
              },
              {
                label: "Approved",
                count: approved.length,
                color: "text-emerald-600",
              },
              {
                label: "Rejected",
                count: rejected.length,
                color: "text-destructive",
              },
            ].map(({ label, count, color }) => (
              <div
                key={label}
                className="glass-card flex flex-col gap-1 p-3 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-200"
              >
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {label}
                </span>
                <span className={`text-2xl font-bold font-display ${color}`}>
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* ── Pending Section ── */}
        <section data-ocid="admin-revenue.pending_section">
          <h2 className="text-base font-semibold font-display text-foreground flex items-center gap-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            Pending Review
            {pending.length > 0 && (
              <Badge className="ml-1 text-xs px-1.5 py-0 bg-amber-100 text-amber-700 border-amber-200">
                {pending.length}
              </Badge>
            )}
          </h2>

          {isLoading ? (
            <div
              className="space-y-3"
              data-ocid="admin-revenue.pending.loading_state"
            >
              {[1, 2, 3].map((k) => (
                <Skeleton key={k} className="h-40 rounded-xl" />
              ))}
            </div>
          ) : pending.length === 0 ? (
            <div
              className="text-center py-12 border-2 border-dashed border-border rounded-2xl bg-muted/10"
              data-ocid="admin-revenue.pending.empty_state"
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
              <p className="text-sm font-medium text-foreground">
                All caught up!
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                No pending verification requests at this time.
              </p>
            </div>
          ) : (
            <div className="space-y-4" data-ocid="admin-revenue.pending_list">
              {pending.map((req, i) => (
                <Card
                  key={req.id.toString()}
                  className="overflow-hidden hover:shadow-md transition-all duration-200 hover:border-primary/30"
                  data-ocid={`admin-revenue.pending.item.${i + 1}`}
                >
                  <CardHeader className="pb-3 bg-amber-50/60 border-b border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-sm font-semibold flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                        Request #{req.id.toString()}
                      </CardTitle>
                      <Badge className="w-fit text-xs bg-amber-100 text-amber-700 border-amber-200">
                        Awaiting Review
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <MetaBit
                        icon={User}
                        label="Seller ID"
                        value={req.sellerId}
                      />
                      <MetaBit
                        icon={Globe}
                        label="Listing ID"
                        value={`#${req.listingId.toString()}`}
                      />
                      <MetaBit
                        icon={DollarSign}
                        label="Claimed Revenue/mo"
                        value={`$${Number(req.claimedMonthlyRevenue).toLocaleString()}`}
                      />
                      <MetaBit
                        icon={TrendingUp}
                        label="Claimed Traffic/mo"
                        value={Number(
                          req.claimedTrafficVolume,
                        ).toLocaleString()}
                      />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      Submitted {formatDate(req.submittedAt)}
                    </div>

                    {/* Reject input (shown when this card is being rejected) */}
                    {rejectState?.requestId === req.id && (
                      <div
                        className="space-y-2 p-3 bg-destructive/5 border border-destructive/20 rounded-lg"
                        data-ocid={`admin-revenue.reject-reason.${i + 1}`}
                      >
                        <p className="text-xs font-medium text-destructive">
                          Rejection reason (required)
                        </p>
                        <Textarea
                          rows={2}
                          placeholder="e.g. Revenue figures do not match provided screenshots…"
                          value={rejectState.reason}
                          onChange={(e) =>
                            setRejectState((prev) =>
                              prev ? { ...prev, reason: e.target.value } : null,
                            )
                          }
                          className="text-sm resize-none"
                          data-ocid={`admin-revenue.reject-reason-input.${i + 1}`}
                        />
                        <div className="flex gap-2 justify-end">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setRejectState(null)}
                            data-ocid={`admin-revenue.reject-cancel.${i + 1}`}
                          >
                            Cancel
                          </Button>
                          <Button
                            type="button"
                            size="sm"
                            variant="destructive"
                            onClick={handleReject}
                            disabled={reject.isPending}
                            data-ocid={`admin-revenue.reject-confirm.${i + 1}`}
                          >
                            {reject.isPending ? (
                              <RefreshCw className="w-3.5 h-3.5 animate-spin mr-1" />
                            ) : (
                              <XCircle className="w-3.5 h-3.5 mr-1" />
                            )}
                            Confirm Reject
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-2 justify-end border-t border-border pt-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setRejectState(
                            rejectState?.requestId === req.id
                              ? null
                              : { requestId: req.id, reason: "" },
                          )
                        }
                        className="gap-1.5 border-destructive/40 text-destructive hover:bg-destructive/10"
                        data-ocid={`admin-revenue.reject_button.${i + 1}`}
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        Reject
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleApprove(req.id)}
                        disabled={approve.isPending}
                        className="gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
                        data-ocid={`admin-revenue.approve_button.${i + 1}`}
                      >
                        {approve.isPending ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        )}
                        Approve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* ── Approved Section ── */}
        {approved.length > 0 && (
          <section data-ocid="admin-revenue.approved_section">
            <h2 className="text-base font-semibold font-display text-foreground flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Approved This Session
              <Badge className="ml-1 text-xs px-1.5 py-0 bg-emerald-100 text-emerald-700 border-emerald-200">
                {approved.length}
              </Badge>
            </h2>
            <div className="space-y-3" data-ocid="admin-revenue.approved_list">
              {approved.map((req, i) => (
                <Card
                  key={req.id.toString()}
                  className="border-emerald-200 bg-emerald-50/40 dark:bg-emerald-950/10 dark:border-emerald-900/30"
                  data-ocid={`admin-revenue.approved.item.${i + 1}`}
                >
                  <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          Request #{req.id.toString()} — Seller: {req.sellerId}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Listing #{req.listingId.toString()} · $
                          {Number(req.claimedMonthlyRevenue).toLocaleString()}
                          /mo revenue
                        </p>
                      </div>
                    </div>
                    <Badge className="shrink-0 text-xs bg-emerald-100 text-emerald-700 border-emerald-200">
                      Approved
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* ── Rejected Section ── */}
        {rejected.length > 0 && (
          <section data-ocid="admin-revenue.rejected_section">
            <h2 className="text-base font-semibold font-display text-foreground flex items-center gap-2 mb-4">
              <XCircle className="w-4 h-4 text-destructive" />
              Rejected This Session
              <Badge className="ml-1 text-xs px-1.5 py-0 bg-red-100 text-red-700 border-red-200">
                {rejected.length}
              </Badge>
            </h2>
            <div className="space-y-3" data-ocid="admin-revenue.rejected_list">
              {rejected.map((req, i) => (
                <Card
                  key={req.id.toString()}
                  className="border-red-200 bg-red-50/40 dark:bg-red-950/10 dark:border-red-900/30"
                  data-ocid={`admin-revenue.rejected.item.${i + 1}`}
                >
                  <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <XCircle className="w-5 h-5 text-destructive shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          Request #{req.id.toString()} — Seller: {req.sellerId}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Listing #{req.listingId.toString()} · $
                          {Number(req.claimedMonthlyRevenue).toLocaleString()}
                          /mo revenue
                        </p>
                      </div>
                    </div>
                    <Badge className="shrink-0 text-xs bg-red-100 text-red-700 border-red-200">
                      Rejected
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
