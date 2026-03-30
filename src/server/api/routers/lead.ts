import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { sendLeadNotificationEmail } from '@/server/email/sendLeadNotificationEmail'
import { sendWhitePaperEmail } from '@/server/email/sendWhitePaperEmail'
import { convex } from '@/server/convex/client'
import { api } from '../../../../convex/_generated/api'

const captureWhitePaperSchema = z.object({
  fullName: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Email inválido'),
  company: z.string().min(1, 'La empresa es obligatoria'),
  role: z.string().min(1, 'El cargo es obligatorio'),
})

export const leadRouter = router({
  captureWhitePaper: publicProcedure
    .input(captureWhitePaperSchema)
    .mutation(async ({ input }) => {
      if (convex) {
        try {
          await convex.mutation(api.contacts.create, {
            name: input.fullName,
            email: input.email,
            company: input.company,
            position: input.role,
            message: 'Descarga de white paper',
            source: 'lp-002',
          })
        } catch (error) {
          console.error('Failed to save white paper lead to Convex:', error)
        }
      }

      const [wpEmailSent, notifEmailSent] = await Promise.all([
        sendWhitePaperEmail({ fullName: input.fullName, email: input.email }),
        sendLeadNotificationEmail({
          fullName: input.fullName,
          email: input.email,
          company: input.company,
          role: input.role,
          source: 'LP-002',
        }),
      ])

      if (!wpEmailSent) {
        console.warn('White paper delivery email failed, but lead may still be saved')
      }
      if (!notifEmailSent) {
        console.warn('Lead notification email failed, but lead may still be saved')
      }

      return { success: true }
    }),
})

export type LeadRouter = typeof leadRouter
