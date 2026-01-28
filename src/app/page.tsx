import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { Hero, Services, CallToAction, ContactSection } from '@/modules/landing'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Services />
        <ContactSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
