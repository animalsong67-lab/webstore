module {
  public type SearchQuery = {
    naturalLanguage : ?Text;
    niche : ?Text;
    minRevenue : ?Nat;
    maxRevenue : ?Nat;
    minTraffic : ?Nat;
    maxTraffic : ?Nat;
    minSeoScore : ?Nat;
    monetizationType : ?Text;
    minAgeYears : ?Nat;
    countryTraffic : ?Text;
    cmsType : ?Text;
    sortBy : { #priceAsc; #priceDesc; #newest; #highestRating; #bestMatch };
  };
};
