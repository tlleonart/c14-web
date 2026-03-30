'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { trpc } from '@/trpc/client'
import styles from './IaOperativaForm.module.css'

const INDUSTRIES = [
  { value: 'finanzas', label: 'Finanzas' },
  { value: 'logistica', label: 'Logística' },
  { value: 'salud', label: 'Salud' },
  { value: 'seguros', label: 'Seguros' },
  { value: 'legal', label: 'Legal' },
  { value: 'manufactura', label: 'Manufactura' },
  { value: 'otra', label: 'Otra' },
]

function pushGtmEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...params })
  }
}

export function IaOperativaForm() {
  const router = useRouter()
  const [formStarted, setFormStarted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [fields, setFields] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    industry: '',
    processDescription: '',
  })

  const mutation = trpc.lead.captureIaOperativa.useMutation({
    onSuccess: () => {
      pushGtmEvent('form_submit', { form_id: 'lp-001-ia-operativa' })
      pushGtmEvent('lead_capture', { form_id: 'lp-001-ia-operativa', source: 'LP-001' })
      router.push('/ia-operativa/gracias')
    },
    onError: (err) => {
      console.error('captureIaOperativa error:', err)
      setErrors({ submit: 'Hubo un error al enviar. Intentá de nuevo.' })
    },
  })

  function handleFocus() {
    if (!formStarted) {
      setFormStarted(true)
      pushGtmEvent('form_start', { form_id: 'lp-001-ia-operativa' })
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
      role: fields.role.trim() || undefined,
      industry: fields.industry || undefined,
      processDescription: fields.processDescription.trim() || undefined,
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="lp_id" value="LP-001" />

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="full_name_001">
          Nombre completo
        </label>
        <input
          className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
          id="full_name_001"
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
        <label className={styles.label} htmlFor="email_001">
          Email corporativo
        </label>
        <input
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          id="email_001"
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
        <label className={styles.label} htmlFor="company_001">
          Empresa
        </label>
        <input
          className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
          id="company_001"
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
        <label className={styles.label} htmlFor="role_001">
          Rol / Cargo
        </label>
        <input
          className={styles.input}
          id="role_001"
          type="text"
          placeholder="CTO, COO, CEO, Director de Operaciones..."
          autoComplete="organization-title"
          value={fields.role}
          onChange={(e) => setFields((f) => ({ ...f, role: e.target.value }))}
          onFocus={handleFocus}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="industry_001">
          Industria
        </label>
        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            id="industry_001"
            value={fields.industry}
            onChange={(e) => setFields((f) => ({ ...f, industry: e.target.value }))}
            onFocus={handleFocus}
          >
            <option value="" disabled>
              Seleccioná tu industria
            </option>
            {INDUSTRIES.map((ind) => (
              <option key={ind.value} value={ind.value}>
                {ind.label}
              </option>
            ))}
          </select>
          <span className={styles.selectArrow} aria-hidden="true">
            ▾
          </span>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="process_description_001">
          Descripción del proceso{' '}
          <span className={styles.optional}>(opcional)</span>
        </label>
        <textarea
          className={styles.textarea}
          id="process_description_001"
          rows={4}
          maxLength={500}
          placeholder="Describí brevemente el proceso que querés automatizar (opcional — nos ayuda a preparar mejor la respuesta)."
          value={fields.processDescription}
          onChange={(e) => setFields((f) => ({ ...f, processDescription: e.target.value }))}
          onFocus={handleFocus}
        />
      </div>

      {errors.submit && <p className={styles.submitError}>{errors.submit}</p>}

      <button
        type="submit"
        className={styles.submit}
        disabled={mutation.isPending}
        data-cta="ia-operativa-form-submit"
      >
        {mutation.isPending ? 'Enviando...' : 'Validá tu proceso — es gratis'}
      </button>

      <p className={styles.privacy}>
        Solo usamos tu email para responderte. Sin newsletters automáticos, sin spam.
      </p>
    </form>
  )
}
