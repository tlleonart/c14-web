'use client'

import Image from 'next/image'
import { trpc } from '@/trpc/client'
import { useInView } from '@/shared/hooks/useInView'
import styles from './V7Clients.module.css'

export function V7Clients() {
  const { data: clients, isLoading } = trpc.clients.list.useQuery()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  if (isLoading || !clients?.length) return null

  const repeatCount = Math.max(6, Math.ceil(20 / clients.length))
  const marqueeClients = Array.from({ length: repeatCount }, () => clients).flat()

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div
          className={`${styles.header} ${isInView ? styles.headerVisible : ''}`}
        >
          <span className={styles.label}>Clientes</span>
          <h2 className={styles.heading}>
            Empresas que confían en nosotros
          </h2>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.gradientLeft} aria-hidden="true" />
        <div className={styles.gradientRight} aria-hidden="true" />

        <div
          className={`${styles.marquee} ${isInView ? styles.marqueeActive : ''}`}
        >
          <div className={styles.marqueeTrack}>
            {marqueeClients.map((client, index) => (
              <a
                key={`${client._id}-${index}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.clientItem}
                aria-label={`Visitar ${client.name}`}
              >
                {client.imageUrl ? (
                  <Image
                    src={client.imageUrl}
                    alt={client.name}
                    width={160}
                    height={56}
                    className={styles.clientLogo}
                    loading="lazy"
                  />
                ) : (
                  <span className={styles.clientName}>{client.name}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
