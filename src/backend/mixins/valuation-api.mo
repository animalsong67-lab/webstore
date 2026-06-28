import ValuationTypes "../types/valuation";
import ValuationLib "../lib/valuation";

mixin () {
  public query func calculateValuation(
    input : ValuationTypes.ValuationInput
  ) : async ValuationTypes.ValuationResult {
    ValuationLib.calculateValuation(input);
  };
};
