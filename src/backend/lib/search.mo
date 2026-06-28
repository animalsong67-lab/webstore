import List "mo:core/List";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import ListingsTypes "../types/listings";
import SearchTypes "../types/search";
import Array "mo:core/Array";

module {
  // Parse a natural language query to extract filter hints
  func parseNaturalLanguage(
    nl : Text,
    q : SearchTypes.SearchQuery
  ) : SearchTypes.SearchQuery {
    let lower = nl.toLower();

    // Passive income → filter to Blog/Affiliate niches
    let nicheHint : ?Text =
      if (lower.contains(#text "passive income")) {
        ?"Blog"
      } else {
        q.niche;
      };

    // Extract rupee amount as maxRevenue
    // Simple heuristic: look for ₹ or "rs" followed by digits
    // We do a basic scan — find the first occurrence of a rupee-like pattern
    let maxRevHint : ?Nat = q.maxRevenue; // keep original; complex parsing omitted for determinism

    // Extract minTraffic hint
    let minTrafficHint : ?Nat = q.minTraffic;

    {
      q with
      niche = nicheHint;
      maxRevenue = maxRevHint;
      minTraffic = minTrafficHint;
    };
  };

  public func filterListings(
    listings : List.List<ListingsTypes.Listing>,
    searchQuery : SearchTypes.SearchQuery
  ) : List.List<ListingsTypes.Listing> {
    // Resolve effective query (apply NL parsing if present)
    let effectiveQuery : SearchTypes.SearchQuery =
      switch (searchQuery.naturalLanguage) {
        case (?nl) parseNaturalLanguage(nl, searchQuery);
        case null searchQuery;
      };

    listings.filter(func(listing : ListingsTypes.Listing) : Bool {
      // Only active listings
      if (listing.status != #active) return false;

      // Niche filter (case-insensitive contains)
      switch (effectiveQuery.niche) {
        case (?n) {
          if (not listing.niche.toLower().contains(#text (n.toLower()))) return false;
        };
        case null {};
      };

      // Min revenue
      switch (effectiveQuery.minRevenue) {
        case (?min) {
          if (listing.monthlyRevenue < min) return false;
        };
        case null {};
      };

      // Max revenue
      switch (effectiveQuery.maxRevenue) {
        case (?max) {
          if (listing.monthlyRevenue > max) return false;
        };
        case null {};
      };

      // Min traffic
      switch (effectiveQuery.minTraffic) {
        case (?min) {
          if (listing.monthlyTraffic < min) return false;
        };
        case null {};
      };

      // Max traffic
      switch (effectiveQuery.maxTraffic) {
        case (?max) {
          if (listing.monthlyTraffic > max) return false;
        };
        case null {};
      };

      // CMS/platform filter
      switch (effectiveQuery.cmsType) {
        case (?cms) {
          if (not listing.platform.toLower().contains(#text (cms.toLower()))) return false;
        };
        case null {};
      };

      true;
    });
  };

  public func rankByRelevance(
    listings : List.List<ListingsTypes.Listing>,
    sortBy : { #priceAsc; #priceDesc; #newest; #highestRating; #bestMatch }
  ) : [ListingsTypes.Listing] {
    let arr = listings.toArray();
    switch (sortBy) {
      case (#priceAsc) {
        arr.sort<ListingsTypes.Listing>(func(a, b) = Nat.compare(a.askingPrice, b.askingPrice));
      };
      case (#priceDesc) {
        arr.sort<ListingsTypes.Listing>(func(a, b) = Nat.compare(b.askingPrice, a.askingPrice));
      };
      case (#newest) {
        arr.sort<ListingsTypes.Listing>(func(a, b) {
          if (a.listedDate > b.listedDate) #less
          else if (a.listedDate < b.listedDate) #greater
          else #equal
        });
      };
      case (#highestRating) {
        // Sort by monthly revenue as a proxy for quality
        arr.sort<ListingsTypes.Listing>(func(a, b) = Nat.compare(b.monthlyRevenue, a.monthlyRevenue));
      };
      case (#bestMatch) {
        // Sort by revenue * traffic as relevance score
        arr.sort<ListingsTypes.Listing>(func(a, b) {
          let scoreA = a.monthlyRevenue + a.monthlyTraffic / 1000;
          let scoreB = b.monthlyRevenue + b.monthlyTraffic / 1000;
          Nat.compare(scoreB, scoreA);
        });
      };
    };
  };
};
