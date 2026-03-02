import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { JsonLd } from '@/shared/components/JsonLd'
import { AnthropicHero } from './components/AnthropicHero'
import { AnthropicServices } from './components/AnthropicServices'
import { AnthropicClients } from './components/AnthropicClients'
import { AnthropicContact } from './components/AnthropicContact'
import { AnthropicCTA } from './components/AnthropicCTA'
import styles from './page.module.css'

export default function V6Page() {
  return (
    <div className={styles.page}>
      <JsonLd />
      <Header />
      <main>
        <AnthropicHero />
        <AnthropicServices />
        <AnthropicClients />
        <AnthropicContact />
        <AnthropicCTA />
      </main>
      <Footer />
    </div>
  )
}
