'use client'

import { trpc } from '@/trpc/client'
import { BlogCard } from './BlogCard'
import type { BlogPost } from '../types'
import { getCategoryStyle, getCategoryLabel } from '../types'
import styles from '../[slug]/page.module.css'

function mapConvexToPost(item: {
  slug: string
  title: string
  summary?: string | null
  body?: string | null
  category?: string | null
  author: string
  publishedAt?: number | null
}): BlogPost {
  return {
    slug: item.slug,
    title: item.title,
    excerpt: item.summary ?? '',
    content: item.body ?? '',
    category: (item.category as BlogPost['category']) ?? 'ia-operativa',
    author: item.author,
    publishedAt: item.publishedAt
      ? new Date(item.publishedAt).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
    readTime: Math.max(1, Math.ceil((item.body?.length ?? 0) / 1500)),
  }
}

interface BlogArticleProps {
  slug: string
}

export function BlogArticle({ slug }: BlogArticleProps) {
  const { data: rawPost, isLoading } = trpc.blog.getBySlug.useQuery({ slug })
  const { data: rawAllPosts } = trpc.blog.listPublished.useQuery()

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 0' }}>
        <p>Cargando artículo...</p>
      </div>
    )
  }

  if (!rawPost) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 0' }}>
        <p>Artículo no encontrado.</p>
      </div>
    )
  }

  const post = mapConvexToPost(rawPost)
  const allPosts = (rawAllPosts ?? []).map(mapConvexToPost)
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === post.category ? 1 : 0
      const bMatch = b.category === post.category ? 1 : 0
      return bMatch - aMatch
    })
    .slice(0, 3)

  const categoryStyle = getCategoryStyle(post.category)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Carbono14', url: 'https://carbono-14.net' },
    datePublished: post.publishedAt,
    url: `https://carbono-14.net/blog/${post.slug}`,
    mainEntityOfPage: `https://carbono-14.net/blog/${post.slug}`,
  }

  // Content is authored internally by Carbono14 team (Alexia agent), not user-generated.
  // If content source changes to user input, add DOMPurify sanitization.
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            {getCategoryLabel(post.category)}
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

      <article className={styles.article}>
        <div
          className={styles.prose}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

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
    </>
  )
}
