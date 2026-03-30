'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { trpc } from '@/trpc/client'
import styles from './AuditoriaForm.module.css'

function pushGtmEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...params })
  }
}

export function AuditoriaForm() {
  const router = useRouter()
  const [formStarted, setFormStarted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [fields, setFields] = useState({ fullName: '', email: '', company: '' })

  const mutation = trpc.lead.captureAuditoria.useMutation({
    onSuccess: () => {
      pushGtmEvent('form_submit', { form_id: 'lp-003-auditoria' })
      pushGtmEvent('lead_capture', { form_id: 'lp-003-auditoria', source: 'LP-003' })
      router.push('/auditoria/gracias')
    },
    onError: (err) => {
      console.error('captureAuditoria error:', err)
      setErrors({ submit: 'Hubo un error al enviar. Intentá de nuevo.' })
    },
  })

  function handleFocus() {
    if (!formStarted) {
      setFormStarted(true)
      pushGtmEvent('form_start', { form_id: 'lp-003-auditoria' })
    }
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!fields.fullName.trim() || fields.fullName.trim().length < 2)
      next.fullName = 'El nombre es obligatorio'
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = 'Ingresá un email válido'
    if (!fields.company.trim()) next.company = 'La empresa es obligatoria'
    return next
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
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
    })
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Pedí tu auditoría</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="lp_id" value="LP-003" />
        <div className={styles.fields}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="full_name_003">
              Nombre completo
            </label>
            <input
              className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
              id="full_name_003"
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
            <label className={styles.label} htmlFor="email_003">
              Email corporativo
            </label>
            <input
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              id="email_003"
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
            <label className={styles.label} htmlFor="company_003">
              Empresa
            </label>
            <input
              className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
              id="company_003"
              type="text"
              placeholder="Nombre de tu empresa"
              autoComplete="organization"
              value={fields.company}
              onChange={(e) => setFields((f) => ({ ...f, company: e.target.value }))}
              onFocus={handleFocus}
            />
            {errors.company && <span className={styles.error}>{errors.company}</span>}
          </div>
        </div>

        {errors.submit && <p className={styles.submitError}>{errors.submit}</p>}

        <button
          type="submit"
          className={styles.submit}
          disabled={mutation.isPending}
          data-cta="auditoria-form-submit"
        >
          {mutation.isPending ? 'Enviando...' : 'Quiero mi auditoría gratuita'}
        </button>

        <p className={styles.microcopy}>Respondemos en menos de 48 horas. Sin compromiso.</p>
      </form>
    </div>
  )
}
