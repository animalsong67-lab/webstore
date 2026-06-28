import CommonTypes "common";

module {
  public type Timestamp = CommonTypes.Timestamp;
  public type ListingStatus = CommonTypes.ListingStatus;

  public type Listing = {
    id : Nat;
    title : Text;
    description : Text;
    niche : Text;
    platform : Text;
    monthlyTraffic : Nat;
    monthlyRevenue : Nat;
    askingPrice : Nat;
    url : Text;
    sellerName : Text;
    listedDate : Timestamp;
    status : ListingStatus;
  };

  public type ListingFilter = {
    niche : ?Text;
    platform : ?Text;
    maxPrice : ?Nat;
  };

  public type SellerSubmission = {
    url : Text;
    niche : Text;
    platform : Text;
    monthlyRevenue : Nat;
    monthlyTraffic : Nat;
    askingPrice : Nat;
    description : Text;
    contactEmail : Text;
    submittedAt : Timestamp;
  };

  public type SellerSubmissionInput = {
    url : Text;
    niche : Text;
    platform : Text;
    monthlyRevenue : Nat;
    monthlyTraffic : Nat;
    askingPrice : Nat;
    description : Text;
    contactEmail : Text;
  };
};
