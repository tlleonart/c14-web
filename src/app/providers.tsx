'use client'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { TRPCProvider } from '@/trpc/client'

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL

// Create Convex client only if URL is configured
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null

export function Providers({ children }: { children: React.ReactNode }) {
  // If Convex is not configured, just render with tRPC only
  if (!convex) {
    return <TRPCProvider>{children}</TRPCProvider>
  }

  return (
    <ConvexProvider client={convex}>
      <TRPCProvider>{children}</TRPCProvider>
    </ConvexProvider>
  )
}
