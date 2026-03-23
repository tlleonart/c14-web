'use client'

import { trpc } from '@/trpc/client'
import { BlogCard } from './BlogCard'
import type { BlogPost } from '../types'
import styles from '../page.module.css'

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

export function BlogList() {
  const { data: rawPosts, isLoading } = trpc.blog.listPublished.useQuery()

  if (isLoading) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyText}>Cargando artículos...</p>
      </div>
    )
  }

  const posts = (rawPosts ?? []).map(mapConvexToPost)

  if (posts.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyText}>
          Estamos preparando nuestros primeros artículos.
        </p>
        <p className={styles.emptySubtext}>
          Suscribite al newsletter para ser el primero en leerlos.
        </p>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
