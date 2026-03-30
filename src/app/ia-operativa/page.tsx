import type { Metadata } from 'next'
import { MinimalHeader } from '@/modules/campaign/components/MinimalHeader/MinimalHeader'
import { MinimalFooter } from '@/modules/campaign/components/MinimalFooter/MinimalFooter'
import { IaOperativaForm } from '@/modules/campaign/components/IaOperativaForm/IaOperativaForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'IA Operativa — Tu proceso automatizado en producción | Carbono14',
  description:
    'La mayoría de los proyectos de IA generativa fallan antes de llegar a producción. IA operativa es la solución. Validá tu proceso gratis con Carbono14.',
  robots: { index: false, follow: false },
}

export default function IaOperativaPage() {
  return (
    <>
      <MinimalHeader />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>IA Operativa — Carbono14</div>

          <h1 className={styles.heroH1}>
            Tu empresa no necesita
            <br />
            más IA. Necesita IA que
            <br />
            <span className={styles.heroH1Accent}>funcione en producción.</span>
          </h1>

          <p className={styles.heroSub}>
            La mayoría de los proyectos de IA generativa fallan antes de llegar a producción. Hay
            una razón técnica para eso — y una forma de evitarlo. Validá si tu proceso está listo
            para IA operativa.
          </p>

          <div className={styles.heroCtas}>
            <a href="#lead-form" className={styles.btnPrimary} data-cta="hero-validar-proceso">
              Validá tu proceso — es gratis
            </a>
            <a href="#seccion-solucion" className={styles.btnSecondaryLink}>
              ¿Qué es IA operativa? ↓
            </a>
          </div>

          {/* Inline SVG diagram */}
          <div className={styles.heroDiagram}>
            <svg
              viewBox="0 0 760 180"
              width="100%"
              style={{ maxWidth: 760, display: 'block', opacity: 0.9 }}
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Comparación: IA Generativa vs IA Operativa"
            >
              <defs>
                <linearGradient id="grad-op" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#d44030" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#d44030" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <rect x="0" y="10" width="320" height="160" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <text x="24" y="48" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#555568" letterSpacing="1" fontWeight="700">IA GENERATIVA</text>
              <text x="24" y="82" fontFamily="Inter, sans-serif" fontSize="18" fill="#9090b0" fontWeight="700">Caja negra</text>
              <text x="24" y="106" fontFamily="Inter, sans-serif" fontSize="13" fill="#555568">• Improvisa</text>
              <text x="24" y="126" fontFamily="Inter, sans-serif" fontSize="13" fill="#555568">• No trazable</text>
              <text x="24" y="146" fontFamily="Inter, sans-serif" fontSize="13" fill="#555568">• Inestable en producción</text>
              <g transform="translate(340,90)">
                <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                <polygon points="60,0 52,-5 52,5" fill="rgba(255,255,255,0.12)" />
                <line x1="60" y1="0" x2="0" y2="0" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                <polygon points="0,0 8,-5 8,5" fill="rgba(255,255,255,0.12)" />
                <text x="30" y="-10" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#555568" textAnchor="middle" letterSpacing="0.5">vs</text>
              </g>
              <rect x="420" y="10" width="340" height="160" rx="12" fill="url(#grad-op)" stroke="#d44030" strokeWidth="1.5" />
              <text x="444" y="48" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#d44030" letterSpacing="1" fontWeight="700">IA OPERATIVA</text>
              <text x="444" y="82" fontFamily="Inter, sans-serif" fontSize="18" fill="#e8e8f0" fontWeight="700">Determinista</text>
              <text x="444" y="106" fontFamily="Inter, sans-serif" fontSize="13" fill="#9090b0">• Ejecuta según reglas</text>
              <text x="444" y="126" fontFamily="Inter, sans-serif" fontSize="13" fill="#9090b0">• Cada decisión auditable</text>
              <text x="444" y="146" fontFamily="Inter, sans-serif" fontSize="13" fill="#9090b0">• Estable en producción</text>
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 1: EL PROBLEMA */}
      <section id="seccion-problema" className={styles.problem}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>El problema</div>
          <h2 className={styles.sectionTitle}>
            Por qué la IA generativa no alcanza
            <br />
            para operaciones críticas
          </h2>

          <div className={styles.problemBody}>
            <p>
              Probaste IA. Tal vez ChatGPT, tal vez alguna herramienta de automatización. Funcionó
              en el demo. No llegó a producción.
            </p>
            <p>No es un problema de tecnología. Es un problema de categoría.</p>
            <p>
              La IA generativa es poderosa para explorar ideas. Pero tiene una propiedad que la
              hace peligrosa en operaciones críticas:{' '}
              <strong className={styles.emphasis}>improvisa</strong>.
            </p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}></th>
                  <th className={styles.th}>IA Generativa</th>
                  <th className={`${styles.th} ${styles.thGreen}`}>IA Operativa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${styles.td} ${styles.tdHeader}`}>Comportamiento</td>
                  <td className={styles.td}>Probabilístico — improvisa</td>
                  <td className={styles.td}>Determinista — ejecuta según reglas</td>
                </tr>
                <tr className={styles.trAlt}>
                  <td className={`${styles.td} ${styles.tdHeader}`}>Trazabilidad</td>
                  <td className={styles.td}>No — caja negra</td>
                  <td className={styles.td}>Sí — cada decisión auditable</td>
                </tr>
                <tr>
                  <td className={`${styles.td} ${styles.tdHeader}`}>Casos de uso</td>
                  <td className={styles.td}>Contenido, exploración, búsqueda</td>
                  <td className={styles.td}>Procesos operativos, decisiones críticas</td>
                </tr>
                <tr className={styles.trAlt}>
                  <td className={`${styles.td} ${styles.tdHeader}`}>Compliance</td>
                  <td className={styles.td}>Alto riesgo</td>
                  <td className={styles.td}>Diseñado para cumplimiento</td>
                </tr>
                <tr>
                  <td className={`${styles.td} ${styles.tdHeader}`}>En producción</td>
                  <td className={styles.td}>Inestable en procesos repetitivos</td>
                  <td className={styles.td}>Estable — se comporta igual siempre</td>
                </tr>
                <tr className={styles.trAlt}>
                  <td className={`${styles.td} ${styles.tdHeaderLast}`}>Ejemplo</td>
                  <td className={styles.tdLast}>ChatGPT respondiendo una consulta</td>
                  <td className={styles.tdLast}>
                    Agente que procesa 500 solicitudes de crédito/día
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: LA SOLUCIÓN */}
      <section id="seccion-solucion" className={styles.solution}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>La solución</div>
          <h2 className={styles.sectionTitle}>Qué es IA operativa y qué garantiza</h2>

          <div className={styles.grid3}>
            <div className={styles.featureCard}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.featureIcon} aria-hidden="true">
                <circle cx="20" cy="20" r="17" stroke="#d44030" strokeWidth="1.5" />
                <path d="M13 20.5L17.5 25L27 15" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className={styles.featureTitle}>Determinismo</h3>
              <p className={styles.featureDesc}>
                El mismo input produce el mismo output. Siempre. Podés auditar cada decisión y
                saber exactamente por qué el sistema hizo lo que hizo.
              </p>
            </div>

            <div className={styles.featureCard}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.featureIcon} aria-hidden="true">
                <circle cx="8" cy="20" r="4" stroke="#d44030" strokeWidth="1.5" />
                <circle cx="32" cy="10" r="4" stroke="#d44030" strokeWidth="1.5" />
                <circle cx="32" cy="30" r="4" stroke="#d44030" strokeWidth="1.5" />
                <line x1="12" y1="19" x2="28" y2="11" stroke="#d44030" strokeWidth="1.5" />
                <line x1="12" y1="21" x2="28" y2="29" stroke="#d44030" strokeWidth="1.5" />
                <line x1="32" y1="14" x2="32" y2="26" stroke="#d44030" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
              <h3 className={styles.featureTitle}>Trazabilidad</h3>
              <p className={styles.featureDesc}>
                Cada acción del sistema queda registrada. Tu equipo técnico puede revisar el
                historial completo de decisiones, detectar errores y corregirlos.
              </p>
            </div>

            <div className={styles.featureCard}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.featureIcon} aria-hidden="true">
                <rect x="4" y="14" width="14" height="12" rx="3" stroke="#d44030" strokeWidth="1.5" />
                <rect x="22" y="14" width="14" height="12" rx="3" stroke="#d44030" strokeWidth="1.5" />
                <line x1="18" y1="20" x2="22" y2="20" stroke="#d44030" strokeWidth="2" strokeLinecap="round" />
                <line x1="14" y1="20" x2="11" y2="14" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="26" y1="20" x2="29" y2="26" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className={styles.featureTitle}>Integración real</h3>
              <p className={styles.featureDesc}>
                El sistema se integra con tu stack actual — no reemplaza todo lo que tenés, se
                conecta con lo que ya funciona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EL PROCESO */}
      <section id="seccion-proceso" className={styles.process}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>El proceso</div>
          <h2 className={styles.sectionTitle}>El proceso en tres pasos</h2>

          <div className={styles.grid3}>
            <div className={styles.stepCard}>
              <span className={styles.stepBg}>01</span>
              <div className={styles.stepBadge}>Paso 1</div>
              <h3 className={styles.stepTitle}>Auditoría técnica</h3>
              <p className={styles.stepDesc}>
                Analizamos el proceso que querés automatizar. Evaluamos viabilidad técnica, puntos
                de falla, requisitos de compliance y posibilidades de integración. En menos de 48
                horas tenés un diagnóstico concreto — no una presentación de ventas.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span className={styles.stepBg}>02</span>
              <div className={styles.stepBadge}>Paso 2</div>
              <h3 className={styles.stepTitle}>Implementación</h3>
              <p className={styles.stepDesc}>
                Construimos el sistema de IA operativa usando la arquitectura correcta para tu
                proceso. Sin shortcuts que después fallan en producción.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span className={styles.stepBg}>03</span>
              <div className={styles.stepBadge}>Paso 3</div>
              <h3 className={styles.stepTitle}>Operación</h3>
              <p className={styles.stepDesc}>
                El sistema entra en producción. Lo monitoreamos, lo ajustamos, lo mejoramos con el
                tiempo. Tu equipo tiene visibilidad total.
              </p>
            </div>
          </div>

          <a href="#lead-form" className={styles.inlineCta} data-cta="proceso-auditoria-gratuita">
            Empezá con la auditoría gratuita ↓
          </a>
        </div>
      </section>

      {/* SECTION 4: PARA QUIÉN */}
      <section id="seccion-para-quien" className={styles.audience}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Para quién</div>
          <h2 className={styles.sectionTitle}>Para qué tipo de empresa construimos esto</h2>

          <div className={styles.grid2}>
            <div className={styles.industryCard}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.industryIcon} aria-hidden="true">
                <rect x="2" y="10" width="28" height="18" rx="3" stroke="#d44030" strokeWidth="1.5" />
                <path d="M2 16h28" stroke="#d44030" strokeWidth="1.5" />
                <circle cx="8" cy="22" r="2" fill="#d44030" opacity="0.5" />
                <rect x="12" y="21" width="8" height="2" rx="1" fill="#d44030" opacity="0.4" />
                <path d="M10 6h12" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14 3h4" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className={styles.industryTitle}>Finanzas y crédito</h3>
              <p className={styles.industryDesc}>
                Evaluación de solicitudes, scoring de riesgo, liquidación de operaciones, compliance
                regulatorio
              </p>
            </div>

            <div className={styles.industryCard}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.industryIcon} aria-hidden="true">
                <rect x="2" y="12" width="18" height="12" rx="2" stroke="#d44030" strokeWidth="1.5" />
                <path d="M20 16h6l4 4v4h-10V16z" stroke="#d44030" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="8" cy="27" r="2.5" stroke="#d44030" strokeWidth="1.5" />
                <circle cx="24" cy="27" r="2.5" stroke="#d44030" strokeWidth="1.5" />
                <path d="M6 8l4-4 4 4" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="10" y1="4" x2="10" y2="12" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className={styles.industryTitle}>Logística</h3>
              <p className={styles.industryDesc}>
                Asignación de rutas, gestión de incidencias, comunicación automatizada con clientes,
                control de inventario
              </p>
            </div>

            <div className={styles.industryCard}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.industryIcon} aria-hidden="true">
                <path d="M16 6C10 6 4 11 4 17c0 5 4 9 12 11 8-2 12-6 12-11C28 11 22 6 16 6z" stroke="#d44030" strokeWidth="1.5" />
                <line x1="16" y1="12" x2="16" y2="22" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="11" y1="17" x2="21" y2="17" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className={styles.industryTitle}>Salud</h3>
              <p className={styles.industryDesc}>
                Procesamiento de autorizaciones, gestión de derivaciones, protocolos de atención,
                registros clínicos
              </p>
            </div>

            <div className={styles.industryCard}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.industryIcon} aria-hidden="true">
                <path d="M16 3L4 8v9c0 6.5 5 12 12 14 7-2 12-7.5 12-14V8L16 3z" stroke="#d44030" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M11 16l3.5 3.5 6-7" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className={styles.industryTitle}>Seguros</h3>
              <p className={styles.industryDesc}>
                Análisis de siniestros, aprobación de coberturas, detección de anomalías, reportes
                de auditoría
              </p>
            </div>
          </div>

          <div className={styles.audienceCallout}>
            <p>
              <strong className={styles.emphasis}>El tipo de empresa que resulta bien:</strong>{' '}
              Tenés entre 50 y 500 empleados. Hay procesos repetitivos que hoy dependen de personas
              para ejecutarse. Necesitás escalar sin agregar headcount. Tenés requisitos de
              compliance o auditoría.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: SOCIAL PROOF */}
      <section id="seccion-social-proof" className={styles.socialProof}>
        <div className={styles.sectionInner}>
          <div className={styles.socialProofCard}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.socialProofIcon} aria-hidden="true">
              <path d="M6 12C6 8.686 8.686 6 12 6h1c0 0-1 4 2 6s6 2 6 2c0 0 2 4-2 6-2.5 1.25-5 0.5-6 0 0 0-7-3-7-8z" stroke="#d44030" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M20 18c0 0 4-1 6 2 1.5 2 1 5 0 6-1.5 1.5-4 2-6 1" stroke="#d44030" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="18" cy="18" r="16" stroke="#d44030" strokeWidth="1" strokeOpacity="0.2" />
            </svg>

            <h3 className={styles.socialProofTitle}>Metodología en acción</h3>
            <p className={styles.socialProofBody}>
              En cada proyecto empezamos con una auditoría técnica gratuita. Sin compromiso. Sin
              pitch. Un diagnóstico real de si tu proceso puede automatizarse, con qué tecnología,
              y qué retorno podés esperar. Así es como sabemos — los dos — si tiene sentido
              trabajar juntos.
            </p>

            <div className={styles.placeholder}>
              PLACEHOLDER — Se reemplaza con testimonial real cuando esté disponible
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LEAD FORM */}
      <section id="lead-form" className={styles.formSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.formHeading}>
            Validá tu proceso — es gratis,
            <br />
            sin compromiso
          </h2>
          <p className={styles.formSubheading}>
            Completá el formulario y en menos de 48 horas te respondemos con un diagnóstico
            inicial. Sin pitch. Sin compromiso. Si no tiene sentido para tu caso, te lo decimos
            directamente.
          </p>

          <IaOperativaForm />
        </div>
      </section>

      <MinimalFooter />
    </>
  )
}
