import { Button } from '@/shared/components/Button'

interface SubmitButtonProps {
  isSubmitting: boolean
}

export function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <Button type="submit" size="lg" isLoading={isSubmitting} disabled={isSubmitting}>
      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
    </Button>
  )
}
