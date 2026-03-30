import styles from './MinimalFooter.module.css'

export function MinimalFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span aria-label="Carbono14">
          <span className={styles.logoText}>Carbono</span>
          <span className={styles.logoAccent}>14</span>
        </span>
        <span className={styles.legal}>
          © 2026 Carbono14.{' '}
          <a href="https://carbono-14.net/privacidad" className={styles.link}>
            Política de privacidad.
          </a>
        </span>
      </div>
    </footer>
  )
}
