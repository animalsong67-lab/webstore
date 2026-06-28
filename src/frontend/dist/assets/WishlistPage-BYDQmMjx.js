import { c as createLucideIcon, l as useRemoveFromWishlist, j as jsxRuntimeExports, X, B as Button, L as Link, h as useInternetIdentity, x as useGetWishlist, H as Heart, S as Search, a as Skeleton } from "./index-BMZp6_Em.js";
import { B as Badge } from "./badge-DjffIZJ0.js";
import { C as Card, c as CardContent } from "./card-BMyulF-h.js";
import { G as Globe } from "./globe-Dz_3xYco.js";
import { T as TrendingDown } from "./trending-down-ByyBZ34s.js";
import { T as Tag } from "./tag-D3QhNQUJ.js";
import { A as ArrowRight } from "./arrow-right-C67gEsfO.js";
import { u as useListings } from "./useListings-vMM7OeqO.js";
import { S as Sparkles } from "./sparkles-BXItnaHw.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode);
function formatPrice(n) {
  return `₹${Number(n).toLocaleString("en-IN")}`;
}
function WishlistCard({
  entry,
  currentPrice,
  index
}) {
  const remove = useRemoveFromWishlist();
  const hasPriceDrop = currentPrice !== void 0 && currentPrice < entry.snapshotPrice;
  const priceDiff = hasPriceDrop && currentPrice !== void 0 ? Number(entry.snapshotPrice) - Number(currentPrice) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: "group flex flex-col border-border bg-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth overflow-hidden",
      "data-ocid": `wishlist.item.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-gradient-to-r from-primary via-accent to-primary/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-muted/30 h-28 flex items-center justify-center border-b border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-9 h-9 text-muted-foreground/30" }),
          hasPriceDrop && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3 h-3" }),
            "Price dropped ₹",
            priceDiff.toLocaleString("en-IN")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-muted border border-border text-muted-foreground", children: entry.snapshotNiche }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => remove.mutate(entry.listingId),
              disabled: remove.isPending,
              "aria-label": "Remove from wishlist",
              "data-ocid": `wishlist.remove-${index}`,
              className: "absolute bottom-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-background/80 border border-border text-muted-foreground hover:text-destructive hover:border-destructive/50 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex flex-col flex-1 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-smooth line-clamp-2", children: entry.snapshotTitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: entry.snapshotUrl })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mt-auto pt-2 border-t border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: hasPriceDrop && currentPrice !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground line-through", children: formatPrice(entry.snapshotPrice) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-green-600 dark:text-green-400 leading-tight", children: formatPrice(currentPrice) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: "Asking Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-primary leading-tight", children: formatPrice(entry.snapshotPrice) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2.5 h-2.5 mr-1" }),
              "Saved"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              size: "sm",
              className: "w-full gap-1.5",
              "data-ocid": `wishlist.view-listing-${index}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/listing/$id", params: { id: entry.listingId.toString() }, children: [
                "View Listing",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ] })
            }
          )
        ] })
      ]
    }
  );
}
function SkeletonCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 bg-muted/30 animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full rounded-xl" })
    ] })
  ] });
}
function WishlistPage() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === "logging-in";
  const { data: wishlist, isLoading: wishlistLoading } = useGetWishlist();
  const { data: allListings } = useListings();
  const priceMap = /* @__PURE__ */ new Map();
  if (allListings) {
    for (const l of allListings) priceMap.set(l.id.toString(), l.askingPrice);
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen",
        style: { background: "oklch(0.08 0.015 270)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "relative overflow-hidden border-b border-border/30",
              style: {
                background: "radial-gradient(ellipse 80% 70% at 20% 40%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 80% 60%, oklch(0.78 0.24 195 / 0.25) 0%, transparent 55%), oklch(0.08 0.015 270)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shadow-[0_0_16px_rgba(244,63,94,0.4)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-rose-400 fill-rose-400" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl gradient-text", children: "My Saved Websites" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground ml-12", children: "Your personal wishlist of websites for sale" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "max-w-4xl mx-auto px-4 py-24 flex flex-col items-center text-center",
              "data-ocid": "wishlist.login_required_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-3xl glass-card flex items-center justify-center mb-6 shadow-[0_0_30px_oklch(0.7_0.22_270/0.3)] animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-9 h-9 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl gradient-text mb-3", children: "Login Required" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8 max-w-xs leading-relaxed", children: "Please log in with Internet Identity to view and manage your saved website wishlist." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: login,
                    disabled: isLoggingIn,
                    "data-ocid": "wishlist.login_button",
                    className: "gap-2 glow-primary",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4 h-4" }),
                      isLoggingIn ? "Logging in…" : "Login to View Wishlist"
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "oklch(0.08 0.015 270)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative overflow-hidden border-b border-border/30",
            style: {
              background: "radial-gradient(ellipse 80% 70% at 20% 40%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 80% 60%, oklch(0.78 0.24 195 / 0.25) 0%, transparent 55%), oklch(0.08 0.015 270)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shadow-[0_0_16px_rgba(244,63,94,0.45)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-rose-400 fill-rose-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl sm:text-4xl gradient-text", children: "My Saved Websites" }),
                wishlist && wishlist.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 px-2.5 py-0.5 rounded-full text-sm font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.4)]", children: wishlist.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground ml-12", children: wishlistLoading ? "Loading your saved websites…" : wishlist && wishlist.length > 0 ? `${wishlist.length} website${wishlist.length !== 1 ? "s" : ""} saved` : "No saved websites yet" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: wishlistLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: ["a", "b", "c", "d"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCard, {}, k)) }) : wishlist && wishlist.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
            "data-ocid": "wishlist.list",
            children: wishlist.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              WishlistCard,
              {
                entry,
                currentPrice: priceMap.get(entry.listingId.toString()),
                index: i + 1
              },
              entry.listingId.toString()
            ))
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center justify-center py-24 text-center",
            "data-ocid": "wishlist.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 rounded-3xl glass-card flex items-center justify-center shadow-[0_0_40px_rgba(244,63,94,0.2)] animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-14 h-14 text-rose-500/30" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_oklch(0.7_0.22_270/0.4)] animate-glow-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-primary" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl gradient-text mb-3", children: "No saved websites yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-8 max-w-sm leading-relaxed", children: [
                "Browse and tap the",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5 inline text-rose-400" }),
                " heart icon on any listing to save it here."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  "data-ocid": "wishlist.browse_button",
                  className: "gap-2 glow-primary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/browse", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4" }),
                    "Browse Websites"
                  ] })
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
export {
  WishlistPage as default
};
