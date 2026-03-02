'use client'

import { useInView } from '@/shared/hooks/useInView'
import styles from './AnthropicCTA.module.css'

export function AnthropicCTA() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.bgLine} aria-hidden="true" />

      <div className={`${styles.container} ${isInView ? styles.visible : ''}`}>
        <span className={styles.label}>Siguiente paso</span>

        <h2 className={styles.heading}>
          ¿Listo para transformar
          <br />
          tu negocio?
        </h2>

        <p className={styles.description}>
          Cada gran proyecto empieza con una conversación. Escribinos y
          empecemos a construir juntos.
        </p>

        <a href="#contacto" className={styles.ctaButton}>
          Agendar una reunión
          <span className={styles.ctaArrow} aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  )
}
