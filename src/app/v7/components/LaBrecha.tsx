'use client'

import { useInView } from '@/shared/hooks/useInView'
import styles from './LaBrecha.module.css'

const generativa = [
  'Outputs probabilísticos — la misma pregunta, distintas respuestas',
  'Sin trazabilidad: imposible auditar por qué tomó una decisión',
  'Alucinaciones inherentes al modelo de lenguaje',
  'Requiere supervisión humana constante para validar resultados',
]

const operativa = [
  'Ejecución determinista — mismo input, mismo output, siempre',
  'Chain of Thought trazable y versionado en cada operación',
  'Validación contra fuentes de datos reales antes de responder',
  'Escalamiento automático a humanos cuando excede sus reglas',
]

export function LaBrecha() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="brecha" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isInView ? styles.visible : ''}`}>
          <span className={styles.label}>El Problema</span>
          <h2 className={styles.heading}>
            IA Generativa <span className={styles.vs}>vs.</span> IA Operativa
          </h2>
        </div>

        <div className={styles.comparison}>
          <div
            className={`${styles.column} ${styles.columnGen} ${isInView ? styles.visible : ''}`}
          >
            <div className={styles.columnHeader}>
              <span className={styles.columnLabel}>IA Generativa</span>
              <span className={styles.columnSub}>LLMs sin restricciones</span>
            </div>
            <ul className={styles.list}>
              {generativa.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.cross} aria-hidden="true">{'×'}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.divider} aria-hidden="true">
            <div className={styles.dividerLine} />
          </div>

          <div
            className={`${styles.column} ${styles.columnOp} ${isInView ? styles.visible : ''}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className={styles.columnHeader}>
              <span className={styles.columnLabel}>IA Operativa</span>
              <span className={styles.columnSub}>Agentes bajo contrato</span>
            </div>
            <ul className={styles.list}>
              {operativa.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.check} aria-hidden="true">{'✓'}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote
          className={`${styles.quote} ${isInView ? styles.visible : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <p>
            &ldquo;Cada agente que construimos opera bajo un contrato formal:
            reglas de negocio definidas, umbrales de confianza configurables y
            protocolos de escalamiento explícitos. Si el dato no es verificable,
            el agente se detiene.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}
