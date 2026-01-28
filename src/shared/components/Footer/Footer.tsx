import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Carbono</span>
            <span className={styles.logoAccent}>14</span>
          </Link>
          <p className={styles.tagline}>
            Soluciones de IA y desarrollo de software para impulsar tu negocio.
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Servicios</h4>
            <a href="#servicios" className={styles.link}>
              Automatización con IA
            </a>
            <a href="#servicios" className={styles.link}>
              Desarrollo de IA
            </a>
            <a href="#servicios" className={styles.link}>
              Desarrollo Web
            </a>
            <a href="#servicios" className={styles.link}>
              Desarrollo de Software
            </a>
          </div>
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Contacto</h4>
            <a href="#contacto" className={styles.link}>
              Formulario de contacto
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Carbono14. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
