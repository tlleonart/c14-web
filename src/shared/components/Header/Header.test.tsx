import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from './Header'

// Mock useActiveSection
vi.mock('@/shared/hooks/useActiveSection', () => ({
  useActiveSection: () => 'problema',
}))

describe('Header', () => {
  beforeEach(() => {
    // Reset body overflow
    document.body.style.overflow = ''
  })

  it('renders the logo with Carbono and 14', () => {
    render(<Header />)
    expect(screen.getByText('Carbono')).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
  })

  it('renders 5 navigation links', () => {
    render(<Header />)
    expect(screen.getByText('El problema')).toBeInTheDocument()
    expect(screen.getByText('Agentes')).toBeInTheDocument()
    expect(screen.getByText('Metodología')).toBeInTheDocument()
    expect(screen.getByText('Seguridad')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('renders CTA button "Hablemos"', () => {
    render(<Header />)
    const ctaButtons = screen.getAllByText('Hablemos')
    expect(ctaButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders hamburger menu button with aria-label', () => {
    render(<Header />)
    expect(screen.getByLabelText('Abrir menú')).toBeInTheDocument()
  })

  it('opens overlay menu when hamburger is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByLabelText('Abrir menú'))
    expect(screen.getByLabelText('Cerrar menú')).toBeInTheDocument()
  })

  it('locks body scroll when overlay is open', () => {
    render(<Header />)
    fireEvent.click(screen.getByLabelText('Abrir menú'))
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('closes overlay when close button is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByLabelText('Abrir menú'))
    fireEvent.click(screen.getByLabelText('Cerrar menú'))
    expect(screen.queryByLabelText('Cerrar menú')).not.toBeInTheDocument()
  })

  it('restores body scroll when overlay is closed', () => {
    render(<Header />)
    fireEvent.click(screen.getByLabelText('Abrir menú'))
    fireEvent.click(screen.getByLabelText('Cerrar menú'))
    expect(document.body.style.overflow).toBe('')
  })

  it('nav links have correct href attributes', () => {
    render(<Header />)
    const problemaLink = screen.getByText('El problema')
    expect(problemaLink).toHaveAttribute('href', '#problema')
  })
})
