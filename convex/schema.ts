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

  clients: defineTable({
    name: v.string(),
    image: v.id('_storage'),
    url: v.string(),
    displayOrder: v.number(),
  }).index('by_displayOrder', ['displayOrder']),
})
