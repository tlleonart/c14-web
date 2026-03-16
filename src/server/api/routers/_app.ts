import { router } from '../trpc'
import { contactRouter } from './contact'
import { clientsRouter } from './clients'
import { newsletterRouter } from './newsletter'

export const appRouter = router({
  contact: contactRouter,
  clients: clientsRouter,
  newsletter: newsletterRouter,
})

export type AppRouter = typeof appRouter
