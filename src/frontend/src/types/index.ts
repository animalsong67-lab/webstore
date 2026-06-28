export type {
  Listing,
  ListingFilter,
  SellerSubmissionInput,
  ContactMessageInput,
  CustomOrderInput,
  CustomOrder,
  ChatMessage,
  ValuationInput,
  ValuationResult,
  TrustScore,
  SellerReview,
  SellerReviewInput,
  SearchQuery,
} from "../backend.d";

export {
  Variant_ads_recurring_affiliate_product as RevenueType,
  Variant_mixed_diverse_single as TrafficDiversification,
  RevenueTrend,
  Variant_new_trusted_established_caution as TrustTier,
  Variant_newest_priceDesc_priceAsc_bestMatch_highestRating as SortBy,
} from "../backend.d";

export type CustomOrderStatus =
  | "pending"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface ListingDetailInfo {
  views: number;
  inquiries: number;
  daysListed: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface WebsiteBuilderMockup {
  headline: string;
  subheadline: string;
  sections: Array<{ title: string; body: string }>;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  ctaText: string;
  ctaSubtext: string;
}
export interface PerformanceReport {
  speedScore: number;
  seoScore: number;
  mobileScore: number;
  securityScore: number;
  spamScore: number;
  overallGrade: string;
  reportedAt: number;
  listingId: string;
}
