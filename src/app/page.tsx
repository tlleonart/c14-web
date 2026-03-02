import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { JsonLd } from '@/shared/components/JsonLd'
import { Hero, Services, Clients, CallToAction, ContactSection } from '@/modules/landing'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <ContactSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
