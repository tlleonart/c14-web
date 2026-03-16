import type { Metadata } from 'next'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { ContactoIntro } from './components/ContactoIntro'
import { ContactoClient } from './components/ContactoClient'
import { ProcessSidebar } from './components/ProcessSidebar'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contacto — Auditoría técnica de IA | Carbono14',
  description:
    'Contanos qué proceso querés automatizar. Te respondemos con un análisis técnico preliminar en 48 horas hábiles. Sin compromiso.',
  alternates: {
    canonical: 'https://carbono-14.net/contacto',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contacto — Auditoría técnica de IA | Carbono14',
    description:
      'Contanos qué proceso querés automatizar. Te respondemos con un análisis técnico preliminar en 48 horas hábiles. Sin compromiso.',
    url: 'https://carbono-14.net/contacto',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Carbono14',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto — Auditoría técnica de IA | Carbono14',
    description:
      'Contanos qué proceso querés automatizar. Te respondemos con un análisis técnico preliminar en 48 horas hábiles. Sin compromiso.',
  },
}

export default function ContactoPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ContactoIntro />
        <div className={styles.grid}>
          <div className={styles.formColumn}>
            <ContactoClient />
          </div>
          <div className={styles.sidebarColumn}>
            <ProcessSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
