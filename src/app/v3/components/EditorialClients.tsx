'use client'

import { useState } from 'react'
import { trpc } from '@/trpc/client'
import { useInView } from '@/shared/hooks/useInView'
import styles from './EditorialClients.module.css'

function ClientCard({
  client,
}: {
  client: { _id: string; name: string; imageUrl: string | null; url: string }
}) {
  const [imageError, setImageError] = useState(false)
  const initial = client.name.charAt(0).toUpperCase()

  const avatar = (
    <div className={styles.avatar}>
      {client.imageUrl && !imageError ? (
        <img
          src={client.imageUrl}
          alt={client.name}
          className={styles.avatarImg}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className={styles.avatarInitial}>{initial}</span>
      )}
    </div>
  )

  const content = (
    <>
      {avatar}
      <span className={styles.clientName}>{client.name}</span>
    </>
  )

  if (client.url) {
    return (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        {content}
      </a>
    )
  }

  return <div className={styles.card}>{content}</div>
}

export function EditorialClients() {
  const { data, isLoading } = trpc.clients.list.useQuery()
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  if (isLoading || !data || data.length === 0) {
    return null
  }

  return (
    <section id="clientes" className={styles.section}>
      <div className={styles.container}>
        <div
          ref={ref}
          className={`${styles.content} ${isInView ? styles.contentVisible : ''}`}
        >
          <p className={styles.label}>Clientes</p>
          <h2 className={styles.heading}>Socios de confianza en innovación</h2>
          <div className={styles.grid}>
            {data.map((client) => (
              <ClientCard key={client._id} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
