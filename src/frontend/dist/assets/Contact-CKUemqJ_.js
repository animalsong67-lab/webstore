import { r as reactExports, j as jsxRuntimeExports, B as Button, M as Mail, P as Phone, I as Instagram } from "./index-BMZp6_Em.js";
import { u as ue } from "./index-2ADlaxLC.js";
import { a as useSubmitContact } from "./useListings-vMM7OeqO.js";
import { C as CircleCheckBig } from "./circle-check-big-CuX00Sls.js";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "animalsong67@gmail.com",
    href: "mailto:animalsong67@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7673809412",
    href: "tel:+917673809412"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@krish_ff_5607",
    href: "https://instagram.com/krish_ff_5607"
  }
];
const faqs = [
  {
    q: "How long does a transaction take?",
    a: "Most sales close within 2–4 weeks."
  },
  { q: "Is my data secure?", a: "Yes. We use industry-standard encryption." }
];
const defaultForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};
function Contact() {
  const [form, setForm] = reactExports.useState(defaultForm);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const { mutateAsync, isPending } = useSubmitContact();
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
      });
      setSubmitted(true);
      ue.success("Message sent! We'll get back to you soon.");
    } catch {
      ue.error("Failed to send message. Please try again.");
    }
  };
  const inputCls = "w-full px-3 py-2.5 rounded-lg border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all duration-200 bg-transparent focus:ring-primary/50 border-border/50 focus:border-primary/60";
  const textareaCls = `${inputCls} resize-none overflow-y-auto`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "oklch(0.08 0.015 270)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden",
        style: {
          background: "radial-gradient(ellipse at 30% 60%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, oklch(0.65 0.24 195 / 0.25) 0%, transparent 50%), oklch(0.08 0.015 270)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.04]",
              style: {
                backgroundImage: "linear-gradient(oklch(0.7 0.22 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 270) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-8 right-16 w-56 h-56 rounded-full animate-float pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.7 0.22 270 / 0.2) 0%, transparent 70%)",
                filter: "blur(28px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-accent mb-2 glow-text-accent", children: "Get in Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl sm:text-5xl gradient-text mb-3", children: "Contact Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl", children: "Have questions? We're here to help. Reach out anytime." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-2xl p-7", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-12",
          "data-ocid": "contact.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 animate-glow-pulse",
                style: {
                  background: "oklch(0.7 0.22 270 / 0.15)",
                  border: "2px solid oklch(0.7 0.22 270 / 0.5)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-primary" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl gradient-text mb-3", children: "Message Sent!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Thank you for reaching out. Our team will respond within 24 hours." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "glow-primary hover:scale-105 transition-all duration-300",
                onClick: () => {
                  setForm(defaultForm);
                  setSubmitted(false);
                },
                children: "Send Another"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "space-y-5",
          "data-ocid": "contact-form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-xl text-foreground mb-4", children: "Send a Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "contact-name",
                    className: "text-sm font-medium text-foreground/80 mb-1.5 block",
                    children: "Your Name *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "contact-name",
                    name: "name",
                    type: "text",
                    required: true,
                    placeholder: "John Doe",
                    value: form.name,
                    onChange: handleChange,
                    className: inputCls,
                    "data-ocid": "contact.name_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "contact-email",
                    className: "text-sm font-medium text-foreground/80 mb-1.5 block",
                    children: "Your Email *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "contact-email",
                    name: "email",
                    type: "email",
                    required: true,
                    placeholder: "john@example.com",
                    value: form.email,
                    onChange: handleChange,
                    className: inputCls,
                    "data-ocid": "contact.email_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "contact-subject",
                    className: "text-sm font-medium text-foreground/80 mb-1.5 block",
                    children: "Subject *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "contact-subject",
                    name: "subject",
                    type: "text",
                    required: true,
                    placeholder: "How can we help?",
                    value: form.subject,
                    onChange: handleChange,
                    className: inputCls,
                    "data-ocid": "contact.subject_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "contact-message",
                    className: "text-sm font-medium text-foreground/80 mb-1.5 block",
                    children: "Message *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "contact-message",
                    name: "message",
                    required: true,
                    rows: 5,
                    placeholder: "Tell us more about your inquiry...",
                    value: form.message,
                    onChange: handleChange,
                    className: textareaCls,
                    style: { maxHeight: "200px" },
                    "data-ocid": "contact.message_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: isPending,
                className: "w-full glow-primary hover:scale-105 transition-all duration-300 font-semibold py-3",
                size: "lg",
                "data-ocid": "contact.submit_button",
                children: isPending ? "Sending…" : "Send Message"
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-5", children: "Get in Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: contactInfo.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href,
              target: href.startsWith("http") ? "_blank" : void 0,
              rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
              className: "flex items-center gap-3 group transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                    style: {
                      background: "oklch(0.7 0.22 270 / 0.12)",
                      border: "1px solid oklch(0.7 0.22 270 / 0.3)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200", children: value })
                ] })
              ]
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-3", children: "Response Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "We typically respond within",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "24 hours" }),
            " on business days."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "FAQs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 text-sm", children: faqs.map(({ q, a }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground mb-1", children: q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: a })
          ] }, q)) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Contact as default
};
