import Debug "mo:core/Debug";
import CommonTypes "common";

module {
  public type Timestamp = CommonTypes.Timestamp;

  /// Listing mode chosen by seller at creation time
  public type ListingMode = {
    #fixedPrice;
    #auction : AuctionConfig;
  };

  /// Auction configuration set by seller at listing time
  public type AuctionConfig = {
    startingBid : Nat;       // minimum opening bid
    reservePrice : Nat;      // secret/public floor; sale only completes if met
    auctionEndTime : Timestamp;
  };

  /// A single bid placed by a buyer
  public type Bid = {
    bidder : Principal;
    amount : Nat;
    placedAt : Timestamp;
  };

  /// Auto-bid configuration set by a buyer
  public type AutoBid = {
    bidder : Principal;
    maxAmount : Nat;         // buyer's ceiling
    stepAmount : Nat;        // increment per auto-bid step
  };

  /// Live auction state for a listing
  public type AuctionState = {
    listingId : Nat;
    config : AuctionConfig;
    currentHighestBid : ?Bid;
    bidCount : Nat;
    timeRemaining : Int;     // seconds remaining (negative = ended)
    winner : ?Principal;     // set when auction ends
    ended : Bool;
  };

  /// Public view of auction state (shared-safe)
  public type AuctionStateView = {
    listingId : Nat;
    startingBid : Nat;
    reservePrice : Nat;
    auctionEndTime : Timestamp;
    highestBidAmount : ?Nat;
    highestBidder : ?Text;   // Principal as text
    bidCount : Nat;
    timeRemainingSeconds : Int;
    winner : ?Text;          // Principal as text
    ended : Bool;
    reserveMet : Bool;
  };

  /// Result of placing a bid
  public type BidResult = {
    #success : AuctionStateView;
    #auctionEnded;
    #belowStartingBid;
    #belowCurrentBid;
    #belowReserveAfterEnd;   // unused in current scope, reserved
    #notAnAuction;
    #listingNotFound;
  };

  /// Input for creating an auction listing
  public type AuctionListingInput = {
    title : Text;
    description : Text;
    niche : Text;
    platform : Text;
    monthlyTraffic : Nat;
    monthlyRevenue : Nat;
    url : Text;
    sellerName : Text;
    contactEmail : Text;
    mode : ListingMode;
  };
};
