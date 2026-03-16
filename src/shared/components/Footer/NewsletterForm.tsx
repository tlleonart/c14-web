'use client'

import { useState } from 'react'
import { trpc } from '@/trpc/client'
import styles from './Footer.module.css'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const mutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      setSubmitted(true)
      setEmail('')
    },
  })

  const handleSubmit = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
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
    <div className={styles.newsletterForm}>
      <input
        type="email"
        placeholder="tu@empresa.com"
        className={styles.newsletterInput}
        aria-label="Email para newsletter"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button
        className={styles.newsletterButton}
        type="button"
        onClick={handleSubmit}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Enviando...' : 'Suscribirme'}
      </button>
    </div>
  )
}
