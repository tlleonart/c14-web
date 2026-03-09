'use client'

import { useInView } from '@/shared/hooks/useInView'
import styles from './ElCuaderno.module.css'

const articles = [
  {
    featured: true,
    title: 'Arquitecturas de agentes: del LLM wrapper al sistema determinista',
    excerpt:
      'Por qué envolver un LLM en un prompt no es construir un agente. Analizamos las diferencias técnicas entre un chatbot generativo y un sistema multi-agente con contratos de operación, validación de datos y auditoría de razonamiento.',
    readTime: '12 min',
    tag: 'Arquitectura',
  },
  {
    featured: false,
    title: 'Testing de IA en producción: estrategias de validación continua',
    excerpt:
      'Cómo implementar pipelines de testing para agentes inteligentes que operan con datos reales, incluyendo detección de drift y regression testing automatizado.',
    readTime: '8 min',
    tag: 'Engineering',
  },
  {
    featured: false,
    title: 'Integración de agentes con ERPs y sistemas legacy',
    excerpt:
      'Patrones de integración para conectar agentes autónomos con SAP, Oracle, y sistemas propietarios sin comprometer la estabilidad del stack existente.',
    readTime: '6 min',
    tag: 'Integración',
  },
]

export function ElCuaderno() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const featured = articles.find((a) => a.featured)
  const secondary = articles.filter((a) => !a.featured)

  return (
    <section id="cuaderno" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isInView ? styles.visible : ''}`}>
          <span className={styles.label}>Publicaciones</span>
          <h2 className={styles.heading}>Technical Journal</h2>
        </div>

        {featured && (
          <article
            className={`${styles.featured} ${isInView ? styles.visible : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className={styles.featuredMeta}>
              <span className={styles.tag}>{featured.tag}</span>
              <span className={styles.readTime}>{featured.readTime}</span>
            </div>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
            <span className={styles.readMore}>
              Leer artículo <span aria-hidden="true">&rarr;</span>
            </span>
          </article>
        )}

        <div className={styles.secondaryGrid}>
          {secondary.map((article, index) => (
            <article
              key={article.title}
              className={`${styles.secondaryCard} ${isInView ? styles.visible : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={styles.secondaryMeta}>
                <span className={styles.tag}>{article.tag}</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>
              <h3 className={styles.secondaryTitle}>{article.title}</h3>
              <p className={styles.secondaryExcerpt}>{article.excerpt}</p>
              <span className={styles.readMore}>
                Leer <span aria-hidden="true">&rarr;</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
