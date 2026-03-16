import styles from './Testimonios.module.css'

const TESTIMONIALS = [
  {
    quote: 'Intentamos tres soluciones de IA generativa y ninguna superó las validaciones de nuestro equipo de compliance. Con Carbono14, el primer agente pasó auditoría en la primera revisión. La diferencia es la arquitectura.',
    name: 'Marcos Delgado',
    role: 'CTO · FINDATA SA',
    photo: '/images/testimonial-marcos.jpg',
    featured: false,
  },
  {
    quote: 'El agente de inventario redujo nuestro tiempo de procesamiento de órdenes de reposición en un 78%. Pero lo más valioso es la trazabilidad: podemos mostrarle a dirección exactamente qué decidió el sistema y por qué.',
    name: 'Carolina Ibáñez',
    role: 'VP ENGINEERING · MERIDIAN',
    photo: '/images/testimonial-carolina.jpg',
    featured: true,
  },
  {
    quote: 'La fase de auditoría técnica fue reveladora. En 48 horas identificaron tres procesos que nosotros no habíamos considerado automatizables. El ROI del proyecto se pagó en el segundo mes de operación.',
    name: 'Rodrigo Salas',
    role: 'CEO · ATLAS OPS',
    photo: '/images/testimonial-rodrigo.jpg',
    featured: false,
  },
]

const METRICS = [
  { value: '78%', label: 'Reducción tiempo operativo' },
  { value: '3.4x', label: 'ROI promedio (año 1)' },
  { value: '100%', label: 'Auditorías de compliance ok' },
  { value: '<2 mes', label: 'Tiempo promedio de ROI' },
]

export function Testimonios() {
  return (
    <section id="testimonios" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Testimonios</span>
          <h2 className={styles.heading}>Lo que dicen los CTOs.</h2>
          <p className={styles.headerDescription}>
            Decisores técnicos que migraron de IA generativa a IA operativa con
            resultados medibles en producción.
          </p>
        </div>

        <div className={styles.testimonialGrid}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`${styles.testimonialCard} ${t.featured ? styles.featured : ''}`}
            >
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className={styles.author}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={`Foto de ${t.name}`}
                  className={styles.authorPhoto}
                  loading="lazy"
                  width={40}
                  height={40}
                />
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics strip */}
        <div className={styles.metricsStrip}>
          {METRICS.map((m) => (
            <div key={m.label} className={styles.metric}>
              <div className={styles.metricValue}>{m.value}</div>
              <div className={styles.metricLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
