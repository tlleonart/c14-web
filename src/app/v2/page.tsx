import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { JsonLd } from '@/shared/components/JsonLd'
import { CinematicHero } from './components/CinematicHero'
import { BentoServices } from './components/BentoServices'
import { ClientMarquee } from './components/ClientMarquee'
import { SplitContact } from './components/SplitContact'
import { CinematicCTA } from './components/CinematicCTA'
import styles from './page.module.css'

export default function V2Page() {
  return (
    <div className={styles.page}>
      <JsonLd />
      <div className={styles.headerWrap}>
        <Header />
      </div>
      <main>
        <CinematicHero />
        <BentoServices />
        <ClientMarquee />
        <SplitContact />
        <CinematicCTA />
      </main>
      <div className={styles.footerWrap}>
        <Footer />
      </div>
    </div>
  )
}
