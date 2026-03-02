import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { JsonLd } from '@/shared/components/JsonLd'
import { Manifiesto } from './components/Manifiesto'
import { LaBrecha } from './components/LaBrecha'
import { ElGremio } from './components/ElGremio'
import { Datacion } from './components/Datacion'
import { V7Clients } from './components/V7Clients'
import { Gobernanza } from './components/Gobernanza'
import { ElDialogo } from './components/ElDialogo'
import { CustomCursor } from './components/CustomCursor'
import styles from './page.module.css'

export default function V7Page() {
  return (
    <div className={styles.page}>
      <JsonLd />
      <Header />
      <CustomCursor />
      <main>
        <Manifiesto />
        <LaBrecha />
        <ElGremio />
        <Datacion />
        <V7Clients />
        <Gobernanza />
        <ElDialogo />
      </main>
      <Footer />
    </div>
  )
}
