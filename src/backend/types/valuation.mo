module {
  public type ValuationInput = {
    monthlyRevenue : Nat;
    monthlyTraffic : Nat;
    domainAuthority : Nat;
    domainAgeYears : Nat;
    revenueTrend : { #up; #flat; #down };
    trafficDiversification : { #single; #mixed; #diverse };
    revenueType : { #recurring; #ads; #affiliate; #product };
  };

  public type ValuationResult = {
    estimatedMin : Nat;
    estimatedMax : Nat;
    baseMultiple : Nat;
    trafficBonus : Int;
    daBonus : Int;
    trendAdjustment : Int;
    riskScore : Nat;
    seoScore : Nat;
    growthPotential : Nat;
  };
};
