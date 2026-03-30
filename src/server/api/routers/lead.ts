import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { sendLeadNotificationEmail } from '@/server/email/sendLeadNotificationEmail'
import { sendWhitePaperEmail } from '@/server/email/sendWhitePaperEmail'
import { convex } from '@/server/convex/client'
import { api } from '../../../../convex/_generated/api'

const captureAuditoriaSchema = z.object({
  fullName: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Email inválido'),
  company: z.string().min(1, 'La empresa es obligatoria'),
  website: z.string().optional(),
})

const captureIaOperativaSchema = z.object({
  fullName: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Email inválido'),
  company: z.string().min(1, 'La empresa es obligatoria'),
  role: z.string().optional(),
  industry: z.string().optional(),
  processDescription: z.string().max(500).optional(),
  website: z.string().optional(),
})

const captureWhitePaperSchema = z.object({
  fullName: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Email inválido'),
  company: z.string().min(1, 'La empresa es obligatoria'),
  role: z.string().min(1, 'El cargo es obligatorio'),
  website: z.string().optional(),
})

export const leadRouter = router({
  captureAuditoria: publicProcedure
    .input(captureAuditoriaSchema)
    .mutation(async ({ input }) => {
      if (input.website) return { success: true }

      if (convex) {
        try {
          await convex.mutation(api.leads.create, {
            name: input.fullName,
            email: input.email,
            company: input.company,
            source: 'lp-003',
          })
        } catch (error) {
          console.error('Failed to save auditoria lead to Convex:', error)
        }
      }

      const emailSent = await sendLeadNotificationEmail({
        fullName: input.fullName,
        email: input.email,
        company: input.company,
        source: 'LP-003',
      })

      if (!emailSent) {
        console.warn('Lead notification email failed, but lead may still be saved')
      }

      return { success: true }
    }),

  captureIaOperativa: publicProcedure
    .input(captureIaOperativaSchema)
    .mutation(async ({ input }) => {
      if (input.website) return { success: true }

      if (convex) {
        try {
          await convex.mutation(api.leads.create, {
            name: input.fullName,
            email: input.email,
            company: input.company,
            source: 'lp-001',
            notes: input.processDescription,
          })
        } catch (error) {
          console.error('Failed to save ia-operativa lead to Convex:', error)
        }
      }

      const emailSent = await sendLeadNotificationEmail({
        fullName: input.fullName,
        email: input.email,
        company: input.company,
        role: input.role,
        industry: input.industry,
        processDescription: input.processDescription,
        source: 'LP-001',
      })

      if (!emailSent) {
        console.warn('Lead notification email failed, but lead may still be saved')
      }

      return { success: true }
    }),

  captureWhitePaper: publicProcedure
    .input(captureWhitePaperSchema)
    .mutation(async ({ input }) => {
      if (input.website) return { success: true }

      if (convex) {
        try {
          await convex.mutation(api.leads.create, {
            name: input.fullName,
            email: input.email,
            company: input.company,
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
