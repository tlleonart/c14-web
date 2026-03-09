'use client'

import { Icon } from '@/shared/components/Icon'
import { useInView } from '@/shared/hooks/useInView'
import styles from './Gobernanza.module.css'

const principles = [
  {
    icon: 'shield',
    title: 'Privacidad por diseño',
    description:
      'Los datos de tu empresa nunca se usan para entrenar modelos. Procesamiento local o en tu cloud privada. Cumplimiento con regulaciones de datos del sector.',
  },
  {
    icon: 'dns',
    title: 'Soberanía de datos',
    description:
      'Infraestructura desplegable en tu propia nube. Sin dependencias a terceros para el procesamiento core. Vos controlás dónde viven y cómo se mueven tus datos.',
  },
  {
    icon: 'psychology_alt',
    title: 'Trazabilidad completa',
    description:
      'Cada decisión de cada agente queda registrada con su Chain of Thought completo. Logs versionados, consultables y exportables para auditoría interna o externa.',
  },
  {
    icon: 'verified_user',
    title: 'Validación contra fuente',
    description:
      'Los agentes no generan información — la verifican. Cada output se valida contra la fuente de datos original antes de ser entregado. Si no se puede verificar, no se entrega.',
  },
]

export function Gobernanza() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="gobernanza" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isInView ? styles.visible : ''}`}>
          <span className={styles.label}>Garantías</span>
          <h2 className={styles.heading}>Gobernanza y Compliance</h2>
          <p className={styles.intro}>
            Principios de ingeniería que garantizan que cada sistema opera
            dentro de los límites definidos por tu organización.
          </p>
        </div>

        <div className={styles.grid}>
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`${styles.card} ${isInView ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardIcon}>
                <Icon name={principle.icon} size="md" aria-hidden />
              </div>
              <h3 className={styles.cardTitle}>{principle.title}</h3>
              <p className={styles.cardDescription}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
