# Implementation Plan: Premium Landing Page Redesigns

**Branch**: `004-landing-redesigns` | **Date**: 2026-02-21 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/004-landing-redesigns/spec.md`

## Summary

Three alternative landing page designs at `/v2`, `/v3`, `/v4` — each a complete custom page with variant-specific components, animations, and visual identity. V2 is a cinematic scroll-snap experience with gradient mesh and bento grid. V3 is a Swiss editorial light-mode magazine with numbered sections and horizontal carousel. V4 is a futuristic aurora-tech dark UI with animated gradient borders and typing hero. Each variant creates its own section components and CSS modules while reusing the existing Header, Footer, ContactForm, Button, Icon, and data layers. A shared `useInView` hook provides scroll-triggered animations across all variants.

## Technical Context

**Language/Version**: TypeScript 5.9, React 19, Next.js 16 App Router
**Primary Dependencies**: Next.js App Router, CSS Modules, tRPC, Convex, Material Symbols
**Storage**: Convex backend (clients data via tRPC `trpc.clients.list.useQuery()`)
**Testing**: No test framework configured — manual testing via quickstart.md
**Target Platform**: Web (modern browsers, 320px–1920px+)
**Project Type**: Web application (Next.js App Router with route-level code splitting)
**Performance Goals**: < 3s page load, 60fps animations, WCAG 2.1 AA contrast
**Constraints**: `prefers-reduced-motion` must be respected; existing main page at `/` must not change; `@property` CSS declarations must go in globals.css (not CSS Modules)
**Scale/Scope**: 3 new routes, ~15 new components, ~30 new files, 1 shared hook

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Pre-Design Gate

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Code Quality Excellence | PASS | Each variant component has single responsibility (one section per component). Shared `useInView` hook prevents duplication. Route-level code splitting keeps bundles small. Components are presentational with low cyclomatic complexity. |
| II. Testing Standards | JUSTIFIED DEVIATION | No test framework is configured in this project. Manual testing via quickstart.md covers all acceptance scenarios. See Complexity Tracking. |
| III. User Experience Consistency | PASS | All variants meet WCAG 2.1 AA contrast. Responsive 320px–1920px. `prefers-reduced-motion` respected via global safety net + per-component overrides. Focus indicators preserved. Design system components (Button, Icon) reused. |
| IV. Performance Excellence | PASS | CSS-only animations for GPU-composited 60fps. Route-level code splitting via Next.js App Router. No heavy JS animation libraries. `@property` enables smooth gradient interpolation. |

### Post-Design Gate

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Code Quality Excellence | PASS | ~15 components, each < 80 lines. Clear naming (CinematicHero, ServiceCarousel, AuroraBackground). Shared hook for IntersectionObserver. Services data imported from single source. |
| II. Testing Standards | JUSTIFIED DEVIATION | Same as pre-design. These are temporary evaluation pages. |
| III. User Experience Consistency | PASS | V2 dark (white #f8fafc on #0a0a0a = 18.5:1), V3 light (charcoal #1a1a1a on cream #faf8f5 = 15.3:1), V4 dark (white #f0f0f0 on #050510 = 18.2:1) — all exceed AA 4.5:1 minimum. |
| IV. Performance Excellence | PASS | No external animation libraries. CSS @property for gradient animations. All animations are transform/opacity only (compositor-thread). Route-level code splitting ensures each variant is independently loaded. |

## Project Structure

### Documentation (this feature)

```text
specs/004-landing-redesigns/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── quickstart.md        # Testing guide
├── checklists/
│   └── requirements.md  # Spec quality checklist
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── globals.css              # MODIFY: append @property declarations
│   ├── v2/
│   │   ├── page.tsx             # V2 Cinematic Narrative — scroll-snap page
│   │   ├── page.module.css      # V2 page-level styles
│   │   └── components/
│   │       ├── CinematicHero.tsx
│   │       ├── CinematicHero.module.css
│   │       ├── BentoServices.tsx
│   │       ├── BentoServices.module.css
│   │       ├── ClientMarquee.tsx
│   │       ├── ClientMarquee.module.css
│   │       ├── SplitContact.tsx
│   │       ├── SplitContact.module.css
│   │       ├── CinematicCTA.tsx
│   │       └── CinematicCTA.module.css
│   ├── v3/
│   │   ├── page.tsx             # V3 Swiss Editorial — light cream page
│   │   ├── page.module.css      # V3 page-level styles
│   │   └── components/
│   │       ├── EditorialHero.tsx
│   │       ├── EditorialHero.module.css
│   │       ├── ServiceCarousel.tsx
│   │       ├── ServiceCarousel.module.css
│   │       ├── EditorialClients.tsx
│   │       ├── EditorialClients.module.css
│   │       ├── EditorialContact.tsx
│   │       ├── EditorialContact.module.css
│   │       ├── EditorialCTA.tsx
│   │       └── EditorialCTA.module.css
│   └── v4/
│       ├── page.tsx             # V4 Aurora Tech — futuristic dark page
│       ├── page.module.css      # V4 page-level styles
│       └── components/
│           ├── AuroraBackground.tsx
│           ├── AuroraBackground.module.css
│           ├── TypingHero.tsx
│           ├── TypingHero.module.css
│           ├── ShimmerServices.tsx
│           ├── ShimmerServices.module.css
│           ├── GlassClients.tsx
│           ├── GlassClients.module.css
│           ├── AuroraContact.tsx
│           ├── AuroraContact.module.css
│           ├── AuroraCTA.tsx
│           └── AuroraCTA.module.css
└── shared/
    └── hooks/
        └── useInView.ts         # IntersectionObserver hook (shared)
```

**Structure Decision**: Variant components colocated in `src/app/v{n}/components/` since they are route-specific and temporary (client will choose one, others will be deleted). This keeps each variant self-contained. The shared `useInView` hook goes in `src/shared/hooks/` since it serves all three variants.

## Variant Design Specifications

### Shared: useInView Hook

**File**: `src/shared/hooks/useInView.ts`

A lightweight IntersectionObserver hook for scroll-triggered animations:
- Returns `{ ref, isInView }` — `ref` attaches to the target element, `isInView` triggers CSS transitions
- Options: `{ threshold?: number, triggerOnce?: boolean, rootMargin?: string }`
- **Reduced motion**: Short-circuits to `isInView: true` immediately when `prefers-reduced-motion: reduce` is active (via `window.matchMedia`)
- Uses `useRef` + `useEffect` with proper cleanup (disconnect observer)
- Must be `'use client'` since it uses browser APIs

### Shared: @property Declarations

**File**: `src/app/globals.css` (append to end)

CSS `@property` declarations for animated gradient custom properties. These MUST go in global CSS because CSS Modules cannot scope `@property` rules.

Properties needed:
- `--gradient-angle` (`<angle>`, `0deg`) — V2 gradient mesh rotation
- `--gradient-pos-x` (`<percentage>`, `30%`) — V2 gradient mesh X position
- `--gradient-pos-y` (`<percentage>`, `40%`) — V2 gradient mesh Y position
- `--aurora-hue-1` (`<number>`, `220`) — V4 aurora blue hue
- `--aurora-hue-2` (`<number>`, `270`) — V4 aurora purple hue
- `--shimmer-angle` (`<angle>`, `0deg`) — V4 border shimmer rotation

---

### V2 — Cinematic Narrative

**Theme**: Film-like scrolling. Dark mode. Full-viewport snap sections. Gradient mesh. Bento grid. Client marquee.

**Color palette**:
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0a` | Page background |
| Secondary bg | `#111111` | Alternate section backgrounds |
| Primary accent | `#d94e28` | CTAs, highlights, gradient tones |
| Secondary accent | `#f59e0b` | Warm amber highlights in gradient mesh |
| Text primary | `#f8fafc` | Headings, body text |
| Text muted | `#94a3b8` | Subtitles, descriptions |

**Typography**:
- Headings: Playfair Display at dramatic sizes (8xl+ for hero, 5xl for sections)
- Body: Inter for all body text
- Strong size contrast between headings and body

**Page layout** (`page.tsx` + `page.module.css`):
- Scroll-snap container: `scroll-snap-type: y mandatory` on desktop, `y proximity` on mobile (< 768px)
- Each section: `scroll-snap-align: start; min-height: 100vh; height: 100vh`
- Structure: Header → CinematicHero → BentoServices → ClientMarquee → SplitContact → CinematicCTA → Footer
- Header gets CSS override for dark glass background via wrapper class

#### CinematicHero (`src/app/v2/components/CinematicHero.tsx`)

- Full-viewport section with animated gradient mesh background
- **Gradient mesh**: CSS radial gradients using `@property` animated custom properties (`--gradient-pos-x`, `--gradient-pos-y`, `--gradient-angle`). Colors: `#d94e28` (orange-red), `#f59e0b` (amber), transparent. Animated via `@keyframes meshShift` over 20s
- **Typography**: Oversized Playfair Display h1 (`clamp(3rem, 8vw, 7rem)`). Each word wrapped in `<span>` with staggered `animation-delay` for word-by-word fade-up entrance
- **Staggered animation**: `@keyframes fadeUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }` — each word gets `animation-delay: ${index * 0.15}s`
- **Floating particles**: 6-8 small absolute-positioned circles (4-8px) with random CSS `@keyframes float` (gentle vertical movement), opacity 0.2-0.4, scattered across viewport. `pointer-events: none`
- **CTA buttons**: Two buttons (primary "Conversemos" → #contacto, secondary "Ver servicios" → #servicios)
- **Responsive**: On mobile, heading scales down via clamp. Particles reduce to 3-4

#### BentoServices (`src/app/v2/components/BentoServices.tsx`)

- **Bento grid**: CSS Grid with explicit `grid-template-areas`:
  ```
  "auto auto ai"
  "web soft soft"
  ```
  3 columns on desktop, 1 column on mobile. Cards of varying sizes (2-col span for automation, 2-col span for software)
- **Cards**: Glass-morphism (`backdrop-filter: blur(16px)`, `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.08)`)
- **Content**: Each card shows service icon (Icon component), title, description, features list
- **Staggered reveal**: Each card uses `useInView` hook. When `isInView`, apply CSS class that transitions from `opacity: 0; transform: translateY(40px)` to `opacity: 1; transform: translateY(0)`. Stagger via `transition-delay: ${index * 0.1}s` on each card
- **Responsive**: Single column stack on < 768px. Cards get full width

#### ClientMarquee (`src/app/v2/components/ClientMarquee.tsx`)

- **Must be `'use client'`** — uses `trpc.clients.list.useQuery()`
- **Heading**: "Empresas que confian en nosotros" in Playfair Display
- **Marquee**: Render `[...clients, ...clients]` in a single flex row. Animate container with `@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`. Duration: proportional to client count (~3s per client)
- **Logos**: Large size (~120px height). Each in a glass card with padding. Image with fallback (placeholder initial letter on error, same pattern as ClientCard)
- **Hover**: `animation-play-state: paused` on container hover
- **Responsive**: Logo size scales down on mobile. Same marquee behavior
- **Loading/empty**: Return null if loading or no clients (same as existing Clients component)

#### SplitContact (`src/app/v2/components/SplitContact.tsx`)

- **Full-screen split layout**: Left 50% — large motivational headline in Playfair Display italic, decorative oversized section number "04" in low-opacity background. Right 50% — ContactForm component in a glass card
- **Glass card**: `backdrop-filter: blur(16px)`, subtle border, rounded corners
- **Responsive**: Stack vertically on < 768px (headline on top, form below). Full-width sections

#### CinematicCTA (`src/app/v2/components/CinematicCTA.tsx`)

- **Full-viewport**: Large centered Playfair Display heading
- **Animated underline**: `h2::after` pseudo-element with `@keyframes underlineGrow` animating `width: 0` to `width: 100%` triggered by useInView
- **Pulsing button**: CTA Button with subtle `animation: pulse 2s infinite` (scale 1 → 1.05 → 1)
- **Responsive**: Heading scales down, button full-width on mobile

#### V2 Animations Summary

| Animation | Technique | Duration | Reduced Motion |
|-----------|-----------|----------|----------------|
| Gradient mesh shift | `@property` + CSS keyframes | 20s loop | Static gradient |
| Word-by-word fade-up | CSS `animation-delay` per span | 0.6s each, staggered | Words visible immediately |
| Floating particles | CSS keyframes translate | 6-10s per particle | Hidden |
| Bento card reveal | useInView + CSS transition | 0.6s, staggered 0.1s | Visible immediately |
| Client marquee | CSS translateX keyframes | ~3s per client | Paused (static row) |
| CTA underline grow | useInView + CSS keyframes | 0.8s | Full underline immediately |
| CTA button pulse | CSS keyframes scale | 2s loop | No pulse |

---

### V3 — Swiss Editorial

**Theme**: Light mode. Magazine-like. Typographically obsessed. Numbered sections. Horizontal carousel.

**Color palette**:
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#faf8f5` | Page background (cream) |
| Cards | `#ffffff` | Card backgrounds |
| Darker band | `#f5f0ea` | Clients section band |
| Text primary | `#1a1a1a` | Charcoal headings, body |
| Text muted | `#6b7280` | Secondary text |
| Accent | `#d94e28` | Interactive elements, accent lines only |

**Typography**:
- Section titles: Playfair Display italic at extreme sizes (120px+ for section numbers, 8xl for headings)
- Body: Inter Light/Regular, generous line-height (1.8)
- Labels: Inter, small uppercase, wide letter-spacing (0.2em)
- Section numbers: Playfair Display, ultra-light (weight 300), 120px+ size, low opacity

**Page layout** (`page.tsx` + `page.module.css`):
- Light cream background `#faf8f5`, no scroll-snap (smooth natural scrolling)
- Asymmetric editorial grid — content offset in columns for visual interest
- Structure: Header → EditorialHero → ServiceCarousel → EditorialClients → EditorialContact → EditorialCTA → Footer
- Header gets CSS override: `background: rgba(250,248,245,0.9)`, `border-bottom: 1px solid rgba(26,26,26,0.06)`, dark text
- Footer gets CSS override: light mode treatment

#### EditorialHero (`src/app/v3/components/EditorialHero.tsx`)

- **Massive typography**: Playfair Display h1 at `clamp(4rem, 10vw, 9rem)`. Takes up most of the viewport height
- **Section number**: "01" in Playfair Display at 150px+, positioned as a decorative background element with very low opacity (0.06)
- **Accent line**: Single thin (2px) horizontal `#d94e28` line between heading and subtitle
- **Subtitle**: Small Inter uppercase with `letter-spacing: 0.2em`, color `#6b7280`
- **CTA buttons**: Clean, minimal. Primary button only
- **Responsive**: Heading scales gracefully via clamp. Section number scales proportionally

#### ServiceCarousel (`src/app/v3/components/ServiceCarousel.tsx`)

- **Section number**: "02" as decorative element
- **Horizontal scroll**: Container with `overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch`. Hide scrollbar via `::-webkit-scrollbar { display: none }` and `scrollbar-width: none`
- **Cards**: Tall vertical cards (min-width: 300px, aspect-ratio: ~3/4 or fixed height ~500px). Each card shows: large number (01-04) in Playfair light, service title, description, features list. Cards have subtle paper-like `box-shadow: 0 2px 12px rgba(0,0,0,0.06)`. White background
- **Snap**: Each card has `scroll-snap-align: start` with padding
- **Indicator dots**: Below the carousel, 4 dots. Active dot uses `#d94e28`, inactive `#d1d5db`. Track scroll position via IntersectionObserver on each card
- **Responsive**: Cards shrink to min-width: 260px on mobile. Still horizontal-scrollable. Touch-friendly

#### EditorialClients (`src/app/v3/components/EditorialClients.tsx`)

- **Must be `'use client'`** — uses `trpc.clients.list.useQuery()`
- **Section number**: "03" as decorative element
- **Background band**: Slightly darker cream `#f5f0ea` for the section background
- **Grid**: Clean CSS Grid with `repeat(auto-fit, minmax(160px, 1fr))`. Each logo in a refined white card with generous padding (2rem), subtle border `1px solid rgba(26,26,26,0.06)`, and small `border-radius: 8px`
- **Logo display**: Similar to ClientCard — image with error fallback (initial letter placeholder)
- **Entrance animation**: Subtle slide-up + fade-in via useInView (20px, 0.4s)
- **Loading/empty**: Return null if loading or no clients

#### EditorialContact (`src/app/v3/components/EditorialContact.tsx`)

- **Section number**: "04" as decorative element
- **Two-column layout**: Left column — ContactForm on a white card with subtle shadow. Right column — supporting copy ("Contanos sobre tu proyecto...") and decorative section number element
- **Card styling**: White background, `box-shadow: 0 4px 20px rgba(0,0,0,0.06)`, padding 3rem, `border-radius: 12px`
- **Form overrides**: Input borders lighter for cream context. Focus ring uses `#d94e28`
- **Responsive**: Stack to single column on < 768px

#### EditorialCTA (`src/app/v3/components/EditorialCTA.tsx`)

- Large Playfair Display italic headline
- Thin separator line (`1px solid rgba(26,26,26,0.1)`)
- Single elegant Button with minimal styling
- Generous vertical padding (8rem+)

#### V3 Animations Summary

| Animation | Technique | Duration | Reduced Motion |
|-----------|-----------|----------|----------------|
| Section entrance | useInView + CSS transition | 0.4s | Visible immediately |
| Carousel snap | CSS scroll-snap (native) | Native | Native |
| Hover effects | CSS transition | 0.3s | No hover transform |

---

### V4 — Aurora Tech

**Theme**: Futuristic AI lab. Deep dark. Animated aurora. Glass-morphism. Glowing accents.

**Color palette**:
| Token | Value | Usage |
|-------|-------|-------|
| Deep background | `#050510` | Primary background |
| Secondary bg | `#0f0f23` | Section overlays |
| Aurora blue | `#1e3a5f` | Aurora gradient blob |
| Aurora purple | `#2d1b69` | Aurora gradient blob |
| Primary accent | `#d94e28` | Glows, interactive elements, gradient accent |
| Text primary | `#f0f0f0` | Headings, body text |
| Glass surface | `rgba(255,255,255,0.05)` | Card backgrounds |
| Glass border | `rgba(255,255,255,0.1)` | Card borders |
| Glow | `rgba(217,78,40,0.3)` | Accent glows |

**Typography**:
- Headlines: Inter Bold 800/900 for a technical feel
- Body: Inter Light 300
- Monospace accents: For labels and the typing effect. Use system monospace (`font-family: 'Courier New', monospace`)
- Playfair Display reserved for one dramatic tagline/quote

**Page layout** (`page.tsx` + `page.module.css`):
- Deep dark background `#050510`
- AuroraBackground as a fixed-position background layer (z-index: 0)
- Content sections float above with `position: relative; z-index: 1`
- Structure: AuroraBackground → Header → TypingHero → ShimmerServices → GlassClients → AuroraContact → AuroraCTA → Footer
- Header gets CSS override: glass-dark with `background: rgba(5,5,16,0.8); backdrop-filter: blur(16px)`
- Footer gets override for deep dark

#### AuroraBackground (`src/app/v4/components/AuroraBackground.tsx`)

- **Fixed position**: `position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden`
- **3-4 gradient blobs**: Absolutely-positioned divs, each ~600-800px diameter
  - Blob 1: `radial-gradient(circle, rgba(30,58,95,0.4) 0%, transparent 70%)` — blue, top-left
  - Blob 2: `radial-gradient(circle, rgba(45,27,105,0.3) 0%, transparent 70%)` — purple, center-right
  - Blob 3: `radial-gradient(circle, rgba(217,78,40,0.2) 0%, transparent 70%)` — orange, bottom-center
- **Animation**: Each blob has its own `@keyframes auroraBlob{N}` animating `transform: translate(Xpx, Ypx)` in a slow figure-eight or circular path. Different durations (40s, 55s, 70s) for organic feel
- **Blend mode**: `mix-blend-mode: screen` on each blob for light accumulation
- **Filter**: `filter: blur(80px)` on each blob for soft diffusion
- **Reduced motion**: All blobs static (no animation), still visible as ambient color

#### TypingHero (`src/app/v4/components/TypingHero.tsx`)

- **Must be `'use client'`** if using state for typing control (or pure CSS approach)
- **Typing animation**: Main headline text types character-by-character using CSS `steps()`:
  - Container: `overflow: hidden; white-space: nowrap; border-right: 3px solid #d94e28`
  - Animation: `@keyframes typing { from { width: 0 } to { width: 100% } }` with `animation-timing-function: steps(N)` where N = character count
  - Cursor blink: `@keyframes blink { 50% { border-color: transparent } }` 0.7s loop
  - Set `--char-count` via inline style for character count
  - Uses monospace font for the typing line only
- **Glowing orb**: Absolute-positioned div behind text. `radial-gradient(circle, rgba(217,78,40,0.3) 0%, transparent 70%)`, 400px diameter. `@keyframes orbPulse` scales 1→1.2→1 over 8s
- **Subtitle**: Fade-in after typing completes (via `animation-delay`)
- **CTA buttons**: Appear after subtitle
- **Responsive**: Typing text may need to wrap on mobile — consider shorter text or disable typing on small screens (show text directly)

#### ShimmerServices (`src/app/v4/components/ShimmerServices.tsx`)

- **Animated gradient borders**: Each service card uses the dual-background technique:
  ```css
  border: 2px solid transparent;
  background:
    linear-gradient(#0f0f23, #0f0f23) padding-box,
    conic-gradient(from var(--shimmer-angle), #d94e28, #2d1b69, #1e3a5f, #d94e28) border-box;
  ```
  `@keyframes shimmer { to { --shimmer-angle: 360deg } }` — 3s infinite loop
- **Glass body**: `backdrop-filter: blur(16px)`, `background: rgba(255,255,255,0.03)`
- **3D hover**: `transform: perspective(1000px) translateZ(10px)` on hover. Border glow intensifies via `box-shadow: 0 0 20px rgba(217,78,40,0.3)`
- **Content**: Icon with orange-red glow (`filter: drop-shadow(0 0 8px rgba(217,78,40,0.5))`), title, description, features
- **Grid**: `repeat(auto-fit, minmax(280px, 1fr))` — standard grid, cards make the impact
- **Responsive**: Single column on mobile. No 3D hover on touch devices

#### GlassClients (`src/app/v4/components/GlassClients.tsx`)

- **Must be `'use client'`** — uses `trpc.clients.list.useQuery()`
- **Dark glass band**: Section with `background: rgba(255,255,255,0.02)`, thin gradient accent line above (`height: 2px; background: linear-gradient(90deg, transparent, #d94e28, #2d1b69, transparent)`)
- **Logo grid**: `repeat(auto-fit, minmax(140px, 1fr))`. Each logo in a glass card with thin glowing border (`border: 1px solid rgba(255,255,255,0.08)`, `box-shadow: 0 0 8px rgba(217,78,40,0.1)`)
- **Image display**: Logo with error fallback. Glass card background
- **Entrance**: Staggered fade-in via useInView
- **Loading/empty**: Return null if loading or no clients

#### AuroraContact (`src/app/v4/components/AuroraContact.tsx`)

- **Glass form container**: `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.04)`, `border: 1px solid rgba(255,255,255,0.1)`, `border-radius: 16px`
- **ContactForm** imported directly with custom CSS overrides in parent
- **Glowing focus states**: Input/textarea `:focus` gets `box-shadow: 0 0 12px rgba(217,78,40,0.4); border-color: rgba(217,78,40,0.6)`
- **Background**: Section shows more aurora gradient — slightly elevated z-index to keep aurora visible

#### AuroraCTA (`src/app/v4/components/AuroraCTA.tsx`)

- **Gradient text**: Heading with animated background gradient clipped to text:
  ```css
  background: linear-gradient(90deg, #f0f0f0, #d94e28, #2d1b69, #f0f0f0);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 6s ease infinite;
  ```
- **Glowing CTA button**: Large button with `box-shadow: 0 0 20px rgba(217,78,40,0.4)`. Hover: scale(1.05) + increased glow
- **Responsive**: Gradient text scales. Button full-width on mobile

#### V4 Animations Summary

| Animation | Technique | Duration | Reduced Motion |
|-----------|-----------|----------|----------------|
| Aurora blobs | CSS keyframes transform | 40-70s loops | Static blobs (visible, not moving) |
| Typing effect | CSS steps() width | ~3s | Text visible immediately, no typing |
| Cursor blink | CSS keyframes border-color | 0.7s loop | No blink, solid cursor |
| Orb pulse | CSS keyframes scale+opacity | 8s loop | Static orb |
| Shimmer borders | @property + CSS keyframes | 3s loop | Static gradient border |
| 3D card hover | CSS transform perspective | 0.3s transition | No 3D transform |
| Gradient text | CSS keyframes background-position | 6s loop | Static gradient |
| Section reveals | useInView + CSS transition | 0.6s | Visible immediately |

---

## Key Implementation Notes

### Reused Components (DO NOT MODIFY)

These existing components are imported directly into variant pages. They must NOT be modified — styling adjustments happen via CSS wrapper classes on the parent:
- `Header` — override background via `.headerWrap header { background: ... }`
- `Footer` — override background via `.footerWrap footer { background: ... }`
- `JsonLd` — no styling needed
- `Button` — used directly, inherits variant color scheme via CSS custom properties
- `ContactForm` — used directly within variant-specific wrapper components
- `Icon` — used in service cards within variants

### Client Components

The following variant components MUST have `'use client'` directive because they use tRPC hooks or browser APIs:
- `ClientMarquee` (V2) — `trpc.clients.list.useQuery()`
- `EditorialClients` (V3) — `trpc.clients.list.useQuery()`
- `GlassClients` (V4) — `trpc.clients.list.useQuery()`
- `useInView` hook — `IntersectionObserver`, `window.matchMedia`
- `TypingHero` (V4) — if using state/ref for animation control

### Section IDs for Anchor Navigation

All variants MUST preserve these section IDs for anchor link compatibility:
- `id="servicios"` on the services section
- `id="clientes"` on the clients section
- `id="contacto"` on the contact section

### Main Page Protection

The existing main page at `/` uses `src/app/page.tsx` and `src/app/page.module.css`. These files MUST NOT be modified. The only modification to existing files is appending `@property` declarations to `globals.css`, which has no visual impact on the main page.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| No automated tests (Principle II) | Project has no test framework configured. These are temporary evaluation pages — one will be kept, two deleted. | Manual testing via quickstart.md covers all acceptance scenarios. Adding a test framework solely for temporary evaluation pages creates unnecessary infrastructure overhead. |
