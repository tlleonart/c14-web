# Quickstart Testing Guide: Premium Landing Page Redesigns

**Feature**: 004-landing-redesigns
**Date**: 2026-02-21

## Prerequisites

1. Dev server running: `npm run dev` (or `pnpm dev`)
2. Convex backend running with client data populated
3. Modern browser (Chrome, Firefox, Safari, Edge)

## Test Flow

### Step 1: Verify Main Page Unchanged

1. Navigate to `http://localhost:3000/`
2. Verify: Dark background (#0a0a0a), orange-red accents, glass morphism cards
3. Verify: All sections present — Hero, Services, Clients, Contact, CTA, Footer
4. Verify: Anchor links work (#servicios, #contacto)
5. Verify: Contact form submission works
6. **Expected**: Zero visual or functional changes from before implementation

### Step 2: V2 — Cinematic Narrative

1. Navigate to `http://localhost:3000/v2`
2. **Hero section**:
   - Verify: Full-viewport hero with animated gradient mesh background (slowly shifting colors)
   - Verify: Heading text appears word-by-word with staggered fade-up animation
   - Verify: Floating particle dots visible in background
   - Verify: Two CTA buttons ("Conversemos", "Ver servicios")
3. **Scroll behavior**:
   - Verify: Sections snap into view on scroll (scroll-snap)
   - Verify: Each section fills the viewport
4. **Services section (Bento Grid)**:
   - Verify: 4 service cards in asymmetric bento grid layout (some cards larger than others)
   - Verify: Cards reveal with staggered slide-up animation on scroll
   - Verify: Glass-morphism card styling
5. **Clients section (Marquee)**:
   - Verify: Client logos scroll continuously in horizontal marquee
   - Verify: Real client data loaded from database (logos, names)
   - Verify: Marquee pauses on hover
   - Verify: "Empresas que confian en nosotros" heading visible
6. **Contact section (Split layout)**:
   - Verify: Split layout — motivational headline on left, contact form on right
   - Verify: Contact form is functional (submit sends data)
7. **CTA section**:
   - Verify: Full-viewport with large heading and animated underline
   - Verify: Pulsing CTA button
8. **Anchor links**:
   - Verify: Header nav links (#servicios, #contacto) scroll to correct sections

### Step 3: V3 — Swiss Editorial

1. Navigate to `http://localhost:3000/v3`
2. **First impression**:
   - Verify: Light cream background (#faf8f5), NOT dark mode
   - Verify: Clean, magazine-like typography with Playfair Display
3. **Hero section**:
   - Verify: Massive serif headline taking most of viewport
   - Verify: Decorative section number "01" visible as background element
   - Verify: Thin orange-red accent line
   - Verify: Small uppercase subtitle with wide letter-spacing
4. **Services section (Carousel)**:
   - Verify: Horizontal scrolling card carousel
   - Verify: Cards numbered 01-04 with service details
   - Verify: Scroll snap on each card
   - Verify: Scroll indicator dots below carousel
   - Verify: Section number "02" visible
5. **Clients section (Grid)**:
   - Verify: Clean grid on slightly darker cream band
   - Verify: Real client data loaded from database
   - Verify: Section number "03" visible
   - Verify: Refined white cards with generous padding
6. **Contact section (Two-column)**:
   - Verify: Form on left, supporting copy on right
   - Verify: Section number "04" visible
   - Verify: Contact form is functional
7. **CTA section**:
   - Verify: Italic Playfair headline, thin separator, elegant button
8. **Animations**:
   - Verify: Subtle slide-up fade-in as sections enter viewport
   - Verify: No dramatic animations — restraint is intentional

### Step 4: V4 — Aurora Tech

1. Navigate to `http://localhost:3000/v4`
2. **First impression**:
   - Verify: Deep dark background (#050510)
   - Verify: Animated aurora gradient visible (slowly shifting color blobs in blue/purple/orange)
3. **Hero section**:
   - Verify: Heading types in character-by-character with blinking cursor
   - Verify: Glowing orange-red orb pulses behind text
   - Verify: Subtitle and CTA buttons appear after typing completes
4. **Services section**:
   - Verify: Cards with animated shimmer gradient borders (rotating conic gradient)
   - Verify: Glass-morphism card backgrounds
   - Verify: Cards lift with 3D transform on hover
   - Verify: Icon has orange-red glow effect
5. **Clients section**:
   - Verify: Dark glass band with gradient accent line above
   - Verify: Real client data loaded from database
   - Verify: Logo cards have glass effect and subtle glowing border
6. **Contact section**:
   - Verify: Glass form container floating over aurora
   - Verify: Input fields have glowing orange-red focus states
   - Verify: Contact form is functional
7. **CTA section**:
   - Verify: Animated gradient text on headline (colors shift through gradient)
   - Verify: Large glowing CTA button with hover animation
8. **Aurora background**:
   - Verify: Aurora gradient is visible throughout all sections
   - Verify: Gradient shifts slowly (~60 second loop)

### Step 5: Responsive Testing (All Variants)

Test each variant at these viewport widths:

**1920px (Desktop)**:
- All layouts display correctly
- Bento grid (V2) shows asymmetric layout
- Horizontal carousel (V3) shows multiple cards
- Service cards (V4) in multi-column grid

**768px (Tablet)**:
- V2: Scroll-snap changes to `proximity` (more forgiving)
- V3: Carousel cards narrower but still scrollable
- V4: Service cards may be 2-column or single column
- No horizontal page overflow on any variant

**320px (Mobile)**:
- V2: Single column layout, particles reduced, marquee still scrolls
- V3: Single column, carousel cards still scrollable, section numbers scale
- V4: Single column, no 3D hover, aurora still visible
- **CRITICAL**: No horizontal scrollbar on any variant at this width

### Step 6: Accessibility — Reduced Motion

1. Enable `prefers-reduced-motion: reduce` in browser dev tools (Rendering tab)
2. **V2**: No gradient mesh animation, no particle movement, no marquee scroll, no staggered reveals (content visible immediately)
3. **V3**: No slide-up animations (content visible immediately)
4. **V4**: Aurora blobs static (still visible as colors), no typing animation (text visible immediately), no shimmer borders (static gradient), no orb pulse
5. **All variants**: Content remains fully visible and functional

### Step 7: Accessibility — Contrast

- V2: White `#f8fafc` on dark `#0a0a0a` — ratio ~18.5:1 (PASS AA)
- V3: Charcoal `#1a1a1a` on cream `#faf8f5` — ratio ~15.3:1 (PASS AA)
- V4: White `#f0f0f0` on dark `#050510` — ratio ~18.2:1 (PASS AA)

### Step 8: Visual Differentiation

View all three variants side by side (or in quick succession):
- **V2**: Cinematic, dark, scroll-snap, gradient mesh, marquee = "immersive film"
- **V3**: Light cream, editorial, numbered sections, horizontal carousel = "luxury magazine"
- **V4**: Deep dark, aurora gradient, typing animation, shimmer borders = "AI lab command center"
- Each variant should be immediately recognizable as a different design within 2 seconds

## Quick Smoke Test

If time is limited, run this abbreviated test:

1. `http://localhost:3000/` — main page unchanged
2. `http://localhost:3000/v2` — dark, scroll-snap, gradient mesh hero, client marquee scrolling
3. `http://localhost:3000/v3` — light cream, massive serif headline, horizontal service cards
4. `http://localhost:3000/v4` — deep dark aurora, typing hero, shimmer border cards
5. Resize to 320px on each — no horizontal overflow
6. Submit contact form on any variant — form works
