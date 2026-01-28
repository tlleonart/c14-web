# Tasks: Landing Page para Servicios de IA

**Input**: Design documents from `/specs/001-landing-page/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Tests included per Constitution (80% coverage requirement)

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Exact file paths included in all tasks

## Path Conventions

- **Source**: `src/` at repository root
- **Convex**: `convex/` at repository root
- **Tests**: `tests/` at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Next.js 16 project with TypeScript in project root
- [ ] T002 Configure ESLint and Prettier in eslint.config.js and .prettierrc
- [ ] T003 [P] Create design tokens CSS variables in src/shared/styles/variables.css
- [ ] T004 [P] Create global styles and CSS reset in src/app/globals.css
- [ ] T005 [P] Configure Google Fonts (Playfair Display, Inter) in src/app/layout.tsx
- [ ] T006 [P] Create classname utility function in src/shared/utils/cn.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

### Convex Setup

- [ ] T007 Initialize Convex project with `npx convex dev`
- [ ] T008 Create Convex schema for contactRequests in convex/schema.ts
- [ ] T009 Create Convex contact mutations in convex/contacts.ts

### tRPC Setup

- [ ] T010 Create tRPC initialization in src/server/api/trpc.ts
- [ ] T011 Create tRPC context in src/server/api/context.ts
- [ ] T012 Create root router in src/server/api/routers/_app.ts
- [ ] T013 Create tRPC API route handler in src/app/api/trpc/[trpc]/route.ts
- [ ] T014 [P] Create tRPC client provider in src/trpc/client.tsx
- [ ] T015 [P] Create tRPC server helpers in src/trpc/server.ts
- [ ] T016 [P] Create query client config in src/trpc/query-client.ts

### App Shell

- [ ] T017 Create providers wrapper (Convex + tRPC) in src/app/providers.tsx
- [ ] T018 Create root layout with providers in src/app/layout.tsx
- [ ] T019 [P] Create loading state component in src/app/loading.tsx
- [ ] T020 [P] Create error boundary in src/app/error.tsx
- [ ] T021 [P] Create 404 page in src/app/not-found.tsx

### Shared Components

- [ ] T022 [P] Create Button component in src/shared/components/Button/Button.tsx
- [ ] T023 [P] Create Button styles in src/shared/components/Button/Button.module.css
- [ ] T024 [P] Create Input component in src/shared/components/Input/Input.tsx
- [ ] T025 [P] Create Input styles in src/shared/components/Input/Input.module.css
- [ ] T026 [P] Create Textarea component in src/shared/components/Textarea/Textarea.tsx
- [ ] T027 [P] Create Textarea styles in src/shared/components/Textarea/Textarea.module.css
- [ ] T028 [P] Create Icon component for Material Symbols in src/shared/components/Icon/Icon.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Descubrir Servicios (Priority: P1) 🎯 MVP

**Goal**: Visitantes entienden los 4 servicios ofrecidos en menos de 30 segundos

**Independent Test**: Mostrar página a usuario y verificar que identifica servicios rápidamente

### Tests for User Story 1

- [ ] T029 [P] [US1] Unit test for Hero component in tests/unit/components/Hero.test.tsx
- [ ] T030 [P] [US1] Unit test for Services component in tests/unit/components/Services.test.tsx
- [ ] T031 [P] [US1] Unit test for ServiceCard component in tests/unit/components/ServiceCard.test.tsx

### Implementation for User Story 1

- [ ] T032 [P] [US1] Create services static data in src/modules/landing/data/services.ts
- [ ] T033 [P] [US1] Create Header component in src/shared/components/Header/Header.tsx
- [ ] T034 [P] [US1] Create Header styles in src/shared/components/Header/Header.module.css
- [ ] T035 [P] [US1] Create Footer component in src/shared/components/Footer/Footer.tsx
- [ ] T036 [P] [US1] Create Footer styles in src/shared/components/Footer/Footer.module.css
- [ ] T037 [US1] Create Hero section component in src/modules/landing/components/Hero/Hero.tsx
- [ ] T038 [US1] Create Hero styles in src/modules/landing/components/Hero/Hero.module.css
- [ ] T039 [US1] Create ServiceCard component in src/modules/landing/components/Services/ServiceCard.tsx
- [ ] T040 [US1] Create Services section in src/modules/landing/components/Services/Services.tsx
- [ ] T041 [US1] Create Services styles in src/modules/landing/components/Services/Services.module.css
- [ ] T042 [US1] Create CallToAction section in src/modules/landing/components/CallToAction/CallToAction.tsx
- [ ] T043 [US1] Create CallToAction styles in src/modules/landing/components/CallToAction/CallToAction.module.css
- [ ] T044 [US1] Assemble landing page with all sections in src/app/page.tsx
- [ ] T045 [US1] Create landing page styles in src/app/page.module.css

**Checkpoint**: User Story 1 complete - landing page shows services clearly

---

## Phase 4: User Story 2 - Contactar a la Empresa (Priority: P1)

**Goal**: Visitantes pueden enviar formulario de contacto y recibir confirmación

**Independent Test**: Enviar formulario de prueba y verificar que llega al email del propietario

### Tests for User Story 2

- [ ] T046 [P] [US2] Unit test for ContactForm component in tests/unit/components/ContactForm.test.tsx
- [ ] T047 [P] [US2] Unit test for useContactForm hook in tests/unit/hooks/useContactForm.test.ts
- [ ] T048 [P] [US2] Integration test for contact submission in tests/integration/contact.test.ts

### Implementation for User Story 2

- [ ] T049 [US2] Create contact tRPC router in src/server/api/routers/contact.ts
- [ ] T050 [US2] Create email sending utility in src/server/email/sendContactEmail.ts
- [ ] T051 [US2] Create useContactForm hook in src/modules/contact/components/ContactForm/useContactForm.ts
- [ ] T052 [US2] Create SubmitButton component in src/modules/contact/components/SubmitButton/SubmitButton.tsx
- [ ] T053 [US2] Create SubmitButton styles in src/modules/contact/components/SubmitButton/SubmitButton.module.css
- [ ] T054 [US2] Create ContactForm client component in src/modules/contact/components/ContactForm/ContactForm.tsx
- [ ] T055 [US2] Create ContactForm styles in src/modules/contact/components/ContactForm/ContactForm.module.css
- [ ] T056 [US2] Create ContactSection wrapper in src/modules/landing/components/ContactSection/ContactSection.tsx
- [ ] T057 [US2] Create ContactSection styles in src/modules/landing/components/ContactSection/ContactSection.module.css
- [ ] T058 [US2] Integrate ContactSection into landing page in src/app/page.tsx
- [ ] T059 [US2] Add form validation error states and loading feedback

**Checkpoint**: User Story 2 complete - contact form fully functional

---

## Phase 5: User Story 3 - Experiencia Móvil (Priority: P2)

**Goal**: Página completamente funcional en dispositivos móviles (320px - 1920px)

**Independent Test**: Acceder desde móvil, ver servicios y enviar formulario sin problemas

### Tests for User Story 3

- [ ] T060 [P] [US3] E2E test for mobile viewport in tests/e2e/mobile.spec.ts
- [ ] T061 [P] [US3] E2E test for desktop viewport in tests/e2e/desktop.spec.ts

### Implementation for User Story 3

- [ ] T062 [P] [US3] Add responsive breakpoints to src/shared/styles/variables.css
- [ ] T063 [US3] Add responsive styles to Header in src/shared/components/Header/Header.module.css
- [ ] T064 [US3] Add responsive styles to Hero in src/modules/landing/components/Hero/Hero.module.css
- [ ] T065 [US3] Add responsive styles to Services in src/modules/landing/components/Services/Services.module.css
- [ ] T066 [US3] Add responsive styles to ContactForm in src/modules/contact/components/ContactForm/ContactForm.module.css
- [ ] T067 [US3] Add responsive styles to CallToAction in src/modules/landing/components/CallToAction/CallToAction.module.css
- [ ] T068 [US3] Add responsive styles to Footer in src/shared/components/Footer/Footer.module.css
- [ ] T069 [US3] Test and adjust touch targets for mobile (min 44x44px)
- [ ] T070 [US3] Ensure form keyboard does not obstruct content on mobile

**Checkpoint**: User Story 3 complete - fully responsive on all devices

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Quality, performance, and accessibility improvements

### Accessibility

- [ ] T071 [P] Add ARIA labels to all interactive elements
- [ ] T072 [P] Ensure color contrast meets WCAG 2.1 AA (4.5:1 minimum)
- [ ] T073 [P] Add keyboard navigation support to all components
- [ ] T074 Add skip-to-content link in src/app/layout.tsx

### Performance

- [ ] T075 [P] Optimize images with next/image (if any added)
- [ ] T076 [P] Add metadata and Open Graph tags in src/app/layout.tsx
- [ ] T077 Verify Lighthouse score meets targets (>90 performance)
- [ ] T078 Verify bundle size < 250KB gzipped

### Final Testing

- [ ] T079 [P] Create E2E test for complete contact flow in tests/e2e/contact-flow.spec.ts
- [ ] T080 Run full test suite and ensure 80% coverage
- [ ] T081 Manual QA: test all acceptance scenarios from spec.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational - can start after Phase 2
- **User Story 2 (Phase 4)**: Depends on Foundational - can run parallel to US1
- **User Story 3 (Phase 5)**: Depends on US1 + US2 completion (needs components to exist)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Independent - displays services
- **User Story 2 (P1)**: Independent - contact form (uses shared components from foundation)
- **User Story 3 (P2)**: Depends on US1 + US2 - adds responsive styles to existing components

### Within Each User Story

1. Tests written first (TDD per Constitution)
2. Data/utilities before components
3. Inner components before container components
4. Styles alongside their components
5. Integration into page last

### Parallel Opportunities

**Phase 1** (all [P] tasks):
```
T003, T004, T005, T006 can run in parallel
```

**Phase 2** (grouped [P] tasks):
```
T014, T015, T016 can run in parallel (tRPC client)
T019, T020, T021 can run in parallel (app shell)
T022-T028 can run in parallel (shared components)
```

**Phase 3** (User Story 1):
```
T029, T030, T031 can run in parallel (tests)
T032, T033, T034, T035, T036 can run in parallel (data + header + footer)
```

**Phase 4** (User Story 2):
```
T046, T047, T048 can run in parallel (tests)
```

**Phase 5** (User Story 3):
```
T060, T061 can run in parallel (E2E tests)
T062-T068 responsive styles can run in parallel after T062
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL)
3. Complete Phase 3: User Story 1 (Descubrir Servicios)
4. Complete Phase 4: User Story 2 (Contactar Empresa)
5. **STOP and VALIDATE**: Test both stories independently
6. Deploy MVP - landing page with working contact form

### Full Implementation

1. Complete MVP (US1 + US2)
2. Complete Phase 5: User Story 3 (Experiencia Móvil)
3. Complete Phase 6: Polish
4. Final deployment

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story
- Each user story is independently testable
- Constitution requires 80% test coverage
- No Tailwind - use CSS Modules only
- Server Components by default, Client Components only for ContactForm
- Commit after each task or logical group
