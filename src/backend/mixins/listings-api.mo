import List "mo:core/List";
import Time "mo:core/Time";
import ListingsTypes "../types/listings";
import ListingsLib "../lib/listings";

mixin (
  listings : List.List<ListingsTypes.Listing>,
  sellerSubmissions : List.List<ListingsTypes.SellerSubmission>,
  nextListingId : Nat,
) {
  public query func getListings() : async [ListingsTypes.Listing] {
    ListingsLib.getActiveListings(listings);
  };

  public query func getListing(id : Nat) : async ?ListingsTypes.Listing {
    ListingsLib.getListingById(listings, id);
  };

  public query func filterListings(filter : ListingsTypes.ListingFilter) : async [ListingsTypes.Listing] {
    ListingsLib.filterListings(listings, filter);
  };

  public shared func submitWebsite(input : ListingsTypes.SellerSubmissionInput) : async () {
    ListingsLib.submitListing(sellerSubmissions, input, Time.now());
  };
};
