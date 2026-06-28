module {
  public type CredentialSource = {
    #googleAnalytics;
    #googleAdSense;
    #stripe;
    #paypal;
  };

  public type CredentialToken = {
    source : CredentialSource;
    token : Text;
    refreshToken : ?Text;
  };

  public type VerificationStatus = {
    #unverified;
    #pending;
    #verified;
    #rejected : Text; // reason
  };

  public type RevenueTrend = {
    #up;
    #down;
    #flat;
  };

  public type SourceBreakdown = {
    source : CredentialSource;
    monthlyRevenue : Float;
    trafficVolume : Nat;
  };

  public type VerifiedMetrics = {
    monthlyRevenue : Float;
    trafficVolume : Nat;
    revenueTrend : RevenueTrend;
    sourceBreakdowns : [SourceBreakdown];
    fetchedAt : Int;
  };

  public type VerificationRequest = {
    id : Nat;
    listingId : Nat;
    sellerId : Text;
    claimedMonthlyRevenue : Float;
    claimedTrafficVolume : Nat;
    status : VerificationStatus;
    verifiedMetrics : ?VerifiedMetrics;
    submittedAt : Int;
    reviewedAt : ?Int;
    adminNote : ?Text;
  };

  // Public-facing badge data (no credentials exposed)
  public type VerifiedBadge = {
    listingId : Nat;
    monthlyRevenue : Float;
    trafficVolume : Nat;
    trend : RevenueTrend;
    sourceBreakdowns : [SourceBreakdown];
  };
};
