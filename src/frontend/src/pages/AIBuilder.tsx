import { createActor } from "@/backend";
import { Button } from "@/components/ui/button";
import type { WebsiteBuilderMockup } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  Code2,
  Layers,
  Loader2,
  Palette,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const NICHE_SUGGESTIONS = [
  "SaaS",
  "E-commerce",
  "Health & Wellness",
  "Education",
  "Finance",
  "Travel",
  "Food & Restaurant",
  "Portfolio",
];

export default function AIBuilder() {
  const { actor, isFetching } = useActor(createActor);
  const [niche, setNiche] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [mockup, setMockup] = useState<WebsiteBuilderMockup | null>(null);
  const [error, setError] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const canSubmit = niche.trim().length > 0 && description.trim().length > 0;

  const handleGenerate = async () => {
    if (!actor || !canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      const result = await actor.generateWebsiteBuilderMockup(
        niche.trim(),
        description.trim(),
      );
      setMockup(result);
      setTimeout(() => {
        previewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch (err: unknown) {
      const e = err as Error;
      setError(e?.message ?? "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey && canSubmit && !loading)
      handleGenerate();
  };

  return (
    <div className="min-h-screen bg-background" data-ocid="ai-builder.page">
      {/* Hero */}
      <section
        className="relative overflow-hidden gradient-hero"
        data-ocid="ai-builder.hero"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto space-y-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              AI-Powered Generator
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[1.05] tracking-tight">
              <span className="gradient-text glow-text-primary">
                AI Website Builder
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Enter your niche and describe your vision — AI generates a
              complete landing page preview in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {[
                "Instant Preview",
                "Color Palette",
                "Sections & CTAs",
                "Fully Customizable",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full glass-card text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-muted/20 border-b border-border/50 py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div
            className="glass-card rounded-2xl p-6 sm:p-8 space-y-6"
            data-ocid="ai-builder.form-card"
          >
            <div className="flex items-center gap-2 border-b border-border/40 pb-5">
              <div className="w-1.5 h-5 rounded-full bg-primary" />
              <h2 className="font-display font-semibold text-foreground">
                Describe Your Website
              </h2>
            </div>

            {/* Niche */}
            <div className="space-y-3">
              <label
                htmlFor="niche-input"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Website Niche *
              </label>
              <input
                id="niche-input"
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. SaaS, E-commerce, Health & Wellness…"
                disabled={loading}
                data-ocid="ai-builder.niche-input"
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-secondary/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm transition-smooth disabled:opacity-50 backdrop-blur-sm"
              />
              <div className="flex flex-wrap gap-2">
                {NICHE_SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setNiche(s)}
                    disabled={loading}
                    data-ocid={`ai-builder.niche-chip.${s.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className={[
                      "text-xs px-3 py-1.5 rounded-full border transition-smooth",
                      niche === s
                        ? "border-primary/50 bg-primary/10 text-primary"
                        : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground glass-card",
                    ].join(" ")}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label
                htmlFor="description-input"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Describe Your Vision *
              </label>
              <textarea
                id="description-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe what your website does, your target audience, and key features…"
                rows={4}
                disabled={loading}
                data-ocid="ai-builder.description-input"
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-secondary/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm resize-none transition-smooth disabled:opacity-50 backdrop-blur-sm min-h-[96px]"
              />
              <p className="text-xs text-muted-foreground">
                Ctrl+Enter to generate
              </p>
            </div>

            {error && (
              <div
                className="rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive"
                data-ocid="ai-builder.error_state"
              >
                {error}
              </div>
            )}

            <Button
              type="button"
              size="lg"
              className="w-full gap-2 text-base glow-primary animate-glow-pulse font-semibold"
              disabled={!canSubmit || loading || isFetching}
              onClick={handleGenerate}
              data-ocid="ai-builder.generate-button"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating your website…
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  Generate My Website
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Shimmer Loading */}
      {loading && !mockup && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <div
            className="glass-card rounded-2xl overflow-hidden"
            data-ocid="ai-builder.loading_state"
          >
            <div
              className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer"
              style={{ backgroundSize: "200% 100%" }}
            />
            <div className="p-8 space-y-6">
              <div className="text-center space-y-3">
                <div className="h-8 bg-muted/40 rounded-xl w-64 mx-auto animate-pulse" />
                <div className="h-4 bg-muted/30 rounded-full w-48 mx-auto animate-pulse" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["s0", "s1", "s2", "s3"].map((sk, i) => (
                  <div
                    key={sk}
                    className="h-24 bg-muted/30 rounded-xl animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <div className="h-12 bg-muted/20 rounded-xl animate-pulse" />
            </div>
            <div className="px-8 pb-6 flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
              <div
                className="w-2 h-2 rounded-full bg-primary animate-pulse-dot"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-2 h-2 rounded-full bg-primary animate-pulse-dot"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Mockup Preview */}
      {mockup && (
        <section
          ref={previewRef}
          className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-6"
          data-ocid="ai-builder.preview-section"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-xl text-foreground">
                Your Generated Preview
              </h2>
              <span className="text-xs text-muted-foreground glass-card px-3 py-1 rounded-full">
                Landing Page Preview
              </span>
            </div>

            <div
              className="glass-card rounded-2xl overflow-hidden"
              data-ocid="ai-builder.mockup-card"
            >
              {/* Gradient hero header */}
              <div
                className="px-8 py-16 text-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${mockup.primaryColor}, ${mockup.accentColor})`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 70% 30%, white 0%, transparent 60%)",
                  }}
                />
                <h3 className="relative font-display font-bold text-3xl sm:text-4xl text-white drop-shadow-lg mb-4 leading-tight">
                  {mockup.headline}
                </h3>
                <p className="relative text-white/85 text-lg max-w-xl mx-auto">
                  {mockup.subheadline}
                </p>
              </div>

              {/* Sections grid */}
              <div className="bg-background px-6 py-10">
                {mockup.sections.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                    {mockup.sections.map((section, idx) => {
                      const icons = [Sparkles, Zap, Layers, Palette, Code2];
                      const SectionIcon = icons[idx % icons.length];
                      return (
                        <motion.div
                          key={section.title}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: idx * 0.07 }}
                          className="glass-card glass-card-hover rounded-xl p-5"
                          data-ocid={`ai-builder.section-card.${idx + 1}`}
                        >
                          <div className="flex items-center gap-2.5 mb-3">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{
                                background: `${mockup.secondaryColor}30`,
                              }}
                            >
                              <SectionIcon
                                className="w-4 h-4"
                                style={{ color: mockup.secondaryColor }}
                              />
                            </div>
                            <h4 className="font-display font-semibold text-foreground text-sm">
                              {section.title}
                            </h4>
                          </div>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {section.body}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                <div
                  className="rounded-xl px-8 py-10 text-center"
                  style={{ background: `${mockup.accentColor}15` }}
                  data-ocid="ai-builder.cta-section"
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base shadow-xl mb-4 transition-transform hover:scale-105"
                    style={{ background: mockup.accentColor }}
                    data-ocid="ai-builder.cta-button"
                  >
                    {mockup.ctaText}
                  </button>
                  <p className="text-muted-foreground text-sm mt-2">
                    {mockup.ctaSubtext}
                  </p>
                </div>
              </div>
            </div>

            {/* Color palette */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-4">
              <span className="font-medium">Colors:</span>
              {[
                { label: "primary", color: mockup.primaryColor },
                { label: "secondary", color: mockup.secondaryColor },
                { label: "accent", color: mockup.accentColor },
              ].map(({ label, color }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <span
                    className="inline-block w-4 h-4 rounded-full border border-border shadow-sm"
                    style={{ background: color }}
                  />
                  <span className="font-mono">{color}</span>
                </span>
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full gap-2 glass-card mt-4"
              disabled={loading}
              onClick={handleGenerate}
              data-ocid="ai-builder.regenerate-button"
            >
              <Wand2 className="w-4 h-4" />
              Generate Again
            </Button>
          </motion.div>
        </section>
      )}
    </div>
  );
}
