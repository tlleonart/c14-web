import type { Metadata } from 'next'
import { MinimalHeader } from '@/modules/campaign/components/MinimalHeader/MinimalHeader'
import { MinimalFooter } from '@/modules/campaign/components/MinimalFooter/MinimalFooter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Tu guía está en camino — Carbono14',
  description: 'Tu white paper de IA Generativa vs IA Operativa está en camino. Revisá tu inbox.',
  robots: { index: false, follow: false },
}

export default function WhitePaperGraciasPage() {
  return (
    <>
      <MinimalHeader />

      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="24" cy="24" r="22" stroke="#60c878" strokeWidth="2" />
              <path
                d="M14 24.5L20.5 31L34 18"
                stroke="#60c878"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className={styles.label}>¡Listo!</span>

          <h1 className={styles.title}>¡Tu guía está en camino!</h1>

          <p className={styles.body}>
            Revisá tu bandeja de entrada — tu white paper debería llegar en los próximos minutos.
          </p>

          <p className={styles.bodyMuted}>
            ¿No llegó? Revisá tu carpeta de spam. Si necesitás ayuda, escribinos a{' '}
            <a href="mailto:contacto@carbono-14.net" className={styles.link}>
              contacto@carbono-14.net
            </a>
          </p>
        </div>
      </section>

      <MinimalFooter />
    </>
  )
}
