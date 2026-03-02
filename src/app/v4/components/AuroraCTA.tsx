import { Button } from '@/shared/components/Button'
import styles from './AuroraCTA.module.css'

export function AuroraCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.gradientText}>
          ¿Listo para construir el futuro?
        </h2>
        <p className={styles.subtitle}>
          Llevamos tu visión al siguiente nivel con inteligencia artificial y
          tecnología de vanguardia.
        </p>
        <div className={styles.buttonGlow}>
          <a href="#contacto">
            <Button size="lg">Empecemos a hablar</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
