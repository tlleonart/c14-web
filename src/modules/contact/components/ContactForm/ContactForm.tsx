'use client'

import { Input } from '@/shared/components/Input'
import { Textarea } from '@/shared/components/Textarea'
import { SubmitButton } from '@/modules/contact/components/SubmitButton'
import { useContactForm } from './useContactForm'
import { services } from '@/modules/landing/data/services'
import styles from './ContactForm.module.css'

export function ContactForm() {
  const { formData, errors, isSubmitting, isSuccess, submitError, handleChange, handleSubmit } =
    useContactForm()

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
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          autoComplete="email"
        />
      </div>

      <div className={styles.row}>
        <Input
          label="Empresa"
          name="company"
          type="text"
          placeholder="Tu empresa (opcional)"
          value={formData.company || ''}
          onChange={handleChange}
          autoComplete="organization"
        />
        <Input
          label="Teléfono"
          name="phone"
          type="tel"
          placeholder="+54 11 1234 5678 (opcional)"
          value={formData.phone || ''}
          onChange={handleChange}
          autoComplete="tel"
        />
      </div>

      <div className={styles.selectContainer}>
        <label htmlFor="service" className={styles.label}>
          Servicio de interés
        </label>
        <select
          id="service"
          name="service"
          className={styles.select}
          value={formData.service || ''}
          onChange={handleChange}
        >
          <option value="">Seleccioná un servicio (opcional)</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <Textarea
        label="Mensaje *"
        name="message"
        placeholder="Contanos sobre tu proyecto o cómo podemos ayudarte..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        rows={5}
      />

      {submitError && (
        <div className={styles.error} role="alert">
          {submitError}
        </div>
      )}

      <div className={styles.actions}>
        <SubmitButton isSubmitting={isSubmitting} isSuccess={isSuccess} />
      </div>
    </form>
  )
}
