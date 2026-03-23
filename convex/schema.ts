import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  contactRequests: defineTable({
    name: v.string(),
    lastName: v.optional(v.string()),
    email: v.string(),
    company: v.optional(v.string()),
    position: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    source: v.optional(v.string()),
    service: v.optional(
      v.union(
        v.literal('automation'),
        v.literal('ai-development'),
        v.literal('web-development'),
        v.literal('software-development')
      )
    ),
    status: v.union(v.literal('pending'), v.literal('contacted'), v.literal('completed')),
    createdAt: v.number(),
  }).index('by_status', ['status']),

  newsletterSubscriptions: defineTable({
    email: v.string(),
    subscribedAt: v.number(),
  }).index('by_email', ['email']),

  clients: defineTable({
    name: v.string(),
    image: v.id('_storage'),
    url: v.string(),
    displayOrder: v.number(),
  }).index('by_displayOrder', ['displayOrder']),

  content: defineTable({
    title: v.string(),
    slug: v.string(),
    type: v.union(
      v.literal('blog_post'),
      v.literal('linkedin_post'),
      v.literal('email'),
      v.literal('white_paper'),
      v.literal('case_study'),
    ),
    status: v.union(
      v.literal('idea'),
      v.literal('draft'),
      v.literal('in_review'),
      v.literal('approved'),
      v.literal('scheduled'),
      v.literal('published'),
      v.literal('archived'),
    ),
    body: v.optional(v.string()),
    summary: v.optional(v.string()),
    author: v.string(),
    approvedBy: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    category: v.optional(v.string()),
    publishedAt: v.optional(v.number()),
    scheduledAt: v.optional(v.number()),
    version: v.number(),
  })
    .index('by_status', ['status'])
    .index('by_type', ['type'])
    .index('by_type_status', ['type', 'status'])
    .index('by_slug', ['slug']),
})
