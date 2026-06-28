import Time "mo:core/Time";
import Types "../types/buyer";
import ListingsTypes "../types/listings";
import Map "mo:core/Map";
import List "mo:core/List";
import BuyerLib "../lib/buyer";
import Principal "mo:core/Principal";

mixin (
  wishlistMap : Map.Map<Principal, List.List<BuyerLib.WishlistEntry>>,
  notifMap : Map.Map<Principal, List.List<BuyerLib.BuyerNotification>>,
  wishlistNotifState : { var nextNotifId : Nat },
  listings : List.List<ListingsTypes.Listing>,
) {

  /// Adds a listing to the authenticated caller's wishlist.
  public shared ({ caller }) func addToWishlist(listingId : Nat) : async Bool {
    if (BuyerLib.isInWishlist(wishlistMap, caller, listingId)) {
      return false;
    };
    switch (listings.find(func(l : ListingsTypes.Listing) : Bool { l.id == listingId })) {
      case (?listing) {
        BuyerLib.addToWishlist(wishlistMap, caller, listing, Time.now());
        true;
      };
      case null { false };
    };
  };

  /// Removes a listing from the authenticated caller's wishlist.
  public shared ({ caller }) func removeFromWishlist(listingId : Nat) : async Bool {
    if (not BuyerLib.isInWishlist(wishlistMap, caller, listingId)) {
      return false;
    };
    BuyerLib.removeFromWishlist(wishlistMap, caller, listingId);
    true;
  };

  /// Returns the authenticated caller's full wishlist with listing snapshots.
  public shared query ({ caller }) func getWishlist() : async [Types.WishlistEntry] {
    BuyerLib.getWishlistForBuyer(wishlistMap, caller);
  };

  /// Returns whether a specific listing is saved in the authenticated caller's wishlist.
  public shared query ({ caller }) func checkWishlist(listingId : Nat) : async Bool {
    BuyerLib.isInWishlist(wishlistMap, caller, listingId);
  };
};
