# Quickstart: Clientes Section

**Feature**: 002-clientes-section
**Date**: 2026-02-21

## Prerequisites

- Node.js installed
- Convex CLI configured (`npx convex dev` working)
- Project dependencies installed (`npm install`)

## Setup

1. Start the development servers:

```bash
npm run dev          # Next.js dev server
npx convex dev      # Convex dev server (separate terminal)
```

2. The Convex schema will auto-deploy the new `clients` table when `npx convex dev` detects the schema change.

## Adding a Test Client

### Via Convex Dashboard

1. Open the Convex dashboard for your project
2. Navigate to the `clients` table
3. First, upload an image:
   - Use the Storage tab to upload a client logo image
   - Copy the resulting storage ID
4. Create a new client record:
   - `name`: "Acme Corp"
   - `image`: (paste the storage ID)
   - `url`: "https://example.com"
   - `displayOrder`: 1

### Via Convex CLI (programmatic)

```bash
# Generate upload URL
npx convex run clients:generateUploadUrl

# Upload image to the returned URL (use curl or similar)
curl -X POST "<upload-url>" \
  -H "Content-Type: image/png" \
  --data-binary @logo.png

# Create client with the returned storageId
npx convex run clients:create \
  '{"name": "Acme Corp", "image": "<storageId>", "url": "https://example.com", "displayOrder": 1}'
```

## Verification

1. Open `http://localhost:3000` in a browser
2. Scroll down past the Services section
3. The "Clientes" section should appear with the added client
4. Verify:
   - Client logo image displays
   - Client name is visible
   - Clicking the client opens the URL in a new tab
5. Remove all clients from the database — the section should disappear entirely

## Responsive Check

Test at these viewport widths:
- **Mobile**: 320px
- **Tablet**: 768px
- **Desktop**: 1920px

## Edge Case Checks

- Delete the image from Convex Storage (but keep the client record) — a fallback placeholder should display
- Add 10+ clients — layout should handle multiple rows gracefully
