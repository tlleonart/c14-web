import styles from './Metodologia.module.css'

const STEPS = [
  {
    number: '00',
    phase: 'FASE 0',
    title: 'Validación',
    description:
      'Relevamiento de procesos, identificación de oportunidades de automatización y evaluación de factibilidad técnica.',
    badge: '<48h entrega',
    badgeStyle: 'primary' as const,
    active: true,
    circleColor: 'primary' as const,
  },
  {
    number: '01',
    phase: 'FASE 1',
    title: 'Especificación',
    description:
      'Diseño detallado de la arquitectura, definición de reglas de negocio y flujos de decisión del agente.',
    badge: '1-2 semanas',
    badgeStyle: 'muted' as const,
    active: false,
    circleColor: 'primary' as const,
  },
  {
    number: '02',
    phase: 'FASE 2',
    title: 'Implementación',
    description:
      'Desarrollo del agente con testing exhaustivo, integración con sistemas existentes y validación con datos reales.',
    badge: '2-6 semanas',
    badgeStyle: 'secondary' as const,
    active: false,
    circleColor: 'secondary' as const,
  },
  {
    number: '03',
    phase: 'FASE 3',
    title: 'Operación',
    description:
      'Deploy en producción, monitoreo continuo, optimización iterativa y soporte técnico especializado.',
    badge: 'Continuo',
    badgeStyle: 'secondary' as const,
    active: false,
    circleColor: 'secondary' as const,
  },
]

export function Metodologia() {
  return (
    <section id="metodologia" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Metodología</span>
          <h2 className={styles.heading}>
            De la idea al agente en producción.
          </h2>
          <p className={styles.headerDescription}>
            Un proceso estructurado en cuatro fases que garantiza que cada agente
            esté completamente especificado antes de escribir una línea de código.
          </p>
        </div>

        <div className={styles.stepper}>
          {/* Connecting line */}
          <div className={styles.connectingLine} aria-hidden="true" />

          {STEPS.map((step) => (
            <div key={step.number} className={styles.step}>
              <div
                className={`${styles.circle} ${step.active ? styles.circleActive : ''} ${
                  step.circleColor === 'secondary' ? styles.circleSecondary : ''
                }`}
              >
                {step.number}
              </div>
              <span
                className={styles.phase}
                style={
                  step.active ? { color: 'var(--primary)' } : undefined
                }
              >
                {step.phase}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              <div
                className={`${styles.badge} ${styles[`badge-${step.badgeStyle}`]}`}
              >
                {step.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
