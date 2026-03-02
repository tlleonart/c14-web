# Research: Premium Landing Page Redesigns

**Feature**: 004-landing-redesigns
**Date**: 2026-02-21

## Codebase Architecture Findings

### Component Structure

All existing landing components follow a consistent pattern:
- Server components by default, `'use client'` only when needed (Clients, ClientCard, ContactForm)
- CSS Modules with design tokens from `variables.css`
- Hardcoded `rgba()` values in several places (Header background, ServiceCard hover/icon, Hero glow/grid)

### Key Components for Reuse

| Component | Location | Client? | Reusable As-Is? |
|-----------|----------|---------|-----------------|
| Header | `src/shared/components/Header` | No | Yes — CSS override via wrapper |
| Footer | `src/shared/components/Footer` | No | Yes — CSS override via wrapper |
| JsonLd | `src/shared/components/JsonLd` | No | Yes |
| Button | `src/shared/components/Button` | No | Yes |
| Icon | `src/shared/components/Icon` | No | Yes |
| ContactForm | `src/modules/contact/components/ContactForm` | Yes | Yes |
| services data | `src/modules/landing/data/services.ts` | N/A | Yes — import data directly |

### Data Layer

- **Clients**: Fetched via `trpc.clients.list.useQuery()` in `Clients.tsx`. Returns `{ _id, name, imageUrl, url }[]`. Any component using this MUST be `'use client'`.
- **Contact form**: Uses `useContactForm()` hook with tRPC mutation. ContactForm component is self-contained.
- **Services**: Static data from `services.ts` — 4 services with `{ id, title, description, icon, features[] }`.

### Hardcoded Values That Affect Variant Styling

- `Header.module.css`: `background: rgba(10, 10, 10, 0.8)` — must override for V3 light mode
- `Services.module.css`: `.card:hover { background: rgba(217, 78, 40, 0.04) }`, `.cardIcon { background: rgba(217, 78, 40, 0.1) }`
- `Hero.module.css`: `.glow` and `.grid` use hardcoded rgba gradients
- `ClientCard.module.css`: Glass background with hardcoded rgba

### Font Loading

Fonts loaded in `layout.tsx` as CSS variables: `--font-display` (Playfair Display) and `--font-sans` (Inter). Available globally across all routes.

## Technical Research Findings

### 1. CSS @property for Animated Gradients

**Decision**: Use CSS `@property` declarations in `globals.css` for animated gradient custom properties.

**Rationale**: CSS Modules scope class names but cannot properly scope `@property` at-rules. Placing them in globals.css ensures they work correctly. Only 6 properties needed (gradient angle, positions, aurora hues, shimmer angle).

**Alternatives considered**: JavaScript animation libraries (GSAP, Framer Motion) — rejected because CSS-only achieves 60fps with zero bundle cost.

### 2. Scroll-Snap for V2 Cinematic Sections

**Decision**: Use `scroll-snap-type: y mandatory` on the page container with `scroll-snap-align: start` on each section.

**Rationale**: Native browser behavior, no JavaScript needed, smooth on all modern browsers.

**Implementation detail**: Use `scroll-snap-type: y proximity` on mobile (< 768px) for more forgiving touch scrolling. Each section gets `min-height: 100vh` (not fixed height) to accommodate variable content.

### 3. Infinite Marquee for V2 Client Logos

**Decision**: Duplicate the client logo list into two identical flex rows, animate the container with `translateX(0)` to `translateX(-50%)` in a continuous CSS animation.

**Rationale**: Pure CSS, seamless loop, no JavaScript needed. Pause on hover via `animation-play-state: paused`.

**Implementation detail**: The component renders `[...clients, ...clients]` in a single flex container. The animation duration should be proportional to the number of clients (e.g., `clients.length * 3s`).

### 4. Bento Grid for V2 Services

**Decision**: CSS Grid with explicit `grid-template-areas` defining asymmetric card sizes.

**Rationale**: CSS Grid natively supports asymmetric layouts. No JavaScript needed.

**Implementation detail**: 4 services map to a 3-column grid with areas like:
```
"automation automation ai"
"web software software"
```
On mobile (< 768px), collapse to single column.

### 5. Horizontal Scroll Carousel for V3 Services

**Decision**: `overflow-x: auto; scroll-snap-type: x mandatory` with flex children.

**Rationale**: Native horizontal scrolling with snap points. Works on both desktop (mouse wheel + drag) and mobile (swipe).

**Implementation detail**: Container hides scrollbar with `::-webkit-scrollbar { display: none }` and `scrollbar-width: none`. Scroll indicator dots use IntersectionObserver to track active card.

### 6. Aurora Gradient Background for V4

**Decision**: Multiple absolutely-positioned blurred radial-gradient divs with `mix-blend-mode: screen`, animated via CSS `transform: translate()`.

**Rationale**: Composites on GPU (transform-only animation), no layout thrashing, achieves 60fps.

**Implementation detail**: 3-4 gradient blobs, each with different size/color/animation-duration creating organic movement. Fixed position with `pointer-events: none`. Uses `@property` for smooth hue interpolation.

### 7. Animated Gradient Borders for V4 Cards

**Decision**: Dual-background technique: `background: linear-gradient(card-bg) padding-box, conic-gradient(from var(--shimmer-angle), colors...) border-box` with `border: 2px solid transparent`.

**Rationale**: Pure CSS, GPU-composited via `@property` animation. No canvas or SVG needed.

**Implementation detail**: `@keyframes shimmer` rotates `--shimmer-angle` from `0deg` to `360deg` over 3 seconds. Combined with `border-radius` for rounded cards.

### 8. Typing Effect for V4 Hero

**Decision**: CSS `steps()` animation on `width` property with `overflow: hidden; white-space: nowrap`.

**Rationale**: Pure CSS, no JavaScript timers. Uses `font-family: monospace` for the animated text portion to ensure consistent character width.

**Implementation detail**: Set `--char-count` via inline `style` prop. Animation: `@keyframes typing { from { width: 0 } to { width: calc(var(--char-count) * 1ch) } }` with `steps(var(--char-count))`. Blinking cursor via `border-right` animation.

**Alternative considered**: JavaScript `setInterval` character-by-character — acceptable fallback if CSS approach has issues with variable-width fonts.

### 9. IntersectionObserver Hook

**Decision**: Create shared `useInView` hook at `src/shared/hooks/useInView.ts`.

**Rationale**: All three variants need scroll-triggered entrance animations. Shared hook avoids duplication.

**Implementation detail**:
- Returns `{ ref, isInView }`
- Options: `{ threshold: 0.1, triggerOnce: true, rootMargin: '0px' }`
- Short-circuits to `isInView: true` when `prefers-reduced-motion: reduce` is active (checked via `window.matchMedia`)
- Uses `useRef` + `useEffect` with cleanup

### 10. prefers-reduced-motion Strategy

**Decision**: Three-layer approach:
1. Global safety net in `globals.css` (already exists) — sets all animation-duration to 0.01ms
2. Per-component `@media (prefers-reduced-motion: reduce)` queries for specific overrides
3. `useInView` hook short-circuits to `isInView: true` (content visible immediately, no animation)

**Rationale**: Defense in depth ensures no animation slips through.

## Architecture Decision: Component Colocation

**Decision**: Place variant-specific components inside `src/app/v{n}/components/` rather than `src/modules/landing/components/v{n}/`.

**Rationale**:
- Spec states these are "variant-specific components — they do not need to be reusable across the project"
- Colocation makes each variant self-contained and easy to delete entirely
- Next.js App Router only treats special files (page.tsx, layout.tsx, etc.) as routes — other files in the directory are safe
- After the client chooses one design, the other two variant directories can be deleted cleanly

**Alternative considered**: Shared module directory — rejected because it would leave orphaned component directories after variant deletion.
