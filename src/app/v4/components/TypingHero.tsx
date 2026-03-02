'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/shared/components/Button'
import styles from './TypingHero.module.css'

const TYPED_TEXT = 'El futuro es inteligencia artificial'
const CHAR_COUNT = TYPED_TEXT.length

export function TypingHero() {
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setTypingDone(true)
      return
    }

    const timer = setTimeout(() => setTypingDone(true), 3200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.container}>
        <h1
          className={styles.typed}
          style={{ '--char-count': CHAR_COUNT } as React.CSSProperties}
        >
          {TYPED_TEXT}
        </h1>
        <div className={`${styles.reveal} ${typingDone ? styles.revealVisible : ''}`}>
          <p className={styles.subtitle}>
            Automatización, desarrollo de IA, web y software a medida.
          </p>
          <div className={styles.actions}>
            <a href="#contacto">
              <Button size="lg">Conversemos</Button>
            </a>
            <a href="#servicios">
              <Button variant="secondary" size="lg">Ver servicios</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
