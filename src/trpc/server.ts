import 'server-only'
import { createCallerFactory } from '@/server/api/trpc'
import { appRouter } from '@/server/api/routers/_app'
import { createContext } from '@/server/api/context'
import { cache } from 'react'

const createCaller = createCallerFactory(appRouter)

export const api = cache(async () => {
  const context = await createContext()
  return createCaller(context)
})
