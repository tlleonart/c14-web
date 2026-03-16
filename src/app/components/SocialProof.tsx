import styles from './SocialProof.module.css'

const LOGOS = [
  { name: 'ACME Corp', style: 'mono' as const },
  { name: 'NovaTech', style: 'sans-bold' as const },
  { name: 'Grupo Delta', style: 'sans-caps' as const },
  { name: 'FinData SA', style: 'mono' as const },
  { name: 'Meridian', style: 'sans-black' as const },
  { name: 'Atlas Ops', style: 'mono-caps' as const },
]

export function SocialProof() {
  return (
    <section id="clientes" className={styles.section}>
      <div className="container">
        <p className={styles.title}>
          Empresas que confían en nuestra IA operativa
        </p>

        <div className={styles.logosRow}>
          {LOGOS.map((logo, i) => (
            <div key={logo.name} className={styles.logoItem}>
              {i > 0 && <div className={styles.separator} />}
              <span className={`${styles.logo} ${styles[logo.style]}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.metrics}>
          <span>
            30+ agentes desplegados en producción · 99.9% uptime · Análisis
            técnico en &lt;48h
          </span>
        </div>
      </div>
    </section>
  )
}
