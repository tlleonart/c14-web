import type { Metadata } from 'next'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { ServiciosIntro } from './components/ServiciosIntro'
import { Capacidades } from './components/Capacidades'
import { Garantias } from './components/Garantias'
import { ServiciosCta } from './components/ServiciosCta'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Servicios de IA operativa — Carbono14',
  description:
    'Agentes operativos, consultoría de IA, monitoreo continuo y desarrollo a medida. Todo lo que construimos es determinista, trazable y auditable.',
  alternates: {
    canonical: 'https://carbono-14.net/servicios',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Servicios de IA operativa — Carbono14',
    description:
      'Agentes operativos, consultoría de IA, monitoreo continuo y desarrollo a medida. Todo lo que construimos es determinista, trazable y auditable.',
    url: 'https://carbono-14.net/servicios',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Carbono14',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de IA operativa — Carbono14',
    description:
      'Agentes operativos, consultoría de IA, monitoreo continuo y desarrollo a medida. Todo lo que construimos es determinista, trazable y auditable.',
  },
}

export default function ServiciosPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ServiciosIntro />
        <Capacidades />
        <Garantias />
        <ServiciosCta />
      </main>
      <Footer />
    </div>
  )
}
