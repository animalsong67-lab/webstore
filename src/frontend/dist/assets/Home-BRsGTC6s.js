import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, S as Search, C as ChevronDown, B as Button, a as Skeleton, M as Mail, P as Phone, I as Instagram } from "./index-BMZp6_Em.js";
import { B as Badge } from "./badge-DjffIZJ0.js";
import { I as Input } from "./index-B_NUkB8x.js";
import { L as Label } from "./label-DeWJEbbv.js";
import { T as Textarea } from "./textarea-DM5SngKy.js";
import { u as ue } from "./index-2ADlaxLC.js";
import { u as useListings, a as useSubmitContact } from "./useListings-vMM7OeqO.js";
import { T as TrendingUp } from "./trending-up-CwCDh1V9.js";
import { S as Shield } from "./shield-B4TWM6rZ.js";
import { S as Sparkles } from "./sparkles-BXItnaHw.js";
import { A as ArrowRight } from "./arrow-right-C67gEsfO.js";
import { D as DollarSign } from "./dollar-sign-DGhSPEC0.js";
import { G as Globe } from "./globe-Dz_3xYco.js";
import { U as Users } from "./users-CdRwbpqe.js";
import { Z as Zap } from "./zap-DXCDsPRi.js";
import { B as Bot } from "./bot-aMLEk82Y.js";
import { S as Star } from "./star-Czm1eI8s.js";
import { C as CircleCheck } from "./circle-check-B3HDhYVu.js";
import { L as Lock } from "./lock-D83XvjGg.js";
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
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
function formatCurrency(n) {
  return `₹${Number(n).toLocaleString()}`;
}
function useCountUp(target, duration = 2e3) {
  const [count, setCount] = reactExports.useState(0);
  const [started, setStarted] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);
  reactExports.useEffect(() => {
    if (!started) return;
    let raf;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - (1 - t) ** 3;
      setCount(Math.floor(ease * target));
      if (t < 1) raf = requestAnimationFrame(animate);
      else setCount(target);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return { count, ref };
}
function useScrollReveal() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}
function SectionReveal({
  children,
  className = "",
  delay = 0,
  style
}) {
  const { ref, visible } = useScrollReveal();
  const combinedStyle = {
    ...style ?? {},
    ...delay ? { transitionDelay: `${delay}ms` } : {}
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      style: combinedStyle,
      className: `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`,
      children
    }
  );
}
function RippleButton({
  children,
  className = "",
  onClick,
  variant = "default",
  disabled,
  type = "button",
  "data-ocid": ocid
}) {
  const [ripples, setRipples] = reactExports.useState([]);
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { x: e.clientX - rect.left, y: e.clientY - rect.top, id }
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    onClick == null ? void 0 : onClick();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      type,
      variant,
      disabled,
      className: `relative overflow-hidden ${className}`,
      onClick: handleClick,
      "data-ocid": ocid,
      children: [
        children,
        ripples.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute rounded-full bg-white/25 animate-ripple pointer-events-none",
            style: { left: r.x - 20, top: r.y - 20, width: 40, height: 40 }
          },
          r.id
        ))
      ]
    }
  );
}
const STATS = [
  {
    icon: Globe,
    label: "Websites Listed",
    value: 500,
    suffix: "+",
    color: "text-primary"
  },
  {
    icon: DollarSign,
    label: "Total Sales Volume",
    value: 10,
    suffix: "Cr+",
    color: "text-accent"
  },
  {
    icon: Users,
    label: "Active Sellers",
    value: 1200,
    suffix: "+",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    label: "Satisfied Buyers",
    value: 3500,
    suffix: "+",
    color: "text-accent"
  }
];
const SERVICES = [
  {
    icon: Search,
    title: "Browse Listings",
    description: "Discover profitable websites across all niches with AI-powered smart filters.",
    gradient: "from-primary/20 to-primary/5",
    link: "/browse",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.7_0.22_270/0.35)]"
  },
  {
    icon: Globe,
    title: "Sell Your Website",
    description: "List your digital asset and reach 1200+ verified buyers with a free AI valuation.",
    gradient: "from-accent/20 to-accent/5",
    link: "/sell",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.78_0.24_195/0.35)]"
  },
  {
    icon: Sparkles,
    title: "AI Valuation",
    description: "Get instant price estimates based on traffic, revenue, SEO score, and growth potential.",
    gradient: "from-primary/20 to-accent/10",
    link: "/valuation",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.7_0.22_270/0.35)]"
  },
  {
    icon: Shield,
    title: "Escrow Protection",
    description: "Secure payment escrow holds your funds until the website transfer is fully confirmed.",
    gradient: "from-accent/20 to-primary/10",
    link: "/escrow",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.78_0.24_195/0.35)]"
  },
  {
    icon: Zap,
    title: "Website Transfer",
    description: "One-click domain & hosting migration — cPanel, WordPress, and custom CMS supported.",
    gradient: "from-primary/20 to-primary/5",
    link: "/transfer",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.7_0.22_270/0.35)]"
  },
  {
    icon: Bot,
    title: "AI Builder",
    description: "Generate a complete website with AI — landing pages, content, and design in seconds.",
    gradient: "from-accent/20 to-accent/5",
    link: "/builder",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.78_0.24_195/0.35)]"
  }
];
const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Website Seller, Delhi",
    text: "Sold my 3-year-old niche blog in 4 days for ₹1.8L. The AI valuation was spot-on and the escrow made the transfer completely stress-free.",
    stars: 5
  },
  {
    name: "Priya Nair",
    role: "Digital Asset Investor, Bangalore",
    text: "WebStore is the most transparent marketplace I have used. Verified revenue badges and trust scores helped me invest ₹5L with full confidence.",
    stars: 5
  },
  {
    name: "Arjun Mehta",
    role: "E-commerce Entrepreneur, Mumbai",
    text: "Bought 3 websites here. The performance reports saved me from 2 bad deals. Mr Krish Raj's team support is excellent — quick and genuinely helpful.",
    stars: 5
  },
  {
    name: "Sneha Patel",
    role: "Freelance Developer, Ahmedabad",
    text: "The AI Builder is incredible — I built and listed a website in 2 hours. Got my first inquiry the same day. Highly recommend WebStore.",
    stars: 5
  }
];
const FAQS = [
  {
    q: "How does buying a website on WebStore work?",
    a: "Browse listings, contact the seller, and initiate a secure escrow payment. Funds are held safely until the website is fully transferred to your ownership."
  },
  {
    q: "How is the website price determined?",
    a: "Our AI Valuation tool analyzes monthly revenue, organic traffic, SEO authority, domain age, niche demand, and comparable market sales to give a fair estimate."
  },
  {
    q: "Is the escrow payment system safe?",
    a: "Yes. WebStore uses a secure escrow model — your payment is held by the platform until you confirm the website transfer is complete, protecting both buyer and seller."
  },
  {
    q: "What niches and platforms are available?",
    a: "We list WordPress, Shopify, custom HTML, SaaS, and mobile app websites across niches including tech, finance, health, fashion, education, and more."
  },
  {
    q: "How long does website transfer typically take?",
    a: "Most transfers complete within 3–7 business days. Our transfer assistant guides both parties through domain handover, hosting migration, and cPanel access."
  },
  {
    q: "Can I sell a website that earns no revenue?",
    a: "Yes. We list websites based on traffic, SEO value, domain authority, and growth potential — not just revenue. Many buyers look for undervalued assets."
  },
  {
    q: "How do I verify a seller is trustworthy?",
    a: "Each seller has a Trust Score with verified transactions, buyer reviews, response time, and fraud detection. Look for the 'Verified Seller' badge on any listing."
  },
  {
    q: "What payment methods does WebStore support?",
    a: "We support UPI, bank transfer, debit/credit cards, and international payments — making transactions smooth for buyers across India and globally."
  }
];
const PRICING = [
  {
    tier: "Free",
    price: "₹0",
    period: "/month",
    tagline: "Perfect to get started",
    cta: "Start Free",
    highlighted: false,
    features: [
      { text: "Browse all listings", ok: true },
      { text: "1 website listing", ok: true },
      { text: "Basic AI valuation", ok: true },
      { text: "Email support", ok: true },
      { text: "Escrow protection", ok: false },
      { text: "Priority placement", ok: false },
      { text: "Advanced analytics", ok: false },
      { text: "Dedicated manager", ok: false }
    ]
  },
  {
    tier: "Pro",
    price: "₹999",
    period: "/month",
    tagline: "Most popular for serious sellers",
    cta: "Start Pro",
    highlighted: true,
    badge: "Most Popular",
    features: [
      { text: "Browse all listings", ok: true },
      { text: "5 website listings", ok: true },
      { text: "Full AI valuation + reports", ok: true },
      { text: "Priority support", ok: true },
      { text: "Escrow protection", ok: true },
      { text: "Priority placement", ok: true },
      { text: "Advanced analytics", ok: true },
      { text: "Dedicated manager", ok: false }
    ]
  },
  {
    tier: "Business",
    price: "₹2,499",
    period: "/month",
    tagline: "For high-volume traders",
    cta: "Contact Us",
    highlighted: false,
    features: [
      { text: "Browse all listings", ok: true },
      { text: "Unlimited listings", ok: true },
      { text: "Full AI valuation + reports", ok: true },
      { text: "24/7 priority support", ok: true },
      { text: "Escrow protection", ok: true },
      { text: "Featured placement", ok: true },
      { text: "Advanced analytics", ok: true },
      { text: "Dedicated manager", ok: true }
    ]
  }
];
function StatCard({
  icon: Icon,
  label,
  value,
  suffix,
  color
}) {
  const { count, ref } = useCountUp(value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "glass-card rounded-2xl p-6 flex flex-col items-center gap-2 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_oklch(0.7_0.22_270/0.25)] group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-6 h-6 ${color}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `text-3xl font-bold font-display ${color} glow-text-primary`,
            children: [
              count.toLocaleString(),
              suffix
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground text-center", children: label })
      ]
    }
  );
}
function ListingCard({ listing }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-5 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_oklch(0.7_0.22_270/0.2)] group cursor-pointer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-primary/20 text-primary border-primary/30", children: listing.niche }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: listing.platform })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors", children: listing.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mb-4", children: listing.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-2 bg-primary/8 border border-primary/15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Revenue/mo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: formatCurrency(listing.monthlyRevenue) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-2 bg-accent/8 border border-accent/15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Traffic/mo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: Number(listing.monthlyTraffic).toLocaleString() })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-primary text-lg glow-text-primary", children: formatCurrency(listing.askingPrice) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "text-xs border-primary/40 text-primary hover:bg-primary/10",
          asChild: true,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/browse", children: "View Details" })
        }
      )
    ] })
  ] });
}
function Home() {
  const { data: listings = [], isLoading } = useListings();
  const featured = listings.slice(0, 6);
  const submitContact = useSubmitContact();
  const [contactForm, setContactForm] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const handleContact = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      ue.error("Please fill in all fields.");
      return;
    }
    const input = {
      name: contactForm.name,
      email: contactForm.email,
      subject: "Website inquiry from homepage",
      message: contactForm.message
    };
    submitContact.mutate(input, {
      onSuccess: () => {
        ue.success("Message sent! We will respond shortly.");
        setContactForm({ name: "", email: "", message: "" });
      },
      onError: () => ue.error("Failed to send. Please try again.")
    });
  };
  const [activeT, setActiveT] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(
      () => setActiveT((p) => (p + 1) % TESTIMONIALS.length),
      4e3
    );
    return () => clearInterval(t);
  }, []);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [heroIn, setHeroIn] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    return () => clearTimeout(t);
  }, []);
  reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "hero.section",
        className: "relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden",
        style: {
          background: "radial-gradient(ellipse 80% 60% at 20% 30%, oklch(0.7 0.22 270 / 0.22) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, oklch(0.78 0.24 195 / 0.18) 0%, transparent 55%), oklch(0.08 0.015 270)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-25 bg-cover bg-center pointer-events-none",
              style: {
                backgroundImage: "url('/assets/generated/hero-mesh-bg.dim_1600x900.jpg')"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.04] pointer-events-none",
              style: {
                backgroundImage: "linear-gradient(oklch(0.7 0.22 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 270) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-24 right-[7%] hidden lg:block perspective-3d animate-float",
              style: { animationDelay: "0s" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card-elevated rounded-2xl p-4 w-44 border border-primary/30 transform-gpu-3d", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Top Sale" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-primary glow-text-primary", children: "₹4.2L" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "NicheBlog.in sold today" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-36 left-[5%] hidden lg:block perspective-3d animate-float",
              style: { animationDelay: "1.4s" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card-elevated rounded-2xl p-4 w-48 border border-accent/30 transform-gpu-3d", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Escrow Active" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-accent", children: "Transaction #8821" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "₹1.8L secured ✓" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-40 left-[9%] hidden xl:block perspective-3d animate-float",
              style: { animationDelay: "2.6s" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-xl p-3 w-36 border border-primary/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "AI Score" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-primary", children: "94/100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-accent", children: "High Value Asset" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: `mb-6 px-4 py-1.5 text-sm border border-primary/40 bg-primary/10 text-primary transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 mr-1.5" }),
                  "India's #1 Website Marketplace"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: `font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 transition-all duration-700 delay-150 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Buy & Sell" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Websites" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Like a " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Pro" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                children: "The most trusted marketplace for digital assets — with AI valuation, secure escrow, instant transfer, and verified seller profiles. Start in minutes."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/browse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    RippleButton,
                    {
                      "data-ocid": "hero.browse_button",
                      className: "glow-button-hover px-8 py-6 text-base font-semibold bg-primary text-primary-foreground rounded-xl hover:scale-105",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5 mr-2" }),
                        "Browse Websites",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    RippleButton,
                    {
                      variant: "outline",
                      "data-ocid": "hero.sell_button",
                      className: "glow-button-accent-hover px-8 py-6 text-base font-semibold border-accent/50 text-accent rounded-xl hover:scale-105 hover:bg-accent/10",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-5 h-5 mr-2" }),
                        "Sell Your Website"
                      ]
                    }
                  ) })
                ]
              }
            ),
            listings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: `mt-6 text-sm text-muted-foreground transition-all duration-700 delay-700 ${heroIn ? "opacity-100" : "opacity-0"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-semibold", children: [
                    listings.length,
                    "+"
                  ] }),
                  " ",
                  "active listings right now"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-6 h-6 text-muted-foreground" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold gradient-text mb-3", children: "Platform at a Glance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Numbers that speak for themselves" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
          "data-ocid": "stats.section",
          children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { ...s }, s.label))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionReveal,
      {
        className: "py-20 px-4",
        style: { background: "oklch(0.10 0.018 270)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-accent mb-1 glow-text-accent", children: "Marketplace" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl gradient-text", children: "Featured Listings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Hand-picked websites available for acquisition" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                asChild: true,
                className: "border-primary/40 text-primary hover:bg-primary/10",
                "data-ocid": "listings.view_all_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/browse", children: [
                  "View All ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
              "data-ocid": "listings.section",
              children: isLoading ? ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-5 space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" })
              ] }, k)) : featured.length > 0 ? featured.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListingCard, { listing: l }, l.id.toString())) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "col-span-3 text-center py-16",
                  "data-ocid": "listings.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-8 h-8 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium text-foreground mb-2", children: "No listings yet" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Be the first to list your website!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        asChild: true,
                        className: "glow-primary",
                        "data-ocid": "listings.cta_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sell", children: "List Your Website" })
                      }
                    )
                  ]
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionReveal,
      {
        className: "py-20 px-4",
        style: {
          background: "radial-gradient(ellipse 70% 40% at 50% 50%, oklch(0.7 0.22 270 / 0.05) 0%, transparent 70%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 px-3 py-1 border border-accent/40 bg-accent/10 text-accent", children: "Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-4", children: [
              "Everything You Need to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Trade Websites" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "From discovery to transfer — WebStore handles the full lifecycle of every digital asset transaction." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
              "data-ocid": "services.section",
              children: SERVICES.map((svc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: svc.link,
                  "data-ocid": `services.item.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `group glass-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-[1.03] cursor-pointer h-full ${svc.glow}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `w-12 h-12 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(svc.icon, { className: "w-6 h-6 text-foreground" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors", children: svc.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: svc.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity", children: [
                          "Learn more ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 ml-1" })
                        ] })
                      ]
                    }
                  )
                },
                svc.title
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20 px-4 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 px-3 py-1 border border-primary/40 bg-primary/10 text-primary", children: "Reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-3", children: [
          "Trusted by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Thousands" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Real buyers and sellers sharing real experiences" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative overflow-hidden",
          "data-ocid": "testimonials.section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex transition-transform duration-500 ease-in-out",
              style: { transform: `translateX(-${activeT * 100}%)` },
              children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-full px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-8 border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-foreground flex-shrink-0",
                      style: {
                        background: i % 2 === 0 ? "linear-gradient(135deg, oklch(0.7 0.22 270), oklch(0.6 0.2 290))" : "linear-gradient(135deg, oklch(0.78 0.24 195), oklch(0.65 0.2 210))"
                      },
                      children: t.name.charAt(0)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground font-display", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t.role }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mt-1", children: [1, 2, 3, 4, 5].slice(0, t.stars).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        className: "w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      },
                      n
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-8 h-8 text-primary/25 flex-shrink-0" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed italic", children: [
                  "“",
                  t.text,
                  "”"
                ] })
              ] }) }, t.name))
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex justify-center gap-2 mt-6",
          "data-ocid": "testimonials.pagination",
          children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveT(i),
              "data-ocid": `testimonials.dot.${i + 1}`,
              "aria-label": `Go to testimonial ${i + 1}`,
              className: `h-2.5 rounded-full transition-all duration-300 ${i === activeT ? "bg-primary w-6 shadow-[0_0_8px_oklch(0.7_0.22_270/0.8)]" : "bg-muted w-2.5 hover:bg-primary/50"}`
            },
            t.name
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 px-3 py-1 border border-accent/40 bg-accent/10 text-accent", children: "FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-3", children: [
          "Common ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Questions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Everything you need to know before your first transaction" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "faq.section", children: FAQS.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-card rounded-xl border border-border hover:border-primary/30 transition-colors overflow-hidden",
          "data-ocid": `faq.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(openFaq === i ? null : i),
                className: "w-full flex items-center justify-between px-5 py-4 text-left",
                "data-ocid": `faq.toggle.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground pr-4", children: faq.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChevronDown,
                    {
                      className: `w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-primary" : ""}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "overflow-hidden transition-all duration-300",
                style: { maxHeight: openFaq === i ? "300px" : "0px" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-4 text-muted-foreground leading-relaxed text-sm", children: faq.a })
              }
            )
          ]
        },
        faq.q
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20 px-4 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 px-3 py-1 border border-primary/40 bg-primary/10 text-primary", children: "Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-3", children: [
          "Simple, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Transparent" }),
          " Pricing"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No hidden fees. Cancel anytime." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid sm:grid-cols-3 gap-6",
          "data-ocid": "pricing.section",
          children: PRICING.map((plan, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `pricing.item.${i + 1}`,
              className: `glass-card rounded-2xl p-6 border transition-all duration-300 relative flex flex-col ${plan.highlighted ? "border-primary shadow-[0_0_40px_oklch(0.7_0.22_270/0.3)] scale-[1.03]" : "border-border hover:border-primary/30 hover:scale-[1.01]"}`,
              children: [
                plan.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "px-3 py-1 bg-primary text-primary-foreground border-0 text-xs font-semibold", children: plan.badge }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: `font-display text-xl font-bold mb-1 ${plan.highlighted ? "text-primary glow-text-primary" : "text-foreground"}`,
                      children: plan.tier
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: plan.tagline }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-4xl font-bold font-display ${plan.highlighted ? "gradient-text" : "text-foreground"}`,
                        children: plan.price
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: plan.period })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 mb-8 flex-1", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-center gap-2 text-sm",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheck,
                        {
                          className: `w-4 h-4 flex-shrink-0 ${f.ok ? "text-accent" : "text-muted opacity-30"}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: f.ok ? "text-foreground" : "text-muted-foreground opacity-50",
                          children: f.text
                        }
                      )
                    ]
                  },
                  f.text
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RippleButton,
                  {
                    "data-ocid": `pricing.cta.${i + 1}`,
                    className: `w-full py-5 font-semibold ${plan.highlighted ? "bg-primary text-primary-foreground glow-button-hover" : "border border-border bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/50"}`,
                    variant: plan.highlighted ? "default" : "outline",
                    children: plan.cta
                  }
                )
              ]
            },
            plan.tier
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionReveal,
      {
        className: "py-16 px-4 relative overflow-hidden",
        style: {
          background: "radial-gradient(ellipse at 30% 50%, oklch(0.55 0.22 270 / 0.5) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, oklch(0.65 0.24 195 / 0.3) 0%, transparent 55%), oklch(0.12 0.025 270)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-5xl gradient-text mb-4", children: "Ready to Sell Your Website?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 text-lg", children: "Get your website in front of 1200+ qualified buyers. Free valuation included." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            RippleButton,
            {
              "data-ocid": "cta.sell_button",
              className: "glow-button-hover px-10 py-6 text-base font-semibold bg-primary text-primary-foreground rounded-xl",
              children: [
                "Get a Free Valuation",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionReveal,
      {
        className: "py-20 px-4",
        style: { background: "oklch(0.09 0.018 270)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 px-3 py-1 border border-accent/40 bg-accent/10 text-accent", children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-3", children: [
              "Get in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Touch" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Have questions? Our team is ready to help." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "grid lg:grid-cols-2 gap-8",
              "data-ocid": "contact.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 border border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-4", children: "Contact Information" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "mailto:animalsong67@gmail.com",
                          className: "flex items-center gap-3 group",
                          "data-ocid": "contact.email_link",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-accent" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Email" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground group-hover:text-accent transition-colors", children: "animalsong67@gmail.com" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "tel:7673809412",
                          className: "flex items-center gap-3 group",
                          "data-ocid": "contact.phone_link",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-primary" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Phone" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors", children: "+91 7673809412" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "https://instagram.com/krish_ff_5607",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex items-center gap-3 group",
                          "data-ocid": "contact.instagram_link",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5 text-pink-400" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Instagram" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground group-hover:text-pink-400 transition-colors", children: "@krish_ff_5607" })
                            ] })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 border border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-foreground text-sm", children: "K" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "Mr. Krish Raj" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "CEO & Co-founder, WebStore" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Built WebStore to make digital asset trading fair, transparent, and accessible to everyone in India and beyond." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-5", children: "Send a Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      onSubmit: handleContact,
                      className: "space-y-4",
                      "data-ocid": "contact.form",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-name", className: "text-sm text-foreground", children: "Full Name" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              id: "c-name",
                              value: contactForm.name,
                              onChange: (e) => setContactForm((p) => ({ ...p, name: e.target.value })),
                              placeholder: "Your name",
                              className: "bg-muted/30 border-border focus:border-primary/50",
                              "data-ocid": "contact.name_input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-email", className: "text-sm text-foreground", children: "Email Address" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              id: "c-email",
                              type: "email",
                              value: contactForm.email,
                              onChange: (e) => setContactForm((p) => ({ ...p, email: e.target.value })),
                              placeholder: "your@email.com",
                              className: "bg-muted/30 border-border focus:border-primary/50",
                              "data-ocid": "contact.email_input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-msg", className: "text-sm text-foreground", children: "Message" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Textarea,
                            {
                              id: "c-msg",
                              value: contactForm.message,
                              onChange: (e) => setContactForm((p) => ({ ...p, message: e.target.value })),
                              placeholder: "What can we help you with?",
                              rows: 4,
                              className: "bg-muted/30 border-border focus:border-primary/50 resize-none",
                              "data-ocid": "contact.message_input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "submit",
                            disabled: submitContact.isPending,
                            className: "w-full py-5 bg-primary text-primary-foreground glow-button-hover font-semibold",
                            "data-ocid": "contact.submit_button",
                            children: submitContact.isPending ? "Sending…" : "Send Message"
                          }
                        )
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-card border-t border-border py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold gradient-text mb-3", children: "WebStore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "India's most trusted marketplace for buying and selling websites and digital assets." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-3 text-sm uppercase tracking-wider", children: "Marketplace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            { label: "Browse Listings", to: "/browse" },
            { label: "Sell Website", to: "/sell" },
            { label: "AI Valuation", to: "/valuation" },
            { label: "Auction System", to: "/browse" }
          ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "hover:text-primary transition-colors",
              children: l.label
            }
          ) }, l.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-3 text-sm uppercase tracking-wider", children: "Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            { label: "Escrow Protection", to: "/escrow" },
            { label: "Website Transfer", to: "/transfer" },
            { label: "AI Builder", to: "/builder" },
            { label: "Seller Dashboard", to: "/seller" }
          ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "hover:text-accent transition-colors",
              children: l.label
            }
          ) }, l.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-3 text-sm uppercase tracking-wider", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5" }),
              " animalsong67@gmail.com"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
              " +91 7673809412"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://instagram.com/krish_ff_5607",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-1.5 hover:text-pink-400 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-3.5 h-3.5" }),
                  " @krish_ff_5607"
                ]
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Secure escrow payments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5 ml-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Verified sellers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " WebStore. Built with love using",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-primary hover:underline",
              children: "caffeine.ai"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Privacy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Terms" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as default
};
