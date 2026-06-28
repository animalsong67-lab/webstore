module {
  public type PerformanceReport = {
    listingId : Text;
    speedScore : Nat;
    seoScore : Nat;
    mobileScore : Nat;
    securityScore : Nat;
    spamScore : Nat;
    overallGrade : Text;
    reportedAt : Int;
  };

  public type PerformanceReportInput = {
    listingId : Text;
  };

  public type MockupSection = {
    title : Text;
    body : Text;
  };

  public type WebsiteBuilderMockup = {
    headline : Text;
    subheadline : Text;
    sections : [MockupSection];
    primaryColor : Text;
    secondaryColor : Text;
    accentColor : Text;
    ctaText : Text;
    ctaSubtext : Text;
  };
};
