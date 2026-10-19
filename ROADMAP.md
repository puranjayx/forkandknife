# Roadmap: Fork & Knife (फोर्क & नाइफ) Website

## Phases Overview

### Phase 1: Foundation & Design Tokens
- [x] Project scaffolding with Vite + Vanilla HTML/CSS/JS (ES modules).
- [x] Install dependencies: `gsap`, `lenis`, `lucide`.
- [x] Extract / prepare image assets from `reference/website_images_pdf.pdf` into `/public/images/`.
- [x] Create `src/data/images.js` image manifest.
- [x] Define CSS design tokens in `src/css/variables.css` matching reference PDF + `ui-ux-pro-max` search.
- [x] Configure typography: Google Fonts (`Cinzel`, `Jost`, `Noto Sans Devanagari`).

### Phase 2: Semantic Layout & Content Architecture
- [x] Implement SEO metadata, Open Graph tags, and LocalBusiness/Restaurant JSON-LD.
- [x] Build all semantic HTML sections in exact PDF sequence:
  1. Branded Preloader
  2. Sticky Navbar with mobile menu
  3. Hero Orbit & Dish Carousel
  4. Marquee Strip
  5. About Section with Category Icons & Showcase Plate
  6. Popular Dishes Gallery (4 charcoal cards + CTA)
  7. Dish Feature Spotlight with 6 Callout Pointers & Leader Lines
  8. Host Your Special Day / Celebration Banner
  9. Fresh Flavors Every Day (Tri-column with center pan & pointer lines)
  10. Testimonials Carousel (Real reviews + 4.7 Google rating counter)
  11. Booking Table Form + Rustic Image Panel + Location/Hours info
  12. Footer
- [x] Wire up real verified content into all components.

### Phase 3: Motion, Interactivity & GSAP Animations
- [x] Setup unified Lenis smooth scroll + GSAP ticker synchronization.
- [x] Preloader animation with branded cutlery/plate motif and percentage counter into curtain reveal.
- [x] Interactive hero orbit: dish switching on click/pagination with arc rotation and plate cross-fade/scale.
- [x] Multi-depth parallax on floating ingredient elements (leaf, tomato, citrus, chili).
- [x] Sticky navbar hide-on-scroll-down / show-on-scroll-up with active scroll spy.
- [x] Spotlight callout line draw-in animations on scroll.
- [x] Interactive testimonial carousel with drag/touch swipe & auto-advance.
- [x] WhatsApp booking form validation and automatic URL generator.
- [x] Custom desktop cursor and magnetic button effects.
- [x] Respect `prefers-reduced-motion`.

### Phase 4: Responsive Design Polish & Cross-Device Tuning
- [x] Audit & tune breakpoints: 360px, 390px, 768px, 1024px, 1440px, 1920px.
- [x] Transform hero orbit smoothly into a touch-friendly swipeable carousel on mobile.
- [x] Ensure 44px+ tap targets, no horizontal scroll, proper `dvh` usage, and iOS safe-area insets.

### Phase 5: Performance, Accessibility & Verification
- [x] Verify 60fps animations (transform & opacity only, zero layout thrashing).
- [x] Preload hero assets & fonts (`font-display: swap`), lazy-load below-the-fold media.
- [x] Accessibility check: contrast ratios, focus rings, keyboard navigability, semantic tags, aria-labels.
- [x] Lighthouse audit execution & scoring.
- [x] Final user handover documentation: run commands, image swapping instructions, Lighthouse report.

