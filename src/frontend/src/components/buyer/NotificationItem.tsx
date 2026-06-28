import type { BuyerNotificationView, NotificationType } from "@/backend";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  Bell,
  CheckCheck,
  Package,
  TrendingDown,
  Trophy,
} from "lucide-react";

interface NotificationItemProps {
  notification: BuyerNotificationView;
  index: number;
  onMarkRead: (id: bigint) => void;
  isMarkingRead: boolean;
}

function getNotifContent(type: NotificationType): {
  icon: React.ReactNode;
  title: string;
  body: string;
} {
  switch (type.__kind__) {
    case "outbid":
      return {
        icon: <AlertCircle className="w-4 h-4 text-red-500" />,
        title: "You've been outbid!",
        body: `New highest bid: ₹${Number(type.outbid.newHighestBid).toLocaleString("en-IN")} on listing #${type.outbid.listingId}`,
      };
    case "auctionWon":
      return {
        icon: <Trophy className="w-4 h-4 text-yellow-500" />,
        title: "Congratulations! You won the auction!",
        body: `Final price: ₹${Number(type.auctionWon.finalPrice).toLocaleString("en-IN")} — Listing #${type.auctionWon.listingId}`,
      };
    case "priceDrop":
      return {
        icon: <TrendingDown className="w-4 h-4 text-primary" />,
        title: "Price drop on a listing!",
        body: `Price dropped from ₹${Number(type.priceDrop.oldPrice).toLocaleString("en-IN")} to ₹${Number(type.priceDrop.newPrice).toLocaleString("en-IN")}`,
      };
    case "transferUpdate":
      return {
        icon: <Package className="w-4 h-4 text-blue-500" />,
        title: "Website transfer updated",
        body: type.transferUpdate.message,
      };
    case "purchaseConfirmed":
      return {
        icon: <CheckCheck className="w-4 h-4 text-green-500" />,
        title: "Purchase confirmed!",
        body: `Payment of ₹${Number(type.purchaseConfirmed.amount).toLocaleString("en-IN")} confirmed for listing #${type.purchaseConfirmed.listingId}`,
      };
    default:
      return {
        icon: <Bell className="w-4 h-4 text-muted-foreground" />,
        title: "Notification",
        body: "You have a new notification.",
      };
  }
}

function formatRelativeTime(ts: bigint) {
  const ms = Number(ts) / 1_000_000;
  const diff = Date.now() - ms;
  if (diff < 60_000) return "Just now";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  return `${Math.floor(diff / 86_400_000)}d ago`;
}

export default function NotificationItem({
  notification,
  index,
  onMarkRead,
  isMarkingRead,
}: NotificationItemProps) {
  const { icon, title, body } = getNotifContent(notification.notifType);

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border transition-smooth",
        notification.read
          ? "bg-muted/30 border-border opacity-70"
          : "bg-card border-primary/20 shadow-xs",
      )}
      data-ocid={`notifications.item.${index}`}
    >
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
          notification.read ? "bg-muted" : "bg-primary/10",
        )}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p
            className={cn(
              "text-sm font-medium",
              notification.read ? "text-muted-foreground" : "text-foreground",
            )}
          >
            {title}
          </p>
          <span className="text-xs text-muted-foreground shrink-0">
            {formatRelativeTime(notification.createdAt)}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5 break-words">
          {body}
        </p>
      </div>
      {!notification.read && (
        <Button
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-xs shrink-0"
          disabled={isMarkingRead}
          onClick={() => onMarkRead(notification.id)}
          data-ocid={`notifications.mark-read-button.${index}`}
        >
          Mark read
        </Button>
      )}
    </div>
  );
}
