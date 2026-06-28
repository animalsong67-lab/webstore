import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, d as cn, e as useActor, a as Skeleton, B as Button, f as createActor, g as useParams, L as Link, M as Mail } from "./index-BMZp6_Em.js";
import { B as Badge } from "./badge-DjffIZJ0.js";
import { P as Primitive, I as Input } from "./index-B_NUkB8x.js";
import { L as ListingStatus, a as Variant_new_trusted_established_caution } from "./backend.d-Dja6JkNT.js";
import { T as Textarea } from "./textarea-DM5SngKy.js";
import { Z as Zap } from "./zap-DXCDsPRi.js";
import { G as Globe } from "./globe-Dz_3xYco.js";
import { S as Shield } from "./shield-B4TWM6rZ.js";
import { C as CircleAlert } from "./circle-alert-DfBYvdN2.js";
import { R as RefreshCw } from "./refresh-cw-DOq_3Ad_.js";
import { W as WishlistButton } from "./WishlistButton-BnvvCiWJ.js";
import { h as useListing, u as useListings, i as useAuctionState, j as useVerifiedBadge, k as usePlaceBid, l as useSetAutoBid, m as useSellerTrustScore, n as useGetReviews, o as useSubmitReview } from "./useListings-vMM7OeqO.js";
import { A as ArrowLeft } from "./arrow-left-DB54YpoY.js";
import { C as Calendar } from "./calendar-DuBoxHrl.js";
import { D as DollarSign } from "./dollar-sign-DGhSPEC0.js";
import { U as Users } from "./users-CdRwbpqe.js";
import { C as ChartColumn } from "./chart-column-CZsnqYk3.js";
import { T as TrendingUp } from "./trending-up-CwCDh1V9.js";
import { r as resolveElements, m as motion } from "./proxy-6ED74a2P.js";
import { T as TrendingDown } from "./trending-down-ByyBZ34s.js";
import { C as CircleCheck } from "./circle-check-B3HDhYVu.js";
import { G as Gavel } from "./gavel-CFFwScI5.js";
import { C as Clock } from "./clock-CzhUTj2i.js";
import { T as TriangleAlert } from "./triangle-alert-fRM0DjG-.js";
import { B as Bot } from "./bot-aMLEk82Y.js";
import { S as Star } from "./star-Czm1eI8s.js";
import { C as ChevronRight } from "./chevron-right-DWX676IN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
];
const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function scoreGlowClass(score) {
  if (score >= 80)
    return {
      bar: "bg-emerald-500",
      text: "text-emerald-400",
      glow: "shadow-[0_0_8px_rgba(52,211,153,0.7)]"
    };
  if (score >= 60)
    return {
      bar: "bg-amber-500",
      text: "text-amber-400",
      glow: "shadow-[0_0_8px_rgba(251,191,36,0.6)]"
    };
  if (score >= 40)
    return {
      bar: "bg-orange-500",
      text: "text-orange-400",
      glow: "shadow-[0_0_8px_rgba(249,115,22,0.6)]"
    };
  return {
    bar: "bg-red-500",
    text: "text-red-400",
    glow: "shadow-[0_0_8px_rgba(239,68,68,0.6)]"
  };
}
function MetricBar({ label, score, icon }) {
  const { bar, text, glow } = scoreGlowClass(score);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "space-y-1.5",
      "data-ocid": `performance-report.metric.${label.toLowerCase().replace(/\s+/g, "_")}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground w-4 h-4", children: icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm font-bold tabular-nums ${text}`, children: [
            score,
            "/100"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted/50 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-full rounded-full transition-all duration-700 ease-out ${bar} ${glow}`,
            style: { width: `${score}%` }
          }
        ) })
      ]
    }
  );
}
const GRADE_CONFIG = {
  A: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/40",
    glow: "shadow-[0_0_20px_rgba(52,211,153,0.4),inset_0_0_12px_rgba(52,211,153,0.1)]",
    ring: "ring-2 ring-emerald-500/30"
  },
  B: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/40",
    glow: "shadow-[0_0_20px_oklch(0.7_0.22_270/0.4),inset_0_0_12px_oklch(0.7_0.22_270/0.1)]",
    ring: "ring-2 ring-primary/30"
  },
  C: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/40",
    glow: "shadow-[0_0_16px_rgba(251,191,36,0.4),inset_0_0_10px_rgba(251,191,36,0.08)]",
    ring: "ring-2 ring-amber-500/30"
  },
  D: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    border: "border-orange-500/40",
    glow: "shadow-[0_0_16px_rgba(249,115,22,0.4),inset_0_0_10px_rgba(249,115,22,0.08)]",
    ring: "ring-2 ring-orange-500/30"
  },
  F: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/40",
    glow: "shadow-[0_0_16px_rgba(239,68,68,0.4),inset_0_0_10px_rgba(239,68,68,0.08)]",
    ring: "ring-2 ring-red-500/30"
  }
};
function PerformanceReportCard({
  listingId
}) {
  const { actor } = useActor(createActor);
  const [report, setReport] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const generateReport = async () => {
    if (!actor) {
      setError("Service not ready. Please try again in a moment.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const raw = await actor.generatePerformanceReport({ listingId });
      setReport({
        speedScore: Number(raw.speedScore),
        seoScore: Number(raw.seoScore),
        mobileScore: Number(raw.mobileScore),
        securityScore: Number(raw.securityScore),
        spamScore: Number(raw.spamScore),
        overallGrade: raw.overallGrade,
        reportedAt: Number(raw.reportedAt),
        listingId: raw.listingId
      });
    } catch {
      setError("Failed to generate report. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const gradeConfig = report ? GRADE_CONFIG[report.overallGrade] ?? GRADE_CONFIG.F : null;
  const formattedDate = report ? new Date(report.reportedAt / 1e6).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }) : null;
  const metrics = report ? [
    {
      label: "Speed",
      score: report.speedScore,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" })
    },
    {
      label: "SEO",
      score: report.seoScore,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4" })
    },
    {
      label: "Mobile",
      score: report.mobileScore,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4" })
    },
    {
      label: "Security",
      score: report.securityScore,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" })
    },
    {
      label: "Spam Score",
      score: report.spamScore,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4" })
    }
  ] : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-2xl", "data-ocid": "performance-report.card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shadow-[0_0_10px_oklch(0.7_0.22_270/0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-display font-semibold text-foreground", children: "Performance & Security Report" })
      ] }),
      report && gradeConfig && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `inline-flex flex-col items-center justify-center w-14 h-14 rounded-2xl border-2 ${gradeConfig.bg} ${gradeConfig.border} ${gradeConfig.glow} ${gradeConfig.ring} animate-scale-in`,
            "data-ocid": "performance-report.grade_badge",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-2xl font-black leading-none ${gradeConfig.text}`,
                  children: report.overallGrade
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5", children: "Grade" })
            ]
          }
        ),
        formattedDate && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-mono mt-1.5 tabular-nums", children: formattedDate })
      ] })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "space-y-4",
        "data-ocid": "performance-report.loading_state",
        children: ["s1", "s2", "s3", "s4", "s5"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-12" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-2 w-full rounded-full" })
        ] }, k))
      }
    ),
    !loading && error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center gap-3 py-6 text-center",
        "data-ocid": "performance-report.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-destructive/10 border border-destructive/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-6 h-6 text-destructive" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: generateReport,
              className: "border-border/50 hover:border-primary/40",
              "data-ocid": "performance-report.retry_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 mr-1.5" }),
                " Retry"
              ]
            }
          )
        ]
      }
    ),
    !loading && !error && report && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-4", children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      MetricBar,
      {
        label: m.label,
        score: m.score,
        icon: m.icon
      },
      m.label
    )) }),
    !loading && !error && !report && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Run an automated technical analysis to see speed, SEO, mobile responsiveness, security, and spam scores for this website." }),
    !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: !report ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        onClick: generateReport,
        disabled: !actor,
        className: "w-full gap-2 glow-primary",
        "data-ocid": "performance-report.generate_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4" }),
          "Generate Report"
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        onClick: generateReport,
        disabled: !actor,
        className: "w-full gap-2 border-border/50 hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
        "data-ocid": "performance-report.refresh_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
          "Refresh Report"
        ]
      }
    ) })
  ] }) });
}
const NICHE_COLORS = {
  eCommerce: "bg-primary/10 text-primary border-primary/20",
  Blog: "bg-accent/10 text-accent-foreground border-accent/20",
  SaaS: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  News: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Tools: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Other: "bg-muted text-muted-foreground border-border"
};
function RelatedCard({ listing }) {
  const fmt = (n) => `${Number(n).toLocaleString("en-US")}`;
  const nicheClass = NICHE_COLORS[listing.niche] ?? NICHE_COLORS.Other;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/listing/$id",
      params: { id: listing.id.toString() },
      className: "group block h-full flex-shrink-0 w-72 sm:w-80",
      "data-ocid": `related.item.${listing.id}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card glass-card-hover rounded-2xl overflow-hidden h-full transition-smooth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 bg-gradient-to-r from-primary via-accent to-primary/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1 flex-1", children: listing.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${nicheClass}`,
                children: listing.niche
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-border text-muted-foreground bg-muted/40", children: listing.platform })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: listing.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-border/40 mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: "Asking Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base text-primary", children: fmt(listing.askingPrice) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              fmt(listing.monthlyRevenue),
              "/mo"
            ] })
          ] })
        ] })
      ] })
    }
  );
}
function VerifiedRevenueBadge({ listingId }) {
  const { data: badge, isLoading } = useVerifiedBadge(listingId);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-72 rounded-lg" });
  if (!badge) return null;
  const trendIcon = badge.trend === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-success" }) : badge.trend === "down" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-destructive" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 inline-flex items-center justify-center text-muted-foreground text-xs", children: "→" });
  const trendLabel = badge.trend === "up" ? "Growing" : badge.trend === "down" ? "Declining" : "Stable";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-wrap items-center gap-3 p-3 rounded-xl glass-card border border-success/30",
      style: { boxShadow: "0 0 8px oklch(0.72 0.2 142 / 0.25)" },
      "data-ocid": "listing-detail.verified_revenue_badge",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Verified Revenue" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-4 hidden sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-3.5 h-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Monthly:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
            "$",
            badge.monthlyRevenue.toLocaleString("en-US")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-4 hidden sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Traffic:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: Number(badge.trafficVolume).toLocaleString("en-US") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-4 hidden sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
          trendIcon,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: trendLabel })
        ] })
      ]
    }
  );
}
function useCountUp(target, duration = 1200) {
  const [countVal, setCountVal] = reactExports.useState(0);
  const countRef = reactExports.useRef(null);
  const inView2 = useInView(countRef, { once: true });
  reactExports.useEffect(() => {
    if (!inView2 || target === 0) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - (1 - progress) ** 3;
      setCountVal(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView2, target, duration]);
  return { value: countVal, ref: countRef };
}
function useCountdown(timeRemainingSeconds, ended) {
  const [display, setDisplay] = reactExports.useState(timeRemainingSeconds);
  const ref = reactExports.useRef(timeRemainingSeconds);
  reactExports.useEffect(() => {
    ref.current = timeRemainingSeconds;
    setDisplay(timeRemainingSeconds);
  }, [timeRemainingSeconds]);
  reactExports.useEffect(() => {
    if (ended || ref.current <= 0) return;
    const id = setInterval(() => {
      ref.current = Math.max(0, ref.current - 1);
      setDisplay(ref.current);
    }, 1e3);
    return () => clearInterval(id);
  }, [ended]);
  return display;
}
function formatCountdown(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor(secs % 3600 / 60);
  const s = secs % 60;
  return [
    String(h).padStart(2, "0"),
    String(m).padStart(2, "0"),
    String(s).padStart(2, "0")
  ].join(":");
}
function AuctionPanel({
  auction,
  listingId
}) {
  const placeBid = usePlaceBid();
  const setAutoBid = useSetAutoBid();
  const timeRemaining = useCountdown(
    Number(auction.timeRemainingSeconds),
    auction.ended
  );
  const isUrgent = !auction.ended && timeRemaining < 300;
  const isVeryUrgent = !auction.ended && timeRemaining < 60;
  const currentBid = auction.highestBidAmount[0];
  const minBid = currentBid !== void 0 ? currentBid + 1n : auction.startingBid;
  const [bidAmount, setBidAmount] = reactExports.useState("");
  const [bidError, setBidError] = reactExports.useState("");
  const [bidSuccess, setBidSuccess] = reactExports.useState(false);
  const [maxAmount, setMaxAmount] = reactExports.useState("");
  const [stepAmount, setStepAmount] = reactExports.useState("");
  const [autoBidError, setAutoBidError] = reactExports.useState("");
  const [autoBidSuccess, setAutoBidSuccess] = reactExports.useState(false);
  const handleBidSubmit = (e) => {
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
        `Bid must be at least ${Number(auction.startingBid).toLocaleString("en-US")} (starting bid).`
      );
      return;
    }
    if (currentBid !== void 0 && amountBig <= currentBid) {
      setBidError(
        `Bid must be higher than current bid of ${Number(currentBid).toLocaleString("en-US")}.`
      );
      return;
    }
    placeBid.mutate(
      { listingId, amount: amountBig },
      {
        onSuccess: (result) => {
          const r = result;
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
        onError: () => setBidError("Network error. Please try again.")
      }
    );
  };
  const handleAutoBidSubmit = (e) => {
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
        stepAmount: BigInt(Math.floor(step))
      },
      {
        onSuccess: () => {
          setAutoBidSuccess(true);
          setMaxAmount("");
          setStepAmount("");
        },
        onError: () => setAutoBidError("Failed to set auto-bid. Please try again.")
      }
    );
  };
  const fmtCurrency = (n) => `${Number(n).toLocaleString("en-US")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-card rounded-2xl border-primary/40 overflow-hidden",
      "data-ocid": "listing-detail.auction_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-primary via-accent to-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-4 h-4 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground", children: "Live Auction" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              auction.reserveMet && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-success/15 text-success border-success/30 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" }),
                "Reserve Met"
              ] }),
              !auction.reserveMet && !auction.ended && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs text-muted-foreground",
                  children: "Reserve Not Met"
                }
              ),
              auction.ended ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-muted text-muted-foreground border-border text-xs", children: "Ended" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: [
                    "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold border",
                    isVeryUrgent ? "bg-destructive/20 text-destructive border-destructive/40 animate-pulse shadow-[0_0_12px_oklch(0.65_0.22_22/0.5)]" : isUrgent ? "bg-amber-500/20 text-amber-400 border-amber-500/40" : "bg-accent/10 text-accent border-accent/30 shadow-[0_0_8px_oklch(0.78_0.24_195/0.3)]"
                  ].join(" "),
                  "data-ocid": "listing-detail.auction_timer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    formatCountdown(timeRemaining)
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-primary/5 border border-primary/20 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1", children: "Current Bid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xl font-bold font-display text-primary",
                  "data-ocid": "listing-detail.auction_current_bid",
                  children: currentBid !== void 0 ? fmtCurrency(currentBid) : fmtCurrency(auction.startingBid)
                }
              ),
              currentBid === void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Starting bid" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/40 border border-border/40 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1", children: "Bids" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xl font-bold font-display text-foreground",
                  "data-ocid": "listing-detail.auction_bid_count",
                  children: Number(auction.bidCount)
                }
              )
            ] }),
            auction.highestBidder[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-muted/40 border border-border/40 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-1", children: "Top Bidder" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground truncate", children: [
                auction.highestBidder[0].slice(0, 10),
                "…"
              ] })
            ] })
          ] }),
          auction.ended ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: [
                "flex items-start gap-3 p-4 rounded-xl border",
                auction.winner[0] ? "bg-success/5 border-success/25" : "bg-muted/40 border-border"
              ].join(" "),
              "data-ocid": "listing-detail.auction_ended_state",
              children: auction.winner[0] ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-success shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Auction Ended — Winner!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
                    "Won by:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                      auction.winner[0].slice(0, 20),
                      "…"
                    ] })
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-amber-500 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Auction Ended" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Reserve not met — the auction closed without a winner." })
                ] })
              ] })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 glass-card rounded-xl space-y-3 mb-3",
                "data-ocid": "listing-detail.bid_form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-sm text-foreground flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-4 h-4 text-primary" }),
                    "Place a Bid"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "Minimum bid:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: fmtCurrency(minBid) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleBidSubmit, className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm", children: "$" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "number",
                          min: Number(minBid),
                          step: "1",
                          value: bidAmount,
                          onChange: (e) => {
                            setBidAmount(e.target.value);
                            setBidError("");
                          },
                          placeholder: Number(minBid).toString(),
                          className: "pl-7 bg-secondary/40 border-border/50 focus:border-primary focus:ring-primary/30",
                          "data-ocid": "listing-detail.bid_input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "submit",
                        disabled: placeBid.isPending,
                        className: "glow-primary font-semibold px-5",
                        "data-ocid": "listing-detail.bid_submit_button",
                        children: placeBid.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" }),
                          "Bidding…"
                        ] }) : "Bid Now"
                      }
                    )
                  ] }),
                  bidError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-sm text-destructive flex items-center gap-1",
                      "data-ocid": "listing-detail.bid_error_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 shrink-0" }),
                        bidError
                      ]
                    }
                  ),
                  bidSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-sm text-success flex items-center gap-1",
                      "data-ocid": "listing-detail.bid_success_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 shrink-0" }),
                        "Bid placed successfully!"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 rounded-xl border border-accent/25 bg-accent/5 space-y-3",
                "data-ocid": "listing-detail.auto_bid_section",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-sm text-foreground flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-accent" }),
                    "Auto-Bid",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-[10px] ml-1 border-accent/40 text-accent",
                        children: "Smart"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Set your maximum price and we'll automatically bid for you in increments." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAutoBidSubmit, className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            htmlFor: "auto-bid-max",
                            className: "text-[11px] text-muted-foreground mb-1 block",
                            children: "Max Amount ($)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "auto-bid-max",
                            type: "number",
                            min: Number(minBid),
                            step: "1",
                            value: maxAmount,
                            onChange: (e) => {
                              setMaxAmount(e.target.value);
                              setAutoBidError("");
                            },
                            placeholder: "e.g. 5000",
                            className: "bg-secondary/40 border-border/50",
                            "data-ocid": "listing-detail.auto_bid_max_input"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            htmlFor: "auto-bid-step",
                            className: "text-[11px] text-muted-foreground mb-1 block",
                            children: "Step Amount ($)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "auto-bid-step",
                            type: "number",
                            min: "1",
                            step: "1",
                            value: stepAmount,
                            onChange: (e) => {
                              setStepAmount(e.target.value);
                              setAutoBidError("");
                            },
                            placeholder: "e.g. 50",
                            className: "bg-secondary/40 border-border/50",
                            "data-ocid": "listing-detail.auto_bid_step_input"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "submit",
                        variant: "outline",
                        className: "w-full border-accent/40 text-accent hover:bg-accent/10",
                        disabled: setAutoBid.isPending,
                        "data-ocid": "listing-detail.auto_bid_submit_button",
                        children: setAutoBid.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" }),
                          "Setting Auto-Bid…"
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4" }),
                          "Enable Auto-Bid"
                        ] })
                      }
                    )
                  ] }),
                  autoBidError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-sm text-destructive flex items-center gap-1",
                      "data-ocid": "listing-detail.auto_bid_error_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 shrink-0" }),
                        autoBidError
                      ]
                    }
                  ),
                  autoBidSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-sm text-success flex items-center gap-1",
                      "data-ocid": "listing-detail.auto_bid_success_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 shrink-0" }),
                        "Auto-bid enabled!"
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      ]
    }
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
  accent = false
}) {
  const { value: animated, ref } = useCountUp(numericValue ?? 0);
  const displayVal = numericValue !== void 0 && numericValue > 0 ? `${prefix}${animated.toLocaleString()}${suffix}` : value;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: [
        "glass-card rounded-2xl p-4 flex flex-col gap-2 transition-smooth hover:scale-[1.02] cursor-default",
        accent ? "hover:shadow-[0_0_16px_oklch(0.78_0.24_195/0.3)]" : "hover:glow-primary"
      ].join(" "),
      "data-ocid": "listing-detail.stat_card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: [
              "flex items-center gap-2",
              accent ? "text-accent" : "text-primary"
            ].join(" "),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: [
              "text-2xl font-bold font-display",
              accent ? "text-accent" : "text-foreground"
            ].join(" "),
            children: displayVal
          }
        ),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: sub })
      ]
    }
  );
}
function StarRating({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      className: `w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`
    },
    `star-display-${i + 1}`
  )) });
}
function TrustScoreSection({ sellerId }) {
  const { data: trust, isLoading } = useSellerTrustScore(sellerId);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "glass-card rounded-2xl p-6 space-y-4",
        "data-ocid": "listing-detail.trust_score.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-32" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Skeleton,
            {
              className: "h-16 rounded-lg"
            },
            `skeleton-card-${i + 1}`
          )) })
        ]
      }
    );
  }
  if (!trust) return null;
  const score = Number(trust.score);
  const tier = trust.tier;
  const tierConfig = {
    [Variant_new_trusted_established_caution.trusted]: {
      label: "Trusted",
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/30"
    },
    [Variant_new_trusted_established_caution.established]: {
      label: "Established",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30"
    },
    [Variant_new_trusted_established_caution.new_]: {
      label: "New",
      color: "text-muted-foreground",
      bg: "bg-muted/60",
      border: "border-border"
    },
    [Variant_new_trusted_established_caution.caution]: {
      label: "Caution",
      color: "text-destructive",
      bg: "bg-destructive/10",
      border: "border-destructive/30"
    }
  };
  const config = tierConfig[tier] ?? tierConfig[Variant_new_trusted_established_caution.new_];
  const progressColor = score >= 80 ? "bg-success" : score >= 60 ? "bg-amber-500" : score >= 40 ? "bg-yellow-500" : "bg-destructive";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "glass-card rounded-2xl overflow-hidden",
      "data-ocid": "listing-detail.trust_score.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-primary via-accent to-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground", children: "Seller Trust Score" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${config.bg} ${config.color} ${config.border}`,
                children: config.label
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `text-center w-16 h-16 rounded-2xl flex flex-col items-center justify-center ${config.bg} border ${config.border}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold font-display ${config.color}`, children: score }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "/ 100" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted/60 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  whileInView: { width: `${score}%` },
                  viewport: { once: true },
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  className: `h-full rounded-full ${progressColor}`
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: [
            {
              icon: ChartColumn,
              label: "Transactions",
              value: Number(trust.transactionCount).toString(),
              iconCls: "text-muted-foreground",
              valCls: "text-foreground"
            },
            {
              icon: Star,
              label: "Avg Rating",
              value: Number(trust.avgRating).toFixed(1),
              iconCls: "text-yellow-400",
              valCls: "text-foreground"
            },
            {
              icon: CircleCheck,
              label: "Completion",
              value: `${Number(trust.completionRate)}%`,
              iconCls: "text-success",
              valCls: "text-foreground"
            },
            {
              icon: Clock,
              label: "Response Time",
              value: `${Number(trust.responseTimeHours)}h`,
              iconCls: "text-muted-foreground",
              valCls: "text-foreground"
            },
            {
              icon: trust.isVerified ? CircleCheck : ShieldAlert,
              label: "Verification",
              value: trust.isVerified ? "Verified" : "Unverified",
              iconCls: trust.isVerified ? "text-success" : "text-muted-foreground",
              valCls: trust.isVerified ? "text-success" : "text-muted-foreground"
            },
            {
              icon: trust.hasRedFlags ? TriangleAlert : CircleCheck,
              label: "Red Flags",
              value: trust.hasRedFlags ? "Yes" : "None",
              iconCls: trust.hasRedFlags ? "text-amber-400" : "text-success",
              valCls: trust.hasRedFlags ? "text-amber-400" : "text-success"
            }
          ].map(({ icon: Ic, label, value: val, iconCls, valCls }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 p-3 bg-muted/30 rounded-xl border border-border/40",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ic, { className: `w-4 h-4 flex-shrink-0 ${iconCls}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-semibold text-sm ${valCls}`, children: val })
                ] })
              ]
            },
            label
          )) }),
          Number(trust.transactionCount) === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-400", children: "New seller — no reviews yet. Proceed with standard due diligence." })
          ] }),
          trust.hasRedFlags && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-xl mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-destructive shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: "This seller has red flag indicators. Review carefully before purchasing." })
          ] })
        ] })
      ]
    }
  );
}
function ValuationBadge({ price }) {
  const min = Math.round(Number(price) * 0.8);
  const max = Math.round(Number(price) * 1.2);
  const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "inline-flex items-center gap-2.5 px-4 py-2 glass-card rounded-xl border-primary/30",
      style: { boxShadow: "0 0 10px oklch(0.7 0.22 270 / 0.25)" },
      "data-ocid": "listing-detail.valuation_badge",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "AI Estimated Value:" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold gradient-text", children: [
            fmt(min),
            " – ",
            fmt(max)
          ] })
        ] })
      ]
    }
  );
}
function ReviewsSection({ listingId }) {
  var _a;
  const { data: reviews, isLoading } = useGetReviews(listingId);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [reviewerName, setReviewerName] = reactExports.useState("");
  const [rating, setRating] = reactExports.useState(5);
  const [comment, setComment] = reactExports.useState("");
  const submitReview = useSubmitReview();
  const inputCls = "w-full px-3.5 py-3 rounded-xl border border-border/50 bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth backdrop-blur-sm";
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "glass-card rounded-2xl p-6 space-y-3",
        "data-ocid": "listing-detail.reviews.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-24" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" })
        ]
      }
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewerName.trim() || !comment.trim()) return;
    submitReview.mutate(
      {
        listingId,
        sellerId: "seller",
        reviewerName: reviewerName.trim(),
        rating: BigInt(rating),
        comment: comment.trim()
      },
      {
        onSuccess: () => {
          setReviewerName("");
          setRating(5);
          setComment("");
          setIsOpen(false);
        }
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "glass-card rounded-2xl overflow-hidden",
      "data-ocid": "listing-detail.reviews.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-accent via-primary to-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-foreground", children: [
                "Reviews (",
                (reviews == null ? void 0 : reviews.length) ?? 0,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                onClick: () => setIsOpen(!isOpen),
                className: "border-border/50 hover:border-primary/50 hover:text-primary",
                "data-ocid": "listing-detail.write_review.toggle",
                children: isOpen ? "Cancel" : "Write a Review"
              }
            )
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "space-y-3 p-4 bg-muted/20 rounded-xl border border-border/50 mb-4",
              "data-ocid": "listing-detail.review_form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "reviewer-name",
                      className: "text-sm font-medium text-foreground block mb-1",
                      children: "Your Name"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "reviewer-name",
                      type: "text",
                      value: reviewerName,
                      onChange: (e) => setReviewerName(e.target.value),
                      className: inputCls,
                      placeholder: "Enter your name",
                      required: true,
                      "data-ocid": "listing-detail.review.name_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground block mb-1", children: "Rating" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setRating(i + 1),
                      className: "p-0.5 transition-transform hover:scale-110",
                      "data-ocid": `listing-detail.review.star.${i + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Star,
                        {
                          className: `w-6 h-6 transition-colors ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`
                        }
                      )
                    },
                    `star-rating-${i + 1}`
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "review-comment",
                      className: "text-sm font-medium text-foreground block mb-1",
                      children: "Comment"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      id: "review-comment",
                      value: comment,
                      onChange: (e) => setComment(e.target.value),
                      placeholder: "Share your experience with this seller...",
                      rows: 3,
                      required: true,
                      className: "bg-secondary/40 border-border/50 focus:border-primary",
                      "data-ocid": "listing-detail.review.comment_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      size: "sm",
                      disabled: submitReview.isPending,
                      className: "glow-primary",
                      "data-ocid": "listing-detail.review.submit_button",
                      children: submitReview.isPending ? "Submitting..." : "Submit Review"
                    }
                  ),
                  submitReview.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: ((_a = submitReview.error) == null ? void 0 : _a.message) || "Failed to submit" })
                ] })
              ]
            }
          ),
          reviews && reviews.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: reviews.map((review, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -10 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: idx * 0.05 },
              className: "p-4 bg-muted/20 rounded-xl border border-border/40",
              "data-ocid": `listing-detail.review.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-xs", children: review.reviewerName.charAt(0).toUpperCase() }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground", children: review.reviewerName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: new Date(
                        Number(review.timestamp) / 1e6
                      ).toLocaleDateString() })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: Number(review.rating) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: review.comment })
              ]
            },
            review.id
          )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-8 text-muted-foreground",
              "data-ocid": "listing-detail.reviews.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-10 h-10 mx-auto mb-2 opacity-40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No reviews yet. Be the first to review!" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ListingDetail() {
  const { id } = useParams({ from: "/listing/$id" });
  const listingId = BigInt(id);
  const { data: listing, isLoading, error } = useListing(listingId);
  const { data: allListings } = useListings();
  const { data: auctionState } = useAuctionState(
    listingId,
    !isLoading && !!listing
  );
  const relatedListings = listing && allListings ? allListings.filter((l) => l.niche === listing.niche && l.id !== listingId).slice(0, 3) : [];
  const statusColors = {
    [ListingStatus.active]: "bg-success/15 text-success border-success/30",
    [ListingStatus.pending]: "bg-yellow-100/80 text-yellow-700 border-yellow-300/50",
    [ListingStatus.sold]: "bg-muted text-muted-foreground border-border"
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-4xl mx-auto px-4 py-12 space-y-6",
        "data-ocid": "listing-detail.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-48" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full rounded-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: ["skel-1", "skel-2", "skel-3", "skel-4"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 rounded-xl" }, key)) })
        ]
      }
    );
  }
  if (error || !listing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-4xl mx-auto px-4 py-24 text-center",
        "data-ocid": "listing-detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-16 h-16 text-muted-foreground mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground mb-2", children: "Listing Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This listing may have been removed or the ID is invalid." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, "data-ocid": "listing-detail.back_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/browse", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            "Back to Browse"
          ] }) })
        ]
      }
    );
  }
  const formatCurrency = (n) => `$${Number(n).toLocaleString("en-US")}`;
  const formatNum = (n) => Number(n).toLocaleString("en-US");
  const listedDate = new Date(Number(listing.listedDate) / 1e6);
  const daysAgo = Math.floor((Date.now() - listedDate.getTime()) / 864e5);
  const nicheClass = NICHE_COLORS[listing.niche] ?? NICHE_COLORS.Other;
  const revenueNum = Number(listing.monthlyRevenue);
  const trafficNum = Number(listing.monthlyTraffic);
  const priceNum = Number(listing.askingPrice);
  const revenueMultiple = revenueNum > 0 ? priceNum / (revenueNum * 12) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "listing-detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden",
        "data-ocid": "listing-detail-hero",
        style: {
          background: "linear-gradient(135deg, oklch(0.08 0.015 270) 0%, oklch(0.12 0.04 270) 50%, oklch(0.10 0.03 195) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 opacity-[0.03]",
              style: {
                backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
                backgroundSize: "50px 50px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10",
              style: {
                background: "radial-gradient(circle, oklch(0.7 0.22 270), transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto px-4 sm:px-6 py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/browse",
                className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors group",
                "data-ocid": "listing-detail.back_link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 group-hover:-translate-x-0.5 transition-transform" }),
                  " ",
                  "Back to Browse"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `capitalize text-xs border ${statusColors[listing.status] ?? "bg-muted text-muted-foreground"}`,
                      children: listing.status
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${nicheClass}`,
                      children: listing.niche
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "capitalize text-xs", children: listing.platform })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-4xl font-bold font-display text-foreground mb-2 break-words", children: listing.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Listed ",
                    daysAgo === 0 ? "today" : `${daysAgo}d ago`
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: listing.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-primary transition-colors flex items-center gap-1 truncate max-w-xs",
                      "data-ocid": "listing-detail.url_link",
                      children: [
                        listing.url,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 flex-shrink-0" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold font-display gradient-text", children: formatCurrency(listing.askingPrice) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Asking price" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  WishlistButton,
                  {
                    listingId,
                    "data-ocid": "listing-detail.wishlist_button"
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-8",
        "data-ocid": "listing-detail-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: DollarSign,
                label: "Monthly Revenue",
                value: formatCurrency(listing.monthlyRevenue),
                numericValue: revenueNum,
                prefix: "$",
                sub: "avg/month"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: Users,
                label: "Monthly Traffic",
                value: formatNum(listing.monthlyTraffic),
                numericValue: trafficNum,
                sub: "unique visitors",
                accent: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: ChartColumn,
                label: "Revenue Multiple",
                value: listing.monthlyRevenue > 0n ? `${revenueMultiple.toFixed(1)}x` : "N/A",
                sub: "annual revenue"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: TrendingUp,
                label: "Price/Visitor",
                value: listing.monthlyTraffic > 0n ? `${(priceNum / trafficNum).toFixed(2)}` : "N/A",
                sub: "per monthly visitor",
                accent: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "section",
            {
              className: "mb-6",
              "data-ocid": "listing-detail.verified_revenue_section",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(VerifiedRevenueBadge, { listingId })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "md:col-span-2 glass-card rounded-2xl overflow-hidden",
                "data-ocid": "listing-detail.description_card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-primary to-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-3", children: "About This Website" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed whitespace-pre-line", children: listing.description || "No description provided." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4 bg-border/40" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
                      { label: "Seller", value: listing.sellerName },
                      { label: "Platform", value: listing.platform },
                      { label: "Niche", value: listing.niche },
                      { label: "Status", value: listing.status }
                    ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs uppercase tracking-wider", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground capitalize mt-0.5", children: value })
                    ] }, label)) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              auctionState ? /* @__PURE__ */ jsxRuntimeExports.jsx(AuctionPanel, { auction: auctionState, listingId }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: 20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  className: "glass-card rounded-2xl overflow-hidden",
                  "data-ocid": "listing-detail.contact_card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-primary via-accent to-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-sm", children: "Interested in buying?" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Contact our team to start the acquisition process." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          asChild: true,
                          className: "w-full glow-primary font-semibold",
                          "data-ocid": "listing-detail.contact_button",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 mr-2" }),
                            "Contact Us"
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outline",
                          asChild: true,
                          className: "w-full border-border/50 hover:border-accent/50 hover:text-accent",
                          "data-ocid": "listing-detail.browse_button",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/browse", children: "Browse More" })
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.1 },
                  className: "glass-card rounded-2xl p-4",
                  "data-ocid": "listing-detail.seller_card",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold", children: listing.sellerName.charAt(0).toUpperCase() }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm truncate", children: listing.sellerName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-[11px] mt-0.5 border-primary/40 text-primary",
                          children: "Verified Seller"
                        }
                      )
                    ] })
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-5", "data-ocid": "listing-detail.valuation_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ValuationBadge, { price: listing.askingPrice }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-6", "data-ocid": "listing-detail.trust_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrustScoreSection, { sellerId: listing.sellerName ?? "seller" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "section",
            {
              className: "mb-6",
              "data-ocid": "listing-detail.performance_section",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceReportCard, { listingId: listingId.toString() })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-8", "data-ocid": "listing-detail.reviews_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsSection, { listingId: listingId.toString() }) }),
          relatedListings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "section",
            {
              className: "mt-4 pt-8 border-t border-border/30",
              "data-ocid": "listing-detail.related_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    className: "mb-5",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-xl text-foreground", children: [
                      "Similar in",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: listing.niche })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory",
                    style: { scrollbarWidth: "none" },
                    children: relatedListings.map((rel, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, x: 20 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: true },
                        transition: { delay: i * 0.07 },
                        className: "snap-start",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCard, { listing: rel })
                      },
                      rel.id.toString()
                    ))
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  ListingDetail as default
};
