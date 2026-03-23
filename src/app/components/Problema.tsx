import { IconScale, IconShield, IconClipboard } from '@/shared/components/Icons/SectionIcons'
import styles from './Problema.module.css'

const CRITERIA = [
  { name: 'Determinismo', neg: 'Probabilístico', pos: 'Garantizado' },
  { name: 'Trazabilidad', neg: 'Opaca', pos: 'Completa' },
  { name: 'Auditabilidad', neg: 'Limitada', pos: 'Total' },
  { name: 'Gobernanza', neg: 'Difícil', pos: 'Integrada' },
  { name: 'Privacidad', neg: 'Riesgo externo', pos: 'Soberanía total' },
  { name: 'Procesos críticos', neg: 'No recomendado', pos: 'Diseñado para eso' },
]

const BENEFITS = [
  {
    icon: <IconScale className={styles.iconSvg} />,
    title: 'Reglas de negocio explícitas',
    description:
      'Cada decisión del agente está regida por reglas configuradas y validadas por el equipo del cliente. Sin caja negra.',
  },
  {
    icon: <IconShield className={styles.iconSvg} />,
    title: 'Validación humana en el loop',
    description:
      'Los puntos de decisión críticos pueden requerir aprobación humana antes de ejecutar. Control granular sobre la autonomía.',
  },
  {
    icon: <IconClipboard className={styles.iconSvg} />,
    title: 'Historial completo de ejecución',
    description:
      'Cada acción queda registrada con timestamp, contexto, inputs y outputs. Completamente auditable ante reguladores.',
  },
]

export function Problema() {
  return (
    <section id="problema" className={styles.section}>
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <span className="section-label dark">El problema</span>
          <h2 className={styles.heading}>
            La IA generativa no alcanza para operaciones críticas
          </h2>
          <p className={styles.description}>
            Los LLMs son herramientas poderosas para generar contenido, pero
            fallan cuando se requiere precisión, consistencia y auditabilidad en
            procesos de negocio reales.
          </p>
        </div>

        <div className={styles.twoColumn}>
          {/* Left: Comparison table */}
          <div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th></th>
                  <th className={styles.colGen}>
                    <span className={styles.iconClose}>✕</span> IA Generativa
                  </th>
                  <th className={styles.colOp}>
                    <span className={styles.iconCheck}>✓</span> IA Operativa
                  </th>
                </tr>
              </thead>
              <tbody>
                {CRITERIA.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td className={styles.neg}>
                      <span className={styles.iconClose}>✕</span>
                      {row.neg}
                    </td>
                    <td className={styles.pos}>
                      <span className={styles.iconCheck}>✓</span>
                      {row.pos}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Quote */}
            <div className={styles.quote}>
              <p>
                &ldquo;Un sistema que improvisa en producción no es un sistema —
                es un riesgo. Nuestros agentes ejecutan, no sugieren.&rdquo;
              </p>
              <span className={styles.quoteAuthor}>
                — CARBONO14 · PRINCIPIO DE DISEÑO
              </span>
            </div>
          </div>

          {/* Right: Benefit cards */}
          <div className={styles.benefitCards}>
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className={styles.benefitCard}>
                <div className={styles.benefitHeader}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <span className={styles.benefitTitle}>{benefit.title}</span>
                  <span className={styles.benefitBadge}>OPERATIVA</span>
                </div>
                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
