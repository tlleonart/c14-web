import type { Metadata } from 'next'
import { MinimalHeader } from '@/modules/campaign/components/MinimalHeader/MinimalHeader'
import { MinimalFooter } from '@/modules/campaign/components/MinimalFooter/MinimalFooter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Solicitud recibida — Carbono14',
  description: 'Tu solicitud de auditoría fue recibida. Nos ponemos en contacto en menos de 48 horas.',
  robots: { index: false, follow: false },
}

export default function AuditoriaGraciasPage() {
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

          <span className={styles.label}>Solicitud recibida</span>

          <h1 className={styles.title}>
            Te respondemos en menos de 48 horas.
          </h1>

          <p className={styles.body}>
            Recibimos tu solicitud de auditoría. En menos de 48 horas hábiles te vamos a contactar
            con un diagnóstico técnico inicial de tu proceso.
          </p>

          <p className={styles.bodyMuted}>
            Si querés adelantar algo o tenés preguntas, escribinos a{' '}
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
