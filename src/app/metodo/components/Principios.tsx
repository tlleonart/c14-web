'use client'

import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from './Principios.module.css'
import pageStyles from '../page.module.css'

const PRINCIPLES = [
  {
    headline: 'La IA no reemplaza criterio humano. Lo extiende con garantías.',
    body: 'Construimos sistemas que hacen lo que saben hacer bien, y escalan a personas cuando no.',
  },
  {
    headline: 'Si el sistema no sabe, escala. Siempre.',
    body: 'No hay agente nuestro que improvise una respuesta cuando no tiene certeza. Eso es un principio de diseño, no una feature.',
  },
  {
    headline: 'Cada decisión es auditable.',
    body: 'Si querés saber por qué el agente tomó una decisión, podés verlo. Chain of Thought completo, versionado, consultable.',
  },
]

export function Principios() {
  const { ref, isInView } = useInView()

  return (
    <section className={cn('fadeIn', isInView && 'visible')} ref={ref}>
      <h2 className={pageStyles.sectionHeading}>Lo que creemos.</h2>
      <div className={styles.list}>
        {PRINCIPLES.map((principle) => (
          <div key={principle.headline} className={styles.item}>
            <p className={styles.headline}>{principle.headline}</p>
            <p className={styles.body}>{principle.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
