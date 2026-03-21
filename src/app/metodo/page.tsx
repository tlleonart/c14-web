import type { Metadata } from 'next'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { MetodoIntro } from './components/MetodoIntro'
import { Timeline } from './components/Timeline'
import { Principios } from './components/Principios'
import { MetodoCta } from './components/MetodoCta'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Cómo trabajamos — Proceso de IA operativa | Carbono14',
  description:
    'Cuatro fases para minimizar riesgo: validación, especificación formal, implementación con trazabilidad y monitoreo continuo. Cero improvisación.',
  alternates: {
    canonical: 'https://carbono-14.net/metodo',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cómo trabajamos — Proceso de IA operativa | Carbono14',
    description:
      'Cuatro fases para minimizar riesgo: validación, especificación formal, implementación con trazabilidad y monitoreo continuo. Cero improvisación.',
    url: 'https://carbono-14.net/metodo',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Carbono14',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo trabajamos — Proceso de IA operativa | Carbono14',
    description:
      'Cuatro fases para minimizar riesgo: validación, especificación formal, implementación con trazabilidad y monitoreo continuo. Cero improvisación.',
  },
}

export default function MetodoPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <MetodoIntro />
        <Timeline />
        <Principios />
        <MetodoCta />
      </main>
      <Footer />
    </div>
  )
}
