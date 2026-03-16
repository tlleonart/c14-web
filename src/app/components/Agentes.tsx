import styles from './Agentes.module.css'

const AGENTS = [
  {
    code: 'AGENT / STOCK-001',
    title: 'Inventario',
    description:
      'Monitoreo en tiempo real de stock, alertas predictivas de reposición y gestión automática de órdenes de compra.',
    specs: ['Capacidad: 50k+ SKUs', 'Sync tiempo real'],
    icon: '📦',
    gradient: 'linear-gradient(90deg, var(--primary), #f07060)',
    codeColor: 'var(--primary)',
    iconBg: 'var(--primary-light)',
    iconBorder: 'rgba(212, 64, 48, 0.2)',
    variant: 'light' as const,
  },
  {
    code: 'AGENT / BUDGET-002',
    title: 'Financiero',
    description:
      'Validación de presupuestos, control de gastos y reportes financieros automatizados con trazabilidad completa.',
    specs: ['Audit log inmutable', 'Reglas configurables'],
    icon: '🏦',
    gradient: 'linear-gradient(90deg, var(--secondary), #5068cc)',
    codeColor: 'var(--secondary)',
    iconBg: 'rgba(45, 58, 140, 0.1)',
    iconBorder: 'rgba(45, 58, 140, 0.2)',
    variant: 'light' as const,
  },
  {
    code: 'AGENT / DOC-GEN-003',
    title: 'Documentación',
    description:
      'Generación automática de documentos estructurados: contratos, informes, compliance docs, con plantillas auditables.',
    specs: ['500+ docs/hora', '40+ formatos'],
    icon: '📄',
    gradient: 'linear-gradient(90deg, #2a7a4a, #40aa6a)',
    codeColor: '#2a7a4a',
    iconBg: 'rgba(42, 122, 74, 0.1)',
    iconBorder: 'rgba(42, 122, 74, 0.2)',
    variant: 'light' as const,
  },
  {
    code: 'AGENT / ORCH-000',
    title: 'Orquestador',
    description:
      'El cerebro central. Coordina todos los agentes, gestiona dependencias y garantiza ejecución en el orden correcto.',
    specs: ['Multi-agent routing', 'Error handling total'],
    icon: '🔗',
    gradient: 'linear-gradient(90deg, var(--primary), #ff6050)',
    codeColor: '#ff8a7a',
    iconBg: 'rgba(212, 64, 48, 0.2)',
    iconBorder: 'rgba(212, 64, 48, 0.4)',
    variant: 'dark' as const,
  },
]

export function Agentes() {
  return (
    <section id="agentes" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div>
            <span className="section-label">Agentes especializados</span>
            <h2 className={styles.heading}>
              Cuatro agentes.<br />Un ecosistema integrado.
            </h2>
          </div>
          <p className={styles.headerDescription}>
            Cada agente tiene un dominio específico y se comunica con el
            orquestador para ejecutar tareas complejas sin intervención humana.
          </p>
        </div>

        {/* Disclaimer badge */}
        <div className={styles.disclaimer}>
          <div className={styles.disclaimerBadge}>
            <span className={styles.disclaimerIcon}>ℹ</span>
            Ejemplo de arquitectura — cada solución se diseña a medida según las
            necesidades de tu empresa
          </div>
        </div>

        {/* Agent cards grid */}
        <div className={styles.grid}>
          {AGENTS.map((agent) => (
            <div
              key={agent.code}
              className={`${styles.card} ${agent.variant === 'dark' ? styles.cardDark : ''}`}
            >
              <div
                className={styles.colorBar}
                style={{ background: agent.gradient }}
              />
              {agent.variant === 'dark' && (
                <div className={styles.cardGlow} aria-hidden="true" />
              )}
              <div
                className={styles.agentCode}
                style={{ color: agent.codeColor }}
              >
                {agent.code}
              </div>
              <div
                className={styles.iconBox}
                style={{
                  background: agent.iconBg,
                  borderColor: agent.iconBorder,
                }}
              >
                <span className={styles.iconEmoji}>{agent.icon}</span>
              </div>
              <h3
                className={styles.cardTitle}
                style={
                  agent.variant === 'dark'
                    ? { color: 'var(--text-on-dark)' }
                    : undefined
                }
              >
                {agent.title}
              </h3>
              <p
                className={styles.cardDescription}
                style={
                  agent.variant === 'dark'
                    ? { color: 'var(--text-on-dark-muted)' }
                    : undefined
                }
              >
                {agent.description}
              </p>
              <div
                className={styles.specs}
                style={
                  agent.variant === 'dark'
                    ? { borderColor: 'rgba(255, 255, 255, 0.1)' }
                    : undefined
                }
              >
                {agent.specs.map((spec) => (
                  <div
                    key={spec}
                    className={styles.spec}
                    style={
                      agent.variant === 'dark'
                        ? { color: 'rgba(255, 138, 122, 0.8)' }
                        : undefined
                    }
                  >
                    → {spec}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom agent card */}
        <div className={styles.customCard}>
          <div className={styles.customCardInner}>
            <div className={styles.customIcon}>
              <span>＋</span>
            </div>
            <div className={styles.customText}>
              <div className={styles.customCode}>AGENT / CUSTOM-???</div>
              <h3 className={styles.customTitle}>Tu Agente Personalizado</h3>
              <p className={styles.customDescription}>
                ¿Tenés un proceso que necesita automatización? Diseñamos agentes
                a medida para las necesidades específicas de tu empresa.
              </p>
            </div>
            <div className={styles.customCta}>
              <a href="#contacto" className={styles.customLink}>
                Diseñemos tu arquitectura
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.sectionCta}>
          <a href="#contacto" className="btn btn-primary">
            Analizar mis procesos automatizables
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
