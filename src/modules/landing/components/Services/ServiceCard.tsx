import { Icon } from '@/shared/components/Icon'
import type { Service } from '@/modules/landing/data/services'
import styles from './Services.module.css'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardIcon}>
        <Icon name={service.icon} size="lg" aria-hidden />
      </div>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDescription}>{service.description}</p>
      <ul className={styles.features}>
        {service.features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <Icon name="check_circle" size="sm" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
