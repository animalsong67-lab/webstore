import List "mo:core/List";
import PerfTypes "../types/performance-report";
import PerfLib "../lib/performance-report";
import ListingsTypes "../types/listings";

mixin (
  listings : List.List<ListingsTypes.Listing>,
) {
  public shared func generatePerformanceReport(input : PerfTypes.PerformanceReportInput) : async PerfTypes.PerformanceReport {
    let listingIdNat : ?Nat = do {
      var result : ?Nat = null;
      let trimmed = input.listingId;
      var n : Nat = 0;
      var valid = trimmed.size() > 0;
      for (c in trimmed.chars()) {
        let digit = switch c {
          case '0' 0; case '1' 1; case '2' 2; case '3' 3; case '4' 4;
          case '5' 5; case '6' 6; case '7' 7; case '8' 8; case '9' 9;
          case _ { valid := false; 0 };
        };
        if valid { n := n * 10 + digit };
      };
      if valid { result := ?n };
      result;
    };

    let listing : ?ListingsTypes.Listing = switch listingIdNat {
      case (?id) listings.find(func(l) { l.id == id });
      case null null;
    };

    switch listing {
      case (?l) PerfLib.generateReport(l, input.listingId);
      case null {
        {
          listingId     = input.listingId;
          speedScore    = 70;
          seoScore      = 65;
          mobileScore   = 75;
          securityScore = 50;
          spamScore     = 50;
          overallGrade  = "D";
          reportedAt    = 0;
        };
      };
    };
  };

  public shared func generateWebsiteBuilderMockup(niche : Text, description : Text) : async PerfTypes.WebsiteBuilderMockup {
    PerfLib.generateMockup(niche, description);
  };
};
