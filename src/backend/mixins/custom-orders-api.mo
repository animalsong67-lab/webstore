import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/custom-orders";
import CustomOrdersLib "../lib/custom-orders";

mixin (
  customOrders : List.List<Types.CustomOrder>,
) {
  public query func websiteTypes() : async [Text] {
    CustomOrdersLib.websiteTypes;
  };

  public shared ({ caller }) func submitCustomOrder(input : Types.CustomOrderInput) : async Nat {
    let id = customOrders.size();
    ignore CustomOrdersLib.submitOrder(customOrders, id, input, Time.now(), caller);
    id;
  };

  public query func getCustomOrders() : async [Types.CustomOrder] {
    CustomOrdersLib.getAll(customOrders);
  };
};
