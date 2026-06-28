import { e as useActor, t as useMutation, s as useQuery, h as useInternetIdentity, q as useQueryClient, f as createActor } from "./index-BMZp6_Em.js";
function useListings() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["listings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getListings();
    },
    enabled: !!actor && !isFetching
  });
}
function useFilteredListings(filter) {
  const { actor, isFetching } = useActor(createActor);
  const hasFilter = !!(filter.niche || filter.platform || filter.maxPrice);
  return useQuery({
    queryKey: ["listings", "filtered", filter],
    queryFn: async () => {
      if (!actor) return [];
      if (!hasFilter) return actor.getListings();
      return actor.filterListings(filter);
    },
    enabled: !!actor && !isFetching
  });
}
function useListing(id) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["listing", id == null ? void 0 : id.toString()],
    queryFn: async () => {
      if (!actor || id === null) return null;
      return actor.getListing(id);
    },
    enabled: !!actor && !isFetching && id !== null
  });
}
function useSubmitWebsite() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitWebsite(input);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["listings"] });
    }
  });
}
function useSubmitContact() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitContact(input);
    }
  });
}
function useSubmitCustomOrder() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitCustomOrder(input);
    }
  });
}
function useSellerListings() {
  const { actor, isFetching } = useActor(createActor);
  const { identity } = useInternetIdentity();
  return useQuery({
    queryKey: ["seller-listings", identity == null ? void 0 : identity.getPrincipal().toText()],
    queryFn: async () => {
      if (!actor || !identity) return [];
      return actor.getSellerListings(identity.getPrincipal());
    },
    enabled: !!actor && !isFetching && !!identity
  });
}
function useUpdateOrderStatus() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      orderId,
      status,
      notes
    }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.updateCustomOrderStatus(
        orderId,
        status,
        notes
      );
      if (result.__kind__ === "err") throw new Error(result.err);
      return result;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["custom-orders"] });
    }
  });
}
function useAskAI() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      message,
      history
    }) => {
      if (!actor)
        throw new Error("Actor not available — please wait and retry.");
      const result = await actor.askAI(message, history);
      return result;
    }
  });
}
function useCustomOrders() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["custom-orders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCustomOrders();
    },
    enabled: !!actor && !isFetching
  });
}
function useCalculateValuation() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      return actor.calculateValuation(input);
    }
  });
}
function useSellerTrustScore(sellerId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["trust-score", sellerId],
    queryFn: async () => {
      if (!actor || !sellerId) return null;
      return actor.getSellerTrustScore(sellerId);
    },
    enabled: !!actor && !isFetching && !!sellerId
  });
}
function useSubmitReview() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.submitReview(input);
      if (result.__kind__ === "err") throw new Error(result.err);
      return result.ok;
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({ queryKey: ["reviews", variables.listingId] });
      qc.invalidateQueries({ queryKey: ["trust-score", variables.sellerId] });
    }
  });
}
function useGetReviews(listingId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["reviews", listingId],
    queryFn: async () => {
      if (!actor || !listingId) return [];
      return actor.getReviews(listingId);
    },
    enabled: !!actor && !isFetching && !!listingId
  });
}
function useSmartSearch(query) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["smart-search", query],
    queryFn: async () => {
      if (!actor || !query) return [];
      return actor.smartSearch(query);
    },
    enabled: !!actor && !isFetching && !!query
  });
}
function useRecommendations(query) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["recommendations", query],
    queryFn: async () => {
      if (!actor || !query) return [];
      return actor.getRecommendations(query);
    },
    enabled: !!actor && !isFetching && !!query
  });
}
function useAuctionState(listingId, enabled) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["auction-state", listingId == null ? void 0 : listingId.toString()],
    queryFn: async () => {
      if (!actor || listingId === null) return null;
      const result = await actor.getAuctionState(listingId);
      if (Array.isArray(result)) return result[0] ?? null;
      return null;
    },
    enabled: !!actor && !isFetching && listingId !== null && enabled,
    refetchInterval: (query) => {
      const data = query.state.data;
      if (!data || data.ended) return false;
      return 4e3;
    },
    staleTime: 0
  });
}
function usePlaceBid() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      listingId,
      amount
    }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.placeBid(listingId, amount);
      return result;
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({
        queryKey: ["auction-state", variables.listingId.toString()]
      });
    }
  });
}
function useSetAutoBid() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      listingId,
      maxAmount,
      stepAmount
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.setAutoBid(listingId, maxAmount, stepAmount);
    }
  });
}
function useListActiveAuctions() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["active-auctions"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.listActiveAuctions();
      return result;
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 5e3,
    staleTime: 0
  });
}
function useVerifiedBadge(listingId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["verified-badge", listingId == null ? void 0 : listingId.toString()],
    queryFn: async () => {
      if (!actor || listingId === null) return null;
      return actor.getVerifiedBadge(listingId);
    },
    enabled: !!actor && !isFetching && listingId !== null
  });
}
function useVerificationStatus(listingId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["verification-status", listingId == null ? void 0 : listingId.toString()],
    queryFn: async () => {
      if (!actor || listingId === null) return null;
      return actor.getVerificationStatus(listingId);
    },
    enabled: !!actor && !isFetching && listingId !== null
  });
}
function useSubmitVerificationRequest() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      listingId,
      claimedMonthlyRevenue,
      claimedTrafficVolume,
      credentialTokens
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitVerificationRequest(
        listingId,
        claimedMonthlyRevenue,
        claimedTrafficVolume,
        credentialTokens
      );
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({
        queryKey: ["verification-status", variables.listingId.toString()]
      });
    }
  });
}
function useRefreshVerificationMetrics() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (listingId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.refreshVerificationMetrics(listingId);
    },
    onSuccess: (_data, listingId) => {
      qc.invalidateQueries({
        queryKey: ["verification-status", listingId.toString()]
      });
      qc.invalidateQueries({
        queryKey: ["verified-badge", listingId.toString()]
      });
    }
  });
}
function useAdminListPendingVerifications() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["admin-verifications-pending"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.adminListPendingVerifications();
    },
    enabled: !!actor && !isFetching
  });
}
function useAdminApproveVerification() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (requestId) => {
      if (!actor) throw new Error("Actor not available");
      return actor.adminApproveVerification(requestId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-verifications-pending"] });
    }
  });
}
function useAdminRejectVerification() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      requestId,
      reason
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.adminRejectVerification(requestId, reason);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-verifications-pending"] });
    }
  });
}
export {
  useAskAI as A,
  useSubmitContact as a,
  useFilteredListings as b,
  useSmartSearch as c,
  useRecommendations as d,
  useListActiveAuctions as e,
  useSubmitWebsite as f,
  useSubmitCustomOrder as g,
  useListing as h,
  useAuctionState as i,
  useVerifiedBadge as j,
  usePlaceBid as k,
  useSetAutoBid as l,
  useSellerTrustScore as m,
  useGetReviews as n,
  useSubmitReview as o,
  useVerificationStatus as p,
  useSubmitVerificationRequest as q,
  useRefreshVerificationMetrics as r,
  useSellerListings as s,
  useCustomOrders as t,
  useListings as u,
  useUpdateOrderStatus as v,
  useCalculateValuation as w,
  useAdminListPendingVerifications as x,
  useAdminApproveVerification as y,
  useAdminRejectVerification as z
};
