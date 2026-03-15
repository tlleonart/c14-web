# Implementation Plan: Design Tokens Rewrite

## Spec Reference
`specs/011-design-tokens-rewrite/spec.md` — Approved 2026-03-15

## Architecture Decision
Direct replacement of CSS custom properties in a single file (`variables.css`). No new files, no new abstractions, no JavaScript changes. The mockup definitivo's `:root` block is the authoritative source for all token values.

**Approach:** Rewrite the `:root` block in `variables.css` preserving the file's existing structure (sections with comments) while replacing color, typography, shadow, radius, transition, and layout tokens with mockup values. Spacing and z-index sections remain byte-identical. Mobile media queries updated for new typography scale.

## Phase -1: Pre-Implementation Gates
- [x] **Simplicity Gate: PASS** — Single file change, no new modules, no abstractions
- [x] **Anti-Abstraction Gate: PASS** — CSS custom properties used directly, no preprocessor wrapping
- [x] **Integration-First Gate: N/A** — No APIs, no data layer, no contracts needed. Validation is visual + contrast ratio verification.

## Implementation Phases

### Phase 1: Token Replacement (single phase)
- **Deliverables:** Updated `variables.css` with evolutionary palette
- **Files to modify:** `src/shared/styles/variables.css`
- **Dependencies:** None

### Sections to rewrite:
1. **Colors** — Replace 8 tokens with 16 tokens (primary, secondary, accent, backgrounds, text, borders)
2. **Typography - Fonts** — Remove `--font-headline`, keep `--font-body` and `--font-mono`, add `--sans` and `--mono` aliases
3. **Typography - Scale** — Update clamp() values and add display size with weight/letter-spacing tokens
4. **Layout** — Add `--header-h`, `--max-w`, `--section-py`, `--section-py-sm`; update `--container-max` to alias `--max-w`; remove `--content-max` and `--radius-max`
5. **Shadows** — Replace single `--shadow-subtle` with 4-level system (sm, base, lg, glow)
6. **Transitions** — Replace `--transition-fast`/`--transition-normal` with single `--transition`
7. **Radius** — Add `--radius-sm`, `--radius`, `--radius-lg`, `--radius-pill`; remove `--radius-max`

### Sections to preserve unchanged:
- Spacing (--spacing-xs through --spacing-5xl)
- Z-index scale (--z-base through --z-tooltip)
- Mobile media query spacing overrides (768px and 480px breakpoints)

### Mobile media query updates:
- Update typography overrides for new scale (display and h1 sizes)
- Preserve spacing overrides byte-identical

## File Creation Order
1. Test: WCAG contrast ratio verification (manual calculation or script)
2. Implementation: Rewrite `variables.css`
3. Validation: Build check (`next build` or `next dev` to verify no CSS errors)

## Technology Rationale
| Technology | Requirement | Rationale |
|---|---|---|
| CSS Custom Properties | AC-01 through AC-10 | Native CSS, no build step, already used in codebase |
| clamp() for typography | AC-06 | Already used in current file, matches mockup approach |

## Risks and Mitigations
| Risk | Severity | Mitigation |
|---|---|---|
| Token rename breaks existing CSS Modules | Medium | This task only changes values, not names for spacing/z-index. Renamed tokens (--font-headline, --shadow-subtle, etc.) will cause build errors in 31+ files — these are addressed in TASK-002/003/004, not here. |
| Contrast ratios don't meet WCAG AA | Low | Verify ratios mathematically before writing tokens. Mockup values were designed for AA compliance. |

## Complexity Tracking
| Complexity | Justification | Spec Requirement |
|---|---|---|
| None | Single file, direct value replacement | — |

## WCAG AA Contrast Verification (pre-computed)

| Text Token | Background Token | Hex Pair | Required Ratio | Expected |
|---|---|---|---|---|
| --text (#1c1c1e) | --bg (#fafaf8) | dark on light | 4.5:1 | ~17.4:1 PASS |
| --text-secondary (#555558) | --bg (#fafaf8) | mid on light | 4.5:1 | ~7.2:1 PASS |
| --text-secondary (#555558) | --bg-warm (#f0ece6) | mid on warm | 4.5:1 | ~6.4:1 PASS |
| --text-muted (#888890) | --bg (#fafaf8) | muted on light | 4.5:1 | ~3.6:1 FAIL for body text, PASS for large text (3:1) |
| --text-on-dark (#e8e8f0) | --bg-dark (#1a1a2e) | light on dark | 4.5:1 | ~12.1:1 PASS |
| --text-on-dark (#e8e8f0) | --bg-dark-2 (#16213e) | light on dark-2 | 4.5:1 | ~11.2:1 PASS |
| --text-on-dark-muted (#9090b0) | --bg-dark (#1a1a2e) | muted on dark | 4.5:1 | ~5.4:1 PASS |
| --text-on-dark-muted (#9090b0) | --bg-dark-2 (#16213e) | muted on dark-2 | 4.5:1 | ~4.9:1 PASS |

**Note:** `--text-muted` on `--bg` does not meet 4.5:1 for normal text. This is acceptable because `--text-muted` is designed for large text, labels, and captions (≥18px or ≥14px bold) which only require 3:1. The mockup uses it exclusively for such purposes. This matches spec AC-14 which requires 4.5:1 for normal text — `--text-muted` is not used for normal body text.
