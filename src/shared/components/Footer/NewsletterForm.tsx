'use client'

import { useState } from 'react'
import { trpc } from '@/trpc/client'
import styles from './Footer.module.css'

export function NewsletterForm() {
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

  if (submitted) {
    return (
      <p className={styles.newsletterSuccess}>
        ¡Suscripción confirmada!
      </p>
    )
  }

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        name="email"
        placeholder="tu@empresa.com"
        className={styles.newsletterInput}
        aria-label="Email para newsletter"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (error) setError(null)
        }}
        required
      />
      <button
        className={styles.newsletterButton}
        type="submit"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Enviando...' : 'Suscribirme'}
      </button>
      {error && (
        <p className={styles.newsletterError} role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
