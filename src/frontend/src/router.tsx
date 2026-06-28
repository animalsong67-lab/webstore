import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Browse = lazy(() => import("./pages/Browse"));
const Sell = lazy(() => import("./pages/Sell"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Customise = lazy(() => import("./pages/Customise"));
const ListingDetail = lazy(() => import("./pages/ListingDetail"));
const SellerDashboard = lazy(() => import("./pages/SellerDashboard"));
const Valuation = lazy(() => import("./pages/Valuation"));
const Escrow = lazy(() => import("./pages/Escrow"));
const Transfer = lazy(() => import("./pages/Transfer"));
const AdminRevenueDashboard = lazy(
  () => import("./pages/AdminRevenueDashboard"),
);
const AIBuilder = lazy(() => import("./pages/AIBuilder"));
const BuyerDashboard = lazy(() => import("./pages/BuyerDashboardPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));

function PageLoader() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const browseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/browse",
  component: Browse,
});
const sellRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sell",
  component: Sell,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const customiseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customise",
  component: Customise,
});
const listingDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/listing/$id",
  component: ListingDetail,
});
const sellerDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/seller-dashboard",
  component: SellerDashboard,
});
const valuationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/valuation",
  component: Valuation,
});
const escrowRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/escrow",
  component: Escrow,
});
const transferRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/transfer",
  component: Transfer,
});
const adminRevenueDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/revenue-verification",
  component: AdminRevenueDashboard,
});
const aiBuilderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-builder",
  component: AIBuilder,
});
const buyerDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/buyer-dashboard",
  component: BuyerDashboard,
});

const wishlistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wishlist",
  component: WishlistPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  browseRoute,
  sellRoute,
  aboutRoute,
  contactRoute,
  customiseRoute,
  listingDetailRoute,
  sellerDashboardRoute,
  valuationRoute,
  escrowRoute,
  transferRoute,
  adminRevenueDashboardRoute,
  aiBuilderRoute,
  buyerDashboardRoute,
  wishlistRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
