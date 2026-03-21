'use client'

import Link from 'next/link'
import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from './MetodoCta.module.css'
import pageStyles from '../page.module.css'

export function MetodoCta() {
  const { ref, isInView } = useInView()

  return (
    <section className={cn(styles.section, 'fadeIn', isInView && 'visible')} ref={ref}>
      <h2 className={pageStyles.sectionHeading}>
        Empezá con una validación gratuita.
      </h2>
      <p className={styles.body}>
        Es el primer paso. En 48 horas hábiles te entregamos una validación de tu
        proceso con factibilidad y próximos pasos recomendados. Sin compromiso.
      </p>
      <Link href="/contacto" className={styles.button}>
        Validar mi proceso
      </Link>
    </section>
  )
}
