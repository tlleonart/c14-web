'use client'

import { services } from '@/modules/landing/data/services'
import { Icon } from '@/shared/components/Icon'
import { useInView } from '@/shared/hooks/useInView'
import styles from './AnthropicServices.module.css'

export function AnthropicServices() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="servicios" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Lo que hacemos</span>
          <h2 className={styles.heading}>
            Servicios que
            <br />
            <span className={styles.accent}>transforman</span>
          </h2>
          <p className={styles.description}>
            Combinamos expertise técnico con visión estratégica para crear
            soluciones que generan impacto real en tu negocio.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`${styles.card} ${isInView ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={styles.cardIcon}>
                  <Icon name={service.icon} size="lg" aria-hidden />
                </div>
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>

              <ul className={styles.features}>
                {service.features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <span className={styles.featureDot} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
