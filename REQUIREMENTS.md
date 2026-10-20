# Requirements Document: Fork & Knife (फोर्क & नाइफ) Website

## 1. Project Overview
A production-quality, animation-rich, responsive single-page website for **Fork & Knife (फोर्क & नाइफ) - Cafe - Dine-in and Takeaway** in Garhi Cantt, Dehradun. The design faithfully recreates the layout, dark aesthetic, floating ingredient elements, circular hero orbit, spotlight callouts, and booking image panel from `reference/design.pdf` (`reference/website_images_pdf.pdf`).

## 2. Verified Real Content (Zero Hallucination)
- **Business Name**: Fork & Knife / फोर्क & नाइफ
- **Tagline/Sub**: Cafe · Dine-in & Takeaway
- **Rating**: 4.7 ★★★★★ (35 Google reviews)
- **Price Range**: ₹1–200 per person
- **Address**: Shaheed Durgamal Rd, Garhi Cantt, Garhi Cantonment, Nimbuwala, Dehradun, Uttarakhand 248003
- **Phone**: 097614 14360 (clickable `tel:09761414360`)
- **Plus Code**: 923F+25 Dehradun
- **Operating Hours**: Opens 11 am (closing time unknown; display "Opens 11 am" only)
- **Menu Highlights**:
  - Veg Momo / Veg Steam Momo
  - Chicken Lollipop
  - White Sauce Pasta
  - Jhol Momo
  - Cheese Sandwich
  - "Kothe" Momos (Kothey Pan-Fried Momos)
- **Customer Reviews**:
  1. *Deepika K Thapa*: "Love this place... They do take some time but the quality and taste are great."
  2. *Bhumika Rawat*: "Amazing food, freshly made. Do visit."
  3. *Rahul Chettri*: "Food is really good, their servicing is also very good and the prices are also good."
  4. *Google Review*: "Such a nice place, service is good and food is damn good."
- **Booking CTA**: "Book a Table" (warm amber/orange `#D9820F`). Submitting validates inputs and triggers WhatsApp/tel link with pre-filled details.
- **Directions CTA**: Direct link to Google Maps using address and Plus Code `923F+25 Dehradun`.

## 3. Design & Theme Requirements (Derived from Reference PDF & UI-UX-Pro-Max)
- **Background**: Near-black `#0A0705` with subtle warm dark undertone and charcoal brick texture.
- **Card Surface**: Charcoal `#2B2B2B` / `rgba(43, 43, 43, 0.75)` with subtle glass border `rgba(255, 255, 255, 0.08)`.
- **Accent Primary**: Vibrant Amber-Orange `#D9820F` / `#E08518` (glow `#d9820f33`).
- **Accent Secondary**: Golden Amber `#F59E0B`.
- **Text**: Primary White `#FAFAF9`, Muted `#C8C8C8`, Subtle `#8E8E93`.
- **Typography**:
  - Headings: `Cinzel` (Display Roman Titling, uppercase, wide letter-spacing).
  - Body & UI: `Jost` (Geometric Sans, weights 300/400/500/600).
  - Hindi Brand Text: `Noto Sans Devanagari` / `Rozha One`.
- **Decorative Elements**: Floating ingredients (chili, garlic, basil, tomato, citrus, spices) with multi-layer GSAP parallax.

## 4. Section Architecture (Matching PDF Sequence)
1. **Branded Preloader**: Logo, fork & knife motif, progress counter, smooth curtain wipe.
2. **Sticky Header / Navbar**: Logo ("Fork & Knife"), links (Home, Menu, About, Reviews, Contact), animated active indicator, orange "Contact Us" button, responsive mobile drawer.
3. **Orbit Hero**: Circular arc menu with rotating dishes, central hero plate, dish titles, 01–04 pagination, floating ingredient layers. (Converts to smooth touch carousel on mobile).
4. **Marquee Dish Strip**: Subtle kinetic typography separator.
5. **About Section ("Experience Authentic Flavors of Dehradun")**: Narrative copy, 4 category cards (Starters & Momos, Mains & Pastas, Beverages & Shakes, Quick Bites & Add-ons), oversized specialty plate.
6. **Popular Dishes Gallery**: 4 charcoal cards with overlapping circular dish photos (Veg Steam Momo, Crispy Chicken Lollipop, Creamy White Sauce Pasta, Signature Jhol Momo), "Read More", and "View Full Menu" button.
7. **Dish Feature Spotlight**: Hero dish with interactive callout pointer lines and ingredient badges.
8. **Host Your Special Day / Celebrations Banner**: Slate/wood background, 2 celebration cards, skewer/platter showcase, "Enquire for Celebrations" CTA.
9. **Fresh Flavors Every Day**: 3 left value badges (Authentic Recipes, Fresh Ingredients, Cozy Ambience), center sizzling pan/wok, 3 right menu categories with leader lines.
10. **Testimonials Carousel**: Swipe/drag card carousel featuring the 4 real Google reviews, rating badge (4.7 ★ counter), reviewer avatars/stars.
11. **Booking & Location Section**: Split container with Table Booking form (Name, Phone, Time, Message -> opens WhatsApp) + Rustic wooden panel visual + Location card (Garhi Cantt address, "Opens 11 am", `tel:09761414360`, Google Maps directions).
12. **Footer**: Brand statement, quick links, timings, Dehradun address, social icons, copyright.

## 5. Technical & Performance Constraints
- Vanilla ES Modules + Vite + CSS (no heavy UI frameworks).
- Lenis smooth scroll + GSAP ScrollTrigger synchronized on a single requestAnimationFrame ticker.
- Only animate `transform` and `opacity` (60fps mobile target).
- Single source of truth for assets: `src/data/images.js`.
- Responsive breakpoints: 360px, 390px, 768px, 1024px, 1440px, 1920px. Fluid sizing with `clamp()`, `dvh`.
- Respect `prefers-reduced-motion`.
- SEO & Schema: LocalBusiness / Restaurant JSON-LD schema with complete geo-coordinates and address.
