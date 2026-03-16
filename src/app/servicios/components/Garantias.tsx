'use client'

import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from './Garantias.module.css'
import pageStyles from '../page.module.css'

const GUARANTEES = [
  {
    bold: 'Ejecución determinista.',
    text: 'Mismo input, mismo output. Siempre.',
  },
  {
    bold: 'Chain of Thought trazable.',
    text: 'Cada decisión del agente queda registrada y versionada.',
  },
  {
    bold: 'Contrato formal.',
    text: 'Reglas de negocio definidas antes de construir. Nada se implementa sin especificación aprobada.',
  },
  {
    bold: 'Escalamiento a humanos.',
    text: 'Cuando el sistema no sabe, escala. No improvisa.',
  },
  {
    bold: 'Soberanía de datos.',
    text: 'Tus datos son tuyos. Siempre.',
  },
]

export function Garantias() {
  const { ref, isInView } = useInView()

  return (
    <section className={cn('fadeIn', isInView && 'visible')} ref={ref}>
      <h2 className={pageStyles.sectionHeading}>
        Lo que no cambia, sin importar qué construyamos.
      </h2>
      <ul className={styles.list}>
        {GUARANTEES.map((item) => (
          <li key={item.bold} className={styles.item}>
            <span className={styles.check} aria-hidden="true">✓</span>
            <span>
              <strong>{item.bold}</strong> {item.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
