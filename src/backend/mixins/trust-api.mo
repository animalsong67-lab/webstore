import List "mo:core/List";
import Time "mo:core/Time";
import TrustTypes "../types/trust-score";
import TrustLib "../lib/trust-score";

mixin (reviews : List.List<TrustTypes.SellerReview>) {
  public query func getSellerTrustScore(
    sellerId : Text
  ) : async TrustTypes.TrustScore {
    TrustLib.calculateTrustScore(sellerId, reviews);
  };

  public shared func submitReview(
    review : TrustTypes.SellerReviewInput
  ) : async { #ok : Text; #err : Text } {
    let id = review.sellerId # "-" # review.listingId # "-" # debug_show(Time.now());
    let newReview : TrustTypes.SellerReview = {
      id;
      listingId = review.listingId;
      reviewerName = review.reviewerName;
      rating = review.rating;
      comment = review.comment;
      timestamp = Time.now();
    };
    reviews.add(newReview);
    #ok(id);
  };

  public query func getReviews(
    listingId : Text
  ) : async [TrustTypes.SellerReview] {
    let filtered = reviews.filter(func(r : TrustTypes.SellerReview) : Bool {
      r.listingId == listingId
    });
    filtered.toArray();
  };
};
