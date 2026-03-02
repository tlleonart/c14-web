'use client'

import { useState } from 'react'
import { trpc } from '@/trpc/client'
import { useInView } from '@/shared/hooks/useInView'
import styles from './GlassClients.module.css'

interface Client {
  _id: string
  name: string
  imageUrl: string | null
  url: string
}

function ClientCard({ client, index }: { client: Client; index: number }) {
  const [imageError, setImageError] = useState(false)
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  const initial = client.name.charAt(0).toUpperCase()

  const content = (
    <>
      <div className={styles.logoWrap}>
        {!imageError && client.imageUrl ? (
          <img
            src={client.imageUrl}
            alt={client.name}
            className={styles.logo}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className={styles.fallback} aria-hidden="true">
            {initial}
          </div>
        )}
      </div>
      <span className={styles.clientName}>{client.name}</span>
    </>
  )

  const cardClassName = `${styles.card} ${styles.revealCard} ${isInView ? styles.revealVisible : ''}`
  const delay = `${index * 0.1}s`

  if (client.url) {
    return (
      <div ref={ref}>
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClassName}
          style={{ transitionDelay: delay }}
        >
          {content}
        </a>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cardClassName}
      style={{ transitionDelay: delay }}
    >
      {content}
    </div>
  )
}

export function GlassClients() {
  const { data, isLoading } = trpc.clients.list.useQuery()

  if (isLoading || !data || data.length === 0) {
    return null
  }

  return (
    <section id="clientes" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Empresas que confían en nosotros
        </h2>
        <div className={styles.grid}>
          {data.map((client, index) => (
            <ClientCard key={client._id} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
