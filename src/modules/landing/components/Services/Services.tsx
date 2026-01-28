import { services } from '@/modules/landing/data/services'
import { ServiceCard } from './ServiceCard'
import styles from './Services.module.css'

export function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestros servicios</h2>
          <p className={styles.subtitle}>
            Soluciones tecnológicas que se adaptan a las necesidades de tu negocio
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
