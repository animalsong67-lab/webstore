import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Types "../types/revenue-verification";
import RevLib "../lib/revenue-verification";
import Int "mo:core/Int";

// State injected:
//   requests       - List of all verification requests
//   credentials    - Map<listingId, [CredentialToken]> — NEVER exposed via public API
//   nextRequestId  - Monotonic counter wrapped in a mutable record
mixin (
  requests : List.List<Types.VerificationRequest>,
  credentials : Map.Map<Nat, [Types.CredentialToken]>,
  nextRequestId : { var value : Nat },
) {
  // --- Internal helpers ---

  // Estimate metrics from credential tokens (simulates fetching per source).
  // Each token contributes a proportional share of claimed figures.
  // Real implementation would perform async HTTP outcalls per source;
  // those calls belong in an async wrapper that passes results here.
  func estimateBreakdowns(
    tokens : [Types.CredentialToken],
    claimedRevenue : Float,
    claimedTraffic : Nat,
  ) : [Types.SourceBreakdown] {
    let n = tokens.size();
    if (n == 0) return [];
    let share = claimedRevenue / Int.fromNat(n).toFloat();
    let trafficShare = claimedTraffic / n;
    let result = List.empty<Types.SourceBreakdown>();
    for (t in tokens.vals()) {
      result.add({
        source = t.source;
        monthlyRevenue = share;
        trafficVolume = trafficShare;
      });
    };
    result.toArray();
  };

  // Fetch request by id; traps if not found
  func getRequest(requestId : Nat) : Types.VerificationRequest {
    switch (requests.find(func(r : Types.VerificationRequest) : Bool { r.id == requestId })) {
      case (?r) r;
      case null Runtime.trap("Verification request not found");
    };
  };

  // Replace a request in the list by id (update in place)
  func updateRequest(updated : Types.VerificationRequest) {
    requests.mapInPlace(func(r : Types.VerificationRequest) : Types.VerificationRequest {
      if (r.id == updated.id) updated else r;
    });
  };

  // --- Public API ---

  // Seller: submit a verification request linking credential tokens
  public shared ({ caller }) func submitVerificationRequest(
    listingId : Nat,
    claimedMonthlyRevenue : Float,
    claimedTrafficVolume : Nat,
    credentialTokens : [Types.CredentialToken],
  ) : async Nat {
    let sellerId = caller.toText();
    let id = nextRequestId.value;
    nextRequestId.value += 1;
    let req = RevLib.newRequest(
      id,
      listingId,
      sellerId,
      claimedMonthlyRevenue,
      claimedTrafficVolume,
      Time.now(),
    );
    requests.add(req);
    // Store credentials securely — never returned through any public query
    credentials.add(listingId, credentialTokens);
    id;
  };

  // Seller / admin: re-fetch metrics for a listing using stored tokens.
  // In production this would make HTTP outcalls per source;
  // here we use the stored credential tokens to build estimated breakdowns.
  public shared ({ caller }) func refreshVerificationMetrics(listingId : Nat) : async () {
    ignore caller;
    // Find the active verified or pending request for this listing
    let reqOpt = requests.find(func(r : Types.VerificationRequest) : Bool {
      r.listingId == listingId and (r.status == #verified or r.status == #pending);
    });
    switch (reqOpt) {
      case (?req) {
        let tokens = switch (credentials.get(listingId)) {
          case (?t) t;
          case null [];
        };
        let breakdowns = estimateBreakdowns(
          tokens,
          req.claimedMonthlyRevenue,
          req.claimedTrafficVolume,
        );
        let metrics = RevLib.buildMetrics(breakdowns, Time.now());
        let updated = { req with verifiedMetrics = ?metrics };
        updateRequest(updated);
      };
      case null {}; // no active request — nothing to refresh
    };
  };

  // Admin: list all pending verification requests
  public shared ({ caller }) func adminListPendingVerifications() : async [Types.VerificationRequest] {
    ignore caller;
    let pending = requests.filter(func(r : Types.VerificationRequest) : Bool {
      r.status == #pending;
    });
    pending.toArray();
  };

  // Admin: approve a verification request — fetches fresh metrics and marks verified
  public shared ({ caller }) func adminApproveVerification(requestId : Nat) : async () {
    ignore caller;
    let req = getRequest(requestId);
    let tokens = switch (credentials.get(req.listingId)) {
      case (?t) t;
      case null [];
    };
    let breakdowns = estimateBreakdowns(
      tokens,
      req.claimedMonthlyRevenue,
      req.claimedTrafficVolume,
    );
    let metrics = RevLib.buildMetrics(breakdowns, Time.now());
    let approved = req.approve(metrics, Time.now());
    updateRequest(approved);
  };

  // Admin: reject a verification request
  public shared ({ caller }) func adminRejectVerification(requestId : Nat, reason : Text) : async () {
    ignore caller;
    let req = getRequest(requestId);
    let rejected = req.reject(reason, Time.now());
    updateRequest(rejected);
  };

  // Public query: get verification status for a listing
  public query func getVerificationStatus(listingId : Nat) : async Types.VerificationStatus {
    switch (requests.find(func(r : Types.VerificationRequest) : Bool { r.listingId == listingId })) {
      case (?r) r.status;
      case null #unverified;
    };
  };

  // Public query: get verified badge data for a listing (only if admin-approved)
  public query func getVerifiedBadge(listingId : Nat) : async ?Types.VerifiedBadge {
    switch (requests.find(func(r : Types.VerificationRequest) : Bool {
      r.listingId == listingId and r.status == #verified;
    })) {
      case (?r) r.toBadge();
      case null null;
    };
  };
};
