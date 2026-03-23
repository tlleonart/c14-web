'use client'

import { useState } from 'react'
import { trpc } from '@/trpc/client'
import styles from './InlineNewsletter.module.css'

export function InlineNewsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const mutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      setSubmitted(true)
      setEmail('')
      setError(null)
    },
    onError: () => {
      setError('No pudimos registrar tu email. Intentá de nuevo.')
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Ingresá un email válido.')
      return
    }
    mutation.mutate({ email })
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.text}>
            <h3 className={styles.heading}>Insights sobre IA operativa</h3>
            <p className={styles.description}>
              Artículos técnicos, casos de estudio y guías prácticas. Sin spam.
            </p>
          </div>
          {submitted ? (
            <p className={styles.success}>¡Suscripción confirmada!</p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                name="email"
                placeholder="tu@empresa.com"
                className={styles.input}
                aria-label="Email para newsletter"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError(null)
                }}
                required
              />
              <button
                type="submit"
                className={styles.button}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? 'Enviando...' : 'Suscribirme'}
              </button>
              {error && (
                <p className={styles.error} role="alert">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
