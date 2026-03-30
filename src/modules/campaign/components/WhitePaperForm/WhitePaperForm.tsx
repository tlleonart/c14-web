'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { trpc } from '@/trpc/client'
import styles from './WhitePaperForm.module.css'

function pushGtmEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...params })
  }
}

export function WhitePaperForm() {
  const router = useRouter()
  const [formStarted, setFormStarted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [fields, setFields] = useState({ fullName: '', email: '', company: '', role: '' })
  const [honeypot, setHoneypot] = useState('')

  const mutation = trpc.lead.captureWhitePaper.useMutation({
    onSuccess: () => {
      pushGtmEvent('form_submit', { form_id: 'lp-002-white-paper' })
      pushGtmEvent('white_paper_download', { form_id: 'lp-002-white-paper', source: 'LP-002' })
      router.push('/white-paper/gracias')
    },
    onError: (err) => {
      console.error('captureWhitePaper error:', err)
      setErrors({ submit: 'Hubo un error al enviar. Intentá de nuevo.' })
    },
  })

  function handleFocus() {
    if (!formStarted) {
      setFormStarted(true)
      pushGtmEvent('form_start', { form_id: 'lp-002-white-paper' })
    }
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!fields.fullName.trim() || fields.fullName.trim().length < 2)
      next.fullName = 'El nombre es obligatorio'
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = 'Ingresá un email válido'
    if (!fields.company.trim()) next.company = 'La empresa es obligatoria'
    if (!fields.role.trim()) next.role = 'El cargo es obligatorio'
    return next
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (honeypot) {
      router.push('/white-paper/gracias')
      return
    }
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    mutation.mutate({
      fullName: fields.fullName.trim(),
      email: fields.email.trim(),
      company: fields.company.trim(),
      role: fields.role.trim(),
    })
  }

  return (
    <div className={styles.formCard}>
      <h2 className={styles.cardTitle}>Descargá la guía gratis</h2>

      <div className={styles.trustRow}>
        <span className={styles.trustGreen}>✓ Descarga inmediata por email</span>
        <span className={styles.trustMuted}>Sin spam. Sin newsletters.</span>
        <span className={styles.trustMuted}>Solo emails corporativos.</span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="lp_id" value="LP-002" />
        {/* Honeypot field — hidden from humans, bots fill it */}
        <div className={styles.honeypot} aria-hidden="true">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
        <div className={styles.fields}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="full_name_002">
              Nombre completo
            </label>
            <input
              className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
              id="full_name_002"
              type="text"
              placeholder="Tu nombre completo"
              autoComplete="name"
              value={fields.fullName}
              onChange={(e) => setFields((f) => ({ ...f, fullName: e.target.value }))}
              onFocus={handleFocus}
            />
            {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email_002">
              Email corporativo
            </label>
            <input
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              id="email_002"
              type="email"
              placeholder="nombre@empresa.com"
              autoComplete="email"
              value={fields.email}
              onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
              onFocus={handleFocus}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="company_002">
              Empresa
            </label>
            <input
              className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
              id="company_002"
              type="text"
              placeholder="Nombre de tu empresa"
              autoComplete="organization"
              value={fields.company}
              onChange={(e) => setFields((f) => ({ ...f, company: e.target.value }))}
              onFocus={handleFocus}
            />
            {errors.company && <span className={styles.error}>{errors.company}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="role_002">
              Cargo
            </label>
            <input
              className={`${styles.input} ${errors.role ? styles.inputError : ''}`}
              id="role_002"
              type="text"
              placeholder="Tu cargo en la empresa"
              autoComplete="organization-title"
              value={fields.role}
              onChange={(e) => setFields((f) => ({ ...f, role: e.target.value }))}
              onFocus={handleFocus}
            />
            {errors.role && <span className={styles.error}>{errors.role}</span>}
          </div>
        </div>

        {errors.submit && <p className={styles.submitError}>{errors.submit}</p>}

        <button
          type="submit"
          className={styles.submit}
          disabled={mutation.isPending}
          data-cta="white-paper-form-submit"
        >
          {mutation.isPending ? 'Enviando...' : 'Quiero la guía'}
        </button>

        <p className={styles.microcopy}>Gratis. Sin compromiso. Solo la guía.</p>
      </form>
    </div>
  )
}
