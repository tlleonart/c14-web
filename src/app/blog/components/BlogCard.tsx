import Link from 'next/link'
import type { BlogPost } from '../types'
import { getCategoryStyle, getCategoryLabel } from '../types'
import styles from './BlogCard.module.css'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const categoryStyle = getCategoryStyle(post.category)

  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      {post.heroImage && (
        <div className={styles.imageWrapper}>
          <img src={post.heroImage} alt="" className={styles.image} loading="lazy" />
        </div>
      )}
      <div className={styles.body}>
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
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.footer}>
          <span className={styles.author}>{post.author}</span>
          <div className={styles.meta}>
            <span className={styles.date}>
              {new Date(post.publishedAt).toLocaleDateString('es-AR', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
            <span className={styles.separator}>·</span>
            <span className={styles.readTime}>{post.readTime} min</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
