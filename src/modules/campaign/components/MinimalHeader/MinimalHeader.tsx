import styles from './MinimalHeader.module.css'

export function MinimalHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="https://carbono-14.net" className={styles.logo} aria-label="Carbono14 — Inicio">
          <span className={styles.logoText}>Carbono</span>
          <span className={styles.logoAccent}>14</span>
        </a>
      </div>
    </header>
  )
}
