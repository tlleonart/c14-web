import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { sendContactEmail } from '@/server/email/sendContactEmail'
import { convex } from '@/server/convex/client'
import { api } from '../../../../convex/_generated/api'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().optional(),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  position: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  source: z.string().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export const contactRouter = router({
  submit: publicProcedure.input(contactSchema).mutation(async ({ input }) => {
    // Save contact to Convex database
    if (convex) {
      try {
        await convex.mutation(api.contacts.create, {
          name: input.name,
          lastName: input.lastName,
          email: input.email,
          company: input.company,
          position: input.position,
          phone: input.phone,
          message: input.message,
          source: input.source,
        })
      } catch (error) {
        console.error('Failed to save contact to Convex:', error)
      }
    }

    // Send email notification
    const emailSent = await sendContactEmail(input)

    if (!emailSent) {
      console.warn('Email notification failed, but contact still saved')
    }

    return {
      success: true,
      message: 'Mensaje recibido. Nos pondremos en contacto pronto.',
    }
  }),
})

export type ContactRouter = typeof contactRouter
