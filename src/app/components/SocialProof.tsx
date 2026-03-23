'use client'

import { trpc } from '@/trpc/client'
import styles from './SocialProof.module.css'

export function SocialProof() {
  const { data: clients } = trpc.clients.list.useQuery()

  return (
    <section id="clientes" className={styles.section} aria-label="Clientes y tecnología">
      <div className="container">
        {/* Layer 1: Client Trust */}
        <p className={styles.title}>Confían en nosotros</p>

        <div className={styles.logosRow}>
          {clients && clients.length > 0 ? (
            clients.map((client) => (
              <div key={client._id} className={styles.logoItem}>
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
                      alt={`Logo de ${client.name}`}
                      className={styles.logoImage}
                      loading="lazy"
                      width={160}
                      height={52}
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
              <div className={styles.logoPlaceholder}>Zephyra</div>
            </>
          )}
        </div>

        {/* Separator */}
        <div className={styles.layerSeparator} />

        {/* Layer 2: Technology Trust */}
        <p className={styles.techLabel}>Construido con</p>
        <div className={styles.techLogosRow}>
          <div className={styles.techLogoItem}>
            <img src="/images/logos/logo-anthropic.svg" alt="Logo de Anthropic" />
          </div>
          <div className={styles.techLogoItem}>
            <img src="/images/logos/logo-n8n.svg" alt="Logo de n8n" />
          </div>
          <div className={styles.techLogoItem}>
            <img src="/images/logos/logo-vercel.svg" alt="Logo de Vercel" />
          </div>
        </div>

        {/* Metrics line */}
        <div className={styles.metrics}>
          <span>Validación gratuita en &lt;48h</span>
        </div>
      </div>
    </section>
  )
}
