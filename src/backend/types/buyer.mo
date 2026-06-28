import Debug "mo:core/Debug";
import CommonTypes "common";

module {
  public type Timestamp = CommonTypes.Timestamp;

  // --- Notification types ---
  public type NotificationType = {
    #outbid : { listingId : Nat; newHighestBid : Nat };
    #auctionWon : { listingId : Nat; finalPrice : Nat };
    #transferUpdate : { listingId : Nat; message : Text };
    #priceDrop : { listingId : Nat; oldPrice : Nat; newPrice : Nat };
    #purchaseConfirmed : { listingId : Nat; amount : Nat };
  };

  public type BuyerNotification = {
    id : Nat;
    buyer : Principal;
    notifType : NotificationType;
    createdAt : Timestamp;
    var read : Bool;
  };

  // Shared-safe view (no var fields)
  public type BuyerNotificationView = {
    id : Nat;
    notifType : NotificationType;
    createdAt : Timestamp;
    read : Bool;
  };

  // --- Bid history types ---
  public type BidEntry = {
    listingId : Nat;
    listingTitle : Text;
    bidAmount : Nat;
    placedAt : Timestamp;
    isHighestBidder : Bool;
    auctionEnded : Bool;
    won : Bool;
  };

  // --- Purchase record ---
  public type PurchaseRecord = {
    id : Nat;
    listingId : Nat;
    listingTitle : Text;
    buyer : Principal;
    seller : Text;
    pricePaid : Nat;
    completedAt : Timestamp;
    transferStatus : Text;
  };

  // --- Wishlist types ---
  public type WishlistEntry = {
    listingId : Nat;
    savedAt : Timestamp;
    // snapshot at time of saving
    snapshotTitle : Text;
    snapshotPrice : Nat;
    snapshotNiche : Text;
    snapshotUrl : Text;
  };
};
