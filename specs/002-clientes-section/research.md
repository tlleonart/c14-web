# Research: Clientes Section

**Feature**: 002-clientes-section
**Date**: 2026-02-21

## Decision 1: Image Storage Strategy

**Decision**: Use Convex file storage with `Id<"_storage">` references in the clients table.

**Rationale**: The project already uses Convex as its sole backend. Convex file storage provides:
- Built-in CDN-backed URLs via `ctx.storage.getUrl(storageId)`
- No external service dependency (S3, Cloudinary, etc.)
- Type-safe storage IDs in the schema
- Consistent with the user's explicit request: "use Convex for data storing, including images"

**Alternatives considered**:
- External image URLs (string field): Simpler schema but no upload control, broken link risk, no CDN guarantees.
- Cloudinary/S3: Over-engineered for this scope; adds external dependency.

## Decision 2: Data Access Pattern

**Decision**: Convex query consumed via tRPC public procedure, mirroring the existing contact form pattern.

**Rationale**: The project routes all Convex access through tRPC (see `src/server/api/routers/contact.ts` → `convex.mutation(api.contacts.create, ...)`). The clients query will follow the same pattern using `convex.query(api.clients.list)` inside a tRPC `publicProcedure.query()`. This keeps the frontend consuming a single typed API layer (tRPC) rather than mixing direct Convex client calls.

**Alternatives considered**:
- Direct Convex `useQuery` on the client: Would require the Convex React provider to be set up for queries (currently only used for mutations via tRPC). Introduces a second data-fetching pattern.
- Server Component with direct Convex call: Possible but breaks the established tRPC pattern.

## Decision 3: Image URL Resolution

**Decision**: Resolve Convex storage IDs to URLs at query time in the Convex query function.

**Rationale**: The Convex `list` query will call `ctx.storage.getUrl(client.image)` for each client and return the resolved URL. This keeps the frontend simple — it receives ready-to-use image URLs. The pattern is documented in Convex docs and avoids client-side URL resolution.

**Alternatives considered**:
- Client-side URL resolution: Would require additional Convex hooks/calls per image. More complexity, more round trips.
- Storing pre-resolved URLs: URLs from `storage.getUrl()` are stable for Convex storage, but storing them would duplicate data and risk staleness.

## Decision 4: Section Placement Implementation

**Decision**: Add `<Clients />` component between `<Services />` and `<ContactSection />` in `src/app/page.tsx`.

**Rationale**: Matches the spec clarification (between Services and Contact). The component self-hides when no clients exist (returns `null`), so no conditional rendering needed in `page.tsx`.

## Decision 5: Admin Management

**Decision**: No admin UI. Clients managed via Convex dashboard. Convex mutations (create, update, delete) exposed for future admin panel.

**Rationale**: Spec explicitly scopes out admin UI. Convex dashboard allows direct data manipulation. Mutations are still implemented in `convex/clients.ts` for programmatic access and future extensibility.

## Decision 6: Image Upload Workflow (Admin)

**Decision**: Image upload follows Convex's 3-step pattern: generateUploadUrl → POST file → save storageId. A `generateUploadUrl` mutation is exposed in `convex/clients.ts`.

**Rationale**: Standard Convex file storage pattern. Admin uploads images via Convex dashboard or future admin panel using the upload URL flow. The `generateUploadUrl` mutation makes this possible programmatically.
