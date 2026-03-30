import { router } from '../trpc'
import { contactRouter } from './contact'
import { clientsRouter } from './clients'
import { newsletterRouter } from './newsletter'
import { blogRouter } from './blog'
import { leadRouter } from './lead'

export const appRouter = router({
  contact: contactRouter,
  clients: clientsRouter,
  newsletter: newsletterRouter,
  blog: blogRouter,
  lead: leadRouter,
})

export type AppRouter = typeof appRouter
