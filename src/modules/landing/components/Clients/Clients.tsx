'use client'

import { trpc } from '@/trpc/client'
import { ClientCard } from './ClientCard'
import styles from './Clients.module.css'

export function Clients() {
  const { data: clients, isLoading } = trpc.clients.list.useQuery()

  if (isLoading || !clients || clients.length === 0) {
    return null
  }

  return (
    <section id="clientes" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Clientes</h2>
          <p className={styles.subtitle}>
            Empresas que confían en nosotros para impulsar su transformación digital
          </p>
        </div>
        <div className={styles.grid}>
          {clients.map((client) => (
            <ClientCard
              key={client._id}
              name={client.name}
              imageUrl={client.imageUrl}
              url={client.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
