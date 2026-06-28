import { b as useSearch, r as reactExports, j as jsxRuntimeExports, B as Button } from "./index-BMZp6_Em.js";
import { B as Badge } from "./badge-DjffIZJ0.js";
import { u as ue } from "./index-2ADlaxLC.js";
import { f as useSubmitWebsite } from "./useListings-vMM7OeqO.js";
import { m as motion } from "./proxy-6ED74a2P.js";
import { S as Star } from "./star-Czm1eI8s.js";
import { A as ArrowRight } from "./arrow-right-C67gEsfO.js";
import { G as Globe } from "./globe-Dz_3xYco.js";
import { S as Shield } from "./shield-B4TWM6rZ.js";
import { D as DollarSign } from "./dollar-sign-DGhSPEC0.js";
import { C as ChartColumn } from "./chart-column-CZsnqYk3.js";
import { Z as Zap } from "./zap-DXCDsPRi.js";
import { C as CircleCheckBig } from "./circle-check-big-CuX00Sls.js";
const BENEFITS = [
  {
    icon: Shield,
    title: "Verified Buyers",
    desc: "Every buyer on WebStore is KYC-verified and financially pre-qualified.",
    accent: "text-primary"
  },
  {
    icon: DollarSign,
    title: "Secure Transactions",
    desc: "All payments flow through escrow, protecting both parties from fraud.",
    accent: "text-accent"
  },
  {
    icon: ChartColumn,
    title: "Expert Valuation",
    desc: "Free, data-backed valuation report using revenue multiples and market comps.",
    accent: "text-primary"
  },
  {
    icon: Zap,
    title: "Fast Sales",
    desc: "Median time-to-close on WebStore is 23 days — maximum exposure fast.",
    accent: "text-accent"
  }
];
const TIERS = [
  {
    name: "Basic",
    price: "Free",
    badge: null,
    highlight: false,
    features: [
      "1 active listing",
      "Standard directory placement",
      "Basic analytics",
      "Email support"
    ],
    cta: "List for Free"
  },
  {
    name: "Standard",
    price: "$49",
    badge: "Most Popular",
    highlight: true,
    features: [
      "Featured listing badge",
      "30-day homepage promotion",
      "Full analytics dashboard",
      "Priority email support"
    ],
    cta: "Get Standard"
  },
  {
    name: "Premium",
    price: "$99",
    badge: "Best Value",
    highlight: false,
    features: [
      "Featured + Promoted placement",
      "Homepage hero carousel slot",
      "Dedicated account manager",
      "Priority support & live chat"
    ],
    cta: "Get Premium"
  }
];
const VALUATION_STEPS = [
  {
    label: "Revenue Multiple",
    desc: "Most content and SaaS sites sell at 24–40× monthly net profit. Higher recurring revenue and low churn command the upper end."
  },
  {
    label: "Traffic Value",
    desc: "Organic traffic is an asset. Multiply monthly unique visitors by an industry cost-per-click estimate to arrive at a traffic-based floor value."
  },
  {
    label: "Asset Strength",
    desc: "Domain age, brand reputation, proprietary tech, and email list size all add premium on top of earnings-based valuations."
  },
  {
    label: "Growth Trend",
    desc: "Year-over-year growth of >20% can justify a 1.5–2× valuation premium versus stagnant or declining businesses."
  }
];
const NICHES = [
  "E-commerce",
  "SaaS / Software",
  "Content / Media",
  "Affiliate Marketing",
  "Marketplace",
  "Blog / Newsletter",
  "Lead Generation",
  "Other"
];
const PLATFORMS = [
  "Shopify",
  "WordPress",
  "Wix",
  "Webflow",
  "Custom / React",
  "Laravel / PHP",
  "Other"
];
const DEFAULT_FORM = {
  url: "",
  niche: "",
  platform: "",
  monthlyRevenue: "",
  monthlyTraffic: "",
  askingPrice: "",
  description: "",
  contactEmail: ""
};
const inputCls = "w-full px-3.5 py-3 rounded-xl border border-border/50 bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth backdrop-blur-sm";
const textareaCls = `${inputCls} resize-none overflow-y-auto`;
function FieldLabel({
  htmlFor,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "label",
    {
      htmlFor,
      className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2",
      children
    }
  );
}
function HeroSection() {
  const handleExplore = () => {
    var _a;
    (_a = document.getElementById("sell-form-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden",
      "data-ocid": "sell.hero",
      style: {
        background: "linear-gradient(135deg, oklch(0.08 0.015 270) 0%, oklch(0.13 0.045 270) 50%, oklch(0.09 0.03 195) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 opacity-[0.03]",
            style: {
              backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full opacity-10",
            style: {
              background: "radial-gradient(circle, oklch(0.7 0.22 270), transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8",
            style: {
              background: "radial-gradient(circle, oklch(0.78 0.24 195), transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 28 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              className: "max-w-3xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm font-medium text-primary mb-6 border border-primary/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }),
                  "Premium Marketplace"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "List" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text glow-text-primary", children: "Your Website" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl", children: "Reach thousands of verified buyers. Get expert valuation, secure escrow, and close deals in as little as 23 days." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "gap-2 glow-primary font-semibold text-base px-8",
                      onClick: handleExplore,
                      "data-ocid": "sell.hero_cta",
                      children: [
                        "Start Listing ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "lg",
                      className: "gap-2 glass-card border-border/50 hover:border-accent/50 hover:text-accent",
                      onClick: handleExplore,
                      "data-ocid": "sell.hero_secondary_cta",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4" }),
                        " See How It Works"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
              className: "mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border/30 pt-10",
              children: [
                { value: "5,800+", label: "Verified Buyers" },
                { value: "23 days", label: "Median Time-to-Close" },
                { value: "$4.2M+", label: "Total Transactions" },
                { value: "98%", label: "Seller Satisfaction" }
              ].map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl gradient-text", children: value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: label })
              ] }, label))
            }
          )
        ] })
      ]
    }
  );
}
function BenefitsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "bg-background py-20 px-4 sm:px-6",
      "data-ocid": "sell.benefits",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "text-center mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-3", children: [
                "Why sell on ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "WebStore" }),
                "?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "The fastest, safest way to exit your online business." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: BENEFITS.map(({ icon: Icon, title, desc, accent }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.1 },
            className: "glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 group",
            "data-ocid": `sell.benefit.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-11 h-11 rounded-xl glass-card border flex items-center justify-center ${accent} ${accent === "text-primary" ? "border-primary/30" : "border-accent/30"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1.5", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: desc })
              ] })
            ]
          },
          title
        )) })
      ] })
    }
  );
}
function PricingSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "bg-background py-20 px-4 sm:px-6",
      id: "pricing",
      "data-ocid": "sell.pricing",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-3", children: [
              "Pick your ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "listing plan" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: TIERS.map((tier, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.45, delay: i * 0.1 },
            className: [
              "relative rounded-2xl p-6 flex flex-col gap-5 transition-smooth overflow-hidden",
              tier.highlight ? "glass-card border-primary/50 glow-primary" : "glass-card glass-card-hover"
            ].join(" "),
            "data-ocid": `sell.tier.${i + 1}`,
            children: [
              tier.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" }),
              tier.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground", children: tier.badge }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1", children: tier.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-4xl text-foreground", children: tier.price })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 flex-1", children: tier.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2.5 text-sm text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5" }),
                    f
                  ]
                },
                f
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: tier.highlight ? "default" : "outline",
                  className: [
                    "w-full font-semibold",
                    tier.highlight ? "glow-primary" : "border-border/50 hover:border-primary/50"
                  ].join(" "),
                  onClick: () => {
                    var _a;
                    return (_a = document.getElementById("sell-form-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                  },
                  "data-ocid": `sell.tier.${i + 1}.cta`,
                  children: tier.cta
                }
              )
            ]
          },
          tier.name
        )) })
      ] })
    }
  );
}
function ValuationGuide() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "valuation-guide",
      className: "bg-muted/20 py-20 px-4 sm:px-6",
      "data-ocid": "sell.valuation-guide",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-3", children: [
              "How is your website ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "valued?" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: VALUATION_STEPS.map(({ label, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.08 },
            className: "glass-card rounded-xl px-6 py-5 flex items-start gap-4",
            "data-ocid": `sell.valuation-step.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center text-sm font-bold", children: i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: desc })
              ] })
            ]
          },
          label
        )) })
      ] })
    }
  );
}
function SubmissionForm() {
  const [form, setForm] = reactExports.useState(DEFAULT_FORM);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const { mutateAsync, isPending } = useSubmitWebsite();
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.url || !form.niche || !form.contactEmail) {
      ue.error("Please fill in the required fields (URL, niche, email).");
      return;
    }
    try {
      await mutateAsync({
        url: form.url,
        niche: form.niche,
        platform: form.platform,
        monthlyRevenue: form.monthlyRevenue ? BigInt(Math.round(Number(form.monthlyRevenue))) : BigInt(0),
        monthlyTraffic: form.monthlyTraffic ? BigInt(Math.round(Number(form.monthlyTraffic))) : BigInt(0),
        askingPrice: form.askingPrice ? BigInt(Math.round(Number(form.askingPrice))) : BigInt(0),
        description: form.description,
        contactEmail: form.contactEmail
      });
      setSubmitted(true);
      ue.success("Listing submitted! We'll review and publish it shortly.");
    } catch {
      ue.error(
        "Submission failed. Please check your details and try again."
      );
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: "glass-card rounded-2xl p-10 text-center",
        "data-ocid": "sell.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5 glow-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "Listing Submitted!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Our team will review your website and publish the listing within 24 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => {
                setSubmitted(false);
                setForm(DEFAULT_FORM);
              },
              "data-ocid": "sell.submit_another_button",
              children: "Submit Another Listing"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "space-y-5",
      "data-ocid": "sell.listing-form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-primary to-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/40 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-5 rounded-full bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Website Details" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "url", children: "Website URL *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "url",
                    type: "url",
                    value: form.url,
                    onChange: set("url"),
                    placeholder: "https://yourwebsite.com",
                    required: true,
                    className: inputCls,
                    "data-ocid": "sell.url_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "niche", children: "Niche *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "niche",
                    value: form.niche,
                    onChange: set("niche"),
                    required: true,
                    className: inputCls,
                    "data-ocid": "sell.niche_select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select niche…" }),
                      NICHES.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n, children: n }, n))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "platform", children: "Platform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "platform",
                    value: form.platform,
                    onChange: set("platform"),
                    className: inputCls,
                    "data-ocid": "sell.platform_select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select platform…" }),
                      PLATFORMS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, children: p }, p))
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-accent to-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/40 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-5 rounded-full bg-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Financials & Traffic" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "monthlyRevenue", children: "Monthly Revenue (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "monthlyRevenue",
                    type: "number",
                    min: 0,
                    value: form.monthlyRevenue,
                    onChange: set("monthlyRevenue"),
                    placeholder: "e.g. 50000",
                    className: inputCls,
                    "data-ocid": "sell.revenue_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "monthlyTraffic", children: "Monthly Traffic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "monthlyTraffic",
                    type: "number",
                    min: 0,
                    value: form.monthlyTraffic,
                    onChange: set("monthlyTraffic"),
                    placeholder: "e.g. 15000",
                    className: inputCls,
                    "data-ocid": "sell.traffic_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "askingPrice", children: "Asking Price (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "askingPrice",
                    type: "number",
                    min: 0,
                    value: form.askingPrice,
                    onChange: set("askingPrice"),
                    placeholder: "e.g. 500000",
                    className: inputCls,
                    "data-ocid": "sell.price_input"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-primary/70 to-accent/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/40 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-5 rounded-full bg-primary/70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Description & Contact" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "description", children: "Website Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "description",
                  value: form.description,
                  onChange: set("description"),
                  rows: 4,
                  placeholder: "Describe your website, revenue model, growth history, and what makes it valuable…",
                  className: textareaCls,
                  "data-ocid": "sell.description_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "contactEmail", children: "Contact Email *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "contactEmail",
                  type: "email",
                  value: form.contactEmail,
                  onChange: set("contactEmail"),
                  placeholder: "you@example.com",
                  required: true,
                  className: inputCls,
                  "data-ocid": "sell.email_input"
                }
              )
            ] })
          ] })
        ] }),
        (form.monthlyRevenue || form.monthlyTraffic || form.askingPrice) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            className: "glass-card rounded-2xl overflow-hidden border-accent/30",
            "data-ocid": "sell.valuation-preview",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-accent to-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-accent", children: "Valuation Snapshot" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
                  form.monthlyRevenue && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-xl gradient-text", children: [
                      "₹",
                      Number(form.monthlyRevenue).toLocaleString("en-IN")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Monthly Revenue" })
                  ] }),
                  form.monthlyTraffic && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xl text-accent", children: Number(form.monthlyTraffic).toLocaleString() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Monthly Visitors" })
                  ] }),
                  form.askingPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-xl gradient-text", children: [
                      "₹",
                      Number(form.askingPrice).toLocaleString("en-IN")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Asking Price" })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            disabled: isPending,
            size: "lg",
            className: "w-full gap-2 glow-primary font-semibold text-base",
            "data-ocid": "sell.submit_button",
            children: [
              isPending ? "Submitting…" : "Submit Listing",
              !isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ]
    }
  );
}
function Sell() {
  const search = useSearch({ from: "/sell" });
  reactExports.useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#submit-form" || hash === "#sell-form-section" || (search == null ? void 0 : search.scrollToForm)) {
      setTimeout(() => {
        var _a;
        (_a = document.getElementById("sell-form-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }, [search == null ? void 0 : search.scrollToForm]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "sell.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BenefitsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ValuationGuide, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PricingSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "sell-form-section",
        className: "bg-muted/20 py-20 px-4 sm:px-6",
        "data-ocid": "sell.form-section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-3", children: [
                  "Ready to ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "list your website" }),
                  "?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Fill in the details below and our team will review your listing within 24 hours." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SubmissionForm, {})
        ] })
      }
    )
  ] });
}
export {
  Sell as default
};
