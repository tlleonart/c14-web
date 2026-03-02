'use client'

import { ContactForm } from '@/modules/contact'
import { Icon } from '@/shared/components/Icon'
import { useInView } from '@/shared/hooks/useInView'
import styles from './AnthropicContact.module.css'

const benefits = [
  {
    icon: 'schedule',
    title: 'Respuesta rápida',
    description: 'Te contactamos en menos de 24 horas hábiles.',
  },
  {
    icon: 'handshake',
    title: 'Sin compromiso',
    description: 'Primera consulta y evaluación de proyecto sin costo.',
  },
  {
    icon: 'verified',
    title: 'Equipo especializado',
    description: 'Profesionales con experiencia comprobada en cada área.',
  },
]

export function AnthropicContact() {
  const { ref, isInView } = useInView({ threshold: 0.05 })

  return (
    <section id="contacto" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div
          className={`${styles.left} ${isInView ? styles.leftVisible : ''}`}
        >
          <span className={styles.label}>Contacto</span>
          <h2 className={styles.heading}>
            Hablemos de
            <br />
            <span className={styles.accent}>tu proyecto</span>
          </h2>
          <p className={styles.description}>
            Contanos tu idea o desafío y te ayudamos a encontrar la mejor
            solución tecnológica. Sin jerga, sin complicaciones.
          </p>

          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <Icon name={benefit.icon} size="sm" aria-hidden />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDescription}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
