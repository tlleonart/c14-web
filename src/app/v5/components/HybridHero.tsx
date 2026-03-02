import { Button } from '@/shared/components/Button'
import styles from './HybridHero.module.css'

export function HybridHero() {
  return (
    <section className={styles.section}>
      <div className={styles.darkPanel}>
        <div className={styles.darkContent}>
          <h1 className={styles.title}>
            Transformamos tu negocio con{' '}
            <span className={styles.highlight}>inteligencia artificial</span>
          </h1>
          <p className={styles.subtitle}>
            Automatizacion, desarrollo de IA, web y software. Soluciones tecnologicas
            disenadas para resolver los problemas reales de tu empresa.
          </p>
          <div className={styles.actions}>
            <a href="#contacto">
              <Button size="lg">Conversemos</Button>
            </a>
            <a href="#servicios">
              <Button variant="secondary" size="lg">Ver servicios</Button>
            </a>
          </div>
        </div>
        <div className={styles.glow} aria-hidden="true" />
      </div>
      <div className={styles.visualPanel}>
        <div className={styles.shapes} aria-hidden="true">
          <div className={styles.shapeLayer1} />
          <div className={styles.shapeLayer2} />
          <div className={styles.shapeLayer3} />
          <div className={styles.shapeLayer4} />
        </div>
        <div className={styles.visualGlow} aria-hidden="true" />
      </div>
    </section>
  )
}
