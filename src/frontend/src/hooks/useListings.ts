import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  ChatMessage,
  ContactMessageInput,
  CredentialToken,
  CustomOrderInput,
  Listing,
  ListingFilter,
  SearchQuery,
  SellerReviewInput,
  SellerSubmissionInput,
  ValuationInput,
  VerificationStatus,
  VerifiedBadge,
} from "../backend.d";

// ─── Listing Hooks ───────────────────────────────────────────────────────

export function useListings() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Listing[]>({
    queryKey: ["listings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getListings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFilteredListings(filter: ListingFilter) {
  const { actor, isFetching } = useActor(createActor);
  const hasFilter = !!(filter.niche || filter.platform || filter.maxPrice);
  return useQuery<Listing[]>({
    queryKey: ["listings", "filtered", filter],
    queryFn: async () => {
      if (!actor) return [];
      if (!hasFilter) return actor.getListings();
      return actor.filterListings(filter);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useListing(id: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Listing | null>({
    queryKey: ["listing", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) return null;
      return actor.getListing(id);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}

export function useSubmitWebsite() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: SellerSubmissionInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitWebsite(input);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["listings"] });
    },
  });
}

export function useSubmitContact() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (input: ContactMessageInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitContact(input);
    },
  });
}

export function useSubmitCustomOrder() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (input: CustomOrderInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitCustomOrder(input);
    },
  });
}

export function useSellerListings() {
  const { actor, isFetching } = useActor(createActor);
  const { identity } = useInternetIdentity();
  return useQuery<Listing[]>({
    queryKey: ["seller-listings", identity?.getPrincipal().toText()],
    queryFn: async () => {
      if (!actor || !identity) return [];
      return actor.getSellerListings(identity.getPrincipal());
    },
    enabled: !!actor && !isFetching && !!identity,
  });
}

export function useUpdateOrderStatus() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      orderId,
      status,
      notes,
    }: {
      orderId: string;
      status: string;
      notes: string | null;
    }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.updateCustomOrderStatus(
        orderId,
        status,
        notes,
      );
      if (result.__kind__ === "err") throw new Error(result.err);
      return result;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["custom-orders"] });
    },
  });
}

export function useAskAI() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      message,
      history,
    }: {
      message: string;
      history: ChatMessage[];
    }) => {
      if (!actor)
        throw new Error("Actor not available — please wait and retry.");
      const result = await actor.askAI(message, history);
      return result as unknown as string;
    },
  });
}

export function useCustomOrders() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["custom-orders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCustomOrders();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCalculateValuation() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (input: ValuationInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.calculateValuation(input);
    },
  });
}

export function useSellerTrustScore(sellerId: string | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["trust-score", sellerId],
    queryFn: async () => {
      if (!actor || !sellerId) return null;
      return actor.getSellerTrustScore(sellerId);
    },
    enabled: !!actor && !isFetching && !!sellerId,
  });
}

export function useSubmitReview() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: SellerReviewInput) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.submitReview(input);
      if (result.__kind__ === "err") throw new Error(result.err);
      return result.ok;
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({ queryKey: ["reviews", variables.listingId] });
      qc.invalidateQueries({ queryKey: ["trust-score", variables.sellerId] });
    },
  });
}

export function useGetReviews(listingId: string | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["reviews", listingId],
    queryFn: async () => {
      if (!actor || !listingId) return [];
      return actor.getReviews(listingId);
    },
    enabled: !!actor && !isFetching && !!listingId,
  });
}

export function useSmartSearch(query: SearchQuery | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Listing[]>({
    queryKey: ["smart-search", query],
    queryFn: async () => {
      if (!actor || !query) return [];
      return actor.smartSearch(query);
    },
    enabled: !!actor && !isFetching && !!query,
  });
}

export function useRecommendations(query: SearchQuery | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Listing[]>({
    queryKey: ["recommendations", query],
    queryFn: async () => {
      if (!actor || !query) return [];
      return actor.getRecommendations(query);
    },
    enabled: !!actor && !isFetching && !!query,
  });
}

// ─── Auction Types ───────────────────────────────────────────────────────
export interface AuctionStateView {
  listingId: bigint;
  startingBid: bigint;
  reservePrice: bigint;
  auctionEndTime: bigint;
  highestBidAmount: [] | [bigint];
  highestBidder: [] | [string];
  bidCount: bigint;
  timeRemainingSeconds: bigint;
  winner: [] | [string];
  ended: boolean;
  reserveMet: boolean;
}

export type BidResult =
  | { __kind__: "success"; success: AuctionStateView }
  | { __kind__: "auctionEnded" }
  | { __kind__: "belowStartingBid" }
  | { __kind__: "belowCurrentBid" }
  | { __kind__: "notAnAuction" }
  | { __kind__: "listingNotFound" };

// ─── Auction Hooks ───────────────────────────────────────────────────────

export function useAuctionState(listingId: bigint | null, enabled: boolean) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<AuctionStateView | null>({
    queryKey: ["auction-state", listingId?.toString()],
    queryFn: async () => {
      if (!actor || listingId === null) return null;
      const result = await (
        actor as unknown as {
          getAuctionState: (id: bigint) => Promise<[] | [AuctionStateView]>;
        }
      ).getAuctionState(listingId);
      if (Array.isArray(result)) return result[0] ?? null;
      return null;
    },
    enabled: !!actor && !isFetching && listingId !== null && enabled,
    refetchInterval: (query) => {
      const data = query.state.data;
      if (!data || data.ended) return false;
      return 4000;
    },
    staleTime: 0,
  });
}

export function usePlaceBid() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      listingId,
      amount,
    }: { listingId: bigint; amount: bigint }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await (
        actor as unknown as {
          placeBid: (id: bigint, amount: bigint) => Promise<BidResult>;
        }
      ).placeBid(listingId, amount);
      return result;
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({
        queryKey: ["auction-state", variables.listingId.toString()],
      });
    },
  });
}

export function useSetAutoBid() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      listingId,
      maxAmount,
      stepAmount,
    }: { listingId: bigint; maxAmount: bigint; stepAmount: bigint }) => {
      if (!actor) throw new Error("Actor not available");
      return (
        actor as unknown as {
          setAutoBid: (
            id: bigint,
            max: bigint,
            step: bigint,
          ) => Promise<boolean>;
        }
      ).setAutoBid(listingId, maxAmount, stepAmount);
    },
  });
}
export function useListActiveAuctions() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<AuctionStateView[]>({
    queryKey: ["active-auctions"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await (
        actor as unknown as {
          listActiveAuctions: () => Promise<AuctionStateView[]>;
        }
      ).listActiveAuctions();
      return result;
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 5000,
    staleTime: 0,
  });
}

// ─── Verified Badge Hook ─────────────────────────────────────────────────

export function useVerifiedBadge(listingId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<VerifiedBadge | null>({
    queryKey: ["verified-badge", listingId?.toString()],
    queryFn: async () => {
      if (!actor || listingId === null) return null;
      return actor.getVerifiedBadge(listingId);
    },
    enabled: !!actor && !isFetching && listingId !== null,
  });
}

// ─── Revenue Verification Hooks ───────────────────────────────────────────

export function useVerificationStatus(listingId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<VerificationStatus | null>({
    queryKey: ["verification-status", listingId?.toString()],
    queryFn: async () => {
      if (!actor || listingId === null) return null;
      return actor.getVerificationStatus(listingId);
    },
    enabled: !!actor && !isFetching && listingId !== null,
  });
}

export function useSubmitVerificationRequest() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      listingId,
      claimedMonthlyRevenue,
      claimedTrafficVolume,
      credentialTokens,
    }: {
      listingId: bigint;
      claimedMonthlyRevenue: number;
      claimedTrafficVolume: bigint;
      credentialTokens: CredentialToken[];
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitVerificationRequest(
        listingId,
        claimedMonthlyRevenue,
        claimedTrafficVolume,
        credentialTokens,
      );
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({
        queryKey: ["verification-status", variables.listingId.toString()],
      });
    },
  });
}

export function useRefreshVerificationMetrics() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (listingId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.refreshVerificationMetrics(listingId);
    },
    onSuccess: (_data, listingId) => {
      qc.invalidateQueries({
        queryKey: ["verification-status", listingId.toString()],
      });
      qc.invalidateQueries({
        queryKey: ["verified-badge", listingId.toString()],
      });
    },
  });
}

// ─── Admin Hooks ─────────────────────────────────────────────────────────

export function useAdminListPendingVerifications() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["admin-verifications-pending"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.adminListPendingVerifications();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAdminApproveVerification() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (requestId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.adminApproveVerification(requestId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-verifications-pending"] });
    },
  });
}

export function useAdminRejectVerification() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      requestId,
      reason,
    }: {
      requestId: bigint;
      reason: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.adminRejectVerification(requestId, reason);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-verifications-pending"] });
    },
  });
}
