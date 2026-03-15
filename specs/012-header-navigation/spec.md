# Feature: Header with Expanded Navigation and Active Section Indicator

## Context
TASK-005, TASK-006, TASK-007 from Sprint 1 (US-004, US-005, EPIC-002). Rewrite the Header component with 5 anchor links to homepage sections, CTA button, glassmorphism effect, active section indicator via IntersectionObserver, and responsive hamburger menu with CTA. These three tasks are grouped because they are interdependent: the Header (TASK-005) consumes the useActiveSection hook (TASK-006) and its CSS module (TASK-007) is part of the same component.

## User Stories
- As a visitor, when I view the header, then I see links to all 5 main sections (El problema, Agentes, Metodología, Gobernanza, Clientes) plus a "Hablemos" CTA button
- As a visitor scrolling the page, when a section enters the viewport, then the corresponding nav link is visually highlighted
- As a mobile visitor, when I tap the hamburger menu, then I see all navigation links plus the "Hablemos" CTA in a full-screen overlay

## Acceptance Criteria
- [ ] AC-01: Header is sticky (position: sticky, top: 0) with height 68px (var(--header-h))
- [ ] AC-02: Glassmorphism: background rgba(250,250,248,0.92), backdrop-filter blur(12px), border-bottom 1px solid var(--border), subtle shadow
- [ ] AC-03: Logo "Carbono" (Inter 800) + "14" (JetBrains Mono 700, red) links to #top
- [ ] AC-04: 5 nav links: #problema, #agentes, #metodologia, #gobernanza, #testimonios — centered in header
- [ ] AC-05: Nav link styling: pill shape (radius-pill), hover background rgba(0,0,0,0.05), font-size 0.9rem, font-weight 500
- [ ] AC-06: Active nav link has distinct visual state (color change and/or background)
- [ ] AC-07: CTA "Hablemos" as btn-primary linking to #contacto
- [ ] AC-08: useActiveSection hook with IntersectionObserver returning active section ID
- [ ] AC-09: Hamburger menu visible at ≤768px, nav links hidden
- [ ] AC-10: Mobile overlay with all links + "Hablemos" CTA, body scroll locked
- [ ] AC-11: Smooth scroll on anchor link click
- [ ] AC-12: No conflict with existing useInView hook

## Affected Components
- `src/shared/components/Header/Header.tsx` — Complete rewrite
- `src/shared/components/Header/Header.module.css` — Complete rewrite
- `src/shared/hooks/useActiveSection.ts` — New file

## Dependencies
- TASK-001 through TASK-004 (design tokens) — DONE

## Out of Scope
- Header behavior on internal pages (/contacto, /metodo, /servicios) — nav links are for homepage only. Internal pages get the same Header but links navigate to homepage sections.
