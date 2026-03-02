# Tasks: Premium Landing Page Redesigns

**Input**: Design documents from `/specs/004-landing-redesigns/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, quickstart.md

**Tests**: No test framework is configured in this project. Tests are not included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story. All three user stories are fully independent — each creates a new route with its own custom components in a separate directory.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the shared `useInView` hook and `@property` CSS declarations that all three variant pages depend on.

- [x] T001 Create useInView hook in src/shared/hooks/useInView.ts — a `'use client'` hook that returns `{ ref, isInView }`. Accept options `{ threshold?: number, triggerOnce?: boolean, rootMargin?: string }` defaulting to `{ threshold: 0.1, triggerOnce: true, rootMargin: '0px' }`. Use `useRef<HTMLDivElement>` + `useEffect` with `IntersectionObserver`. On entry, set `isInView = true` (and disconnect if `triggerOnce`). **Critical**: check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` — if true, short-circuit to `isInView: true` immediately (no observer needed). Clean up observer on unmount. Export as named export.
- [x] T002 Append @property declarations to src/app/globals.css — add 6 `@property` rules at the end of the file (after the existing `prefers-reduced-motion` block): `--gradient-angle` (syntax `<angle>`, initial `0deg`), `--gradient-pos-x` (syntax `<percentage>`, initial `30%`), `--gradient-pos-y` (syntax `<percentage>`, initial `40%`), `--aurora-hue-1` (syntax `<number>`, initial `220`), `--aurora-hue-2` (syntax `<number>`, initial `270`), `--shimmer-angle` (syntax `<angle>`, initial `0deg`). All with `inherits: false`. These MUST be in global CSS — CSS Modules cannot scope `@property` rules.

**Checkpoint**: `useInView` hook exists and is importable. `@property` declarations are in globals.css. No routes created yet.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: No foundational phase required beyond Setup. Each variant route is self-contained — its page.tsx imports shared components (Header, Footer, Button, ContactForm, Icon, JsonLd) from existing modules and composes custom variant-specific components from its own `components/` directory.

**Checkpoint**: N/A — proceed directly to user stories.

---

## Phase 3: User Story 1 — V2 Cinematic Narrative Route (Priority: P1) MVP

**Goal**: Visitors navigate to `/v2` and experience an immersive, cinematic journey — full-viewport scroll-snap sections, animated gradient mesh hero, bento grid services, infinite client marquee, split-screen contact, and animated CTA.

**Independent Test**: Navigate to `http://localhost:3000/v2` → hero loads with gradient mesh animation and staggered text. Scroll-snap navigates between full-viewport sections. Bento grid services with staggered reveal. Client marquee scrolls continuously with real data. Contact form functional. Responsive at 320px, 768px, 1920px.

**Note**: The `src/app/v2/` directory already contains page.tsx and page.module.css from feature 003-bauhaus-redesigns. These files will be overwritten with the new custom page composition.

### Implementation for User Story 1

- [x] T003 [P] [US1] Create CinematicHero component in src/app/v2/components/CinematicHero.tsx + CinematicHero.module.css — full-viewport section (100vh). **Background**: animated gradient mesh using CSS radial-gradients with `@property` animated `--gradient-pos-x`, `--gradient-pos-y`, `--gradient-angle`. Colors: `#d94e28`, `#f59e0b`, dark tones. `@keyframes meshShift` over 20s loop animating the custom properties. **Typography**: Playfair Display h1 at `clamp(3rem, 8vw, 7rem)`. Split heading text into `<span>` per word with staggered `animation-delay` (0.15s increments) for `@keyframes fadeUp` (translateY(30px)→0, opacity 0→1, duration 0.6s). **Particles**: 6-8 small absolute-positioned circles (4-8px, opacity 0.2-0.4) with `@keyframes float` (gentle Y movement over 6-10s). `pointer-events: none`. **CTAs**: Two `<a href>` wrapping Button component — "Conversemos" (#contacto) primary, "Ver servicios" (#servicios) secondary. **Responsive**: particles reduce to 3 on mobile, heading scales via clamp. **Reduced motion**: `@media (prefers-reduced-motion: reduce)` — static gradient, no fadeUp (words visible immediately), no particles.
- [x] T004 [P] [US1] Create BentoServices component in src/app/v2/components/BentoServices.tsx + BentoServices.module.css — section with `id="servicios"`. Import `services` from `@/modules/landing/data/services` and `Icon` from `@/shared/components/Icon`. **Bento grid**: CSS Grid with `grid-template-areas: "auto auto ai" "web soft soft"` on desktop (3 columns), single column on mobile. Map each service to a card in its grid area. **Cards**: glass-morphism (`backdrop-filter: blur(16px)`, `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.08)`, `border-radius: 1rem`). Content: Icon, h3 title, p description, features ul. **Staggered reveal**: `'use client'`, import `useInView` from `@/shared/hooks/useInView`. Each card uses `useInView({ triggerOnce: true })`. When `isInView`, apply class transitioning from `opacity: 0; transform: translateY(40px)` to visible. Stagger via `transition-delay` based on card index (0.1s increments). **Hover**: `translateY(-6px)`, border-color `rgba(217,78,40,0.4)`, bg `rgba(217,78,40,0.04)`. **Colors**: dark bg `#111111`, text `#f8fafc`, muted `#94a3b8`.
- [x] T005 [P] [US1] Create ClientMarquee component in src/app/v2/components/ClientMarquee.tsx + ClientMarquee.module.css — `'use client'` component. Import `trpc` from `@/trpc/client`. Use `trpc.clients.list.useQuery()` to fetch client data. Return null if loading or no clients. **Heading**: "Empresas que confían en nosotros" in Playfair Display. Section with `id="clientes"`. **Marquee**: render `[...clients, ...clients]` in a flex row container. Each client: glass card (120px height logo area) with image (`<img>` with `onError` fallback to initial letter `<div>`), name below. Container animated with `@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`. Duration: `${clients.length * 3}s` linear infinite. **Pause on hover**: `.marqueeTrack:hover { animation-play-state: paused }`. **Responsive**: logo size 80px on mobile. **Reduced motion**: `animation-play-state: paused` (static row).
- [x] T006 [P] [US1] Create SplitContact component in src/app/v2/components/SplitContact.tsx + SplitContact.module.css — full-viewport section with `id="contacto"`. **Layout**: CSS Grid `grid-template-columns: 1fr 1fr` on desktop. **Left half**: large motivational headline ("Hablemos de tu proyecto") in Playfair Display italic, decorative "04" section number at 150px+ low-opacity background. Text color `#f8fafc`. **Right half**: import `ContactForm` from `@/modules/contact`. Wrap in a glass card (`backdrop-filter: blur(16px)`, `background: rgba(255,255,255,0.04)`, `border: 1px solid rgba(255,255,255,0.08)`, `border-radius: 1rem`, padding 2rem). **Responsive**: stack vertically on <768px (headline top, form below), full-width.
- [x] T007 [P] [US1] Create CinematicCTA component in src/app/v2/components/CinematicCTA.tsx + CinematicCTA.module.css — full-viewport section. `'use client'` for useInView. Large centered Playfair Display h2 ("¿Listo para transformar tu negocio?"). **Animated underline**: `h2::after` pseudo-element — `width: 0` initially, transitions to `width: 100%` when section `isInView` (add class via useInView). Height 3px, background `#d94e28`, transition 0.8s ease. **Button**: import Button from `@/shared/components/Button`, wrapped in `<a href="#contacto">`. Add `@keyframes pulse` (scale 1→1.05→1 over 2s infinite) to button wrapper. Description text above button. **Responsive**: heading scales via clamp, button full-width on mobile. **Reduced motion**: underline visible immediately (no width animation), no pulse.
- [x] T008 [US1] Create V2 page in src/app/v2/page.tsx + src/app/v2/page.module.css — **page.tsx**: import Header from `@/shared/components/Header`, Footer from `@/shared/components/Footer`, JsonLd from `@/shared/components/JsonLd`, and all 5 V2 components from `./components/`. Compose: `<div className={styles.page}><JsonLd /><div className={styles.headerWrap}><Header /></div><main>` then CinematicHero, BentoServices, ClientMarquee, SplitContact, CinematicCTA `</main><div className={styles.footerWrap}><Footer /></div></div>`. **page.module.css**: `.page` — `scroll-snap-type: y mandatory` on desktop, `y proximity` at <768px. Background `#0a0a0a`. `.page > main > *` — `scroll-snap-align: start; min-height: 100vh`. `.headerWrap header` — `background: rgba(10,10,10,0.9); backdrop-filter: blur(16px)`. `.footerWrap footer` — `background: #0a0a0a; border-top: 1px solid rgba(255,255,255,0.08)`. Override any hardcoded Header rgba if needed. Set CSS custom properties on `.page`: `--color-primary: #d94e28; --color-text-primary: #f8fafc; --color-text-secondary: #94a3b8`.

**Checkpoint**: User Story 1 fully functional. `/v2` displays complete Cinematic Narrative design. Scroll-snap sections, gradient mesh hero, bento grid services, client marquee with real data, split contact with functional form, animated CTA.

---

## Phase 4: User Story 2 — V3 Swiss Editorial Route (Priority: P2)

**Goal**: Visitors navigate to `/v3` and see a light-mode, magazine-style presentation — cream background, massive serif typography, numbered editorial sections, horizontal-scroll service cards, clean client grid, elegant contact layout.

**Independent Test**: Navigate to `http://localhost:3000/v3` → cream background with clean typography. Sections numbered (01, 02, 03, 04). Horizontal service card carousel scrolls and snaps. Clients grid shows real data. Contact form works. Responsive at all breakpoints.

**Note**: The `src/app/v3/` directory already contains page.tsx and page.module.css from feature 003-bauhaus-redesigns. These files will be overwritten with the new custom page composition.

### Implementation for User Story 2

- [x] T009 [P] [US2] Create EditorialHero component in src/app/v3/components/EditorialHero.tsx + EditorialHero.module.css — full-viewport section. **Typography**: Playfair Display h1 at `clamp(4rem, 10vw, 9rem)`, color `#1a1a1a`. **Section number**: "01" in Playfair Display at `clamp(100px, 15vw, 180px)`, `font-weight: 300`, `opacity: 0.06`, positioned absolute as background decoration. **Accent line**: thin (2px) horizontal line `background: #d94e28`, width ~120px, between heading and subtitle. **Subtitle**: Inter uppercase, `letter-spacing: 0.2em`, `font-size: 0.85rem`, color `#6b7280`. **CTA**: single primary Button linking to #contacto. **Responsive**: heading scales via clamp, section number proportional. Background `#faf8f5`.
- [x] T010 [P] [US2] Create ServiceCarousel component in src/app/v3/components/ServiceCarousel.tsx + ServiceCarousel.module.css — `'use client'` component (needs useInView for dot tracking or IntersectionObserver). Section with `id="servicios"`. Import `services` from `@/modules/landing/data/services` and `Icon`. **Section number**: "02" decorative. **Carousel container**: `overflow-x: auto; scroll-snap-type: x mandatory; display: flex; gap: 1.5rem; padding: 1rem`. Hide scrollbar: `::-webkit-scrollbar { display: none }`, `scrollbar-width: none`. **Cards**: `min-width: 300px; scroll-snap-align: start`. Tall vertical cards (~500px height or `aspect-ratio: 3/4`). White background `#ffffff`, `box-shadow: 0 2px 12px rgba(0,0,0,0.06)`, `border-radius: 12px`, padding 2rem. Content: large number (01-04) in Playfair light (weight 300, size 3rem, color `#d1d5db`), service title in bold, description, features list. **Indicator dots**: 4 dots below carousel. Active dot `#d94e28`, inactive `#d1d5db`. Track active card via IntersectionObserver on each card (threshold 0.5). **Responsive**: cards min-width 260px on mobile. Touch scroll friendly. Section bg `#faf8f5`.
- [x] T011 [P] [US2] Create EditorialClients component in src/app/v3/components/EditorialClients.tsx + EditorialClients.module.css — `'use client'` component. Import `trpc` from `@/trpc/client`. Use `trpc.clients.list.useQuery()`. Return null if loading/empty. Section with `id="clientes"`. **Section number**: "03" decorative. **Background band**: `#f5f0ea` (slightly darker cream). **Grid**: `display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1.5rem`. Each client in a white card (`#ffffff`) with generous padding (2rem), `border: 1px solid rgba(26,26,26,0.06)`, `border-radius: 8px`. Image (`<img>` with error fallback to initial letter div), client name below. **Entrance**: use `useInView` for subtle slide-up fade-in (20px, 0.4s). **Responsive**: grid reflows naturally.
- [x] T012 [P] [US2] Create EditorialContact component in src/app/v3/components/EditorialContact.tsx + EditorialContact.module.css — section with `id="contacto"`. **Section number**: "04" decorative. **Two-column layout**: `display: grid; grid-template-columns: 1fr 1fr; gap: 3rem` on desktop. **Left column**: import `ContactForm` from `@/modules/contact`, wrap in a white card (`background: #ffffff`, `box-shadow: 0 4px 20px rgba(0,0,0,0.06)`, padding 3rem, `border-radius: 12px`). Override form input styles for cream context — inputs get `border: 1px solid rgba(26,26,26,0.12)`, focus `border-color: #d94e28`, `background: #ffffff`. **Right column**: supporting copy ("Contanos sobre tu proyecto y exploremos juntos..."), decorative "04" number element. **Responsive**: stack single column on <768px. Background `#faf8f5`.
- [x] T013 [P] [US2] Create EditorialCTA component in src/app/v3/components/EditorialCTA.tsx + EditorialCTA.module.css — section with generous vertical padding (8rem). Large Playfair Display italic h2 ("¿Listo para transformar tu negocio?"), color `#1a1a1a`. Thin separator line (`1px solid rgba(26,26,26,0.1)`, width 80px, centered). Single elegant Button (`<a href="#contacto"><Button>Empecemos a hablar</Button></a>`). All centered. Background `#faf8f5`. **Responsive**: padding reduces on mobile.
- [x] T014 [US2] Create V3 page in src/app/v3/page.tsx + src/app/v3/page.module.css — **page.tsx**: import Header, Footer, JsonLd from shared, and all 5 V3 components from `./components/`. Compose: `<div className={styles.page}><JsonLd /><div className={styles.headerWrap}><Header /></div><main>` then EditorialHero, ServiceCarousel, EditorialClients, EditorialContact, EditorialCTA `</main><div className={styles.footerWrap}><Footer /></div></div>`. **page.module.css**: `.page` — `background: #faf8f5; color: #1a1a1a; min-height: 100vh`. Set CSS custom properties: `--color-primary: #d94e28; --color-text-primary: #1a1a1a; --color-text-secondary: #6b7280; --color-text-muted: #9ca3af`. `.headerWrap header` — `background: rgba(250,248,245,0.9); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(26,26,26,0.06)`. Header text colors: override logo and nav link colors to dark via `.headerWrap header` descendants. `.footerWrap footer` — `background: #f5f0ea; border-top: 1px solid rgba(26,26,26,0.06)`. Override footer text to dark tones. **Animations**: subtle entrance via useInView on main sections (slide-up 20px fade-in 0.4s) applied to each component's outermost section.

**Checkpoint**: User Story 2 fully functional. `/v3` displays complete Swiss Editorial design. Light cream mode, numbered sections, horizontal service carousel, clean client grid with real data, two-column contact, elegant CTA.

---

## Phase 5: User Story 3 — V4 Aurora Tech Route (Priority: P3)

**Goal**: Visitors navigate to `/v4` and are immersed in a futuristic AI-lab aesthetic — animated aurora gradient background, typing hero, shimmering gradient-border service cards with 3D hover, glass client cards, glowing form inputs, animated gradient text CTA.

**Independent Test**: Navigate to `http://localhost:3000/v4` → deep dark background with animated aurora gradient. Hero text types character-by-character. Service cards have shimmering gradient borders. Client section shows real data on glass cards. Form inputs glow on focus. All animations respect `prefers-reduced-motion`. Responsive at all breakpoints.

**Note**: The `src/app/v4/` directory already contains page.tsx and page.module.css from feature 003-bauhaus-redesigns. These files will be overwritten with the new custom page composition.

### Implementation for User Story 3

- [x] T015 [P] [US3] Create AuroraBackground component in src/app/v4/components/AuroraBackground.tsx + AuroraBackground.module.css — `position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden`. **3 gradient blobs**: each an absolutely-positioned div (~600-800px diameter, `border-radius: 50%`, `filter: blur(80px)`, `mix-blend-mode: screen`). Blob 1: `radial-gradient(circle, rgba(30,58,95,0.4) 0%, transparent 70%)` positioned top-left. Blob 2: `radial-gradient(circle, rgba(45,27,105,0.3) 0%, transparent 70%)` positioned center-right. Blob 3: `radial-gradient(circle, rgba(217,78,40,0.2) 0%, transparent 70%)` positioned bottom-center. **Animations**: each blob has `@keyframes auroraBlob{N}` animating `transform: translate(Xpx, Ypx)` in a slow figure-eight path. Different durations: 40s, 55s, 70s for organic feel. `animation: auroraBlob1 40s ease-in-out infinite`. **Reduced motion**: `@media (prefers-reduced-motion: reduce)` — blobs visible (ambient color) but no animation.
- [x] T016 [P] [US3] Create TypingHero component in src/app/v4/components/TypingHero.tsx + TypingHero.module.css — `'use client'` component. Full-viewport section. **Typing animation**: main headline split into a "typed" portion in monospace (`font-family: 'Courier New', monospace`) with CSS: `overflow: hidden; white-space: nowrap; width: 0; animation: typing 3s steps(N) forwards` where N = character count (set via `--char-count` inline style). `@keyframes typing { to { width: 100% } }`. **Cursor**: `border-right: 3px solid #d94e28; animation: blink 0.7s step-end infinite`. `@keyframes blink { 50% { border-color: transparent } }`. **Glowing orb**: absolute-positioned div behind text. `radial-gradient(circle, rgba(217,78,40,0.3) 0%, transparent 70%)`, 400px diameter. `@keyframes orbPulse { 0%,100% { transform: scale(1); opacity: 0.6 } 50% { transform: scale(1.2); opacity: 1 } }` over 8s. **Subtitle + CTAs**: appear after typing with `animation-delay` matching typing duration. Two Buttons (#contacto primary, #servicios secondary). **Responsive**: on <768px, consider shorter typed text or wider container to avoid overflow. **Reduced motion**: text visible immediately (no typing animation), no blink, orb static.
- [x] T017 [P] [US3] Create ShimmerServices component in src/app/v4/components/ShimmerServices.tsx + ShimmerServices.module.css — `'use client'` component for useInView. Section with `id="servicios"`. Import `services` and `Icon`. **Grid**: `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem`. **Animated gradient borders**: each card uses `border: 2px solid transparent; background: linear-gradient(#0f0f23, #0f0f23) padding-box, conic-gradient(from var(--shimmer-angle), #d94e28, #2d1b69, #1e3a5f, #d94e28) border-box; border-radius: 1rem`. `@keyframes shimmer { to { --shimmer-angle: 360deg } }` — 3s infinite loop. **Card body**: `backdrop-filter: blur(16px)`, padding 2rem. **Content**: Icon with glow (`filter: drop-shadow(0 0 8px rgba(217,78,40,0.5))`), h3 title, description, features. **3D hover**: `transform: perspective(1000px) translateZ(10px); box-shadow: 0 0 20px rgba(217,78,40,0.3)`, transition 0.3s. **Staggered reveal**: useInView per card for fade-in. **Responsive**: single column <768px, no 3D hover on mobile. **Reduced motion**: no shimmer animation (static gradient border), no fade delay. Text `#f0f0f0`, muted `#94a3b8`.
- [x] T018 [P] [US3] Create GlassClients component in src/app/v4/components/GlassClients.tsx + GlassClients.module.css — `'use client'` component. Import `trpc`. Use `trpc.clients.list.useQuery()`. Return null if loading/empty. Section with `id="clientes"`. **Gradient accent line**: `::before` pseudo-element — `height: 2px; background: linear-gradient(90deg, transparent, #d94e28, #2d1b69, transparent)`. **Section background**: `rgba(255,255,255,0.02)`. **Grid**: `repeat(auto-fit, minmax(140px, 1fr))`. Each client in a glass card: `background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; box-shadow: 0 0 8px rgba(217,78,40,0.1)`. Image with error fallback. **Staggered entrance**: useInView with transition-delay per card. **Responsive**: 2-column minimum on mobile.
- [x] T019 [P] [US3] Create AuroraContact component in src/app/v4/components/AuroraContact.tsx + AuroraContact.module.css — section with `id="contacto"`. Import `ContactForm` from `@/modules/contact`. **Glass container**: wrap ContactForm in a div with `backdrop-filter: blur(20px); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 3rem`. **Glowing focus states**: CSS overrides for inputs within the container — `input:focus, textarea:focus, select:focus { box-shadow: 0 0 12px rgba(217,78,40,0.4); border-color: rgba(217,78,40,0.6) }`. Input backgrounds: `rgba(255,255,255,0.05)`. **Section heading**: "Hablemos de tu proyecto" in Inter bold, `#f0f0f0`. **Responsive**: padding reduces on mobile. Max-width 700px centered.
- [x] T020 [P] [US3] Create AuroraCTA component in src/app/v4/components/AuroraCTA.tsx + AuroraCTA.module.css — section. **Gradient text**: h2 with `background: linear-gradient(90deg, #f0f0f0, #d94e28, #2d1b69, #f0f0f0); background-size: 200% 200%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 6s ease infinite`. `@keyframes gradientShift { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }`. **Glowing CTA button**: `<a href="#contacto"><Button size="lg">Empecemos a hablar</Button></a>` wrapped in a div with `box-shadow: 0 0 20px rgba(217,78,40,0.4)`, `border-radius` matching button. Hover: `transform: scale(1.05); box-shadow: 0 0 30px rgba(217,78,40,0.6)`. Transition 0.3s. **Responsive**: heading scales via clamp, button full-width mobile. **Reduced motion**: static gradient (no shift), no scale on hover.
- [x] T021 [US3] Create V4 page in src/app/v4/page.tsx + src/app/v4/page.module.css — **page.tsx**: import Header, Footer, JsonLd from shared, and all 6 V4 components from `./components/`. Compose: `<div className={styles.page}><AuroraBackground /><JsonLd /><div className={styles.headerWrap}><Header /></div><main>` then TypingHero, ShimmerServices, GlassClients, AuroraContact, AuroraCTA `</main><div className={styles.footerWrap}><Footer /></div></div>`. **page.module.css**: `.page` — `background: #050510; color: #f0f0f0; min-height: 100vh; position: relative`. Set CSS custom properties: `--color-primary: #d94e28; --color-background-dark: #050510; --color-text-primary: #f0f0f0; --color-text-secondary: #94a3b8; --color-text-muted: #64748b; --color-border: rgba(255,255,255,0.1)`. `.page > main` — `position: relative; z-index: 1`. `.headerWrap header` — `background: rgba(5,5,16,0.8); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.06)`. `.footerWrap footer` — `background: #050510; border-top: 1px solid rgba(255,255,255,0.06)`.

**Checkpoint**: User Story 3 fully functional. `/v4` displays complete Aurora Tech design. Aurora gradient background, typing hero, shimmer-border service cards, glass client cards with real data, glowing contact form, gradient text CTA. All animations respect prefers-reduced-motion.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility verification, responsive validation, main page regression check, and end-to-end verification.

- [x] T022 [P] Verify main page at `/` is completely unchanged (FR-011, SC-006) — navigate to `http://localhost:3000/`, confirm dark background, orange-red accents, glass morphism, all sections present, all interactions functional. Compare visually with pre-implementation state. Ensure no CSS variable leakage from variant pages affects the main page.
- [x] T023 [P] Verify WCAG 2.1 AA contrast compliance (FR-009, SC-004) across all three variants — check text/background contrast for V2 (white `#f8fafc` on dark `#0a0a0a`), V3 (charcoal `#1a1a1a` on cream `#faf8f5`), V4 (white `#f0f0f0` on dark `#050510`). Verify focus indicators visible on all interactive elements across all variants.
- [x] T024 [P] Verify responsive layout at 320px, 768px, and 1920px for all three variants (FR-008, SC-005) — no horizontal overflow on any variant at any viewport. V2: scroll-snap switches to proximity on mobile. V3: carousel still scrollable on mobile. V4: no 3D hover on touch devices. Content reflows gracefully.
- [x] T025 [P] Verify prefers-reduced-motion handling (FR-010, SC-009) — enable `prefers-reduced-motion: reduce` in browser dev tools. V2: no mesh animation, no marquee scroll, no particles, no staggered reveals. V3: no slide-up animations. V4: aurora blobs static, no typing animation, no shimmer, no orb pulse. All content fully visible and functional on all variants.
- [x] T026 [P] Measure page load time and animation FPS (SC-001, SC-008) — open Chrome DevTools Performance tab. For each variant (/v2, /v3, /v4): (1) run Lighthouse audit and verify page load < 3s on simulated 3G. (2) Record a 5-second profile while scrolling — verify no frames drop below 60fps for CSS animations (gradient mesh, marquee, aurora, shimmer). Flag any jank or layout shift.
- [x] T027 [P] Verify bundle size (Constitution IV) — run `next build` and check the output. Each variant route's initial JS bundle MUST NOT exceed 250KB gzipped. Verify route-level code splitting is working (each /v2, /v3, /v4 loads only its own components).
- [x] T028 [P] Remove unused VariantLayout from feature 003 — delete src/modules/landing/components/VariantLayout/VariantLayout.tsx and src/modules/landing/components/VariantLayout/index.ts. Remove the `VariantLayout` export from src/modules/landing/index.ts. This component is no longer used since all three variants now have custom page compositions.
- [x] T029 Run quickstart.md validation — follow all steps in specs/004-landing-redesigns/quickstart.md end-to-end to verify the complete feature works across all variants. Verify visual differentiation (SC-007): each variant immediately identifiable as a different design.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately. MUST complete before user stories (they import useInView and use @property).
- **Foundational (Phase 2)**: N/A
- **User Story 1 (Phase 3)**: Depends on Phase 1 (T001, T002). Can run in parallel with US2 and US3.
- **User Story 2 (Phase 4)**: Depends on Phase 1 (T001, T002). Can run in parallel with US1 and US3.
- **User Story 3 (Phase 5)**: Depends on Phase 1 (T001, T002). Can run in parallel with US1 and US2.
- **Polish (Phase 6)**: Depends on all three user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Depends on T001/T002. Creates `src/app/v2/` (12 new files: page.tsx, page.module.css, 5 components x 2 files each).
- **User Story 2 (P2)**: Depends on T001/T002. Creates `src/app/v3/` (12 new files: page.tsx, page.module.css, 5 components x 2 files each).
- **User Story 3 (P3)**: Depends on T001/T002. Creates `src/app/v4/` (14 new files: page.tsx, page.module.css, 6 components x 2 files each).

No cross-story dependencies. Each story creates files in its own directory.

### Within Each User Story

- Component tasks (T003-T007, T009-T013, T015-T020) are marked [P] — they can all run in parallel within their story since they create separate files with no interdependencies.
- Page task (T008, T014, T021) MUST run after all component tasks in that story — it imports and assembles all components.

### Parallel Opportunities

```bash
# All three user stories in parallel (after T001/T002, completely independent directories):
Task: "Create V2 Cinematic Narrative in src/app/v2/"
Task: "Create V3 Swiss Editorial in src/app/v3/"
Task: "Create V4 Aurora Tech in src/app/v4/"

# Within each user story, all component tasks in parallel:
# V2 example:
Task: "CinematicHero in src/app/v2/components/"
Task: "BentoServices in src/app/v2/components/"
Task: "ClientMarquee in src/app/v2/components/"
Task: "SplitContact in src/app/v2/components/"
Task: "CinematicCTA in src/app/v2/components/"

# All polish tasks in parallel:
Task: "Verify main page unchanged"
Task: "Verify WCAG contrast"
Task: "Verify responsive layout"
Task: "Verify prefers-reduced-motion"
Task: "Measure page load and FPS"
Task: "Verify bundle size"
Task: "Remove unused VariantLayout"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (useInView hook + @property declarations — T001, T002)
2. Complete Phase 3: User Story 1 — V2 Cinematic Narrative (12 files)
3. **STOP and VALIDATE**: Navigate to `/v2`, verify design, test interactions, test responsive
4. Deploy/demo if ready — first variant live

### Incremental Delivery

1. Setup → useInView + @property ready
2. Add User Story 1 → `/v2` Cinematic Narrative live → Demo (MVP!)
3. Add User Story 2 → `/v3` Swiss Editorial live → Demo
4. Add User Story 3 → `/v4` Aurora Tech live → Demo
5. Polish → Accessibility, responsive, reduced-motion, regression verified

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story
- No test tasks — project has no test framework configured
- All three user stories are fully parallel (after setup) — they create files in different directories with zero overlap
- Component tasks within each story are all [P] — they create independent files
- Page tasks (T008, T014, T021) MUST run after their story's components — they import and assemble all components
- The component tasks (T003-T007, T009-T013, T015-T020) are the most substantial — each creates a custom component with its own visual identity, animations, and CSS module. The plan.md Variant Design Specifications section contains exact CSS values and component guidance
- V4 has 6 components (one extra: AuroraBackground) vs V2/V3 with 5 each
- @property declarations in globals.css are used by V2 (gradient mesh) and V4 (aurora, shimmer) — V3 doesn't need them but they don't affect it
- Existing v2/v3/v4 files from feature 003-bauhaus-redesigns will be overwritten — this is intentional per user request to redo the designs
- T028 removes the now-unused VariantLayout component from feature 003
- Commit after each user story (each variant route is independently deployable)
