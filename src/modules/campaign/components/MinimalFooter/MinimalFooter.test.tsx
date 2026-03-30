import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MinimalFooter } from './MinimalFooter'

describe('MinimalFooter', () => {
  it('renders the Carbono14 brand name', () => {
    render(<MinimalFooter />)
    expect(screen.getByText('Carbono')).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<MinimalFooter />)
    expect(screen.getByText(/© 2026 Carbono14/)).toBeInTheDocument()
  })

  it('renders privacy policy link', () => {
    render(<MinimalFooter />)
    expect(screen.getByRole('link', { name: /Política de privacidad/i })).toBeInTheDocument()
  })

  it('renders a footer element', () => {
    const { container } = render(<MinimalFooter />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
