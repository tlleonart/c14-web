import type { Metadata } from 'next'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { getAllPosts } from './data'
import { BlogCard } from './components/BlogCard'
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
  const posts = getAllPosts()

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
            {posts.length > 0 ? (
              <div className={styles.grid}>
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <p className={styles.emptyText}>
                  Estamos preparando nuestros primeros artículos.
                </p>
                <p className={styles.emptySubtext}>
                  Suscribite al newsletter para ser el primero en leerlos.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
