import Map "mo:core/Map";
import List "mo:core/List";
import AuctionTypes "../types/auction";
import AuctionLib "../lib/auction";

mixin (
  auctions : Map.Map<Nat, AuctionLib.AuctionStateInternal>,
  autoBids : Map.Map<Nat, List.List<AuctionTypes.AutoBid>>,
  auctionNextId : { var value : Nat },
) {
  /// Create a new auction or fixed-price listing (seller chooses mode)
  public shared ({ caller = _ }) func createAuctionListing(
    input : AuctionTypes.AuctionListingInput,
  ) : async Nat {
    let id = auctionNextId.value;
    auctionNextId.value += 1;
    switch (input.mode) {
      case (#auction(config)) {
        let state = AuctionLib.newAuction(id, config);
        auctions.add(id, state);
      };
      case (#fixedPrice) {
        // Fixed-price listings tracked by id only; no auction state needed
        // We still increment the counter to reserve the id
      };
    };
    id;
  };

  /// Place a bid on an active auction
  public shared ({ caller }) func placeBid(
    listingId : Nat,
    amount : Nat,
  ) : async AuctionTypes.BidResult {
    AuctionLib.placeBid(auctions, autoBids, listingId, caller, amount);
  };

  /// Set or update an auto-bid ceiling for the caller on a listing
  public shared ({ caller }) func setAutoBid(
    listingId : Nat,
    maxAmount : Nat,
    stepAmount : Nat,
  ) : async Bool {
    AuctionLib.setAutoBid(autoBids, listingId, caller, maxAmount, stepAmount);
  };

  /// Get the current auction state for a listing (poll every 3-5 s from UI)
  public query func getAuctionState(
    listingId : Nat,
  ) : async ?AuctionTypes.AuctionStateView {
    AuctionLib.getAuctionState(auctions, listingId);
  };

  /// Finalize an ended auction — anyone can call after timer expires
  public shared func endAuction(
    listingId : Nat,
  ) : async ?AuctionTypes.AuctionStateView {
    AuctionLib.endAuction(auctions, listingId);
  };

  /// List all active auctions (for browse/filter by mode)
  public query func listActiveAuctions() : async [AuctionTypes.AuctionStateView] {
    AuctionLib.listActiveAuctions(auctions);
  };

  /// Browse/filter listings by mode: #fixedPrice or #auction
  public query func filterByMode(
    mode : { #fixedPrice; #auction },
  ) : async [AuctionTypes.AuctionStateView] {
    switch (mode) {
      case (#auction) {
        // Return all auction-mode listings (active or ended)
        let results = List.empty<AuctionTypes.AuctionStateView>();
        for ((_, state) in auctions.entries()) {
          results.add(AuctionLib.toView(state));
        };
        List.toArray(results);
      };
      case (#fixedPrice) {
        // Fixed-price listings do not have auction state; return empty array
        [];
      };
    };
  };
};
