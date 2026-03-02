import styles from './AuroraBackground.module.css'

export function AuroraBackground() {
  return (
    <div className={styles.aurora} aria-hidden="true">
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
    </div>
  )
}
