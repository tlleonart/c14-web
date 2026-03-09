'use client'

import { useInView } from '@/shared/hooks/useInView'
import styles from './Datacion.module.css'

const phases = [
  {
    number: '0',
    name: 'Auditoría Técnica',
    description:
      'Análisis de procesos existentes, mapeo de flujos de datos e identificación de puntos de automatización. Documentamos cada decisión humana para entender qué puede delegarse a un agente y qué no.',
  },
  {
    number: '1',
    name: 'Especificación',
    description:
      'Definición de contratos de servicio para cada agente: reglas de negocio, umbrales de confianza, protocolos de escalamiento y criterios de validación. Todo queda documentado antes de escribir una línea de código.',
  },
  {
    number: '2',
    name: 'Implementación',
    description:
      'Desarrollo iterativo de micro-agentes con testing contra datos reales de producción. Integración con ERPs, CRMs y sistemas legacy via API. Cada agente se valida contra los criterios definidos en Fase 1.',
  },
  {
    number: '3',
    name: 'Operación y Monitoreo',
    description:
      'Deployment con CI/CD, monitoreo de performance en tiempo real, alertas de drift y auditoría continua del razonamiento. Versionado de comportamiento y rollback automático ante anomalías.',
  },
]

export function Datacion() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="datacion" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isInView ? styles.visible : ''}`}>
          <span className={styles.label}>Metodología</span>
          <h2 className={styles.heading}>Cómo trabajamos</h2>
          <p className={styles.intro}>
            Un proceso de cuatro fases diseñado para minimizar riesgo y
            maximizar el impacto de cada agente en producción.
          </p>
        </div>

        <div className={styles.timeline}>
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              className={`${styles.phase} ${isInView ? styles.phaseVisible : ''}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className={styles.phaseIndicator}>
                <span className={styles.phaseNumber}>{phase.number}</span>
                {index < phases.length - 1 && (
                  <div className={styles.phaseLine} aria-hidden="true" />
                )}
              </div>
              <div className={styles.phaseContent}>
                <h3 className={styles.phaseName}>
                  <span className={styles.phasePrefix}>Fase {phase.number}</span>
                  {phase.name}
                </h3>
                <p className={styles.phaseDescription}>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
