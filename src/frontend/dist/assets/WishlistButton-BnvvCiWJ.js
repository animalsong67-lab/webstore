import { h as useInternetIdentity, i as useCheckWishlist, k as useAddToWishlist, l as useRemoveFromWishlist, j as jsxRuntimeExports, H as Heart } from "./index-BMZp6_Em.js";
function WishlistButton({
  listingId,
  size = "md",
  className = ""
}) {
  const { identity } = useInternetIdentity();
  const { data: inWishlist, isLoading } = useCheckWishlist(listingId);
  const addMutation = useAddToWishlist();
  const removeMutation = useRemoveFromWishlist();
  const isPending = addMutation.isPending || removeMutation.isPending;
  const isActive = !!inWishlist;
  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!identity) return;
    if (isActive) {
      removeMutation.mutate(listingId);
    } else {
      addMutation.mutate(listingId);
    }
  };
  if (!identity) return null;
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const btnSize = size === "sm" ? "w-7 h-7" : "w-9 h-9";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: handleToggle,
      disabled: isPending || isLoading,
      "aria-label": isActive ? "Remove from wishlist" : "Save to wishlist",
      "data-ocid": `wishlist.toggle-${listingId}`,
      className: [
        "flex items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        btnSize,
        isActive ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100 hover:border-red-300 dark:bg-red-950/30 dark:border-red-800 dark:text-red-400" : "bg-background border-border text-muted-foreground hover:bg-red-50 hover:border-red-200 hover:text-red-500 dark:hover:bg-red-950/20",
        isPending ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
        className
      ].join(" "),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Heart,
        {
          className: [
            iconSize,
            isActive ? "fill-current" : "",
            isPending ? "animate-pulse" : ""
          ].join(" ")
        }
      )
    }
  );
}
export {
  WishlistButton as W
};
