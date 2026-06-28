import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSearch } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  DollarSign,
  Globe,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitWebsite } from "../hooks/useListings";

/* ── Data ─────────────────────────────────────────────────── */

const BENEFITS = [
  {
    icon: Shield,
    title: "Verified Buyers",
    desc: "Every buyer on WebStore is KYC-verified and financially pre-qualified.",
    accent: "text-primary",
  },
  {
    icon: DollarSign,
    title: "Secure Transactions",
    desc: "All payments flow through escrow, protecting both parties from fraud.",
    accent: "text-accent",
  },
  {
    icon: BarChart3,
    title: "Expert Valuation",
    desc: "Free, data-backed valuation report using revenue multiples and market comps.",
    accent: "text-primary",
  },
  {
    icon: Zap,
    title: "Fast Sales",
    desc: "Median time-to-close on WebStore is 23 days — maximum exposure fast.",
    accent: "text-accent",
  },
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
      "Email support",
    ],
    cta: "List for Free",
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
      "Priority email support",
    ],
    cta: "Get Standard",
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
      "Priority support & live chat",
    ],
    cta: "Get Premium",
  },
];

const VALUATION_STEPS = [
  {
    label: "Revenue Multiple",
    desc: "Most content and SaaS sites sell at 24–40× monthly net profit. Higher recurring revenue and low churn command the upper end.",
  },
  {
    label: "Traffic Value",
    desc: "Organic traffic is an asset. Multiply monthly unique visitors by an industry cost-per-click estimate to arrive at a traffic-based floor value.",
  },
  {
    label: "Asset Strength",
    desc: "Domain age, brand reputation, proprietary tech, and email list size all add premium on top of earnings-based valuations.",
  },
  {
    label: "Growth Trend",
    desc: "Year-over-year growth of >20% can justify a 1.5–2× valuation premium versus stagnant or declining businesses.",
  },
];

const NICHES = [
  "E-commerce",
  "SaaS / Software",
  "Content / Media",
  "Affiliate Marketing",
  "Marketplace",
  "Blog / Newsletter",
  "Lead Generation",
  "Other",
];

const PLATFORMS = [
  "Shopify",
  "WordPress",
  "Wix",
  "Webflow",
  "Custom / React",
  "Laravel / PHP",
  "Other",
];

/* ── Types ────────────────────────────────────────────────── */

interface FormState {
  url: string;
  niche: string;
  platform: string;
  monthlyRevenue: string;
  monthlyTraffic: string;
  askingPrice: string;
  description: string;
  contactEmail: string;
}

const DEFAULT_FORM: FormState = {
  url: "",
  niche: "",
  platform: "",
  monthlyRevenue: "",
  monthlyTraffic: "",
  askingPrice: "",
  description: "",
  contactEmail: "",
};

/* ── Field helpers ────────────────────────────────────────── */

const inputCls =
  "w-full px-3.5 py-3 rounded-xl border border-border/50 bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth backdrop-blur-sm";

const textareaCls = `${inputCls} resize-none overflow-y-auto`;

function FieldLabel({
  htmlFor,
  children,
}: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
    >
      {children}
    </label>
  );
}

/* ── Sub-sections ─────────────────────────────────────────── */

function HeroSection() {
  const handleExplore = () => {
    document
      .getElementById("sell-form-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden"
      data-ocid="sell.hero"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.08 0.015 270) 0%, oklch(0.13 0.045 270) 50%, oklch(0.09 0.03 195) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.22 270), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.24 195), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm font-medium text-primary mb-6 border border-primary/30">
            <Star className="w-4 h-4" />
            Premium Marketplace
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            <span className="text-foreground">List</span>{" "}
            <span className="gradient-text glow-text-primary">
              Your Website
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Reach thousands of verified buyers. Get expert valuation, secure
            escrow, and close deals in as little as 23 days.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gap-2 glow-primary font-semibold text-base px-8"
              onClick={handleExplore}
              data-ocid="sell.hero_cta"
            >
              Start Listing <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 glass-card border-border/50 hover:border-accent/50 hover:text-accent"
              onClick={handleExplore}
              data-ocid="sell.hero_secondary_cta"
            >
              <Globe className="w-4 h-4" /> See How It Works
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border/30 pt-10"
        >
          {[
            { value: "5,800+", label: "Verified Buyers" },
            { value: "23 days", label: "Median Time-to-Close" },
            { value: "$4.2M+", label: "Total Transactions" },
            { value: "98%", label: "Seller Satisfaction" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display font-bold text-2xl gradient-text">
                {value}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section
      className="bg-background py-20 px-4 sm:px-6"
      data-ocid="sell.benefits"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
            Why sell on <span className="gradient-text">WebStore</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The fastest, safest way to exit your online business.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map(({ icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 group"
              data-ocid={`sell.benefit.${i + 1}`}
            >
              <div
                className={`w-11 h-11 rounded-xl glass-card border flex items-center justify-center ${accent} ${accent === "text-primary" ? "border-primary/30" : "border-accent/30"}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section
      className="bg-background py-20 px-4 sm:px-6"
      id="pricing"
      data-ocid="sell.pricing"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
            Pick your <span className="gradient-text">listing plan</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={[
                "relative rounded-2xl p-6 flex flex-col gap-5 transition-smooth overflow-hidden",
                tier.highlight
                  ? "glass-card border-primary/50 glow-primary"
                  : "glass-card glass-card-hover",
              ].join(" ")}
              data-ocid={`sell.tier.${i + 1}`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
              )}
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  {tier.badge}
                </Badge>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  {tier.name}
                </p>
                <p className="font-display font-bold text-4xl text-foreground">
                  {tier.price}
                </p>
              </div>
              <ul className="space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlight ? "default" : "outline"}
                className={[
                  "w-full font-semibold",
                  tier.highlight
                    ? "glow-primary"
                    : "border-border/50 hover:border-primary/50",
                ].join(" ")}
                onClick={() =>
                  document
                    .getElementById("sell-form-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid={`sell.tier.${i + 1}.cta`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuationGuide() {
  return (
    <section
      id="valuation-guide"
      className="bg-muted/20 py-20 px-4 sm:px-6"
      data-ocid="sell.valuation-guide"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
            How is your website <span className="gradient-text">valued?</span>
          </h2>
        </motion.div>
        <div className="space-y-4">
          {VALUATION_STEPS.map(({ label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl px-6 py-5 flex items-start gap-4"
              data-ocid={`sell.valuation-step.${i + 1}`}
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground mb-1">{label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main submission form ─────────────────────────────────── */

function SubmissionForm() {
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitWebsite();

  const set =
    (k: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.url || !form.niche || !form.contactEmail) {
      toast.error("Please fill in the required fields (URL, niche, email).");
      return;
    }
    try {
      await mutateAsync({
        url: form.url,
        niche: form.niche,
        platform: form.platform,
        monthlyRevenue: form.monthlyRevenue
          ? BigInt(Math.round(Number(form.monthlyRevenue)))
          : BigInt(0),
        monthlyTraffic: form.monthlyTraffic
          ? BigInt(Math.round(Number(form.monthlyTraffic)))
          : BigInt(0),
        askingPrice: form.askingPrice
          ? BigInt(Math.round(Number(form.askingPrice)))
          : BigInt(0),
        description: form.description,
        contactEmail: form.contactEmail,
      });
      setSubmitted(true);
      toast.success("Listing submitted! We'll review and publish it shortly.");
    } catch {
      toast.error(
        "Submission failed. Please check your details and try again.",
      );
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-10 text-center"
        data-ocid="sell.success_state"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5 glow-primary">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display font-bold text-2xl text-foreground mb-2">
          Listing Submitted!
        </h3>
        <p className="text-muted-foreground mb-6">
          Our team will review your website and publish the listing within 24
          hours.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setForm(DEFAULT_FORM);
          }}
          data-ocid="sell.submit_another_button"
        >
          Submit Another Listing
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      data-ocid="sell.listing-form"
    >
      {/* Website Details */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="h-0.5 w-full bg-gradient-to-r from-primary to-accent" />
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-2 border-b border-border/40 pb-4">
            <div className="w-1.5 h-5 rounded-full bg-primary" />
            <h3 className="font-display font-semibold text-foreground">
              Website Details
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="url">Website URL *</FieldLabel>
              <input
                id="url"
                type="url"
                value={form.url}
                onChange={set("url")}
                placeholder="https://yourwebsite.com"
                required
                className={inputCls}
                data-ocid="sell.url_input"
              />
            </div>
            <div>
              <FieldLabel htmlFor="niche">Niche *</FieldLabel>
              <select
                id="niche"
                value={form.niche}
                onChange={set("niche")}
                required
                className={inputCls}
                data-ocid="sell.niche_select"
              >
                <option value="">Select niche…</option>
                {NICHES.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <FieldLabel htmlFor="platform">Platform</FieldLabel>
              <select
                id="platform"
                value={form.platform}
                onChange={set("platform")}
                className={inputCls}
                data-ocid="sell.platform_select"
              >
                <option value="">Select platform…</option>
                {PLATFORMS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Financials */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="h-0.5 w-full bg-gradient-to-r from-accent to-primary" />
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-2 border-b border-border/40 pb-4">
            <div className="w-1.5 h-5 rounded-full bg-accent" />
            <h3 className="font-display font-semibold text-foreground">
              Financials &amp; Traffic
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <FieldLabel htmlFor="monthlyRevenue">
                Monthly Revenue (₹)
              </FieldLabel>
              <input
                id="monthlyRevenue"
                type="number"
                min={0}
                value={form.monthlyRevenue}
                onChange={set("monthlyRevenue")}
                placeholder="e.g. 50000"
                className={inputCls}
                data-ocid="sell.revenue_input"
              />
            </div>
            <div>
              <FieldLabel htmlFor="monthlyTraffic">Monthly Traffic</FieldLabel>
              <input
                id="monthlyTraffic"
                type="number"
                min={0}
                value={form.monthlyTraffic}
                onChange={set("monthlyTraffic")}
                placeholder="e.g. 15000"
                className={inputCls}
                data-ocid="sell.traffic_input"
              />
            </div>
            <div>
              <FieldLabel htmlFor="askingPrice">Asking Price (₹)</FieldLabel>
              <input
                id="askingPrice"
                type="number"
                min={0}
                value={form.askingPrice}
                onChange={set("askingPrice")}
                placeholder="e.g. 500000"
                className={inputCls}
                data-ocid="sell.price_input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description & Contact */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="h-0.5 w-full bg-gradient-to-r from-primary/70 to-accent/70" />
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-2 border-b border-border/40 pb-4">
            <div className="w-1.5 h-5 rounded-full bg-primary/70" />
            <h3 className="font-display font-semibold text-foreground">
              Description &amp; Contact
            </h3>
          </div>
          <div>
            <FieldLabel htmlFor="description">Website Description</FieldLabel>
            <textarea
              id="description"
              value={form.description}
              onChange={set("description")}
              rows={4}
              placeholder="Describe your website, revenue model, growth history, and what makes it valuable…"
              className={textareaCls}
              data-ocid="sell.description_textarea"
            />
          </div>
          <div>
            <FieldLabel htmlFor="contactEmail">Contact Email *</FieldLabel>
            <input
              id="contactEmail"
              type="email"
              value={form.contactEmail}
              onChange={set("contactEmail")}
              placeholder="you@example.com"
              required
              className={inputCls}
              data-ocid="sell.email_input"
            />
          </div>
        </div>
      </div>

      {/* Live Valuation Preview */}
      {(form.monthlyRevenue || form.monthlyTraffic || form.askingPrice) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl overflow-hidden border-accent/30"
          data-ocid="sell.valuation-preview"
        >
          <div className="h-0.5 w-full bg-gradient-to-r from-accent to-primary" />
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                Valuation Snapshot
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {form.monthlyRevenue && (
                <div className="text-center">
                  <p className="font-display font-bold text-xl gradient-text">
                    ₹{Number(form.monthlyRevenue).toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Monthly Revenue
                  </p>
                </div>
              )}
              {form.monthlyTraffic && (
                <div className="text-center">
                  <p className="font-display font-bold text-xl text-accent">
                    {Number(form.monthlyTraffic).toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Monthly Visitors
                  </p>
                </div>
              )}
              {form.askingPrice && (
                <div className="text-center">
                  <p className="font-display font-bold text-xl gradient-text">
                    ₹{Number(form.askingPrice).toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Asking Price
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      <Button
        type="submit"
        disabled={isPending}
        size="lg"
        className="w-full gap-2 glow-primary font-semibold text-base"
        data-ocid="sell.submit_button"
      >
        {isPending ? "Submitting…" : "Submit Listing"}
        {!isPending && <ArrowRight className="w-4 h-4" />}
      </Button>
    </form>
  );
}

/* ── Page ─────────────────────────────────────────────────── */

export default function Sell() {
  const search = useSearch({ from: "/sell" }) as { scrollToForm?: boolean };

  useEffect(() => {
    const hash = window.location.hash;
    if (
      hash === "#submit-form" ||
      hash === "#sell-form-section" ||
      search?.scrollToForm
    ) {
      setTimeout(() => {
        document
          .getElementById("sell-form-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }, [search?.scrollToForm]);

  return (
    <div className="min-h-screen bg-background" data-ocid="sell.page">
      <HeroSection />
      <BenefitsSection />
      <ValuationGuide />
      <PricingSection />
      <section
        id="sell-form-section"
        className="bg-muted/20 py-20 px-4 sm:px-6"
        data-ocid="sell.form-section"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              Ready to <span className="gradient-text">list your website</span>?
            </h2>
            <p className="text-muted-foreground">
              Fill in the details below and our team will review your listing
              within 24 hours.
            </p>
          </motion.div>
          <SubmissionForm />
        </div>
      </section>
    </div>
  );
}
