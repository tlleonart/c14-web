'use client'

import { services } from '@/modules/landing/data/services'
import { Icon } from '@/shared/components/Icon'
import { useInView } from '@/shared/hooks/useInView'
import styles from './ShimmerServices.module.css'

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
      className={`${styles.card} ${styles.revealCard} ${isInView ? styles.revealVisible : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className={styles.iconWrap}>
        <Icon name={service.icon} size="lg" aria-hidden />
      </div>

      <h3 className={styles.cardTitle}>{service.title}</h3>

      <p className={styles.cardDescription}>{service.description}</p>

      <ul className={styles.featureList}>
        {service.features.map((feature) => (
          <li key={feature} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ShimmerServices() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Nuestros Servicios</h2>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
