'use client'

import styles from './AnthropicHero.module.css'

const rotatingWords = [
  'inteligencia artificial',
  'automatización',
  'desarrollo web',
  'software a medida',
]

export function AnthropicHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgOrb} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />

      <div className={styles.container}>
        <span className={styles.label}>Carbono 14</span>

        <h1 className={styles.heading}>
          <span className={styles.line}>
            <span className={styles.word} style={{ animationDelay: '0.1s' }}>
              Impulsamos
            </span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.2s' }}>
              tu
            </span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.3s' }}>
              negocio
            </span>
          </span>
          <span className={styles.line}>
            <span className={styles.word} style={{ animationDelay: '0.4s' }}>
              con
            </span>
          </span>
          <span className={styles.rotatingContainer}>
            {rotatingWords.map((word, i) => (
              <span
                key={word}
                className={styles.rotatingWord}
                style={{ animationDelay: `${i * 3}s` }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p className={styles.subtitle}>
          Diseñamos y desarrollamos soluciones tecnológicas que transforman la
          manera en que operás. Tecnología con propósito, resultados que se
          miden.
        </p>

        <div className={styles.actions}>
          <a href="#contacto" className={styles.primaryBtn}>
            Comenzar un proyecto
            <span className={styles.btnArrow} aria-hidden="true">
              &rarr;
            </span>
          </a>
          <a href="#servicios" className={styles.secondaryBtn}>
            Conocer más
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
