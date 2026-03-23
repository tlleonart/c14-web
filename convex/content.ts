import { query } from './_generated/server'
import { v } from 'convex/values'

export const listPublished = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db
      .query('content')
      .withIndex('by_type_status', (q) =>
        q.eq('type', 'blog_post').eq('status', 'published')
      )
      .collect()

    return posts.sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0))
  },
})

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('content')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first()
  },
})
