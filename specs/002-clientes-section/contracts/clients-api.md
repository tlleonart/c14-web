# API Contract: Clients

**Feature**: 002-clientes-section
**Date**: 2026-02-21

## Convex Functions (`convex/clients.ts`)

### `clients.list` — Query

**Type**: `query` (public, no auth required)
**Args**: None
**Returns**: Array of client objects with resolved image URLs, ordered by `displayOrder` ascending.

```typescript
// Response shape
Array<{
  _id: Id<"clients">
  _creationTime: number
  name: string
  imageUrl: string | null
  url: string
  displayOrder: number
}>
```

**Behavior**:
- Queries `clients` table using `by_displayOrder` index
- Resolves each `image` storage ID to a URL via `ctx.storage.getUrl()`
- Returns empty array when no clients exist

---

### `clients.create` — Mutation

**Type**: `mutation`
**Args**:

| Arg | Type | Required |
|-----|------|----------|
| name | `v.string()` | Yes |
| image | `v.id("_storage")` | Yes |
| url | `v.string()` | Yes |
| displayOrder | `v.number()` | Yes |

**Returns**: `Id<"clients">` — the new client's ID

---

### `clients.update` — Mutation

**Type**: `mutation`
**Args**:

| Arg | Type | Required |
|-----|------|----------|
| id | `v.id("clients")` | Yes |
| name | `v.optional(v.string())` | No |
| image | `v.optional(v.id("_storage"))` | No |
| url | `v.optional(v.string())` | No |
| displayOrder | `v.optional(v.number())` | No |

**Returns**: `void`
**Behavior**: Patches only provided fields. If `image` changes, the old storage file is deleted.

---

### `clients.remove` — Mutation

**Type**: `mutation`
**Args**:

| Arg | Type | Required |
|-----|------|----------|
| id | `v.id("clients")` | Yes |

**Returns**: `void`
**Behavior**: Deletes the client record AND the associated image from Convex storage.

---

### `clients.generateUploadUrl` — Mutation

**Type**: `mutation`
**Args**: None
**Returns**: `string` — short-lived upload URL for POSTing an image file

---

## tRPC Router (`src/server/api/routers/clients.ts`)

### `clients.list` — Query

**Type**: `publicProcedure.query()`
**Input**: None
**Output**: Array of client objects (same shape as Convex `clients.list` response)

**Behavior**:
- Calls `convex.query(api.clients.list)` using the server-side Convex HTTP client
- Returns empty array if Convex client unavailable (graceful degradation)
- Exposed at `/api/trpc/clients.list`
