import { Button } from '@/shared/components/Button'
import styles from './EditorialHero.module.css'

export function EditorialHero() {
  return (
    <section className={styles.section}>
      <div className={styles.darkPanel}>
        <div className={styles.darkContent}>
          <h1 className={styles.title}>
            Inteligencia centrada en las personas para la empresa global.
          </h1>
          <p className={styles.subtitle}>
            Articulamos el futuro a través de alianzas estratégicas y liderazgo
            en innovación tecnológica.
          </p>
          <a href="#contacto">
            <Button size="lg">Conversemos</Button>
          </a>
        </div>
      </div>
      <div className={styles.visualPanel}>
        <div className={styles.abstractShape} aria-hidden="true">
          <div className={styles.shapeLayer1} />
          <div className={styles.shapeLayer2} />
          <div className={styles.shapeLayer3} />
          <div className={styles.shapeLayer4} />
          <div className={styles.shapeLayer5} />
        </div>
      </div>
    </section>
  )
}
