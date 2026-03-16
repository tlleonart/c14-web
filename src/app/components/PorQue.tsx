import styles from './PorQue.module.css'

const CARDS = [
  {
    title: 'Equipo AI-first',
    description: 'Construimos IA con IA. Nuestra fábrica interna de agentes nos permite entregar soluciones más rápido que consultoras tradicionales.',
    icon: 'agents',
  },
  {
    title: 'Expertise técnico profundo',
    description: 'Especialistas en arquitectura de agentes autónomos, workflows n8n y automatización de procesos empresariales. No somos generalistas — esto es lo único que hacemos.',
    icon: 'code',
  },
  {
    title: 'Acceso directo al fundador',
    description: 'Cada proyecto tiene acceso directo a nuestro fundador y líder técnico. Sin consultores junior, sin cadenas de delegación. Quien diseña la solución es quien la implementa.',
    icon: 'founder',
  },
]

function IconAgents() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="2.5"/>
      <circle cx="22" cy="6" r="2.5"/>
      <circle cx="14" cy="14" r="3" strokeWidth="1.8"/>
      <circle cx="6" cy="22" r="2.5"/>
      <circle cx="22" cy="22" r="2.5"/>
      <line x1="8.2" y1="7.5" x2="11.5" y2="12"/>
      <line x1="19.8" y1="7.5" x2="16.5" y2="12"/>
      <line x1="8.2" y1="20.5" x2="11.5" y2="16"/>
      <line x1="19.8" y1="20.5" x2="16.5" y2="16"/>
    </svg>
  )
}

function IconCode() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <polyline points="8,10 4,14 8,18"/>
      <polyline points="20,10 24,14 20,18"/>
      <line x1="15.5" y1="7" x2="12.5" y2="21"/>
      <line x1="2" y1="3" x2="26" y2="3" opacity="0.4"/>
      <line x1="2" y1="25" x2="26" y2="25" opacity="0.4"/>
    </svg>
  )
}

function IconFounder() {
  return (
    <svg className={styles.iconSvg} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="8" r="3.5"/>
      <path d="M10,24 C10,19.5 13.5,16 18,16 C22.5,16 26,19.5 26,24"/>
      <line x1="2" y1="14" x2="11" y2="14"/>
      <polyline points="8,11 11,14 8,17"/>
    </svg>
  )
}

const ICONS: Record<string, () => React.JSX.Element> = {
  agents: IconAgents,
  code: IconCode,
  founder: IconFounder,
}

export function PorQue() {
  return (
    <section id="por-que" className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <span className="section-label dark">Diferenciadores</span>
          <h2 className={styles.heading}>Por qué Carbono14</h2>
          <p className={styles.headerDescription}>
            No somos una consultora genérica de IA. Somos especialistas en
            sistemas autónomos que operan en producción con determinismo total.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card) => {
            const Icon = ICONS[card.icon]
            return (
              <div key={card.title} className={styles.card}>
                <div className={styles.iconBox}>
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
