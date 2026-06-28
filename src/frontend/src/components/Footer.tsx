import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Company",
      color: "oklch(0.7 0.22 270)",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "Privacy Policy", to: "#privacy" },
        { label: "Terms & Conditions", to: "#terms" },
      ],
      isInternal: true,
    },
    {
      title: "Marketplace",
      color: "oklch(0.78 0.24 195)",
      links: [
        { label: "Browse Websites", to: "/browse" },
        { label: "Sell Your Website", to: "/sell" },
        { label: "Customise Website", to: "/customise" },
        { label: "Auction System", to: "/browse" },
      ],
      isInternal: true,
    },
    {
      title: "Sellers",
      color: "oklch(0.75 0.2 300)",
      links: [
        { label: "Seller Dashboard", to: "/seller-dashboard" },
        { label: "List Your Website", to: "/sell" },
        { label: "Trust Score", to: "/browse" },
        { label: "Revenue Verification", to: "/browse" },
      ],
      isInternal: true,
    },
    {
      title: "Contact",
      color: "oklch(0.78 0.24 195)",
      isContact: true,
      links: [],
    },
  ];

  return (
    <footer className="relative overflow-hidden" data-ocid="footer">
      {/* Deep gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.09 0.018 270) 0%, oklch(0.065 0.018 275) 60%, oklch(0.05 0.012 270) 100%)",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_110%,oklch(0.7_0.22_270/0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_110%,oklch(0.78_0.24_195/0.08),transparent_60%)] pointer-events-none" />

      {/* Shimmer top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer bg-[length:200%_100%] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          {/* Brand identity */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <img
                src="/assets/tradehub-logo.png"
                alt="TradeHub Logo"
                className="h-9 w-auto object-contain drop-shadow-[0_0_10px_oklch(0.7_0.22_270/0.5)] group-hover:drop-shadow-[0_0_18px_oklch(0.7_0.22_270/0.8)] group-hover:scale-105 transition-all duration-300"
              />
              <span className="font-display font-bold text-xl gradient-text">
                WebStore
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The trusted marketplace for buying and selling high-quality
              websites. Connect with serious buyers and verified sellers
              worldwide.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/krish_ff_5607"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @krish_ff_5607"
                data-ocid="footer-instagram-link"
                className="w-11 h-11 rounded-xl border border-primary/25 bg-primary/8 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/15 hover:shadow-[0_0_22px_oklch(0.7_0.22_270/0.5)] hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:animalsong67@gmail.com"
                aria-label="Email animalsong67@gmail.com"
                data-ocid="footer-email-link"
                className="w-11 h-11 rounded-xl border border-accent/25 bg-accent/8 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/60 hover:bg-accent/15 hover:shadow-[0_0_22px_oklch(0.78_0.24_195/0.5)] hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+917673809412"
                aria-label="Call +91 7673809412"
                data-ocid="footer-phone-link"
                className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/30 hover:bg-white/12 hover:shadow-[0_0_16px_oklch(0.95_0.01_270/0.15)] hover:scale-110 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4-column link grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1 md:max-w-2xl">
            {columns.map((col) => (
              <div key={col.title} className="space-y-4">
                <h4
                  className="font-display font-semibold text-xs uppercase tracking-widest"
                  style={{ color: col.color }}
                >
                  {col.title}
                </h4>
                {col.isContact ? (
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="mailto:animalsong67@gmail.com"
                        className="text-sm text-muted-foreground hover:text-accent transition-all duration-200 flex items-start gap-2 group"
                        data-ocid="footer-contact-email"
                      >
                        <Mail className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors" />
                        <span className="break-all leading-tight group-hover:underline underline-offset-2">
                          animalsong67@gmail.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+917673809412"
                        className="text-sm text-muted-foreground hover:text-accent transition-all duration-200 flex items-center gap-2 group"
                        data-ocid="footer-contact-phone"
                      >
                        <Phone className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-accent transition-colors" />
                        <span className="group-hover:underline underline-offset-2">
                          +91 7673809412
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/krish_ff_5607"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-accent transition-all duration-200 flex items-center gap-2 group"
                        data-ocid="footer-contact-instagram"
                      >
                        <Instagram className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-accent transition-colors" />
                        <span className="group-hover:underline underline-offset-2">
                          krish_ff_5607
                        </span>
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {link.to.startsWith("/") ? (
                          <Link
                            to={link.to}
                            className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-2 group relative"
                            data-ocid={`footer-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          >
                            <span
                              className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200"
                              style={{
                                backgroundColor: col.color,
                                opacity: 0.35,
                              }}
                            />
                            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                              {link.label}
                            </span>
                            <span
                              className="absolute bottom-0 left-4 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${col.color}, oklch(0.78 0.24 195))`,
                              }}
                            />
                          </Link>
                        ) : (
                          <a
                            href={link.to}
                            className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-2 group relative"
                            data-ocid={`footer-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          >
                            <span
                              className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{
                                backgroundColor: col.color,
                                opacity: 0.35,
                              }}
                            />
                            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                              {link.label}
                            </span>
                            <span
                              className="absolute bottom-0 left-4 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${col.color}, oklch(0.78 0.24 195))`,
                              }}
                            />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 via-50% to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {year}{" "}
            <span className="gradient-text font-semibold">WebStore</span>. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="#terms"
              className="hover:text-foreground hover:underline underline-offset-2 transition-colors duration-150"
              data-ocid="footer-terms-link"
            >
              Terms
            </a>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <a
              href="#privacy"
              className="hover:text-foreground hover:underline underline-offset-2 transition-colors duration-150"
              data-ocid="footer-privacy-link"
            >
              Privacy
            </a>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-150 underline underline-offset-2"
              data-ocid="footer-caffeine-link"
            >
              Built with caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
