import Types "../types/buyer";
import ListingsTypes "../types/listings";
import Map "mo:core/Map";
import List "mo:core/List";


module {
  public type BuyerNotification = Types.BuyerNotification;
  public type BuyerNotificationView = Types.BuyerNotificationView;
  public type BidEntry = Types.BidEntry;
  public type PurchaseRecord = Types.PurchaseRecord;
  public type WishlistEntry = Types.WishlistEntry;

  /// Build notification view from internal notification (strips var fields)
  public func toNotificationView(n : BuyerNotification) : BuyerNotificationView {
    {
      id = n.id;
      notifType = n.notifType;
      createdAt = n.createdAt;
      read = n.read;
    };
  };

  /// Filter bids for a specific buyer from the global bid log
  public func getBidsForBuyer(
    buyerBidLog : Map.Map<Principal, List.List<BidEntry>>,
    buyer : Principal,
  ) : [BidEntry] {
    switch (buyerBidLog.get(buyer)) {
      case (?list) { list.toArray() };
      case null { [] };
    };
  };

  /// Get purchases for a specific buyer
  public func getPurchasesForBuyer(
    purchases : List.List<PurchaseRecord>,
    buyer : Principal,
  ) : [PurchaseRecord] {
    let filtered = purchases.filter(func(r : PurchaseRecord) : Bool {
      r.buyer == buyer
    });
    filtered.toArray();
  };

  /// Get wishlist for a specific buyer
  public func getWishlistForBuyer(
    wishlistMap : Map.Map<Principal, List.List<WishlistEntry>>,
    buyer : Principal,
  ) : [WishlistEntry] {
    switch (wishlistMap.get(buyer)) {
      case (?list) { list.toArray() };
      case null { [] };
    };
  };

  /// Check if listing is in buyer's wishlist
  public func isInWishlist(
    wishlistMap : Map.Map<Principal, List.List<WishlistEntry>>,
    buyer : Principal,
    listingId : Nat,
  ) : Bool {
    switch (wishlistMap.get(buyer)) {
      case (?list) {
        switch (list.find(func(e : WishlistEntry) : Bool { e.listingId == listingId })) {
          case (?_) { true };
          case null { false };
        };
      };
      case null { false };
    };
  };

  /// Add listing to buyer's wishlist; returns updated entry
  public func addToWishlist(
    wishlistMap : Map.Map<Principal, List.List<WishlistEntry>>,
    buyer : Principal,
    listing : ListingsTypes.Listing,
    now : Int,
  ) : () {
    let entry : WishlistEntry = {
      listingId = listing.id;
      savedAt = now;
      snapshotTitle = listing.title;
      snapshotPrice = listing.askingPrice;
      snapshotNiche = listing.niche;
      snapshotUrl = listing.url;
    };
    switch (wishlistMap.get(buyer)) {
      case (?list) { list.add(entry) };
      case null {
        let newList = List.empty<WishlistEntry>();
        newList.add(entry);
        wishlistMap.add(buyer, newList);
      };
    };
  };

  /// Remove listing from buyer's wishlist
  public func removeFromWishlist(
    wishlistMap : Map.Map<Principal, List.List<WishlistEntry>>,
    buyer : Principal,
    listingId : Nat,
  ) : () {
    switch (wishlistMap.get(buyer)) {
      case (?list) {
        let filtered = list.filter(func(e : WishlistEntry) : Bool {
          e.listingId != listingId
        });
        wishlistMap.add(buyer, filtered);
      };
      case null {};
    };
  };

  /// Get unread + all notifications for a buyer
  public func getNotificationsForBuyer(
    notifMap : Map.Map<Principal, List.List<BuyerNotification>>,
    buyer : Principal,
  ) : [BuyerNotificationView] {
    switch (notifMap.get(buyer)) {
      case (?list) {
        let arr = list.toArray();
        arr.map<BuyerNotification, BuyerNotificationView>(toNotificationView);
      };
      case null { [] };
    };
  };

  /// Emit a price-drop notification to all buyers who wishlisted the listing
  public func emitPriceDropNotifications(
    wishlistMap : Map.Map<Principal, List.List<WishlistEntry>>,
    notifMap : Map.Map<Principal, List.List<BuyerNotification>>,
    state : { var nextNotifId : Nat },
    listingId : Nat,
    oldPrice : Nat,
    newPrice : Nat,
    now : Int,
  ) : () {
    for ((buyerPrincipal, wl) in wishlistMap.entries()) {
      switch (wl.find(func(e : WishlistEntry) : Bool { e.listingId == listingId })) {
        case (?_) {
          let notif : BuyerNotification = {
            id = state.nextNotifId;
            buyer = buyerPrincipal;
            notifType = #priceDrop { listingId; oldPrice; newPrice };
            createdAt = now;
            var read = false;
          };
          state.nextNotifId += 1;
          switch (notifMap.get(buyerPrincipal)) {
            case (?nList) { nList.add(notif) };
            case null {
              let newList = List.empty<BuyerNotification>();
              newList.add(notif);
              notifMap.add(buyerPrincipal, newList);
            };
          };
        };
        case null {};
      };
    };
  };
};
