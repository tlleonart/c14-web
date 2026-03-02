'use client'

import { services } from '@/modules/landing/data/services'
import { Icon } from '@/shared/components/Icon'
import { useInView } from '@/shared/hooks/useInView'
import styles from './BentoServices.module.css'

const AREA_CLASSES = [
  styles.cardAuto,
  styles.cardAi,
  styles.cardWeb,
  styles.cardSoft,
] as const

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`${styles.card} ${AREA_CLASSES[index]} ${isInView ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      data-area={service.id}
    >
      <div className={styles.iconWrap}>
        <Icon name={service.icon} size="lg" aria-hidden />
      </div>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDescription}>{service.description}</p>
      <ul className={styles.features}>
        {service.features.map((feature) => (
          <li key={feature} className={styles.feature}>
            <Icon name="check_circle" size="sm" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BentoServices() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Nuestros servicios</h2>
          <p className={styles.subtitle}>
            Soluciones tecnológicas que se adaptan a las necesidades de tu
            negocio
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
