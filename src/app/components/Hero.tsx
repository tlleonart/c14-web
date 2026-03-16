import styles from './Hero.module.css'

const TRUST_INDICATORS = [
  { value: '100%', label: 'DETERMINISMO' },
  { value: '<48h', label: 'TIEMPO DE ANÁLISIS' },
  { value: '0', label: 'CAJAS NEGRAS' },
  { value: '100%', label: 'TRAZABILIDAD' },
]

const TERMINAL_LINES = [
  { text: '# agent orchestrator v2.4.1', color: '#6a8a6a' },
  { text: '$ ', color: '#78b4e0', rest: 'orch.run(', arg: '"STOCK-001"', close: ')' },
  { text: '✓ inventory_check → ok', color: '#80c080' },
  { text: '✓ budget_validate → ok', color: '#80c080' },
  { text: '✓ doc_generate → ok', color: '#80c080' },
  { text: '→ audit_log saved · 3 tasks · 1.2s', color: '#f0c060' },
]

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      {/* Background image overlay */}
      <div className={styles.bgImage} aria-hidden="true" />
      {/* Gradient overlays */}
      <div className={styles.gradientOverlay} aria-hidden="true" />
      {/* Decorative grid */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>
              IA OPERATIVA · BUENOS AIRES · EST. 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            Sistemas de IA<br />que{' '}
            <span className={styles.gradientWord}>operan</span>,<br />
            no que improvisan.
          </h1>

          {/* Subheadline */}
          <p className={styles.subheadline}>
            Diseñamos e implementamos arquitecturas de agentes autónomos con{' '}
            <strong className={styles.subheadlineStrong}>determinismo completo</strong>,
            trazabilidad total y gobernanza empresarial. Análisis técnico comprometido
            en menos de 48&nbsp;horas.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <a href="#contacto" className={`btn btn-primary btn-lg ${styles.ctaPrimary}`}>
              Solicitar análisis gratuito
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#agentes" className={`btn btn-outline-dark btn-lg`}>
              Ver agentes
            </a>
          </div>

          {/* Trust indicators */}
          <div className={styles.trustStrip}>
            {TRUST_INDICATORS.map((indicator, i) => (
              <div key={indicator.label} className={styles.trustItem}>
                {i > 0 && <div className={styles.trustSeparator} />}
                <div className={styles.trustContent}>
                  <div className={styles.trustValue}>{indicator.value}</div>
                  <div className={styles.trustLabel}>{indicator.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero image panel - desktop only */}
      <div className={styles.imagePanel} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-geometric.jpg"
          alt=""
          className={styles.panelImage}
        />
        <div className={styles.panelGradient} />

        {/* Terminal card */}
        <div className={styles.terminal}>
          <div className={styles.terminalDots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </div>
          {TERMINAL_LINES.map((line, i) => (
            <div key={i} style={{ color: line.color, marginBottom: i < TERMINAL_LINES.length - 1 ? '4px' : 0 }}>
              {line.rest ? (
                <>
                  {line.text}<span style={{ color: '#e0e0e0' }}>{line.rest}</span>
                  <span style={{ color: '#f07060' }}>{line.arg}</span>
                  <span style={{ color: '#e0e0e0' }}>{line.close}</span>
                </>
              ) : (
                line.text
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
