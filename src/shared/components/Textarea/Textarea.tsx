import { forwardRef } from 'react'
import { cn } from '@/shared/utils/cn'
import styles from './Textarea.module.css'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className={styles.container}>
        {label && (
          <label htmlFor={textareaId} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(styles.textarea, error && styles.error, className)}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <span id={`${textareaId}-error`} className={styles.errorMessage} role="alert">
            {error}
          </span>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
