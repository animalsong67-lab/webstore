import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button } from "./index-BMZp6_Em.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-BGhIDcyc.js";
import { C as ChevronRight } from "./chevron-right-DWX676IN.js";
import { S as ShieldCheck } from "./shield-check-GL8POgqZ.js";
import { L as Lock } from "./lock-D83XvjGg.js";
import { C as CircleCheck } from "./circle-check-B3HDhYVu.js";
import { G as Globe } from "./globe-Dz_3xYco.js";
import "./index-C1D-nLKY.js";
import "./index-CyD6FS3r.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
];
const ArrowRightLeft = createLucideIcon("arrow-right-left", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M10 18v-7", key: "wt116b" }],
  [
    "path",
    {
      d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
      key: "1m329m"
    }
  ],
  ["path", { d: "M14 18v-7", key: "vav6t3" }],
  ["path", { d: "M18 18v-7", key: "aexdmj" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M6 18v-7", key: "1ivflk" }]
];
const Landmark = createLucideIcon("landmark", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const MessageCircleQuestion = createLucideIcon("message-circle-question", __iconNode$1);
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
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
const ESCROW_STEPS = [
  {
    number: 1,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-6 h-6" }),
    title: "Buyer Submits Payment",
    description: "Payment securely initiated",
    status: "Secure"
  },
  {
    number: 2,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-6 h-6" }),
    title: "Platform Holds Funds",
    description: "Funds held in secure escrow until transfer complete",
    status: "Secure"
  },
  {
    number: 3,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { className: "w-6 h-6" }),
    title: "Website Transfer Completed",
    description: "Seller completes domain and hosting transfer",
    status: "Pending"
  },
  {
    number: 4,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6" }),
    title: "Payment Released to Seller",
    description: "Buyer confirms receipt and payment released",
    status: "Pending"
  }
];
const PAYMENT_METHODS = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: "₹" }),
    name: "UPI",
    description: "Instant payment via any UPI app — Google Pay, PhonePe, Paytm",
    processingTime: "Instant"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "w-6 h-6" }),
    name: "Bank Transfer",
    description: "Direct NEFT / IMPS / RTGS transfer to escrow account",
    processingTime: "1–2 hours"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-6 h-6" }),
    name: "Debit / Credit Card",
    description: "Visa, Mastercard, RuPay — encrypted card processing",
    processingTime: "Instant"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6" }),
    name: "International Payments",
    description: "Wire transfer, SWIFT, and multi-currency support",
    processingTime: "1–3 business days"
  }
];
const SECURITY_FEATURES = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-7 h-7" }),
    title: "Fund Protection",
    description: "Funds are held in a secure escrow account until both buyer and seller confirm the transfer is complete. Neither party can access funds unilaterally."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircleQuestion, { className: "w-7 h-7" }),
    title: "Dispute Resolution",
    description: "Our 24/7 support team mediates transaction disputes. We review evidence from both sides and release funds only when a fair resolution is reached."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7" }),
    title: "100% Secure",
    description: "All payment channels use bank-grade TLS encryption. Sensitive data is tokenized and never stored on our servers."
  }
];
const FAQ_ITEMS = [
  {
    question: "What is an escrow payment?",
    answer: "Escrow is a financial arrangement where a trusted third party (WebStore) holds the buyer's payment until the website transfer is fully verified. This protects both buyers and sellers from fraud."
  },
  {
    question: "How long does the escrow process take?",
    answer: "Most transactions complete within 3–7 business days. The timeline depends on how quickly the seller transfers the domain and hosting, and how soon the buyer confirms receipt."
  },
  {
    question: "What happens if there is a dispute?",
    answer: "If either party raises a dispute, our support team steps in to mediate. We review transfer logs, communication history, and domain ownership records before releasing funds to the rightful party."
  },
  {
    question: "Are there any fees for using escrow?",
    answer: "WebStore charges a small escrow facilitation fee of 2.5% of the transaction value, paid by the seller. There are no hidden charges for buyers."
  },
  {
    question: "Can I cancel an escrow transaction?",
    answer: "Yes — if the website transfer has not yet begun, either party can request cancellation. Funds are returned to the buyer within 24–48 hours after cancellation approval."
  }
];
function EscrowPageHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden",
      style: {
        background: "radial-gradient(ellipse 80% 70% at 15% 40%, oklch(0.55 0.22 270 / 0.4) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 60%, oklch(0.78 0.24 195 / 0.3) 0%, transparent 55%), oklch(0.08 0.015 270)"
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
            className: "absolute -top-12 right-1/4 w-64 h-64 rounded-full pointer-events-none animate-float",
            style: {
              background: "radial-gradient(circle, oklch(0.7 0.22 270 / 0.25) 0%, transparent 70%)",
              filter: "blur(36px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute bottom-0 left-12 w-48 h-48 rounded-full pointer-events-none animate-float",
            style: {
              background: "radial-gradient(circle, oklch(0.78 0.24 195 / 0.2) 0%, transparent 70%)",
              filter: "blur(28px)",
              animationDelay: "2s"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass-card border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4" }),
            "Secure Escrow System"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl sm:text-5xl leading-[1.1] tracking-tight mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text glow-text-primary", children: "Escrow Payments" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto", children: "Your funds are protected at every step. We hold payment until the website transfer is verified complete." })
        ] })
      ]
    }
  );
}
function EscrowStepCard({ step }) {
  const isActive = step.status === "Secure" || step.status === "In Progress";
  const isCompleted = step.status === "Completed";
  const isPending = step.status === "Pending";
  const glowClass = isCompleted ? "border-[oklch(0.72_0.2_142/0.4)] shadow-[0_0_20px_oklch(0.72_0.2_142/0.2)]" : isActive ? "border-primary/40 shadow-[0_0_20px_oklch(0.7_0.22_270/0.2)]" : "border-border/40";
  const iconBg = isCompleted ? "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.3)]" : isActive ? "bg-primary/15 text-primary border-primary/30" : "bg-muted/30 text-muted-foreground border-border/40";
  const badgeCls = isCompleted ? "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.3)]" : isActive ? "bg-primary/15 text-primary border-primary/30" : "bg-muted/20 text-muted-foreground border-border/30";
  const numBg = isCompleted ? "bg-[oklch(0.72_0.2_142)] text-[oklch(0.05_0.01_270)] shadow-[0_0_12px_oklch(0.72_0.2_142/0.4)]" : isActive ? "bg-primary text-primary-foreground shadow-[0_0_12px_oklch(0.7_0.22_270/0.4)]" : isPending ? "bg-muted text-muted-foreground" : "bg-muted text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative glass-card flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 ${glowClass}`,
      "data-ocid": `escrow.step.${step.number}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${numBg}`,
            children: step.number
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `mt-5 mb-3 w-14 h-14 rounded-2xl flex items-center justify-center border ${iconBg}`,
            children: step.icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm mb-2", children: step.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-4", children: step.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeCls}`,
            children: step.status
          }
        )
      ]
    }
  );
}
function PaymentMethodCard({ method }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card glass-card-hover rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-border/50 hover:border-primary/30 hover:shadow-[0_0_20px_oklch(0.7_0.22_270/0.15)] transition-all duration-300 cursor-pointer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 text-primary flex items-center justify-center", children: method.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground text-sm", children: method.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: method.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-3 w-full border-t border-border/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: "Processing Time" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold gradient-text mt-0.5", children: method.processingTime })
    ] })
  ] });
}
function SecurityFeatureCard({ feature }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 border border-border/50 hover:border-primary/25 hover:shadow-[0_0_24px_oklch(0.7_0.22_270/0.12)] transition-all duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 text-primary flex items-center justify-center", children: feature.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground text-base", children: feature.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feature.description })
  ] });
}
function EscrowPage() {
  const [openFaq, setOpenFaq] = reactExports.useState(void 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "escrow.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(EscrowPageHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl gradient-text mb-3", children: "How Escrow Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm sm:text-base max-w-lg mx-auto", children: "A simple 4-step process designed to protect buyers and sellers throughout every transaction." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/60 via-accent/60 to-[oklch(0.72_0.2_142/0.6)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: ESCROW_STEPS.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(EscrowStepCard, { step }, step.number)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/40 bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground mb-2", children: "Supported Payment Methods" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-lg mx-auto", children: "Multiple secure options to deposit funds into escrow." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: PAYMENT_METHODS.map((method) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentMethodCard, { method }, method.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground mb-2", children: "Why Our Escrow is Safe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-lg mx-auto", children: "Industry-leading security measures to protect every transaction." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: SECURITY_FEATURES.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsx(SecurityFeatureCard, { feature }, feature.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/40 bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl sm:text-3xl gradient-text mb-2", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Everything you need to know about our escrow payment system." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Accordion,
        {
          type: "single",
          collapsible: true,
          value: openFaq,
          onValueChange: setOpenFaq,
          className: "space-y-3",
          children: FAQ_ITEMS.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AccordionItem,
            {
              value: `faq-${idx}`,
              className: "glass-card border border-border/50 rounded-2xl px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-[0_0_16px_oklch(0.7_0.22_270/0.15)] transition-all duration-300",
              "data-ocid": `escrow.faq.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-sm font-medium text-foreground hover:no-underline py-4", children: item.question }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm text-muted-foreground leading-relaxed pb-4", children: item.answer })
              ]
            },
            item.question
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden glass-card border border-primary/20 rounded-3xl p-8 sm:p-16 text-center shadow-[0_0_60px_oklch(0.7_0.22_270/0.1)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl sm:text-3xl gradient-text mb-3", children: "Ready to Buy or Sell a Website?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-8", children: "Browse verified listings and start your next acquisition with full escrow protection." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/browse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "lg",
            className: "gap-2 bg-primary/90 hover:bg-primary shadow-[0_0_24px_oklch(0.7_0.22_270/0.4)] hover:shadow-[0_0_36px_oklch(0.7_0.22_270/0.6)] transition-all duration-300",
            "data-ocid": "escrow.view-listings-button",
            children: [
              "View Listings ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            ]
          }
        ) })
      ] })
    ] }) })
  ] });
}
export {
  EscrowPage as default
};
