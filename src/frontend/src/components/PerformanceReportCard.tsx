import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  AlertCircle,
  BarChart2,
  Globe,
  RefreshCw,
  Shield,
  ShieldAlert,
  Smartphone,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { createActor } from "../backend";
import type { PerformanceReport } from "../types";

interface MetricBarProps {
  label: string;
  score: number;
  icon: React.ReactNode;
}

function scoreGlowClass(score: number): {
  bar: string;
  text: string;
  glow: string;
} {
  if (score >= 80)
    return {
      bar: "bg-emerald-500",
      text: "text-emerald-400",
      glow: "shadow-[0_0_8px_rgba(52,211,153,0.7)]",
    };
  if (score >= 60)
    return {
      bar: "bg-amber-500",
      text: "text-amber-400",
      glow: "shadow-[0_0_8px_rgba(251,191,36,0.6)]",
    };
  if (score >= 40)
    return {
      bar: "bg-orange-500",
      text: "text-orange-400",
      glow: "shadow-[0_0_8px_rgba(249,115,22,0.6)]",
    };
  return {
    bar: "bg-red-500",
    text: "text-red-400",
    glow: "shadow-[0_0_8px_rgba(239,68,68,0.6)]",
  };
}

// scoreGlowClass replaces scoreTextColor

function MetricBar({ label, score, icon }: MetricBarProps) {
  const { bar, text, glow } = scoreGlowClass(score);
  return (
    <div
      className="space-y-1.5"
      data-ocid={`performance-report.metric.${label.toLowerCase().replace(/\s+/g, "_")}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-muted-foreground w-4 h-4">{icon}</span>
          <span className="text-sm font-medium text-foreground">{label}</span>
        </div>
        <span className={`text-sm font-bold tabular-nums ${text}`}>
          {score}/100
        </span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${bar} ${glow}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

const GRADE_CONFIG: Record<
  string,
  { bg: string; text: string; border: string; glow: string; ring: string }
> = {
  A: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/40",
    glow: "shadow-[0_0_20px_rgba(52,211,153,0.4),inset_0_0_12px_rgba(52,211,153,0.1)]",
    ring: "ring-2 ring-emerald-500/30",
  },
  B: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/40",
    glow: "shadow-[0_0_20px_oklch(0.7_0.22_270/0.4),inset_0_0_12px_oklch(0.7_0.22_270/0.1)]",
    ring: "ring-2 ring-primary/30",
  },
  C: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/40",
    glow: "shadow-[0_0_16px_rgba(251,191,36,0.4),inset_0_0_10px_rgba(251,191,36,0.08)]",
    ring: "ring-2 ring-amber-500/30",
  },
  D: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    border: "border-orange-500/40",
    glow: "shadow-[0_0_16px_rgba(249,115,22,0.4),inset_0_0_10px_rgba(249,115,22,0.08)]",
    ring: "ring-2 ring-orange-500/30",
  },
  F: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/40",
    glow: "shadow-[0_0_16px_rgba(239,68,68,0.4),inset_0_0_10px_rgba(239,68,68,0.08)]",
    ring: "ring-2 ring-red-500/30",
  },
};

interface PerformanceReportCardProps {
  listingId: string;
}

export function PerformanceReportCard({
  listingId,
}: PerformanceReportCardProps) {
  const { actor } = useActor(createActor);
  const [report, setReport] = useState<PerformanceReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        listingId: raw.listingId,
      });
    } catch {
      setError("Failed to generate report. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const gradeConfig = report
    ? (GRADE_CONFIG[report.overallGrade] ?? GRADE_CONFIG.F)
    : null;

  const formattedDate = report
    ? new Date(report.reportedAt / 1_000_000).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : null;

  const metrics = report
    ? [
        {
          label: "Speed",
          score: report.speedScore,
          icon: <Zap className="w-4 h-4" />,
        },
        {
          label: "SEO",
          score: report.seoScore,
          icon: <Globe className="w-4 h-4" />,
        },
        {
          label: "Mobile",
          score: report.mobileScore,
          icon: <Smartphone className="w-4 h-4" />,
        },
        {
          label: "Security",
          score: report.securityScore,
          icon: <Shield className="w-4 h-4" />,
        },
        {
          label: "Spam Score",
          score: report.spamScore,
          icon: <ShieldAlert className="w-4 h-4" />,
        },
      ]
    : [];

  return (
    <div className="glass-card rounded-2xl" data-ocid="performance-report.card">
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shadow-[0_0_10px_oklch(0.7_0.22_270/0.3)]">
              <BarChart2 className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-base font-display font-semibold text-foreground">
              Performance &amp; Security Report
            </h3>
          </div>
          {report && gradeConfig && (
            <div className="text-right shrink-0">
              <div
                className={`inline-flex flex-col items-center justify-center w-14 h-14 rounded-2xl border-2 ${gradeConfig.bg} ${gradeConfig.border} ${gradeConfig.glow} ${gradeConfig.ring} animate-scale-in`}
                data-ocid="performance-report.grade_badge"
              >
                <span
                  className={`text-2xl font-black leading-none ${gradeConfig.text}`}
                >
                  {report.overallGrade}
                </span>
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
                  Grade
                </span>
              </div>
              {formattedDate && (
                <p className="text-[10px] text-muted-foreground font-mono mt-1.5 tabular-nums">
                  {formattedDate}
                </p>
              )}
            </div>
          )}
        </div>

        {loading && (
          <div
            className="space-y-4"
            data-ocid="performance-report.loading_state"
          >
            {["s1", "s2", "s3", "s4", "s5"].map((k) => (
              <div key={k} className="space-y-1.5">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <Skeleton className="h-2 w-full rounded-full" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div
            className="flex flex-col items-center gap-3 py-6 text-center"
            data-ocid="performance-report.error_state"
          >
            <div className="w-12 h-12 rounded-2xl bg-destructive/10 border border-destructive/30 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <p className="text-sm text-muted-foreground">{error}</p>
            <Button
              variant="outline"
              size="sm"
              onClick={generateReport}
              className="border-border/50 hover:border-primary/40"
              data-ocid="performance-report.retry_button"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1.5" /> Retry
            </Button>
          </div>
        )}

        {!loading && !error && report && (
          <div className="space-y-3 mb-4">
            {metrics.map((m) => (
              <MetricBar
                key={m.label}
                label={m.label}
                score={m.score}
                icon={m.icon}
              />
            ))}
          </div>
        )}

        {!loading && !error && !report && (
          <p className="text-sm text-muted-foreground mb-4">
            Run an automated technical analysis to see speed, SEO, mobile
            responsiveness, security, and spam scores for this website.
          </p>
        )}

        {!loading && (
          <div className="pt-2">
            {!report ? (
              <Button
                onClick={generateReport}
                disabled={!actor}
                className="w-full gap-2 glow-primary"
                data-ocid="performance-report.generate_button"
              >
                <BarChart2 className="w-4 h-4" />
                Generate Report
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={generateReport}
                disabled={!actor}
                className="w-full gap-2 border-border/50 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                data-ocid="performance-report.refresh_button"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh Report
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
