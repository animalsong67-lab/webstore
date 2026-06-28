import { Button } from "@/components/ui/button";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Heart, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useGetWishlist } from "../hooks/useWishlist";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Browse Websites", to: "/browse" },
  { label: "List Your Website", to: "/sell", scrollTo: "sell-form-section" },
  { label: "Customise Your Own Website", to: "/customise" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const toolsDropdown = [
  { label: "AI Valuation", to: "/valuation" },
  { label: "AI Builder", to: "/ai-builder" },
  { label: "Escrow Payment", to: "/escrow" },
  { label: "Website Transfer", to: "/transfer" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { login, clear, identity, loginStatus } = useInternetIdentity();
  const qc = useQueryClient();
  const navigate = useNavigate();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === "logging-in";
  const { data: wishlistItems } = useGetWishlist();
  const wishlistCount = wishlistItems?.length ?? 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally re-run only when route changes
  useEffect(() => {
    setMobileOpen(false);
    setToolsOpen(false);
  }, [currentPath]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const authNavItems = isAuthenticated
    ? [
        { label: "Seller Dashboard", to: "/seller-dashboard" },
        { label: "Buyer Dashboard", to: "/buyer-dashboard" },
      ]
    : [];

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      qc.clear();
    } else {
      try {
        await login();
      } catch (err: unknown) {
        const error = err as Error;
        if (error?.message === "User is already authenticated") {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      window.location.href = `/browse?q=${encodeURIComponent(searchValue.trim())}`;
    }
  };

  const handleNavClick = (
    e: React.MouseEvent,
    item: (typeof navItems)[number],
  ) => {
    if (!item.scrollTo) return;
    e.preventDefault();
    const scrollToSection = () => {
      setTimeout(() => {
        const el = document.getElementById(item.scrollTo!);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    };
    if (currentPath === item.to) {
      scrollToSection();
    } else {
      navigate({ to: item.to }).then(scrollToSection);
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[oklch(0.08_0.015_270/0.88)] backdrop-blur-[24px] border-b border-primary/30 shadow-[0_2px_40px_oklch(0.7_0.22_270/0.18),0_1px_0_oklch(0.7_0.22_270/0.25)]"
            : "bg-[oklch(0.08_0.015_270/0.55)] backdrop-blur-[20px] border-b border-white/8",
        ].join(" ")}
        data-ocid="header"
      >
        {/* Animated shimmer border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer bg-[length:200%_100%] pointer-events-none" />
        {/* Subtle violet ambient glow (scroll-intensified) */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, oklch(0.7 0.22 270 / 0.07), transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 shrink-0 group"
              data-ocid="nav-logo"
            >
              <img
                src="/assets/tradehub-logo.png"
                alt="TradeHub Logo"
                className="h-10 w-auto object-contain drop-shadow-[0_0_8px_oklch(0.7_0.22_270/0.5)] group-hover:drop-shadow-[0_0_18px_oklch(0.7_0.22_270/0.9)] group-hover:scale-105 transition-all duration-300 ease-out"
              />
              <span className="hidden sm:block font-display font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:drop-shadow-[0_0_10px_oklch(0.7_0.22_270/0.4)] transition-all duration-300">
                WebStore
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.to + item.label}
                  to={item.to}
                  onClick={(e) => handleNavClick(e, item)}
                  className={[
                    "relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap group",
                    currentPath === item.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/6",
                    item.label === "Customise Your Own Website"
                      ? "border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/70 hover:shadow-[0_0_14px_oklch(0.7_0.22_270/0.35)]"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  data-ocid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                  {item.label !== "Customise Your Own Website" && (
                    <span
                      className={[
                        "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 origin-left",
                        currentPath === item.to
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      ].join(" ")}
                    />
                  )}
                </Link>
              ))}

              {authNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={[
                    "relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap group",
                    currentPath === item.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/6",
                  ].join(" ")}
                  data-ocid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                  <span
                    className={[
                      "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 origin-left",
                      currentPath === item.to
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </Link>
              ))}

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 group"
                aria-label="Wishlist"
                data-ocid="nav-wishlist"
              >
                <Heart
                  className={`w-5 h-5 transition-all duration-200 ${
                    wishlistCount > 0
                      ? "fill-primary text-primary drop-shadow-[0_0_6px_oklch(0.7_0.22_270/0.6)]"
                      : "group-hover:drop-shadow-[0_0_6px_oklch(0.7_0.22_270/0.4)]"
                  }`}
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent text-white text-[9px] font-bold flex items-center justify-center shadow-[0_0_8px_oklch(0.7_0.22_270/0.6)] animate-pulse">
                    {wishlistCount > 9 ? "9+" : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Tools dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setToolsOpen((v) => !v)}
                  className={[
                    "flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    toolsOpen || toolsDropdown.some((t) => currentPath === t.to)
                      ? "text-primary bg-primary/10 shadow-[0_0_12px_oklch(0.7_0.22_270/0.2)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/6",
                  ].join(" ")}
                  data-ocid="nav-tools-dropdown"
                  aria-expanded={toolsOpen}
                  aria-haspopup="true"
                >
                  Tools
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {toolsOpen && (
                  <div className="absolute top-full right-0 mt-2 w-52 rounded-xl border border-primary/20 bg-[oklch(0.1_0.02_270/0.92)] backdrop-blur-2xl shadow-[0_8px_40px_oklch(0.7_0.22_270/0.22),0_0_0_1px_oklch(0.7_0.22_270/0.08)] py-1.5 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                    {toolsDropdown.map((t) => (
                      <Link
                        key={t.to}
                        to={t.to}
                        onClick={() => setToolsOpen(false)}
                        className={[
                          "relative flex items-center gap-2 px-4 py-2.5 text-sm transition-all duration-150 group",
                          currentPath === t.to
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-primary/8",
                        ].join(" ")}
                        data-ocid={`nav-tools-${t.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_4px_oklch(0.7_0.22_270/0.8)] transition-all duration-150" />
                        {t.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Search + Auth + Hamburger */}
            <div className="flex items-center gap-2 flex-1 lg:flex-none justify-end">
              <form
                onSubmit={handleSearch}
                className="relative hidden md:flex items-center"
              >
                <Search className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search websites..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  data-ocid="search-input"
                  className="pl-9 pr-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-white/8 w-48 xl:w-64 transition-all duration-200"
                />
              </form>

              <Button
                onClick={handleAuth}
                disabled={isLoggingIn}
                variant={isAuthenticated ? "outline" : "default"}
                size="sm"
                data-ocid="auth-button"
                className={[
                  "shrink-0 transition-all duration-300",
                  !isAuthenticated
                    ? "bg-gradient-to-r from-primary to-accent text-white border-0 hover:shadow-[0_0_24px_oklch(0.7_0.22_270/0.6)] hover:scale-[1.04] animate-glow-pulse font-semibold"
                    : "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:scale-[1.02]",
                ].join(" ")}
              >
                {isLoggingIn
                  ? "Logging in…"
                  : isAuthenticated
                    ? "Logout"
                    : "Login / Signup"}
              </Button>

              {/* Hamburger */}
              <button
                type="button"
                className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                data-ocid="mobile-menu-toggle"
              >
                <span
                  className={`block w-5 h-0.5 bg-current mb-1 transition-all duration-300 ${
                    mobileOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current mb-1 transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen glass overlay mobile menu */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        data-ocid="mobile-menu-overlay"
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-background/80 backdrop-blur-xl w-full h-full cursor-default border-0 p-0"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
        />
        {/* Slide-in panel */}
        <div
          className={[
            "absolute top-0 right-0 bottom-0 w-full max-w-xs bg-[oklch(0.1_0.02_270/0.97)] backdrop-blur-2xl border-l border-primary/20 shadow-[-8px_0_64px_oklch(0.7_0.22_270/0.15)] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          data-ocid="mobile-menu"
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary/6 to-transparent pointer-events-none" />

          {/* Header row */}
          <div className="relative flex items-center justify-between p-5 border-b border-white/8">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src="/assets/tradehub-logo.png"
                alt="WebStore"
                className="h-8 w-auto object-contain drop-shadow-[0_0_8px_oklch(0.7_0.22_270/0.5)]"
              />
              <span className="font-display font-bold text-base bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                WebStore
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Close menu"
              data-ocid="mobile-menu-close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile search */}
          <div className="relative p-4 pb-0">
            <form
              onSubmit={handleSearch}
              className="relative flex items-center"
            >
              <Search className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search websites..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                data-ocid="mobile-search-input"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200"
              />
            </form>
          </div>

          {/* Links */}
          <nav
            className="flex-1 overflow-y-auto p-4 space-y-1"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.to + item.label}
                to={item.to}
                onClick={(e) => handleNavClick(e, item)}
                className={[
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px]",
                  currentPath === item.to
                    ? "text-primary bg-primary/12 border border-primary/20 shadow-[0_0_12px_oklch(0.7_0.22_270/0.1)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/8 border border-transparent",
                  item.label === "Customise Your Own Website"
                    ? "border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                data-ocid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    currentPath === item.to
                      ? "bg-primary shadow-[0_0_6px_oklch(0.7_0.22_270/0.8)]"
                      : "bg-muted-foreground/30"
                  }`}
                />
                {item.label}
              </Link>
            ))}

            {authNavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={[
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] border border-transparent",
                  currentPath === item.to
                    ? "text-primary bg-primary/12 border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                ].join(" ")}
                data-ocid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
                {item.label}
              </Link>
            ))}

            {/* Tools section */}
            <div className="pt-3 pb-1">
              <p className="px-4 text-[10px] font-bold text-primary/50 uppercase tracking-widest mb-2">
                Tools
              </p>
              {toolsDropdown.map((t) => (
                <Link
                  key={t.to}
                  to={t.to}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] border border-transparent",
                    currentPath === t.to
                      ? "text-accent bg-accent/10 border-accent/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                  ].join(" ")}
                  data-ocid={`mobile-nav-tools-${t.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
                  {t.label}
                </Link>
              ))}
            </div>

            {/* Wishlist link */}
            <Link
              to="/wishlist"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all duration-200 min-h-[44px] border border-transparent"
              data-ocid="mobile-nav-wishlist"
            >
              <Heart
                className={`w-4 h-4 flex-shrink-0 ${
                  wishlistCount > 0 ? "fill-primary text-primary" : ""
                }`}
              />
              Wishlist
              {wishlistCount > 0 && (
                <span className="ml-auto w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount > 9 ? "9+" : wishlistCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Auth button at bottom */}
          <div className="p-4 border-t border-white/8">
            <Button
              onClick={() => {
                handleAuth();
                setMobileOpen(false);
              }}
              disabled={isLoggingIn}
              variant={isAuthenticated ? "outline" : "default"}
              className={[
                "w-full h-12 font-semibold transition-all duration-300",
                !isAuthenticated
                  ? "bg-gradient-to-r from-primary to-accent text-white border-0 hover:shadow-[0_0_24px_oklch(0.7_0.22_270/0.5)] active:scale-[0.98]"
                  : "border-primary/30 text-primary hover:bg-primary/10",
              ].join(" ")}
              data-ocid="mobile-auth-button"
            >
              {isLoggingIn
                ? "Logging in…"
                : isAuthenticated
                  ? "Logout"
                  : "Login / Signup"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
