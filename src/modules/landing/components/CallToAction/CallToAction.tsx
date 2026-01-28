import { Button } from '@/shared/components/Button'
import styles from './CallToAction.module.css'

export function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            ¿Listo para transformar tu negocio?
          </h2>
          <p className={styles.description}>
            Contanos sobre tu proyecto y exploremos juntos cómo la tecnología puede
            ayudarte a alcanzar tus objetivos.
          </p>
          <a href="#contacto">
            <Button size="lg">Empecemos a hablar</Button>
          </a>
        </div>
        <div className={styles.decoration} aria-hidden="true">
          <div className={styles.glow} />
        </div>
      </div>
    </section>
  )
}
