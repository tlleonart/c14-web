import { Button } from '@/shared/components/Button'
import { Icon } from '@/shared/components/Icon'
import styles from './SubmitButton.module.css'

interface SubmitButtonProps {
  isSubmitting: boolean
  isSuccess: boolean
}

export function SubmitButton({ isSubmitting, isSuccess }: SubmitButtonProps) {
  if (isSuccess) {
    return (
      <div className={styles.successMessage}>
        <Icon name="check_circle" aria-hidden />
        <span>Mensaje enviado correctamente</span>
      </div>
    )
  }

  return (
    <Button type="submit" size="lg" isLoading={isSubmitting} disabled={isSubmitting}>
      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
    </Button>
  )
}
