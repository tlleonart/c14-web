import { Button } from '@/shared/components/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transformamos tu negocio con{' '}
            <span className={styles.highlight}>inteligencia artificial</span>
          </h1>
          <p className={styles.subtitle}>
            Automatización, desarrollo de IA, web y software. Soluciones tecnológicas
            diseñadas para resolver los problemas reales de tu empresa.
          </p>
          <div className={styles.actions}>
            <a href="#contacto">
              <Button size="lg">Conversemos</Button>
            </a>
            <a href="#servicios">
              <Button variant="secondary" size="lg">
                Ver servicios
              </Button>
            </a>
          </div>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.glow} />
          <div className={styles.grid} />
        </div>
      </div>
    </section>
  )
}
