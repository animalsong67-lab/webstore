# WebStore 2.0 — Ultra-Modern Premium Dark Marketplace

## App Category
Website marketplace — buy, sell, auction, value, and transfer digital assets with institutional-grade trust infrastructure.

## Aesthetic
Dark-first glassmorphism with electric neon accents. Retro-futuristic premium tech aesthetic comparable to Linear, Stripe, Vercel. Electric violet primary (OKLCH 270) with electric cyan secondary (OKLCH 195) used sparingly for highlights and active states. Radial gradient mesh hero backgrounds with vibrant light blooms. Bold, expressive typography hierarchy. Smooth entrance animations, scroll reveals, and hover micro-interactions. No flat white cards — all surfaces use backdrop-blur glassmorphism with semi-transparent backgrounds and glowing borders. CSS 3D transforms for depth on interactive elements.

## Color Palette (OKLCH)

| Token | Purpose | Light Value | Dark Value |
|-------|---------|-------------|------------|
| Background | Page base | 0.97 0.01 270 | 0.08 0.015 270 (deep purple-black) |
| Foreground | Body text | 0.12 0.02 270 | 0.95 0.01 270 (near-white) |
| Primary | CTAs, electric violet | 0.55 0.22 270 | 0.70 0.22 270 |
| Primary-fg | On primary | 0.05 0.01 270 | 0.05 0.01 270 |
| Secondary | Dark surfaces | 0.18 0.03 270 | 0.18 0.03 270 |
| Accent | Electric cyan | 0.78 0.24 195 | 0.78 0.24 195 |
| Muted | Subtle backgrounds | 0.16 0.02 270 | 0.16 0.02 270 |
| Card | Glassmorphism base | 0.13 0.02 270 / 0.7 | 0.12 0.02 270 / 0.8 |
| Border | Subtle glow border | 0.28 0.05 270 / 0.5 | 0.28 0.05 270 / 0.5 |
| Success | Neon green | 0.72 0.20 142 | 0.72 0.20 142 |
| Destructive | Vivid red | 0.65 0.22 22 | 0.65 0.22 22 |

## Typography
- **Display** (Bricolage Grotesque): Bold, expressive headings for hero, section titles, marketplace feature highlights; 700–900 weights.
- **Body** (DM Sans): Clean, legible UI text for descriptions, forms, listings; 400–700 weights.
- **Mono** (Geist Mono): Pricing, metrics, valuation estimates, code snippets.

## Structural Zones

| Zone | Treatment |
|------|----------|
| Header/Nav | `.glass-card` with glow-border, sticky top, blur(16px) backdrop, semi-transparent dark bg |
| Hero | `.gradient-hero` radial mesh (violet, cyan, purple blooms), large display type, `.glow-text-primary`, floating cards with `.card-3d-hover` |
| Feature Cards | `.glass-card-hover` on hover scale + glow, `.perspective-3d` with subtle rotateX/Y, hover lift |
| Sections | Alternate `bg-background` / `bg-muted/10` for visual rhythm, `.glass-card` panels |
| Buttons | `.ripple-button` with radial ripple on click, `.glow-button-hover` with glow on hover, smooth transitions |
| Testimonials | `.glass-card` avatars with alternating gradient overlays, carousel scroll |
| FAQ | `.glass-card` accordion, CSS `maxHeight: 0 → 300px` smooth transition, chevron rotation |
| Pricing | `.glass-card` rows with glowing featured tier border, `.glow-accent` for premium plan |
| Footer | `bg-muted/20` with `border-t border-border/50`, `.glass-card` sections, hover link animations |
| AI Chat | Floating `.glass-card-elevated` widget with `.glow-primary` border, smooth scroll, auto-reply |

## Glassmorphism System
- `.glass-card`: `backdrop-blur(16px)`, `bg oklch(0.13 0.02 270 / 0.7)`, `border 1px glow`
- `.glass-card-elevated`: `backdrop-blur(24px)`, `bg oklch(0.14 0.025 270 / 0.85)`, deeper inset highlight
- `.glass-card-hover:hover`: enhanced bg, violet glow border, lifted shadow

## Glow & Light System
- `.glow-primary`: box-shadow electric violet glow (0.7 0.22 270)
- `.glow-accent`: box-shadow electric cyan glow (0.78 0.24 195)
- `.glow-text-primary` / `.glow-text-accent`: text-shadow glows for headings
- `.glow-button-hover`: button hover glow with lift effect
- `.gradient-text`: diagonal gradient violet → cyan → green text overlay

## Hero Gradient
`.gradient-hero` composite: radial blob violet at (30%, 50%), radial blob cyan at (70%, 30%), radial blob purple at (50%, 80%), layered over deep bg.

## Motion & Interactions
- `.animate-float`: 4s translateY oscillation for floating elements, ease-in-out
- `.animate-glow-pulse`: 2.5s glow intensity oscillation, ease-in-out
- `.animate-shimmer`: 2s horizontal shimmer sweep, linear
- `.animate-slide-in-right`: 0.4s entrance from right, ease-out
- `.animate-scale-in`: 0.3s scale + fade entrance, ease-out
- `.animate-scroll-reveal`: on-scroll fade-in + translateY, 0.6s ease-out
- `.ripple-button`: radial ripple effect on click, 0.6s expand + fade
- `.card-3d-hover:hover`: CSS 3D rotateX(5deg) rotateY(-8deg) scale(1.02), cubic-bezier(0.34, 1.56, 0.64, 1)
- Stagger animation-delay: child index × 0.1s for sequential reveals
- Honor `prefers-reduced-motion: reduce` (no auto-play, reduced duration)

## Responsive & Dark Mode
- Mobile-first: min 44px touch targets, hamburger glass nav slide-out on mobile
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px)
- Dark theme only (no light mode toggle per requirements); all surfaces optimized for dark viewing
- Contrast: foreground on background ≥ 0.7 lightness diff, ≥ AA+

## Quality Bar
Linear, Stripe, Notion, Vercel benchmark. Tight visual system: 2 font families, 3–5 core colors, 4 type tiers, dominant smooth transition pattern. Every zone has intentional treatment. No flat, unstyled prototype surfaces. Premium spacing and hierarchy throughout.
