import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { JsonLd } from '@/shared/components/JsonLd'
import { HybridHero } from './components/HybridHero'
import { HybridServices } from './components/HybridServices'
import { HybridClients } from './components/HybridClients'
import { HybridContact } from './components/HybridContact'
import { HybridCTA } from './components/HybridCTA'
import styles from './page.module.css'

export default function V5Page() {
  return (
    <div className={styles.page}>
      <JsonLd />
      <Header />
      <main>
        <HybridHero />
        <HybridServices />
        <HybridClients />
        <HybridContact />
        <HybridCTA />
      </main>
      <Footer />
    </div>
  )
}
