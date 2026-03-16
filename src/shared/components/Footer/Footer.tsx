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
  { label: 'Casos de éxito', href: '#testimonios' },
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
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="GitHub">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="mailto:hola@carbono-14.net" className={styles.socialIcon} aria-label="Email">
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
            <a href="#" className={styles.legalLink}>
              Política de privacidad
            </a>
            <a href="#" className={styles.legalLink}>
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
