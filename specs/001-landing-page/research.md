# Research: Landing Page para Servicios de IA

**Date**: 2026-01-28
**Feature**: 001-landing-page

## Technology Decisions

### 1. Next.js 16 App Router

**Decision**: Use Next.js 16 with App Router and Server Components as default

**Rationale**:
- Server Components reduce client-side JavaScript bundle
- Built-in CSS Modules support (no additional config)
- Server Actions for form handling without API routes
- Automatic code splitting and streaming
- Best-in-class performance for landing pages

**Alternatives Considered**:
- Next.js Pages Router: Legacy, deprecated in Next.js 16
- Remix: Good alternative but less ecosystem support
- Astro: Better for static sites, but we need interactivity

**Key Patterns**:
```tsx
// Server Component (default) - no 'use client'
export default async function Page() {
  return <main>...</main>
}

// Client Component - only when needed
'use client'
export function ContactForm() {
  const [state, setState] = useState()
  return <form>...</form>
}
```

### 2. CSS Modules (No Tailwind)

**Decision**: Use CSS Modules with CSS custom properties for design tokens

**Rationale**:
- User explicitly requested no Tailwind
- CSS Modules provide scoped styles without runtime
- CSS custom properties enable design system consistency
- Zero JavaScript overhead for styling

**Alternatives Considered**:
- Tailwind CSS: User rejected
- styled-components: Runtime overhead, not needed
- CSS-in-JS (Emotion, etc.): Adds complexity

**Key Patterns**:
```css
/* Component.module.css */
.container {
  background: var(--color-background-dark);
  padding: var(--spacing-xl);
}
```

```tsx
import styles from './Component.module.css'
<div className={styles.container}>
```

### 3. tRPC for Type-Safe API

**Decision**: Use tRPC v11 with TanStack Query for contact form submission

**Rationale**:
- End-to-end type safety without code generation
- Integrates well with Zod validation
- TanStack Query provides caching, loading states
- Can use server-side calls in Server Components

**Alternatives Considered**:
- Server Actions only: Simpler but less type-safe
- REST API: More boilerplate, no type inference
- GraphQL: Overkill for simple contact form

**Key Patterns**:
```typescript
// Server: define procedure
export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(z.object({ name: z.string(), email: z.string().email(), message: z.string() }))
    .mutation(async ({ input }) => {
      // Save to Convex, send email
      return { success: true }
    }),
})

// Client: use with full type inference
const mutation = trpc.contact.submit.useMutation()
await mutation.mutateAsync({ name, email, message })
```

### 4. Convex for Database

**Decision**: Use Convex for contact form storage

**Rationale**:
- Serverless, no infrastructure to manage
- Real-time subscriptions built-in
- TypeScript-first with generated types
- Works well with Next.js App Router
- Free tier sufficient for landing page

**Alternatives Considered**:
- Supabase: Good but more setup required
- PlanetScale: Good for SQL, but Convex simpler for this use case
- Firebase: More complex, Google lock-in
- No database (email only): User requested storage

**Key Patterns**:
```typescript
// convex/schema.ts
export default defineSchema({
  contactRequests: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    status: v.optional(v.string()),
  })
})

// convex/contacts.ts
export const create = mutation({
  args: { name: v.string(), email: v.string(), message: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("contactRequests", { ...args, status: "new" })
  },
})
```

### 5. Modular Architecture

**Decision**: Feature-based folder structure with `modules/` and `shared/`

**Rationale**:
- Scales well as features grow
- Clear separation of concerns
- Each module is self-contained
- Shared components reusable across modules

**Alternatives Considered**:
- Flat structure: Gets messy as project grows
- Domain-driven: Overkill for landing page
- Atomic design: Good but modules clearer for this project

**Structure**:
```
src/
├── app/           # Next.js routes
├── modules/       # Feature modules
│   ├── landing/   # Landing page components
│   └── contact/   # Contact form components
├── shared/        # Reusable components
├── server/        # Backend logic (tRPC, email)
└── trpc/          # tRPC configuration
```

## UX Inspiration Analysis

### Design System Extracted

From the HTML files in `ux-inspiration/`:

**Colors**:
- Primary: `#d94e28` (Deep Orange)
- Accent: `#991b1b` (Burnt Red)
- Background: `#0a0a0a` (Charcoal Obsidian)
- Secondary BG: `#111111` (Obsidian)
- Text: `#f1f5f9` (Light) / `#94a3b8` (Muted)

**Typography**:
- Display: Playfair Display (serif) for headings
- Body: Inter (sans-serif) for content
- Uppercase tracking for labels/small text

**Effects**:
- Glass morphism cards with backdrop blur
- Gradient meshes for hero backgrounds
- Subtle hover animations (translateY, scale)
- Orange glow shadows on interactive elements

**Layout**:
- Max-width 7xl (80rem) for content
- Full-bleed sections with generous padding
- Card-based service presentation
- Sticky header with blur background

### Elements to Adapt (No Fake Data)

The inspiration files contain elements we must NOT copy:
- ❌ "150+ Proyectos IA" - fake metrics
- ❌ "40% Ahorro Costos" - fake metrics
- ❌ "99.9% Uptime" - fake metrics
- ❌ Client logos/testimonials
- ❌ Case studies

**What to use instead**:
- ✅ Honest messaging about being new
- ✅ Focus on services offered
- ✅ Clear call-to-action to contact
- ✅ Professional design without fake social proof

## Performance Considerations

### Server Components Strategy

| Component | Type | Reason |
|-----------|------|--------|
| Header | Server | Static, no interactivity |
| Hero | Server | Static content |
| Services | Server | Static service cards |
| ContactForm | Client | Form state, validation |
| Footer | Server | Static content |

### Bundle Optimization

1. **Fonts**: Use `next/font` for Playfair Display and Inter
2. **Icons**: Use Material Symbols as external stylesheet (not bundled)
3. **Images**: Use `next/image` for any images
4. **Code splitting**: Each module lazy-loaded if needed

### Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | >90 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | <2.5s |
| FID | <100ms |
| CLS | <0.1 |

## Email Integration

**Decision**: Use Resend for transactional email

**Rationale**:
- Simple API, great DX
- Free tier (100 emails/day) sufficient for landing page
- Works well with Next.js Server Actions
- No complex SMTP configuration

**Alternative**: Nodemailer + SMTP - More setup, but no vendor lock-in

**Implementation**:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: ContactData) {
  await resend.emails.send({
    from: 'noreply@carbono14.com',
    to: process.env.CONTACT_EMAIL,
    subject: `Nuevo contacto: ${data.name}`,
    html: `<p>Nombre: ${data.name}</p>...`
  })
}
```
