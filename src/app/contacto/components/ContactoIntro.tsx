'use client'

import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from '../page.module.css'

export function ContactoIntro() {
  const { ref, isInView } = useInView()

  return (
    <div className={cn(styles.intro, 'fadeIn', isInView && 'visible')} ref={ref}>
      <h1 className={styles.heading}>Hablemos de tu operación.</h1>
      <p className={styles.body}>
        Contanos qué proceso querés automatizar o qué problema estás tratando de
        resolver. Te respondemos con un análisis técnico preliminar en 48 horas
        hábiles. Sin compromiso.
      </p>
    </div>
  )
}
