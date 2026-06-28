import { createActor } from "@/backend";
import type {
  BidEntry,
  BuyerNotificationView,
  CustomOrder,
  PurchaseRecord,
} from "@/backend";
import BidCard from "@/components/buyer/BidCard";
import NotificationItem from "@/components/buyer/NotificationItem";
import PurchaseCard from "@/components/buyer/PurchaseCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useActor } from "@caffeineai/core-infrastructure";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  Gavel,
  MessageCircle,
  Package,
  ShoppingBag,
  User,
} from "lucide-react";
import { useState } from "react";

function BuyerStatCard({
  label,
  value,
  color,
  glow,
}: { label: string; value: number; color: string; glow: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="glass-card rounded-xl p-4 border border-border/50 transition-all duration-300 cursor-default"
      style={
        hovered
          ? { boxShadow: `0 0 22px ${glow}`, transform: "translateY(-2px)" }
          : {}
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="text-2xl font-bold font-mono" style={{ color }}>
        {value}
      </p>
    </div>
  );
}

function SkeletonList() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-20 w-full rounded-lg" />
      ))}
    </div>
  );
}

function EmptyState({
  icon,
  title,
  message,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  message: string;
  cta?: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 text-center glass-card rounded-2xl border-2 border-dashed border-border/40 hover:border-primary/25 transition-all duration-500"
      data-ocid="buyer-dashboard.empty_state"
    >
      <div className="w-16 h-16 rounded-2xl glass-card border border-primary/25 flex items-center justify-center mb-4 shadow-[0_0_20px_oklch(0.7_0.22_270/0.15)]">
        {icon}
      </div>
      <p className="font-semibold text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground mt-1 max-w-xs mb-4">
        {message}
      </p>
      {cta}
    </div>
  );
}

function formatDate(ts: bigint) {
  const ms = Number(ts) / 1_000_000;
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function CustomOrderCard({
  order,
  index,
}: { order: CustomOrder; index: number }) {
  const statusConfig: Record<
    string,
    { cls: string; dot: string; glow: string }
  > = {
    pending: {
      cls: "bg-[oklch(0.78_0.24_195/0.15)] text-[oklch(0.78_0.24_195)] border-[oklch(0.78_0.24_195/0.4)]",
      dot: "bg-[oklch(0.78_0.24_195)] animate-pulse shadow-[0_0_6px_oklch(0.78_0.24_195)]",
      glow: "shadow-[0_0_14px_oklch(0.78_0.24_195/0.18)]",
    },
    reviewing: {
      cls: "bg-primary/15 text-primary border-primary/40",
      dot: "bg-primary animate-pulse shadow-[0_0_6px_oklch(0.7_0.22_270)]",
      glow: "shadow-[0_0_14px_oklch(0.7_0.22_270/0.18)]",
    },
    "in-progress": {
      cls: "bg-[oklch(0.72_0.18_88/0.15)] text-[oklch(0.72_0.18_88)] border-[oklch(0.72_0.18_88/0.35)]",
      dot: "bg-[oklch(0.72_0.18_88)] animate-pulse",
      glow: "",
    },
    completed: {
      cls: "bg-[oklch(0.72_0.2_142/0.15)] text-[oklch(0.72_0.2_142)] border-[oklch(0.72_0.2_142/0.4)]",
      dot: "bg-[oklch(0.72_0.2_142)] shadow-[0_0_6px_oklch(0.72_0.2_142)]",
      glow: "shadow-[0_0_12px_oklch(0.72_0.2_142/0.15)]",
    },
    cancelled: {
      cls: "bg-destructive/15 text-destructive border-destructive/30",
      dot: "bg-destructive",
      glow: "",
    },
  };
  const cfg = statusConfig[order.status.toLowerCase()] ?? {
    cls: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground",
    glow: "",
  };

  return (
    <div
      className={`glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/25 transition-all duration-300 ${cfg.glow}`}
      data-ocid={`custom-orders.item.${index}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
            <Package className="w-4 h-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground">{order.websiteType}</p>
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
              {order.requirements}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-muted-foreground">
              <span>Budget: {order.budget}</span>
              <span className="opacity-40">·</span>
              <span>Timeline: {order.timeline}</span>
              <span className="opacity-40">·</span>
              <span>{formatDate(order.submittedAt)}</span>
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-end gap-3">
          <Badge
            className={`text-xs border flex items-center gap-1.5 ${cfg.cls}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
            {order.status}
          </Badge>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-7 px-2 text-xs gap-1 border-accent/30 text-accent hover:bg-accent/10 hover:border-accent transition-all"
          >
            <a
              href={`mailto:animalsong67@gmail.com?subject=Custom Order #${order.id} - ${order.websiteType}`}
              data-ocid={`custom-orders.message-seller-button.${index}`}
            >
              <MessageCircle className="w-3 h-3" /> Message
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function BuyerDashboardPage() {
  const { identity } = useInternetIdentity();
  const { actor, isFetching } = useActor(createActor);
  const qc = useQueryClient();
  const [activeTab, setActiveTab] = useState("bids");

  const isAuthenticated = !!identity;
  const enabled = !!actor && !isFetching && isAuthenticated;

  const { data: bids = [], isLoading: bidsLoading } = useQuery<BidEntry[]>({
    queryKey: ["buyer", "bids"],
    queryFn: async () => (actor ? actor.getBuyerBids() : []),
    enabled,
  });

  const { data: purchases = [], isLoading: purchasesLoading } = useQuery<
    PurchaseRecord[]
  >({
    queryKey: ["buyer", "purchases"],
    queryFn: async () => (actor ? actor.getBuyerPurchases() : []),
    enabled,
  });

  const { data: customOrders = [], isLoading: ordersLoading } = useQuery<
    CustomOrder[]
  >({
    queryKey: ["buyer", "customOrders"],
    queryFn: async () => (actor ? actor.getBuyerCustomOrders() : []),
    enabled,
  });

  const { data: notifications = [], isLoading: notifsLoading } = useQuery<
    BuyerNotificationView[]
  >({
    queryKey: ["buyer", "notifications"],
    queryFn: async () => (actor ? actor.getBuyerNotifications() : []),
    enabled,
  });

  const { mutate: markRead, variables: markingId } = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) return false;
      return actor.markNotificationRead(id);
    },
    onSuccess: () =>
      qc.invalidateQueries({ queryKey: ["buyer", "notifications"] }),
  });

  const unreadCount = notifications.filter((n) => !n.read).length;
  const activeBids = bids.filter((b) => !b.auctionEnded);

  if (!isAuthenticated) {
    return (
      <div
        className="max-w-lg mx-auto px-4 py-24 text-center"
        data-ocid="buyer-dashboard.page"
      >
        <div className="w-24 h-24 rounded-3xl glass-card border border-primary/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_oklch(0.7_0.22_270/0.3)]">
          <User className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold font-display gradient-text mb-3">
          Buyer Dashboard
        </h1>
        <p className="text-muted-foreground mb-8">
          Please login with Internet Identity to access your dashboard.
        </p>
        <Button
          asChild
          className="bg-primary/90 hover:bg-primary shadow-[0_0_20px_oklch(0.7_0.22_270/0.4)] hover:shadow-[0_0_32px_oklch(0.7_0.22_270/0.6)] transition-all duration-300"
          data-ocid="buyer-dashboard.login-link"
        >
          <Link to="/">Go to Homepage</Link>
        </Button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-background"
      data-ocid="buyer-dashboard.page"
    >
      {/* Animated gradient hero */}
      <section className="relative overflow-hidden pb-2">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.78_0.24_195/0.15)] via-[oklch(0.75_0.2_300/0.06)] to-primary/12 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_0%,oklch(0.78_0.24_195/0.14),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-[radial-gradient(circle,oklch(0.7_0.22_270/0.1),transparent_70%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center shadow-[0_0_12px_oklch(0.78_0.24_195/0.3)]">
              <ShoppingBag className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Buyer Hub
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-display gradient-text mb-2">
            Buyer Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Track your bids, purchases, and custom orders
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              {
                label: "Active Bids",
                value: activeBids.length,
                color: "oklch(0.7 0.22 270)",
                glow: "oklch(0.7 0.22 270 / 0.22)",
              },
              {
                label: "Purchases",
                value: purchases.length,
                color: "oklch(0.72 0.2 142)",
                glow: "oklch(0.72 0.2 142 / 0.22)",
              },
              {
                label: "Custom Orders",
                value: customOrders.length,
                color: "oklch(0.78 0.24 195)",
                glow: "oklch(0.78 0.24 195 / 0.22)",
              },
              {
                label: "Unread Alerts",
                value: unreadCount,
                color: "oklch(0.65 0.22 22)",
                glow: "oklch(0.65 0.22 22 / 0.22)",
              },
            ].map(({ label, value, color, glow }) => (
              <BuyerStatCard
                key={label}
                label={label}
                value={value}
                color={color}
                glow={glow}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          data-ocid="buyer-dashboard.tabs"
        >
          {/* Tab List with animated sliding underline */}
          <div className="relative mb-8">
            <TabsList className="w-full grid grid-cols-4 h-auto glass-card border border-border/50 p-1 rounded-2xl gap-1">
              <TabsTrigger
                value="bids"
                className="relative gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_14px_oklch(0.7_0.22_270/0.35)] transition-all duration-300"
                data-ocid="buyer-dashboard.tab.bids"
              >
                <Gavel className="w-3.5 h-3.5" />
                <span>Active Bids</span>
                {activeBids.length > 0 && (
                  <Badge className="ml-1 px-1.5 py-0 h-4 text-[10px] bg-primary/20 text-primary border-0 animate-glow-pulse">
                    {activeBids.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="purchases"
                className="gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-[oklch(0.72_0.2_142/0.2)] data-[state=active]:text-[oklch(0.72_0.2_142)] data-[state=active]:shadow-[0_0_14px_oklch(0.72_0.2_142/0.35)] transition-all duration-300"
                data-ocid="buyer-dashboard.tab.purchases"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Purchases</span>
              </TabsTrigger>
              <TabsTrigger
                value="orders"
                className="gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:shadow-[0_0_14px_oklch(0.78_0.24_195/0.35)] transition-all duration-300"
                data-ocid="buyer-dashboard.tab.orders"
              >
                <Package className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Custom Orders</span>
                <span className="sm:hidden">Orders</span>
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="gap-1.5 py-2.5 text-xs sm:text-sm rounded-xl data-[state=active]:bg-destructive/20 data-[state=active]:text-destructive data-[state=active]:shadow-[0_0_14px_oklch(0.65_0.22_22/0.35)] transition-all duration-300"
                data-ocid="buyer-dashboard.tab.notifications"
              >
                <Bell className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Notifications</span>
                <span className="sm:hidden">Alerts</span>
                {unreadCount > 0 && (
                  <Badge className="ml-1 px-1.5 py-0 h-4 text-[10px] bg-destructive/20 text-destructive border-0 animate-glow-pulse">
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Glass panel wrapping each tab content */}
          <div className="glass-card rounded-2xl border border-border/50 p-6">
            <TabsContent value="bids" className="mt-0">
              {bidsLoading ? (
                <SkeletonList />
              ) : bids.length === 0 ? (
                <EmptyState
                  icon={<Gavel className="w-6 h-6 text-primary" />}
                  title="No active bids yet"
                  message="Browse website auctions and place your first bid to start tracking here."
                  cta={
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary/90 hover:bg-primary shadow-[0_0_16px_oklch(0.7_0.22_270/0.3)] transition-all"
                      data-ocid="buyer-dashboard.browse-auctions-button"
                    >
                      <Link to="/browse">Browse Auctions</Link>
                    </Button>
                  }
                />
              ) : (
                <div className="space-y-3">
                  {bids.map((bid, i) => (
                    <BidCard
                      key={`${bid.listingId}-${bid.placedAt}`}
                      bid={bid}
                      index={i + 1}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="purchases" className="mt-0">
              {purchasesLoading ? (
                <SkeletonList />
              ) : purchases.length === 0 ? (
                <EmptyState
                  icon={
                    <ShoppingBag className="w-6 h-6 text-[oklch(0.72_0.2_142)]" />
                  }
                  title="No purchases yet"
                  message="Once you complete a website purchase, it will appear here with transfer status."
                />
              ) : (
                <div className="space-y-3">
                  {purchases.map((p, i) => (
                    <PurchaseCard
                      key={String(p.id)}
                      purchase={p}
                      index={i + 1}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="orders" className="mt-0">
              {ordersLoading ? (
                <SkeletonList />
              ) : customOrders.length === 0 ? (
                <EmptyState
                  icon={<Package className="w-6 h-6 text-accent" />}
                  title="No custom orders yet"
                  message="Request a custom website through 'Customise Your Own Website' and track it here."
                  cta={
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-accent/30 text-accent hover:bg-accent/10 hover:border-accent transition-all"
                      data-ocid="buyer-dashboard.custom-order-link"
                    >
                      <Link to="/customise">Request Custom Website</Link>
                    </Button>
                  }
                />
              ) : (
                <div className="space-y-3">
                  {customOrders.map((order, i) => (
                    <CustomOrderCard
                      key={String(order.id)}
                      order={order}
                      index={i + 1}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="notifications" className="mt-0">
              {notifsLoading ? (
                <SkeletonList />
              ) : notifications.length === 0 ? (
                <EmptyState
                  icon={<Bell className="w-6 h-6 text-muted-foreground" />}
                  title="No notifications"
                  message="You'll be notified here about bids, auction results, price drops, and transfer updates."
                />
              ) : (
                <div className="space-y-2">
                  {notifications.map((n, i) => (
                    <div
                      key={String(n.id)}
                      style={{ animationDelay: `${i * 60}ms` }}
                      className="animate-[fadeSlideUp_0.4s_ease_both]"
                    >
                      <NotificationItem
                        notification={n}
                        index={i + 1}
                        onMarkRead={(id) => markRead(id)}
                        isMarkingRead={markingId === n.id}
                      />
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
