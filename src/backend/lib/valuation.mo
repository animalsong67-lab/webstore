import ValuationTypes "../types/valuation";
import Nat "mo:core/Nat";

module {
  public func calculateValuation(input : ValuationTypes.ValuationInput) : ValuationTypes.ValuationResult {
    let baseMultiple : Int = 30;

    let trafficBonus : Int =
      if (input.monthlyTraffic >= 50000) 8
      else if (input.monthlyTraffic >= 10000) 4
      else 0;

    let daBonus : Int =
      if (input.domainAuthority >= 70) 5
      else if (input.domainAuthority >= 40) 2
      else 0;

    let trendAdjustment : Int =
      switch (input.revenueTrend) {
        case (#up) 3;
        case (#down) -3;
        case (#flat) 0;
      };

    let diversBonus : Int =
      switch (input.trafficDiversification) {
        case (#diverse) 2;
        case (#single) -1;
        case (#mixed) 0;
      };

    let recurringBonus : Int =
      switch (input.revenueType) {
        case (#recurring) 4;
        case (_) 0;
      };

    let totalMultiple : Int = baseMultiple + trafficBonus + daBonus + trendAdjustment + diversBonus + recurringBonus;
    let totalMultipleNat : Nat = if (totalMultiple > 0) totalMultiple.toNat() else 1;

    let estimatedMin : Nat = input.monthlyRevenue * totalMultipleNat * 80 / 100;
    let estimatedMax : Nat = input.monthlyRevenue * totalMultipleNat * 120 / 100;

    let daRiskBonus : Int = if (input.domainAuthority >= 40) 10 else 0;
    let diversRiskBonus : Int = if (input.trafficDiversification == #diverse) 10 else 0;
    let riskRaw : Int = 100 - (trendAdjustment * 5 + daRiskBonus + diversRiskBonus);
    let riskScore : Nat = if (riskRaw < 0) 0 else if (riskRaw > 100) 100 else riskRaw.toNat();

    let trafficSeoBonus : Nat = if (input.monthlyTraffic >= 10000) 20 else 5;
    let seoScoreRaw : Nat = input.domainAuthority + trafficSeoBonus;
    let seoScore : Nat = Nat.min(100, seoScoreRaw);

    let growthPotential : Nat =
      switch (input.revenueTrend) {
        case (#up) 85;
        case (#flat) 60;
        case (#down) 35;
      };

    {
      estimatedMin;
      estimatedMax;
      baseMultiple = baseMultiple.toNat();
      trafficBonus;
      daBonus;
      trendAdjustment;
      riskScore;
      seoScore;
      growthPotential;
    };
  };
};
