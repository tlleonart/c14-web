'use client'

import Link from 'next/link'
import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from './ServiciosCta.module.css'
import pageStyles from '../page.module.css'

export function ServiciosCta() {
  const { ref, isInView } = useInView()

  return (
    <section className={cn(styles.section, 'fadeIn', isInView && 'visible')} ref={ref}>
      <h2 className={pageStyles.sectionHeading}>
        ¿Tenés un proceso que querés automatizar?
      </h2>
      <p className={styles.body}>
        Contanos qué necesitás y te respondemos con un análisis técnico
        preliminar en 48 horas hábiles. Sin compromiso.
      </p>
      <Link href="/contacto" className={styles.button}>
        Hablemos
      </Link>
    </section>
  )
}
