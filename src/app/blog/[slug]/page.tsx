import type { Metadata } from 'next'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { BlogArticle } from '../components/BlogArticle'
import styles from './page.module.css'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params

  return {
    title: `Blog | Carbono14`,
    alternates: {
      canonical: `https://carbono-14.net/blog/${slug}`,
    },
    openGraph: {
      url: `https://carbono-14.net/blog/${slug}`,
      type: 'article',
      locale: 'es_AR',
      siteName: 'Carbono14',
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  return (
    <div className={styles.page}>
      <Header />
      <main id="main-content">
        <BlogArticle slug={slug} />
      </main>
      <Footer />
    </div>
  )
}
