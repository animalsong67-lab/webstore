import { Button } from "@/components/ui/button";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAskAI } from "../hooks/useListings";
import type { ChatMessage } from "../types";

interface DisplayMessage {
  role: "user" | "assistant" | "error";
  content: string;
}

const SUGGESTIONS = [
  "Website kaise kharidein?",
  "Apni website kaise bechein?",
  "Customise website kya hai?",
  "Contact information?",
];

function formatErrorMessage(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  const lower = msg.toLowerCase();
  if (
    lower.includes("configure") ||
    lower.includes("key") ||
    lower.includes("api")
  ) {
    return "AI abhi configure nahi hua hai. Admin se contact karein.";
  }
  if (lower.includes("actor not available")) {
    return "Connection nahin bani. Thoda ruko aur phir try karo.";
  }
  return `Kuch gadbad ho gayi: ${msg}. Dobara try karein.`;
}

function FormattedMessage({ content }: { content: string }) {
  const lines = content.split("\n").filter((l) => l.trim().length > 0);
  return (
    <div className="space-y-1">
      {lines.map((line) => {
        const trimmed = line.trim();
        const isNumbered = /^\d+\.\s/.test(trimmed);
        const isBullet = /^[-•*]\s/.test(trimmed);
        if (isNumbered) {
          const match = trimmed.match(/^(\d+\.\s)(.*)$/);
          return (
            <div key={trimmed} className="flex gap-1.5 pl-1">
              <span className="font-semibold text-primary shrink-0">
                {match?.[1] ?? ""}
              </span>
              <span>{match?.[2] ?? trimmed}</span>
            </div>
          );
        }
        if (isBullet) {
          const match = trimmed.match(/^([-•*]\s)(.*)$/);
          return (
            <div key={trimmed} className="flex gap-1.5 pl-1">
              <span className="font-semibold text-primary shrink-0">
                {match?.[1] ?? "• "}
              </span>
              <span>{match?.[2] ?? trimmed}</span>
            </div>
          );
        }
        return (
          <p key={trimmed} className="leading-relaxed">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const askAI = useAskAI();

  useEffect(() => {
    if (open && !hasOpened) {
      setHasOpened(true);
      setMessages([
        {
          role: "assistant",
          content:
            "Namaste! Main hoon aapka WebStore AI assistant. Website khareedne, bechne, ya valuation ke baare mein kuch bhi poochh sakte ho! 🤖",
        },
      ]);
    }
  }, [open, hasOpened]);

  useEffect(() => {
    if (open) {
      setTimeout(() => textareaRef.current?.focus(), 150);
    }
  }, [open]);

  useEffect(() => {
    if (open && messages.length > 0) {
      const el = messagesContainerRef.current;
      if (el) {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
    }
  }, [messages, open]);

  const handleSend = async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || askAI.isPending) return;

    const userDisplay: DisplayMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userDisplay]);
    setInput("");

    const userMsg: ChatMessage = { role: "user", content: text };
    const newHistory = [...history, userMsg];

    try {
      const response = await askAI.mutateAsync({ message: text, history });
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: response,
      };
      setHistory([...newHistory, assistantMsg]);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    } catch (err) {
      setHistory(newHistory);
      const errorText = formatErrorMessage(err);
      setMessages((prev) => [...prev, { role: "error", content: errorText }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const showSuggestions =
    messages.length === 1 && messages[0].role === "assistant";

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div
          className="w-[calc(100vw-2rem)] sm:w-[390px] rounded-2xl overflow-hidden flex flex-col"
          style={{
            maxHeight: "min(540px, calc(100vh - 100px))",
            background: "rgba(15,10,30,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(139,92,246,0.25)",
            boxShadow:
              "0 8px 48px rgba(139,92,246,0.25), 0 0 0 1px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
            animation: "slide-up 0.25s ease-out",
          }}
          data-ocid="ai-chat.dialog"
        >
          {/* Header gradient */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.9) 0%, rgba(34,211,238,0.7) 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  AI Assistant
                </p>
                <p className="text-xs text-white/70">
                  WebStore marketplace expert
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors duration-150"
              aria-label="Chat band karo"
              data-ocid="ai-chat.close_button"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto px-3 py-4 space-y-3"
            style={{ minHeight: 0, maxHeight: 360 }}
            data-ocid="ai-chat.messages_area"
          >
            {messages.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                data-ocid={`ai-chat.message.${i + 1}`}
              >
                {msg.role !== "user" && (
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                      msg.role === "error"
                        ? "bg-destructive/15 border-destructive/30"
                        : "bg-primary/15 border-primary/30"
                    }`}
                  >
                    <Bot
                      className={`w-3.5 h-3.5 ${
                        msg.role === "error"
                          ? "text-destructive"
                          : "text-primary"
                      }`}
                    />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed break-words ${
                    msg.role === "user"
                      ? "rounded-br-sm text-white"
                      : msg.role === "error"
                        ? "bg-destructive/10 text-destructive border border-destructive/20 rounded-bl-sm"
                        : "rounded-bl-sm text-foreground"
                  }`}
                  style={
                    msg.role === "user"
                      ? {
                          background:
                            "linear-gradient(135deg, rgba(139,92,246,0.9), rgba(109,40,217,0.9))",
                          boxShadow: "0 2px 12px rgba(139,92,246,0.3)",
                        }
                      : msg.role === "assistant"
                        ? {
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }
                        : undefined
                  }
                >
                  <FormattedMessage content={msg.content} />
                </div>
              </div>
            ))}

            {askAI.isPending && (
              <div
                className="flex gap-2 justify-start"
                data-ocid="ai-chat.loading_state"
              >
                <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <Loader2 className="w-3.5 h-3.5 text-primary animate-spin" />
                </div>
                <div
                  className="px-3 py-2.5 rounded-2xl rounded-bl-sm text-sm text-muted-foreground italic"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Soch raha hoon…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestion chips */}
          {showSuggestions && (
            <div className="px-3 pb-2 flex flex-wrap gap-2 shrink-0">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleSend(s)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-[1.03]"
                  style={{
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    color: "rgba(167,139,250,1)",
                  }}
                  data-ocid={`ai-chat.suggestion.${SUGGESTIONS.indexOf(s) + 1}`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input area */}
          <div
            className="px-3 pb-3 pt-2 shrink-0"
            style={{
              borderTop: "1px solid rgba(139,92,246,0.15)",
              background: "rgba(0,0,0,0.2)",
            }}
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Apna sawaal likhein… (Enter to send)"
                rows={2}
                disabled={askAI.isPending}
                className="flex-1 resize-none rounded-xl text-foreground text-sm px-3 py-2 placeholder:text-muted-foreground/50 focus:outline-none disabled:opacity-50 min-h-[44px] max-h-[120px] overflow-y-auto transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border =
                    "1px solid rgba(139,92,246,0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(139,92,246,0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                data-ocid="ai-chat.input"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={askAI.isPending || !input.trim()}
                className="h-10 w-10 rounded-xl shrink-0 mb-0.5 flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.9), rgba(6,182,212,0.9))",
                  boxShadow: input.trim()
                    ? "0 0 16px rgba(34,211,238,0.4)"
                    : "none",
                }}
                aria-label="Message bhejo"
                data-ocid="ai-chat.submit_button"
              >
                {askAI.isPending ? (
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
            <p className="text-xs text-muted-foreground/40 mt-1.5 text-center">
              Shift+Enter for new line
            </p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full flex items-center justify-center relative transition-all duration-300"
        style={{
          background: open
            ? "linear-gradient(135deg, rgba(139,92,246,0.6), rgba(109,40,217,0.6))"
            : "linear-gradient(135deg, rgba(139,92,246,1), rgba(109,40,217,1))",
          boxShadow: open
            ? "0 4px 20px rgba(139,92,246,0.3)"
            : "0 4px 24px rgba(139,92,246,0.6), 0 0 0 0 rgba(139,92,246,0.3)",
          animation: open ? "none" : "glow-pulse 2.5s ease-in-out infinite",
          border: "1px solid rgba(139,92,246,0.4)",
        }}
        aria-label={open ? "AI chat band karo" : "AI chat kholo"}
        data-ocid="ai-chat.open_modal_button"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        {!open && messages.length > 0 && (
          <span
            className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-background"
            style={{
              background: "rgba(239,68,68,1)",
              boxShadow: "0 0 8px rgba(239,68,68,0.6)",
            }}
          />
        )}
      </button>
    </div>
  );
}
