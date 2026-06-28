import Time "mo:core/Time";
import ListingsTypes "types/listings";
import ContactTypes "types/contact";
import CustomOrderTypes "types/custom-orders";
import ListingsMixin "mixins/listings-api";
import ContactMixin "mixins/contact-api";
import CustomOrdersMixin "mixins/custom-orders-api";
import SellerDashboardMixin "mixins/seller-dashboard-api";
import AiChatMixin "mixins/ai-chat-api";
import ListingsLib "lib/listings";
import TrustTypes "types/trust-score";
import ValuationMixin "mixins/valuation-api";
import TrustMixin "mixins/trust-api";
import SearchMixin "mixins/search-api";
import Map "mo:core/Map";
import RevTypes "types/revenue-verification";
import RevenueVerificationMixin "mixins/revenue-verification-api";
import List "mo:core/List";
import PerformanceReportMixin "mixins/performance-report-api";
import BuyerTypes "types/buyer";
import BuyerDashboardMixin "mixins/buyer-dashboard-api";
import WishlistMixin "mixins/wishlist-api";
import BuyerLib "lib/buyer";





actor {
  let listings = List.empty<ListingsTypes.Listing>();
  let sellerSubmissions = List.empty<ListingsTypes.SellerSubmission>();
  let contactMessages = List.empty<ContactTypes.ContactMessage>();
  let customOrders = List.empty<CustomOrderTypes.CustomOrder>();
  let reviews = List.empty<TrustTypes.SellerReview>();
  let verificationRequests = List.empty<RevTypes.VerificationRequest>();
  let verificationCredentials = Map.empty<Nat, [RevTypes.CredentialToken]>();
  let nextVerificationRequestId = { var value : Nat = 0 };
  var nextListingId : Nat = 0;
  let nextContactId : Nat = 0;
  var seeded : Bool = false;
  let buyerBidLog = Map.empty<Principal, List.List<BuyerLib.BidEntry>>();
  let purchases = List.empty<BuyerLib.PurchaseRecord>();
  let wishlistMap = Map.empty<Principal, List.List<BuyerLib.WishlistEntry>>();
  let notifMap = Map.empty<Principal, List.List<BuyerLib.BuyerNotification>>();
  let wishlistNotifState = { var nextNotifId : Nat = 0 };

  // Seed sample data on first deploy
  if (not seeded) {
    nextListingId := ListingsLib.seedListings(listings, nextListingId, Time.now());
    seeded := true;
  };

  include ListingsMixin(listings, sellerSubmissions, nextListingId);
  include ContactMixin(contactMessages, nextContactId);
  include CustomOrdersMixin(customOrders);
  include SellerDashboardMixin(listings, customOrders);
  include AiChatMixin();
  include ValuationMixin();
  include TrustMixin(reviews);
  include SearchMixin(listings);
  include RevenueVerificationMixin(verificationRequests, verificationCredentials, nextVerificationRequestId);
  include PerformanceReportMixin(listings);
  include BuyerDashboardMixin(buyerBidLog, purchases, customOrders, notifMap);
  include WishlistMixin(wishlistMap, notifMap, wishlistNotifState, listings);
};
