import List "mo:core/List";
import Nat "mo:core/Nat";
import TrustTypes "../types/trust-score";

module {
  public func calculateTrustScore(
    sellerId : Text,
    reviews : List.List<TrustTypes.SellerReview>
  ) : TrustTypes.TrustScore {
    // Filter reviews where sellerId matches the listingId prefix convention
    // SellerReview stores sellerId in the id field as "<sellerId>-<uuid>"
    // We match on the sellerId text stored in the review id or via the input's sellerId field
    // Since SellerReview doesn't have a sellerId field directly, we match on review.id containing sellerId
    let sellerReviews = reviews.filter(func(r : TrustTypes.SellerReview) : Bool {
      r.id.contains(#text sellerId)
    });

    let transactionCount = sellerReviews.size();

    let avgRating : Nat =
      if (transactionCount == 0) {
        75;
      } else {
        var total : Nat = 0;
        for (r in sellerReviews.values()) {
          total += r.rating;
        };
        total / transactionCount;
      };

    let responseTimeHours : Nat = 24;

    let completionRate : Nat =
      if (transactionCount > 10) 95
      else if (transactionCount > 3) 80
      else 60;

    let accountAgeDays : Nat = 365;

    let scoreRaw : Nat = (transactionCount * 2) + (avgRating * 15) + 10;
    let score : Nat = Nat.min(100, scoreRaw);

    let tier : { #trusted; #established; #new; #caution } =
      if (score >= 80) #trusted
      else if (score >= 60) #established
      else if (score >= 30) #new
      else #caution;

    let hasRedFlags : Bool = transactionCount == 0;
    let isVerified : Bool = transactionCount > 5;

    {
      score;
      tier;
      transactionCount;
      avgRating;
      responseTimeHours;
      completionRate;
      isVerified;
      hasRedFlags;
      accountAgeDays;
    };
  };
};
