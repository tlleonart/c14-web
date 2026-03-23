import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { convex } from '@/server/convex/client'
import { api } from '../../../../convex/_generated/api'

export const blogRouter = router({
  listPublished: publicProcedure.query(async () => {
    if (!convex) {
      console.warn('Blog: Convex client not configured')
      return []
    }
    try {
      return await convex.query(api.content.listPublished)
    } catch (error) {
      console.error('Blog listPublished failed:', error)
      // Fallback: try the generic list query with status filter
      try {
        return await convex.query(api.content.list, {
          status: 'published',
          type: 'blog_post',
        })
      } catch {
        console.error('Blog list fallback also failed — Convex functions may not be deployed')
        return []
      }
    }
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      if (!convex) return null
      try {
        return await convex.query(api.content.getBySlug, { slug: input.slug })
      } catch (error) {
        console.error('Blog getBySlug failed:', error)
        return null
      }
    }),
})
