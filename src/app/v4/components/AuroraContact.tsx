import { ContactForm } from '@/modules/contact'
import styles from './AuroraContact.module.css'

export function AuroraContact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Hablemos de tu proyecto</h2>
        <p className={styles.subtitle}>
          Contanos tu idea y exploremos juntos cómo la tecnología puede
          transformar tu negocio.
        </p>
        <div className={styles.formCard}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
