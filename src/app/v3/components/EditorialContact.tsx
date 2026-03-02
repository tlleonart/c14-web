import { ContactForm } from '@/modules/contact'
import styles from './EditorialContact.module.css'

export function EditorialContact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copyColumn}>
            <p className={styles.label}>Contacto</p>
            <h2 className={styles.heading}>
              Construyamos algo extraordinario juntos.
            </h2>
            <p className={styles.description}>
              Contanos sobre tu proyecto y exploremos cómo la tecnología y la
              inteligencia artificial pueden transformar tu negocio.
            </p>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
