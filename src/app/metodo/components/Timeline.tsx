'use client'

import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from './Timeline.module.css'

interface Phase {
  number: string
  title: string
  badge?: string
  subtitle?: string
  body: string[]
  items?: string[]
  closing: string
  featured?: boolean
}

const PHASES: Phase[] = [
  {
    number: '0',
    title: 'Auditoría técnica',
    badge: '48 horas hábiles. Sin compromiso.',
    body: [
      'Analizamos tu operación actual: procesos, datos, integraciones, reglas de negocio. Identificamos dónde la IA operativa puede generar impacto real y dónde no tiene sentido forzarla. Te entregamos un diagnóstico preliminar con recomendaciones accionables.',
      'No es una propuesta comercial. Es un análisis técnico. Si después de verlo decidís que no tiene sentido avanzar, no perdiste nada.',
    ],
    closing: '',
    featured: true,
  },
  {
    number: '1',
    title: 'Especificación',
    subtitle: 'Donde se definen las reglas del juego.',
    body: [],
    items: [
      'Reglas de negocio explícitas',
      'Fuentes de datos autorizadas',
      'Umbrales de confianza configurables',
      'Protocolos de escalamiento',
      'Criterios de validación',
    ],
    closing: 'Nada se construye sin especificación aprobada por tu equipo.',
  },
  {
    number: '2',
    title: 'Implementación',
    subtitle: 'Donde el contrato se convierte en sistema.',
    body: [],
    items: [
      'Chain of Thought trazable en cada operación',
      'Validación contra fuentes reales',
      'Tests automatizados contra los criterios del contrato',
      'Documentación técnica completa',
    ],
    closing: 'No se pasa a producción sin que todo esté verificado.',
  },
  {
    number: '3',
    title: 'Operación y monitoreo',
    subtitle: 'Donde los agentes prueban que funcionan.',
    body: [],
    items: [
      'Performance contra los criterios del contrato formal',
      'Tasas de escalamiento a humanos',
      'Precisión de resultados vs. fuentes',
      'Cambios en los datos o reglas que requieran ajustes',
    ],
    closing:
      'Ajustamos umbrales, versionamos cambios en los contratos, y reportamos métricas de operación.',
  },
]

export function Timeline() {
  const { ref, isInView } = useInView()

  return (
    <section className={cn('fadeIn', isInView && 'visible')} ref={ref}>
      <div className={styles.timeline}>
        {PHASES.map((phase) => (
          <div
            key={phase.number}
            className={cn(styles.phase, phase.featured && styles.featured)}
          >
            <span className={styles.number}>{phase.number}</span>
            <div className={styles.content}>
              <div className={styles.header}>
                <h2 className={styles.title}>{phase.title}</h2>
                {phase.badge && (
                  <span className={styles.badge}>{phase.badge}</span>
                )}
              </div>
              {phase.subtitle && (
                <p className={styles.subtitle}>{phase.subtitle}</p>
              )}
              {phase.body.map((paragraph, i) => (
                <p key={i} className={styles.body}>
                  {paragraph}
                </p>
              ))}
              {phase.items && (
                <ul className={styles.list}>
                  {phase.items.map((item) => (
                    <li key={item} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {phase.closing && (
                <p className={styles.closing}>{phase.closing}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
