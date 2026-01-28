import Link from 'next/link'
import { Button } from '@/shared/components/Button'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Carbono</span>
          <span className={styles.logoAccent}>14</span>
        </Link>
        <nav className={styles.nav}>
          <a href="#servicios" className={styles.navLink}>
            Servicios
          </a>
          <a href="#contacto" className={styles.navLink}>
            Contacto
          </a>
        </nav>
        <a href="#contacto">
          <Button size="sm">Hablemos</Button>
        </a>
      </div>
    </header>
  )
}
