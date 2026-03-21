import { NewsletterForm } from './NewsletterForm'
import styles from './Footer.module.css'

const SERVICE_LINKS = [
  { label: 'Agente de Inventario', href: '#agentes' },
  { label: 'Agente Financiero', href: '#agentes' },
  { label: 'Agente de Documentación', href: '#agentes' },
  { label: 'Orquestador Multi-Agente', href: '#agentes' },
  { label: 'Agentes a medida', href: '#contacto' },
]

const COMPANY_LINKS = [
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Gobernanza', href: '#gobernanza' },
  { label: 'Contacto', href: '#contacto' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <a href="#top" className={styles.logo}>
              <span className={styles.logoText}>Carbono</span>
              <span className={styles.logoAccent}>14</span>
            </a>
            <p className={styles.tagline}>
              Diseñamos e implementamos arquitecturas de agentes autónomos con
              determinismo completo y gobernanza empresarial.
            </p>
            <div className={styles.social}>
              <a href="mailto:info@carbono-14.net" className={styles.socialIcon} aria-label="Email">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <div className={styles.columnTitle}>Servicios</div>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <div className={styles.columnTitle}>Empresa</div>
            <ul className={styles.linkList}>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <div className={styles.columnTitle}>Newsletter</div>
            <p className={styles.newsletterDescription}>
              Insights sobre IA operativa, gobernanza de agentes y automatización
              empresarial.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 Carbono14. Todos los derechos reservados. Buenos Aires,
            Argentina.
          </p>
          <div className={styles.legalLinks}>
            <a href="/privacy-policy" className={styles.legalLink}>
              Política de privacidad
            </a>
            <a href="/terms-of-use" className={styles.legalLink}>
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
