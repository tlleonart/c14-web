import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { JsonLd } from '@/shared/components/JsonLd'
import { AuroraBackground } from './components/AuroraBackground'
import { TypingHero } from './components/TypingHero'
import { ShimmerServices } from './components/ShimmerServices'
import { GlassClients } from './components/GlassClients'
import { AuroraContact } from './components/AuroraContact'
import { AuroraCTA } from './components/AuroraCTA'
import styles from './page.module.css'

export default function V4Page() {
  return (
    <div className={styles.page}>
      <AuroraBackground />
      <JsonLd />
      <div className={styles.headerWrap}>
        <Header />
      </div>
      <main>
        <TypingHero />
        <ShimmerServices />
        <GlassClients />
        <AuroraContact />
        <AuroraCTA />
      </main>
      <div className={styles.footerWrap}>
        <Footer />
      </div>
    </div>
  )
}
