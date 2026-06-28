import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SourceBreakdown {
    source: CredentialSource;
    trafficVolume: bigint;
    monthlyRevenue: number;
}
export type Timestamp = bigint;
export interface SellerReviewInput {
    listingId: string;
    reviewerName: string;
    comment: string;
    sellerId: string;
    rating: bigint;
}
export interface CustomOrderInput {
    websiteType: string;
    contactName: string;
    description: string;
    contactEmail: string;
    requirements: string;
    budget: string;
    timeline: string;
}
export interface PerformanceReport {
    spamScore: bigint;
    listingId: string;
    overallGrade: string;
    mobileScore: bigint;
    seoScore: bigint;
    reportedAt: bigint;
    securityScore: bigint;
    speedScore: bigint;
}
export interface VerifiedMetrics {
    fetchedAt: bigint;
    trafficVolume: bigint;
    revenueTrend: RevenueTrend;
    monthlyRevenue: number;
    sourceBreakdowns: Array<SourceBreakdown>;
}
export interface SellerReview {
    id: string;
    listingId: string;
    reviewerName: string;
    comment: string;
    timestamp: Timestamp;
    rating: bigint;
}
export interface ContactMessageInput {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export interface ChatMessage {
    content: string;
    role: string;
}
export interface CustomOrder {
    id: bigint;
    websiteType: string;
    status: string;
    sellerNotes?: string;
    contactName: string;
    submittedAt: Timestamp;
    submittedBy: Principal;
    description: string;
    contactEmail: string;
    requirements: string;
    budget: string;
    timeline: string;
}
export interface CredentialToken {
    token: string;
    refreshToken?: string;
    source: CredentialSource;
}
export interface WebsiteBuilderMockup {
    primaryColor: string;
    headline: string;
    accentColor: string;
    ctaText: string;
    ctaSubtext: string;
    secondaryColor: string;
    sections: Array<MockupSection>;
    subheadline: string;
}
export interface VerifiedBadge {
    trend: RevenueTrend;
    listingId: bigint;
    trafficVolume: bigint;
    monthlyRevenue: number;
    sourceBreakdowns: Array<SourceBreakdown>;
}
export interface Listing {
    id: bigint;
    url: string;
    status: ListingStatus;
    title: string;
    askingPrice: bigint;
    monthlyTraffic: bigint;
    listedDate: Timestamp;
    description: string;
    platform: string;
    sellerName: string;
    niche: string;
    monthlyRevenue: bigint;
}
export interface TrustScore {
    completionRate: bigint;
    hasRedFlags: boolean;
    tier: Variant_new_trusted_established_caution;
    score: bigint;
    isVerified: boolean;
    accountAgeDays: bigint;
    responseTimeHours: bigint;
    avgRating: bigint;
    transactionCount: bigint;
}
export interface SearchQuery {
    naturalLanguage?: string;
    cmsType?: string;
    sortBy: Variant_newest_priceDesc_priceAsc_bestMatch_highestRating;
    minTraffic?: bigint;
    countryTraffic?: string;
    maxRevenue?: bigint;
    minAgeYears?: bigint;
    niche?: string;
    monetizationType?: string;
    minSeoScore?: bigint;
    minRevenue?: bigint;
    maxTraffic?: bigint;
}
export interface ValuationInput {
    domainAuthority: bigint;
    revenueType: Variant_ads_recurring_affiliate_product;
    monthlyTraffic: bigint;
    trafficDiversification: Variant_mixed_diverse_single;
    revenueTrend: RevenueTrend;
    domainAgeYears: bigint;
    monthlyRevenue: bigint;
}
export interface ValuationResult {
    baseMultiple: bigint;
    trendAdjustment: bigint;
    daBonus: bigint;
    estimatedMax: bigint;
    estimatedMin: bigint;
    seoScore: bigint;
    growthPotential: bigint;
    trafficBonus: bigint;
    riskScore: bigint;
}
export interface BidEntry {
    won: boolean;
    auctionEnded: boolean;
    listingId: bigint;
    bidAmount: bigint;
    placedAt: Timestamp;
    listingTitle: string;
    isHighestBidder: boolean;
}
export type VerificationStatus = {
    __kind__: "verified";
    verified: null;
} | {
    __kind__: "pending";
    pending: null;
} | {
    __kind__: "unverified";
    unverified: null;
} | {
    __kind__: "rejected";
    rejected: string;
};
export interface WishlistEntry {
    snapshotNiche: string;
    listingId: bigint;
    snapshotPrice: bigint;
    snapshotTitle: string;
    savedAt: Timestamp;
    snapshotUrl: string;
}
export type NotificationType = {
    __kind__: "outbid";
    outbid: {
        newHighestBid: bigint;
        listingId: bigint;
    };
} | {
    __kind__: "purchaseConfirmed";
    purchaseConfirmed: {
        listingId: bigint;
        amount: bigint;
    };
} | {
    __kind__: "auctionWon";
    auctionWon: {
        finalPrice: bigint;
        listingId: bigint;
    };
} | {
    __kind__: "priceDrop";
    priceDrop: {
        listingId: bigint;
        oldPrice: bigint;
        newPrice: bigint;
    };
} | {
    __kind__: "transferUpdate";
    transferUpdate: {
        listingId: bigint;
        message: string;
    };
};
export interface ListingFilter {
    platform?: string;
    maxPrice?: bigint;
    niche?: string;
}
export interface PurchaseRecord {
    id: bigint;
    completedAt: Timestamp;
    listingId: bigint;
    transferStatus: string;
    seller: string;
    listingTitle: string;
    buyer: Principal;
    pricePaid: bigint;
}
export interface BuyerNotificationView {
    id: bigint;
    notifType: NotificationType;
    createdAt: Timestamp;
    read: boolean;
}
export interface PerformanceReportInput {
    listingId: string;
}
export interface SellerSubmissionInput {
    url: string;
    askingPrice: bigint;
    monthlyTraffic: bigint;
    description: string;
    platform: string;
    niche: string;
    contactEmail: string;
    monthlyRevenue: bigint;
}
export interface MockupSection {
    title: string;
    body: string;
}
export interface VerificationRequest {
    id: bigint;
    status: VerificationStatus;
    listingId: bigint;
    verifiedMetrics?: VerifiedMetrics;
    submittedAt: bigint;
    reviewedAt?: bigint;
    adminNote?: string;
    sellerId: string;
    claimedTrafficVolume: bigint;
    claimedMonthlyRevenue: number;
}
export enum CredentialSource {
    stripe = "stripe",
    googleAnalytics = "googleAnalytics",
    paypal = "paypal",
    googleAdSense = "googleAdSense"
}
export enum ListingStatus {
    active = "active",
    pending = "pending",
    sold = "sold"
}
export enum RevenueTrend {
    up = "up",
    down = "down",
    flat = "flat"
}
export enum Variant_ads_recurring_affiliate_product {
    ads = "ads",
    recurring = "recurring",
    affiliate = "affiliate",
    product = "product"
}
export enum Variant_mixed_diverse_single {
    mixed = "mixed",
    diverse = "diverse",
    single = "single"
}
export enum Variant_new_trusted_established_caution {
    new_ = "new",
    trusted = "trusted",
    established = "established",
    caution = "caution"
}
export enum Variant_newest_priceDesc_priceAsc_bestMatch_highestRating {
    newest = "newest",
    priceDesc = "priceDesc",
    priceAsc = "priceAsc",
    bestMatch = "bestMatch",
    highestRating = "highestRating"
}
export interface backendInterface {
    addToWishlist(listingId: bigint): Promise<boolean>;
    adminApproveVerification(requestId: bigint): Promise<void>;
    adminListPendingVerifications(): Promise<Array<VerificationRequest>>;
    adminRejectVerification(requestId: bigint, reason: string): Promise<void>;
    askAI(message: string, conversationHistory: Array<ChatMessage>): Promise<string>;
    calculateValuation(input: ValuationInput): Promise<ValuationResult>;
    checkWishlist(listingId: bigint): Promise<boolean>;
    filterListings(filter: ListingFilter): Promise<Array<Listing>>;
    generatePerformanceReport(input: PerformanceReportInput): Promise<PerformanceReport>;
    generateWebsiteBuilderMockup(niche: string, description: string): Promise<WebsiteBuilderMockup>;
    getBuyerBids(): Promise<Array<BidEntry>>;
    getBuyerCustomOrders(): Promise<Array<CustomOrder>>;
    getBuyerNotifications(): Promise<Array<BuyerNotificationView>>;
    getBuyerPurchases(): Promise<Array<PurchaseRecord>>;
    getCustomOrders(): Promise<Array<CustomOrder>>;
    getListing(id: bigint): Promise<Listing | null>;
    getListings(): Promise<Array<Listing>>;
    getRecommendations(searchQuery: SearchQuery): Promise<Array<Listing>>;
    getReviews(listingId: string): Promise<Array<SellerReview>>;
    getSellerListings(sellerPrincipal: Principal): Promise<Array<Listing>>;
    getSellerTrustScore(sellerId: string): Promise<TrustScore>;
    getVerificationStatus(listingId: bigint): Promise<VerificationStatus>;
    getVerifiedBadge(listingId: bigint): Promise<VerifiedBadge | null>;
    getWishlist(): Promise<Array<WishlistEntry>>;
    markNotificationRead(notifId: bigint): Promise<boolean>;
    refreshVerificationMetrics(listingId: bigint): Promise<void>;
    removeFromWishlist(listingId: bigint): Promise<boolean>;
    smartSearch(searchQuery: SearchQuery): Promise<Array<Listing>>;
    submitContact(input: ContactMessageInput): Promise<void>;
    submitCustomOrder(input: CustomOrderInput): Promise<bigint>;
    submitReview(review: SellerReviewInput): Promise<{
        __kind__: "ok";
        ok: string;
    } | {
        __kind__: "err";
        err: string;
    }>;
    submitVerificationRequest(listingId: bigint, claimedMonthlyRevenue: number, claimedTrafficVolume: bigint, credentialTokens: Array<CredentialToken>): Promise<bigint>;
    submitWebsite(input: SellerSubmissionInput): Promise<void>;
    updateCustomOrderStatus(orderId: string, status: string, notes: string | null): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    websiteTypes(): Promise<Array<string>>;
}
