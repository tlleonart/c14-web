import { Button } from '@/shared/components/Button'
import styles from './HybridCTA.module.css'

export function HybridCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>El siguiente paso</p>
        <h2 className={styles.heading}>
          ¿Listo para liderar con inteligencia?
        </h2>
        <p className={styles.description}>
          Transformamos desafíos empresariales en oportunidades a través de
          tecnología con propósito.
        </p>
        <a href="#contacto">
          <Button size="lg">Empecemos a hablar</Button>
        </a>
      </div>
      <div className={styles.glow} aria-hidden="true" />
    </section>
  )
}
