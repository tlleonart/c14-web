'use client'

import { useState } from 'react'
import styles from './ClientCard.module.css'

interface ClientCardProps {
  name: string
  imageUrl: string | null
  url: string
}

export function ClientCard({ name, imageUrl, url }: ClientCardProps) {
  const [imageError, setImageError] = useState(false)

  const content = (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={name}
            className={styles.image}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <span className={styles.placeholderIcon}>🏢</span>
          </div>
        )}
      </div>
      <span className={styles.name}>{name}</span>
    </article>
  )

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label={`Visitar sitio de ${name}`}
      >
        {content}
      </a>
    )
  }

  return content
}
