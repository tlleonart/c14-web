import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '../data'
import { CATEGORY_LABELS, CATEGORY_STYLES } from '../types'
import { BlogCard } from '../components/BlogCard'
import styles from './page.module.css'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Blog Carbono14`,
    description: post.excerpt,
    alternates: {
      canonical: `https://carbono-14.net/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://carbono-14.net/blog/${post.slug}`,
      type: 'article',
      locale: 'es_AR',
      siteName: 'Carbono14',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const relatedPosts = getRelatedPosts(slug)
  const categoryStyle = CATEGORY_STYLES[post.category]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Carbono14',
      url: 'https://carbono-14.net',
    },
    datePublished: post.publishedAt,
    url: `https://carbono-14.net/blog/${post.slug}`,
    mainEntityOfPage: `https://carbono-14.net/blog/${post.slug}`,
  }

  // Note: content is authored internally by Carbono14 team (Alexia agent),
  // not user-generated. Safe to render as HTML. If content source changes
  // to user input, add DOMPurify sanitization.
  return (
    <div className={styles.page}>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Article header */}
        <header className={styles.articleHeader}>
          <div className="container">
            <span
              className={styles.category}
              style={{
                background: categoryStyle.bg,
                color: categoryStyle.color,
                border: categoryStyle.border,
              }}
            >
              {CATEGORY_LABELS[post.category]}
            </span>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.subtitle}>{post.excerpt}</p>
            <div className={styles.metaBar}>
              <span className={styles.author}>{post.author}</span>
              <span className={styles.separator}>·</span>
              <span className={styles.date}>
                {new Date(post.publishedAt).toLocaleDateString('es-AR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className={styles.separator}>·</span>
              <span className={styles.readTime}>{post.readTime} min de lectura</span>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className={styles.article}>
          <div
            className={styles.prose}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaHeading}>
                ¿Querés saber si tu proceso es automatizable?
              </h3>
              <p className={styles.ctaBody}>
                Validamos tu proceso en menos de 48 horas — sin compromiso.
              </p>
              <a href="/#contacto" className={styles.ctaButton}>
                Validar mi proceso
              </a>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className={styles.related}>
            <div className="container">
              <h2 className={styles.relatedHeading}>Artículos relacionados</h2>
              <div className={styles.relatedGrid}>
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
