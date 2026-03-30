import type { Metadata } from 'next'
import { MinimalHeader } from '@/modules/campaign/components/MinimalHeader/MinimalHeader'
import { MinimalFooter } from '@/modules/campaign/components/MinimalFooter/MinimalFooter'
import { WhitePaperForm } from '@/modules/campaign/components/WhitePaperForm/WhitePaperForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'IA Generativa vs IA Operativa — White Paper Gratuito | Carbono14',
  description:
    'Descargá la guía que los CTOs de LATAM necesitan antes de aprobar cualquier proyecto de IA. Árbol de decisión, tabla comparativa, checklist de viabilidad y más.',
  robots: { index: true, follow: true },
}

const HERO_BULLETS = [
  'Árbol de decisión: IA generativa vs IA operativa — para tu proceso específico',
  'Tabla comparativa completa: costos, tiempos, garantías operativas',
  'Checklist de viabilidad: 12 criterios técnicos y operativos',
  'Casos de uso por industria — manufactura, finanzas, logística, salud',
  'Los 5 errores más caros en proyectos de IA — y cómo evitarlos',
]

const BENEFITS = [
  {
    title: 'Árbol de decisión',
    desc: 'Guía paso a paso para elegir el enfoque correcto para tu proceso específico.',
  },
  {
    title: 'Tabla comparativa completa',
    desc: 'Costos, tiempos de implementación, garantías operativas y casos de uso.',
  },
  {
    title: 'Checklist de viabilidad',
    desc: '12 criterios técnicos y operativos para evaluar cualquier proyecto de IA.',
  },
  {
    title: 'Casos de uso por industria',
    desc: 'Manufactura, finanzas, logística y salud: qué está funcionando en LATAM.',
  },
  {
    title: 'Los 5 errores más caros',
    desc: 'Patrones de falla que se repiten en proyectos de IA en producción — y cómo evitarlos.',
  },
]

const AUDIENCE = [
  'Sos CTO, COO o CEO de una empresa de 50 a 500 empleados',
  'Tenés procesos manuales repetitivos que creés que podrían automatizarse',
  'Ya probaste herramientas de IA generativa y no llegaste a producción',
  'Tu empresa tiene requisitos de trazabilidad o auditoría de compliance',
  'Querés tomar una decisión informada antes de aprobar presupuesto',
]

export default function WhitePaperPage() {
  return (
    <>
      <MinimalHeader />

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.labelPill}>White Paper Gratuito</span>
              <h1 className={styles.heroH1}>
                La guía que los CTOs de LATAM necesitan antes de aprobar cualquier proyecto de IA
              </h1>
              <p className={styles.heroSub}>
                IA Generativa vs IA Operativa: cómo evaluar qué necesita tu empresa, qué procesos
                son automatizables, y cómo evitar los errores más caros. Descargala gratis.
              </p>
              <ul className={styles.heroBullets}>
                {HERO_BULLETS.map((bullet) => (
                  <li key={bullet} className={styles.heroBulletItem}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="8" r="7" stroke="#ff8a7a" strokeWidth="1.5" />
                      <path
                        d="M5 8.5L7 10.5L11 6"
                        stroke="#ff8a7a"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href="#capture-form" className={styles.heroCta} data-cta="wp-hero-quiero-guia">
                Quiero la guía
              </a>
              <p className={styles.heroMicrocopy}>Gratis. Sin compromiso. Solo la guía.</p>
            </div>

            <div className={styles.mockupWrapper}>
              <div className={styles.wpCover}>
                <span className={styles.wpCoverCategory}>WHITE PAPER</span>
                <div>
                  <h2 className={styles.wpCoverTitle}>
                    IA Generativa
                    <br />
                    vs IA Operativa
                  </h2>
                  <p className={styles.wpCoverSubtitle}>Guía para equipos técnicos</p>
                </div>
                <div className={styles.wpCoverFooter}>
                  <span className={styles.wpFooterBrand}>Carbono14</span>
                  <span className={styles.wpFooterYear}>2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className={styles.benefits}>
          <div className={styles.benefitsInner}>
            <span className={styles.sectionLabel}>Qué incluye el white paper</span>
            <h2 className={styles.sectionTitle}>Todo lo que necesitás para tomar una decisión informada</h2>
            <div className={styles.benefitsGrid}>
              {BENEFITS.map((item, i) => (
                <div
                  key={item.title}
                  className={`${styles.benefitCard} ${i === BENEFITS.length - 1 ? styles.benefitCardLast : ''}`}
                >
                  <span className={styles.benefitNumber}>0{i + 1}</span>
                  <h3 className={styles.benefitTitle}>{item.title}</h3>
                  <p className={styles.benefitDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className={styles.audience}>
          <div className={styles.audienceInner}>
            <span className={styles.sectionLabel}>¿Es para mí?</span>
            <h2 className={styles.sectionTitle}>Esta guía es para vos si...</h2>
            <ul className={styles.audienceList}>
              {AUDIENCE.map((item) => (
                <li key={item} className={styles.audienceItem}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className={styles.audienceCheck}
                  >
                    <circle cx="10" cy="10" r="9" stroke="#60c878" strokeWidth="1.5" />
                    <path
                      d="M6.5 10.5L8.5 12.5L13.5 7.5"
                      stroke="#60c878"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CAPTURE FORM */}
        <section className={styles.captureSection} id="capture-form">
          <div className={styles.captureSectionInner}>
            <span className={styles.captureLabelPill}>Descarga gratuita</span>
            <WhitePaperForm />
          </div>
        </section>
      </main>

      <MinimalFooter />
    </>
  )
}
