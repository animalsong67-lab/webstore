import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  Globe,
  Instagram,
  Lock,
  Mail,
  Phone,
  Quote,
  Search,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useListings, useSubmitContact } from "../hooks/useListings";
import type { ContactMessageInput, Listing } from "../types";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatCurrency(n: bigint) {
  return `₹${Number(n).toLocaleString()}`;
}

// ─── useCountUp (IntersectionObserver + rAF + cubic-ease) ────────────────────
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const start = performance.now();
    const animate = (now: number) => {
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

// ─── useScrollReveal ─────────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

// ─── SectionReveal ────────────────────────────────────────────────────────────
function SectionReveal({
  children,
  className = "",
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useScrollReveal();
  const combinedStyle: React.CSSProperties = {
    ...(style ?? {}),
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={combinedStyle}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  );
}

// ─── RippleButton ─────────────────────────────────────────────────────────────
function RippleButton({
  children,
  className = "",
  onClick,
  variant = "default",
  disabled,
  type = "button",
  "data-ocid": ocid,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  "data-ocid"?: string;
}) {
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    onClick?.();
  };
  return (
    <Button
      type={type}
      variant={variant}
      disabled={disabled}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      data-ocid={ocid}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/25 animate-ripple pointer-events-none"
          style={{ left: r.x - 20, top: r.y - 20, width: 40, height: 40 }}
        />
      ))}
    </Button>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Globe,
    label: "Websites Listed",
    value: 500,
    suffix: "+",
    color: "text-primary",
  },
  {
    icon: DollarSign,
    label: "Total Sales Volume",
    value: 10,
    suffix: "Cr+",
    color: "text-accent",
  },
  {
    icon: Users,
    label: "Active Sellers",
    value: 1200,
    suffix: "+",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    label: "Satisfied Buyers",
    value: 3500,
    suffix: "+",
    color: "text-accent",
  },
];

const SERVICES = [
  {
    icon: Search,
    title: "Browse Listings",
    description:
      "Discover profitable websites across all niches with AI-powered smart filters.",
    gradient: "from-primary/20 to-primary/5",
    link: "/browse",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.7_0.22_270/0.35)]",
  },
  {
    icon: Globe,
    title: "Sell Your Website",
    description:
      "List your digital asset and reach 1200+ verified buyers with a free AI valuation.",
    gradient: "from-accent/20 to-accent/5",
    link: "/sell",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.78_0.24_195/0.35)]",
  },
  {
    icon: Sparkles,
    title: "AI Valuation",
    description:
      "Get instant price estimates based on traffic, revenue, SEO score, and growth potential.",
    gradient: "from-primary/20 to-accent/10",
    link: "/valuation",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.7_0.22_270/0.35)]",
  },
  {
    icon: Shield,
    title: "Escrow Protection",
    description:
      "Secure payment escrow holds your funds until the website transfer is fully confirmed.",
    gradient: "from-accent/20 to-primary/10",
    link: "/escrow",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.78_0.24_195/0.35)]",
  },
  {
    icon: Zap,
    title: "Website Transfer",
    description:
      "One-click domain & hosting migration — cPanel, WordPress, and custom CMS supported.",
    gradient: "from-primary/20 to-primary/5",
    link: "/transfer",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.7_0.22_270/0.35)]",
  },
  {
    icon: Bot,
    title: "AI Builder",
    description:
      "Generate a complete website with AI — landing pages, content, and design in seconds.",
    gradient: "from-accent/20 to-accent/5",
    link: "/builder",
    glow: "group-hover:shadow-[0_0_30px_oklch(0.78_0.24_195/0.35)]",
  },
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Website Seller, Delhi",
    text: "Sold my 3-year-old niche blog in 4 days for ₹1.8L. The AI valuation was spot-on and the escrow made the transfer completely stress-free.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Digital Asset Investor, Bangalore",
    text: "WebStore is the most transparent marketplace I have used. Verified revenue badges and trust scores helped me invest ₹5L with full confidence.",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    role: "E-commerce Entrepreneur, Mumbai",
    text: "Bought 3 websites here. The performance reports saved me from 2 bad deals. Mr Krish Raj's team support is excellent — quick and genuinely helpful.",
    stars: 5,
  },
  {
    name: "Sneha Patel",
    role: "Freelance Developer, Ahmedabad",
    text: "The AI Builder is incredible — I built and listed a website in 2 hours. Got my first inquiry the same day. Highly recommend WebStore.",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "How does buying a website on WebStore work?",
    a: "Browse listings, contact the seller, and initiate a secure escrow payment. Funds are held safely until the website is fully transferred to your ownership.",
  },
  {
    q: "How is the website price determined?",
    a: "Our AI Valuation tool analyzes monthly revenue, organic traffic, SEO authority, domain age, niche demand, and comparable market sales to give a fair estimate.",
  },
  {
    q: "Is the escrow payment system safe?",
    a: "Yes. WebStore uses a secure escrow model — your payment is held by the platform until you confirm the website transfer is complete, protecting both buyer and seller.",
  },
  {
    q: "What niches and platforms are available?",
    a: "We list WordPress, Shopify, custom HTML, SaaS, and mobile app websites across niches including tech, finance, health, fashion, education, and more.",
  },
  {
    q: "How long does website transfer typically take?",
    a: "Most transfers complete within 3–7 business days. Our transfer assistant guides both parties through domain handover, hosting migration, and cPanel access.",
  },
  {
    q: "Can I sell a website that earns no revenue?",
    a: "Yes. We list websites based on traffic, SEO value, domain authority, and growth potential — not just revenue. Many buyers look for undervalued assets.",
  },
  {
    q: "How do I verify a seller is trustworthy?",
    a: "Each seller has a Trust Score with verified transactions, buyer reviews, response time, and fraud detection. Look for the 'Verified Seller' badge on any listing.",
  },
  {
    q: "What payment methods does WebStore support?",
    a: "We support UPI, bank transfer, debit/credit cards, and international payments — making transactions smooth for buyers across India and globally.",
  },
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
      { text: "Dedicated manager", ok: false },
    ],
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
      { text: "Dedicated manager", ok: false },
    ],
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
      { text: "Dedicated manager", ok: true },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  suffix,
  color,
}: (typeof STATS)[number]) {
  const { count, ref } = useCountUp(value);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="glass-card rounded-2xl p-6 flex flex-col items-center gap-2 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_oklch(0.7_0.22_270/0.25)] group"
    >
      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div
        className={`text-3xl font-bold font-display ${color} glow-text-primary`}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </div>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="glass-card rounded-2xl p-5 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_oklch(0.7_0.22_270/0.2)] group cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <Badge className="text-xs bg-primary/20 text-primary border-primary/30">
          {listing.niche}
        </Badge>
        <span className="text-xs text-muted-foreground">
          {listing.platform}
        </span>
      </div>
      <h3 className="font-display font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
        {listing.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {listing.description}
      </p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="rounded-lg p-2 bg-primary/8 border border-primary/15">
          <p className="text-xs text-muted-foreground">Revenue/mo</p>
          <p className="text-sm font-semibold text-foreground">
            {formatCurrency(listing.monthlyRevenue)}
          </p>
        </div>
        <div className="rounded-lg p-2 bg-accent/8 border border-accent/15">
          <p className="text-xs text-muted-foreground">Traffic/mo</p>
          <p className="text-sm font-semibold text-foreground">
            {Number(listing.monthlyTraffic).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-display font-bold text-primary text-lg glow-text-primary">
          {formatCurrency(listing.askingPrice)}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="text-xs border-primary/40 text-primary hover:bg-primary/10"
          asChild
        >
          <Link to="/browse">View Details</Link>
        </Button>
      </div>
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  const { data: listings = [], isLoading } = useListings();
  const featured = listings.slice(0, 6);
  const submitContact = useSubmitContact();

  // Contact form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    const input: ContactMessageInput = {
      name: contactForm.name,
      email: contactForm.email,
      subject: "Website inquiry from homepage",
      message: contactForm.message,
    };
    submitContact.mutate(input, {
      onSuccess: () => {
        toast.success("Message sent! We will respond shortly.");
        setContactForm({ name: "", email: "", message: "" });
      },
      onError: () => toast.error("Failed to send. Please try again."),
    });
  };

  // Testimonials auto-advance
  const [activeT, setActiveT] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActiveT((p) => (p + 1) % TESTIMONIALS.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  // FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hero entrance
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Browse ref for CTA scroll
  const _browseRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ── HERO ── */}
      <section
        data-ocid="hero.section"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, oklch(0.7 0.22 270 / 0.22) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, oklch(0.78 0.24 195 / 0.18) 0%, transparent 55%), oklch(0.08 0.015 270)",
        }}
      >
        {/* Mesh BG */}
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-mesh-bg.dim_1600x900.jpg')",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.22 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 270) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating accent glass cards */}
        <div
          className="absolute top-24 right-[7%] hidden lg:block perspective-3d animate-float"
          style={{ animationDelay: "0s" }}
        >
          <div className="glass-card-elevated rounded-2xl p-4 w-44 border border-primary/30 transform-gpu-3d">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-semibold text-foreground">
                Top Sale
              </span>
            </div>
            <div className="text-lg font-bold text-primary glow-text-primary">
              ₹4.2L
            </div>
            <div className="text-xs text-muted-foreground">
              NicheBlog.in sold today
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-36 left-[5%] hidden lg:block perspective-3d animate-float"
          style={{ animationDelay: "1.4s" }}
        >
          <div className="glass-card-elevated rounded-2xl p-4 w-48 border border-accent/30 transform-gpu-3d">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xs font-semibold text-foreground">
                Escrow Active
              </span>
            </div>
            <div className="text-sm font-semibold text-accent">
              Transaction #8821
            </div>
            <div className="text-xs text-muted-foreground">₹1.8L secured ✓</div>
          </div>
        </div>
        <div
          className="absolute top-40 left-[9%] hidden xl:block perspective-3d animate-float"
          style={{ animationDelay: "2.6s" }}
        >
          <div className="glass-card rounded-xl p-3 w-36 border border-primary/20">
            <div className="text-xs text-muted-foreground">AI Score</div>
            <div className="text-xl font-bold text-primary">94/100</div>
            <div className="text-xs text-accent">High Value Asset</div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Badge
            className={`mb-6 px-4 py-1.5 text-sm border border-primary/40 bg-primary/10 text-primary transition-all duration-700 ${
              heroIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            India's #1 Website Marketplace
          </Badge>

          <h1
            className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 transition-all duration-700 delay-150 ${
              heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-foreground">Buy &amp; Sell</span>{" "}
            <span className="gradient-text">Websites</span>
            <br />
            <span className="text-foreground">Like a </span>
            <span className="gradient-text">Pro</span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
              heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The most trusted marketplace for digital assets — with AI valuation,
            secure escrow, instant transfer, and verified seller profiles. Start
            in minutes.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
              heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link to="/browse">
              <RippleButton
                data-ocid="hero.browse_button"
                className="glow-button-hover px-8 py-6 text-base font-semibold bg-primary text-primary-foreground rounded-xl hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Websites
                <ArrowRight className="w-5 h-5 ml-2" />
              </RippleButton>
            </Link>
            <Link to="/sell">
              <RippleButton
                variant="outline"
                data-ocid="hero.sell_button"
                className="glow-button-accent-hover px-8 py-6 text-base font-semibold border-accent/50 text-accent rounded-xl hover:scale-105 hover:bg-accent/10"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Sell Your Website
              </RippleButton>
            </Link>
          </div>

          {listings.length > 0 && (
            <p
              className={`mt-6 text-sm text-muted-foreground transition-all duration-700 delay-700 ${
                heroIn ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-primary font-semibold">
                {listings.length}+
              </span>{" "}
              active listings right now
            </p>
          )}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* ── STATS ── */}
      <SectionReveal className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-3">
              Platform at a Glance
            </h2>
            <p className="text-muted-foreground">
              Numbers that speak for themselves
            </p>
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="stats.section"
          >
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ── FEATURED LISTINGS ── */}
      <SectionReveal
        className="py-20 px-4"
        style={{ background: "oklch(0.10 0.018 270)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-medium text-accent mb-1 glow-text-accent">
                Marketplace
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl gradient-text">
                Featured Listings
              </h2>
              <p className="text-muted-foreground mt-2">
                Hand-picked websites available for acquisition
              </p>
            </div>
            <Button
              variant="outline"
              asChild
              className="border-primary/40 text-primary hover:bg-primary/10"
              data-ocid="listings.view_all_button"
            >
              <Link to="/browse">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="listings.section"
          >
            {isLoading ? (
              ["a", "b", "c"].map((k) => (
                <div key={k} className="glass-card rounded-2xl p-5 space-y-3">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-16 w-full" />
                </div>
              ))
            ) : featured.length > 0 ? (
              featured.map((l) => (
                <ListingCard key={l.id.toString()} listing={l} />
              ))
            ) : (
              <div
                className="col-span-3 text-center py-16"
                data-ocid="listings.empty_state"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg font-medium text-foreground mb-2">
                  No listings yet
                </p>
                <p className="text-sm text-muted-foreground mb-5">
                  Be the first to list your website!
                </p>
                <Button
                  asChild
                  className="glow-primary"
                  data-ocid="listings.cta_button"
                >
                  <Link to="/sell">List Your Website</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </SectionReveal>

      {/* ── SERVICES ── */}
      <SectionReveal
        className="py-20 px-4"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 50%, oklch(0.7 0.22 270 / 0.05) 0%, transparent 70%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 px-3 py-1 border border-accent/40 bg-accent/10 text-accent">
              Services
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Trade Websites</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From discovery to transfer — WebStore handles the full lifecycle
              of every digital asset transaction.
            </p>
          </div>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="services.section"
          >
            {SERVICES.map((svc, i) => (
              <Link
                to={svc.link}
                key={svc.title}
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className={`group glass-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-[1.03] cursor-pointer h-full ${svc.glow}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <svc.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {svc.description}
                  </p>
                  <div className="mt-4 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ── TESTIMONIALS ── */}
      <SectionReveal className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1 border border-primary/40 bg-primary/10 text-primary">
              Reviews
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-muted-foreground">
              Real buyers and sellers sharing real experiences
            </p>
          </div>
          <div
            className="relative overflow-hidden"
            data-ocid="testimonials.section"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeT * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className="min-w-full px-1">
                  <div className="glass-card rounded-2xl p-8 border border-border">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-foreground flex-shrink-0"
                        style={{
                          background:
                            i % 2 === 0
                              ? "linear-gradient(135deg, oklch(0.7 0.22 270), oklch(0.6 0.2 290))"
                              : "linear-gradient(135deg, oklch(0.78 0.24 195), oklch(0.65 0.2 210))",
                        }}
                      >
                        {t.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground font-display">
                          {t.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {t.role}
                        </div>
                        <div className="flex gap-0.5 mt-1">
                          {[1, 2, 3, 4, 5].slice(0, t.stars).map((n) => (
                            <Star
                              key={n}
                              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-primary/25 flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex justify-center gap-2 mt-6"
            data-ocid="testimonials.pagination"
          >
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActiveT(i)}
                data-ocid={`testimonials.dot.${i + 1}`}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeT
                    ? "bg-primary w-6 shadow-[0_0_8px_oklch(0.7_0.22_270/0.8)]"
                    : "bg-muted w-2.5 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ── FAQ ── */}
      <SectionReveal className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1 border border-accent/40 bg-accent/10 text-accent">
              FAQ
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know before your first transaction
            </p>
          </div>
          <div className="space-y-3" data-ocid="faq.section">
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className="glass-card rounded-xl border border-border hover:border-primary/30 transition-colors overflow-hidden"
                data-ocid={`faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  data-ocid={`faq.toggle.${i + 1}`}
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? "300px" : "0px" }}
                >
                  <p className="px-5 pb-4 text-muted-foreground leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ── PRICING ── */}
      <SectionReveal className="py-20 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 px-3 py-1 border border-primary/40 bg-primary/10 text-primary">
              Pricing
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-muted-foreground">
              No hidden fees. Cancel anytime.
            </p>
          </div>
          <div
            className="grid sm:grid-cols-3 gap-6"
            data-ocid="pricing.section"
          >
            {PRICING.map((plan, i) => (
              <div
                key={plan.tier}
                data-ocid={`pricing.item.${i + 1}`}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 relative flex flex-col ${
                  plan.highlighted
                    ? "border-primary shadow-[0_0_40px_oklch(0.7_0.22_270/0.3)] scale-[1.03]"
                    : "border-border hover:border-primary/30 hover:scale-[1.01]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-1 bg-primary text-primary-foreground border-0 text-xs font-semibold">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`font-display text-xl font-bold mb-1 ${
                      plan.highlighted
                        ? "text-primary glow-text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {plan.tier}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {plan.tagline}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold font-display ${
                        plan.highlighted ? "gradient-text" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 ${
                          f.ok ? "text-accent" : "text-muted opacity-30"
                        }`}
                      />
                      <span
                        className={
                          f.ok
                            ? "text-foreground"
                            : "text-muted-foreground opacity-50"
                        }
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <RippleButton
                  data-ocid={`pricing.cta.${i + 1}`}
                  className={`w-full py-5 font-semibold ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground glow-button-hover"
                      : "border border-border bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/50"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </RippleButton>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ── SELL CTA BANNER ── */}
      <SectionReveal
        className="py-16 px-4 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, oklch(0.55 0.22 270 / 0.5) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, oklch(0.65 0.24 195 / 0.3) 0%, transparent 55%), oklch(0.12 0.025 270)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="font-display font-bold text-3xl sm:text-5xl gradient-text mb-4">
            Ready to Sell Your Website?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get your website in front of 1200+ qualified buyers. Free valuation
            included.
          </p>
          <Link to="/sell">
            <RippleButton
              data-ocid="cta.sell_button"
              className="glow-button-hover px-10 py-6 text-base font-semibold bg-primary text-primary-foreground rounded-xl"
            >
              Get a Free Valuation
              <ArrowRight className="ml-2 w-5 h-5" />
            </RippleButton>
          </Link>
        </div>
      </SectionReveal>

      {/* ── CONTACT ── */}
      <SectionReveal
        className="py-20 px-4"
        style={{ background: "oklch(0.09 0.018 270)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1 border border-accent/40 bg-accent/10 text-accent">
              Contact
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground">
              Have questions? Our team is ready to help.
            </p>
          </div>
          <div
            className="grid lg:grid-cols-2 gap-8"
            data-ocid="contact.section"
          >
            {/* Info cards */}
            <div className="space-y-5">
              <div className="glass-card rounded-2xl p-6 border border-border">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:animalsong67@gmail.com"
                    className="flex items-center gap-3 group"
                    data-ocid="contact.email_link"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        animalsong67@gmail.com
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:7673809412"
                    className="flex items-center gap-3 group"
                    data-ocid="contact.phone_link"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Phone</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        +91 7673809412
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com/krish_ff_5607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                    data-ocid="contact.instagram_link"
                  >
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Instagram
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-pink-400 transition-colors">
                        @krish_ff_5607
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-foreground text-sm">
                    K
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Mr. Krish Raj
                    </div>
                    <div className="text-xs text-muted-foreground">
                      CEO &amp; Co-founder, WebStore
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Built WebStore to make digital asset trading fair,
                  transparent, and accessible to everyone in India and beyond.
                </p>
              </div>
            </div>
            {/* Contact form */}
            <div className="glass-card rounded-2xl p-6 border border-border">
              <h3 className="font-display font-semibold text-lg text-foreground mb-5">
                Send a Message
              </h3>
              <form
                onSubmit={handleContact}
                className="space-y-4"
                data-ocid="contact.form"
              >
                <div className="space-y-1.5">
                  <Label htmlFor="c-name" className="text-sm text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="c-name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="bg-muted/30 border-border focus:border-primary/50"
                    data-ocid="contact.name_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-email" className="text-sm text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="c-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="bg-muted/30 border-border focus:border-primary/50"
                    data-ocid="contact.email_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-msg" className="text-sm text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="c-msg"
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="What can we help you with?"
                    rows={4}
                    className="bg-muted/30 border-border focus:border-primary/50 resize-none"
                    data-ocid="contact.message_input"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitContact.isPending}
                  className="w-full py-5 bg-primary text-primary-foreground glow-button-hover font-semibold"
                  data-ocid="contact.submit_button"
                >
                  {submitContact.isPending ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ── FOOTER ── */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="font-display text-xl font-bold gradient-text mb-3">
                WebStore
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                India's most trusted marketplace for buying and selling websites
                and digital assets.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                Marketplace
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  { label: "Browse Listings", to: "/browse" },
                  { label: "Sell Website", to: "/sell" },
                  { label: "AI Valuation", to: "/valuation" },
                  { label: "Auction System", to: "/browse" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                Platform
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  { label: "Escrow Protection", to: "/escrow" },
                  { label: "Website Transfer", to: "/transfer" },
                  { label: "AI Builder", to: "/builder" },
                  { label: "Seller Dashboard", to: "/seller" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="hover:text-accent transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> animalsong67@gmail.com
                </li>
                <li className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> +91 7673809412
                </li>
                <li>
                  <a
                    href="https://instagram.com/krish_ff_5607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" /> @krish_ff_5607
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <Lock className="w-3.5 h-3.5" />
              <span>Secure escrow payments</span>
              <Shield className="w-3.5 h-3.5 ml-2" />
              <span>Verified sellers</span>
            </div>
            <div className="text-center">
              &copy; {new Date().getFullYear()} WebStore. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </div>
            <div className="flex gap-4">
              <Link to="/" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
