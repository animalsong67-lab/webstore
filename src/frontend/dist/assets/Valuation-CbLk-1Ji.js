import { c as createLucideIcon, r as reactExports, u as useNavigate, j as jsxRuntimeExports, B as Button, S as Search } from "./index-BMZp6_Em.js";
import { C as Card, c as CardContent } from "./card-BMyulF-h.js";
import { I as Input } from "./index-B_NUkB8x.js";
import { L as Label } from "./label-DeWJEbbv.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-WtMna1Q8.js";
import { w as useCalculateValuation } from "./useListings-vMM7OeqO.js";
import { b as Variant_ads_recurring_affiliate_product, c as Variant_mixed_diverse_single, R as RevenueTrend } from "./backend.d-Dja6JkNT.js";
import { m as motion } from "./proxy-6ED74a2P.js";
import { C as ChartColumn } from "./chart-column-CZsnqYk3.js";
import { S as ShieldCheck } from "./shield-check-GL8POgqZ.js";
import { T as TriangleAlert } from "./triangle-alert-fRM0DjG-.js";
import { T as TrendingUp } from "./trending-up-CwCDh1V9.js";
import { A as ArrowRight } from "./arrow-right-C67gEsfO.js";
import "./index-C1D-nLKY.js";
import "./index-CTziNQqR.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
];
const IndianRupee = createLucideIcon("indian-rupee", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd"
    }
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2"
    }
  ]
];
const Sprout = createLucideIcon("sprout", __iconNode);
const t = {
  useValuation: "Use This Valuation | इस मूल्यांकन का उपयोग करें",
  errorFallback: "Valuation failed. Please try again."
};
function bilingual(label) {
  const [en, hi] = label.split(" | ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: en }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm text-muted-foreground font-normal", children: hi })
  ] });
}
const DEFAULT_FORM = {
  monthlyRevenue: "",
  monthlyTraffic: "",
  domainAuthority: "",
  domainAgeYears: "",
  revenueTrend: "",
  trafficDiversification: "",
  revenueType: ""
};
function formatINR(n) {
  return `₹${Number(n).toLocaleString("en-IN")}`;
}
function scoreColor(score, invert = false) {
  const s = invert ? 100 - score : score;
  if (s >= 75) return "text-success";
  if (s >= 50) return "text-amber-500";
  return "text-destructive";
}
function scoreBg(score, invert = false) {
  const s = invert ? 100 - score : score;
  if (s >= 75) return "bg-success";
  if (s >= 50) return "bg-amber-500";
  return "bg-destructive";
}
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden",
      style: {
        background: "radial-gradient(ellipse 80% 70% at 20% 30%, oklch(0.55 0.22 270 / 0.4) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, oklch(0.78 0.24 195 / 0.3) 0%, transparent 55%), oklch(0.08 0.015 270)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 opacity-[0.035]",
            style: {
              backgroundImage: "linear-gradient(oklch(0.7 0.22 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 270) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute -top-16 left-1/4 w-72 h-72 rounded-full pointer-events-none animate-float",
            style: {
              background: "radial-gradient(circle, oklch(0.7 0.22 270 / 0.25) 0%, transparent 70%)",
              filter: "blur(40px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute bottom-0 right-10 w-56 h-56 rounded-full pointer-events-none animate-float",
            style: {
              background: "radial-gradient(circle, oklch(0.78 0.24 195 / 0.2) 0%, transparent 70%)",
              filter: "blur(32px)",
              animationDelay: "1.5s"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 28 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            className: "max-w-2xl mx-auto space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass-card border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-4 h-4" }),
                "AI-Powered Estimator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl sm:text-5xl leading-[1.1] tracking-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text glow-text-primary", children: "AI Website Valuation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-2xl sm:text-3xl text-muted-foreground font-medium mt-1", children: "वेबसाइट मूल्यांकन" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto", children: "Get an instant, formula-based market estimate using traffic, revenue, SEO, and growth metrics." })
            ]
          }
        ) })
      ]
    }
  );
}
const glowInputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/25 focus:bg-primary/5 transition-all duration-300 text-sm backdrop-blur-sm";
function ValuationForm({
  form,
  setForm,
  onSubmit,
  isPending
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-card rounded-2xl border border-white/10 p-7 sm:p-10",
      style: { boxShadow: "0 0 40px oklch(0.7 0.22 270 / 0.08)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8 pb-5 border-b border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_16px_oklch(0.7_0.22_270/0.4)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-lg", children: "Enter Website Metrics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "वेबसाइट मेट्रिक्स दर्ज करें" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Monthly Revenue (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "monthlyRevenue",
                type: "number",
                min: 0,
                placeholder: "e.g. 50000",
                value: form.monthlyRevenue,
                onChange: (e) => setForm((f) => ({ ...f, monthlyRevenue: e.target.value })),
                className: glowInputCls,
                "data-ocid": "valuation.input.monthlyRevenue"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Monthly Traffic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "monthlyTraffic",
                type: "number",
                min: 0,
                placeholder: "e.g. 15000",
                value: form.monthlyTraffic,
                onChange: (e) => setForm((f) => ({ ...f, monthlyTraffic: e.target.value })),
                className: glowInputCls,
                "data-ocid": "valuation.input.monthlyTraffic"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Domain Authority (0–100)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "domainAuthority",
                type: "number",
                min: 0,
                max: 100,
                placeholder: "e.g. 45",
                value: form.domainAuthority,
                onChange: (e) => setForm((f) => ({ ...f, domainAuthority: e.target.value })),
                className: glowInputCls,
                "data-ocid": "valuation.input.domainAuthority"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Domain Age (years)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "domainAgeYears",
                type: "number",
                min: 0,
                placeholder: "e.g. 3",
                value: form.domainAgeYears,
                onChange: (e) => setForm((f) => ({ ...f, domainAgeYears: e.target.value })),
                className: glowInputCls,
                "data-ocid": "valuation.input.domainAge"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Revenue Trend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.revenueTrend,
                onValueChange: (v) => setForm((f) => ({ ...f, revenueTrend: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "valuation.select.revenueTrend",
                      className: glowInputCls,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select trend" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "up", children: "📈 Growing" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "flat", children: "➡️ Stable" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "down", children: "📉 Declining" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Traffic Diversification" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.trafficDiversification,
                onValueChange: (v) => setForm((f) => ({
                  ...f,
                  trafficDiversification: v
                })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "valuation.select.trafficDiv",
                      className: glowInputCls,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select traffic mix" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "diverse", children: "🌐 Diverse (SEO + Social + Direct)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "mixed", children: "🔀 Mixed (2 sources)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", children: "📍 Single Source" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Revenue Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.revenueType,
                onValueChange: (v) => setForm((f) => ({ ...f, revenueType: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "valuation.select.revenueType",
                      className: glowInputCls,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select revenue type" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "recurring", children: "🔄 Recurring / SaaS" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "affiliate", children: "🤝 Affiliate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ads", children: "📢 Ads / AdSense" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "product", children: "🛍️ Products / E-commerce" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: isPending,
              className: "w-full h-12 text-base font-semibold glow-primary ripple-button",
              "data-ocid": "valuation.submit_button",
              children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }),
                "Calculating…"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5" }),
                "Calculate Valuation"
              ] })
            }
          ) })
        ] })
      ]
    }
  );
}
function LoadingCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-16 text-center space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-primary animate-pulse-dot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-3 h-3 rounded-full bg-primary animate-pulse-dot",
          style: { animationDelay: "0.2s" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-3 h-3 rounded-full bg-primary animate-pulse-dot",
          style: { animationDelay: "0.4s" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium", children: "Analyzing your website metrics…" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "आपकी वेबसाइट मेट्रिक्स का विश्लेषण किया जा रहा है…" })
  ] }) });
}
function BarFill({
  pct,
  invert = false,
  color
}) {
  const [width, setWidth] = reactExports.useState(0);
  const ref = reactExports.useRef(false);
  if (!ref.current) {
    ref.current = true;
  }
  reactExports.useEffect(() => {
    const t2 = setTimeout(() => setWidth(invert ? 100 - pct : pct), 100);
    return () => clearTimeout(t2);
  }, [pct, invert]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `h-full rounded-full ${color} transition-all duration-700`,
      style: { width: `${width}%` }
    }
  );
}
function ResultSection({
  result,
  onUseValuation
}) {
  const min = Number(result.estimatedMin);
  const max = Number(result.estimatedMax);
  const mid = (min + max) / 2;
  const seo = Number(result.seoScore);
  const growth = Number(result.growthPotential);
  const risk = Number(result.riskScore);
  const trendAdj = Number(result.trendAdjustment);
  const metrics = [
    {
      icon: ChartColumn,
      label: "Traffic Analysis | ट्रैफ़िक विश्लेषण",
      value: `+${Number(result.trafficBonus)}`,
      sub: "Bonus points from traffic volume",
      color: "text-primary"
    },
    {
      icon: Search,
      label: "SEO Score | SEO स्कोर",
      value: `${seo}/100`,
      sub: "Search engine optimization strength",
      color: scoreColor(seo),
      bar: seo
    },
    {
      icon: IndianRupee,
      label: "Revenue Estimation | राजस्व अनुमान",
      value: `${Number(result.baseMultiple)}× monthly`,
      sub: "Base revenue multiple applied",
      color: "text-primary"
    },
    {
      icon: ShieldCheck,
      label: "Domain Authority | डोमेन अथॉरिटी",
      value: `+${Number(result.daBonus)}`,
      sub: "Bonus from domain strength",
      color: "text-primary"
    },
    {
      icon: Sprout,
      label: "Growth Potential | विकास क्षमता",
      value: `${growth}%`,
      sub: "Projected future growth",
      color: scoreColor(growth),
      bar: growth
    },
    {
      icon: TriangleAlert,
      label: "Risk Score | जोखिम स्कोर",
      value: `${risk}/100`,
      sub: "Lower is better | कम बेहतर",
      color: scoreColor(risk, true),
      bar: risk,
      invertBar: true
    },
    {
      icon: Activity,
      label: "Trend Adjustment | प्रवृत्ति समायोजन",
      value: `${trendAdj > 0 ? "+" : ""}${trendAdj}`,
      sub: "Revenue trend impact",
      color: trendAdj >= 0 ? "text-success" : "text-destructive"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      className: "space-y-6",
      "data-ocid": "valuation.result.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "glass-card rounded-2xl overflow-hidden border border-primary/30",
            style: { boxShadow: "0 0 40px oklch(0.7 0.22 270 / 0.12)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center space-y-4 px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
                "Estimated Market Value"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground uppercase tracking-wide font-medium", children: "Price Range | मूल्य सीमा" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-4xl sm:text-5xl text-foreground", children: [
                  formatINR(result.estimatedMin),
                  " –",
                  " ",
                  formatINR(result.estimatedMax)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-muted-foreground", children: [
                  "Midpoint: ",
                  formatINR(BigInt(Math.round(mid)))
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "valuation-meter h-3 rounded-full bg-[oklch(var(--valuation-meter-bg))] overflow-hidden max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full bg-[oklch(var(--valuation-meter-fill))] transition-all duration-1000",
                  style: {
                    width: `${Math.min(100, Math.max(0, mid / 5e6 * 100))}%`
                  }
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-4", children: "Detailed Metrics | विस्तृत मेट्रिक्स" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: metrics.map(
            ({ icon: Icon, label, value, sub, color, bar, invertBar }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, delay: i * 0.08 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "glass-card glass-card-hover rounded-xl p-5 border border-border/50 h-full transition-all duration-300",
                    style: bar !== void 0 ? { boxShadow: "0 0 20px oklch(0.7 0.22 270 / 0.06)" } : {},
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 ${color}` }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: bilingual(label) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-bold ${color} mt-0.5`, children: value }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: sub }),
                        bar !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          BarFill,
                          {
                            pct: bar,
                            invert: invertBar,
                            color: scoreBg(bar, invertBar)
                          }
                        ) })
                      ] })
                    ] })
                  }
                )
              },
              label
            )
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "lg",
            className: "font-semibold gap-2 glow-primary",
            onClick: onUseValuation,
            "data-ocid": "valuation.use_valuation_button",
            children: [
              bilingual(t.useValuation),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ) })
      ]
    }
  );
}
function ValuationPage() {
  const [form, setForm] = reactExports.useState(DEFAULT_FORM);
  const mutation = useCalculateValuation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.monthlyRevenue || !form.monthlyTraffic || !form.domainAuthority || !form.domainAgeYears || !form.revenueTrend || !form.trafficDiversification || !form.revenueType)
      return;
    mutation.mutate({
      monthlyRevenue: BigInt(form.monthlyRevenue),
      monthlyTraffic: BigInt(form.monthlyTraffic),
      domainAuthority: BigInt(form.domainAuthority),
      domainAgeYears: BigInt(form.domainAgeYears),
      revenueTrend: RevenueTrend[form.revenueTrend],
      trafficDiversification: Variant_mixed_diverse_single[form.trafficDiversification],
      revenueType: Variant_ads_recurring_affiliate_product[form.revenueType]
    });
  };
  const handleUseValuation = () => {
    if (!mutation.data) return;
    const suggested = Number(mutation.data.estimatedMax);
    navigate({ to: "/sell", search: { suggestedPrice: suggested } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "valuation.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.15 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ValuationForm,
            {
              form,
              setForm,
              onSubmit: handleSubmit,
              isPending: mutation.isPending
            }
          )
        }
      ),
      mutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingCard, {}),
      mutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive flex items-center gap-2",
          "data-ocid": "valuation.error_state",
          children: mutation.error instanceof Error ? mutation.error.message : t.errorFallback
        }
      ),
      mutation.data && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ResultSection,
        {
          result: mutation.data,
          onUseValuation: handleUseValuation
        }
      )
    ] })
  ] });
}
export {
  ValuationPage as default
};
