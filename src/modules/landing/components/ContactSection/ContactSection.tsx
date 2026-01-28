import { ContactForm } from '@/modules/contact'
import styles from './ContactSection.module.css'

export function ContactSection() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Hablemos de tu proyecto</h2>
          <p className={styles.subtitle}>
            Completá el formulario y nos pondremos en contacto para entender mejor tus
            necesidades y explorar cómo podemos ayudarte.
          </p>
        </div>
        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
