import type { PurchaseRecord } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Loader2,
  ShoppingBag,
} from "lucide-react";

interface PurchaseCardProps {
  purchase: PurchaseRecord;
  index: number;
}

const transferStatusConfig: Record<
  string,
  { label: string; className: string; icon: React.ReactNode }
> = {
  pending: {
    label: "Pending",
    className: "bg-yellow-500/15 text-yellow-700 border-yellow-500/30",
    icon: <Clock className="w-3 h-3" />,
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-blue-500/15 text-blue-700 border-blue-500/30",
    icon: <Loader2 className="w-3 h-3 animate-spin" />,
  },
  complete: {
    label: "Complete",
    className: "bg-green-500/15 text-green-700 border-green-500/30",
    icon: <CheckCircle2 className="w-3 h-3" />,
  },
};

function formatDate(ts: bigint) {
  const ms = Number(ts) / 1_000_000;
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function PurchaseCard({ purchase, index }: PurchaseCardProps) {
  const status =
    transferStatusConfig[purchase.transferStatus] ??
    transferStatusConfig.pending;

  return (
    <Card
      className="border border-border bg-card hover:shadow-md transition-smooth"
      data-ocid={`purchases.item.${index}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p
                className="font-semibold text-foreground truncate"
                title={purchase.listingTitle}
              >
                {purchase.listingTitle}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Paid:{" "}
                <span className="font-medium text-foreground">
                  ₹{Number(purchase.pricePaid).toLocaleString("en-IN")}
                </span>
                <span className="mx-1.5">·</span>
                Seller: {purchase.seller}
              </p>
              <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {formatDate(purchase.completedAt)}
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-2">
            <Badge className={`gap-1 ${status.className}`}>
              {status.icon}
              {status.label}
            </Badge>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
            >
              <a
                href={`/listing/${purchase.listingId}`}
                data-ocid={`purchases.view-button.${index}`}
              >
                View <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
