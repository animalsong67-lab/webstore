import { c as createLucideIcon, h as useInternetIdentity, e as useActor, r as reactExports, j as jsxRuntimeExports, B as Button, L as Link, a as Skeleton, f as createActor } from "./index-BMZp6_Em.js";
import { B as Badge } from "./badge-DjffIZJ0.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BMyulF-h.js";
import { T as Textarea } from "./textarea-DM5SngKy.js";
import { u as ue } from "./index-2ADlaxLC.js";
import { x as useAdminListPendingVerifications, y as useAdminApproveVerification, z as useAdminRejectVerification } from "./useListings-vMM7OeqO.js";
import { S as ShieldCheck } from "./shield-check-GL8POgqZ.js";
import { R as RefreshCw } from "./refresh-cw-DOq_3Ad_.js";
import { A as ArrowLeft } from "./arrow-left-DB54YpoY.js";
import { T as TriangleAlert } from "./triangle-alert-fRM0DjG-.js";
import { C as CircleCheck } from "./circle-check-B3HDhYVu.js";
import { U as User } from "./user-CKY0xFcs.js";
import { G as Globe } from "./globe-Dz_3xYco.js";
import { D as DollarSign } from "./dollar-sign-DGhSPEC0.js";
import { T as TrendingUp } from "./trending-up-CwCDh1V9.js";
import { C as Calendar } from "./calendar-DuBoxHrl.js";
import { L as Lock } from "./lock-D83XvjGg.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode);
function MetaBit({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-medium flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3" }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: value })
  ] });
}
function AccessDenied() {
  const { login, loginStatus } = useInternetIdentity();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center min-h-[60vh] px-4 text-center",
      "data-ocid": "admin-revenue.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-3xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-10 h-10 text-destructive" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground mb-2", children: "Admin Access Required" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-sm", children: "This page is restricted to platform administrators. Log in with your admin Internet Identity to continue." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "lg",
            onClick: () => login(),
            disabled: loginStatus === "logging-in",
            className: "gap-2",
            "data-ocid": "admin-revenue.login_button",
            children: loginStatus === "logging-in" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
              "Logging in…"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
              "Login with Internet Identity"
            ] })
          }
        )
      ]
    }
  );
}
function AdminRevenueDashboard() {
  const { identity } = useInternetIdentity();
  const { actor } = useActor(createActor);
  const {
    data: requests = [],
    isLoading,
    refetch
  } = useAdminListPendingVerifications();
  const approve = useAdminApproveVerification();
  const reject = useAdminRejectVerification();
  const [rejectState, setRejectState] = reactExports.useState(null);
  const [approvedIds, setApprovedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [rejectedIds, setRejectedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  if (!identity || !actor) return /* @__PURE__ */ jsxRuntimeExports.jsx(AccessDenied, {});
  const pending = requests.filter(
    (r) => !approvedIds.has(r.id.toString()) && !rejectedIds.has(r.id.toString())
  );
  const approved = requests.filter((r) => approvedIds.has(r.id.toString()));
  const rejected = requests.filter((r) => rejectedIds.has(r.id.toString()));
  const handleApprove = async (id) => {
    try {
      await approve.mutateAsync(id);
      setApprovedIds((prev) => new Set(prev).add(id.toString()));
      ue.success("Verification approved — revenue badge is now visible.");
    } catch (_e) {
      ue.error("Approval failed. Please try again.");
    }
  };
  const handleReject = async () => {
    if (!rejectState || !rejectState.reason.trim()) {
      ue.error("Please provide a rejection reason.");
      return;
    }
    try {
      await reject.mutateAsync({
        requestId: rejectState.requestId,
        reason: rejectState.reason.trim()
      });
      setRejectedIds(
        (prev) => new Set(prev).add(rejectState.requestId.toString())
      );
      setRejectState(null);
      ue.success("Verification rejected.");
    } catch (_e) {
      ue.error("Rejection failed. Please try again.");
    }
  };
  const formatDate = (ts) => new Date(Number(ts) / 1e6).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "admin-revenue.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "relative overflow-hidden",
        style: {
          background: "radial-gradient(ellipse 80% 70% at 15% 40%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 60%, oklch(0.78 0.24 195 / 0.25) 0%, transparent 55%), oklch(0.08 0.015 270)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Admin Panel" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-foreground", children: "Revenue Verification Queue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Review and approve seller-submitted revenue claims before the verified badge appears publicly." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => refetch(),
                  className: "gap-1.5",
                  "data-ocid": "admin-revenue.refresh_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" }),
                    "Refresh"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "ghost",
                  size: "sm",
                  className: "gap-1.5",
                  "data-ocid": "admin-revenue.back_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/seller-dashboard", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
                    "Dashboard"
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mt-6", children: [
            {
              label: "Pending",
              count: pending.length,
              color: "text-amber-600"
            },
            {
              label: "Approved",
              count: approved.length,
              color: "text-emerald-600"
            },
            {
              label: "Rejected",
              count: rejected.length,
              color: "text-destructive"
            }
          ].map(({ label, count, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "glass-card flex flex-col gap-1 p-3 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-2xl font-bold font-display ${color}`, children: count })
              ]
            },
            label
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "admin-revenue.pending_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-semibold font-display text-foreground flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-500" }),
          "Pending Review",
          pending.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 text-xs px-1.5 py-0 bg-amber-100 text-amber-700 border-amber-200", children: pending.length })
        ] }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "space-y-3",
            "data-ocid": "admin-revenue.pending.loading_state",
            children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 rounded-xl" }, k))
          }
        ) : pending.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-12 border-2 border-dashed border-border rounded-2xl bg-muted/10",
            "data-ocid": "admin-revenue.pending.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-emerald-500 mx-auto mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "All caught up!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "No pending verification requests at this time." })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "admin-revenue.pending_list", children: pending.map((req, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "overflow-hidden hover:shadow-md transition-all duration-200 hover:border-primary/30",
            "data-ocid": `admin-revenue.pending.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-amber-50/60 border-b border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-amber-600 shrink-0" }),
                  "Request #",
                  req.id.toString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "w-fit text-xs bg-amber-100 text-amber-700 border-amber-200", children: "Awaiting Review" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MetaBit,
                    {
                      icon: User,
                      label: "Seller ID",
                      value: req.sellerId
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MetaBit,
                    {
                      icon: Globe,
                      label: "Listing ID",
                      value: `#${req.listingId.toString()}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MetaBit,
                    {
                      icon: DollarSign,
                      label: "Claimed Revenue/mo",
                      value: `$${Number(req.claimedMonthlyRevenue).toLocaleString()}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MetaBit,
                    {
                      icon: TrendingUp,
                      label: "Claimed Traffic/mo",
                      value: Number(
                        req.claimedTrafficVolume
                      ).toLocaleString()
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
                  "Submitted ",
                  formatDate(req.submittedAt)
                ] }),
                (rejectState == null ? void 0 : rejectState.requestId) === req.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "space-y-2 p-3 bg-destructive/5 border border-destructive/20 rounded-lg",
                    "data-ocid": `admin-revenue.reject-reason.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: "Rejection reason (required)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          rows: 2,
                          placeholder: "e.g. Revenue figures do not match provided screenshots…",
                          value: rejectState.reason,
                          onChange: (e) => setRejectState(
                            (prev) => prev ? { ...prev, reason: e.target.value } : null
                          ),
                          className: "text-sm resize-none",
                          "data-ocid": `admin-revenue.reject-reason-input.${i + 1}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            variant: "outline",
                            size: "sm",
                            onClick: () => setRejectState(null),
                            "data-ocid": `admin-revenue.reject-cancel.${i + 1}`,
                            children: "Cancel"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            type: "button",
                            size: "sm",
                            variant: "destructive",
                            onClick: handleReject,
                            disabled: reject.isPending,
                            "data-ocid": `admin-revenue.reject-confirm.${i + 1}`,
                            children: [
                              reject.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5 mr-1" }),
                              "Confirm Reject"
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end border-t border-border pt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => setRejectState(
                        (rejectState == null ? void 0 : rejectState.requestId) === req.id ? null : { requestId: req.id, reason: "" }
                      ),
                      className: "gap-1.5 border-destructive/40 text-destructive hover:bg-destructive/10",
                      "data-ocid": `admin-revenue.reject_button.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
                        "Reject"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      onClick: () => handleApprove(req.id),
                      disabled: approve.isPending,
                      className: "gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white",
                      "data-ocid": `admin-revenue.approve_button.${i + 1}`,
                      children: [
                        approve.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                        "Approve"
                      ]
                    }
                  )
                ] })
              ] })
            ]
          },
          req.id.toString()
        )) })
      ] }),
      approved.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "admin-revenue.approved_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-semibold font-display text-foreground flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-500" }),
          "Approved This Session",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 text-xs px-1.5 py-0 bg-emerald-100 text-emerald-700 border-emerald-200", children: approved.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "admin-revenue.approved_list", children: approved.map((req, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "border-emerald-200 bg-emerald-50/40 dark:bg-emerald-950/10 dark:border-emerald-900/30",
            "data-ocid": `admin-revenue.approved.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-emerald-500 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                    "Request #",
                    req.id.toString(),
                    " — Seller: ",
                    req.sellerId
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "Listing #",
                    req.listingId.toString(),
                    " · $",
                    Number(req.claimedMonthlyRevenue).toLocaleString(),
                    "/mo revenue"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "shrink-0 text-xs bg-emerald-100 text-emerald-700 border-emerald-200", children: "Approved" })
            ] })
          },
          req.id.toString()
        )) })
      ] }),
      rejected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "admin-revenue.rejected_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-semibold font-display text-foreground flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-destructive" }),
          "Rejected This Session",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 text-xs px-1.5 py-0 bg-red-100 text-red-700 border-red-200", children: rejected.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "admin-revenue.rejected_list", children: rejected.map((req, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "border-red-200 bg-red-50/40 dark:bg-red-950/10 dark:border-red-900/30",
            "data-ocid": `admin-revenue.rejected.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-destructive shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                    "Request #",
                    req.id.toString(),
                    " — Seller: ",
                    req.sellerId
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "Listing #",
                    req.listingId.toString(),
                    " · $",
                    Number(req.claimedMonthlyRevenue).toLocaleString(),
                    "/mo revenue"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "shrink-0 text-xs bg-red-100 text-red-700 border-red-200", children: "Rejected" })
            ] })
          },
          req.id.toString()
        )) })
      ] })
    ] })
  ] });
}
export {
  AdminRevenueDashboard as default
};
