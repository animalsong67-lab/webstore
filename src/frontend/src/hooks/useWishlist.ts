import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { WishlistEntry } from "../backend.d";

export type { WishlistEntry };

// ─── Query Keys ──────────────────────────────────────────────────────────────
const WISHLIST_KEY = ["wishlist"] as const;
const CHECK_KEY = (id: bigint) => ["wishlist", "check", id.toString()] as const;

// ─── Get full wishlist ────────────────────────────────────────────────────────
export function useGetWishlist() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<WishlistEntry[]>({
    queryKey: WISHLIST_KEY,
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWishlist();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 30,
  });
}

// ─── Check single listing ─────────────────────────────────────────────────────
export function useCheckWishlist(listingId: bigint) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<boolean>({
    queryKey: CHECK_KEY(listingId),
    queryFn: async () => {
      if (!actor) return false;
      return actor.checkWishlist(listingId);
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 30,
  });
}

// ─── Add to wishlist ──────────────────────────────────────────────────────────
export function useAddToWishlist() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<boolean, Error, bigint>({
    mutationFn: async (listingId) => {
      if (!actor) throw new Error("Not authenticated");
      return actor.addToWishlist(listingId);
    },
    onSuccess: (_, listingId) => {
      qc.invalidateQueries({ queryKey: WISHLIST_KEY });
      qc.setQueryData<boolean>(CHECK_KEY(listingId), true);
    },
  });
}

// ─── Remove from wishlist ─────────────────────────────────────────────────────
export function useRemoveFromWishlist() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<boolean, Error, bigint>({
    mutationFn: async (listingId) => {
      if (!actor) throw new Error("Not authenticated");
      return actor.removeFromWishlist(listingId);
    },
    onSuccess: (_, listingId) => {
      qc.invalidateQueries({ queryKey: WISHLIST_KEY });
      qc.setQueryData<boolean>(CHECK_KEY(listingId), false);
    },
  });
}
