import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { JsonLd } from '@/shared/components/JsonLd'
import { EditorialHero } from './components/EditorialHero'
import { ServiceCarousel } from './components/ServiceCarousel'
import { EditorialClients } from './components/EditorialClients'
import { EditorialContact } from './components/EditorialContact'
import { EditorialCTA } from './components/EditorialCTA'
import styles from './page.module.css'

export default function V3Page() {
  return (
    <div className={styles.page}>
      <JsonLd />
      <div className={styles.headerWrap}>
        <Header />
      </div>
      <main>
        <EditorialHero />
        <ServiceCarousel />
        <EditorialClients />
        <EditorialContact />
        <EditorialCTA />
      </main>
      <div className={styles.footerWrap}>
        <Footer />
      </div>
    </div>
  )
}
