'use client'

import { Icon } from '@/shared/components/Icon'
import { useInView } from '@/shared/hooks/useInView'
import styles from './ElGremio.module.css'

const agents = [
  {
    code: 'STOCK',
    title: 'Agente de Inventario',
    icon: 'inventory_2',
    description: 'Reconciliación automática de inventario físico vs. digital. Validación cruzada contra múltiples fuentes de datos en tiempo real, detección de discrepancias y alertas configurables por umbral.',
  },
  {
    code: 'BUDGET',
    title: 'Agente Financiero',
    icon: 'account_balance',
    description: 'Generación de presupuestos y proyecciones con reglas contables hardcodeadas. Cálculos deterministas, validación contra históricos y alertas ante desviaciones del modelo financiero.',
  },
  {
    code: 'DOC-GEN',
    title: 'Agente de Documentación',
    icon: 'description',
    description: 'Generación automática de propuestas, reportes y documentación operativa. Templates validados contra el manual de marca, con outputs consistentes y versionados.',
  },
  {
    code: 'ORCH',
    title: 'Agente Orquestador',
    icon: 'hub',
    description: 'Coordinación de micro-agentes mediante un pipeline de decisión. Priorización de tareas, distribución de carga, manejo de dependencias y escalamiento a operadores humanos cuando corresponde.',
  },
]

export function ElGremio() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="gremio" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isInView ? styles.visible : ''}`}>
          <span className={styles.label}>Agentes Especializados</span>
          <h2 className={styles.heading}>Arquitectura Multi-Agente</h2>
          <p className={styles.intro}>
            Cada agente es un microservicio inteligente con un scope definido,
            reglas de negocio como código y un contrato de operación auditado.
            Se integran con tus sistemas existentes vía API.
          </p>
        </div>

        <div className={styles.grid}>
          {agents.map((agent, index) => (
            <article
              key={agent.code}
              className={`${styles.card} ${isInView ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardCode}>{agent.code}</span>
                <div className={styles.cardIcon}>
                  <Icon name={agent.icon} size="md" aria-hidden />
                </div>
              </div>
              <h3 className={styles.cardTitle}>{agent.title}</h3>
              <p className={styles.cardDescription}>{agent.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
