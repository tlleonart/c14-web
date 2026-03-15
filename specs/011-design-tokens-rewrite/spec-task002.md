# Feature: Update globals.css — Base Styles and Utility Classes

## Context
TASK-002 from Sprint 1 (US-003, EPIC-001). Update globals.css to use new design tokens and add utility classes from the mockup definitivo (.section-label, .text-mono, .btn-primary, .btn-secondary, .container, etc.). Preserve .fadeIn and prefers-reduced-motion.

## User Stories
- As a developer, when I use global utility classes in components, then the styles match the mockup definitivo
- As a developer, when I reference base styles (body, headings, links), then they use the new evolutionary palette tokens

## Acceptance Criteria
- [ ] AC-01: body uses --font-body, --text, --bg (not --text-primary, --bg-primary)
- [ ] AC-02: Headings (h1-h6) use --font-body (Inter) with mockup weights/letter-spacing (not --font-headline)
- [ ] AC-03: Links use --transition (not --transition-fast), hover uses --primary (not --accent-primary)
- [ ] AC-04: Focus-visible uses --primary (not --accent-primary)
- [ ] AC-05: .container class with max-width: var(--max-w) and padding: 0 32px
- [ ] AC-06: Typography utility classes: .text-display, .text-h1, .text-h2, .text-h3, .text-body, .text-small, .text-mono
- [ ] AC-07: .section-label with variants .dark and .blue (exact styles from mockup)
- [ ] AC-08: .btn base + .btn-primary, .btn-secondary, .btn-outline-dark, .btn-lg (exact styles from mockup)
- [ ] AC-09: .card base class (exact styles from mockup)
- [ ] AC-10: .fadeIn and .fadeIn.visible preserved
- [ ] AC-11: prefers-reduced-motion preserved
- [ ] AC-12: Old token references eliminated (--text-primary, --bg-primary, --accent-primary, --transition-fast, --font-headline)

## Affected Components
- `src/app/globals.css` — Rewrite base styles, add utility classes

## Dependencies
- TASK-001 (variables.css must be updated first) — DONE

## Out of Scope
- Removing Playfair Display from layout.tsx (TASK-003)
- Updating CSS Modules (TASK-004)
