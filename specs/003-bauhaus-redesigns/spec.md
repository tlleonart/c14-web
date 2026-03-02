# Feature Specification: Bauhaus Landing Page Redesigns

**Feature Branch**: `003-bauhaus-redesigns`
**Created**: 2026-02-21
**Status**: Draft
**Input**: User description: "Add three routes, v2, v3 and v4, and make 3 complete redesigns of the page. Bauhaus inspired, modern, minimalist but attractive to sell our services, respect the components functionality and elements. Three versions must be completely different and original, explore different color palettes, but keep in mind that I love the current colours."

## Overview

Three alternative landing page designs accessible at `/v2`, `/v3`, and `/v4`, each presenting a distinct Bauhaus-inspired visual identity while preserving the exact same functionality and content as the current landing page (`/`). All existing components (Header, Hero, Services, Clients, ContactSection, CallToAction, Footer, JsonLd) remain functionally identical — only visual presentation changes through new CSS modules per version.

## Design Direction

### Current Design Reference (to preserve appreciation for)
- **Primary**: `#d94e28` (warm orange-red)
- **Backgrounds**: `#0a0a0a`, `#111111` (deep dark)
- **Text**: `#f1f5f9`, `#94a3b8`, `#64748b` (light hierarchy)
- **Typography**: Playfair Display (display), Inter (sans-serif)
- **Effects**: Glass morphism, subtle glows, smooth transitions
- **Character**: Elegant, dark, warm accents, serif/sans contrast

### V2 — Geometric Bauhaus
**Mood**: Bold primary shapes, strong grid discipline, Kandinsky-meets-digital.
- **Color palette**: Keep `#d94e28` as primary. Introduce `#1a3a5c` (Bauhaus blue) and `#f2c744` (Bauhaus yellow) as secondary accents. Background stays dark (`#0c0c0c`). White (`#fafafa`) for high-contrast type.
- **Typography**: Geometric sans-serif feel — use Inter at heavier weights (700, 900) for headings instead of Playfair. All-caps section titles with wide letter-spacing.
- **Layout**: Strict rectangular grid with visible structure. Asymmetric compositions. Thick colored borders and dividers as design elements. Cards use sharp 0px border-radius.
- **Signature elements**: Colored geometric shapes (circles, triangles, squares) as decorative overlays. Hard color blocks as section separators. No gradients — flat color only.

### V3 — Neo-Brutalist Bauhaus
**Mood**: Raw, expressive, high-contrast, Moholy-Nagy photography meets digital brutalism.
- **Color palette**: Monochrome base — pure black (`#000000`) and off-white (`#f0ece4`). Single accent: `#d94e28` used sparingly for CTAs and key highlights only. No other colors.
- **Typography**: Extreme typographic contrast — oversized display headings (8xl+), tiny body text. Mixed weights. Text used as visual element itself. Playfair Display at extreme sizes for drama.
- **Layout**: Broken grid, overlapping elements, generous whitespace alternating with dense blocks. Full-bleed sections. Deliberate visual tension.
- **Signature elements**: Thick black borders (3-4px), underline accents, rotated text labels, exposed structure (visible grid lines), raw/unpolished aesthetic. Hover states are instant (no transitions).

### V4 — Warm Minimal Bauhaus
**Mood**: Restrained elegance, Mies van der Rohe "less is more", warm material palette.
- **Color palette**: Warm neutrals — cream background (`#f5f0e8`), charcoal text (`#2a2a2a`), warm gray (`#8a8278`). The `#d94e28` appears only in interactive elements (buttons, links, hover states). Light mode design.
- **Typography**: Refined and airy. Inter Light/Regular for body, Playfair Display Italic for section headings. Generous line-height (1.8). Restrained sizing.
- **Layout**: Centered single-column for content, maximum whitespace. Wide margins. Symmetrical and balanced. Generous padding between sections. Large border-radius (2xl) on cards.
- **Signature elements**: Subtle hairline dividers, delicate hover animations (slow transitions 500ms+), muted shadows, plenty of breathing room. Feels like a premium print catalog.

## User Scenarios & Testing

### User Story 1 — V2 Geometric Bauhaus Route (Priority: P1)

A visitor navigates to `/v2` and sees the full landing page redesigned with a Geometric Bauhaus aesthetic. All sections are present (Header, Hero, Services, Clients, Contact, CallToAction, Footer) with the same content and functionality as the main page, but with a bold geometric visual treatment featuring primary shapes, strong grid structure, and the Bauhaus primary color triad.

**Why this priority**: Establishes the foundational pattern for route-based design variants. Once V2 works, V3 and V4 follow the same architecture.

**Independent Test**: Navigate to `/v2` → all sections render with geometric Bauhaus styling. Click links, submit contact form, verify all interactive elements work. Client logos load, URLs open in new tabs. Compare with `/` to confirm same content, different styling.

**Acceptance Scenarios**:

1. **Given** a visitor on the landing page, **When** they navigate to `/v2`, **Then** they see the complete landing page with Geometric Bauhaus styling including Bauhaus blue/yellow accents, sharp corners, geometric shapes, and all-caps section titles
2. **Given** V2 is displayed, **When** the visitor interacts with any element (navigation, links, contact form, CTA buttons), **Then** all interactions work identically to the main landing page
3. **Given** V2 is displayed on a mobile device (320px), **When** the layout reflows, **Then** all content remains accessible and the geometric design adapts without horizontal overflow

---

### User Story 2 — V3 Neo-Brutalist Bauhaus Route (Priority: P2)

A visitor navigates to `/v3` and experiences a Neo-Brutalist Bauhaus design with high contrast, extreme typography, broken grid layouts, and a raw aesthetic. Only black, off-white, and the primary orange-red accent color are used.

**Why this priority**: Explores the most visually extreme direction — validates that the component architecture supports radically different layouts.

**Independent Test**: Navigate to `/v3` → all sections render with brutalist styling. Verify monochrome palette with sparse orange-red accents. Test all functionality. Verify oversized headings and broken grid on desktop, graceful reflow on mobile.

**Acceptance Scenarios**:

1. **Given** a visitor on the landing page, **When** they navigate to `/v3`, **Then** they see the complete landing page with Neo-Brutalist Bauhaus styling including monochrome palette, oversized typography, thick black borders, and raw aesthetic
2. **Given** V3 is displayed, **When** the visitor interacts with any element, **Then** all interactions work identically to the main landing page
3. **Given** V3 is displayed, **When** the visitor hovers over interactive elements, **Then** transitions are instant (no ease/delay) maintaining the brutalist feel

---

### User Story 3 — V4 Warm Minimal Bauhaus Route (Priority: P3)

A visitor navigates to `/v4` and sees a Warm Minimal Bauhaus design with light cream backgrounds, refined typography, generous whitespace, and a restrained use of the primary orange-red color only for interactive elements.

**Why this priority**: Represents the most commercially approachable variant — the calm, premium aesthetic that could become the production design.

**Independent Test**: Navigate to `/v4` → all sections render with warm minimal styling. Verify light-mode cream palette, delicate animations, and refined typography. Test all functionality. Verify generous spacing and centered layout.

**Acceptance Scenarios**:

1. **Given** a visitor on the landing page, **When** they navigate to `/v4`, **Then** they see the complete landing page with Warm Minimal Bauhaus styling including cream backgrounds, charcoal text, generous whitespace, and Playfair Display italic headings
2. **Given** V4 is displayed, **When** the visitor interacts with any element, **Then** all interactions work identically to the main landing page
3. **Given** V4 is displayed, **When** the visitor scrolls through sections, **Then** transitions are slow and elegant (500ms+) with subtle hover effects

---

### Edge Cases

- What happens when a visitor navigates to `/v2`, `/v3`, or `/v4` on a viewport narrower than 320px? The design MUST NOT produce horizontal overflow; content stacks vertically.
- What happens when the Clients section has no data? Same behavior as main page — section is hidden on all three variants.
- What happens when images fail to load in any variant? Same fallback placeholder behavior as the main page.
- What happens when JavaScript is disabled? Content MUST still be visible (SSR), only client-side interactions (tRPC data fetching) may be absent.
- How do the three variants handle dark mode / light mode? V2 and V3 are dark-mode designs. V4 is light-mode. No toggle is needed — each route has a fixed color scheme.

## Requirements

### Functional Requirements

- **FR-001**: System MUST serve three new routes (`/v2`, `/v3`, `/v4`), each rendering the complete landing page with a distinct Bauhaus-inspired design
- **FR-002**: Each variant MUST include all sections present on the main page: Header, Hero, Services, Clients, ContactSection, CallToAction, Footer, and JsonLd structured data
- **FR-003**: All interactive functionality MUST work identically across all variants — navigation links, client URL links (new tab), contact form submission, CTA buttons
- **FR-004**: Each variant MUST define its own page-level CSS module with theme overrides and wrapper styles, without modifying the original component CSS files used by the main page
- **FR-005**: V2 (Geometric Bauhaus) MUST use sharp corners (0px border-radius), geometric decorative shapes, Bauhaus color triad (`#d94e28`, `#1a3a5c`, `#f2c744`), and all-caps section headings
- **FR-006**: V3 (Neo-Brutalist Bauhaus) MUST use a strict monochrome palette (black `#000000`, off-white `#f0ece4`) with `#d94e28` only for CTAs and key highlights, oversized typography, and instant hover transitions
- **FR-007**: V4 (Warm Minimal Bauhaus) MUST use a light warm palette (cream `#f5f0e8`, charcoal `#2a2a2a`), `#d94e28` only for interactive elements, generous whitespace, and slow transitions (500ms+)
- **FR-008**: All three variants MUST be fully responsive (320px to 1920px+) with no horizontal overflow at any viewport width
- **FR-009**: All three variants MUST meet WCAG 2.1 AA contrast requirements for their respective color palettes
- **FR-010**: The existing main landing page at `/` MUST remain completely unchanged — no modifications to existing component files or styles

### Key Entities

- **Design Variant**: A complete visual re-skin of the landing page, identified by route (`/v2`, `/v3`, `/v4`), containing variant-specific CSS modules for each component
- **Component**: A functional UI section (Hero, Services, Clients, etc.) that accepts different styling through CSS module injection while maintaining identical behavior

## Success Criteria

### Measurable Outcomes

- **SC-001**: All three variant routes load and display complete content within 3 seconds on a standard connection
- **SC-002**: Zero functional regressions — every interactive element on each variant works identically to the main page
- **SC-003**: All three variants pass WCAG 2.1 AA automated contrast checks
- **SC-004**: Each variant is visually distinguishable from the others — a viewer can immediately identify which version they are seeing
- **SC-005**: No horizontal scrollbar appears at any viewport width from 320px to 1920px on any variant
- **SC-006**: The main page at `/` shows zero visual or functional changes after implementation
- **SC-007**: Each variant accurately reflects its Bauhaus sub-style (Geometric, Neo-Brutalist, Warm Minimal) as described in the Design Direction section

## Assumptions

- The existing component architecture supports receiving different CSS modules without code changes (CSS Modules scope styles by default)
- Each variant page will import the same React components but apply variant-specific CSS module overrides
- No new fonts need to be loaded — existing Inter and Playfair Display cover all variant needs, using different weights/styles
- The three variants are for evaluation purposes — the user will later choose one to replace or augment the main design
- No A/B testing infrastructure is needed — variants are manually accessible by URL
- SEO metadata (JsonLd) content remains identical across all variants
- Header navigation does not include links to the variant routes (they are accessed by direct URL)
