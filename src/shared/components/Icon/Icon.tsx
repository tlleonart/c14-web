import { cn } from '@/shared/utils/cn'
import styles from './Icon.module.css'

export interface IconProps {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  'aria-label'?: string
  'aria-hidden'?: boolean
}

export function Icon({
  name,
  size = 'md',
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = !ariaLabel,
}: IconProps) {
  return (
    <span
      className={cn(styles.icon, styles[size], 'material-symbols-outlined', className)}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      role={ariaLabel ? 'img' : undefined}
    >
      {name}
    </span>
  )
}
