import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Tag, TrendingDown, X } from "lucide-react";
import type { WishlistEntry } from "../../hooks/useWishlist";
import { useRemoveFromWishlist } from "../../hooks/useWishlist";

interface WishlistCardProps {
  entry: WishlistEntry;
  currentPrice?: bigint;
  index: number;
}

function formatPrice(n: bigint) {
  return `₹${Number(n).toLocaleString("en-IN")}`;
}

export function WishlistCard({
  entry,
  currentPrice,
  index,
}: WishlistCardProps) {
  const remove = useRemoveFromWishlist();

  const hasPriceDrop =
    currentPrice !== undefined && currentPrice < entry.snapshotPrice;
  const priceDiff =
    hasPriceDrop && currentPrice !== undefined
      ? Number(entry.snapshotPrice) - Number(currentPrice)
      : 0;

  return (
    <Card
      className="group flex flex-col border-border bg-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth overflow-hidden"
      data-ocid={`wishlist.item.${index}`}
    >
      {/* Color accent strip */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary/60" />

      {/* Thumbnail placeholder */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-muted/30 h-28 flex items-center justify-center border-b border-border/50">
        <Globe className="w-9 h-9 text-muted-foreground/30" />

        {/* Price drop badge */}
        {hasPriceDrop && (
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
              <TrendingDown className="w-3 h-3" />
              Price dropped ₹{priceDiff.toLocaleString("en-IN")}
            </span>
          </div>
        )}

        {/* Niche badge */}
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-muted border border-border text-muted-foreground">
            {entry.snapshotNiche}
          </span>
        </div>

        {/* Remove button */}
        <button
          type="button"
          onClick={() => remove.mutate(entry.listingId)}
          disabled={remove.isPending}
          aria-label="Remove from wishlist"
          data-ocid={`wishlist.remove-${index}`}
          className="absolute bottom-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-background/80 border border-border text-muted-foreground hover:text-destructive hover:border-destructive/50 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      <CardContent className="p-4 flex flex-col flex-1 gap-3">
        {/* Title */}
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-smooth line-clamp-2">
            {entry.snapshotTitle}
          </h3>
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <Globe className="w-3 h-3 shrink-0" />
            <span className="truncate">{entry.snapshotUrl}</span>
          </div>
        </div>

        {/* Price row */}
        <div className="flex items-end justify-between mt-auto pt-2 border-t border-border/50">
          <div>
            {hasPriceDrop && currentPrice !== undefined ? (
              <>
                <p className="text-[10px] text-muted-foreground line-through">
                  {formatPrice(entry.snapshotPrice)}
                </p>
                <p className="font-display font-bold text-lg text-green-600 dark:text-green-400 leading-tight">
                  {formatPrice(currentPrice)}
                </p>
              </>
            ) : (
              <>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  Asking Price
                </p>
                <p className="font-display font-bold text-lg text-primary leading-tight">
                  {formatPrice(entry.snapshotPrice)}
                </p>
              </>
            )}
          </div>
          <Badge variant="outline" className="text-[10px] shrink-0">
            <Tag className="w-2.5 h-2.5 mr-1" />
            Saved
          </Badge>
        </div>

        {/* Actions */}
        <Button
          asChild
          size="sm"
          className="w-full gap-1.5"
          data-ocid={`wishlist.view-listing-${index}`}
        >
          <Link to="/listing/$id" params={{ id: entry.listingId.toString() }}>
            View Listing
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
