# Tasks: Clientes Section

**Input**: Design documents from `/specs/002-clientes-section/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: No test framework is configured in this project. Tests are not included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Database schema and shared backend infrastructure needed by all user stories

- [x] T001 Add `clients` table to Convex schema with `name`, `image` (v.id("_storage")), `url`, `displayOrder` fields and `by_displayOrder` index in convex/schema.ts
- [x] T002 Create Convex `clients.list` query in convex/clients.ts — query clients table using `by_displayOrder` index, resolve each `image` storage ID to URL via `ctx.storage.getUrl()`, return array with `imageUrl` field (null if storage file missing)
- [x] T003 [P] Create Convex `clients.generateUploadUrl` mutation in convex/clients.ts — returns `ctx.storage.generateUploadUrl()` for image uploads

**Checkpoint**: Convex schema deployed, `clients.list` query returns empty array, `generateUploadUrl` produces a valid upload URL

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: tRPC layer connecting Convex to the frontend — MUST be complete before UI work

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create tRPC clients router in src/server/api/routers/clients.ts — `publicProcedure.query()` that calls `convex.query(api.clients.list)` via the server-side Convex HTTP client, returns empty array if Convex client unavailable
- [x] T005 Register clients router in src/server/api/routers/_app.ts — add `clients: clientsRouter` to the app router

**Checkpoint**: `GET /api/trpc/clients.list` returns empty array (no clients in DB yet). Foundation ready — user story implementation can begin.

---

## Phase 3: User Story 1 - View Clients on Landing Page (Priority: P1) MVP

**Goal**: Visitors see a "Clientes" section on the landing page with client logos, names, and clickable URLs, ordered by display order. Section hides when no clients exist.

**Independent Test**: Navigate to landing page → verify Clientes section appears between Services and Contact with client entries showing image, name, and link opening in new tab. With zero clients, section is hidden.

### Implementation for User Story 1

- [x] T006 [P] [US1] Create ClientCard component in src/modules/landing/components/Clients/ClientCard.tsx — displays client image (with `next/image` or `<img>` with lazy loading), name, and wraps in `<a>` linking to client URL with `target="_blank"` and `rel="noopener noreferrer"`. Handle image load error with fallback placeholder. Handle missing/empty URL gracefully (render without link).
- [x] T007 [P] [US1] Create ClientCard styles in src/modules/landing/components/Clients/ClientCard.module.css — use design system CSS variables (--color-*, --spacing-*, --radius-*, --transition-*), hover effect, image container with aspect ratio, responsive sizing
- [x] T008 [P] [US1] Create Clients section component in src/modules/landing/components/Clients/Clients.tsx — fetches clients via `trpc.clients.list.useQuery()`, returns `null` when list is empty (hides section), renders section heading "Clientes" and grid of ClientCard components. Include loading state handling.
- [x] T009 [P] [US1] Create Clients section styles in src/modules/landing/components/Clients/Clients.module.css — section layout matching existing landing sections (Hero, Services pattern), responsive grid (1 col mobile, 2-3 cols tablet, 4-5 cols desktop), use design system variables, section title styling with --font-display
- [x] T010 [US1] Create barrel export in src/modules/landing/components/Clients/index.ts — export Clients component
- [x] T011 [US1] Add Clients export to landing module barrel in src/modules/landing/index.ts — add `export { Clients } from './components/Clients'`
- [x] T012 [US1] Add Clients component to landing page in src/app/page.tsx — import Clients from `@/modules/landing`, place `<Clients />` between `<Services />` and `<ContactSection />`

**Checkpoint**: User Story 1 fully functional. Landing page shows Clientes section with data from Convex. Section hidden when no clients exist. Each client displays image, name, and clickable URL.

---

## Phase 4: User Story 2 - Manage Clients in Database (Priority: P2)

**Goal**: Administrators can create, update, and delete client records (including image uploads) via Convex mutations. Changes reflect on the landing page on next load.

**Independent Test**: Create a client via Convex dashboard (upload image, set name/url/displayOrder) → verify it appears on landing page. Update fields → verify changes. Delete client → verify it disappears.

### Implementation for User Story 2

- [x] T013 [P] [US2] Add Convex `clients.create` mutation in convex/clients.ts — accepts name, image (v.id("_storage")), url, displayOrder; inserts into clients table; returns new client ID
- [x] T014 [P] [US2] Add Convex `clients.update` mutation in convex/clients.ts — accepts id (v.id("clients")) and optional fields (name, image, url, displayOrder); patches only provided fields; if image changes, delete old image from storage via `ctx.storage.delete()`
- [x] T015 [P] [US2] Add Convex `clients.remove` mutation in convex/clients.ts — accepts id (v.id("clients")); reads client to get image storage ID; deletes image from storage via `ctx.storage.delete()`; deletes client record

**Checkpoint**: All CRUD operations work. Creating a client with image and data makes it appear on the landing page. Updating fields reflects changes. Deleting removes both record and stored image.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility, responsive verification, and edge case handling

- [x] T016 [P] Verify WCAG 2.1 AA compliance in Clients section — alt text on all images (use client name), sufficient contrast ratios for text over dark background, keyboard navigation works for all client links, focus indicators visible
- [x] T017 [P] Verify responsive layout at 320px, 768px, and 1920px viewports — grid reflows correctly, images scale, no horizontal overflow, text remains readable
- [x] T018 Run quickstart.md validation — follow all steps in specs/002-clientes-section/quickstart.md end-to-end to verify the complete feature works

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on T001, T002 (schema + list query must exist for tRPC router)
- **User Story 1 (Phase 3)**: Depends on Phase 2 completion (tRPC endpoint must be available)
- **User Story 2 (Phase 4)**: Depends on Phase 1 only (Convex schema); can run in parallel with US1
- **Polish (Phase 5)**: Depends on Phase 3 and Phase 4 completion

### User Story Dependencies

- **User Story 1 (P1)**: Depends on Foundational (Phase 2). No dependency on US2 — can use manually seeded data.
- **User Story 2 (P2)**: Depends on Setup (Phase 1) only. Can run in parallel with US1 since it only touches convex/clients.ts (mutations section, not the list query).

### Within Each User Story

- US1: T006+T007+T008+T009 in parallel → T010 → T011 → T012
- US2: T013+T014+T015 all in parallel (separate mutation functions)

### Parallel Opportunities

```bash
# Phase 1: T002 and T003 in parallel (after T001)
Task: "Create clients.list query in convex/clients.ts"
Task: "Create clients.generateUploadUrl mutation in convex/clients.ts"

# Phase 3 (US1): All component files in parallel
Task: "Create ClientCard component in src/modules/landing/components/Clients/ClientCard.tsx"
Task: "Create ClientCard styles in src/modules/landing/components/Clients/ClientCard.module.css"
Task: "Create Clients section in src/modules/landing/components/Clients/Clients.tsx"
Task: "Create Clients styles in src/modules/landing/components/Clients/Clients.module.css"

# Phase 4 (US2): All mutations in parallel
Task: "Add clients.create mutation in convex/clients.ts"
Task: "Add clients.update mutation in convex/clients.ts"
Task: "Add clients.remove mutation in convex/clients.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (schema + list query)
2. Complete Phase 2: Foundational (tRPC router)
3. Complete Phase 3: User Story 1 (UI components + page integration)
4. **STOP and VALIDATE**: Manually seed a client in Convex dashboard, verify it displays
5. Deploy/demo if ready — section shows clients from database

### Incremental Delivery

1. Setup + Foundational → Backend ready
2. Add User Story 1 → Landing page shows clients → Deploy (MVP!)
3. Add User Story 2 → Full CRUD mutations available → Deploy
4. Polish → Accessibility, responsive, edge cases verified

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story
- No test tasks — project has no test framework configured
- T002 and T003 both write to convex/clients.ts but in practice can be implemented together since it's one new file
- T013, T014, T015 extend convex/clients.ts with additional exports — mark [P] since they're independent function definitions
- Commit after each phase or logical group
