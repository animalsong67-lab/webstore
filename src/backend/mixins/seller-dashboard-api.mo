import List "mo:core/List";
import ListingsTypes "../types/listings";
import CustomOrderTypes "../types/custom-orders";
import SellerDashboardLib "../lib/seller-dashboard";

mixin (
  listings : List.List<ListingsTypes.Listing>,
  customOrders : List.List<CustomOrderTypes.CustomOrder>,
) {
  public query func getSellerListings(sellerPrincipal : Principal) : async [ListingsTypes.Listing] {
    SellerDashboardLib.getSellerListings(listings, sellerPrincipal);
  };

  public shared func updateCustomOrderStatus(
    orderId : Text,
    status : Text,
    notes : ?Text,
  ) : async { #ok; #err : Text } {
    SellerDashboardLib.updateCustomOrderStatus(customOrders, orderId, status, notes);
  };
};
