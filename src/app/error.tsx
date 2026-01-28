'use client'

import { useEffect } from 'react'
import styles from './error.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Algo salió mal</h2>
      <p className={styles.message}>Lo sentimos, ha ocurrido un error inesperado.</p>
      <button className={styles.button} onClick={() => reset()}>
        Intentar de nuevo
      </button>
    </div>
  )
}
