import Types "../types/revenue-verification";

module {
  // Build a new verification request record
  public func newRequest(
    id : Nat,
    listingId : Nat,
    sellerId : Text,
    claimedMonthlyRevenue : Float,
    claimedTrafficVolume : Nat,
    submittedAt : Int,
  ) : Types.VerificationRequest {
    {
      id;
      listingId;
      sellerId;
      claimedMonthlyRevenue;
      claimedTrafficVolume;
      status = #pending;
      verifiedMetrics = null;
      submittedAt;
      reviewedAt = null;
      adminNote = null;
    };
  };

  // Build a VerifiedMetrics record from fetched-or-estimated data per source.
  // Build a VerifiedMetrics record from fetched-or-estimated data per source.
  // Called synchronously after async HTTP results are available in the mixin.
  public func buildMetrics(
    breakdowns : [Types.SourceBreakdown],
    now : Int,
  ) : Types.VerifiedMetrics {
    var totalRevenue : Float = 0.0;
    var totalTraffic : Nat = 0;
    for (b in breakdowns.vals()) {
      totalRevenue += b.monthlyRevenue;
      totalTraffic += b.trafficVolume;
    };
    // Derive trend: stable by default; callers can override once historical data exists
    {
      monthlyRevenue = totalRevenue;
      trafficVolume = totalTraffic;
      revenueTrend = #flat;
      sourceBreakdowns = breakdowns;
      fetchedAt = now;
    };
  };

  // Apply admin approval to a request, embedding fetched metrics
  public func approve(
    self : Types.VerificationRequest,
    metrics : Types.VerifiedMetrics,
    reviewedAt : Int,
  ) : Types.VerificationRequest {
    { self with
      status = #verified;
      verifiedMetrics = ?metrics;
      reviewedAt = ?reviewedAt;
      adminNote = null;
    };
  };

  // Apply admin rejection to a request
  public func reject(
    self : Types.VerificationRequest,
    reason : Text,
    reviewedAt : Int,
  ) : Types.VerificationRequest {
    { self with
      status = #rejected reason;
      reviewedAt = ?reviewedAt;
      adminNote = ?reason;
    };
  };

  // Build public badge from an approved request
  public func toBadge(self : Types.VerificationRequest) : ?Types.VerifiedBadge {
    switch (self.status, self.verifiedMetrics) {
      case (#verified, ?metrics) {
        ?{
          listingId = self.listingId;
          monthlyRevenue = metrics.monthlyRevenue;
          trafficVolume = metrics.trafficVolume;
          trend = metrics.revenueTrend;
          sourceBreakdowns = metrics.sourceBreakdowns;
        };
      };
      case _ { null };
    };
  };
};
