'use client'

import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from './ProcessSidebar.module.css'

const STEPS = [
  'Leemos tu mensaje y evaluamos el caso.',
  'Te respondemos en 48 horas hábiles con un análisis preliminar.',
  'Si tiene sentido avanzar, coordinamos una auditoría técnica.',
  'Si no tiene sentido, te lo decimos. Sin vueltas.',
]

export function ProcessSidebar() {
  const { ref, isInView } = useInView()

  return (
    <aside
      className={cn(styles.sidebar, 'fadeIn', isInView && 'visible')}
      ref={ref}
    >
      <h2 className={styles.heading}>Qué pasa después de escribirnos:</h2>
      <ol className={styles.steps}>
        {STEPS.map((step, i) => (
          <li key={i} className={styles.step}>
            <span className={styles.stepNumber}>{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </aside>
  )
}
