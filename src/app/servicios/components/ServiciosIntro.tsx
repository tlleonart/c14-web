'use client'

import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from '../page.module.css'

export function ServiciosIntro() {
  const { ref, isInView } = useInView()

  return (
    <div className={cn(styles.intro, 'fadeIn', isInView && 'visible')} ref={ref}>
      <h1 className={styles.heading}>Lo que construimos opera con garantías.</h1>
      <p className={styles.body}>
        Diseñamos soluciones de IA operativa a medida. No tenemos un catálogo
        cerrado. Tenemos un principio: cada sistema que sale a producción es
        determinista, trazable y auditable.
      </p>
    </div>
  )
}
