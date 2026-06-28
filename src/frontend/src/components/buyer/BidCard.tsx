import type { BidEntry } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Clock, Gavel, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

interface BidCardProps {
  bid: BidEntry;
  index: number;
}

function useCountdown(auctionEndTimestamp: bigint, auctionEnded: boolean) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (auctionEnded) {
      setTimeLeft("Ended");
      return;
    }

    // Timestamp is in nanoseconds (IC standard)
    const endMs = Number(auctionEndTimestamp) / 1_000_000;

    const tick = () => {
      const diff = endMs - Date.now();
      if (diff <= 0) {
        setTimeLeft("Ended");
        return;
      }
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      setTimeLeft(`${h}h ${m}m ${s}s`);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [auctionEndTimestamp, auctionEnded]);

  return timeLeft;
}

export default function BidCard({ bid, index }: BidCardProps) {
  const timeLeft = useCountdown(bid.placedAt, bid.auctionEnded);

  const statusBadge = bid.won ? (
    <Badge className="bg-green-500/15 text-green-700 border-green-500/30 gap-1">
      <Trophy className="w-3 h-3" /> Won
    </Badge>
  ) : bid.auctionEnded ? (
    <Badge variant="secondary" className="gap-1">
      Ended
    </Badge>
  ) : bid.isHighestBidder ? (
    <Badge className="bg-primary/15 text-primary border-primary/30 gap-1">
      <Trophy className="w-3 h-3" /> Winning
    </Badge>
  ) : (
    <Badge
      variant="destructive"
      className="gap-1 bg-red-500/15 text-red-700 border-red-500/30"
    >
      <AlertCircle className="w-3 h-3" /> Outbid
    </Badge>
  );

  return (
    <Card
      className="border border-border bg-card hover:shadow-md transition-smooth"
      data-ocid={`bids.item.${index}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Gavel className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p
                className="font-semibold text-foreground truncate"
                title={bid.listingTitle}
              >
                {bid.listingTitle}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Your bid:{" "}
                <span className="font-medium text-foreground">
                  ₹{Number(bid.bidAmount).toLocaleString("en-IN")}
                </span>
              </p>
            </div>
          </div>
          <div className="shrink-0 text-right space-y-1.5">
            {statusBadge}
            {!bid.auctionEnded && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground justify-end">
                <Clock className="w-3 h-3" />
                <span>{timeLeft}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
