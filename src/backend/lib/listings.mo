import List "mo:core/List";
import Types "../types/listings";

module {
  public func getActiveListings(
    listings : List.List<Types.Listing>
  ) : [Types.Listing] {
    listings.filter(func(l) { l.status == #active }).toArray();
  };

  public func getListingById(
    listings : List.List<Types.Listing>,
    id : Nat,
  ) : ?Types.Listing {
    listings.find(func(l) { l.id == id });
  };

  public func filterListings(
    listings : List.List<Types.Listing>,
    filter : Types.ListingFilter,
  ) : [Types.Listing] {
    listings.filter(func(l) {
      if (l.status != #active) { return false };
      switch (filter.niche) {
        case (?n) { if (l.niche != n) { return false } };
        case null {};
      };
      switch (filter.platform) {
        case (?p) { if (l.platform != p) { return false } };
        case null {};
      };
      switch (filter.maxPrice) {
        case (?mp) { if (l.askingPrice > mp) { return false } };
        case null {};
      };
      true;
    }).toArray();
  };

  public func submitListing(
    submissions : List.List<Types.SellerSubmission>,
    input : Types.SellerSubmissionInput,
    now : Int,
  ) : () {
    let submission : Types.SellerSubmission = {
      url = input.url;
      niche = input.niche;
      platform = input.platform;
      monthlyRevenue = input.monthlyRevenue;
      monthlyTraffic = input.monthlyTraffic;
      askingPrice = input.askingPrice;
      description = input.description;
      contactEmail = input.contactEmail;
      submittedAt = now;
    };
    submissions.add(submission);
  };

  public func seedListings(
    listings : List.List<Types.Listing>,
    nextId : Nat,
    now : Int,
  ) : Nat {
    let seeds : [Types.Listing] = [
      {
        id = nextId;
        title = "NicheBlog.in — Hindi Tech & Mobile Review Blog";
        description = "Established Hindi tech blog with 3 years of organic growth. Reviews mobile phones, gadgets, and apps for Indian audience. AdSense monetized. Consistent traffic from Google India. Domain authority 28. All content original.";
        niche = "Technology";
        platform = "WordPress";
        monthlyTraffic = 45000;
        monthlyRevenue = 6500;
        askingPrice = 85000;
        url = "https://nicheblog.in";
        sellerName = "Rajesh Kumar";
        listedDate = now;
        status = #active;
      },
      {
        id = nextId + 1;
        title = "CraftStore.shop — Handmade Products eCommerce";
        description = "Profitable Shopify store selling handmade Indian crafts and gifts. Established supplier network, repeat customers, 4.7-star rating on 340+ reviews. Instagram following of 12K. Includes brand assets, social media accounts, and supplier contacts.";
        niche = "eCommerce";
        platform = "Shopify";
        monthlyTraffic = 28000;
        monthlyRevenue = 18500;
        askingPrice = 220000;
        url = "https://craftstore.shop";
        sellerName = "Priya Sharma";
        listedDate = now;
        status = #active;
      },
    ];

    for (seed in seeds.values()) {
      listings.add(seed);
    };

    nextId + 2;
  };
};
