import { mutation } from './_generated/server'
import { v } from 'convex/values'

export const subscribe = mutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if already subscribed
    const existing = await ctx.db
      .query('newsletterSubscriptions')
      .withIndex('by_email', (q) => q.eq('email', args.email))
      .first()

    if (existing) {
      return existing._id
    }

    const id = await ctx.db.insert('newsletterSubscriptions', {
      email: args.email,
      subscribedAt: Date.now(),
    })
    return id
  },
})
