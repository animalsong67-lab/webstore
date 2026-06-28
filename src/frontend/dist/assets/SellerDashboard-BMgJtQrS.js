import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as Skeleton, C as ChevronDown, B as Button, h as useInternetIdentity, L as Link, M as Mail } from "./index-BMZp6_Em.js";
import { B as Badge } from "./badge-DjffIZJ0.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-WtMna1Q8.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-COifNWNB.js";
import { u as ue } from "./index-2ADlaxLC.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BMyulF-h.js";
import { I as Input } from "./index-B_NUkB8x.js";
import { L as Label } from "./label-DeWJEbbv.js";
import { C as CredentialSource } from "./backend.d-Dja6JkNT.js";
import { p as useVerificationStatus, q as useSubmitVerificationRequest, r as useRefreshVerificationMetrics, j as useVerifiedBadge, s as useSellerListings, t as useCustomOrders, v as useUpdateOrderStatus } from "./useListings-vMM7OeqO.js";
import { S as ShieldCheck } from "./shield-check-GL8POgqZ.js";
import { R as RefreshCw } from "./refresh-cw-DOq_3Ad_.js";
import { T as TrendingUp } from "./trending-up-CwCDh1V9.js";
import { C as CircleCheck } from "./circle-check-B3HDhYVu.js";
import { C as CircleAlert } from "./circle-alert-DfBYvdN2.js";
import { T as TrendingDown } from "./trending-down-ByyBZ34s.js";
import { G as Globe } from "./globe-Dz_3xYco.js";
import { D as DollarSign } from "./dollar-sign-DGhSPEC0.js";
import { C as ChartColumn } from "./chart-column-CZsnqYk3.js";
import { L as Lock } from "./lock-D83XvjGg.js";
import { S as Star } from "./star-Czm1eI8s.js";
import { U as User } from "./user-CKY0xFcs.js";
import "./index-C1D-nLKY.js";
import "./index-CTziNQqR.js";
import "./index-CyD6FS3r.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode);
const PROVIDERS = [
  {
    key: CredentialSource.googleAnalytics,
    label: "Google Analytics",
    icon: "📊",
    placeholder: "GA4 API key or OAuth token"
  },
  {
    key: CredentialSource.googleAdSense,
    label: "Google AdSense",
    icon: "💰",
    placeholder: "AdSense API access token"
  },
  {
    key: CredentialSource.stripe,
    label: "Stripe",
    icon: "💳",
    placeholder: "Stripe restricted API key"
  },
  {
    key: CredentialSource.paypal,
    label: "PayPal",
    icon: "🅿️",
    placeholder: "PayPal API access token"
  }
];
function VerificationStatusBadge({
  status
}) {
  if (!status || "unverified" in status) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "border-border text-muted-foreground", children: "Unverified" });
  }
  if ("pending" in status) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-50 text-amber-700 border border-amber-200 font-medium", children: "⏳ Pending Review" });
  }
  if ("verified" in status) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" }),
      "Verified"
    ] });
  }
  if ("rejected" in status) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-red-50 text-red-700 border border-red-200 font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3 mr-1" }),
        "Rejected"
      ] }),
      status.rejected && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-600", children: status.rejected })
    ] });
  }
  return null;
}
function VerifiedBadgePreview({ listingId }) {
  const { data: badge, isLoading } = useVerifiedBadge(listingId);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" });
  if (!badge) return null;
  const TrendIcon = badge.trend === "up" ? TrendingUp : badge.trend === "down" ? TrendingDown : Minus;
  const trendColor = badge.trend === "up" ? "text-emerald-600" : badge.trend === "down" ? "text-red-500" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4",
      "data-ocid": "revenue-verification.verified_badge_preview",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-emerald-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-emerald-800 text-sm", children: "Verified Badge Preview" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-lg p-2.5 border border-emerald-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Monthly Revenue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-foreground", children: [
              "$",
              badge.monthlyRevenue.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-lg p-2.5 border border-emerald-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Monthly Traffic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: Number(badge.trafficVolume).toLocaleString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-lg p-2.5 border border-emerald-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Trend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1 font-bold ${trendColor}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendIcon, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: badge.trend === "up" ? "Up" : badge.trend === "down" ? "Down" : "Flat" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function ListingVerificationPanel({ listing }) {
  const listingId = listing.id;
  const { data: status, isLoading: loadingStatus } = useVerificationStatus(listingId);
  const submitVerification = useSubmitVerificationRequest();
  const refreshMetrics = useRefreshVerificationMetrics();
  const [tokens, setTokens] = reactExports.useState({});
  const [claimedRevenue, setClaimedRevenue] = reactExports.useState("");
  const [claimedTraffic, setClaimedTraffic] = reactExports.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentialTokens = PROVIDERS.filter(
      (p) => {
        var _a;
        return (_a = tokens[p.key]) == null ? void 0 : _a.trim();
      }
    ).map(
      (p) => ({
        source: p.key,
        token: tokens[p.key].trim()
      })
    );
    if (credentialTokens.length === 0) {
      ue.error("Please enter at least one provider token.");
      return;
    }
    if (!claimedRevenue || !claimedTraffic) {
      ue.error("Please fill in claimed revenue and traffic.");
      return;
    }
    try {
      await submitVerification.mutateAsync({
        listingId,
        claimedMonthlyRevenue: Number.parseFloat(claimedRevenue),
        claimedTrafficVolume: BigInt(claimedTraffic),
        credentialTokens
      });
      ue.success(
        "Verification request submitted! Admin will review it shortly."
      );
    } catch (_e) {
      ue.error("Failed to submit verification request. Please try again.");
    }
  };
  const handleRefresh = async () => {
    try {
      await refreshMetrics.mutateAsync(listingId);
      ue.success("Verification metrics refreshed.");
    } catch (_e) {
      ue.error("Failed to refresh metrics.");
    }
  };
  const isVerified = status && "verified" in status;
  const isPending = status && "pending" in status;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-muted/20 rounded-xl border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: listing.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: listing.url })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
        loadingStatus ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-24" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(VerificationStatusBadge, { status: status ?? null }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            variant: "outline",
            onClick: handleRefresh,
            disabled: refreshMetrics.isPending,
            className: "gap-1.5 h-7 text-xs",
            "data-ocid": "revenue-verification.refresh_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RefreshCw,
                {
                  className: `w-3 h-3 ${refreshMetrics.isPending ? "animate-spin" : ""}`
                }
              ),
              "Refresh"
            ]
          }
        )
      ] })
    ] }),
    isVerified && /* @__PURE__ */ jsxRuntimeExports.jsx(VerifiedBadgePreview, { listingId }),
    !isPending && !isVerified && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
          "Claimed Metrics"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "claimed-revenue",
                className: "text-xs font-medium",
                children: "Monthly Revenue (USD)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "claimed-revenue",
                type: "number",
                min: "0",
                step: "0.01",
                placeholder: "e.g. 2500",
                value: claimedRevenue,
                onChange: (e) => setClaimedRevenue(e.target.value),
                "data-ocid": "revenue-verification.claimed_revenue_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "claimed-traffic",
                className: "text-xs font-medium",
                children: "Monthly Traffic (visits)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "claimed-traffic",
                type: "number",
                min: "0",
                placeholder: "e.g. 15000",
                value: claimedTraffic,
                onChange: (e) => setClaimedTraffic(e.target.value),
                "data-ocid": "revenue-verification.claimed_traffic_input"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-primary" }),
          "Provider Credentials",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-muted-foreground", children: "(enter at least one)" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: PROVIDERS.map((provider) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Label,
            {
              htmlFor: `token-${provider.key}`,
              className: "text-xs font-medium flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: provider.icon }),
                provider.label
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: `token-${provider.key}`,
              type: "password",
              placeholder: provider.placeholder,
              value: tokens[provider.key] ?? "",
              onChange: (e) => setTokens(
                (prev) => ({
                  ...prev,
                  [provider.key]: e.target.value
                })
              ),
              autoComplete: "off",
              "data-ocid": `revenue-verification.${provider.key}_token_input`
            }
          )
        ] }, provider.key)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          className: "w-full gap-2",
          disabled: submitVerification.isPending,
          "data-ocid": "revenue-verification.submit_button",
          children: submitVerification.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
            "Submitting…"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4" }),
            "Submit for Verification"
          ] })
        }
      )
    ] }),
    isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800",
        "data-ocid": "revenue-verification.pending_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "⏳ Verification Pending" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your credentials have been submitted. Admin will review and approve your verification request. This usually takes 1–2 business days." })
        ]
      }
    )
  ] });
}
function RevenueVerificationTab({
  listings,
  isLoading
}) {
  const [selectedListingId, setSelectedListingId] = reactExports.useState(
    null
  );
  const selectedListing = listings.find((l) => l.id.toString() === selectedListingId) ?? listings[0] ?? null;
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "revenue-verification.loading_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 rounded-xl" })
    ] });
  }
  if (listings.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-16 border-2 border-dashed border-border rounded-2xl bg-muted/10",
        "data-ocid": "revenue-verification.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-7 h-7 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold font-display text-foreground mb-1", children: "No listings to verify" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Create a listing first to submit revenue verification." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "revenue-verification.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: "Revenue Verification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Connect provider accounts to earn a verified revenue badge. Admin approval required before the badge shows publicly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:w-72", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: (selectedListing == null ? void 0 : selectedListing.id.toString()) ?? "",
          onValueChange: (v) => setSelectedListingId(v),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              SelectTrigger,
              {
                "data-ocid": "revenue-verification.listing_select",
                className: "h-9",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-muted-foreground mr-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a listing" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: listings.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l.id.toString(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: l.title }) }, l.id.toString())) })
          ]
        }
      ) })
    ] }),
    selectedListing && /* @__PURE__ */ jsxRuntimeExports.jsx(ListingVerificationPanel, { listing: selectedListing })
  ] });
}
const STATUS_OPTIONS = [
  { value: "pending", label: "⏳ Pending" },
  { value: "in_progress", label: "🔄 In Progress" },
  { value: "completed", label: "✅ Completed" },
  { value: "cancelled", label: "❌ Rejected" }
];
const listingStatusBadge = {
  active: "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.35)] shadow-[0_0_10px_oklch(0.72_0.2_142/0.2)]",
  pending: "bg-[oklch(0.72_0.18_88/0.15)] text-[oklch(0.72_0.18_88)] border-[oklch(0.72_0.18_88/0.35)]",
  sold: "bg-[oklch(0.78_0.24_195/0.15)] text-[oklch(0.78_0.24_195)] border-[oklch(0.78_0.24_195/0.35)]"
};
const orderStatusConfig = {
  pending: {
    badge: "bg-[oklch(0.78_0.24_195/0.15)] text-[oklch(0.78_0.24_195)] border-[oklch(0.78_0.24_195/0.4)]",
    dot: "bg-[oklch(0.78_0.24_195)] shadow-[0_0_6px_oklch(0.78_0.24_195)] animate-pulse",
    glow: "shadow-[0_0_14px_oklch(0.78_0.24_195/0.2)]",
    label: "Pending"
  },
  in_progress: {
    badge: "bg-primary/15 text-primary border-primary/40",
    dot: "bg-primary shadow-[0_0_6px_oklch(0.7_0.22_270)] animate-pulse",
    glow: "shadow-[0_0_14px_oklch(0.7_0.22_270/0.2)]",
    label: "In Progress"
  },
  completed: {
    badge: "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.4)]",
    dot: "bg-[oklch(0.72_0.2_142)] shadow-[0_0_6px_oklch(0.72_0.2_142)]",
    glow: "shadow-[0_0_14px_oklch(0.72_0.2_142/0.18)]",
    label: "Completed"
  },
  cancelled: {
    badge: "bg-destructive/15 text-destructive border-destructive/30",
    dot: "bg-destructive",
    glow: "",
    label: "Rejected"
  }
};
function TrustScoreRing({ score }) {
  const [animated, setAnimated] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [score]);
  const radius = 36;
  const circ = 2 * Math.PI * radius;
  const pct = animated / 100;
  const trustLabel = score >= 80 ? "Trusted" : score >= 60 ? "Established" : score >= 40 ? "Rising" : "New";
  const ringColor = score >= 80 ? "oklch(0.72 0.2 142)" : score >= 60 ? "oklch(0.72 0.18 88)" : "oklch(0.7 0.22 270)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "flex flex-col items-center gap-3 glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300",
      "data-ocid": "seller-dashboard.trust_score",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Trust Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "w-24 h-24 -rotate-90",
              viewBox: "0 0 88 88",
              "aria-label": "Trust score ring",
              role: "img",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "44",
                    cy: "44",
                    r: radius,
                    fill: "none",
                    stroke: "oklch(0.16 0.02 270)",
                    strokeWidth: "6"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "44",
                    cy: "44",
                    r: radius,
                    fill: "none",
                    stroke: ringColor,
                    strokeWidth: "6",
                    strokeLinecap: "round",
                    strokeDasharray: circ,
                    strokeDashoffset: circ * (1 - pct),
                    style: {
                      transition: "stroke-dashoffset 0.05s linear",
                      filter: `drop-shadow(0 0 6px ${ringColor})`
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold font-mono gradient-text", children: animated }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "/ 100" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: "w-3.5 h-3.5 text-[oklch(0.72_0.18_88)]",
              fill: "oklch(0.72 0.18 88)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", style: { color: ringColor }, children: trustLabel })
        ] })
      ]
    }
  );
}
function DashboardEmptyState({
  icon,
  title,
  description,
  cta,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-20 text-center glass-card rounded-2xl border-2 border-dashed border-border/40 hover:border-primary/25 transition-all duration-500",
      "data-ocid": ocid,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl glass-card border border-primary/25 flex items-center justify-center mb-4 shadow-[0_0_20px_oklch(0.7_0.22_270/0.15)]", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs mb-6", children: description }),
        cta
      ]
    }
  );
}
function SellerListingCard({
  listing,
  index
}) {
  const statusCls = listingStatusBadge[listing.status] ?? "bg-muted text-muted-foreground border-border";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-card rounded-2xl p-5 border border-border/50 group cursor-pointer transition-all duration-300 hover:border-primary/35 hover:shadow-[0_0_28px_oklch(0.7_0.22_270/0.2)] hover:-translate-y-1",
      "data-ocid": `seller-dashboard.listing.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:shadow-[0_0_14px_oklch(0.7_0.22_270/0.3)] transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-xs border capitalize ${statusCls}`, children: listing.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground line-clamp-1 mb-1", children: listing.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate mb-3", children: listing.url }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "text-xs capitalize border-border/50",
              children: listing.niche
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs border-border/50", children: listing.platform })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold font-mono gradient-text", children: [
              "₹",
              Number(listing.askingPrice).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "₹",
              Number(listing.monthlyRevenue).toLocaleString(),
              "/mo"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-[oklch(0.72_0.2_142)] opacity-0 group-hover:opacity-100 transition-opacity duration-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View" })
          ] })
        ] })
      ]
    }
  );
}
function SellerOrderCard({
  order,
  index,
  updatingId,
  onStatusUpdate
}) {
  const cfg = orderStatusConfig[order.status] ?? {
    badge: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground",
    glow: "",
    label: order.status
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/25 transition-all duration-300 ${cfg.glow}`,
      "data-ocid": `seller-dashboard.order.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground", children: [
                order.websiteType,
                " Website"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
                  order.contactName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3" }),
                  order.contactEmail
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              className: `shrink-0 text-xs border font-medium flex items-center gap-1.5 ${cfg.badge}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${cfg.dot}` }),
                cfg.label
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-4", children: [
          { label: "Budget", val: order.budget },
          { label: "Timeline", val: order.timeline },
          {
            label: "Submitted",
            val: new Date(
              Number(order.submittedAt) / 1e6
            ).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric"
            })
          }
        ].map(({ label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-muted/20 rounded-xl p-3 border border-border/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: val })
            ]
          },
          label
        )) }),
        order.requirements && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground bg-primary/5 border border-primary/15 rounded-xl p-3 line-clamp-2 mb-4", children: order.requirements }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-3 border-t border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Update:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              defaultValue: order.status,
              onValueChange: (val) => onStatusUpdate(order.id.toString(), val),
              disabled: updatingId === order.id.toString(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "w-44 h-8 text-xs bg-muted/30 border-border/50",
                    "data-ocid": `seller-dashboard.order-status.${index + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUS_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, className: "text-xs", children: opt.label }, opt.value)) })
              ]
            }
          ),
          updatingId === order.id.toString() && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 text-xs text-muted-foreground",
              "data-ocid": `seller-dashboard.order-updating.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }),
                " Saving…"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function GlassStatCard({
  icon: Icon,
  label,
  value,
  accent,
  glowColor
}) {
  const [hovered, setHovered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-card p-5 rounded-2xl flex flex-col gap-3 border border-border/50 group cursor-default transition-all duration-300",
      style: hovered ? {
        boxShadow: `0 0 28px ${glowColor ?? "oklch(0.7 0.22 270 / 0.2)"}`,
        transform: "scale(1.02) translateY(-2px)"
      } : {},
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-9 h-9 rounded-xl flex items-center justify-center ${accent ?? "bg-primary/15 text-primary"} group-hover:scale-110 transition-transform duration-300`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold font-mono gradient-text tracking-tight", children: value })
      ]
    }
  );
}
function LoginRequired() {
  const { login, loginStatus } = useInternetIdentity();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center min-h-[70vh] px-4 text-center",
      "data-ocid": "seller-dashboard.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-3xl glass-card border border-primary/30 flex items-center justify-center mx-auto shadow-[0_0_40px_oklch(0.7_0.22_270/0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-12 h-12 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-3xl animate-glow-pulse opacity-40 pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display gradient-text mb-3", children: "Seller Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-2 max-w-sm", children: "This area is protected. Log in with Internet Identity to manage your listings and custom orders." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 mb-8", children: "Internet Identity provides secure, private authentication with no passwords." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "lg",
            onClick: () => login(),
            disabled: loginStatus === "logging-in",
            className: "gap-2 bg-primary/90 hover:bg-primary shadow-[0_0_20px_oklch(0.7_0.22_270/0.4)] hover:shadow-[0_0_32px_oklch(0.7_0.22_270/0.6)] transition-all duration-300",
            "data-ocid": "seller-dashboard.login_button",
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
function SellerDashboard() {
  const { identity } = useInternetIdentity();
  const { data: listings = [], isLoading: loadingListings } = useSellerListings();
  const { data: orders = [], isLoading: loadingOrders } = useCustomOrders();
  const updateStatus = useUpdateOrderStatus();
  const [updatingId, setUpdatingId] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("listings");
  if (!identity) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginRequired, {});
  const totalRevenue = listings.reduce(
    (sum, l) => sum + Number(l.monthlyRevenue),
    0
  );
  const activeListings = listings.filter((l) => l.status === "active").length;
  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const trustScore = Math.min(
    100,
    40 + activeListings * 10 + (listings.length > 0 ? 20 : 0)
  );
  const handleStatusUpdate = async (orderId, status) => {
    setUpdatingId(orderId);
    try {
      await updateStatus.mutateAsync({ orderId, status, notes: null });
      ue.success("Order status updated successfully");
    } catch (_e) {
      ue.error("Failed to update order status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      "data-ocid": "seller-dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/25 via-[oklch(0.75_0.2_300/0.08)] to-accent/15 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_0%,oklch(0.7_0.22_270/0.18),transparent)] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle,oklch(0.78_0.24_195/0.12),transparent_70%)] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_12px_oklch(0.7_0.22_270/0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Seller Hub" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl font-bold font-display gradient-text mb-2", children: "Seller Dashboard" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Manage listings, orders & revenue verification" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                pendingOrders > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-semibold text-[oklch(0.78_0.24_195)] bg-[oklch(0.78_0.24_195/0.1)] border border-[oklch(0.78_0.24_195/0.35)] rounded-full px-3 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[oklch(0.78_0.24_195)] animate-pulse shadow-[0_0_6px_oklch(0.78_0.24_195)]" }),
                  pendingOrders,
                  " new orders"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    variant: "outline",
                    size: "sm",
                    className: "gap-1.5 border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_12px_oklch(0.7_0.22_270/0.3)] transition-all duration-300",
                    "data-ocid": "seller-dashboard.admin_revenue_link",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/revenue-verification", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5" }),
                      " Admin"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    size: "sm",
                    className: "gap-1.5 bg-primary/90 hover:bg-primary shadow-[0_0_16px_oklch(0.7_0.22_270/0.35)] hover:shadow-[0_0_28px_oklch(0.7_0.22_270/0.55)] transition-all duration-300",
                    "data-ocid": "seller-dashboard.new_listing_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sell", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5" }),
                      " New Listing"
                    ] })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                GlassStatCard,
                {
                  icon: Globe,
                  label: "Active Listings",
                  value: activeListings,
                  accent: "bg-primary/15 text-primary",
                  glowColor: "oklch(0.7 0.22 270 / 0.22)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                GlassStatCard,
                {
                  icon: DollarSign,
                  label: "Monthly Revenue",
                  value: `₹${totalRevenue.toLocaleString()}`,
                  accent: "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)]",
                  glowColor: "oklch(0.72 0.2 142 / 0.22)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                GlassStatCard,
                {
                  icon: ClipboardList,
                  label: "Pending Orders",
                  value: pendingOrders,
                  accent: "bg-[oklch(0.78_0.24_195/0.15)] text-[oklch(0.78_0.24_195)]",
                  glowColor: "oklch(0.78 0.24 195 / 0.22)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                GlassStatCard,
                {
                  icon: ChartColumn,
                  label: "Total Listings",
                  value: listings.length,
                  accent: "bg-[oklch(0.75_0.2_300/0.15)] text-[oklch(0.75_0.2_300)]",
                  glowColor: "oklch(0.75 0.2 300 / 0.22)"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-48 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrustScoreRing, { score: trustScore }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Tabs,
            {
              value: activeTab,
              onValueChange: setActiveTab,
              className: "w-full",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TabsList,
                  {
                    className: "w-full grid grid-cols-3 mb-8 h-auto glass-card border border-border/50 p-1 rounded-2xl gap-1",
                    "data-ocid": "seller-dashboard.tabs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        TabsTrigger,
                        {
                          value: "listings",
                          className: "gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_14px_oklch(0.7_0.22_270/0.35)] transition-all duration-300",
                          "data-ocid": "seller-dashboard.listings_tab",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-3.5 h-3.5" }),
                            " My Listings",
                            listings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 px-1.5 py-0 h-4 text-[10px] bg-primary/20 text-primary border-0", children: listings.length })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        TabsTrigger,
                        {
                          value: "orders",
                          className: "gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:shadow-[0_0_14px_oklch(0.78_0.24_195/0.35)] transition-all duration-300",
                          "data-ocid": "seller-dashboard.orders_tab",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-3.5 h-3.5" }),
                            " Custom Orders",
                            pendingOrders > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 px-1.5 py-0 h-4 text-[10px] bg-[oklch(0.78_0.24_195/0.25)] text-[oklch(0.78_0.24_195)] border-0 animate-glow-pulse", children: pendingOrders })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        TabsTrigger,
                        {
                          value: "verification",
                          className: "gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-[oklch(0.72_0.2_142/0.2)] data-[state=active]:text-[oklch(0.72_0.2_142)] data-[state=active]:shadow-[0_0_14px_oklch(0.72_0.2_142/0.35)] transition-all duration-300",
                          "data-ocid": "seller-dashboard.verification_tab",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5" }),
                            " Revenue"
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsContent,
                  {
                    value: "listings",
                    "data-ocid": "seller-dashboard.listings_section",
                    children: loadingListings ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        "data-ocid": "seller-dashboard.listings.loading_state",
                        children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-52 rounded-2xl" }, k))
                      }
                    ) : listings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DashboardEmptyState,
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-8 h-8 text-primary" }),
                        title: "No listings yet",
                        description: "Submit your first website to start selling on WebStore!",
                        cta: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            asChild: true,
                            size: "sm",
                            className: "bg-primary/90 hover:bg-primary shadow-[0_0_16px_oklch(0.7_0.22_270/0.3)] transition-all",
                            "data-ocid": "seller-dashboard.listings.add_button",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sell", children: "List Your First Website" })
                          }
                        ),
                        ocid: "seller-dashboard.listings.empty_state"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        "data-ocid": "seller-dashboard.listings_list",
                        children: listings.map((listing, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SellerListingCard,
                          {
                            listing,
                            index: i
                          },
                          listing.id.toString()
                        ))
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsContent,
                  {
                    value: "orders",
                    "data-ocid": "seller-dashboard.orders_section",
                    children: loadingOrders ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "space-y-3",
                        "data-ocid": "seller-dashboard.orders.loading_state",
                        children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 rounded-2xl" }, k))
                      }
                    ) : orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DashboardEmptyState,
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-8 h-8 text-accent" }),
                        title: "No custom orders yet",
                        description: "Custom website orders from buyers will appear here once submitted.",
                        ocid: "seller-dashboard.orders.empty_state"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "space-y-4",
                        "data-ocid": "seller-dashboard.orders_list",
                        children: orders.map((order, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SellerOrderCard,
                          {
                            order,
                            index: i,
                            updatingId,
                            onStatusUpdate: handleStatusUpdate
                          },
                          order.id.toString()
                        ))
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsContent,
                  {
                    value: "verification",
                    "data-ocid": "seller-dashboard.verification_section",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      RevenueVerificationTab,
                      {
                        listings,
                        isLoading: loadingListings
                      }
                    )
                  }
                )
              ]
            }
          ) })
        ] }) })
      ]
    }
  );
}
export {
  SellerDashboard as default
};
