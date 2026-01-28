/**
 * Contact API Contract
 *
 * This file defines the tRPC router for contact form operations.
 * It serves as the contract between frontend and backend.
 *
 * @module contracts/contact
 */

import { z } from 'zod'

// ============================================================================
// Input Schemas
// ============================================================================

/**
 * Schema for contact form submission
 * Validates user input before processing
 */
export const contactFormInputSchema = z.object({
  /** Full name of the person contacting (2-100 chars) */
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),

  /** Valid email address for response */
  email: z
    .string()
    .email('Por favor ingresa un email válido'),

  /** Project description or message (10-2000 chars) */
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje es demasiado largo'),
})

export type ContactFormInput = z.infer<typeof contactFormInputSchema>

// ============================================================================
// Output Schemas
// ============================================================================

/**
 * Schema for successful contact submission response
 */
export const contactSubmitOutputSchema = z.object({
  /** Whether the submission was successful */
  success: z.boolean(),

  /** Human-readable message for the user */
  message: z.string(),

  /** ID of the created contact request (for reference) */
  contactId: z.string().optional(),
})

export type ContactSubmitOutput = z.infer<typeof contactSubmitOutputSchema>

// ============================================================================
// tRPC Router Definition (Contract)
// ============================================================================

/**
 * Contact Router Contract
 *
 * Procedures:
 * - submit: Create a new contact request
 *
 * @example
 * ```typescript
 * // Client usage
 * const mutation = trpc.contact.submit.useMutation()
 *
 * const result = await mutation.mutateAsync({
 *   name: 'Juan Pérez',
 *   email: 'juan@example.com',
 *   message: 'Me interesa conocer más sobre sus servicios de IA...'
 * })
 *
 * if (result.success) {
 *   // Show success message
 * }
 * ```
 */

// Implementation will be in src/server/api/routers/contact.ts
// This file serves as the contract/documentation

export const contactRouterContract = {
  /**
   * Submit a contact form
   *
   * @input ContactFormInput - Validated form data
   * @output ContactSubmitOutput - Success status and message
   *
   * @throws TRPCError
   *   - BAD_REQUEST: Invalid input (Zod validation failed)
   *   - INTERNAL_SERVER_ERROR: Database or email error
   *
   * @sideEffects
   *   1. Creates record in Convex `contactRequests` table
   *   2. Sends notification email to owner
   */
  submit: {
    input: contactFormInputSchema,
    output: contactSubmitOutputSchema,
    method: 'mutation' as const,
  },
} as const

// ============================================================================
// Error Codes
// ============================================================================

export const ContactErrorCodes = {
  /** Form validation failed */
  VALIDATION_ERROR: 'CONTACT_VALIDATION_ERROR',

  /** Database insert failed */
  DATABASE_ERROR: 'CONTACT_DATABASE_ERROR',

  /** Email sending failed (non-blocking) */
  EMAIL_ERROR: 'CONTACT_EMAIL_ERROR',

  /** Rate limit exceeded */
  RATE_LIMIT_ERROR: 'CONTACT_RATE_LIMIT_ERROR',
} as const

// ============================================================================
// Example Implementation Reference
// ============================================================================

/**
 * Reference implementation (actual code will be in src/server/api/routers/contact.ts)
 *
 * ```typescript
 * import { createTRPCRouter, publicProcedure } from '../trpc'
 * import { contactFormInputSchema, contactSubmitOutputSchema } from '@/specs/001-landing-page/contracts/contact'
 * import { api } from '@/convex/_generated/api'
 * import { sendContactEmail } from '@/server/email/sendContactEmail'
 *
 * export const contactRouter = createTRPCRouter({
 *   submit: publicProcedure
 *     .input(contactFormInputSchema)
 *     .output(contactSubmitOutputSchema)
 *     .mutation(async ({ input, ctx }) => {
 *       // 1. Store in Convex
 *       const contactId = await ctx.convex.mutation(api.contacts.create, {
 *         name: input.name,
 *         email: input.email,
 *         message: input.message,
 *       })
 *
 *       // 2. Send email notification (non-blocking)
 *       sendContactEmail(input).catch(console.error)
 *
 *       return {
 *         success: true,
 *         message: '¡Gracias por contactarnos! Te responderemos pronto.',
 *         contactId: contactId.toString(),
 *       }
 *     }),
 * })
 * ```
 */
