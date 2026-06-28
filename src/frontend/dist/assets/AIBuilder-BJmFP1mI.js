import { c as createLucideIcon, e as useActor, r as reactExports, j as jsxRuntimeExports, B as Button, f as createActor } from "./index-BMZp6_Em.js";
import { m as motion } from "./proxy-6ED74a2P.js";
import { S as Sparkles } from "./sparkles-BXItnaHw.js";
import { L as LoaderCircle } from "./loader-circle-BH6F4EAS.js";
import { Z as Zap } from "./zap-DXCDsPRi.js";
import { L as Layers } from "./layers-DrospROH.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$2);
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
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
];
const WandSparkles = createLucideIcon("wand-sparkles", __iconNode);
const NICHE_SUGGESTIONS = [
  "SaaS",
  "E-commerce",
  "Health & Wellness",
  "Education",
  "Finance",
  "Travel",
  "Food & Restaurant",
  "Portfolio"
];
function AIBuilder() {
  const { actor, isFetching } = useActor(createActor);
  const [niche, setNiche] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [mockup, setMockup] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const previewRef = reactExports.useRef(null);
  const canSubmit = niche.trim().length > 0 && description.trim().length > 0;
  const handleGenerate = async () => {
    if (!actor || !canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      const result = await actor.generateWebsiteBuilderMockup(
        niche.trim(),
        description.trim()
      );
      setMockup(result);
      setTimeout(() => {
        var _a;
        (_a = previewRef.current) == null ? void 0 : _a.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    } catch (err) {
      const e = err;
      setError((e == null ? void 0 : e.message) ?? "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.ctrlKey && canSubmit && !loading)
      handleGenerate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "ai-builder.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden gradient-hero",
        "data-ocid": "ai-builder.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 opacity-[0.04]",
              style: {
                backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 28 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              className: "max-w-3xl mx-auto space-y-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm font-medium text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                  "AI-Powered Generator"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-5xl sm:text-6xl leading-[1.05] tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text glow-text-primary", children: "AI Website Builder" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Enter your niche and describe your vision — AI generates a complete landing page preview in seconds." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2 pt-2", children: [
                  "Instant Preview",
                  "Color Palette",
                  "Sections & CTAs",
                  "Fully Customizable"
                ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs px-3 py-1.5 rounded-full glass-card text-muted-foreground",
                    children: tag
                  },
                  tag
                )) })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 border-b border-border/50 py-16 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "glass-card rounded-2xl p-6 sm:p-8 space-y-6",
        "data-ocid": "ai-builder.form-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/40 pb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-5 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground", children: "Describe Your Website" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "niche-input",
                className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                children: "Website Niche *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "niche-input",
                type: "text",
                value: niche,
                onChange: (e) => setNiche(e.target.value),
                onKeyDown: handleKeyDown,
                placeholder: "e.g. SaaS, E-commerce, Health & Wellness…",
                disabled: loading,
                "data-ocid": "ai-builder.niche-input",
                className: "w-full px-4 py-3 rounded-xl border border-border/50 bg-secondary/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm transition-smooth disabled:opacity-50 backdrop-blur-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: NICHE_SUGGESTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setNiche(s),
                disabled: loading,
                "data-ocid": `ai-builder.niche-chip.${s.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
                className: [
                  "text-xs px-3 py-1.5 rounded-full border transition-smooth",
                  niche === s ? "border-primary/50 bg-primary/10 text-primary" : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground glass-card"
                ].join(" "),
                children: s
              },
              s
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "description-input",
                className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                children: "Describe Your Vision *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "description-input",
                value: description,
                onChange: (e) => setDescription(e.target.value),
                onKeyDown: handleKeyDown,
                placeholder: "Describe what your website does, your target audience, and key features…",
                rows: 4,
                disabled: loading,
                "data-ocid": "ai-builder.description-input",
                className: "w-full px-4 py-3 rounded-xl border border-border/50 bg-secondary/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm resize-none transition-smooth disabled:opacity-50 backdrop-blur-sm min-h-[96px]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ctrl+Enter to generate" })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive",
              "data-ocid": "ai-builder.error_state",
              children: error
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "lg",
              className: "w-full gap-2 text-base glow-primary animate-glow-pulse font-semibold",
              disabled: !canSubmit || loading || isFetching,
              onClick: handleGenerate,
              "data-ocid": "ai-builder.generate-button",
              children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }),
                "Generating your website…"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-5 h-5" }),
                "Generate My Website"
              ] })
            }
          )
        ]
      }
    ) }) }),
    loading && !mockup && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "glass-card rounded-2xl overflow-hidden",
        "data-ocid": "ai-builder.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-1.5 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer",
              style: { backgroundSize: "200% 100%" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-muted/40 rounded-xl w-64 mx-auto animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted/30 rounded-full w-48 mx-auto animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: ["s0", "s1", "s2", "s3"].map((sk, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-24 bg-muted/30 rounded-xl animate-pulse",
                style: { animationDelay: `${i * 0.1}s` }
              },
              sk
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 bg-muted/20 rounded-xl animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 pb-6 flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-primary animate-pulse-dot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-2 h-2 rounded-full bg-primary animate-pulse-dot",
                style: { animationDelay: "0.2s" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-2 h-2 rounded-full bg-primary animate-pulse-dot",
                style: { animationDelay: "0.4s" }
              }
            )
          ] })
        ]
      }
    ) }),
    mockup && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        ref: previewRef,
        className: "max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-6",
        "data-ocid": "ai-builder.preview-section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Your Generated Preview" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground glass-card px-3 py-1 rounded-full", children: "Landing Page Preview" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "glass-card rounded-2xl overflow-hidden",
                  "data-ocid": "ai-builder.mockup-card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "px-8 py-16 text-center relative overflow-hidden",
                        style: {
                          background: `linear-gradient(135deg, ${mockup.primaryColor}, ${mockup.accentColor})`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute inset-0 opacity-10",
                              style: {
                                backgroundImage: "radial-gradient(circle at 70% 30%, white 0%, transparent 60%)"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative font-display font-bold text-3xl sm:text-4xl text-white drop-shadow-lg mb-4 leading-tight", children: mockup.headline }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-white/85 text-lg max-w-xl mx-auto", children: mockup.subheadline })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background px-6 py-10", children: [
                      mockup.sections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8", children: mockup.sections.map((section, idx) => {
                        const icons = [Sparkles, Zap, Layers, Palette, CodeXml];
                        const SectionIcon = icons[idx % icons.length];
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 12 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.35, delay: idx * 0.07 },
                            className: "glass-card glass-card-hover rounded-xl p-5",
                            "data-ocid": `ai-builder.section-card.${idx + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "w-8 h-8 rounded-lg flex items-center justify-center",
                                    style: {
                                      background: `${mockup.secondaryColor}30`
                                    },
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      SectionIcon,
                                      {
                                        className: "w-4 h-4",
                                        style: { color: mockup.secondaryColor }
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground text-sm", children: section.title })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed", children: section.body })
                            ]
                          },
                          section.title
                        );
                      }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-xl px-8 py-10 text-center",
                          style: { background: `${mockup.accentColor}15` },
                          "data-ocid": "ai-builder.cta-section",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base shadow-xl mb-4 transition-transform hover:scale-105",
                                style: { background: mockup.accentColor },
                                "data-ocid": "ai-builder.cta-button",
                                children: mockup.ctaText
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2", children: mockup.ctaSubtext })
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Colors:" }),
                [
                  { label: "primary", color: mockup.primaryColor },
                  { label: "secondary", color: mockup.secondaryColor },
                  { label: "accent", color: mockup.accentColor }
                ].map(({ label, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "inline-block w-4 h-4 rounded-full border border-border shadow-sm",
                      style: { background: color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: color })
                ] }, label))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "lg",
                  className: "w-full gap-2 glass-card mt-4",
                  disabled: loading,
                  onClick: handleGenerate,
                  "data-ocid": "ai-builder.regenerate-button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-4 h-4" }),
                    "Generate Again"
                  ]
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
export {
  AIBuilder as default
};
