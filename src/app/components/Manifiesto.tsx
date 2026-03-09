'use client'

import styles from './Manifiesto.module.css'

function HeroVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      className={styles.diagram}
      aria-hidden="true"
    >
      {/* Background grid dots */}
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={80 + col * 40}
            cy={80 + row * 40}
            r="1"
            className={styles.gridDot}
          />
        ))
      )}

      {/* Orbital paths */}
      <ellipse cx="200" cy="200" rx="130" ry="50" className={styles.orbit} transform="rotate(-30 200 200)" />
      <ellipse cx="200" cy="200" rx="130" ry="50" className={styles.orbit} transform="rotate(30 200 200)" />
      <ellipse cx="200" cy="200" rx="130" ry="50" className={styles.orbit} transform="rotate(90 200 200)" />

      {/* Orbiting electrons */}
      <circle r="5" className={styles.electron}>
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#orbit1" />
        </animateMotion>
      </circle>
      <circle r="5" className={styles.electron}>
        <animateMotion dur="7s" repeatCount="indefinite">
          <mpath href="#orbit2" />
        </animateMotion>
      </circle>
      <circle r="4" className={styles.electron}>
        <animateMotion dur="8s" repeatCount="indefinite">
          <mpath href="#orbit3" />
        </animateMotion>
      </circle>

      {/* Hidden paths for animateMotion */}
      <ellipse id="orbit1" cx="200" cy="200" rx="130" ry="50" fill="none" stroke="none" transform="rotate(-30 200 200)" />
      <ellipse id="orbit2" cx="200" cy="200" rx="130" ry="50" fill="none" stroke="none" transform="rotate(30 200 200)" />
      <ellipse id="orbit3" cx="200" cy="200" rx="130" ry="50" fill="none" stroke="none" transform="rotate(90 200 200)" />

      {/* Core nucleus */}
      <circle cx="200" cy="200" r="44" className={styles.nucleusOuter} />
      <circle cx="200" cy="200" r="36" className={styles.nucleusInner} />

      {/* C14 text inside nucleus */}
      <text x="200" y="195" className={styles.nucleusText}>C</text>
      <text x="200" y="213" className={styles.nucleusNumber}>14</text>
    </svg>
  )
}

export function Manifiesto() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Carbono 14</span>

          <h1 className={styles.heading}>
            <span className={styles.line}>Sistemas de IA</span>
            <span className={styles.line}>que operan,</span>
            <span className={styles.lineAccent}>no que improvisan.</span>
          </h1>

          <p className={styles.subtitle}>
            Diseñamos arquitecturas de agentes autónomos para empresas.
            Determinismo, auditoría completa y reglas de negocio como código.
            Sin alucinaciones. Sin sorpresas.
          </p>

          <div className={styles.actions}>
            <a href="#dialogo" className={styles.primaryBtn}>
              Contactanos
              <span className={styles.btnArrow} aria-hidden="true">{'→'}</span>
            </a>
            <a href="#brecha" className={styles.secondaryBtn}>
              Cómo funciona
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
