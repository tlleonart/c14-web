import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PreFooterCta } from './PreFooterCta'

describe('PreFooterCta', () => {
  it('renders heading', () => {
    render(<PreFooterCta />)
    expect(screen.getByText(/experimental a operativo/)).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<PreFooterCta />)
    expect(screen.getByText(/Análisis técnico gratuito/)).toBeInTheDocument()
  })

  it('renders CTA button linking to #contacto', () => {
    render(<PreFooterCta />)
    const cta = screen.getByText('Solicitar análisis ahora')
    expect(cta).toBeInTheDocument()
    expect(cta.closest('a')).toHaveAttribute('href', '#contacto')
  })
})
