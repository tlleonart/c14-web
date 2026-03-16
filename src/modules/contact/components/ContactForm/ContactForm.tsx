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
          Te respondemos en 48 horas hábiles con un análisis técnico preliminar.
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
          label="Nombre *"
          name="name"
          type="text"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          autoComplete="name"
        />
        <Input
          label="Email *"
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

      <Input
        label="Teléfono"
        name="phone"
        type="tel"
        placeholder="+54 11 ..."
        value={formData.phone || ''}
        onChange={handleChange}
        autoComplete="tel"
      />

      <Textarea
        label="¿Qué necesitás? *"
        name="message"
        placeholder="Contanos qué proceso querés automatizar, qué problema estás tratando de resolver, o cualquier contexto que nos ayude a entender tu situación."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        rows={5}
      />

      <Input
        label="¿Cómo nos encontraste?"
        name="source"
        type="text"
        placeholder="Referido, búsqueda, redes, etc."
        value={formData.source || ''}
        onChange={handleChange}
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
