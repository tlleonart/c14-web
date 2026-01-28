import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    service: v.optional(
      v.union(
        v.literal('automation'),
        v.literal('ai-development'),
        v.literal('web-development'),
        v.literal('software-development')
      )
    ),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert('contactRequests', {
      ...args,
      status: 'pending',
      createdAt: Date.now(),
    })
    return contactId
  },
})

export const list = query({
  args: {
    status: v.optional(
      v.union(v.literal('pending'), v.literal('contacted'), v.literal('completed'))
    ),
  },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query('contactRequests')
        .withIndex('by_status', (q) => q.eq('status', args.status!))
        .order('desc')
        .collect()
    }
    return await ctx.db.query('contactRequests').order('desc').collect()
  },
})

export const updateStatus = mutation({
  args: {
    id: v.id('contactRequests'),
    status: v.union(v.literal('pending'), v.literal('contacted'), v.literal('completed')),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status })
  },
})
