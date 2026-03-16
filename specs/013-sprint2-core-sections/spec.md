# Feature: Sprint 2 — Core Sections Above the Fold

## Context
Sprint 2 (38 SP) of the Carbono14 UX/UI redesign. Implements the sections visitors see first after the hero: social proof, problem comparison, agents showcase, methodology stepper, and footer. These are the highest-impact sections for conversion.

**Tasks covered:** TASK-010 through TASK-016, TASK-024, TASK-025

## User Stories
- As a visitor, when I scroll past the hero, then I see logos of companies that trust Carbono14 (social proof)
- As a CTO evaluating AI solutions, when I view "El Problema", then I see a clear comparison table of generative vs operative AI across 6 criteria
- As a visitor, when I view "Agentes", then I see 4 specialized agent cards plus a custom agent CTA
- As a visitor, when I view "Metodología", then I see a 4-phase stepper showing the work process
- As a visitor, when I reach the bottom, then I see a multi-column footer with navigation, contact, and newsletter

## Acceptance Criteria

### TASK-010: SocialProof.tsx
- [ ] Background warm (#f0ece6), border-bottom
- [ ] 6 logo placeholders as styled text (ACME Corp, NovaTech, Grupo Delta, FinData SA, Meridian, Atlas Ops)
- [ ] Separators between logos, hover opacity transition
- [ ] Metrics line below: "30+ agentes desplegados · 99.9% uptime · Análisis técnico en <48h"

### TASK-011 + TASK-012: Problema.tsx (table + benefit cards + quote)
- [ ] Dark background with grid texture
- [ ] Section label "El problema", heading, description
- [ ] 2-column grid: comparison table (left) + benefit cards (right)
- [ ] Table: 6 rows (Determinismo through Procesos críticos), check/close icons, green/red colors
- [ ] 3 benefit cards with icon, title, "OPERATIVA" badge, description
- [ ] Quote with red left border below table
- [ ] Responsive: 1 column on ≤768px

### TASK-013 + TASK-014: Agentes.tsx (4 cards + custom card)
- [ ] Section header with label, heading, description
- [ ] Architecture disclaimer badge (dashed border, monospace)
- [ ] 4-column grid: STOCK, BUDGET, DOC-GEN, ORCH cards
- [ ] Each card: color bar top, agent code, icon, title, description, specs
- [ ] ORCH card with dark background and radial glow
- [ ] 5th custom agent card: full-width, dashed blue border, horizontal layout, CTA
- [ ] CTA below: "Analizar mis procesos automatizables"
- [ ] Responsive: 2 cols tablet, 1 col mobile

### TASK-015 + TASK-016: Metodologia.tsx (stepper + responsive)
- [ ] Background warm with top/bottom borders
- [ ] 4-column stepper: Auditoría (00), Especificación (01), Implementación (02), Operación (03)
- [ ] Numbered circles with connecting gradient line (red→blue)
- [ ] Phase 0 filled (active), rest outlined
- [ ] Time badges (<48h, 1-2 semanas, 2-6 semanas, Continuo)
- [ ] Responsive: vertical layout on ≤768px

### TASK-024 + TASK-025: Footer.tsx (multi-column + newsletter)
- [ ] Dark background (#1a1a2e)
- [ ] 4 columns: brand+social, servicios links, empresa links, newsletter
- [ ] Social icons (LinkedIn, GitHub, Email) with hover
- [ ] Newsletter email input + button (not connected to backend)
- [ ] Copyright bar with privacy/terms links
- [ ] Responsive: 2 cols tablet, 1 col mobile

## Affected Components
- `src/app/components/SocialProof.tsx` + `.module.css` — New
- `src/app/components/Problema.tsx` + `.module.css` — Rewrite
- `src/app/components/Agentes.tsx` + `.module.css` — New (replaces Capacidades)
- `src/app/components/Metodologia.tsx` + `.module.css` — New (replaces ComoFunciona)
- `src/shared/components/Footer/Footer.tsx` + `.module.css` — Rewrite
- `src/app/page.tsx` — Update imports and section order

## Dependencies
- Sprint 1 (design system, Header, Hero) — DONE
