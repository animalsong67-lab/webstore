import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import { Heart, LogIn, Search, Sparkles } from "lucide-react";
import { WishlistCard } from "../components/wishlist/WishlistCard";
import { useListings } from "../hooks/useListings";
import { useGetWishlist } from "../hooks/useWishlist";

function SkeletonCard() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="h-28 bg-muted/30 animate-pulse" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-8 w-full rounded-xl" />
      </div>
    </div>
  );
}

export default function WishlistPage() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === "logging-in";

  const { data: wishlist, isLoading: wishlistLoading } = useGetWishlist();
  const { data: allListings } = useListings();

  const priceMap = new Map<string, bigint>();
  if (allListings) {
    for (const l of allListings) priceMap.set(l.id.toString(), l.askingPrice);
  }

  if (!isAuthenticated) {
    return (
      <div
        className="min-h-screen"
        style={{ background: "oklch(0.08 0.015 270)" }}
      >
        <div
          className="relative overflow-hidden border-b border-border/30"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 20% 40%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 60%), " +
              "radial-gradient(ellipse 55% 50% at 80% 60%, oklch(0.78 0.24 195 / 0.25) 0%, transparent 55%), " +
              "oklch(0.08 0.015 270)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shadow-[0_0_16px_rgba(244,63,94,0.4)]">
                <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
              </div>
              <h1 className="font-display font-bold text-3xl gradient-text">
                My Saved Websites
              </h1>
            </div>
            <p className="text-muted-foreground ml-12">
              Your personal wishlist of websites for sale
            </p>
          </div>
        </div>
        <div
          className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center text-center"
          data-ocid="wishlist.login_required_state"
        >
          <div className="w-20 h-20 rounded-3xl glass-card flex items-center justify-center mb-6 shadow-[0_0_30px_oklch(0.7_0.22_270/0.3)] animate-float">
            <LogIn className="w-9 h-9 text-primary" />
          </div>
          <h2 className="font-display font-bold text-2xl gradient-text mb-3">
            Login Required
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-xs leading-relaxed">
            Please log in with Internet Identity to view and manage your saved
            website wishlist.
          </p>
          <Button
            onClick={login}
            disabled={isLoggingIn}
            data-ocid="wishlist.login_button"
            className="gap-2 glow-primary"
          >
            <LogIn className="w-4 h-4" />
            {isLoggingIn ? "Logging in\u2026" : "Login to View Wishlist"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.08 0.015 270)" }}
    >
      <div
        className="relative overflow-hidden border-b border-border/30"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 20% 40%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 60%), " +
            "radial-gradient(ellipse 55% 50% at 80% 60%, oklch(0.78 0.24 195 / 0.25) 0%, transparent 55%), " +
            "oklch(0.08 0.015 270)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shadow-[0_0_16px_rgba(244,63,94,0.45)]">
              <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl gradient-text">
              My Saved Websites
            </h1>
            {wishlist && wishlist.length > 0 && (
              <span className="ml-1 px-2.5 py-0.5 rounded-full text-sm font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.4)]">
                {wishlist.length}
              </span>
            )}
          </div>
          <p className="text-muted-foreground ml-12">
            {wishlistLoading
              ? "Loading your saved websites\u2026"
              : wishlist && wishlist.length > 0
                ? `${wishlist.length} website${wishlist.length !== 1 ? "s" : ""} saved`
                : "No saved websites yet"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {wishlistLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {(["a", "b", "c", "d"] as const).map((k) => (
              <SkeletonCard key={k} />
            ))}
          </div>
        ) : wishlist && wishlist.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            data-ocid="wishlist.list"
          >
            {wishlist.map((entry, i) => (
              <WishlistCard
                key={entry.listingId.toString()}
                entry={entry}
                currentPrice={priceMap.get(entry.listingId.toString())}
                index={i + 1}
              />
            ))}
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center py-24 text-center"
            data-ocid="wishlist.empty_state"
          >
            <div className="relative mb-8">
              <div className="w-28 h-28 rounded-3xl glass-card flex items-center justify-center shadow-[0_0_40px_rgba(244,63,94,0.2)] animate-float">
                <Heart className="w-14 h-14 text-rose-500/30" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_12px_oklch(0.7_0.22_270/0.4)] animate-glow-pulse">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </div>
            <h3 className="font-display font-bold text-2xl gradient-text mb-3">
              No saved websites yet
            </h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Browse and tap the{" "}
              <Heart className="w-3.5 h-3.5 inline text-rose-400" /> heart icon
              on any listing to save it here.
            </p>
            <Button
              asChild
              data-ocid="wishlist.browse_button"
              className="gap-2 glow-primary"
            >
              <Link to="/browse">
                <Search className="w-4 h-4" />
                Browse Websites
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
