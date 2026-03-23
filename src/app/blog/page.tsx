import type { Metadata } from 'next'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { BlogList } from './components/BlogList'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog — Insights sobre IA operativa | Carbono14',
  description:
    'Artículos técnicos, casos de estudio y guías prácticas sobre IA operativa, gobernanza de agentes y automatización empresarial.',
  alternates: {
    canonical: 'https://carbono-14.net/blog',
  },
  openGraph: {
    title: 'Blog — Insights sobre IA operativa | Carbono14',
    description:
      'Artículos técnicos, casos de estudio y guías prácticas sobre IA operativa, gobernanza de agentes y automatización empresarial.',
    url: 'https://carbono-14.net/blog',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Carbono14',
  },
}

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main id="main-content">
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.label}>BLOG</span>
            <h1 className={styles.heading}>Insights sobre IA operativa</h1>
            <p className={styles.subtitle}>
              Artículos técnicos, casos de estudio y guías prácticas.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className="container">
            <BlogList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
