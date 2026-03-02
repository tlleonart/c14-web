import { router } from '../trpc'
import { contactRouter } from './contact'
import { clientsRouter } from './clients'

export const appRouter = router({
  contact: contactRouter,
  clients: clientsRouter,
})

export type AppRouter = typeof appRouter
