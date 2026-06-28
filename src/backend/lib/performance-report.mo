import Time "mo:core/Time";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import PerfTypes "../types/performance-report";
import ListingsTypes "../types/listings";

module {
  func nicheNormalized(niche : Text) : Text {
    niche.toLower();
  };

  func platformNormalized(platform : Text) : Text {
    platform.toLower();
  };

  func calcSpeedScore(platform : Text, monthlyTraffic : Nat) : Nat {
    let base : Nat = switch (platformNormalized(platform)) {
      case "wordpress" 75;
      case "shopify"   85;
      case "custom"    90;
      case _           70;
    };
    if (monthlyTraffic > 10000) {
      let boosted = base + 5;
      if (boosted > 100) 100 else boosted;
    } else base;
  };

  func calcSeoScore(niche : Text, url : Text) : Nat {
    let n = nicheNormalized(niche);
    let u = url.toLower();
    var score : Nat = 65;
    // Niche relevance boost
    if (n == "saas" or n == "tech" or n == "technology") { score += 10 };
    if (n == "e-commerce" or n == "ecommerce" or n == "shop") { score += 8 };
    if (n == "health" or n == "wellness" or n == "fitness") { score += 7 };
    if (n == "finance" or n == "fintech") { score += 9 };
    if (n == "education" or n == "edtech" or n == "learning") { score += 8 };
    // URL keyword presence boost
    if (u.contains(#text n)) { score += 5 };
    if (score > 100) 100 else score;
  };

  func calcMobileScore(platform : Text) : Nat {
    switch (platformNormalized(platform)) {
      case "shopify"   95;
      case "wordpress" 80;
      case "custom"    85;
      case _           78;
    };
  };

  func calcSecurityScore(url : Text, platform : Text) : Nat {
    let u = url.toLower();
    let httpsBase : Nat = if (u.startsWith(#text "https")) 90 else 40;
    // Platform reputation bonus
    let platformBonus : Nat = switch (platformNormalized(platform)) {
      case "shopify" 5;
      case "custom"  3;
      case _         0;
    };
    let total = httpsBase + platformBonus;
    if (total > 100) 100 else total;
  };

  func calcSpamScore(listedDate : Int, monthlyRevenue : Nat) : Nat {
    // Lower spam risk = higher spam SCORE (inverse)
    // Older listings and higher revenue = lower spam risk = higher score
    let now = Time.now();
    let ageNs : Int = now - listedDate;
    let agedays : Int = ageNs / (86_400 * 1_000_000_000);
    var score : Nat = 50;
    if (agedays > 365) { score += 25 } else if (agedays > 90) { score += 15 } else if (agedays > 30) { score += 8 };
    if (monthlyRevenue > 5000) { score += 15 } else if (monthlyRevenue > 1000) { score += 10 } else if (monthlyRevenue > 100) { score += 5 };
    if (score > 100) 100 else score;
  };

  func calcGrade(avg : Nat) : Text {
    if (avg >= 90) "A"
    else if (avg >= 80) "B"
    else if (avg >= 70) "C"
    else if (avg >= 60) "D"
    else "F";
  };

  public func generateReport(
    listing : ListingsTypes.Listing,
    listingId : Text,
  ) : PerfTypes.PerformanceReport {
    let speed    = calcSpeedScore(listing.platform, listing.monthlyTraffic);
    let seo      = calcSeoScore(listing.niche, listing.url);
    let mobile   = calcMobileScore(listing.platform);
    let security = calcSecurityScore(listing.url, listing.platform);
    let spam     = calcSpamScore(listing.listedDate, listing.monthlyRevenue);
    let avg      = (speed + seo + mobile + security + spam) / 5;
    {
      listingId;
      speedScore    = speed;
      seoScore      = seo;
      mobileScore   = mobile;
      securityScore = security;
      spamScore     = spam;
      overallGrade  = calcGrade(avg);
      reportedAt    = Time.now();
    };
  };

  func nicheColors(niche : Text) : (Text, Text, Text) {
    let n = nicheNormalized(niche);
    if (n == "saas" or n == "tech" or n == "technology") {
      ("#2563EB", "#1E40AF", "#3B82F6");
    } else if (n == "e-commerce" or n == "ecommerce" or n == "shop") {
      ("#F97316", "#EA580C", "#FB923C");
    } else if (n == "health" or n == "wellness" or n == "fitness") {
      ("#16A34A", "#15803D", "#22C55E");
    } else if (n == "education" or n == "edtech" or n == "learning") {
      ("#7C3AED", "#6D28D9", "#8B5CF6");
    } else if (n == "finance" or n == "fintech") {
      ("#0D9488", "#0F766E", "#14B8A6");
    } else {
      ("#2563EB", "#1E40AF", "#3B82F6");
    };
  };

  public func generateMockup(niche : Text, description : Text) : PerfTypes.WebsiteBuilderMockup {
    let n = nicheNormalized(niche);
    let (primary, secondary, accent) = nicheColors(niche);

    let (headline, subheadline, ctaText, ctaSubtext) : (Text, Text, Text, Text) =
      if (n == "saas" or n == "tech" or n == "technology") {
        (
          "Transform Your Business with Powerful Software",
          "Automate, scale, and grow — all from one intelligent platform.",
          "Start Free Trial",
          "No credit card required. Cancel anytime.",
        );
      } else if (n == "e-commerce" or n == "ecommerce" or n == "shop") {
        (
          "Shop the Latest Trends at Unbeatable Prices",
          "Discover thousands of products, delivered fast to your door.",
          "Shop Now",
          "Free shipping on orders over ₹500.",
        );
      } else if (n == "health" or n == "wellness" or n == "fitness") {
        (
          "Your Journey to a Healthier Life Starts Here",
          "Expert guidance, proven plans, and a supportive community.",
          "Get Started Today",
          "Join 10,000+ members living healthier lives.",
        );
      } else if (n == "education" or n == "edtech" or n == "learning") {
        (
          "Unlock Your Potential with Expert-Led Courses",
          "Learn at your own pace. Earn certificates. Advance your career.",
          "Explore Courses",
          "Over 500 courses. Lifetime access.",
        );
      } else if (n == "finance" or n == "fintech") {
        (
          "Smart Money Moves for a Secure Financial Future",
          "Track investments, plan budgets, and grow your wealth effortlessly.",
          "Open Free Account",
          "Trusted by 50,000+ investors worldwide.",
        );
      } else {
        (
          "Welcome to " # niche # " — Built for Success",
          description,
          "Get Started",
          "Join thousands of satisfied customers.",
        );
      };

    let sections : [PerfTypes.MockupSection] =
      if (n == "saas" or n == "tech" or n == "technology") {
        [
          { title = "Features"; body = "Powerful tools designed for teams of all sizes: real-time collaboration, analytics, integrations, and more." },
          { title = "Pricing"; body = "Flexible plans starting at ₹999/month. Scale up or down as your business grows." },
          { title = "Testimonials"; body = "Trusted by 5,000+ businesses. See why teams love our platform." },
          { title = "Integrations"; body = "Connect with 100+ apps including Slack, Zapier, Google Workspace, and more." },
        ];
      } else if (n == "e-commerce" or n == "ecommerce" or n == "shop") {
        [
          { title = "Featured Products"; body = "Hand-picked bestsellers, new arrivals, and exclusive deals updated daily." },
          { title = "Why Shop With Us"; body = "100% secure checkout, easy returns, and 24/7 customer support." },
          { title = "Customer Reviews"; body = "Thousands of 5-star reviews from happy customers across India." },
          { title = "Our Categories"; body = "Browse fashion, electronics, home decor, beauty, and more." },
        ];
      } else if (n == "health" or n == "wellness" or n == "fitness") {
        [
          { title = "Our Programs"; body = "Weight loss, muscle gain, mental wellness — we have a program for every goal." },
          { title = "Expert Coaches"; body = "Work with certified trainers, nutritionists, and wellness coaches." },
          { title = "Success Stories"; body = "Real results from real people. Read transformation stories from our community." },
          { title = "Free Resources"; body = "Healthy recipes, workout videos, and wellness tips — all free." },
        ];
      } else if (n == "education" or n == "edtech" or n == "learning") {
        [
          { title = "Popular Courses"; body = "Web development, data science, design, marketing — all in one place." },
          { title = "Learn from Experts"; body = "Courses taught by industry professionals with real-world experience." },
          { title = "Certificates"; body = "Earn recognized certificates to showcase your new skills." },
          { title = "Community"; body = "Connect with learners worldwide. Join study groups and forums." },
        ];
      } else if (n == "finance" or n == "fintech") {
        [
          { title = "Investment Tools"; body = "Stocks, mutual funds, crypto — manage all your investments in one dashboard." },
          { title = "Budget Planner"; body = "Set spending limits, track expenses, and save automatically each month." },
          { title = "Security"; body = "Bank-grade encryption and two-factor authentication keep your money safe." },
          { title = "Expert Insights"; body = "Weekly market reports and personalised financial tips from our analysts." },
        ];
      } else {
        [
          { title = "About Us"; body = description },
          { title = "Our Services"; body = "Delivering quality and value to every customer we serve." },
          { title = "Why Choose Us"; body = "Experienced team, competitive pricing, and outstanding support." },
          { title = "Contact"; body = "We'd love to hear from you. Reach out anytime." },
        ];
      };

    {
      headline;
      subheadline;
      sections;
      primaryColor   = primary;
      secondaryColor = secondary;
      accentColor    = accent;
      ctaText;
      ctaSubtext;
    };
  };
};
