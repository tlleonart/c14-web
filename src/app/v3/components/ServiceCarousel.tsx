import { services } from '@/modules/landing/data/services'
import { Icon } from '@/shared/components/Icon'
import styles from './ServiceCarousel.module.css'

export function ServiceCarousel() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Definiendo el futuro del trabajo</p>
        <h2 className={styles.heading}>Tecnología diseñada con propósito</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon name={service.icon} size="lg" aria-hidden />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
