import { router } from '../trpc'
import { contactRouter } from './contact'
import { clientsRouter } from './clients'
import { newsletterRouter } from './newsletter'
import { blogRouter } from './blog'

export const appRouter = router({
  contact: contactRouter,
  clients: clientsRouter,
  newsletter: newsletterRouter,
  blog: blogRouter,
})

export type AppRouter = typeof appRouter
