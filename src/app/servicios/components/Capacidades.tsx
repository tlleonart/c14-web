'use client'

import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from './Capacidades.module.css'
import pageStyles from '../page.module.css'

const CAPABILITIES = [
  {
    heading: 'Agentes que ejecutan con reglas, no con suposiciones.',
    body: 'Automatización de procesos con ejecución determinista. Inventario, finanzas, documentación, coordinación multi-agente, y lo que tu operación necesite. Cada agente opera bajo un contrato formal con tus reglas de negocio, valida contra fuentes reales, y escala a humanos cuando se exceden los umbrales.',
  },
  {
    heading: 'Dirección técnica antes de construir.',
    body: 'Auditoría de tu operación actual, diseño de arquitectura de agentes, evaluación de viabilidad técnica. Para equipos que necesitan claridad antes de comprometerse con una implementación. Empezamos con un análisis de 48 horas, sin compromiso.',
  },
  {
    heading: 'Supervisión continua después de implementar.',
    body: 'Los agentes no se despliegan y se olvidan. Supervisamos su rendimiento en producción, ajustamos umbrales de confianza, versionamos cambios en los contratos formales, y reportamos métricas de operación. Si algo cambia en tu negocio, los agentes se adaptan.',
  },
  {
    heading: 'Cuando la solución no es un agente estándar.',
    body: 'Software personalizado para casos donde la automatización necesita una integración profunda, una interfaz específica, o una lógica que no encaja en un agente autónomo. Mismo rigor, mismas garantías.',
  },
]

export function Capacidades() {
  const { ref, isInView } = useInView()

  return (
    <section className={cn('fadeIn', isInView && 'visible')} ref={ref}>
      <h2 className={pageStyles.sectionHeading}>
        Qué podemos hacer por tu operación.
      </h2>
      <div className={styles.grid}>
        {CAPABILITIES.map((cap) => (
          <div key={cap.heading} className={styles.card}>
            <h3 className={styles.cardHeading}>{cap.heading}</h3>
            <p className={styles.cardBody}>{cap.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
