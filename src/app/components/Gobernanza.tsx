import { IconCheck, IconScale, IconShield, IconChart, InlineCheck } from '@/shared/components/Icons/SectionIcons'
import styles from './Gobernanza.module.css'

const CARDS = [
  { icon: <IconCheck className={styles.iconSvg} />, title: 'Trazabilidad completa', description: 'Cada acción de cada agente queda registrada en un log inmutable. Saber quién decidió qué, cuándo y por qué — siempre.' },
  { icon: <IconScale className={styles.iconSvg} />, title: 'Reglas auditables', description: 'Las reglas de negocio son explícitas, documentadas y revisables por tu equipo legal o de compliance en cualquier momento.' },
  { icon: <IconShield className={styles.iconSvg} />, title: 'Rollback instantáneo', description: 'Si algo sale mal, cada operación puede revertirse. Diseñamos cada agente con capacidades de rollback y recuperación de estado.' },
  { icon: <IconChart className={styles.iconSvg} />, title: 'Monitoreo configurable', description: 'Diseñamos el monitoreo según tus requerimientos — alertas, métricas y health checks.' },
]

const COMPLIANCE = [
  'Arquitectura compatible con SOC 2 / ISO 27001',
  'Compatible con GDPR / regulaciones locales',
  'Deploy en tu infraestructura o en la nuestra',
]

export function Gobernanza() {
  return (
    <section id="gobernanza" className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <span className="section-label blue">Gobernanza empresarial</span>
          <h2 className={styles.heading}>Control total en cada decisión.</h2>
          <p className={styles.headerDescription}>
            Nuestros sistemas están diseñados para cumplir los estándares más
            exigentes de auditoría, trazabilidad y cumplimiento normativo.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.iconBox}>
                {card.icon}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.complianceBar}>
          {COMPLIANCE.map((item, i) => (
            <div key={item} className={styles.complianceItem}>
              {i > 0 && <div className={styles.complianceSeparator} />}
              <div className={styles.complianceContent}>
                <InlineCheck className={styles.complianceCheck} />
                <span className={styles.complianceText}>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
