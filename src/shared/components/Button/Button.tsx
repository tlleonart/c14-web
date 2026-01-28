import { forwardRef } from 'react'
import { cn } from '@/shared/utils/cn'
import styles from './Button.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(styles.button, styles[variant], styles[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <span className={styles.spinner} aria-hidden="true" />}
        <span className={isLoading ? styles.hiddenText : undefined}>{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'
