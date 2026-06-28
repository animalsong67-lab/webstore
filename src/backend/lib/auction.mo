import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import AuctionTypes "../types/auction";

module {
  public type AuctionStateInternal = {
    listingId : Nat;
    config : AuctionTypes.AuctionConfig;
    var currentHighestBid : ?AuctionTypes.Bid;
    var bidCount : Nat;
    var winner : ?Principal;
    var ended : Bool;
  };

  /// Create a new auction state record for a listing
  public func newAuction(
    listingId : Nat,
    config : AuctionTypes.AuctionConfig,
  ) : AuctionStateInternal {
    {
      listingId;
      config;
      var currentHighestBid = null;
      var bidCount = 0;
      var winner = null;
      var ended = false;
    };
  };

  /// Place a bid; auto-increments if an auto-bid is present for the caller
  public func placeBid(
    auctions : Map.Map<Nat, AuctionStateInternal>,
    autoBids : Map.Map<Nat, List.List<AuctionTypes.AutoBid>>,
    listingId : Nat,
    bidder : Principal,
    amount : Nat,
  ) : AuctionTypes.BidResult {
    switch (auctions.get(listingId)) {
      case null #listingNotFound;
      case (?state) {
        // Check auction ended flag or timer
        let nowNs : Int = Time.now();
        if (state.ended or nowNs > state.config.auctionEndTime) {
          if (not state.ended) {
            state.ended := true;
            switch (state.currentHighestBid) {
              case (?bid) {
                if (bid.amount >= state.config.reservePrice) {
                  state.winner := ?bid.bidder;
                };
              };
              case null {};
            };
          };
          return #auctionEnded;
        };
        // Must be at or above starting bid
        if (amount < state.config.startingBid) return #belowStartingBid;
        // Must beat current highest bid
        let minRequired : Nat = switch (state.currentHighestBid) {
          case null state.config.startingBid;
          case (?bid) bid.amount + 1;
        };
        if (amount < minRequired) return #belowCurrentBid;
        // Record this bid
        let newBid : AuctionTypes.Bid = {
          bidder;
          amount;
          placedAt = Time.now();
        };
        state.currentHighestBid := ?newBid;
        state.bidCount += 1;
        // Process auto-bids from other bidders
        switch (autoBids.get(listingId)) {
          case null {};
          case (?bids) {
            // Find the highest-ceiling competing auto-bidder
            var bestAutoBid : ?AuctionTypes.AutoBid = null;
            for (ab in bids.values()) {
              if (ab.bidder != bidder) {
                switch (bestAutoBid) {
                  case null {
                    if (ab.maxAmount > amount) bestAutoBid := ?ab;
                  };
                  case (?best) {
                    if (ab.maxAmount > best.maxAmount) bestAutoBid := ?ab;
                  };
                };
              };
            };
            switch (bestAutoBid) {
              case null {};
              case (?ab) {
                // Step up to beat current bid
                let step : Nat = if (ab.stepAmount >= 10) ab.stepAmount else 10;
                let autoAmount : Nat = amount + step;
                if (autoAmount <= ab.maxAmount) {
                  let autoBidRecord : AuctionTypes.Bid = {
                    bidder = ab.bidder;
                    amount = autoAmount;
                    placedAt = Time.now();
                  };
                  state.currentHighestBid := ?autoBidRecord;
                  state.bidCount += 1;
                };
              };
            };
          };
        };
        #success(toView(state));
      };
    };
  };

  /// Register or update an auto-bid for a listing
  public func setAutoBid(
    autoBids : Map.Map<Nat, List.List<AuctionTypes.AutoBid>>,
    listingId : Nat,
    bidder : Principal,
    maxAmount : Nat,
    stepAmount : Nat,
  ) : Bool {
    let newAutoBid : AuctionTypes.AutoBid = { bidder; maxAmount; stepAmount };
    switch (autoBids.get(listingId)) {
      case null {
        let bids = List.empty<AuctionTypes.AutoBid>();
        bids.add(newAutoBid);
        autoBids.add(listingId, bids);
      };
      case (?bids) {
        // Replace existing auto-bid for this bidder if present
        var found = false;
        bids.mapInPlace(
          func(ab) {
            if (ab.bidder == bidder) {
              found := true;
              newAutoBid;
            } else { ab };
          }
        );
        if (not found) { bids.add(newAutoBid) };
      };
    };
    true;
  };

  /// Finalize an auction: mark ended, set winner if reserve met
  public func endAuction(
    auctions : Map.Map<Nat, AuctionStateInternal>,
    listingId : Nat,
  ) : ?AuctionTypes.AuctionStateView {
    switch (auctions.get(listingId)) {
      case null null;
      case (?state) {
        if (not state.ended) {
          state.ended := true;
          // Set winner if reserve met
          switch (state.currentHighestBid) {
            case (?bid) {
              if (bid.amount >= state.config.reservePrice) {
                state.winner := ?bid.bidder;
              };
            };
            case null {};
          };
        };
        ?toView(state);
      };
    };
  };

  /// Get the current auction state view for a listing
  public func getAuctionState(
    auctions : Map.Map<Nat, AuctionStateInternal>,
    listingId : Nat,
  ) : ?AuctionTypes.AuctionStateView {
    switch (auctions.get(listingId)) {
      case (?state) ?toView(state);
      case null null;
    };
  };

  /// Return all active (not-ended) auctions sorted by end time ascending
  public func listActiveAuctions(
    auctions : Map.Map<Nat, AuctionStateInternal>,
  ) : [AuctionTypes.AuctionStateView] {
    let results = List.empty<AuctionTypes.AuctionStateView>();
    for ((_, state) in auctions.entries()) {
      if (not state.ended) {
        results.add(toView(state));
      };
    };
    List.toArray(results);
  };

  /// Build a view from internal state (pure, no traps expected for valid input)
  public func toView(
    state : AuctionStateInternal,
  ) : AuctionTypes.AuctionStateView {
    let nowSec : Int = Time.now() / 1_000_000_000;
    let endSec : Int = state.config.auctionEndTime / 1_000_000_000;
    let timeRem : Int = endSec - nowSec;
    let highestAmount : ?Nat = switch (state.currentHighestBid) {
      case (?bid) ?bid.amount;
      case null null;
    };
    let highestBidder : ?Text = switch (state.currentHighestBid) {
      case (?bid) ?bid.bidder.toText();
      case null null;
    };
    let reserveMet : Bool = switch (state.currentHighestBid) {
      case (?bid) bid.amount >= state.config.reservePrice;
      case null false;
    };
    let winnerText : ?Text = switch (state.winner) {
      case (?p) ?p.toText();
      case null null;
    };
    {
      listingId = state.listingId;
      startingBid = state.config.startingBid;
      reservePrice = state.config.reservePrice;
      auctionEndTime = state.config.auctionEndTime;
      highestBidAmount = highestAmount;
      highestBidder = highestBidder;
      bidCount = state.bidCount;
      timeRemainingSeconds = timeRem;
      winner = winnerText;
      ended = state.ended;
      reserveMet;
    };
  };
};
