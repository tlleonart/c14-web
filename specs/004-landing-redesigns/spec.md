# Feature Specification: Premium Landing Page Redesigns

**Feature Branch**: `004-landing-redesigns`
**Created**: 2026-02-21
**Status**: Draft
**Input**: User description: "Redesign the landing page at three new routes /v2, /v3, /v4 with three completely different, stunning, professional designs. Full creative freedom — new components, animations, any technique needed. Must look like a world-class design agency made them. Clients section MUST be visible. Include animations. State of the art 2026 web design."

## Overview

Carbono14 is an AI and software development agency offering four core services: AI automation, AI development, web development, and custom software. The current landing page at `/` is a dark, elegant design with glass morphism effects.

This feature creates three alternative landing page designs at `/v2`, `/v3`, and `/v4`, each representing a radically different design philosophy. All three maintain the same content and functionality but present it through completely original visual identities with custom components, animations, and interactions. The goal is to choose one design to replace or augment the current page.

**Key constraint**: The clients section (dynamically loaded) MUST be prominently visible and styled on all three variants. The existing main page at `/` MUST remain completely unchanged.

## Design Direction

### Current Design Reference (what the client loves)
- **Primary accent**: `#d94e28` (warm orange-red) — retain across all variants
- **Dark backgrounds**: `#0a0a0a`, `#111111`
- **Light text hierarchy**: `#f1f5f9`, `#94a3b8`, `#64748b`
- **Fonts**: Playfair Display (display/headings) + Inter (body/UI)
- **Character**: Elegant, dark, warm accents, serif/sans contrast

### V2 — "Cinematic Narrative" (Immersive Storytelling)
**Mood**: A film-like scrolling experience. Each section feels like a scene. The visitor is taken on a guided journey through Carbono14's world.

- **Layout philosophy**: Full-viewport sections with scroll-snap behavior. Each section occupies the entire screen, creating a cinematic, slide-like progression. No traditional "scrolling past sections" — each one is a deliberate scene.
- **Hero**: Animated gradient mesh background (CSS `@property` animated gradients with orange/red/dark tones). Oversized display typography that fades in with a staggered word-by-word animation. A subtle floating particle effect in the background.
- **Services**: Bento grid layout — asymmetric card grid where cards have different sizes (2x2, 1x1, 1x2). Each card reveals on scroll with a staggered slide-up animation. Cards use glass-morphism with strong backdrop-blur.
- **Clients**: Infinite horizontal marquee — client logos scroll continuously in a smooth infinite loop, doubled for seamless repetition. Large logos with hover pause effect. Prominent section with "Trusted by" heading.
- **Contact**: Full-screen split layout — left half is a large motivational headline with decorative typography, right half is the contact form on a glass card.
- **CTA**: Full-viewport with large centered text, animated underline effect on the heading, and a pulsing CTA button.
- **Animations**: Scroll-triggered fade-ins, staggered reveals, smooth section transitions. Subtle parallax depth on decorative elements. Animated gradient mesh that slowly shifts colors.
- **Color palette**: Dark backgrounds `#0a0a0a` through `#111111`, primary `#d94e28` as the dominant accent, warm amber `#f59e0b` as secondary highlight, soft white `#f8fafc` for text.
- **Typography**: Playfair Display at dramatic sizes (8xl+) for section titles, Inter for body. Strong size contrast between headings and body text.

### V3 — "Swiss Editorial" (Premium Magazine)
**Mood**: Opening a luxury print magazine about technology. Clean, mathematical, typographically obsessed. Every pixel is intentional. White space is a feature, not empty space.

- **Layout philosophy**: Light mode. Asymmetric editorial grid with strong vertical rhythm. Numbered sections (01, 02, 03...) as large typographic design elements. Content arranged in unexpected column layouts — text in one column, imagery/cards offset in another.
- **Hero**: Clean and bold. Massive serif headline in Playfair Display taking up most of the viewport. A single thin orange-red line accent. Subtitle in small, widely-spaced uppercase Inter. Minimal — lets the typography do the work.
- **Services**: Horizontal scrolling card carousel (scrollable on both desktop and mobile). Each service is a tall vertical card with a large number (01, 02, 03, 04), service title, and features list. Cards have a subtle paper-like texture shadow. Scroll indicator dots below.
- **Clients**: Large section with client logos arranged in a clean grid on a slightly darker cream band. Each logo sits in a refined card with generous padding. Section numbered "03" in large display type.
- **Contact**: Two-column layout — left column has the form fields on a white card with subtle shadow, right column has supporting copy and decorative section number. Clean, uncluttered.
- **CTA**: Text-focused with a large Playfair italic headline, thin separator line, and a single elegant button.
- **Animations**: Subtle entrance animations — elements slide up 20px and fade in as they enter the viewport. Clean clip-path reveals on section transitions. No dramatic effects — restraint is the aesthetic.
- **Color palette**: Cream background `#faf8f5`, charcoal text `#1a1a1a`, medium gray `#6b7280`, warm white cards `#ffffff`, orange-red `#d94e28` only for interactive elements and accent lines.
- **Typography**: Playfair Display italic at extreme sizes for section titles and numbers, Inter Light/Regular for body. Generous line-height (1.8). Wide letter-spacing on small uppercase labels. Section numbers in ultra-light weight at 120px+.

### V4 — "Aurora Tech" (Futuristic AI Agency)
**Mood**: The command center of an advanced AI lab. Futuristic, tech-forward, with depth and dimensionality. Makes visitors think "these people are building the future."

- **Layout philosophy**: Dark mode with depth layers. Background has a subtle animated gradient aurora effect (slow-moving color bands in dark blue/purple/orange). Content floats above the background with glass-morphism cards and glowing accent borders.
- **Hero**: Large bold headline with an animated typing/reveal effect (text appears character by character, then stays). Animated grid lines in the background (matrix-like but subtle). A glowing orange-red orb floats and pulses slowly behind the text.
- **Services**: Cards with animated gradient borders (border shimmer effect using `@property` CSS animation). Each card has a glass-morphism background with strong blur. On hover, cards lift with a 3D transform (translateZ) and the border glow intensifies. Icons use the orange-red color with a soft glow.
- **Clients**: Dark glass band section with client logos in a grid. Each logo card has a subtle glass effect and a thin glowing border. Section has a gradient accent line above it.
- **Contact**: Glass-morphism form container floating over the aurora background. Form inputs have glowing focus states (orange-red glow on focus). The section background shows more of the aurora gradient.
- **CTA**: Full-width with an animated gradient text effect on the headline (text color shifts through a gradient). Large glowing CTA button with hover animation.
- **Animations**: Smooth CSS-only animations throughout. Aurora gradient shifts slowly (60-second loop). Card border shimmer (continuous subtle animation). Scroll-triggered fade-in entries. Typing effect on hero. Glowing pulse on accent elements. All animations use `prefers-reduced-motion` to disable gracefully.
- **Color palette**: Deep dark `#050510` through `#0f0f23` backgrounds, aurora accent tones (blue `#1e3a5f`, purple `#2d1b69`, orange `#d94e28`), bright white `#f0f0f0` text, glass surfaces `rgba(255,255,255,0.05)`.
- **Typography**: Inter at various weights for a technical feel. Bold 800/900 for headlines, Light 300 for body. Monospace accents for labels (`font-variant-numeric: tabular-nums`). Playfair Display reserved for a single dramatic quote or tagline.

## User Scenarios & Testing

### User Story 1 — V2 Cinematic Narrative Route (Priority: P1)

A potential client visits `/v2` and experiences an immersive, cinematic journey through Carbono14's offerings. Each section fills the viewport like a film scene. The scroll-snap navigation creates a deliberate, impactful progression. Animated reveals and the gradient mesh hero immediately communicate "premium technology agency." The clients marquee provides social proof. The split-screen contact section makes reaching out feel natural.

**Why this priority**: The cinematic approach is the most visually impactful and differentiating. It creates the strongest first impression and demonstrates the agency's creative capabilities.

**Independent Test**: Navigate to `/v2` — hero loads with gradient mesh animation and staggered text reveal. Scroll through all sections. Services bento grid renders with staggered animations. Clients marquee scrolls continuously with real client data. Contact form is functional. All anchor links work. Responsive at 320px, 768px, 1920px.

**Acceptance Scenarios**:

1. **Given** a visitor on the landing page, **When** they navigate to `/v2`, **Then** they see a full-viewport hero with animated gradient mesh background, staggered heading animation, and clear CTA buttons
2. **Given** V2 is displayed, **When** the visitor scrolls down, **Then** sections snap into view and content reveals with smooth animations
3. **Given** V2 is displayed, **When** the visitor reaches the services section, **Then** they see a bento grid with asymmetric card sizes and staggered reveal animations
4. **Given** V2 is displayed, **When** the visitor reaches the clients section, **Then** they see an infinite horizontal marquee of client logos loaded from the database, scrolling smoothly
5. **Given** V2 is displayed, **When** the visitor interacts with any element (nav, form, CTAs), **Then** all interactions work identically to the main page

---

### User Story 2 — V3 Swiss Editorial Route (Priority: P2)

A potential client visits `/v3` and sees a light-mode, magazine-style presentation of Carbono14's services. The clean typography, numbered sections, and editorial layout convey sophistication and attention to detail. The horizontal-scroll service cards create an engaging interactive moment. The overall impression is "premium design studio that happens to build AI."

**Why this priority**: The light-mode editorial approach is the most commercially versatile — it works for formal proposals, presentations, and appeals to corporate decision-makers who value clarity and professionalism.

**Independent Test**: Navigate to `/v3` — light cream background loads with clean typography. Sections are visibly numbered (01, 02, 03...). Service cards scroll horizontally. Clients grid loads with real data. Contact form works. All anchor links work. Responsive at all breakpoints.

**Acceptance Scenarios**:

1. **Given** a visitor on the landing page, **When** they navigate to `/v3`, **Then** they see a light cream background with large serif typography, section numbers, and a refined editorial layout
2. **Given** V3 is displayed, **When** the visitor reaches the services section, **Then** they can scroll horizontally through tall service cards numbered 01-04
3. **Given** V3 is displayed, **When** the visitor reaches the clients section, **Then** they see client logos in a clean grid with real data loaded from the database
4. **Given** V3 is displayed, **When** the visitor scrolls through sections, **Then** content enters with subtle slide-up fade-in animations
5. **Given** V3 is displayed on mobile (320px), **When** the layout reflows, **Then** horizontal scrolling cards adapt gracefully and no horizontal page overflow occurs

---

### User Story 3 — V4 Aurora Tech Route (Priority: P3)

A potential client visits `/v4` and is immersed in a futuristic AI-lab aesthetic. The animated aurora gradient background, glowing card borders, and typing hero effect communicate "cutting-edge technology." This design specifically appeals to tech-savvy buyers and startups who want to work with a forward-thinking agency.

**Why this priority**: The futuristic approach targets the tech audience specifically. It's the most niche but potentially the most memorable and shareable — visitors will remember "that agency with the incredible website."

**Independent Test**: Navigate to `/v4` — dark background with animated aurora gradient loads. Hero text types in with character-by-character animation. Service cards have shimmering gradient borders. Clients section shows real data. All interactions work. Animations respect `prefers-reduced-motion`. Responsive at all breakpoints.

**Acceptance Scenarios**:

1. **Given** a visitor on the landing page, **When** they navigate to `/v4`, **Then** they see a dark background with slowly animated aurora gradient, and the hero heading appears with a typing animation
2. **Given** V4 is displayed, **When** the visitor scrolls to services, **Then** they see glass-morphism cards with animated gradient borders that shimmer continuously
3. **Given** V4 is displayed, **When** the visitor hovers over a service card, **Then** the card lifts with a 3D transform and the border glow intensifies
4. **Given** V4 is displayed, **When** the visitor reaches the clients section, **Then** they see client logos on glass cards with real data from the database
5. **Given** V4 is displayed, **When** the user has `prefers-reduced-motion: reduce` enabled, **Then** all animations are disabled or minimized while content remains fully accessible

---

### Edge Cases

- What happens when the clients section has no data? The section hides gracefully on all three variants (same as main page behavior).
- What happens when images fail to load in the clients marquee/grid? A styled placeholder with the client's initial letter appears.
- What happens at viewport widths narrower than 320px? All three designs MUST NOT produce horizontal page overflow. Content stacks vertically.
- What happens when JavaScript is disabled? Static content sections (hero, services, CTA, footer) MUST still be visible via server-side rendering. Animations will not play but layout remains intact. The clients section (which depends on client-side data fetching) hides gracefully, consistent with the "no data" behavior above.
- What happens when a user has reduced motion preferences? All CSS and JS animations MUST respect `prefers-reduced-motion: reduce` — animations are replaced with static states or simple opacity transitions.
- What happens on a slow connection? The page must be usable and styled before animations load. Animations enhance but are not required for the experience.
- How do variants handle the existing header navigation anchors (#servicios, #contacto)? All three variants maintain the same section IDs so anchor navigation works identically.

## Requirements

### Functional Requirements

- **FR-001**: System MUST serve three new routes (`/v2`, `/v3`, `/v4`), each rendering a complete landing page with a distinct premium design
- **FR-002**: Each variant MUST include all content sections present on the main page: header navigation, hero, services, clients, contact form, call-to-action, footer, and structured data
- **FR-003**: The clients section MUST load and display real client data from the database on all three variants, with logos, names, and links visible and functional
- **FR-004**: All interactive functionality MUST work identically across all variants — anchor navigation (#servicios, #contacto), client links (open in new tab), contact form submission, CTA buttons
- **FR-005**: V2 (Cinematic Narrative) MUST feature scroll-snap full-viewport sections, animated gradient mesh hero, bento grid services layout, and infinite horizontal client marquee
- **FR-006**: V3 (Swiss Editorial) MUST feature a light-mode cream palette, numbered editorial sections, horizontal-scrolling service cards, and clean typographic grid layout
- **FR-007**: V4 (Aurora Tech) MUST feature animated aurora gradient background, typing hero animation, service cards with animated gradient borders and 3D hover transforms, and glass-morphism throughout
- **FR-008**: All three variants MUST be fully responsive (320px to 1920px+) with no horizontal page overflow at any viewport width
- **FR-009**: All three variants MUST meet WCAG 2.1 AA contrast requirements for text readability
- **FR-010**: All animations MUST respect the `prefers-reduced-motion` media query — reducing or eliminating motion for users who prefer it
- **FR-011**: The existing main landing page at `/` MUST remain completely unchanged — no modifications to existing files
- **FR-012**: Each variant MAY create new custom components, animations, and layouts — there is no restriction to reusing existing components only
- **FR-013**: Each variant MUST be visually distinct and immediately recognizable as a different design from the other two variants

## Success Criteria

### Measurable Outcomes

- **SC-001**: All three variant routes load and display complete styled content within 3 seconds on a 3G network connection
- **SC-002**: Zero functional regressions — every interactive element on each variant works identically to the main page
- **SC-003**: The clients section displays real client data (logos, names, links) on all three variants without requiring any user action
- **SC-004**: All three variants pass WCAG 2.1 AA automated contrast checks for primary text against backgrounds
- **SC-005**: No horizontal scrollbar appears at any viewport width from 320px to 1920px on any variant
- **SC-006**: The main page at `/` shows zero visual or functional changes after implementation
- **SC-007**: Each variant is immediately identifiable as a different design — a viewer can distinguish which version they are seeing within 2 seconds
- **SC-008**: Animations run at 60fps on modern hardware without jank or layout shift
- **SC-009**: With `prefers-reduced-motion: reduce` enabled, no significant motion is present on any variant while all content remains visible and functional

## Assumptions

- Existing Playfair Display and Inter variable fonts cover all weight/style needs for the three designs (no new font loading required)
- The clients data is fetched via the existing data layer and the Clients component or equivalent can be reused or adapted for each variant's unique layout
- New custom components (marquee, bento grid, typing animation, aurora background, etc.) will be created as variant-specific components — they do not need to be reusable across the project
- CSS-only animations are preferred where possible for performance. JavaScript animations are acceptable for complex effects (typing, intersection observer reveals)
- The three variants are for evaluation purposes — the client will choose one to keep and the others will be removed
- No A/B testing infrastructure is needed — variants are accessed by direct URL
- Each variant page can have its own complete page component with custom layout, not limited to wrapping existing components
