import List "mo:core/List";
import Nat "mo:core/Nat";
import ListingsTypes "../types/listings";
import SearchTypes "../types/search";
import SearchLib "../lib/search";
import Array "mo:core/Array";

mixin (listings : List.List<ListingsTypes.Listing>) {
  public query func smartSearch(
    searchQuery : SearchTypes.SearchQuery
  ) : async [ListingsTypes.Listing] {
    let filtered = SearchLib.filterListings(listings, searchQuery);
    SearchLib.rankByRelevance(filtered, searchQuery.sortBy);
  };

  public query func getRecommendations(
    searchQuery : SearchTypes.SearchQuery
  ) : async [ListingsTypes.Listing] {
    // Return listings close to but not exactly matching filters
    // Relax maxRevenue to 1.3x and include only high-revenue listings
    let relaxedQuery : SearchTypes.SearchQuery = switch (searchQuery.maxRevenue) {
      case (?max) {
        { searchQuery with
          minRevenue = null;
          maxRevenue = ?(max * 130 / 100);
        };
      };
      case null searchQuery;
    };
    let candidates = SearchLib.filterListings(listings, relaxedQuery);
    let ranked = SearchLib.rankByRelevance(candidates, #bestMatch);
    // Return up to 5 results
    let limit = Nat.min(5, ranked.size());
    Array.tabulate<ListingsTypes.Listing>(limit, func(i) = ranked[i]);
  };
};
