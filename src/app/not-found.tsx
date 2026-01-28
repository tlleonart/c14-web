import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Página no encontrada</h2>
      <p className={styles.message}>Lo sentimos, la página que buscas no existe.</p>
      <Link href="/" className={styles.link}>
        Volver al inicio
      </Link>
    </div>
  )
}
