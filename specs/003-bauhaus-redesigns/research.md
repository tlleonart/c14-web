# Research: Bauhaus Landing Page Redesigns

**Feature**: 003-bauhaus-redesigns
**Date**: 2026-02-21

## Research Question 1: How to create visual variants without modifying existing components?

### Decision: CSS Variable Overrides + Section Wrapper Elements

### Rationale

All existing component CSS modules reference CSS custom properties (`--color-*`, `--spacing-*`, `--font-*`, `--radius-*`, `--shadow-*`, `--transition-*`, `--glass-*`). CSS custom properties cascade through the DOM tree regardless of CSS Module class name scoping. By overriding these variables on a parent wrapper element, all child components automatically inherit the new theme.

For structural changes beyond what CSS variables control (text-transform, letter-spacing, layout adjustments, decorative pseudo-elements), section wrapper `<div>` elements in the variant page provide anchor points. Element selectors from the wrapper (e.g., `.heroWrap h1 { text-transform: uppercase }`) have specificity (0,1,1) which overrides the component's CSS Module class (0,1,0).

### Alternatives Considered

1. **Variant-specific component copies**: Duplicate all 7 section components × 3 variants = 42+ new component files. Maximum design freedom but massive code duplication and maintenance burden. Rejected because CSS variable + wrapper approach achieves the same result with 6 files.

2. **Adding `styles` prop to existing components**: Clean prop injection pattern but violates FR-010 (no modifications to existing component files). Rejected.

3. **CSS `:global` selectors targeting component internals**: Fragile dependency on hashed CSS Module class names. Rejected.

4. **CSS Layers for variant themes**: Modern but adds complexity with limited browser debugging tooling. Rejected in favor of simpler specificity-based overrides.

---

## Research Question 2: Hardcoded values in component CSS that need wrapper overrides

### Findings

The following hardcoded values exist in component CSS modules (not driven by CSS variables):

| Component | Property | Hardcoded Value | Affected Variants |
|-----------|----------|-----------------|-------------------|
| Header | background | `rgba(10, 10, 10, 0.8)` | V4 (light mode needs cream bg) |
| Hero .glow | background | `rgba(217, 78, 40, 0.15)` gradient | V3 (remove glow), V4 (adjust) |
| Hero .grid | background-image | `rgba(255, 255, 255, 0.02)` lines | V4 (light mode) |
| Services .card:hover | background | `rgba(217, 78, 40, 0.04)` | V3 (remove), V4 (adjust) |
| Services .cardIcon | background | `rgba(217, 78, 40, 0.1)` | V3 (monochrome), V4 (adjust) |
| Button .primary:hover | background | `rgba(217, 78, 40, 0.9)` | None (keeps primary) |
| ClientCard .placeholder | background | `rgba(217, 78, 40, 0.1)` | V3 (monochrome) |
| ClientCard .imageContainer | background | `rgba(255, 255, 255, 0.05)` | V4 (light mode) |
| CTA .glow | background | `rgba(217, 78, 40, 0.1)` gradient | V3 (remove), V4 (adjust) |

### Decision

Override these with element/attribute selectors from wrapper elements. The wrapper selectors have higher specificity and will cleanly override the hardcoded values. Example: `.heroWrap section::after { display: none; }` can hide glow effects.

---

## Research Question 3: Font weights needed for variants

### Findings

Current font loading in `layout.tsx`:
- `Playfair_Display` from `next/font/google` — loads with default weights
- `Inter` from `next/font/google` — loads with default weights

`next/font/google` with `subsets: ['latin']` and no explicit `weight` parameter loads all available weights via variable font.

### Decision

No changes to font loading needed. Both fonts support the full weight range:
- Inter: 100-900 (variable font)
- Playfair Display: 400-900 (variable font), includes italic

V2 needs Inter 700/900, V3 needs Playfair at extreme sizes, V4 needs Inter Light (300). All available.

---

## Research Question 4: Where to place variant route files

### Decision: `src/app/v2/`, `src/app/v3/`, `src/app/v4/`

### Rationale

Next.js App Router maps directories to routes. Each variant needs:
- `src/app/v[N]/page.tsx` — the variant page component
- `src/app/v[N]/page.module.css` — the variant CSS (variable overrides + wrapper styles)

The root `layout.tsx` (with font loading, Providers, globals.css) automatically wraps all routes. No layout duplication needed.

### Alternatives Considered

1. **Route group `(variants)/v2/`**: Adds unnecessary nesting, no benefit since all share root layout. Rejected.
2. **Dynamic route `[variant]/`**: Over-engineered for 3 fixed variants. Rejected.
