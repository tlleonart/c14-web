'use client'

import { useInView } from '@/shared/hooks/useInView'
import styles from './Cronicas.module.css'

const caseStudies = [
  {
    client: 'Global OOH',
    headline: 'De 48 horas a 30 segundos',
    description:
      'Global OOH gestionaba su inventario de espacios publicitarios con planillas manuales y un proceso de cotización que tomaba hasta 48 horas. Implementamos una arquitectura de 3 agentes — inventario, pricing y documentación — integrados con su sistema de gestión existente. El agente de inventario valida disponibilidad en tiempo real contra la base de datos, el agente de pricing calcula tarifas según reglas comerciales hardcodeadas, y el agente de documentación genera propuestas PDF con formato corporativo.',
    metrics: [
      { value: '48h → 30s', label: 'Tiempo de cotización' },
      { value: '99.9%', label: 'Precisión de datos' },
      { value: '3', label: 'Agentes en producción' },
    ],
  },
]

export function Cronicas() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="cronicas" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isInView ? styles.visible : ''}`}>
          <span className={styles.label}>Casos de Estudio</span>
          <h2 className={styles.heading}>Resultados en producción</h2>
          <p className={styles.intro}>
            Implementaciones reales con métricas verificables.
          </p>
        </div>

        {caseStudies.map((study, idx) => (
          <article
            key={study.client}
            className={`${styles.caseStudy} ${isInView ? styles.visible : ''}`}
            style={{ transitionDelay: `${0.15 + idx * 0.1}s` }}
          >
            <div className={styles.caseContent}>
              <span className={styles.caseClient}>{study.client}</span>
              <h3 className={styles.caseHeadline}>
                {study.headline}
              </h3>
              <p className={styles.caseDescription}>{study.description}</p>
              <span className={styles.readMore}>
                Ver caso completo <span aria-hidden="true">&rarr;</span>
              </span>
            </div>

            <div className={styles.metrics}>
              {study.metrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
