import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { convex } from '@/server/convex/client'
import { api } from '../../../../convex/_generated/api'

export const blogRouter = router({
  listPublished: publicProcedure.query(async () => {
    if (!convex) return []
    return await convex.query(api.content.listPublished)
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      if (!convex) return null
      return await convex.query(api.content.getBySlug, { slug: input.slug })
    }),
})
