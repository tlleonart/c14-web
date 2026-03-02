import { ContactForm } from '@/modules/contact'
import styles from './SplitContact.module.css'

export function SplitContact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.headline}>Hablemos de tu proyecto</h2>
            <p className={styles.description}>
              Contanos sobre tu proyecto y exploremos juntos c&oacute;mo la
              tecnolog&iacute;a puede ayudarte a alcanzar tus objetivos.
            </p>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.formCard}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
