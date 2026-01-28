# Implementation Plan: Landing Page para Servicios de IA

**Branch**: `001-landing-page` | **Date**: 2026-01-28 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-landing-page/spec.md`

## Summary

Landing page para Carbono14, empresa de servicios de automatización IA, desarrollo de IA, web y software. La página presenta los servicios sin información falsa (empresa nueva) e incluye un formulario de contacto atractivo que almacena los mensajes en Convex y notifica por email. Prioriza Server Components para máximo rendimiento, usa CSS Modules (sin Tailwind), y arquitectura modular.

## Technical Context

**Language/Version**: TypeScript 5.x / Next.js 16 (App Router)
**Primary Dependencies**:
- Next.js 16 (App Router, Server Components, Server Actions)
- tRPC v11 (type-safe API)
- Convex (database, real-time)
- Zod (validation)
- CSS Modules (styling)
**Storage**: Convex (serverless database)
**Testing**: Vitest + React Testing Library + Playwright
**Target Platform**: Web (Vercel deployment)
**Project Type**: Web application (single Next.js project)
**Performance Goals**:
- Page load <3s on 3G
- TTI <5s
- Initial bundle <250KB gzipped
**Constraints**:
- API p95 <500ms
- WCAG 2.1 AA accessibility
- Responsive 320px-1920px
**Scale/Scope**: Single landing page with contact form, ~5 components

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Status |
|-----------|-------------|--------|
| **I. Code Quality Excellence** | Single responsibility, meaningful naming, DRY, complexity ≤10 | ✅ Modular architecture with clear separation |
| **II. Testing Standards** | 80% coverage, unit + integration + contract tests | ✅ Test strategy defined |
| **III. User Experience Consistency** | Design system, WCAG 2.1 AA, responsive, loading feedback | ✅ CSS Modules design system from UX inspiration |
| **IV. Performance Excellence** | <3s load, <500ms API, <250KB bundle | ✅ Server Components + code splitting |

**Quality Gates:**
- [x] Lint: ESLint + Prettier configured
- [x] Type Check: Full TypeScript strict mode
- [x] Unit Tests: Vitest for components and utilities
- [x] Integration Tests: Convex + tRPC procedures
- [x] Performance: Lighthouse CI thresholds
- [x] Accessibility: axe-core automated checks

## Project Structure

### Documentation (this feature)

```text
specs/001-landing-page/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 research findings
├── data-model.md        # Phase 1 data model
├── quickstart.md        # Phase 1 quickstart guide
├── contracts/           # Phase 1 API contracts
│   └── contact.ts       # Contact form tRPC router
└── checklists/
    └── requirements.md  # Spec quality checklist
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx                    # Root layout (fonts, providers)
│   ├── page.tsx                      # Landing page (Server Component)
│   ├── page.module.css               # Landing page styles
│   ├── globals.css                   # CSS variables, reset, fonts
│   ├── loading.tsx                   # Loading state
│   ├── error.tsx                     # Error boundary
│   ├── not-found.tsx                 # 404 page
│   ├── providers.tsx                 # Client providers (Convex, tRPC)
│   └── api/
│       └── trpc/
│           └── [trpc]/
│               └── route.ts          # tRPC API handler
│
├── modules/
│   ├── landing/
│   │   ├── components/
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Hero.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Services/
│   │   │   │   ├── Services.tsx
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   ├── Services.module.css
│   │   │   │   └── index.ts
│   │   │   ├── ContactSection/
│   │   │   │   ├── ContactSection.tsx
│   │   │   │   ├── ContactSection.module.css
│   │   │   │   └── index.ts
│   │   │   └── CallToAction/
│   │   │       ├── CallToAction.tsx
│   │   │       ├── CallToAction.module.css
│   │   │       └── index.ts
│   │   ├── data/
│   │   │   └── services.ts           # Static service data
│   │   └── index.ts
│   │
│   └── contact/
│       ├── components/
│       │   ├── ContactForm/
│       │   │   ├── ContactForm.tsx   # Client Component
│       │   │   ├── ContactForm.module.css
│       │   │   ├── useContactForm.ts # Form hook
│       │   │   └── index.ts
│       │   └── SubmitButton/
│       │       ├── SubmitButton.tsx
│       │       ├── SubmitButton.module.css
│       │       └── index.ts
│       ├── actions/
│       │   └── submitContact.ts      # Server Action (email)
│       └── index.ts
│
├── shared/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.css
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   └── index.ts
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Input.module.css
│   │   │   └── index.ts
│   │   ├── Textarea/
│   │   │   ├── Textarea.tsx
│   │   │   ├── Textarea.module.css
│   │   │   └── index.ts
│   │   └── Icon/
│   │       ├── Icon.tsx
│   │       └── index.ts
│   ├── styles/
│   │   └── variables.css             # Design tokens
│   └── utils/
│       └── cn.ts                     # Class name utility
│
├── server/
│   ├── api/
│   │   ├── routers/
│   │   │   ├── _app.ts               # Root router
│   │   │   └── contact.ts            # Contact procedures
│   │   ├── trpc.ts                   # tRPC initialization
│   │   └── context.ts                # Request context
│   └── email/
│       └── sendContactEmail.ts       # Email sending logic
│
└── trpc/
    ├── client.tsx                    # Client provider + hooks
    ├── server.ts                     # Server-side caller
    └── query-client.ts               # Query client config

convex/
├── _generated/                       # Auto-generated types
├── schema.ts                         # Database schema
├── contacts.ts                       # Contact mutations/queries
└── tsconfig.json

tests/
├── unit/
│   ├── components/
│   │   └── ContactForm.test.tsx
│   └── utils/
├── integration/
│   └── contact.test.ts               # tRPC + Convex integration
└── e2e/
    └── contact-flow.spec.ts          # Playwright E2E

```

**Structure Decision**: Arquitectura modular por feature (`modules/`) con componentes compartidos en `shared/`. Cada módulo es auto-contenido con sus componentes, estilos y lógica. Esta estructura escala bien cuando se agreguen más páginas/features.

## Design System (from UX Inspiration)

### Color Palette

```css
/* src/shared/styles/variables.css */
:root {
  /* Primary */
  --color-primary: #d94e28;
  --color-accent-red: #991b1b;

  /* Backgrounds */
  --color-background-dark: #0a0a0a;
  --color-obsidian: #111111;

  /* Text */
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;

  /* Borders */
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(217, 78, 40, 0.4);

  /* Glass effect */
  --glass-background: rgba(255, 255, 255, 0.02);
  --glass-blur: 12px;

  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-sans: 'Inter', sans-serif;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-primary: 0 4px 20px rgba(217, 78, 40, 0.2);
  --shadow-glow: 0 0 30px rgba(217, 78, 40, 0.3);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Typography Scale

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 (Hero) | Playfair Display | 6rem/8rem | 700 |
| H2 (Section) | Playfair Display | 3rem/5rem | 700 |
| H3 (Card) | Playfair Display | 1.5rem | 700 |
| Body | Inter | 1rem | 400 |
| Small | Inter | 0.875rem | 400 |
| Label | Inter | 0.625rem | 700 |

### Component Patterns

**Glass Card**:
```css
.glassCard {
  background: var(--glass-background);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  transition: all var(--transition-slow);
}

.glassCard:hover {
  border-color: var(--color-border-hover);
  background: rgba(217, 78, 40, 0.04);
  transform: translateY(-6px);
}
```

**Primary Button**:
```css
.buttonPrimary {
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-primary);
  color: white;
  font-weight: 700;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-primary);
  transition: all var(--transition-normal);
}

.buttonPrimary:hover {
  background: rgba(217, 78, 40, 0.9);
  transform: scale(1.02);
}
```

## Complexity Tracking

> No violations. Architecture is appropriately simple for scope.

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| No CRM | Direct Convex + email | Spec says no CRM needed initially |
| No auth | Public form only | Spec says no authentication required |
| Minimal deps | Next.js + tRPC + Convex | User requested minimal libraries |

## Implementation Phases

### Phase 0: Setup & Configuration ✓ (Researched)

- [x] Research Next.js 16 App Router + Server Components
- [x] Research tRPC integration patterns
- [x] Research Convex setup and schema
- [x] Analyze UX inspiration HTMLs

### Phase 1: Foundation

1. Initialize Next.js 16 project with TypeScript
2. Configure CSS Modules + design tokens
3. Setup Convex (schema, connection)
4. Setup tRPC (routers, client/server)
5. Create shared components (Button, Input, etc.)

### Phase 2: Landing Page Structure

1. Create Header component (logo, nav, CTA)
2. Create Hero section (headline, tagline, CTA)
3. Create Services section (4 service cards)
4. Create Call-to-Action section
5. Create Footer component

### Phase 3: Contact Form

1. Create ContactForm client component
2. Implement form validation (Zod)
3. Create Convex mutation for storage
4. Create tRPC procedure for submission
5. Implement email notification
6. Add success/error feedback UI

### Phase 4: Polish & Testing

1. Responsive design (320px - 1920px)
2. Accessibility audit (WCAG 2.1 AA)
3. Performance optimization (Lighthouse)
4. Unit tests for components
5. Integration tests for form flow
6. E2E tests with Playwright
