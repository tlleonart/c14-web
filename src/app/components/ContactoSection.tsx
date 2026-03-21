'use client'

import { useContactForm } from '@/modules/contact/components/ContactForm/useContactForm'
import styles from './ContactoSection.module.css'

const STEPS = [
  { num: '1', title: 'Completá el formulario', description: 'Describí el proceso o área que querés automatizar con IA.' },
  { num: '2', title: 'Recibís la validación', description: 'En menos de 48 horas, una validación con factibilidad y próximos pasos recomendados.' },
  { num: '3', title: 'Decidís si continuamos', description: 'Sin presión, sin contratos. Avanzamos solo si la validación te convence.' },
]

export function ContactoSection() {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit,
  } = useContactForm()

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — Info */}
          <div>
            <span className="section-label">Contacto</span>
            <h2 className={styles.heading}>
              Validamos tu proceso en menos de 48 horas.
            </h2>
            <p className={styles.description}>
              Contanos qué proceso querés automatizar y te devolvemos una
              validación inicial con factibilidad y próximos pasos recomendados.
              Sin compromiso.
            </p>
            <p className={styles.audienceLine}>
              Si tu empresa procesa operaciones repetitivas que requieren precisión y auditabilidad, podemos ayudarte.
            </p>

            <div className={styles.steps}>
              {STEPS.map((step) => (
                <div key={step.num} className={styles.step}>
                  <div className={styles.stepNumber}>{step.num}</div>
                  <div>
                    <div className={styles.stepTitle}>{step.title}</div>
                    <div className={styles.stepDescription}>{step.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.contactInfo}>
              <a href="mailto:info@carbono-14.net" className={styles.contactLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@carbono-14.net
              </a>
              <a href="https://linkedin.com/company/carbono14" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                linkedin.com/company/carbono14
              </a>
              <div className={styles.contactLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Buenos Aires, Argentina
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className={styles.formCard}>
            {isSuccess ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>¡Mensaje enviado!</h3>
                <p className={styles.successDescription}>
                  Revisamos tu consulta y te respondemos en menos de 48 horas hábiles.
                </p>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>Validar mi proceso</h3>
                <p className={styles.formSubtitle}>Respuesta en menos de 48 horas hábiles.</p>

                {submitError && (
                  <div className={styles.errorBanner}>{submitError}</div>
                )}

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.twoCol}>
                    <div>
                      <label className={styles.label}>Email corporativo</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="tu@empresa.com"
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                      {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
                    </div>
                    <div>
                      <label className={styles.label}>Empresa</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Nombre de tu empresa"
                        className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                        value={formData.company || ''}
                        onChange={handleChange}
                        required
                        autoComplete="organization"
                      />
                      {errors.company && <span className={styles.fieldError}>{errors.company}</span>}
                    </div>
                  </div>
                  <div>
                    <label className={styles.label}>¿Qué proceso querés validar?</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Describí en una línea el proceso que querés automatizar."
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
                  </div>
                  {/* Honeypot */}
                  <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" onChange={handleChange} />
                  </div>
                  <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Validar mi proceso'}
                    {!isSubmitting && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    )}
                  </button>
                  <p className={styles.privacyNote}>
                    Al enviar este formulario aceptás nuestra{' '}
                    <a href="/privacy-policy">política de privacidad</a>.
                    Respondemos en menos de 48 horas hábiles.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
