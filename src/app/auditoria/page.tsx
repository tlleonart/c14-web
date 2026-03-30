import type { Metadata } from 'next'
import { MinimalHeader } from '@/modules/campaign/components/MinimalHeader/MinimalHeader'
import { MinimalFooter } from '@/modules/campaign/components/MinimalFooter/MinimalFooter'
import { AuditoriaForm } from '@/modules/campaign/components/AuditoriaForm/AuditoriaForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Auditoría de IA Gratuita — Carbono14',
  description:
    'Auditamos tu proceso en menos de 48 horas. Gratis. Sin compromiso. Un diagnóstico técnico real de si tu proceso es automatizable con IA.',
  robots: { index: false, follow: false },
}

export default function AuditoriaPage() {
  return (
    <>
      <MinimalHeader />

      {/* HERO — grid 55/45 */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Left column: copy + trust */}
          <div>
            <div className={styles.labelPill}>Auditoría gratuita</div>

            <h1 className={styles.heroH1}>
              Auditamos tu proceso en menos de 48 horas. Gratis. Sin compromiso.
            </h1>

            <p className={styles.heroSub}>
              Un diagnóstico técnico real — no una presentación de ventas. Te decimos exactamente
              si tu proceso es automatizable con IA, con qué arquitectura, y qué podés esperar.
            </p>

            <ul className={styles.trustList}>
              <li className={styles.trustItem}>
                <CheckIcon />
                <span>Respuesta en &lt; 48 horas</span>
              </li>
              <li className={styles.trustItem}>
                <CheckIcon />
                <span>Sin compromiso de contratación</span>
              </li>
              <li className={styles.trustItem}>
                <CheckIcon />
                <span>Diagnóstico técnico real</span>
              </li>
            </ul>
          </div>

          {/* Right column: form */}
          <div>
            <AuditoriaForm />
          </div>
        </div>
      </section>

      {/* AUDIT INCLUDES */}
      <section className={styles.auditIncludes}>
        <div className={styles.sectionNarrow}>
          <h2 className={styles.sectionTitle}>Qué recibís en la auditoría</h2>

          <ul className={styles.includesList}>
            <li className={styles.includesItem}>
              <CheckCircleIcon />
              <div>
                <span className={styles.includesItemTitle}>Diagnóstico del proceso</span>
                <span className={styles.includesItemDesc}>
                  Análisis de qué hace el proceso hoy, dónde están los cuellos de botella, y qué
                  partes son automatizables con IA.
                </span>
              </div>
            </li>
            <li className={styles.includesItem}>
              <CheckCircleIcon />
              <div>
                <span className={styles.includesItemTitle}>Evaluación de viabilidad técnica</span>
                <span className={styles.includesItemDesc}>
                  Qué arquitectura de IA requiere el proceso. Si es posible integrarlo con el stack
                  actual. Qué restricciones técnicas o de compliance hay que considerar.
                </span>
              </div>
            </li>
            <li className={styles.includesItem}>
              <CheckCircleIcon />
              <div>
                <span className={styles.includesItemTitle}>Estimación de impacto</span>
                <span className={styles.includesItemDesc}>
                  Una estimación realista (no inflada) de qué podés esperar en términos de
                  reducción de tiempo, errores, o costos operativos.
                </span>
              </div>
            </li>
            <li className={styles.includesItem}>
              <CheckCircleIcon />
              <div>
                <span className={styles.includesItemTitle}>Recomendación de arquitectura</span>
                <span className={styles.includesItemDesc}>
                  Qué tipo de sistema construiríamos, con qué tecnologías, y por qué.
                </span>
              </div>
            </li>
          </ul>

          <div className={styles.callout}>
            Todo esto en menos de 48 horas desde que recibimos el formulario.
          </div>
        </div>
      </section>

      {/* WHAT WE DO NOT DO */}
      <section className={styles.noSection}>
        <div className={styles.sectionNarrow}>
          <h2 className={styles.sectionTitle}>Lo que no vas a recibir</h2>
          <div className={styles.noBody}>
            <p>
              No hacemos pitch de ventas disfrazados de auditoría. No te vamos a mandar un deck
              genérico con &ldquo;oportunidades de IA&rdquo;. No te vamos a presionar para cerrar
              un contrato.
            </p>
            <p>
              La auditoría existe porque creemos que antes de trabajar juntos, los dos tenemos que
              saber que tiene sentido. Si después de la auditoría concluimos que no hay un fit
              real — te lo decimos. Sin rodeos.
            </p>
            <p>
              Si hay fit, te lo explicamos con números y arquitectura. Ahí podemos hablar de un
              proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className={styles.trustBlock}>
        <div className={styles.sectionNarrow}>
          <div className={styles.trustGrid}>
            <div className={styles.trustStat}>
              <span className={styles.trustStatNumber}>&lt; 48h</span>
              <p className={styles.trustStatDesc}>
                Respondemos en menos de 48 horas hábiles.
              </p>
            </div>
            <div className={styles.trustStat}>
              <span className={`${styles.trustStatNumber} ${styles.trustStatGreen}`}>0</span>
              <p className={styles.trustStatDesc}>
                La auditoría no implica ningún compromiso de contratación.
              </p>
            </div>
            <div className={styles.trustStat}>
              <LockIcon />
              <p className={styles.trustStatDesc}>
                Solo trabajamos con empresas — por eso pedimos email corporativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MinimalFooter />
    </>
  )
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M3 8L6.5 11.5L13 4.5"
        stroke="#60c878"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: '2px' }}
    >
      <circle cx="10" cy="10" r="9" stroke="#60c878" strokeWidth="1.5" />
      <path
        d="M6 10L9 13L14 7"
        stroke="#60c878"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="5" y="13" width="18" height="12" rx="2.5" stroke="#9090b0" strokeWidth="1.8" />
      <path
        d="M9 13V9.5C9 7 11 5 14 5C17 5 19 7 19 9.5V13"
        stroke="#9090b0"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="14" cy="19" r="1.5" fill="#9090b0" />
    </svg>
  )
}
