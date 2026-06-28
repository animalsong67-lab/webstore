import { c as createLucideIcon, u as useNavigate, b as useSearch, r as reactExports, j as jsxRuntimeExports, B as Button, S as Search, C as ChevronDown, X, L as Link, a as Skeleton } from "./index-BMZp6_Em.js";
import { B as Badge } from "./badge-DjffIZJ0.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as ChevronUp } from "./select-WtMna1Q8.js";
import { W as WishlistButton } from "./WishlistButton-BnvvCiWJ.js";
import { b as useFilteredListings, c as useSmartSearch, d as useRecommendations, e as useListActiveAuctions } from "./useListings-vMM7OeqO.js";
import { V as Variant_newest_priceDesc_priceAsc_bestMatch_highestRating } from "./backend.d-Dja6JkNT.js";
import { G as Globe } from "./globe-Dz_3xYco.js";
import { Z as Zap } from "./zap-DXCDsPRi.js";
import { G as Gavel } from "./gavel-CFFwScI5.js";
import { S as Shield } from "./shield-B4TWM6rZ.js";
import { S as Sparkles } from "./sparkles-BXItnaHw.js";
import { T as Tag } from "./tag-D3QhNQUJ.js";
import { C as CircleCheck } from "./circle-check-B3HDhYVu.js";
import { T as TrendingUp } from "./trending-up-CwCDh1V9.js";
import { U as Users } from "./users-CdRwbpqe.js";
import { C as Clock } from "./clock-CzhUTj2i.js";
import "./index-C1D-nLKY.js";
import "./index-CTziNQqR.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
];
const ArrowUpDown = createLucideIcon("arrow-up-down", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const NICHES = ["All", "eCommerce", "Blog", "SaaS", "News", "Tools", "Other"];
const PLATFORMS = ["All", "WordPress", "Shopify", "Custom", "Other"];
const MONETIZATION_TYPES = [
  "Ads",
  "Affiliate",
  "Subscription",
  "Products",
  "Hybrid"
];
const COUNTRIES = ["India", "USA", "UK", "International", "Mixed"];
const CMS_TYPES = ["WordPress", "Shopify", "Custom", "Static", "Other"];
const PAGE_SIZE = 12;
const SORT_LABELS = {
  priceAsc: "Price: Low to High",
  priceDesc: "Price: High to Low",
  highestRating: "Highest Rating",
  newest: "Newest First",
  bestMatch: "Best Match"
};
function toSortBy(val) {
  const map = {
    priceAsc: Variant_newest_priceDesc_priceAsc_bestMatch_highestRating.priceAsc,
    priceDesc: Variant_newest_priceDesc_priceAsc_bestMatch_highestRating.priceDesc,
    highestRating: Variant_newest_priceDesc_priceAsc_bestMatch_highestRating.highestRating,
    newest: Variant_newest_priceDesc_priceAsc_bestMatch_highestRating.newest,
    bestMatch: Variant_newest_priceDesc_priceAsc_bestMatch_highestRating.bestMatch
  };
  return map[val] ?? Variant_newest_priceDesc_priceAsc_bestMatch_highestRating.newest;
}
function formatCurrency(n) {
  return `${Number(n).toLocaleString()}`;
}
function formatCountdown(secs) {
  if (secs <= 0) return "Ended";
  const d = Math.floor(secs / 86400);
  const h = Math.floor(secs % 86400 / 3600);
  const m = Math.floor(secs % 3600 / 60);
  const s = secs % 60;
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${s}s`;
}
function countdownClass(secs) {
  if (secs <= 0) return "bg-muted text-muted-foreground border-border";
  if (secs < 1800)
    return "bg-red-500/20 text-red-300 border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.5)] animate-pulse";
  if (secs < 7200)
    return "bg-orange-500/20 text-orange-300 border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.4)]";
  return "bg-primary/20 text-primary border-primary/40 shadow-[0_0_8px_oklch(0.7_0.22_270/0.3)]";
}
function formatTraffic(n) {
  const v = Number(n);
  if (v >= 1e6) return `${(v / 1e6).toFixed(1)}M`;
  if (v >= 1e3) return `${(v / 1e3).toFixed(1)}K`;
  return v.toLocaleString();
}
function sortListings(listings, sort) {
  return [...listings].sort((a, b) => {
    if (sort === "priceAsc") return Number(a.askingPrice - b.askingPrice);
    if (sort === "priceDesc") return Number(b.askingPrice - a.askingPrice);
    if (sort === "highestRating")
      return Number(b.monthlyRevenue - a.monthlyRevenue);
    if (sort === "newest") return Number(b.id - a.id);
    return 0;
  });
}
function calculateTrustScore(listing) {
  const rev = Number(listing.monthlyRevenue);
  const traf = Number(listing.monthlyTraffic);
  return Math.min(
    100,
    Math.round(rev / 1e3 * 10 + traf / 1e4 * 20 + 40)
  );
}
function AuctionBadge({ auction }) {
  const [remaining, setRemaining] = reactExports.useState(
    Number(auction.timeRemainingSeconds)
  );
  reactExports.useEffect(() => {
    if (auction.ended) return;
    const id = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1e3);
    return () => clearInterval(id);
  }, [auction.ended]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${countdownClass(remaining)}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
        auction.ended ? "Ended" : formatCountdown(remaining)
      ]
    }
  );
}
const NICHE_COLORS = {
  eCommerce: "bg-primary/15 text-primary border-primary/30 shadow-[0_0_8px_oklch(0.7_0.22_270/0.25)]",
  Blog: "bg-accent/15 text-accent border-accent/30 shadow-[0_0_8px_oklch(0.78_0.24_195/0.25)]",
  SaaS: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  News: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Tools: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  Other: "bg-muted/80 text-muted-foreground border-border"
};
function nicheBadgeClass(niche) {
  return NICHE_COLORS[niche] ?? NICHE_COLORS.Other;
}
function trustGlowClass(score) {
  if (score >= 80)
    return "text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]";
  if (score >= 60)
    return "text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.7)]";
  return "text-red-400 drop-shadow-[0_0_6px_rgba(248,113,113,0.7)]";
}
function trustDotClass(score) {
  if (score >= 80)
    return "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]";
  if (score >= 60) return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]";
  return "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]";
}
function AuctionStats({ auction }) {
  const currentBid = auction.highestBidAmount ?? auction.startingBid;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-lg px-2.5 py-1.5 shadow-[0_0_8px_oklch(0.7_0.22_270/0.2)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-3.5 h-3.5 text-primary shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground leading-none mb-0.5", children: auction.highestBidAmount ? "Current Bid" : "Starting" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-primary truncate", children: [
          "$",
          Number(currentBid).toLocaleString()
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-muted/40 border border-border/50 rounded-lg px-2.5 py-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground leading-none mb-0.5", children: "Bids" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: Number(auction.bidCount) })
      ] })
    ] })
  ] });
}
function ListingCard({
  listing,
  auction,
  isVerified,
  index
}) {
  const navigate = useNavigate();
  const score = calculateTrustScore(listing);
  const isAuction = !!auction;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/listing/$id",
      params: { id: listing.id.toString() },
      "data-ocid": `browse.card.${index + 1}`,
      className: "block h-full group",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: [
            "glass-card rounded-2xl flex flex-col overflow-hidden h-full cursor-pointer",
            "transition-all duration-300 hover:scale-[1.02]",
            isAuction ? "border-primary/40 hover:border-primary/70 hover:shadow-[0_20px_60px_oklch(0.1_0.015_270/0.7),0_0_30px_oklch(0.7_0.22_270/0.35)]" : "hover:border-primary/50 hover:shadow-[0_20px_60px_oklch(0.1_0.015_270/0.7),0_0_24px_oklch(0.7_0.22_270/0.2)]"
          ].join(" "),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden h-40 flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute inset-0 transition-transform duration-500 group-hover:scale-110 ${isAuction ? "bg-gradient-to-br from-primary/25 via-amber-500/15 to-purple-600/20" : "bg-gradient-to-br from-primary/20 via-accent/10 to-purple-600/15"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-30",
                  style: {
                    backgroundImage: "radial-gradient(circle at 30% 40%, oklch(0.7 0.22 270 / 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, oklch(0.78 0.24 195 / 0.2) 0%, transparent 45%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[oklch(0.1_0.015_270/0.95)] to-transparent" }),
              isAuction ? /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-11 h-11 text-primary/50 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/70" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-11 h-11 text-muted-foreground/40 relative z-10 transition-transform duration-500 group-hover:scale-110" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2.5 left-2.5 flex flex-col gap-1 z-20", children: [
                isAuction ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary text-primary-foreground shadow-[0_0_14px_oklch(0.7_0.22_270/0.6)] backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-2.5 h-2.5" }),
                  " LIVE AUCTION"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-background/70 border border-border/60 text-muted-foreground backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2.5 h-2.5" }),
                  " Fixed Price"
                ] }),
                isVerified && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.4)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-2.5 h-2.5" }),
                  " Verified"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2.5 right-2.5 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${nicheBadgeClass(listing.niche)}`,
                  children: listing.niche
                }
              ) }),
              isAuction && !auction.ended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2.5 right-2.5 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuctionBadge, { auction }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2.5 right-[84px] z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                WishlistButton,
                {
                  listingId: listing.id,
                  className: "h-7 w-7 rounded-full bg-background/70 backdrop-blur-sm border border-border/60 hover:border-rose-500/60 hover:shadow-[0_0_12px_rgba(244,63,94,0.5)] transition-all duration-300"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-1 min-w-0 flex-1", children: listing.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5 shrink-0 px-2 py-1 rounded-lg bg-background/40 border border-border/40",
                    title: `Trust Score: ${score}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `w-2 h-2 rounded-full shrink-0 ${trustDotClass(score)}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[10px] font-bold ${trustGlowClass(score)}`,
                          children: score
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-border/60 text-muted-foreground bg-muted/50", children: listing.platform }),
                isAuction && auction.reserveMet && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-[10px] font-medium text-emerald-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3" }),
                  " Reserve met"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 flex-1", children: listing.description }),
              isAuction ? /* @__PURE__ */ jsxRuntimeExports.jsx(AuctionStats, { auction }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-primary/10 border border-primary/15 rounded-lg px-2.5 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground leading-none mb-0.5", children: "Revenue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground truncate", children: [
                      formatCurrency(listing.monthlyRevenue),
                      "/mo"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-accent/10 border border-accent/15 rounded-lg px-2.5 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-accent shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground leading-none mb-0.5", children: "Traffic" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground truncate", children: [
                      formatTraffic(listing.monthlyTraffic),
                      "/mo"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2.5 border-t border-border/30 mt-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: isAuction ? auction.highestBidAmount ? "Highest Bid" : "Starting Bid" : "Asking Price" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-lg text-primary leading-tight glow-text-primary", children: [
                    "$",
                    isAuction ? Number(
                      auction.highestBidAmount ?? auction.startingBid
                    ).toLocaleString() : formatCurrency(listing.askingPrice)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: isAuction ? "default" : "outline",
                    className: [
                      "gap-1.5 text-xs ripple-button glow-button-hover transition-all duration-300",
                      isAuction ? "glow-primary" : "border-border/60 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    ].join(" "),
                    onClick: (e) => {
                      e.preventDefault();
                      navigate({
                        to: "/listing/$id",
                        params: { id: listing.id.toString() }
                      });
                    },
                    "data-ocid": `browse.view_details.${index + 1}`,
                    children: isAuction ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-3 h-3" }),
                      " Bid Now"
                    ] }) : "View Details"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function SkeletonCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-36 bg-muted/30 animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-4/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 rounded-lg" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1 border-t border-border/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-24 rounded-lg" })
      ] })
    ] })
  ] });
}
function FilterPill({
  label,
  active,
  onClick,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      "aria-pressed": active,
      "data-ocid": ocid,
      className: [
        "px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border whitespace-nowrap",
        active ? "bg-primary/20 text-primary border-primary/50 shadow-[0_0_10px_oklch(0.7_0.22_270/0.35)] glow-text-primary" : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary bg-muted/30 hover:bg-primary/10"
      ].join(" "),
      children: label
    }
  );
}
function RecommendationCard({
  listing,
  reason
}) {
  const score = calculateTrustScore(listing);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/listing/$id",
      params: { id: listing.id.toString() },
      "data-ocid": `browse.rec-card-${listing.id}`,
      className: "block group",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card glass-card-hover rounded-xl flex flex-col overflow-hidden h-full transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 bg-gradient-to-r from-accent via-primary to-accent/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-1 min-w-0", children: listing.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "shrink-0 text-[10px] bg-primary/15 text-primary border-primary/30 shadow-[0_0_6px_oklch(0.7_0.22_270/0.3)]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-3 h-3 mr-1" }),
                  "AI Pick"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: listing.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-auto pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 rounded-full ${trustDotClass(score)}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `text-[10px] font-medium ${trustGlowClass(score)}`,
                children: [
                  "Trust ",
                  score
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground ml-auto", children: formatCurrency(listing.askingPrice) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-accent font-medium", children: reason })
        ] })
      ] })
    }
  );
}
const MODE_PILLS = [
  { value: "all", label: "All Listings" },
  { value: "fixed", label: "Fixed Price" },
  { value: "auction", label: "Auctions" }
];
function ModeFilterBar({
  mode,
  onChange,
  auctionCount
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: MODE_PILLS.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "aria-pressed": mode === value,
      "data-ocid": `browse.mode_filter.${value}`,
      onClick: () => onChange(value),
      className: [
        "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200",
        mode === value ? "bg-primary/20 text-primary border-primary/50 shadow-[0_0_14px_oklch(0.7_0.22_270/0.4)]" : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary bg-muted/30"
      ].join(" "),
      children: [
        value === "auction" && /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-3 h-3" }),
        value === "fixed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" }),
        value === "all" && /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3" }),
        label,
        value === "auction" && auctionCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `ml-0.5 text-[10px] rounded-full px-1.5 py-0.5 leading-none ${mode === value ? "bg-primary/30 text-primary" : "bg-primary/15 text-primary"}`,
            children: auctionCount
          }
        )
      ]
    },
    value
  )) });
}
function Browse() {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: "/browse" });
  const [nlQuery, setNlQuery] = reactExports.useState(searchParams.q ?? "");
  const [selectedNiche, setSelectedNiche] = reactExports.useState(
    searchParams.niche ?? "All"
  );
  const [selectedPlatform, setSelectedPlatform] = reactExports.useState(
    searchParams.platform ?? "All"
  );
  const [maxPrice, setMaxPrice] = reactExports.useState(searchParams.maxPrice ?? "");
  const [sortBy, setSortBy] = reactExports.useState(searchParams.sort ?? "newest");
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const [modeFilter, setModeFilter] = reactExports.useState(
    searchParams.mode ?? "all"
  );
  const [showAdvanced, setShowAdvanced] = reactExports.useState(false);
  const [minSeo, setMinSeo] = reactExports.useState(Number(searchParams.minSeo ?? 0));
  const [selectedMonetization, setSelectedMonetization] = reactExports.useState(
    searchParams.monetization ? searchParams.monetization.split(",") : []
  );
  const [minAge, setMinAge] = reactExports.useState(Number(searchParams.minAge ?? 0));
  const [countryTraffic, setCountryTraffic] = reactExports.useState(
    searchParams.country ?? ""
  );
  const [cmsType, setCmsType] = reactExports.useState(searchParams.cms ?? "");
  const [visibleCount, setVisibleCount] = reactExports.useState(PAGE_SIZE);
  const [_resultCountKey, setResultCountKey] = reactExports.useState(0);
  reactExports.useRef(null);
  const hasActiveFilters = selectedNiche !== "All" || selectedPlatform !== "All" || maxPrice !== "" || minSeo > 0 || selectedMonetization.length > 0 || minAge > 0 || countryTraffic !== "" || cmsType !== "";
  const hasActiveNl = nlQuery.trim().length > 0;
  const filter = {
    niche: selectedNiche !== "All" ? selectedNiche : void 0,
    platform: selectedPlatform !== "All" ? selectedPlatform : void 0,
    maxPrice: maxPrice ? BigInt(maxPrice) : void 0
  };
  const searchQuery = hasActiveNl ? {
    naturalLanguage: nlQuery,
    niche: selectedNiche !== "All" ? selectedNiche : void 0,
    sortBy: toSortBy(sortBy),
    minSeoScore: minSeo > 0 ? BigInt(minSeo) : void 0,
    monetizationType: selectedMonetization.length > 0 ? selectedMonetization.join(",") : void 0,
    minAgeYears: minAge > 0 ? BigInt(minAge) : void 0,
    countryTraffic: countryTraffic || void 0,
    cmsType: cmsType || void 0,
    maxRevenue: maxPrice ? BigInt(maxPrice) : void 0
  } : null;
  const { data: regularListings, isLoading: regularLoading } = useFilteredListings(filter);
  const { data: smartResults, isLoading: smartLoading } = useSmartSearch(searchQuery);
  const { data: recommendations } = useRecommendations(searchQuery);
  const { data: activeAuctions } = useListActiveAuctions();
  const isLoading = hasActiveNl ? smartLoading : regularLoading;
  const listings = hasActiveNl ? smartResults ?? [] : regularListings ?? [];
  const auctionMap = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const a of activeAuctions ?? []) map.set(a.listingId.toString(), a);
    return map;
  }, [activeAuctions]);
  const modeFiltered = reactExports.useMemo(() => {
    if (modeFilter === "auction")
      return listings.filter((l) => auctionMap.has(l.id.toString()));
    if (modeFilter === "fixed")
      return listings.filter((l) => !auctionMap.has(l.id.toString()));
    return listings;
  }, [listings, auctionMap, modeFilter]);
  const filtered = reactExports.useMemo(
    () => sortListings(modeFiltered, sortBy),
    [modeFiltered, sortBy]
  );
  const auctionCount = reactExports.useMemo(
    () => listings.filter((l) => auctionMap.has(l.id.toString())).length,
    [listings, auctionMap]
  );
  filtered.slice(0, visibleCount);
  visibleCount < filtered.length;
  reactExports.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setResultCountKey((k) => k + 1);
  }, [
    nlQuery,
    selectedNiche,
    selectedPlatform,
    maxPrice,
    modeFilter,
    minSeo,
    minAge,
    countryTraffic,
    cmsType
  ]);
  reactExports.useEffect(() => {
    const next = {
      q: nlQuery || void 0,
      niche: selectedNiche !== "All" ? selectedNiche : void 0,
      platform: selectedPlatform !== "All" ? selectedPlatform : void 0,
      maxPrice: maxPrice || void 0,
      sort: sortBy,
      mode: modeFilter !== "all" ? modeFilter : void 0,
      minSeo: minSeo > 0 ? String(minSeo) : void 0,
      monetization: selectedMonetization.length > 0 ? selectedMonetization.join(",") : void 0,
      minAge: minAge > 0 ? String(minAge) : void 0,
      country: countryTraffic || void 0,
      cms: cmsType || void 0
    };
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(next)) {
      if (v !== void 0 && v !== "") params.set(k, v);
    }
    navigate({ to: "/browse", search: Object.fromEntries(params) });
  }, [
    nlQuery,
    selectedNiche,
    selectedPlatform,
    maxPrice,
    sortBy,
    modeFilter,
    minSeo,
    selectedMonetization,
    minAge,
    countryTraffic,
    cmsType,
    navigate
  ]);
  function clearFilters() {
    setSelectedNiche("All");
    setSelectedPlatform("All");
    setMaxPrice("");
    setNlQuery("");
    setMinSeo(0);
    setSelectedMonetization([]);
    setMinAge(0);
    setCountryTraffic("");
    setCmsType("");
    setModeFilter("all");
  }
  function toggleMonetization(type) {
    setSelectedMonetization(
      (prev) => prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }
  function handleNlSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    params.set("q", nlQuery);
    navigate({ to: "/browse", search: Object.fromEntries(params) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "oklch(0.08 0.015 270)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden border-b border-primary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 20% 50%, oklch(0.55 0.22 270 / 0.4) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, oklch(0.65 0.24 195 / 0.35) 0%, transparent 50%), oklch(0.09 0.02 270)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-20 left-1/4 w-96 h-96 rounded-full opacity-20 animate-glow-pulse pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.7 0.22 270 / 0.6) 0%, transparent 70%)",
                filter: "blur(60px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.04] pointer-events-none",
              style: {
                backgroundImage: "linear-gradient(oklch(0.7 0.22 270 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 270 / 1) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_24px_oklch(0.7_0.22_270/0.5)] animate-glow-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1", children: "WebStore Marketplace" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl sm:text-4xl lg:text-5xl gradient-text leading-none", children: "Browse Websites for Sale" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base ml-14", children: isLoading ? "Scanning available digital assets..." : `Discover ${(listings == null ? void 0 : listings.length) ?? 0}+ premium digital assets ready for acquisition` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-5 ml-14 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/15 border border-primary/30 text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" }),
                " AI-Powered Search"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/15 border border-accent/30 text-accent", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "w-3 h-3" }),
                " Live Auctions"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3" }),
                " Verified Sellers"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleNlSubmit, className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-primary/5 blur-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "browse-nl-search",
                  type: "text",
                  placeholder: "AI Search: e.g. passive income websites under ₹50,000",
                  value: nlQuery,
                  onChange: (e) => setNlQuery(e.target.value),
                  "data-ocid": "browse.nl_search_input",
                  "aria-label": "Smart search websites",
                  className: "w-full pl-11 pr-28 py-3.5 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_20px_oklch(0.7_0.22_270/0.25)] transition-all duration-300"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  size: "sm",
                  className: "absolute right-2 top-1/2 -translate-y-1/2 glow-primary",
                  "data-ocid": "browse.nl_search_button",
                  children: "Search"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ModeFilterBar,
              {
                mode: modeFilter,
                onChange: setModeFilter,
                auctionCount
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "browse-search",
                    type: "text",
                    placeholder: "Search by title or description...",
                    value: nlQuery,
                    onChange: (e) => setNlQuery(e.target.value),
                    "data-ocid": "browse.search_input",
                    "aria-label": "Search websites",
                    className: "w-full pl-9 pr-3 py-2.5 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_12px_oklch(0.7_0.22_270/0.2)] transition-all duration-300"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sortBy, onValueChange: (v) => setSortBy(v), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    SelectTrigger,
                    {
                      className: "w-44 gap-1.5 text-sm border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all",
                      "data-ocid": "browse.sort_select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "w-3.5 h-3.5 text-muted-foreground" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.entries(SORT_LABELS).map(([val, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: val, children: label }, val)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: showFilters || hasActiveFilters ? "default" : "outline",
                    onClick: () => setShowFilters((v) => !v),
                    className: [
                      "gap-2 shrink-0 transition-all duration-200",
                      showFilters || hasActiveFilters ? "glow-primary" : "border-border/50 hover:border-primary/40 bg-card/60 backdrop-blur-sm"
                    ].join(" "),
                    "data-ocid": "browse.filter_toggle",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Filters" }),
                      hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary-foreground/20 text-primary-foreground text-xs rounded-full px-1.5 py-0.5 leading-none", children: "On" })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          showFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-5 mb-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2", children: "Niche" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap overflow-x-auto gap-1.5 pb-1 -mb-1 scrollbar-none", children: NICHES.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FilterPill,
                  {
                    label: n,
                    active: selectedNiche === n,
                    onClick: () => setSelectedNiche(n),
                    ocid: `browse.filter-niche-${n.toLowerCase()}`
                  },
                  n
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2", children: "Platform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap overflow-x-auto gap-1.5 pb-1 -mb-1 scrollbar-none", children: PLATFORMS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FilterPill,
                  {
                    label: p,
                    active: selectedPlatform === p,
                    onClick: () => setSelectedPlatform(p),
                    ocid: `browse.filter-platform-${p.toLowerCase()}`
                  },
                  p
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "max-price-input",
                    className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block",
                    children: "Max Price ($)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "max-price-input",
                    type: "number",
                    placeholder: "e.g. 50000",
                    value: maxPrice,
                    onChange: (e) => setMaxPrice(e.target.value),
                    "data-ocid": "browse.filter-max-price",
                    className: "w-full px-3 py-2 rounded-xl border border-border/50 bg-background/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-border/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setShowAdvanced((v) => !v),
                className: "flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors",
                "data-ocid": "browse.advanced_toggle",
                children: [
                  showAdvanced ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" }),
                  "Advanced Filters"
                ]
              }
            ) }),
            showAdvanced && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "filter-seo",
                    className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block",
                    children: [
                      "Min SEO Score:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: minSeo })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "filter-seo",
                    type: "range",
                    min: 0,
                    max: 100,
                    value: minSeo,
                    onChange: (e) => setMinSeo(Number(e.target.value)),
                    "data-ocid": "browse.filter-seo",
                    className: "w-full accent-primary"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2", children: "Monetization" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: MONETIZATION_TYPES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FilterPill,
                  {
                    label: m,
                    active: selectedMonetization.includes(m),
                    onClick: () => toggleMonetization(m),
                    ocid: `browse.filter-monetization-${m.toLowerCase()}`
                  },
                  m
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "filter-age",
                    className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block",
                    children: [
                      "Min Age:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                        minAge,
                        " years"
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "filter-age",
                    type: "range",
                    min: 0,
                    max: 20,
                    value: minAge,
                    onChange: (e) => setMinAge(Number(e.target.value)),
                    "data-ocid": "browse.filter-age",
                    className: "w-full accent-primary"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2", children: "Country Traffic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: countryTraffic,
                    onValueChange: setCountryTraffic,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          className: "w-full text-sm border-border/50 bg-background/50",
                          "aria-label": "Country Traffic",
                          "data-ocid": "browse.filter-country",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Any" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "", children: "Any" }),
                        COUNTRIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c))
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2", children: "CMS Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: cmsType, onValueChange: setCmsType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "w-full text-sm border-border/50 bg-background/50",
                      "aria-label": "CMS Type",
                      "data-ocid": "browse.filter-cms",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Any" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "", children: "Any" }),
                    CMS_TYPES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c))
                  ] })
                ] })
              ] })
            ] }),
            hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-border/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Filters active" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: clearFilters,
                  className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-colors",
                  "data-ocid": "browse.clear_filters",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                    " Clear all"
                  ]
                }
              )
            ] })
          ] }),
          !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-sm text-muted-foreground mb-5",
              "data-ocid": "browse.results_count",
              children: [
                filtered.length === 0 ? "No websites found" : `${filtered.length} website${filtered.length !== 1 ? "s" : ""} found`,
                modeFilter !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-xs", children: [
                  "(",
                  modeFilter === "auction" ? "auctions only" : "fixed price only",
                  ")"
                ] }),
                nlQuery && ` for "${nlQuery}"`
              ]
            }
          ),
          hasActiveNl && recommendations && recommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shadow-[0_0_10px_oklch(0.78_0.24_195/0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg gradient-text", children: "AI Recommendations" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4", children: recommendations.slice(0, 5).map((rec) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecommendationCard,
              {
                listing: rec,
                reason: "AI Recommended"
              },
              rec.id.toString()
            )) })
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: ["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCard, {}, k)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center justify-center py-24 text-center",
              "data-ocid": "browse.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-3xl glass-card flex items-center justify-center mb-5 shadow-[0_0_30px_oklch(0.7_0.22_270/0.2)] animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-10 h-10 text-primary/50" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl gradient-text mb-2", children: "No websites found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8 max-w-sm leading-relaxed", children: "Try adjusting your filters or search terms." }),
                hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: clearFilters,
                    variant: "outline",
                    className: "gap-2 border-primary/40 hover:border-primary/70 hover:bg-primary/10 hover:text-primary",
                    "data-ocid": "browse.empty_state.clear_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                      " Clear Filters"
                    ]
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
              "data-ocid": "browse.listing_grid",
              children: filtered.map((listing) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ListingCard,
                {
                  listing,
                  auction: auctionMap.get(listing.id.toString()),
                  isVerified: false,
                  index: 0
                },
                listing.id.toString()
              ))
            }
          )
        ] })
      ]
    }
  );
}
export {
  Browse as default
};
