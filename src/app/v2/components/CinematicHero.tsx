import { Button } from '@/shared/components/Button'
import styles from './CinematicHero.module.css'

const HEADING_TEXT = 'Transformamos tu negocio con inteligencia artificial'
const HIGHLIGHT_WORDS = new Set(['inteligencia', 'artificial'])

const particles = [
  { top: '15%', left: '10%', animationDelay: '0s', animationDuration: '7s' },
  { top: '25%', left: '80%', animationDelay: '1.5s', animationDuration: '9s' },
  { top: '60%', left: '20%', animationDelay: '3s', animationDuration: '6s' },
  { top: '70%', left: '75%', animationDelay: '0.5s', animationDuration: '10s' },
  { top: '40%', left: '50%', animationDelay: '2s', animationDuration: '8s' },
  { top: '85%', left: '35%', animationDelay: '4s', animationDuration: '7.5s' },
]

export function CinematicHero() {
  const words = HEADING_TEXT.split(' ')

  return (
    <section className={styles.section}>
      <div className={styles.gradientMesh} aria-hidden="true" />

      {particles.map((style, i) => (
        <div
          key={i}
          className={styles.particle}
          aria-hidden="true"
          style={style}
        />
      ))}

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {words.map((word, index) => (
              <span
                key={index}
                className={`${styles.word}${HIGHLIGHT_WORDS.has(word) ? ` ${styles.highlight}` : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className={styles.subtitle}>
            {"Automatizaci\u00f3n, desarrollo de IA, web y software. Soluciones tecnol\u00f3gicas dise\u00f1adas para resolver los problemas reales de tu empresa."}
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
      </div>
    </section>
  )
}
