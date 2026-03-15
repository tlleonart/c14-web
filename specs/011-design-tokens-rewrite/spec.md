# Feature: Design Tokens Rewrite — Evolutionary Palette

## Context
TASK-001 from Sprint 1 of the Carbono14 UX/UI redesign. The current design system uses a dark-first palette (#0A0A0A background, gold #C8A96E accent, Playfair Display headlines) that scored 4.9/10 in the UX/UI audit. The redesign adopts an evolutionary palette (light-first #fafaf8 with dark accent sections, red/blue/gold colors, Inter headings) defined in the Mockup Definitivo. This task replaces ALL color, typography, shadow, and radius tokens in `variables.css` while preserving spacing and z-index tokens unchanged.

**Sprint Plan Reference:** TASK-001 (3 SP), US-001, EPIC-001
**Audit Recommendations Addressed:** R02 (contrast/color), R05 (section differentiation), R08 (visual depth)

## User Stories
- As a developer on the team, when I reference CSS custom properties in any component, then I get the new evolutionary palette values consistent with the Mockup Definitivo
- As a visitor to the site, when I view any page, then all text meets WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text) against its background

## Acceptance Criteria
- [ ] AC-01: All color tokens from the mockup are defined as CSS custom properties: --primary (#d44030), --primary-dark (#b33020), --primary-light (#f0564030), --secondary (#2d3a8c), --secondary-dark (#1e2a6b), --accent (#f5a623)
- [ ] AC-02: Background tokens defined: --bg (#fafaf8), --bg-warm (#f0ece6), --bg-dark (#1a1a2e), --bg-dark-2 (#16213e), --bg-card (#ffffff)
- [ ] AC-03: Text color tokens defined: --text (#1c1c1e), --text-secondary (#555558), --text-muted (#888890), --text-on-dark (#e8e8f0), --text-on-dark-muted (#9090b0)
- [ ] AC-04: Border tokens defined: --border (#e2ddd8), --border-dark (#2e2e4a)
- [ ] AC-05: Font variables renamed: --font-headline removed, --font-body maps to Inter (--sans: 'Inter', system-ui, sans-serif), --font-mono maps to JetBrains Mono (--mono: 'JetBrains Mono', 'Courier New', monospace)
- [ ] AC-06: Typography scale updated with display, h1, h2, h3 sizes plus weight and letter-spacing from mockup
- [ ] AC-07: Radius system defined: --radius-sm (4px), --radius (8px), --radius-lg (16px), --radius-pill (999px)
- [ ] AC-08: Shadow system defined: --shadow-sm, --shadow, --shadow-lg, --shadow-glow (with exact values from mockup)
- [ ] AC-09: Transition token defined: --transition (all 0.22s cubic-bezier(0.4,0,0.2,1))
- [ ] AC-10: Layout tokens defined: --header-h (68px), --max-w (1200px), --section-py (96px), --section-py-sm (64px)
- [ ] AC-11: Existing spacing tokens (--spacing-xs through --spacing-5xl) preserved unchanged
- [ ] AC-12: Existing z-index tokens (--z-base through --z-tooltip) preserved unchanged
- [ ] AC-13: Existing mobile media query overrides for spacing preserved unchanged
- [ ] AC-14: WCAG AA contrast ratio (4.5:1) verified for: --text on --bg, --text-secondary on --bg, --text-secondary on --bg-warm, --text-on-dark on --bg-dark, --text-on-dark on --bg-dark-2, --text-on-dark-muted on --bg-dark, --text-on-dark-muted on --bg-dark-2
- [ ] AC-15: Old tokens that are replaced do not remain in the file (no --bg-primary, --bg-secondary, --accent-primary, --accent-functional, --shadow-subtle, --transition-fast, --transition-normal, --radius-max, --content-max)

## Non-Functional Requirements
- Accessibility: All text/background combinations must meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
- Backward compatibility: Existing spacing and z-index tokens must remain byte-identical
- Performance: No impact — CSS variables only

## Affected Components
- `src/shared/styles/variables.css` — Complete rewrite of color, typography, shadow, radius, transition, and layout sections

## Dependencies
- None — this is the first task and prerequisite for all subsequent tasks
- **Note:** 31 files currently reference `--font-headline` — these will be addressed in TASK-004, not this task

## Out of Scope
- Updating globals.css (TASK-002)
- Removing Playfair Display from layout.tsx (TASK-003)
- Updating CSS Modules that reference --font-headline (TASK-004)
- Any component changes — this task is tokens only

## Assumptions
- The mockup's exact hex values are the source of truth for all tokens
- Mobile typography overrides for --h1-size and --h2-size from the current file should be updated to match the mockup's fluid clamp() values
- The --font-body and --font-mono variable names are preserved for backward compatibility with existing CSS Modules; --sans and --mono are added as aliases matching the mockup
