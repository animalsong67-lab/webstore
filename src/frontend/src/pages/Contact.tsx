import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Instagram, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useListings";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "animalsong67@gmail.com",
    href: "mailto:animalsong67@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7673809412",
    href: "tel:+917673809412",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@krish_ff_5607",
    href: "https://instagram.com/krish_ff_5607",
  },
];

const faqs = [
  {
    q: "How long does a transaction take?",
    a: "Most sales close within 2–4 weeks.",
  },
  { q: "Is my data secure?", a: "Yes. We use industry-standard encryption." },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const defaultForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitContact();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const inputCls =
    "w-full px-3 py-2.5 rounded-lg border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all duration-200" +
    " bg-transparent focus:ring-primary/50" +
    " border-border/50 focus:border-primary/60";

  const textareaCls = `${inputCls} resize-none overflow-y-auto`;

  return (
    <div style={{ background: "oklch(0.08 0.015 270)" }}>
      {/* Gradient hero header */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, oklch(0.65 0.24 195 / 0.25) 0%, transparent 50%), oklch(0.08 0.015 270)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.22 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 270) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orbs */}
        <div
          className="absolute -top-8 right-16 w-56 h-56 rounded-full animate-float pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.22 270 / 0.2) 0%, transparent 70%)",
            filter: "blur(28px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm font-medium text-accent mb-2 glow-text-accent">
            Get in Touch
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Have questions? We're here to help. Reach out anytime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Glass form card */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-7">
              {submitted ? (
                <div
                  className="text-center py-12"
                  data-ocid="contact.success_state"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 animate-glow-pulse"
                    style={{
                      background: "oklch(0.7 0.22 270 / 0.15)",
                      border: "2px solid oklch(0.7 0.22 270 / 0.5)",
                    }}
                  >
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-2xl gradient-text mb-3">
                    Message Sent!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our team will respond within 24
                    hours.
                  </p>
                  <Button
                    className="glow-primary hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      setForm(defaultForm);
                      setSubmitted(false);
                    }}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact-form"
                >
                  <h2 className="font-display font-semibold text-xl text-foreground mb-4">
                    Send a Message
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-sm font-medium text-foreground/80 mb-1.5 block"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className={inputCls}
                        data-ocid="contact.name_input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-sm font-medium text-foreground/80 mb-1.5 block"
                      >
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputCls}
                        data-ocid="contact.email_input"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-subject"
                        className="text-sm font-medium text-foreground/80 mb-1.5 block"
                      >
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="How can we help?"
                        value={form.subject}
                        onChange={handleChange}
                        className={inputCls}
                        data-ocid="contact.subject_input"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-message"
                        className="text-sm font-medium text-foreground/80 mb-1.5 block"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us more about your inquiry..."
                        value={form.message}
                        onChange={handleChange}
                        className={textareaCls}
                        style={{ maxHeight: "200px" }}
                        data-ocid="contact.message_input"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full glow-primary hover:scale-105 transition-all duration-300 font-semibold py-3"
                    size="lg"
                    data-ocid="contact.submit_button"
                  >
                    {isPending ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-5">
            {/* Contact info */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-5">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 group transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: "oklch(0.7 0.22 270 / 0.12)",
                        border: "1px solid oklch(0.7 0.22 270 / 0.3)",
                      }}
                    >
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-3">
                Response Time
              </h3>
              <p className="text-sm text-muted-foreground">
                We typically respond within{" "}
                <strong className="text-foreground">24 hours</strong> on
                business days.
              </p>
            </div>

            {/* FAQ */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">
                FAQs
              </h3>
              <div className="space-y-4 text-sm">
                {faqs.map(({ q, a }) => (
                  <div key={q}>
                    <p className="font-medium text-foreground mb-1">{q}</p>
                    <p className="text-muted-foreground">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
