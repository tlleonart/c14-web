# Implementation Plan: Clientes Section

**Branch**: `002-clientes-section` | **Date**: 2026-02-21 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-clientes-section/spec.md`

## Summary

Add a public "Clientes" section to the landing page that displays client logos, names, and links fetched from Convex. Clients are stored in Convex with name, image (via Convex file storage), URL, and display order. The section sits between Services and Contact. No admin UI — management via Convex dashboard.

## Technical Context

**Language/Version**: TypeScript 5.9, React 19, Next.js 16
**Primary Dependencies**: Convex 1.31.6, tRPC 11, TanStack React Query 5, Zod 4
**Storage**: Convex (database + file storage for images)
**Testing**: Manual (no test framework configured in project)
**Target Platform**: Web (all viewports 320px–1920px)
**Project Type**: Web application (Next.js App Router)
**Performance Goals**: Clientes section visible within 2s of viewport entry; images lazy-loaded
**Constraints**: Initial bundle <250KB gzipped; API response <200ms p50
**Scale/Scope**: ~10–50 clients; single landing page section

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Gate | Status |
|-----------|------|--------|
| I. Code Quality | Single responsibility per function/module; meaningful naming; DRY; error handling on Convex calls | PASS |
| II. Testing Standards | No test framework in project; Convex functions are typed and validated by schema; manual testing sufficient for this scope | PASS (no test infra exists) |
| III. UX Consistency | CSS modules with design system variables; responsive 320–1920px; image fallback; hidden when empty; WCAG 2.1 AA (alt text, contrast, keyboard nav) | PASS |
| IV. Performance | Lazy-load images; Convex query indexed by displayOrder; no N+1; images served via Convex CDN URLs | PASS |

No violations requiring justification.

## Project Structure

### Documentation (this feature)

```text
specs/002-clientes-section/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── clients-api.md
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
convex/
├── schema.ts              # Add clients table
└── clients.ts             # New: queries + mutations for clients

src/
├── app/
│   └── page.tsx           # Add Clients component between Services and Contact
├── modules/
│   └── landing/
│       ├── components/
│       │   └── Clients/
│       │       ├── Clients.tsx
│       │       ├── Clients.module.css
│       │       ├── ClientCard.tsx
│       │       ├── ClientCard.module.css
│       │       └── index.ts
│       └── index.ts       # Add Clients export
└── server/
    └── api/
        └── routers/
            ├── _app.ts    # Add clients router
            └── clients.ts # New: tRPC router for clients query
```

**Structure Decision**: Follows existing module-first architecture. New `Clients` component in landing module with its own CSS module. Convex handles storage and API; tRPC exposes a typed query to the frontend. Mirrors the existing `ContactSection`/`contacts.ts` pattern.
