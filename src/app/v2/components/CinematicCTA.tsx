'use client'

import { Button } from '@/shared/components/Button'
import { useInView } from '@/shared/hooks/useInView'
import styles from './CinematicCTA.module.css'

export function CinematicCTA() {
  const { ref, isInView } = useInView({ triggerOnce: true })

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.content}>
        <h2
          className={`${styles.title}${isInView ? ` ${styles.underlineVisible}` : ''}`}
        >
          ¿Listo para transformar tu negocio?
        </h2>

        <p className={styles.description}>
          Contanos sobre tu proyecto y exploremos juntos cómo la tecnología
          puede ayudarte a alcanzar tus objetivos.
        </p>

        <div className={styles.buttonWrap}>
          <a href="#contacto">
            <Button size="lg">Empecemos a hablar</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
