import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, X } from "./index-BMZp6_Em.js";
import { A as useAskAI } from "./useListings-vMM7OeqO.js";
import { B as Bot } from "./bot-aMLEk82Y.js";
import { L as LoaderCircle } from "./loader-circle-BH6F4EAS.js";
import { M as MessageCircle } from "./message-circle-Dry-c7rT.js";
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const SUGGESTIONS = [
  "Website kaise kharidein?",
  "Apni website kaise bechein?",
  "Customise website kya hai?",
  "Contact information?"
];
function formatErrorMessage(err) {
  const msg = err instanceof Error ? err.message : String(err);
  const lower = msg.toLowerCase();
  if (lower.includes("configure") || lower.includes("key") || lower.includes("api")) {
    return "AI abhi configure nahi hua hai. Admin se contact karein.";
  }
  if (lower.includes("actor not available")) {
    return "Connection nahin bani. Thoda ruko aur phir try karo.";
  }
  return `Kuch gadbad ho gayi: ${msg}. Dobara try karein.`;
}
function FormattedMessage({ content }) {
  const lines = content.split("\n").filter((l) => l.trim().length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: lines.map((line) => {
    const trimmed = line.trim();
    const isNumbered = /^\d+\.\s/.test(trimmed);
    const isBullet = /^[-•*]\s/.test(trimmed);
    if (isNumbered) {
      const match = trimmed.match(/^(\d+\.\s)(.*)$/);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 pl-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary shrink-0", children: (match == null ? void 0 : match[1]) ?? "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (match == null ? void 0 : match[2]) ?? trimmed })
      ] }, trimmed);
    }
    if (isBullet) {
      const match = trimmed.match(/^([-•*]\s)(.*)$/);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 pl-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary shrink-0", children: (match == null ? void 0 : match[1]) ?? "• " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (match == null ? void 0 : match[2]) ?? trimmed })
      ] }, trimmed);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: trimmed }, trimmed);
  }) });
}
function AIChatWidget() {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [hasOpened, setHasOpened] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([]);
  const [history, setHistory] = reactExports.useState([]);
  const bottomRef = reactExports.useRef(null);
  const textareaRef = reactExports.useRef(null);
  const messagesContainerRef = reactExports.useRef(null);
  const askAI = useAskAI();
  reactExports.useEffect(() => {
    if (open && !hasOpened) {
      setHasOpened(true);
      setMessages([
        {
          role: "assistant",
          content: "Namaste! Main hoon aapka WebStore AI assistant. Website khareedne, bechne, ya valuation ke baare mein kuch bhi poochh sakte ho! 🤖"
        }
      ]);
    }
  }, [open, hasOpened]);
  reactExports.useEffect(() => {
    if (open) {
      setTimeout(() => {
        var _a;
        return (_a = textareaRef.current) == null ? void 0 : _a.focus();
      }, 150);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (open && messages.length > 0) {
      const el = messagesContainerRef.current;
      if (el) {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
    }
  }, [messages, open]);
  const handleSend = async (textOverride) => {
    const text = (textOverride ?? input).trim();
    if (!text || askAI.isPending) return;
    const userDisplay = { role: "user", content: text };
    setMessages((prev) => [...prev, userDisplay]);
    setInput("");
    const userMsg = { role: "user", content: text };
    const newHistory = [...history, userMsg];
    try {
      const response = await askAI.mutateAsync({ message: text, history });
      const assistantMsg = {
        role: "assistant",
        content: response
      };
      setHistory([...newHistory, assistantMsg]);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response }
      ]);
    } catch (err) {
      setHistory(newHistory);
      const errorText = formatErrorMessage(err);
      setMessages((prev) => [...prev, { role: "error", content: errorText }]);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const showSuggestions = messages.length === 1 && messages[0].role === "assistant";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3", children: [
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "w-[calc(100vw-2rem)] sm:w-[390px] rounded-2xl overflow-hidden flex flex-col",
        style: {
          maxHeight: "min(540px, calc(100vh - 100px))",
          background: "rgba(15,10,30,0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(139,92,246,0.25)",
          boxShadow: "0 8px 48px rgba(139,92,246,0.25), 0 0 0 1px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
          animation: "slide-up 0.25s ease-out"
        },
        "data-ocid": "ai-chat.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between px-4 py-3 shrink-0",
              style: {
                background: "linear-gradient(135deg, rgba(139,92,246,0.9) 0%, rgba(34,211,238,0.7) 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white leading-tight", children: "AI Assistant" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70", children: "WebStore marketplace expert" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setOpen(false),
                    className: "p-1.5 rounded-lg hover:bg-white/20 transition-colors duration-150",
                    "aria-label": "Chat band karo",
                    "data-ocid": "ai-chat.close_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-white" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: messagesContainerRef,
              className: "flex-1 overflow-y-auto px-3 py-4 space-y-3",
              style: { minHeight: 0, maxHeight: 360 },
              "data-ocid": "ai-chat.messages_area",
              children: [
                messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                    "data-ocid": `ai-chat.message.${i + 1}`,
                    children: [
                      msg.role !== "user" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${msg.role === "error" ? "bg-destructive/15 border-destructive/30" : "bg-primary/15 border-primary/30"}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Bot,
                            {
                              className: `w-3.5 h-3.5 ${msg.role === "error" ? "text-destructive" : "text-primary"}`
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `max-w-[80%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed break-words ${msg.role === "user" ? "rounded-br-sm text-white" : msg.role === "error" ? "bg-destructive/10 text-destructive border border-destructive/20 rounded-bl-sm" : "rounded-bl-sm text-foreground"}`,
                          style: msg.role === "user" ? {
                            background: "linear-gradient(135deg, rgba(139,92,246,0.9), rgba(109,40,217,0.9))",
                            boxShadow: "0 2px 12px rgba(139,92,246,0.3)"
                          } : msg.role === "assistant" ? {
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)"
                          } : void 0,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormattedMessage, { content: msg.content })
                        }
                      )
                    ]
                  },
                  `${msg.role}-${i}`
                )),
                askAI.isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex gap-2 justify-start",
                    "data-ocid": "ai-chat.loading_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 text-primary animate-spin" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "px-3 py-2.5 rounded-2xl rounded-bl-sm text-sm text-muted-foreground italic",
                          style: {
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)"
                          },
                          children: "Soch raha hoon…"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
              ]
            }
          ),
          showSuggestions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-2 flex flex-wrap gap-2 shrink-0", children: SUGGESTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleSend(s),
              className: "text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-[1.03]",
              style: {
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "rgba(167,139,250,1)"
              },
              "data-ocid": `ai-chat.suggestion.${SUGGESTIONS.indexOf(s) + 1}`,
              children: s
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-3 pb-3 pt-2 shrink-0",
              style: {
                borderTop: "1px solid rgba(139,92,246,0.15)",
                background: "rgba(0,0,0,0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      ref: textareaRef,
                      value: input,
                      onChange: (e) => setInput(e.target.value),
                      onKeyDown: handleKeyDown,
                      placeholder: "Apna sawaal likhein… (Enter to send)",
                      rows: 2,
                      disabled: askAI.isPending,
                      className: "flex-1 resize-none rounded-xl text-foreground text-sm px-3 py-2 placeholder:text-muted-foreground/50 focus:outline-none disabled:opacity-50 min-h-[44px] max-h-[120px] overflow-y-auto transition-all duration-200",
                      style: {
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)"
                      },
                      onFocus: (e) => {
                        e.currentTarget.style.border = "1px solid rgba(139,92,246,0.5)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.15)";
                      },
                      onBlur: (e) => {
                        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                        e.currentTarget.style.boxShadow = "none";
                      },
                      "data-ocid": "ai-chat.input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSend(),
                      disabled: askAI.isPending || !input.trim(),
                      className: "h-10 w-10 rounded-xl shrink-0 mb-0.5 flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",
                      style: {
                        background: "linear-gradient(135deg, rgba(34,211,238,0.9), rgba(6,182,212,0.9))",
                        boxShadow: input.trim() ? "0 0 16px rgba(34,211,238,0.4)" : "none"
                      },
                      "aria-label": "Message bhejo",
                      "data-ocid": "ai-chat.submit_button",
                      children: askAI.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 text-white animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 text-white" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/40 mt-1.5 text-center", children: "Shift+Enter for new line" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        className: "w-14 h-14 rounded-full flex items-center justify-center relative transition-all duration-300",
        style: {
          background: open ? "linear-gradient(135deg, rgba(139,92,246,0.6), rgba(109,40,217,0.6))" : "linear-gradient(135deg, rgba(139,92,246,1), rgba(109,40,217,1))",
          boxShadow: open ? "0 4px 20px rgba(139,92,246,0.3)" : "0 4px 24px rgba(139,92,246,0.6), 0 0 0 0 rgba(139,92,246,0.3)",
          animation: open ? "none" : "glow-pulse 2.5s ease-in-out infinite",
          border: "1px solid rgba(139,92,246,0.4)"
        },
        "aria-label": open ? "AI chat band karo" : "AI chat kholo",
        "data-ocid": "ai-chat.open_modal_button",
        children: [
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6 text-white" }),
          !open && messages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute top-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-background",
              style: {
                background: "rgba(239,68,68,1)",
                boxShadow: "0 0 8px rgba(239,68,68,0.6)"
              }
            }
          )
        ]
      }
    )
  ] });
}
export {
  AIChatWidget as default
};
