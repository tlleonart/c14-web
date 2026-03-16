'use client'

import { useInView } from '@/shared/hooks/useInView'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className, delay }: FadeInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`fadeIn ${isInView ? 'visible' : ''} ${className || ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
