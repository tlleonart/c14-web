import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { convex } from '@/server/convex/client'
import { api } from '../../../../convex/_generated/api'
import { BlogArticle } from '../components/BlogArticle'
import styles from './page.module.css'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  if (!convex) return null
  try {
    return await convex.query(api.content.getBySlug, { slug })
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: 'Artículo no encontrado | Carbono14' }
  }

  return {
    title: `${post.title} | Blog Carbono14`,
    description: post.summary ?? undefined,
    alternates: {
      canonical: `https://carbono-14.net/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary ?? undefined,
      url: `https://carbono-14.net/blog/${slug}`,
      type: 'article',
      locale: 'es_AR',
      siteName: 'Carbono14',
      publishedTime: post.publishedAt
        ? new Date(post.publishedAt).toISOString()
        : undefined,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary ?? undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Carbono14',
      url: 'https://carbono-14.net',
    },
    datePublished: post.publishedAt
      ? new Date(post.publishedAt).toISOString()
      : undefined,
    url: `https://carbono-14.net/blog/${slug}`,
    mainEntityOfPage: `https://carbono-14.net/blog/${slug}`,
  }

  return (
    <div className={styles.page}>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BlogArticle slug={slug} />
      </main>
      <Footer />
    </div>
  )
}
