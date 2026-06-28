import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

const team = [
  {
    name: "Mr Krish Raj",
    role: "CEO & Co-Founder",
    bio: "Serial entrepreneur with a decade of experience building and scaling digital businesses. Passionate about empowering founders to exit on their own terms.",
  },
  {
    name: "Priya Kapoor",
    role: "Head of Marketplace",
    bio: "Former e-commerce strategist with deep expertise in SaaS valuations and due diligence processes.",
  },
  {
    name: "Ravi Mehta",
    role: "CTO",
    bio: "Full-stack engineer and entrepreneur. Built and sold three SaaS products before joining WebStore.",
  },
];

const testimonials = [
  {
    author: "Sarah Chen",
    role: "Acquired an e-commerce site",
    content:
      "Found my dream business in under two weeks. The team was incredibly helpful throughout the entire due diligence process.",
    rating: 5,
  },
  {
    author: "Marcos Lima",
    role: "Sold a content blog",
    content:
      "Sold my blog for 3× more than I expected. The valuation tool was spot-on and the buyer was pre-qualified.",
    rating: 5,
  },
  {
    author: "Anika Patel",
    role: "Acquired a SaaS product",
    content:
      "The escrow process gave me complete peace of mind. Transaction was smooth from offer to handover.",
    rating: 5,
  },
];

const milestones = [
  { stat: "1,200+", label: "Websites Sold" },
  { stat: "$42M+", label: "Total Transaction Volume" },
  { stat: "98%", label: "Satisfaction Rate" },
];

export default function About() {
  return (
    <div className="bg-background">
      {/* Gradient hero banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 70% 30%, oklch(0.65 0.24 195 / 0.25) 0%, transparent 50%), oklch(0.08 0.015 270)",
        }}
      >
        {/* Mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.22 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 270) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orbs */}
        <div
          className="absolute -top-12 right-1/4 w-64 h-64 rounded-full animate-float pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.22 270 / 0.2) 0%, transparent 70%)",
            filter: "blur(32px)",
          }}
        />
        <div
          className="absolute bottom-0 left-10 w-48 h-48 rounded-full animate-float pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.24 195 / 0.15) 0%, transparent 70%)",
            filter: "blur(24px)",
            animationDelay: "2s",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Badge className="mb-5 bg-primary/20 text-primary border-primary/40 hover:bg-primary/30">
            Our Story
          </Badge>
          <h1 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-5 leading-tight">
            Built for Serious Buyers and Sellers
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            WebStore was founded on a simple belief: finding or selling a great
            website shouldn't be complicated. We combine transparent data,
            verified sellers, and expert support to make every transaction a
            success.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section
        className="border-y py-14"
        style={{
          background: "oklch(0.12 0.025 270 / 0.9)",
          borderColor: "oklch(0.35 0.06 270 / 0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {milestones.map(({ stat, label }) => (
              <div
                key={label}
                className="glass-card glass-card-hover rounded-2xl p-7 animate-scale-in transition-all duration-300"
              >
                <p className="font-display font-bold text-5xl gradient-text mb-2">
                  {stat}
                </p>
                <p className="text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="py-20"
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, oklch(0.55 0.22 270 / 0.07) 0%, transparent 55%), oklch(0.09 0.018 270)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-accent mb-1 glow-text-accent">
              The People
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-3">
              Meet the Team
            </h2>
            <p className="text-muted-foreground">
              The people building the best website marketplace
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {team.map(({ name, role, bio }) => (
              <div
                key={name}
                className={`glass-card glass-card-hover rounded-2xl p-7 text-center transition-all duration-300 ${
                  name === "Mr Krish Raj" ? "glow-primary" : ""
                }`}
                style={
                  name === "Mr Krish Raj"
                    ? { borderColor: "oklch(0.7 0.22 270 / 0.6)" }
                    : {}
                }
              >
                <div className="w-24 h-24 mx-auto mb-5">
                  {name === "Mr Krish Raj" ? (
                    <img
                      src="/assets/krish-raj.png"
                      alt={name}
                      className="w-24 h-24 rounded-full object-cover"
                      style={{
                        boxShadow:
                          "0 0 20px oklch(0.7 0.22 270 / 0.6), 0 0 40px oklch(0.7 0.22 270 / 0.25)",
                        border: "3px solid oklch(0.7 0.22 270 / 0.6)",
                      }}
                    />
                  ) : (
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center animate-glow-pulse"
                      style={{
                        background: "oklch(0.7 0.22 270 / 0.15)",
                        border: "2px solid oklch(0.7 0.22 270 / 0.35)",
                      }}
                    >
                      <span className="font-display font-bold text-3xl text-primary">
                        {name[0]}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">
                  {name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3 glow-text-primary">
                  {role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, oklch(0.78 0.24 195 / 0.06) 0%, transparent 50%), oklch(0.08 0.015 270)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-accent mb-1 glow-text-accent">
              Testimonials
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-3">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground">
              Trusted by buyers and sellers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ author, role, content, rating }) => (
              <div
                key={author}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }, (__, i) => (
                    <Star
                      key={`star-${author}-${rating - i}`}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                  &ldquo;{content}&rdquo;
                </p>
                <div
                  className="mt-5 pt-4 flex items-center gap-3"
                  style={{ borderTop: "1px solid oklch(0.35 0.06 270 / 0.3)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 animate-glow-pulse"
                    style={{
                      background: "oklch(0.7 0.22 270 / 0.2)",
                      border: "2px solid oklch(0.7 0.22 270 / 0.5)",
                    }}
                  >
                    <span className="font-display font-bold text-sm text-primary">
                      {author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {author}
                    </p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.55 0.22 270 / 0.35) 0%, transparent 60%), oklch(0.12 0.025 270)",
        }}
      >
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of entrepreneurs who trust WebStore for their digital
            acquisitions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="glow-primary hover:scale-105 transition-all duration-300 font-semibold px-8"
              asChild
            >
              <Link to="/browse">Browse Websites</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 font-semibold px-8"
              asChild
            >
              <Link to="/sell">List Your Website</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
