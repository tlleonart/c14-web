'use client'

import { ContactForm } from '@/modules/contact'
import { useInView } from '@/shared/hooks/useInView'
import styles from './ElDialogo.module.css'

export function ElDialogo() {
  const { ref, isInView } = useInView({ threshold: 0.05 })

  return (
    <section id="dialogo" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.left} ${isInView ? styles.visible : ''}`}>
          <span className={styles.label}>Contacto</span>

          <h2 className={styles.heading}>
            Tenés un proceso
          </h2>
          <h2 className={styles.headingSub}>
            que podría automatizarse?
          </h2>
          <h2 className={styles.headingAccent}>
            Hablemos.
          </h2>

          <div className={styles.rule} aria-hidden="true" />

          <p className={styles.note}>
            Describí tu caso de uso y te respondemos con un análisis técnico
            preliminar en menos de 48 horas hábiles. Sin compromiso.
          </p>
        </div>

        <div
          className={`${styles.right} ${isInView ? styles.rightVisible : ''}`}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
