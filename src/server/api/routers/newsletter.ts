import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

const newsletterSchema = z.object({
  email: z.string().email('Email inválido'),
})

export const newsletterRouter = router({
  subscribe: publicProcedure.input(newsletterSchema).mutation(async ({ input }) => {
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.warn('Newsletter: RESEND_API_KEY not configured')
      return { success: true, message: 'Suscripción registrada.' }
    }

    try {
      // Add to Resend audience (contacts API)
      const response = await fetch('https://api.resend.com/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          email: input.email,
          unsubscribed: false,
          audience_id: process.env.RESEND_AUDIENCE_ID || '',
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        console.error('Resend contacts API error:', error)
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
    }

    return { success: true, message: 'Suscripción registrada.' }
  }),
})
