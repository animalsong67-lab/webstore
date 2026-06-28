import CommonTypes "common";

module {
  public type Timestamp = CommonTypes.Timestamp;

  public type TrustScore = {
    score : Nat;
    tier : { #trusted; #established; #new; #caution };
    transactionCount : Nat;
    avgRating : Nat;
    responseTimeHours : Nat;
    completionRate : Nat;
    isVerified : Bool;
    hasRedFlags : Bool;
    accountAgeDays : Nat;
  };

  public type SellerReview = {
    id : Text;
    listingId : Text;
    reviewerName : Text;
    rating : Nat;
    comment : Text;
    timestamp : Timestamp;
  };

  public type SellerReviewInput = {
    listingId : Text;
    sellerId : Text;
    reviewerName : Text;
    rating : Nat;
    comment : Text;
  };
};
