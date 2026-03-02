# Quickstart: Bauhaus Landing Page Redesigns

## Prerequisites

- Node.js installed
- Project dependencies installed (`npm install`)
- Development server running (`npm run dev`)

## Verification Steps

### 1. Main Page Unchanged (FR-010)

1. Navigate to `http://localhost:3000/`
2. Verify: Dark background (#0a0a0a), orange-red accents (#d94e28), glass morphism effects
3. Verify: All sections present — Header, Hero, Services, Clients, Contact, CTA, Footer
4. Verify: All interactions work — nav links, CTA buttons, contact form, client links

### 2. V2 — Geometric Bauhaus

1. Navigate to `http://localhost:3000/v2`
2. **Visual verification:**
   - Dark background, Bauhaus color triad visible (orange-red, blue #1a3a5c, yellow #f2c744)
   - Sharp corners everywhere (0px border-radius)
   - All-caps section headings with wide letter-spacing
   - Geometric decorative shapes (circles, triangles, colored blocks)
   - No gradients or glass effects — flat color only
   - Inter font for headings (not Playfair)
3. **Functional verification:**
   - All sections present and content matches main page
   - Navigation anchor links work (#servicios, #contacto)
   - Client logos load, URLs open in new tabs
   - Contact form accessible (via ContactForm component)
   - CTA buttons work
4. **Responsive verification:**
   - 320px: Content stacks, no horizontal overflow
   - 768px: Tablet layout adapts
   - 1920px: Desktop layout, geometric shapes visible

### 3. V3 — Neo-Brutalist Bauhaus

1. Navigate to `http://localhost:3000/v3`
2. **Visual verification:**
   - Pure black background (#000000) with off-white text (#f0ece4)
   - Orange-red (#d94e28) appears ONLY on CTAs and key highlights
   - Oversized headings (hero title extremely large)
   - Thick borders (3-4px) in off-white
   - No transitions on hover — instant state changes
   - No glass, no glow, no shadows — raw aesthetic
   - Playfair Display at dramatic sizes
3. **Functional verification:**
   - Same as V2 — all sections, all interactions work
4. **Responsive verification:**
   - 320px: Oversized text scales down gracefully, no overflow
   - 768px: Layout adapts
   - 1920px: Full brutalist impact visible

### 4. V4 — Warm Minimal Bauhaus

1. Navigate to `http://localhost:3000/v4`
2. **Visual verification:**
   - Cream background (#f5f0e8) — LIGHT MODE design
   - Charcoal text (#2a2a2a) with warm gray secondaries (#8a8278)
   - Orange-red (#d94e28) ONLY on buttons, links, and hover states
   - Generous whitespace, narrow content columns
   - Playfair Display italic for section headings
   - Slow, elegant hover transitions (500ms+)
   - Subtle hairline dividers between sections
   - Large border-radius on cards (2rem)
   - Premium, print-catalog feel
3. **Functional verification:**
   - Same as V2 — all sections, all interactions work
4. **Responsive verification:**
   - 320px: Generous spacing adapts, no overflow
   - 768px: Single-column elegance
   - 1920px: Centered layout with maximum breathing room

### 5. Cross-Variant Checks

- [ ] Each variant is visually distinct — immediately identifiable
- [ ] Clients section hides on all variants when no client data exists
- [ ] WCAG 2.1 AA contrast: verify text is readable on each variant's background
- [ ] No CSS from one variant leaks into another or the main page
- [ ] Browser back/forward between variants works correctly

### 6. Edge Cases

- [ ] Navigate directly to `/v2`, `/v3`, `/v4` (not from main page) — pages load correctly
- [ ] Refresh on variant page — page renders correctly
- [ ] Resize browser while on variant page — responsive reflow works
- [ ] Disable JavaScript — content still visible (SSR)
