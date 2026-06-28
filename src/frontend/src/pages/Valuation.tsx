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
import { useCalculateValuation } from "@/hooks/useListings";
import { RevenueTrend, RevenueType, TrafficDiversification } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Calculator,
  IndianRupee,
  Search,
  ShieldCheck,
  Sprout,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/* ── Bilingual helpers ────────────────────────────────────── */

const t = {
  heroTitle: "AI Website Valuation | वेबसाइट मूल्यांकन",
  heroSubtitle:
    "Get an instant, formula-based market estimate for your website using traffic, revenue, SEO, and growth metrics.",
  heroSubtitleHi:
    "ट्रैफ़िक, राजस्व, SEO और विकास मेट्रिक्स का उपयोग करके अपनी वेबसाइट के लिए तुरंत, सूत्र-आधारित बाजार अनुमान प्राप्त करें।",
  formTitle: "Enter Website Metrics | वेबसाइट मेट्रिक्स दर्ज करें",
  monthlyRevenue: "Monthly Revenue (₹) | मासिक राजस्व (₹)",
  monthlyTraffic: "Monthly Traffic | मासिक ट्रैफ़िक",
  domainAuthority: "Domain Authority (0-100) | डोमेन अथॉरिटी",
  domainAge: "Domain Age (years) | डोमेन उम्र (साल)",
  revenueTrend: "Revenue Trend | राजस्व प्रवृत्ति",
  trafficDiversification: "Traffic Diversification | ट्रैफ़िक विविधीकरण",
  revenueType: "Revenue Type | राजस्व प्रकार",
  calculate: "Calculate Valuation | मूल्यांकन करें",
  calculating: "Calculating… | गणना हो रही है…",
  resultTitle: "Valuation Result | मूल्यांकन परिणाम",
  useValuation: "Use This Valuation | इस मूल्यांकन का उपयोग करें",
  errorFallback: "Valuation failed. Please try again.",
};

function bilingual(label: string) {
  const [en, hi] = label.split(" | ");
  return (
    <span className="block">
      <span className="block">{en}</span>
      <span className="block text-sm text-muted-foreground font-normal">
        {hi}
      </span>
    </span>
  );
}

/* ── Types ────────────────────────────────────────────────── */

type TrendKey = "up" | "down" | "flat" | "";
type TrafficKey = "single" | "mixed" | "diverse" | "";
type RevenueKey = "ads" | "recurring" | "affiliate" | "product" | "";

interface FormState {
  monthlyRevenue: string;
  monthlyTraffic: string;
  domainAuthority: string;
  domainAgeYears: string;
  revenueTrend: TrendKey;
  trafficDiversification: TrafficKey;
  revenueType: RevenueKey;
}

const DEFAULT_FORM: FormState = {
  monthlyRevenue: "",
  monthlyTraffic: "",
  domainAuthority: "",
  domainAgeYears: "",
  revenueTrend: "",
  trafficDiversification: "",
  revenueType: "",
};

/* ── Helpers ────────────────────────────────────────────────── */

function formatINR(n: bigint): string {
  return `₹${Number(n).toLocaleString("en-IN")}`;
}

function scoreColor(score: number, invert = false): string {
  const s = invert ? 100 - score : score;
  if (s >= 75) return "text-success";
  if (s >= 50) return "text-amber-500";
  return "text-destructive";
}

function scoreBg(score: number, invert = false): string {
  const s = invert ? 100 - score : score;
  if (s >= 75) return "bg-success";
  if (s >= 50) return "bg-amber-500";
  return "bg-destructive";
}

/* ── Components ─────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 20% 30%, oklch(0.55 0.22 270 / 0.4) 0%, transparent 60%), " +
          "radial-gradient(ellipse 60% 50% at 80% 70%, oklch(0.78 0.24 195 / 0.3) 0%, transparent 55%), " +
          "oklch(0.08 0.015 270)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.7 0.22 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 270) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-16 left-1/4 w-72 h-72 rounded-full pointer-events-none animate-float"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.22 270 / 0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-10 w-56 h-56 rounded-full pointer-events-none animate-float"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.24 195 / 0.2) 0%, transparent 70%)",
          filter: "blur(32px)",
          animationDelay: "1.5s",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-card border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
            <Calculator className="w-4 h-4" />
            AI-Powered Estimator
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.1] tracking-tight">
            <span className="gradient-text glow-text-primary">
              AI Website Valuation
            </span>
            <span className="block text-2xl sm:text-3xl text-muted-foreground font-medium mt-1">
              वेबसाइट मूल्यांकन
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Get an instant, formula-based market estimate using traffic,
            revenue, SEO, and growth metrics.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const glowInputCls =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 " +
  "focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/25 focus:bg-primary/5 " +
  "transition-all duration-300 text-sm backdrop-blur-sm";

function ValuationForm({
  form,
  setForm,
  onSubmit,
  isPending,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  onSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
}) {
  return (
    <div
      className="glass-card rounded-2xl border border-white/10 p-7 sm:p-10"
      style={{ boxShadow: "0 0 40px oklch(0.7 0.22 270 / 0.08)" }}
    >
      <div className="flex items-center gap-3 mb-8 pb-5 border-b border-white/10">
        <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_16px_oklch(0.7_0.22_270/0.4)]">
          <Calculator className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-display font-semibold text-foreground text-lg">
            Enter Website Metrics
          </h2>
          <p className="text-xs text-muted-foreground">वेबसाइट मेट्रिक्स दर्ज करें</p>
        </div>
      </div>
      <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Monthly Revenue (₹)
          </Label>
          <Input
            id="monthlyRevenue"
            type="number"
            min={0}
            placeholder="e.g. 50000"
            value={form.monthlyRevenue}
            onChange={(e) =>
              setForm((f) => ({ ...f, monthlyRevenue: e.target.value }))
            }
            className={glowInputCls}
            data-ocid="valuation.input.monthlyRevenue"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Monthly Traffic
          </Label>
          <Input
            id="monthlyTraffic"
            type="number"
            min={0}
            placeholder="e.g. 15000"
            value={form.monthlyTraffic}
            onChange={(e) =>
              setForm((f) => ({ ...f, monthlyTraffic: e.target.value }))
            }
            className={glowInputCls}
            data-ocid="valuation.input.monthlyTraffic"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Domain Authority (0–100)
          </Label>
          <div className="flex items-center gap-3">
            <Input
              id="domainAuthority"
              type="number"
              min={0}
              max={100}
              placeholder="e.g. 45"
              value={form.domainAuthority}
              onChange={(e) =>
                setForm((f) => ({ ...f, domainAuthority: e.target.value }))
              }
              className={glowInputCls}
              data-ocid="valuation.input.domainAuthority"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Domain Age (years)
          </Label>
          <Input
            id="domainAgeYears"
            type="number"
            min={0}
            placeholder="e.g. 3"
            value={form.domainAgeYears}
            onChange={(e) =>
              setForm((f) => ({ ...f, domainAgeYears: e.target.value }))
            }
            className={glowInputCls}
            data-ocid="valuation.input.domainAge"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Revenue Trend
          </Label>
          <Select
            value={form.revenueTrend}
            onValueChange={(v) =>
              setForm((f) => ({ ...f, revenueTrend: v as TrendKey }))
            }
          >
            <SelectTrigger
              data-ocid="valuation.select.revenueTrend"
              className={glowInputCls}
            >
              <SelectValue placeholder="Select trend" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="up">📈 Growing</SelectItem>
              <SelectItem value="flat">➡️ Stable</SelectItem>
              <SelectItem value="down">📉 Declining</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Traffic Diversification
          </Label>
          <Select
            value={form.trafficDiversification}
            onValueChange={(v) =>
              setForm((f) => ({
                ...f,
                trafficDiversification: v as TrafficKey,
              }))
            }
          >
            <SelectTrigger
              data-ocid="valuation.select.trafficDiv"
              className={glowInputCls}
            >
              <SelectValue placeholder="Select traffic mix" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="diverse">
                🌐 Diverse (SEO + Social + Direct)
              </SelectItem>
              <SelectItem value="mixed">🔀 Mixed (2 sources)</SelectItem>
              <SelectItem value="single">📍 Single Source</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Revenue Type
          </Label>
          <Select
            value={form.revenueType}
            onValueChange={(v) =>
              setForm((f) => ({ ...f, revenueType: v as RevenueKey }))
            }
          >
            <SelectTrigger
              data-ocid="valuation.select.revenueType"
              className={glowInputCls}
            >
              <SelectValue placeholder="Select revenue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recurring">🔄 Recurring / SaaS</SelectItem>
              <SelectItem value="affiliate">🤝 Affiliate</SelectItem>
              <SelectItem value="ads">📢 Ads / AdSense</SelectItem>
              <SelectItem value="product">🛍️ Products / E-commerce</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-12 text-base font-semibold glow-primary ripple-button"
            data-ocid="valuation.submit_button"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Calculating…
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Calculate Valuation
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

function LoadingCard() {
  return (
    <Card className="border-border">
      <CardContent className="py-16 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse-dot" />
          <div
            className="w-3 h-3 rounded-full bg-primary animate-pulse-dot"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-3 h-3 rounded-full bg-primary animate-pulse-dot"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
        <p className="text-muted-foreground font-medium">
          Analyzing your website metrics…
        </p>
        <p className="text-sm text-muted-foreground">
          आपकी वेबसाइट मेट्रिक्स का विश्लेषण किया जा रहा है…
        </p>
      </CardContent>
    </Card>
  );
}

function BarFill({
  pct,
  invert = false,
  color,
}: { pct: number; invert?: boolean; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(false);
  if (!ref.current) {
    ref.current = true;
  }
  useEffect(() => {
    const t = setTimeout(() => setWidth(invert ? 100 - pct : pct), 100);
    return () => clearTimeout(t);
  }, [pct, invert]);
  return (
    <div
      className={`h-full rounded-full ${color} transition-all duration-700`}
      style={{ width: `${width}%` }}
    />
  );
}

function ResultSection({
  result,
  onUseValuation,
}: {
  result: import("@/types").ValuationResult;
  onUseValuation: () => void;
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
      icon: BarChart3,
      label: "Traffic Analysis | ट्रैफ़िक विश्लेषण",
      value: `+${Number(result.trafficBonus)}`,
      sub: "Bonus points from traffic volume",
      color: "text-primary",
    },
    {
      icon: Search,
      label: "SEO Score | SEO स्कोर",
      value: `${seo}/100`,
      sub: "Search engine optimization strength",
      color: scoreColor(seo),
      bar: seo,
    },
    {
      icon: IndianRupee,
      label: "Revenue Estimation | राजस्व अनुमान",
      value: `${Number(result.baseMultiple)}× monthly`,
      sub: "Base revenue multiple applied",
      color: "text-primary",
    },
    {
      icon: ShieldCheck,
      label: "Domain Authority | डोमेन अथॉरिटी",
      value: `+${Number(result.daBonus)}`,
      sub: "Bonus from domain strength",
      color: "text-primary",
    },
    {
      icon: Sprout,
      label: "Growth Potential | विकास क्षमता",
      value: `${growth}%`,
      sub: "Projected future growth",
      color: scoreColor(growth),
      bar: growth,
    },
    {
      icon: AlertTriangle,
      label: "Risk Score | जोखिम स्कोर",
      value: `${risk}/100`,
      sub: "Lower is better | कम बेहतर",
      color: scoreColor(risk, true),
      bar: risk,
      invertBar: true,
    },
    {
      icon: Activity,
      label: "Trend Adjustment | प्रवृत्ति समायोजन",
      value: `${trendAdj > 0 ? "+" : ""}${trendAdj}`,
      sub: "Revenue trend impact",
      color: trendAdj >= 0 ? "text-success" : "text-destructive",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
      data-ocid="valuation.result.section"
    >
      {/* Price Range Hero */}
      <div
        className="glass-card rounded-2xl overflow-hidden border border-primary/30"
        style={{ boxShadow: "0 0 40px oklch(0.7 0.22 270 / 0.12)" }}
      >
        <div className="py-10 text-center space-y-4 px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            Estimated Market Value
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
              Price Range | मूल्य सीमा
            </p>
            <p className="font-display font-bold text-4xl sm:text-5xl text-foreground">
              {formatINR(result.estimatedMin)} –{" "}
              {formatINR(result.estimatedMax)}
            </p>
            <p className="text-lg text-muted-foreground">
              Midpoint: {formatINR(BigInt(Math.round(mid)))}
            </p>
          </div>
          <div className="valuation-meter h-3 rounded-full bg-[oklch(var(--valuation-meter-bg))] overflow-hidden max-w-md mx-auto">
            <div
              className="h-full rounded-full bg-[oklch(var(--valuation-meter-fill))] transition-all duration-1000"
              style={{
                width: `${Math.min(100, Math.max(0, (mid / 5000000) * 100))}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div>
        <h3 className="font-display font-semibold text-lg text-foreground mb-4">
          Detailed Metrics | विस्तृत मेट्रिक्स
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map(
            ({ icon: Icon, label, value, sub, color, bar, invertBar }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="glass-card glass-card-hover rounded-xl p-5 border border-border/50 h-full transition-all duration-300"
                  style={
                    bar !== undefined
                      ? { boxShadow: "0 0 20px oklch(0.7 0.22 270 / 0.06)" }
                      : {}
                  }
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className={`w-4 h-4 ${color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        {bilingual(label)}
                      </p>
                      <p className={`text-xl font-bold ${color} mt-0.5`}>
                        {value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {sub}
                      </p>
                      {bar !== undefined && (
                        <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                          <BarFill
                            pct={bar}
                            invert={invertBar}
                            color={scoreBg(bar, invertBar)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Button
          size="lg"
          className="font-semibold gap-2 glow-primary"
          onClick={onUseValuation}
          data-ocid="valuation.use_valuation_button"
        >
          {bilingual(t.useValuation)}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ValuationPage() {
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const mutation = useCalculateValuation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.monthlyRevenue ||
      !form.monthlyTraffic ||
      !form.domainAuthority ||
      !form.domainAgeYears ||
      !form.revenueTrend ||
      !form.trafficDiversification ||
      !form.revenueType
    )
      return;

    mutation.mutate({
      monthlyRevenue: BigInt(form.monthlyRevenue),
      monthlyTraffic: BigInt(form.monthlyTraffic),
      domainAuthority: BigInt(form.domainAuthority),
      domainAgeYears: BigInt(form.domainAgeYears),
      revenueTrend: RevenueTrend[form.revenueTrend],
      trafficDiversification:
        TrafficDiversification[form.trafficDiversification],
      revenueType: RevenueType[form.revenueType],
    });
  };

  const handleUseValuation = () => {
    if (!mutation.data) return;
    const suggested = Number(mutation.data.estimatedMax);
    navigate({ to: "/sell", search: { suggestedPrice: suggested } });
  };

  return (
    <div className="min-h-screen bg-background" data-ocid="valuation.page">
      <HeroSection />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <ValuationForm
            form={form}
            setForm={setForm}
            onSubmit={handleSubmit}
            isPending={mutation.isPending}
          />
        </motion.div>

        {mutation.isPending && <LoadingCard />}

        {mutation.isError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive flex items-center gap-2"
            data-ocid="valuation.error_state"
          >
            {mutation.error instanceof Error
              ? mutation.error.message
              : t.errorFallback}
          </motion.div>
        )}

        {mutation.data && (
          <ResultSection
            result={mutation.data}
            onUseValuation={handleUseValuation}
          />
        )}
      </section>
    </div>
  );
}
