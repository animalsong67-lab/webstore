import List "mo:core/List";
import Types "../types/custom-orders";

module {
  public let websiteTypes : [Text] = [
    "E-Commerce",
    "Blog/Content",
    "Portfolio",
    "Business/Corporate",
    "Landing Page",
    "Educational",
    "News/Magazine",
    "Social Community",
    "Real Estate",
    "Restaurant/Food",
    "Healthcare",
    "NGO/Non-Profit",
  ];

  public func submitOrder(
    orders : List.List<Types.CustomOrder>,
    nextId : Nat,
    input : Types.CustomOrderInput,
    now : Int,
    submittedBy : Principal,
  ) : Nat {
    let order : Types.CustomOrder = {
      id = nextId;
      websiteType = input.websiteType;
      budget = input.budget;
      description = input.description;
      requirements = input.requirements;
      contactEmail = input.contactEmail;
      contactName = input.contactName;
      timeline = input.timeline;
      submittedAt = now;
      status = "pending";
      submittedBy = submittedBy;
      sellerNotes = null;
    };
    orders.add(order);
    nextId + 1;
  };

  public func getAll(orders : List.List<Types.CustomOrder>) : [Types.CustomOrder] {
    orders.toArray();
  };
};
