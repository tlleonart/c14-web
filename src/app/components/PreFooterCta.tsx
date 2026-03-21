import styles from './PreFooterCta.module.css'

export function PreFooterCta() {
  return (
    <section className={styles.section}>
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <div className={styles.text}>
          <h3 className={styles.heading}>
            ¿Listo para pasar de experimental a operativo?
          </h3>
          <p className={styles.subtitle}>
            Validamos tu proceso en menos de 48 horas — sin compromiso
          </p>
        </div>
        <a href="#contacto" className={styles.ctaButton}>
          Validar mi proceso
        </a>
      </div>
    </section>
  )
}
