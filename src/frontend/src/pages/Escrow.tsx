import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRightLeft,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Globe,
  Landmark,
  Lock,
  MessageCircleQuestion,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { useState } from "react";

// ─── Types ──────────────────────────────────────────────────────────────────

type StepStatus = "Pending" | "In Progress" | "Completed" | "Secure";

interface EscrowStep {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  status: StepStatus;
}

interface PaymentMethod {
  icon: React.ReactNode;
  name: string;
  description: string;
  processingTime: string;
}

interface SecurityFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────

const ESCROW_STEPS: EscrowStep[] = [
  {
    number: 1,
    icon: <Wallet className="w-6 h-6" />,
    title: "Buyer Submits Payment",
    description: "Payment securely initiated",
    status: "Secure",
  },
  {
    number: 2,
    icon: <Lock className="w-6 h-6" />,
    title: "Platform Holds Funds",
    description: "Funds held in secure escrow until transfer complete",
    status: "Secure",
  },
  {
    number: 3,
    icon: <ArrowRightLeft className="w-6 h-6" />,
    title: "Website Transfer Completed",
    description: "Seller completes domain and hosting transfer",
    status: "Pending",
  },
  {
    number: 4,
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Payment Released to Seller",
    description: "Buyer confirms receipt and payment released",
    status: "Pending",
  },
];

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    icon: <span className="text-xl font-bold">₹</span>,
    name: "UPI",
    description: "Instant payment via any UPI app — Google Pay, PhonePe, Paytm",
    processingTime: "Instant",
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    name: "Bank Transfer",
    description: "Direct NEFT / IMPS / RTGS transfer to escrow account",
    processingTime: "1–2 hours",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    name: "Debit / Credit Card",
    description: "Visa, Mastercard, RuPay — encrypted card processing",
    processingTime: "Instant",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: "International Payments",
    description: "Wire transfer, SWIFT, and multi-currency support",
    processingTime: "1–3 business days",
  },
];

const SECURITY_FEATURES: SecurityFeature[] = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Fund Protection",
    description:
      "Funds are held in a secure escrow account until both buyer and seller confirm the transfer is complete. Neither party can access funds unilaterally.",
  },
  {
    icon: <MessageCircleQuestion className="w-7 h-7" />,
    title: "Dispute Resolution",
    description:
      "Our 24/7 support team mediates transaction disputes. We review evidence from both sides and release funds only when a fair resolution is reached.",
  },
  {
    icon: <Lock className="w-7 h-7" />,
    title: "100% Secure",
    description:
      "All payment channels use bank-grade TLS encryption. Sensitive data is tokenized and never stored on our servers.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is an escrow payment?",
    answer:
      "Escrow is a financial arrangement where a trusted third party (WebStore) holds the buyer's payment until the website transfer is fully verified. This protects both buyers and sellers from fraud.",
  },
  {
    question: "How long does the escrow process take?",
    answer:
      "Most transactions complete within 3–7 business days. The timeline depends on how quickly the seller transfers the domain and hosting, and how soon the buyer confirms receipt.",
  },
  {
    question: "What happens if there is a dispute?",
    answer:
      "If either party raises a dispute, our support team steps in to mediate. We review transfer logs, communication history, and domain ownership records before releasing funds to the rightful party.",
  },
  {
    question: "Are there any fees for using escrow?",
    answer:
      "WebStore charges a small escrow facilitation fee of 2.5% of the transaction value, paid by the seller. There are no hidden charges for buyers.",
  },
  {
    question: "Can I cancel an escrow transaction?",
    answer:
      "Yes — if the website transfer has not yet begun, either party can request cancellation. Funds are returned to the buyer within 24–48 hours after cancellation approval.",
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

// ─── Page Header ────────────────────────────────────────────────────────────

function EscrowPageHeader() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 15% 40%, oklch(0.55 0.22 270 / 0.4) 0%, transparent 60%), " +
          "radial-gradient(ellipse 60% 50% at 85% 60%, oklch(0.78 0.24 195 / 0.3) 0%, transparent 55%), " +
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
        className="absolute -top-12 right-1/4 w-64 h-64 rounded-full pointer-events-none animate-float"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.22 270 / 0.25) 0%, transparent 70%)",
          filter: "blur(36px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-12 w-48 h-48 rounded-full pointer-events-none animate-float"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.24 195 / 0.2) 0%, transparent 70%)",
          filter: "blur(28px)",
          animationDelay: "2s",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass-card border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary mb-5">
          <ShieldCheck className="w-4 h-4" />
          Secure Escrow System
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.1] tracking-tight mb-4">
          <span className="gradient-text glow-text-primary">
            Escrow Payments
          </span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Your funds are protected at every step. We hold payment until the
          website transfer is verified complete.
        </p>
      </div>
    </section>
  );
}

// ─── Components ─────────────────────────────────────────────────────────────

function EscrowStepCard({ step }: { step: EscrowStep }) {
  const isActive = step.status === "Secure" || step.status === "In Progress";
  const isCompleted = step.status === "Completed";
  const isPending = step.status === "Pending";

  const glowClass = isCompleted
    ? "border-[oklch(0.72_0.2_142/0.4)] shadow-[0_0_20px_oklch(0.72_0.2_142/0.2)]"
    : isActive
      ? "border-primary/40 shadow-[0_0_20px_oklch(0.7_0.22_270/0.2)]"
      : "border-border/40";

  const iconBg = isCompleted
    ? "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.3)]"
    : isActive
      ? "bg-primary/15 text-primary border-primary/30"
      : "bg-muted/30 text-muted-foreground border-border/40";

  const badgeCls = isCompleted
    ? "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.3)]"
    : isActive
      ? "bg-primary/15 text-primary border-primary/30"
      : "bg-muted/20 text-muted-foreground border-border/30";

  const numBg = isCompleted
    ? "bg-[oklch(0.72_0.2_142)] text-[oklch(0.05_0.01_270)] shadow-[0_0_12px_oklch(0.72_0.2_142/0.4)]"
    : isActive
      ? "bg-primary text-primary-foreground shadow-[0_0_12px_oklch(0.7_0.22_270/0.4)]"
      : isPending
        ? "bg-muted text-muted-foreground"
        : "bg-muted text-muted-foreground";

  return (
    <div
      className={`relative glass-card flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 ${glowClass}`}
      data-ocid={`escrow.step.${step.number}`}
    >
      <div
        className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${numBg}`}
      >
        {step.number}
      </div>
      <div
        className={`mt-5 mb-3 w-14 h-14 rounded-2xl flex items-center justify-center border ${iconBg}`}
      >
        {step.icon}
      </div>
      <h3 className="font-display font-semibold text-foreground text-sm mb-2">
        {step.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        {step.description}
      </p>
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeCls}`}
      >
        {step.status}
      </span>
    </div>
  );
}

function PaymentMethodCard({ method }: { method: PaymentMethod }) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-border/50 hover:border-primary/30 hover:shadow-[0_0_20px_oklch(0.7_0.22_270/0.15)] transition-all duration-300 cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 text-primary flex items-center justify-center">
        {method.icon}
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground text-sm">
          {method.name}
        </h4>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          {method.description}
        </p>
      </div>
      <div className="mt-auto pt-3 w-full border-t border-border/30">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
          Processing Time
        </p>
        <p className="text-xs font-semibold gradient-text mt-0.5">
          {method.processingTime}
        </p>
      </div>
    </div>
  );
}

function SecurityFeatureCard({ feature }: { feature: SecurityFeature }) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 border border-border/50 hover:border-primary/25 hover:shadow-[0_0_24px_oklch(0.7_0.22_270/0.12)] transition-all duration-300">
      <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 text-primary flex items-center justify-center">
        {feature.icon}
      </div>
      <h4 className="font-display font-semibold text-foreground text-base">
        {feature.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EscrowPage() {
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);

  return (
    <div className="bg-background min-h-screen" data-ocid="escrow.page">
      <EscrowPageHeader />

      {/* ── 4-Step Workflow ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-3">
            How Escrow Works
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            A simple 4-step process designed to protect buyers and sellers
            throughout every transaction.
          </p>
        </div>

        {/* Gradient connector line + cards */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/60 via-accent/60 to-[oklch(0.72_0.2_142/0.6)]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ESCROW_STEPS.map((step) => (
              <EscrowStepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment Methods ── */}
      <section className="border-y border-border/40 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
              Supported Payment Methods
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Multiple secure options to deposit funds into escrow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PAYMENT_METHODS.map((method) => (
              <PaymentMethodCard key={method.name} method={method} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Security Features ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
            Why Our Escrow is Safe
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Industry-leading security measures to protect every transaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SECURITY_FEATURES.map((feature) => (
            <SecurityFeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-y border-border/40 bg-muted/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl gradient-text mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm">
              Everything you need to know about our escrow payment system.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            value={openFaq}
            onValueChange={setOpenFaq}
            className="space-y-3"
          >
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem
                key={item.question}
                value={`faq-${idx}`}
                className="glass-card border border-border/50 rounded-2xl px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-[0_0_16px_oklch(0.7_0.22_270/0.15)] transition-all duration-300"
                data-ocid={`escrow.faq.item.${idx + 1}`}
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden glass-card border border-primary/20 rounded-3xl p-8 sm:p-16 text-center shadow-[0_0_60px_oklch(0.7_0.22_270/0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl gradient-text mb-3">
              Ready to Buy or Sell a Website?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-8">
              Browse verified listings and start your next acquisition with full
              escrow protection.
            </p>
            <Link to="/browse">
              <Button
                size="lg"
                className="gap-2 bg-primary/90 hover:bg-primary shadow-[0_0_24px_oklch(0.7_0.22_270/0.4)] hover:shadow-[0_0_36px_oklch(0.7_0.22_270/0.6)] transition-all duration-300"
                data-ocid="escrow.view-listings-button"
              >
                View Listings <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
