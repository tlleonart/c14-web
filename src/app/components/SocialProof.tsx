'use client'

import { trpc } from '@/trpc/client'
import styles from './SocialProof.module.css'

export function SocialProof() {
  const { data: clients } = trpc.clients.list.useQuery()

  return (
    <section id="clientes" className={styles.section}>
      <div className="container">
        <p className={styles.title}>
          Empresas que confían en nosotros
        </p>

        <div className={styles.logosRow}>
          {clients && clients.length > 0 ? (
            clients.map((client, i) => (
              <div key={client._id} className={styles.logoItem}>
                {i > 0 && <div className={styles.separator} />}
                {client.imageUrl ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.logoLink}
                    aria-label={`Visitar sitio de ${client.name}`}
                  >
                    <img
                      src={client.imageUrl}
                      alt={client.name}
                      className={styles.logoImage}
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <div className={styles.logoPlaceholder}>
                    {client.name}
                  </div>
                )}
              </div>
            ))
          ) : (
            <>
              <div className={styles.logoPlaceholder}>Aladil</div>
              <div className={styles.separator} />
              <div className={styles.logoPlaceholder}>Zephyra</div>
            </>
          )}
        </div>

        <div className={styles.metrics}>
          <span>
            Especialistas en IA operativa y automatización de procesos ·
            Análisis técnico gratuito en &lt;48h
          </span>
        </div>
      </div>
    </section>
  )
}
