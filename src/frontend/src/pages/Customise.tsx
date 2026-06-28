import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle,
  Clock,
  Coffee,
  Globe,
  Heart,
  Home,
  Layers,
  Loader2,
  Newspaper,
  Package,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitCustomOrder } from "../hooks/useListings";
import type { CustomOrderInput } from "../types";

/* ── Website Type Data ────────────────────────────────────── */

const WEBSITE_TYPES = [
  {
    id: "ecommerce",
    label: "E-Commerce",
    icon: ShoppingCart,
    desc: "Online store with product listings & payments",
  },
  {
    id: "blog",
    label: "Blog / Content",
    icon: BookOpen,
    desc: "Articles, news, and content-focused sites",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: Layers,
    desc: "Showcase your work, skills & projects",
  },
  {
    id: "business",
    label: "Business / Corporate",
    icon: Briefcase,
    desc: "Professional company or agency website",
  },
  {
    id: "landing",
    label: "Landing Page",
    icon: Zap,
    desc: "High-converting single-page campaign sites",
  },
  {
    id: "educational",
    label: "Educational",
    icon: Globe,
    desc: "Courses, tutorials, and learning platforms",
  },
  {
    id: "news",
    label: "News / Magazine",
    icon: Newspaper,
    desc: "Media publications and news portals",
  },
  {
    id: "social",
    label: "Social Community",
    icon: Users,
    desc: "Forums, communities, and member networks",
  },
  {
    id: "realestate",
    label: "Real Estate",
    icon: Home,
    desc: "Property listings, agents, and brokerages",
  },
  {
    id: "restaurant",
    label: "Restaurant / Food",
    icon: Coffee,
    desc: "Menus, reservations, and food delivery",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Stethoscope,
    desc: "Clinics, doctors, and medical services",
  },
  {
    id: "ngo",
    label: "NGO / Non-Profit",
    icon: Heart,
    desc: "Charities, foundations, and social causes",
  },
];

const BUDGETS = [
  "Under ₹5,000",
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
];

const TIMELINES = [
  "ASAP (within days)",
  "1 Week",
  "2 Weeks",
  "1 Month",
  "2+ Months",
];

const STATUS_STYLES: Record<string, { badge: string; dot: string }> = {
  pending: {
    badge: "bg-muted/60 text-muted-foreground border-border/50",
    dot: "bg-muted-foreground",
  },
  inprogress: {
    badge: "bg-primary/10 text-primary border-primary/30",
    dot: "bg-primary",
  },
  review: {
    badge: "bg-accent/10 text-accent border-accent/30",
    dot: "bg-accent",
  },
  delivered: {
    badge: "bg-success/10 text-success border-success/30",
    dot: "bg-success",
  },
};
const STATUS_LABELS: Record<string, string> = {
  pending: "Pending",
  inprogress: "In Progress",
  review: "Under Review",
  delivered: "Delivered",
};

/* ── Helpers ──────────────────────────────────────────────────────────────── */

const inputCls =
  "w-full px-3.5 py-3 rounded-xl border border-border/50 bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth backdrop-blur-sm";
const textareaCls = `${inputCls} resize-none overflow-y-auto`;

function FieldLabel({
  htmlFor,
  children,
  optional,
}: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
    >
      {children}
      {optional && (
        <span className="ml-1.5 text-xs normal-case font-normal text-muted-foreground/60">
          (optional)
        </span>
      )}
    </label>
  );
}

/* ── Type Selector Grid ───────────────────────────────────── */

function TypeGrid({
  selected,
  onSelect,
}: { selected: string; onSelect: (id: string) => void }) {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
      data-ocid="customise-type-grid"
    >
      {WEBSITE_TYPES.map(({ id, label, icon: Icon, desc }, i) => {
        const isSelected = selected === id;
        return (
          <motion.button
            key={id}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            onClick={() => onSelect(id)}
            data-ocid={`customise-type-${id}`}
            className={[
              "relative text-left p-4 rounded-2xl border-2 transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
              isSelected
                ? "border-primary/60 bg-primary/10 shadow-lg glow-primary"
                : "glass-card glass-card-hover border-border/40",
            ].join(" ")}
          >
            {isSelected && (
              <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />
              </span>
            )}
            <div
              className={[
                "w-9 h-9 rounded-xl flex items-center justify-center mb-2.5",
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/80 text-muted-foreground",
              ].join(" ")}
            >
              <Icon className="w-4 h-4" />
            </div>
            <p
              className={[
                "text-sm font-semibold leading-tight",
                isSelected ? "text-primary" : "text-foreground",
              ].join(" ")}
            >
              {label}
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-snug line-clamp-2">
              {desc}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── Order Form ───────────────────────────────────────────────────────────── */

interface OrderFormState {
  websiteType: string;
  title: string;
  requirements: string;
  budget: string;
  timeline: string;
  contactEmail: string;
  referenceUrls: string;
}
const DEFAULT_ORDER: OrderFormState = {
  websiteType: "",
  title: "",
  requirements: "",
  budget: "",
  timeline: "",
  contactEmail: "",
  referenceUrls: "",
};

function OrderForm() {
  const [form, setForm] = useState<OrderFormState>(DEFAULT_ORDER);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitOrder, isPending } = useSubmitCustomOrder();

  const set =
    (k: keyof OrderFormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.websiteType || !form.requirements || !form.contactEmail) {
      toast.error(
        "Please select a website type, describe requirements, and add email.",
      );
      return;
    }
    const input: CustomOrderInput = {
      websiteType: form.websiteType,
      description: form.title || `Custom ${form.websiteType} website`,
      contactName: form.contactEmail.split("@")[0] || "Buyer",
      requirements: form.requirements,
      budget: form.budget,
      timeline: form.timeline,
      contactEmail: form.contactEmail,
    };
    submitOrder(input, {
      onSuccess: () => {
        setSubmitted(true);
        toast.success("Request submitted!");
        setForm(DEFAULT_ORDER);
      },
      onError: (err: Error) => {
        toast.error(err?.message ?? "Submission failed.");
      },
    });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-10 text-center"
        data-ocid="customise.success_state"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5 glow-primary">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display font-bold text-2xl text-foreground mb-2">
          Request Submitted!
        </h3>
        <p className="text-muted-foreground mb-6">
          Sellers will reach out within 24–48 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          data-ocid="customise.submit_another_button"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      data-ocid="customise.order-form"
    >
      {/* Website Type Selector */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="h-0.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />
        <div className="p-6">
          <div className="flex items-center gap-2 border-b border-border/40 pb-4 mb-5">
            <div className="w-1.5 h-5 rounded-full bg-primary" />
            <h3 className="font-display font-semibold text-foreground">
              Select Website Type
            </h3>
          </div>
          <TypeGrid
            selected={form.websiteType}
            onSelect={(id) => setForm((f) => ({ ...f, websiteType: id }))}
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="h-0.5 w-full bg-gradient-to-r from-accent to-primary" />
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-2 border-b border-border/40 pb-4 mb-1">
            <div className="w-1.5 h-5 rounded-full bg-accent" />
            <h3 className="font-display font-semibold text-foreground">
              Project Details
            </h3>
          </div>
          <div>
            <FieldLabel htmlFor="proj-title">Project Name</FieldLabel>
            <input
              id="proj-title"
              type="text"
              value={form.title}
              onChange={set("title")}
              placeholder="e.g. My Online Fashion Store"
              className={inputCls}
              data-ocid="customise.title_input"
            />
          </div>
          <div>
            <FieldLabel htmlFor="requirements">Requirements *</FieldLabel>
            <textarea
              id="requirements"
              value={form.requirements}
              onChange={set("requirements")}
              rows={5}
              required
              placeholder="Describe features, pages, design preferences, target audience…"
              className={textareaCls}
              data-ocid="customise.requirements_textarea"
            />
          </div>
          <div>
            <FieldLabel htmlFor="refs" optional>
              Reference URLs (one per line)
            </FieldLabel>
            <textarea
              id="refs"
              value={form.referenceUrls}
              onChange={set("referenceUrls")}
              rows={3}
              placeholder="https://example.com"
              className={textareaCls}
              data-ocid="customise.refs_textarea"
            />
          </div>
        </div>
      </div>

      {/* Budget & Timeline */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="h-0.5 w-full bg-gradient-to-r from-primary/70 to-accent/70" />
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-2 border-b border-border/40 pb-4 mb-1">
            <div className="w-1.5 h-5 rounded-full bg-primary/70" />
            <h3 className="font-display font-semibold text-foreground">
              Budget &amp; Timeline
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <FieldLabel htmlFor="budget">Budget Range</FieldLabel>
              <select
                id="budget"
                value={form.budget}
                onChange={set("budget")}
                className={inputCls}
                data-ocid="customise.budget_select"
              >
                <option value="">Select budget…</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <FieldLabel htmlFor="timeline">Delivery Timeline</FieldLabel>
              <select
                id="timeline"
                value={form.timeline}
                onChange={set("timeline")}
                className={inputCls}
                data-ocid="customise.timeline_select"
              >
                <option value="">Select timeline…</option>
                {TIMELINES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="contactEmail">Contact Email *</FieldLabel>
              <input
                id="contactEmail"
                type="email"
                value={form.contactEmail}
                onChange={set("contactEmail")}
                placeholder="you@example.com"
                required
                className={inputCls}
                data-ocid="customise.email_input"
              />
            </div>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isPending}
        size="lg"
        className="w-full gap-2 glow-primary font-semibold text-base"
        data-ocid="customise.submit_button"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
          </>
        ) : (
          <>
            Submit Request <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}

const DEMO_ORDERS = [
  {
    id: "ORD-001",
    type: "E-Commerce",
    title: "Fashion Store with Razorpay",
    budget: "₹15,000 – ₹50,000",
    timeline: "2 Weeks",
    status: "inprogress",
  },
  {
    id: "ORD-002",
    type: "Portfolio",
    title: "Creative Agency Portfolio",
    budget: "₹5,000 – ₹15,000",
    timeline: "1 Week",
    status: "review",
  },
  {
    id: "ORD-003",
    type: "Blog / Content",
    title: "Tech News Blog",
    budget: "Under ₹5,000",
    timeline: "ASAP",
    status: "pending",
  },
  {
    id: "ORD-004",
    type: "Business",
    title: "Corporate Homepage Redesign",
    budget: "₹50,000 – ₹1,00,000",
    timeline: "1 Month",
    status: "delivered",
  },
];

function SellerOrdersView() {
  return (
    <div className="space-y-4" data-ocid="customise.seller-orders">
      {DEMO_ORDERS.map((order, i) => {
        const s = STATUS_STYLES[order.status] ?? STATUS_STYLES.pending;
        return (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            className="glass-card glass-card-hover rounded-2xl p-5 flex items-start justify-between gap-4"
            data-ocid={`customise.order.${i + 1}`}
          >
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground truncate">
                  {order.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {order.type} · {order.budget}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {order.timeline}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${s.badge}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                {STATUS_LABELS[order.status]}
              </span>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7 px-3"
                data-ocid={`customise.order.${i + 1}.view_button`}
              >
                View Details
              </Button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */

export default function Customise() {
  const [activeTab, setActiveTab] = useState<"buyer" | "seller">("buyer");

  return (
    <div className="min-h-screen bg-background" data-ocid="customise.page">
      <section
        className="relative overflow-hidden gradient-hero"
        data-ocid="customise.hero"
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm font-medium text-accent mb-6">
              <Sparkles className="w-4 h-4" />
              Custom Development
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              <span className="text-foreground">Build Your</span>{" "}
              <span className="gradient-text glow-text-primary">
                Dream Website
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Describe your vision — verified sellers bid, build, and deliver
              your custom website.
            </p>
          </motion.div>
        </div>
      </section>

      <div
        className="bg-background border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm"
        data-ocid="customise.tab-bar"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex">
            {(["buyer", "seller"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                data-ocid={`customise.tab.${tab}`}
                className={[
                  "flex-1 sm:flex-none px-8 py-4 text-sm font-semibold border-b-2 transition-smooth",
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {tab === "buyer" ? "🛒 I Want a Website" : "👨‍💻 I'm a Seller"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-muted/20 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {activeTab === "buyer" ? (
            <motion.div
              key="buyer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="text-center mb-10">
                <h2 className="font-display font-bold text-3xl text-foreground mb-2">
                  What kind of website do you need?
                </h2>
                <p className="text-muted-foreground">
                  Select a type, fill in your requirements, and sellers will bid
                  on your project.
                </p>
              </div>
              <OrderForm />
            </motion.div>
          ) : (
            <motion.div
              key="seller"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="text-center mb-10">
                <h2 className="font-display font-bold text-3xl text-foreground mb-2">
                  Open Custom Orders
                </h2>
                <p className="text-muted-foreground">
                  Browse buyer requirements and submit your proposal.
                </p>
              </div>
              <SellerOrdersView />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
