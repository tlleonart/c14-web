# Data Model: Clientes Section

**Feature**: 002-clientes-section
**Date**: 2026-02-21

## Entity: Client

### Schema (Convex)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | `v.string()` | Yes | Client company/organization name |
| image | `v.id("_storage")` | Yes | Reference to uploaded image in Convex file storage |
| url | `v.string()` | Yes | External URL to client's website |
| displayOrder | `v.number()` | Yes | Numeric sort key (ascending). Controls position in the section |

### Indexes

| Index Name | Fields | Purpose |
|------------|--------|---------|
| `by_displayOrder` | `["displayOrder"]` | Efficient ordered retrieval for landing page display |

### Convex Schema Addition

```typescript
clients: defineTable({
  name: v.string(),
  image: v.id("_storage"),
  url: v.string(),
  displayOrder: v.number(),
}).index('by_displayOrder', ['displayOrder']),
```

### Validation Rules

- `name`: Non-empty string
- `image`: Valid Convex storage ID (enforced by `v.id("_storage")`)
- `url`: Non-empty string (URL format validation is a presentation concern)
- `displayOrder`: Numeric value; lower values appear first

### Query Output Shape

The `list` query resolves storage IDs to URLs and returns:

```typescript
{
  _id: Id<"clients">
  name: string
  imageUrl: string | null  // Resolved from ctx.storage.getUrl(image)
  url: string
  displayOrder: number
}
```

`imageUrl` is `null` when the storage file has been deleted (edge case: fallback placeholder in UI).

### Lifecycle

- **Creation**: Admin inserts via Convex dashboard or `clients.create` mutation
- **Updates**: Admin patches fields via `clients.update` mutation
- **Deletion**: Admin removes via `clients.remove` mutation (also deletes stored image file)
- **No soft delete**: All clients are either present or removed. No draft/hidden state.

### Relationships

- No relationships to other tables
- Self-contained entity
