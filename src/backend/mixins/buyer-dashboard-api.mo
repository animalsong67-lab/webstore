
import Types "../types/buyer";
import CustomOrderTypes "../types/custom-orders";
import Map "mo:core/Map";
import List "mo:core/List";
import BuyerLib "../lib/buyer";
import Principal "mo:core/Principal";

mixin (
  buyerBidLog : Map.Map<Principal, List.List<BuyerLib.BidEntry>>,
  purchases : List.List<BuyerLib.PurchaseRecord>,
  customOrders : List.List<CustomOrderTypes.CustomOrder>,
  notifMap : Map.Map<Principal, List.List<BuyerLib.BuyerNotification>>,
) {

  /// Returns all bids placed by the authenticated caller, with auction/listing info.
  public shared query ({ caller }) func getBuyerBids() : async [Types.BidEntry] {
    BuyerLib.getBidsForBuyer(buyerBidLog, caller);
  };

  /// Returns all completed purchases for the authenticated caller.
  public shared query ({ caller }) func getBuyerPurchases() : async [Types.PurchaseRecord] {
    BuyerLib.getPurchasesForBuyer(purchases, caller);
  };

  /// Returns all custom website orders submitted by the authenticated caller.
  public shared query ({ caller }) func getBuyerCustomOrders() : async [CustomOrderTypes.CustomOrder] {
    let all = customOrders.toArray();
    all.filter<CustomOrderTypes.CustomOrder>(func(o) { o.submittedBy == caller });
  };

  /// Returns all notifications (outbid, won, transfer updates, price drops) for the authenticated caller.
  public shared query ({ caller }) func getBuyerNotifications() : async [Types.BuyerNotificationView] {
    BuyerLib.getNotificationsForBuyer(notifMap, caller);
  };

  /// Marks a notification as read.
  public shared ({ caller }) func markNotificationRead(notifId : Nat) : async Bool {
    switch (notifMap.get(caller)) {
      case (?nList) {
        var found = false;
        nList.mapInPlace(func(n : BuyerLib.BuyerNotification) : BuyerLib.BuyerNotification {
          if (n.id == notifId) {
            found := true;
            n.read := true;
          };
          n;
        });
        found;
      };
      case null { false };
    };
  };
};
