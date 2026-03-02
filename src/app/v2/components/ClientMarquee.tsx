'use client'

import { useState } from 'react'
import { trpc } from '@/trpc/client'
import styles from './ClientMarquee.module.css'

function MarqueeItem({
  client,
}: {
  client: { _id: string; name: string; imageUrl: string | null; url: string }
}) {
  const [imageError, setImageError] = useState(false)

  const logo = (
    <div className={styles.logoWrap}>
      {client.imageUrl && !imageError ? (
        <img
          src={client.imageUrl}
          alt={client.name}
          className={styles.logo}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={styles.placeholder}>{client.name.charAt(0)}</div>
      )}
    </div>
  )

  const content = (
    <>
      {logo}
      <span className={styles.clientName}>{client.name}</span>
    </>
  )

  if (client.url) {
    return (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.clientItem}
      >
        {content}
      </a>
    )
  }

  return <div className={styles.clientItem}>{content}</div>
}

export function ClientMarquee() {
  const { data: clients, isLoading } = trpc.clients.list.useQuery()

  if (isLoading || !clients || clients.length === 0) {
    return null
  }

  const duplicated = [...clients, ...clients]

  return (
    <section id="clientes" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Empresas que conf&iacute;an en nosotros</h2>
      </div>

      <div className={styles.marqueeWrap}>
        <div
          className={styles.marqueeTrack}
          style={{ animationDuration: `${clients.length * 3}s` }}
        >
          {duplicated.map((client, index) => (
            <MarqueeItem key={`${client._id}-${index}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}
