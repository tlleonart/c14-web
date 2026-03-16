'use client'

import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from '../page.module.css'

export function MetodoIntro() {
  const { ref, isInView } = useInView()

  return (
    <div className={cn(styles.intro, 'fadeIn', isInView && 'visible')} ref={ref}>
      <h1 className={styles.heading}>Cuatro fases. Cero improvisación.</h1>
      <p className={styles.body}>
        Cada proyecto sigue un proceso diseñado para minimizar riesgo y maximizar
        impacto. No empezamos a construir sin entender. No implementamos sin
        especificar. No desplegamos sin supervisar.
      </p>
    </div>
  )
}
