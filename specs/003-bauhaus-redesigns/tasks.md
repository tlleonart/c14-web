# Tasks: Bauhaus Landing Page Redesigns

**Input**: Design documents from `/specs/003-bauhaus-redesigns/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, quickstart.md

**Tests**: No test framework is configured in this project. Tests are not included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story. All three user stories are fully independent — each creates a new route with no shared state.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the shared VariantLayout component that all three variant pages will use, eliminating page.tsx duplication across routes.

- [x] T001 Create VariantLayout component in src/modules/landing/components/VariantLayout/VariantLayout.tsx — accepts a `styles: Record<string, string>` prop, imports Header, Footer, JsonLd from `@/shared/components` and Hero, Services, Clients, CallToAction, ContactSection from `@/modules/landing`, wraps each in styled `<div>` with wrapper classes (`styles.page`, `styles.headerWrap`, `styles.heroWrap`, `styles.servicesWrap`, `styles.clientsWrap`, `styles.contactWrap`, `styles.ctaWrap`, `styles.footerWrap`)
- [x] T002 Create barrel export in src/modules/landing/components/VariantLayout/index.ts and add VariantLayout export to src/modules/landing/index.ts

**Checkpoint**: VariantLayout component exists and is exported from the landing module. No routes created yet.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: No foundational phase required beyond Setup. Each variant route is self-contained — a page.tsx using VariantLayout with a variant-specific CSS module.

**Checkpoint**: N/A — proceed directly to user stories.

---

## Phase 3: User Story 1 - V2 Geometric Bauhaus Route (Priority: P1) MVP

**Goal**: Visitors navigate to `/v2` and see the complete landing page redesigned with a bold Geometric Bauhaus aesthetic — Bauhaus color triad, sharp corners, all-caps headings, geometric decorative shapes, no glass/gradients.

**Independent Test**: Navigate to `http://localhost:3000/v2` → all sections render with geometric Bauhaus styling. All interactive elements work. Responsive at 320px, 768px, 1920px with no horizontal overflow.

### Implementation for User Story 1

- [x] T003 [P] [US1] Create V2 Geometric Bauhaus page in src/app/v2/page.tsx — import VariantLayout from `@/modules/landing`, import styles from `./page.module.css`, render `<VariantLayout styles={styles} />`
- [x] T004 [US1] Create V2 Geometric Bauhaus CSS module in src/app/v2/page.module.css — implement the complete Geometric Bauhaus theme following plan.md V2 spec: (1) CSS variable overrides on `.page` — `--color-background-dark: #0c0c0c`, `--color-obsidian: #0f0f0f`, `--color-text-primary: #fafafa`, `--color-text-secondary: #b8b8b8`, `--color-text-muted: #787878`, `--color-border: rgba(255,255,255,0.12)`, `--font-display: var(--font-sans)` to switch headings to Inter, all `--radius-*: 0`, all `--shadow-*: none`, `--glass-background: transparent`, `--glass-blur: 0`. (2) Typography: all h1/h2/h3 via wrappers with `text-transform: uppercase`, `letter-spacing: 0.12em`, `font-weight: 900`. (3) Section separators: thick 3px colored borders alternating `#1a3a5c` (blue) and `#f2c744` (yellow) using `border-top` or `border-bottom` on wrapper elements. (4) Geometric decorations: `::before`/`::after` pseudo-elements on wrappers — circles via `border-radius: 50%`, triangles via `clip-path: polygon()`, using the Bauhaus triad colors. (5) Service cards: colored left-border accents. (6) Hide glow/grid decorative elements via wrapper selectors targeting `[aria-hidden]` divs. (7) Override hardcoded rgba values per research.md (Header background, card hover, cardIcon). (8) Responsive: media queries at 768px and 480px ensuring no overflow, decorative shapes scale/hide on mobile.

**Checkpoint**: User Story 1 fully functional. `/v2` displays complete Geometric Bauhaus design. All sections present, all interactions work, responsive at all breakpoints.

---

## Phase 4: User Story 2 - V3 Neo-Brutalist Bauhaus Route (Priority: P2)

**Goal**: Visitors navigate to `/v3` and experience a Neo-Brutalist Bauhaus design — pure black/off-white monochrome, oversized dramatic typography, thick borders, broken grid, instant transitions, raw aesthetic with `#d94e28` used only for CTAs.

**Independent Test**: Navigate to `http://localhost:3000/v3` → all sections render with brutalist styling. Monochrome palette with sparse orange-red accents. All interactions work. Oversized headings scale gracefully on mobile.

### Implementation for User Story 2

- [x] T005 [P] [US2] Create V3 Neo-Brutalist Bauhaus page in src/app/v3/page.tsx — import VariantLayout from `@/modules/landing`, import styles from `./page.module.css`, render `<VariantLayout styles={styles} />`
- [x] T006 [US2] Create V3 Neo-Brutalist Bauhaus CSS module in src/app/v3/page.module.css — implement the complete Neo-Brutalist theme following plan.md V3 spec: (1) CSS variable overrides on `.page` — `--color-background-dark: #000000`, `--color-obsidian: #000000`, `--color-text-primary: #f0ece4`, `--color-text-secondary: #f0ece4`, `--color-text-muted: #a09a90`, `--color-border: #f0ece4`, `--color-border-hover: #d94e28`, all `--radius-*: 0`, all `--shadow-*: none`, all `--transition-*: 0ms`, `--glass-background: transparent`, `--glass-blur: 0`. (2) Extreme typography: hero h1 at `clamp(4rem, 12vw, 10rem)`, section h2s at `clamp(3rem, 8vw, 7rem)`. (3) Thick borders: `border: 3px solid #f0ece4` on cards, sections, form wrapper via wrapper selectors. (4) Hide ALL decorative effects: target `[aria-hidden]` elements via wrapper selectors with `display: none`. (5) Full-bleed sections: override max-width constraints on select wrappers. (6) Overlapping sections: negative margins on wrapper elements for deliberate visual tension. (7) Rotated accent text: `::before` pseudo-elements with `transform: rotate(-90deg)` on section wrappers. (8) Override hardcoded rgba values per research.md — remove hover backgrounds, monochrome icon backgrounds. (9) Responsive: ensure oversized text scales via clamp(), no overflow at 320px, thick borders reduce on mobile.

**Checkpoint**: User Story 2 fully functional. `/v3` displays complete Neo-Brutalist Bauhaus design. Monochrome + sparse accent. All sections present, all interactions work, instant transitions.

---

## Phase 5: User Story 3 - V4 Warm Minimal Bauhaus Route (Priority: P3)

**Goal**: Visitors navigate to `/v4` and see a Warm Minimal Bauhaus design — cream light-mode backgrounds, charcoal text, Playfair Display italic headings, generous whitespace, slow elegant transitions, `#d94e28` only for interactive elements.

**Independent Test**: Navigate to `http://localhost:3000/v4` → all sections render with warm minimal styling. Light-mode cream palette. Delicate animations. All interactions work. Generous spacing and centered layout.

### Implementation for User Story 3

- [x] T007 [P] [US3] Create V4 Warm Minimal Bauhaus page in src/app/v4/page.tsx — import VariantLayout from `@/modules/landing`, import styles from `./page.module.css`, render `<VariantLayout styles={styles} />`
- [x] T008 [US3] Create V4 Warm Minimal Bauhaus CSS module in src/app/v4/page.module.css — implement the complete Warm Minimal theme following plan.md V4 spec: (1) CSS variable overrides on `.page` — `--color-background-dark: #f5f0e8`, `--color-obsidian: #f5f0e8`, `--color-text-primary: #2a2a2a`, `--color-text-secondary: #5a564e`, `--color-text-muted: #8a8278`, `--color-border: rgba(42,42,42,0.1)`, `--color-border-hover: rgba(217,78,40,0.3)`, `--radius-sm: 0.5rem` through `--radius-2xl: 2rem`, `--shadow-primary: 0 4px 20px rgba(42,42,42,0.08)`, `--shadow-glow: none`, `--transition-fast: 300ms ease`, `--transition-normal: 500ms ease`, `--transition-slow: 800ms cubic-bezier(0.4,0,0.2,1)`, `--glass-background: rgba(255,255,255,0.6)`, `--glass-blur: 16px`. (2) Typography: section headings via wrapper with `font-style: italic`, `font-weight: 400`, body text `line-height: 1.8`. (3) Generous spacing: increase section padding via wrapper overrides. (4) Narrower content: reduce max-width on content containers for elegant proportions. (5) Hairline dividers: `border-top: 1px solid rgba(42,42,42,0.08)` between section wrappers. (6) Header: override background to `rgba(245,240,232,0.9)` via `.headerWrap header`. (7) Hide decorative glow/grid elements via wrapper selectors. (8) Subtle hover: small scale transforms (1.01), opacity changes on cards. (9) Override hardcoded rgba values per research.md — adjust for light-mode backgrounds. (10) Responsive: generous spacing adapts at 768px and 480px, maintain breathing room.

**Checkpoint**: User Story 3 fully functional. `/v4` displays complete Warm Minimal Bauhaus design. Light cream mode, elegant spacing, italic headings. All sections present, all interactions work.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility verification, responsive validation, main page regression check, and end-to-end verification.

- [x] T009 [P] Verify main page at `/` is completely unchanged (FR-010) — navigate to `http://localhost:3000/`, confirm dark background, orange-red accents, glass morphism, all sections present, all interactions functional. Compare visually with pre-implementation state.
- [x] T010 [P] Verify WCAG 2.1 AA contrast compliance (FR-009) across all three variants — check text/background contrast for V2 (white `#fafafa` on dark `#0c0c0c`), V3 (off-white `#f0ece4` on black `#000000`), V4 (charcoal `#2a2a2a` on cream `#f5f0e8`). Verify focus indicators visible on all interactive elements.
- [x] T011 [P] Verify responsive layout at 320px, 768px, and 1920px for all three variants — no horizontal overflow on any variant at any viewport. Content reflows gracefully. Decorative elements scale or hide appropriately on mobile.
- [x] T012 Run quickstart.md validation — follow all steps in specs/003-bauhaus-redesigns/quickstart.md end-to-end to verify the complete feature works across all variants.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately. MUST complete before user stories (they import VariantLayout).
- **Foundational (Phase 2)**: N/A
- **User Story 1 (Phase 3)**: Depends on Phase 1 (T001, T002). Can run in parallel with US2 and US3.
- **User Story 2 (Phase 4)**: Depends on Phase 1 (T001, T002). Can run in parallel with US1 and US3.
- **User Story 3 (Phase 5)**: Depends on Phase 1 (T001, T002). Can run in parallel with US1 and US2.
- **Polish (Phase 6)**: Depends on all three user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Depends on T001/T002. Creates `src/app/v2/` (2 new files).
- **User Story 2 (P2)**: Depends on T001/T002. Creates `src/app/v3/` (2 new files).
- **User Story 3 (P3)**: Depends on T001/T002. Creates `src/app/v4/` (2 new files).

No cross-story dependencies. Each story creates files in its own directory.

### Within Each User Story

- T00X page.tsx → T00X page.module.css (page.tsx is ~5 lines importing VariantLayout + CSS; CSS module is the bulk of work)

### Parallel Opportunities

```bash
# All three user stories in parallel (after T001/T002, completely independent directories):
Task: "Create V2 Geometric Bauhaus in src/app/v2/"
Task: "Create V3 Neo-Brutalist Bauhaus in src/app/v3/"
Task: "Create V4 Warm Minimal Bauhaus in src/app/v4/"

# All polish tasks in parallel:
Task: "Verify main page unchanged"
Task: "Verify WCAG contrast"
Task: "Verify responsive layout"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (VariantLayout component — T001, T002)
2. Complete Phase 3: User Story 1 — V2 Geometric Bauhaus (2 files)
3. **STOP and VALIDATE**: Navigate to `/v2`, verify design, test interactions
4. Deploy/demo if ready — first variant live

### Incremental Delivery

1. Setup → VariantLayout ready
2. Add User Story 1 → `/v2` Geometric Bauhaus live → Demo (MVP!)
3. Add User Story 2 → `/v3` Neo-Brutalist Bauhaus live → Demo
4. Add User Story 3 → `/v4` Warm Minimal Bauhaus live → Demo
5. Polish → Accessibility, responsive, regression verified

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story
- No test tasks — project has no test framework configured
- All three user stories are fully parallel (after setup) — they create files in different directories with zero overlap
- T003/T005/T007 (page.tsx files) are each ~5 lines — they import VariantLayout and pass variant-specific CSS module styles. No duplication (DRY compliant).
- The CSS module tasks (T004, T006, T008) are the most substantial — each implements a complete visual redesign. The plan.md Variant Design Specifications section contains exact CSS variable values and wrapper CSS guidance for each.
- Commit after each user story (each variant route is independently deployable)
