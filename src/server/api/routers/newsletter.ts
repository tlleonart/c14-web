import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { convex } from '@/server/convex/client'
import { api } from '../../../../convex/_generated/api'

const newsletterSchema = z.object({
  email: z.string().email('Email inválido'),
})

export const newsletterRouter = router({
  subscribe: publicProcedure.input(newsletterSchema).mutation(async ({ input }) => {
    // Persist to Convex
    if (convex) {
      try {
        await convex.mutation(api.newsletter.subscribe, {
          email: input.email,
        })
      } catch (error) {
        console.error('Failed to save newsletter subscription to Convex:', error)
      }
    }

    // Also add to Resend audience if configured
    const resendApiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (resendApiKey && audienceId) {
      try {
        const response = await fetch('https://api.resend.com/audiences/' + audienceId + '/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            email: input.email,
            unsubscribed: false,
          }),
        })

        if (!response.ok) {
          const error = await response.json()
          console.error('Resend contacts API error:', error)
        }
      } catch (error) {
        console.error('Newsletter subscription error:', error)
      }
    }

    return { success: true, message: 'Suscripción registrada.' }
  }),
})
