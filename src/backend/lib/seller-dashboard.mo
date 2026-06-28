import List "mo:core/List";
import Types "../types/listings";
import CustomOrderTypes "../types/custom-orders";

module {
  public func getSellerListings(
    listings : List.List<Types.Listing>,
    sellerPrincipal : Principal,
  ) : [Types.Listing] {
    ignore sellerPrincipal;
    listings.toArray();
  };

  public func updateCustomOrderStatus(
    orders : List.List<CustomOrderTypes.CustomOrder>,
    orderId : Text,
    status : Text,
    notes : ?Text,
  ) : { #ok; #err : Text } {
    var found = false;
    orders.mapInPlace(
      func(o) {
        if (debug_show(o.id) == orderId) {
          found := true;
          { o with status; sellerNotes = notes };
        } else { o };
      }
    );
    if (found) { #ok } else { #err("Order not found") };
  };
};
