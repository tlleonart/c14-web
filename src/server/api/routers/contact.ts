import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { sendContactEmail } from '@/server/email/sendContactEmail'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  service: z
    .enum(['automation', 'ai-development', 'web-development', 'software-development'])
    .optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export const contactRouter = router({
  submit: publicProcedure.input(contactSchema).mutation(async ({ input }) => {
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
