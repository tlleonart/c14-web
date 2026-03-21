'use client'

import { Input } from '@/shared/components/Input'
import { Textarea } from '@/shared/components/Textarea'
import { SubmitButton } from '@/modules/contact/components/SubmitButton'
import { useContactForm } from './useContactForm'
import styles from './ContactForm.module.css'

interface ContactFormProps {
  defaultSource?: string
}

export function ContactForm({ defaultSource }: ContactFormProps = {}) {
  const {
    formData,
    honeypot,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit,
  } = useContactForm({ initialSource: defaultSource })

  if (isSuccess) {
    return (
      <div className={styles.confirmation}>
        <span className={styles.checkmark} aria-hidden="true">✓</span>
        <h2 className={styles.confirmationHeading}>Recibimos tu mensaje.</h2>
        <p className={styles.confirmationBody}>
          Te respondemos en 48 horas hábiles con una validación inicial.
          Si necesitás algo urgente, escribinos a{' '}
          <a href="mailto:info@carbono-14.net" className={styles.confirmationLink}>
            info@carbono-14.net
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <Input
          label="Email corporativo *"
          name="email"
          type="email"
          placeholder="tu@empresa.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          autoComplete="email"
        />
        <Input
          label="Empresa *"
          name="company"
          type="text"
          placeholder="Nombre de tu empresa"
          value={formData.company || ''}
          onChange={handleChange}
          error={errors.company}
          required
          autoComplete="organization"
        />
      </div>

      <Textarea
        label="¿Qué proceso querés validar? *"
        name="message"
        placeholder="Describí en una línea el proceso que querés automatizar."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        rows={3}
      />

      {/* Honeypot field — hidden from humans, bots fill it */}
      <div className={styles.honeypot} aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={handleChange}
        />
      </div>

      {submitError && (
        <div className={styles.error} role="alert">
          {submitError}
        </div>
      )}

      <div className={styles.actions}>
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  )
}
