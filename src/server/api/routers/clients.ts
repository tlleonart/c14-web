import { publicProcedure, router } from '../trpc'
import { convex } from '@/server/convex/client'
import { api } from '../../../../convex/_generated/api'

export const clientsRouter = router({
  list: publicProcedure.query(async () => {
    if (!convex) {
      return []
    }

    try {
      return await convex.query(api.clients.list)
    } catch (error) {
      console.error('Failed to fetch clients from Convex:', error)
      return []
    }
  }),
})

export type ClientsRouter = typeof clientsRouter
