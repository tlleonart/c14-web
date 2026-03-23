import type { Metadata } from 'next'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { JsonLd } from '@/shared/components/JsonLd'
import { Hero } from './components/Hero'
import { ScrollProgress } from './components/ScrollProgress'
import { BackToTop } from './components/BackToTop'
import { SocialProof } from './components/SocialProof'
import { Problema } from './components/Problema'
import { Agentes } from './components/Agentes'
import { Metodologia } from './components/Metodologia'
import { Gobernanza } from './components/Gobernanza'
import { PorQue } from './components/PorQue'
import { ContactoSection } from './components/ContactoSection'
import { PreFooterCta } from './components/PreFooterCta'
import { InlineNewsletter } from './components/InlineNewsletter'
import { FadeIn } from '@/shared/components/FadeIn'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Carbono14 — IA operativa determinista para empresas',
  description:
    'Agentes de IA con reglas formales, resultados verificables y escalamiento a humanos. Para operaciones donde equivocarse no es opción. Validación gratuita en 48h.',
  alternates: {
    canonical: 'https://carbono-14.net/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Carbono14 — IA operativa determinista para empresas',
    description:
      'Agentes de IA con reglas formales, resultados verificables y escalamiento a humanos. Para operaciones donde equivocarse no es opción. Validación gratuita en 48h.',
    url: 'https://carbono-14.net/',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Carbono14',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carbono14 — IA operativa determinista para empresas',
    description:
      'Agentes de IA con reglas formales, resultados verificables y escalamiento a humanos. Para operaciones donde equivocarse no es opción. Validación gratuita en 48h.',
  },
}

export default function Home() {
  return (
    <div className={styles.page}>
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <FadeIn><SocialProof /></FadeIn>
        <FadeIn><Problema /></FadeIn>
        <FadeIn><InlineNewsletter /></FadeIn>
        <FadeIn><Agentes /></FadeIn>
        <FadeIn><Metodologia /></FadeIn>
        <FadeIn><Gobernanza /></FadeIn>
        <FadeIn><PorQue /></FadeIn>
        <FadeIn><ContactoSection /></FadeIn>
        <FadeIn><PreFooterCta /></FadeIn>
      </main>
      <Footer />
      <BackToTop />
      <JsonLd />
    </div>
  )
}
