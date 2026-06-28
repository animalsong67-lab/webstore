import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, d as cn, B as Button, h as useInternetIdentity, e as useActor, q as useQueryClient, s as useQuery, t as useMutation, L as Link, a as Skeleton, f as createActor } from "./index-BMZp6_Em.js";
import { B as Badge } from "./badge-DjffIZJ0.js";
import { C as Card, c as CardContent } from "./card-BMyulF-h.js";
import { C as CircleAlert } from "./circle-alert-DfBYvdN2.js";
import { G as Gavel } from "./gavel-CFFwScI5.js";
import { C as Clock } from "./clock-CzhUTj2i.js";
import { P as Package } from "./package-D8OLxV5s.js";
import { T as TrendingDown } from "./trending-down-ByyBZ34s.js";
import { C as Calendar } from "./calendar-DuBoxHrl.js";
import { A as ArrowRight } from "./arrow-right-C67gEsfO.js";
import { C as CircleCheck } from "./circle-check-B3HDhYVu.js";
import { L as LoaderCircle } from "./loader-circle-BH6F4EAS.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-COifNWNB.js";
import { U as User } from "./user-CKY0xFcs.js";
import { M as MessageCircle } from "./message-circle-Dry-c7rT.js";
import "./index-C1D-nLKY.js";
import "./index-CTziNQqR.js";
import "./index-CyD6FS3r.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
const CheckCheck = createLucideIcon("check-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
function useCountdown(auctionEndTimestamp, auctionEnded) {
  const [timeLeft, setTimeLeft] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (auctionEnded) {
      setTimeLeft("Ended");
      return;
    }
    const endMs = Number(auctionEndTimestamp) / 1e6;
    const tick = () => {
      const diff = endMs - Date.now();
      if (diff <= 0) {
        setTimeLeft("Ended");
        return;
      }
      const h = Math.floor(diff / 36e5);
      const m = Math.floor(diff % 36e5 / 6e4);
      const s = Math.floor(diff % 6e4 / 1e3);
      setTimeLeft(`${h}h ${m}m ${s}s`);
    };
    tick();
    const id = setInterval(tick, 1e3);
    return () => clearInterval(id);
  }, [auctionEndTimestamp, auctionEnded]);
  return timeLeft;
}
function BidCard({ bid, index }) {
  const timeLeft = useCountdown(bid.placedAt, bid.auctionEnded);
  const statusBadge = bid.won ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-green-500/15 text-green-700 border-green-500/30 gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3 h-3" }),
    " Won"
  ] }) : bid.auctionEnded ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "gap-1", children: "Ended" }) : bid.isHighestBidder ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/15 text-primary border-primary/30 gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3 h-3" }),
    " Winning"
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Badge,
    {
      variant: "destructive",
      className: "gap-1 bg-red-500/15 text-red-700 border-red-500/30",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
        " Outbid"
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "border border-border bg-card hover:shadow-md transition-smooth",
      "data-ocid": `bids.item.${index}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-4 h-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-semibold text-foreground truncate",
                title: bid.listingTitle,
                children: bid.listingTitle
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
              "Your bid:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                "₹",
                Number(bid.bidAmount).toLocaleString("en-IN")
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-right space-y-1.5", children: [
          statusBadge,
          !bid.auctionEnded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: timeLeft })
          ] })
        ] })
      ] }) })
    }
  );
}
function getNotifContent(type) {
  switch (type.__kind__) {
    case "outbid":
      return {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-red-500" }),
        title: "You've been outbid!",
        body: `New highest bid: ₹${Number(type.outbid.newHighestBid).toLocaleString("en-IN")} on listing #${type.outbid.listingId}`
      };
    case "auctionWon":
      return {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4 text-yellow-500" }),
        title: "Congratulations! You won the auction!",
        body: `Final price: ₹${Number(type.auctionWon.finalPrice).toLocaleString("en-IN")} — Listing #${type.auctionWon.listingId}`
      };
    case "priceDrop":
      return {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-primary" }),
        title: "Price drop on a listing!",
        body: `Price dropped from ₹${Number(type.priceDrop.oldPrice).toLocaleString("en-IN")} to ₹${Number(type.priceDrop.newPrice).toLocaleString("en-IN")}`
      };
    case "transferUpdate":
      return {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-blue-500" }),
        title: "Website transfer updated",
        body: type.transferUpdate.message
      };
    case "purchaseConfirmed":
      return {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "w-4 h-4 text-green-500" }),
        title: "Purchase confirmed!",
        body: `Payment of ₹${Number(type.purchaseConfirmed.amount).toLocaleString("en-IN")} confirmed for listing #${type.purchaseConfirmed.listingId}`
      };
    default:
      return {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-muted-foreground" }),
        title: "Notification",
        body: "You have a new notification."
      };
  }
}
function formatRelativeTime(ts) {
  const ms = Number(ts) / 1e6;
  const diff = Date.now() - ms;
  if (diff < 6e4) return "Just now";
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
  return `${Math.floor(diff / 864e5)}d ago`;
}
function NotificationItem({
  notification,
  index,
  onMarkRead,
  isMarkingRead
}) {
  const { icon, title, body } = getNotifContent(notification.notifType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex items-start gap-3 p-4 rounded-lg border transition-smooth",
        notification.read ? "bg-muted/30 border-border opacity-70" : "bg-card border-primary/20 shadow-xs"
      ),
      "data-ocid": `notifications.item.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
              notification.read ? "bg-muted" : "bg-primary/10"
            ),
            children: icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: cn(
                  "text-sm font-medium",
                  notification.read ? "text-muted-foreground" : "text-foreground"
                ),
                children: title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: formatRelativeTime(notification.createdAt) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 break-words", children: body })
        ] }),
        !notification.read && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 px-2 text-xs shrink-0",
            disabled: isMarkingRead,
            onClick: () => onMarkRead(notification.id),
            "data-ocid": `notifications.mark-read-button.${index}`,
            children: "Mark read"
          }
        )
      ]
    }
  );
}
const transferStatusConfig = {
  pending: {
    label: "Pending",
    className: "bg-yellow-500/15 text-yellow-700 border-yellow-500/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" })
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-blue-500/15 text-blue-700 border-blue-500/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" })
  },
  complete: {
    label: "Complete",
    className: "bg-green-500/15 text-green-700 border-green-500/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" })
  }
};
function formatDate$1(ts) {
  const ms = Number(ts) / 1e6;
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function PurchaseCard({ purchase, index }) {
  const status = transferStatusConfig[purchase.transferStatus] ?? transferStatusConfig.pending;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "border border-border bg-card hover:shadow-md transition-smooth",
      "data-ocid": `purchases.item.${index}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-semibold text-foreground truncate",
                title: purchase.listingTitle,
                children: purchase.listingTitle
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
              "Paid:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                "₹",
                Number(purchase.pricePaid).toLocaleString("en-IN")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1.5", children: "·" }),
              "Seller: ",
              purchase.seller
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
              formatDate$1(purchase.completedAt)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex flex-col items-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: `gap-1 ${status.className}`, children: [
            status.icon,
            status.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              variant: "ghost",
              size: "sm",
              className: "h-7 px-2 text-xs",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `/listing/${purchase.listingId}`,
                  "data-ocid": `purchases.view-button.${index}`,
                  children: [
                    "View ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 ml-1" })
                  ]
                }
              )
            }
          )
        ] })
      ] }) })
    }
  );
}
function BuyerStatCard({
  label,
  value,
  color,
  glow
}) {
  const [hovered, setHovered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-card rounded-xl p-4 border border-border/50 transition-all duration-300 cursor-default",
      style: hovered ? { boxShadow: `0 0 22px ${glow}`, transform: "translateY(-2px)" } : {},
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold font-mono", style: { color }, children: value })
      ]
    }
  );
}
function SkeletonList() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded-lg" }, i)) });
}
function EmptyState({
  icon,
  title,
  message,
  cta
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-20 text-center glass-card rounded-2xl border-2 border-dashed border-border/40 hover:border-primary/25 transition-all duration-500",
      "data-ocid": "buyer-dashboard.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl glass-card border border-primary/25 flex items-center justify-center mb-4 shadow-[0_0_20px_oklch(0.7_0.22_270/0.15)]", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 max-w-xs mb-4", children: message }),
        cta
      ]
    }
  );
}
function formatDate(ts) {
  const ms = Number(ts) / 1e6;
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function CustomOrderCard({
  order,
  index
}) {
  const statusConfig = {
    pending: {
      cls: "bg-[oklch(0.78_0.24_195/0.15)] text-[oklch(0.78_0.24_195)] border-[oklch(0.78_0.24_195/0.4)]",
      dot: "bg-[oklch(0.78_0.24_195)] animate-pulse shadow-[0_0_6px_oklch(0.78_0.24_195)]",
      glow: "shadow-[0_0_14px_oklch(0.78_0.24_195/0.18)]"
    },
    reviewing: {
      cls: "bg-primary/15 text-primary border-primary/40",
      dot: "bg-primary animate-pulse shadow-[0_0_6px_oklch(0.7_0.22_270)]",
      glow: "shadow-[0_0_14px_oklch(0.7_0.22_270/0.18)]"
    },
    "in-progress": {
      cls: "bg-[oklch(0.72_0.18_88/0.15)] text-[oklch(0.72_0.18_88)] border-[oklch(0.72_0.18_88/0.35)]",
      dot: "bg-[oklch(0.72_0.18_88)] animate-pulse",
      glow: ""
    },
    completed: {
      cls: "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.4)]",
      dot: "bg-[oklch(0.72_0.2_142)] shadow-[0_0_6px_oklch(0.72_0.2_142)]",
      glow: "shadow-[0_0_12px_oklch(0.72_0.2_142/0.15)]"
    },
    cancelled: {
      cls: "bg-destructive/15 text-destructive border-destructive/30",
      dot: "bg-destructive",
      glow: ""
    }
  };
  const cfg = statusConfig[order.status.toLowerCase()] ?? {
    cls: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground",
    glow: ""
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/25 transition-all duration-300 ${cfg.glow}`,
      "data-ocid": `custom-orders.item.${index}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: order.websiteType }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-2", children: order.requirements }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Budget: ",
                order.budget
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Timeline: ",
                order.timeline
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(order.submittedAt) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex flex-col items-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              className: `text-xs border flex items-center gap-1.5 ${cfg.cls}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${cfg.dot}` }),
                order.status
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              variant: "outline",
              size: "sm",
              className: "h-7 px-2 text-xs gap-1 border-accent/30 text-accent hover:bg-accent/10 hover:border-accent transition-all",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `mailto:animalsong67@gmail.com?subject=Custom Order #${order.id} - ${order.websiteType}`,
                  "data-ocid": `custom-orders.message-seller-button.${index}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3" }),
                    " Message"
                  ]
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}
function BuyerDashboardPage() {
  const { identity } = useInternetIdentity();
  const { actor, isFetching } = useActor(createActor);
  const qc = useQueryClient();
  const [activeTab, setActiveTab] = reactExports.useState("bids");
  const isAuthenticated = !!identity;
  const enabled = !!actor && !isFetching && isAuthenticated;
  const { data: bids = [], isLoading: bidsLoading } = useQuery({
    queryKey: ["buyer", "bids"],
    queryFn: async () => actor ? actor.getBuyerBids() : [],
    enabled
  });
  const { data: purchases = [], isLoading: purchasesLoading } = useQuery({
    queryKey: ["buyer", "purchases"],
    queryFn: async () => actor ? actor.getBuyerPurchases() : [],
    enabled
  });
  const { data: customOrders = [], isLoading: ordersLoading } = useQuery({
    queryKey: ["buyer", "customOrders"],
    queryFn: async () => actor ? actor.getBuyerCustomOrders() : [],
    enabled
  });
  const { data: notifications = [], isLoading: notifsLoading } = useQuery({
    queryKey: ["buyer", "notifications"],
    queryFn: async () => actor ? actor.getBuyerNotifications() : [],
    enabled
  });
  const { mutate: markRead, variables: markingId } = useMutation({
    mutationFn: async (id) => {
      if (!actor) return false;
      return actor.markNotificationRead(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["buyer", "notifications"] })
  });
  const unreadCount = notifications.filter((n) => !n.read).length;
  const activeBids = bids.filter((b) => !b.auctionEnded);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-lg mx-auto px-4 py-24 text-center",
        "data-ocid": "buyer-dashboard.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-3xl glass-card border border-primary/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_oklch(0.7_0.22_270/0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-12 h-12 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold font-display gradient-text mb-3", children: "Buyer Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Please login with Internet Identity to access your dashboard." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "bg-primary/90 hover:bg-primary shadow-[0_0_20px_oklch(0.7_0.22_270/0.4)] hover:shadow-[0_0_32px_oklch(0.7_0.22_270/0.6)] transition-all duration-300",
              "data-ocid": "buyer-dashboard.login-link",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Go to Homepage" })
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      "data-ocid": "buyer-dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[oklch(0.78_0.24_195/0.15)] via-[oklch(0.75_0.2_300/0.06)] to-primary/12 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_0%,oklch(0.78_0.24_195/0.14),transparent)] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-72 h-72 bg-[radial-gradient(circle,oklch(0.7_0.22_270/0.1),transparent_70%)] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center shadow-[0_0_12px_oklch(0.78_0.24_195/0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-accent", children: "Buyer Hub" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl font-bold font-display gradient-text mb-2", children: "Buyer Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Track your bids, purchases, and custom orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8", children: [
              {
                label: "Active Bids",
                value: activeBids.length,
                color: "oklch(0.7 0.22 270)",
                glow: "oklch(0.7 0.22 270 / 0.22)"
              },
              {
                label: "Purchases",
                value: purchases.length,
                color: "oklch(0.72 0.2 142)",
                glow: "oklch(0.72 0.2 142 / 0.22)"
              },
              {
                label: "Custom Orders",
                value: customOrders.length,
                color: "oklch(0.78 0.24 195)",
                glow: "oklch(0.78 0.24 195 / 0.22)"
              },
              {
                label: "Unread Alerts",
                value: unreadCount,
                color: "oklch(0.65 0.22 22)",
                glow: "oklch(0.65 0.22 22 / 0.22)"
              }
            ].map(({ label, value, color, glow }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              BuyerStatCard,
              {
                label,
                value,
                color,
                glow
              },
              label
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Tabs,
          {
            value: activeTab,
            onValueChange: setActiveTab,
            "data-ocid": "buyer-dashboard.tabs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full grid grid-cols-4 h-auto glass-card border border-border/50 p-1 rounded-2xl gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TabsTrigger,
                  {
                    value: "bids",
                    className: "relative gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_14px_oklch(0.7_0.22_270/0.35)] transition-all duration-300",
                    "data-ocid": "buyer-dashboard.tab.bids",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active Bids" }),
                      activeBids.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 px-1.5 py-0 h-4 text-[10px] bg-primary/20 text-primary border-0 animate-glow-pulse", children: activeBids.length })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TabsTrigger,
                  {
                    value: "purchases",
                    className: "gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-[oklch(0.72_0.2_142/0.2)] data-[state=active]:text-[oklch(0.72_0.2_142)] data-[state=active]:shadow-[0_0_14px_oklch(0.72_0.2_142/0.35)] transition-all duration-300",
                    "data-ocid": "buyer-dashboard.tab.purchases",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Purchases" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TabsTrigger,
                  {
                    value: "orders",
                    className: "gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:shadow-[0_0_14px_oklch(0.78_0.24_195/0.35)] transition-all duration-300",
                    "data-ocid": "buyer-dashboard.tab.orders",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Custom Orders" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Orders" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TabsTrigger,
                  {
                    value: "notifications",
                    className: "gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-destructive/20 data-[state=active]:text-destructive data-[state=active]:shadow-[0_0_14px_oklch(0.65_0.22_22/0.35)] transition-all duration-300",
                    "data-ocid": "buyer-dashboard.tab.notifications",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Notifications" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Alerts" }),
                      unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 px-1.5 py-0 h-4 text-[10px] bg-destructive/20 text-destructive border-0 animate-glow-pulse", children: unreadCount })
                    ]
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl border border-border/50 p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "bids", className: "mt-0", children: bidsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonList, {}) : bids.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EmptyState,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-6 h-6 text-primary" }),
                    title: "No active bids yet",
                    message: "Browse website auctions and place your first bid to start tracking here.",
                    cta: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        asChild: true,
                        size: "sm",
                        className: "bg-primary/90 hover:bg-primary shadow-[0_0_16px_oklch(0.7_0.22_270/0.3)] transition-all",
                        "data-ocid": "buyer-dashboard.browse-auctions-button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/browse", children: "Browse Auctions" })
                      }
                    )
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: bids.map((bid, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  BidCard,
                  {
                    bid,
                    index: i + 1
                  },
                  `${bid.listingId}-${bid.placedAt}`
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "purchases", className: "mt-0", children: purchasesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonList, {}) : purchases.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EmptyState,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-6 h-6 text-[oklch(0.72_0.2_142)]" }),
                    title: "No purchases yet",
                    message: "Once you complete a website purchase, it will appear here with transfer status."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: purchases.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PurchaseCard,
                  {
                    purchase: p,
                    index: i + 1
                  },
                  String(p.id)
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "orders", className: "mt-0", children: ordersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonList, {}) : customOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EmptyState,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-6 h-6 text-accent" }),
                    title: "No custom orders yet",
                    message: "Request a custom website through 'Customise Your Own Website' and track it here.",
                    cta: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        asChild: true,
                        size: "sm",
                        variant: "outline",
                        className: "border-accent/30 text-accent hover:bg-accent/10 hover:border-accent transition-all",
                        "data-ocid": "buyer-dashboard.custom-order-link",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/customise", children: "Request Custom Website" })
                      }
                    )
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: customOrders.map((order, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CustomOrderCard,
                  {
                    order,
                    index: i + 1
                  },
                  String(order.id)
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "notifications", className: "mt-0", children: notifsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonList, {}) : notifications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EmptyState,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-6 h-6 text-muted-foreground" }),
                    title: "No notifications",
                    message: "You'll be notified here about bids, auction results, price drops, and transfer updates."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: notifications.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: { animationDelay: `${i * 60}ms` },
                    className: "animate-[fadeSlideUp_0.4s_ease_both]",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      NotificationItem,
                      {
                        notification: n,
                        index: i + 1,
                        onMarkRead: (id) => markRead(id),
                        isMarkingRead: markingId === n.id
                      }
                    )
                  },
                  String(n.id)
                )) }) })
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
export {
  BuyerDashboardPage as default
};
