import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

// Mock NewsletterForm since it uses tRPC
vi.mock('./NewsletterForm', () => ({
  NewsletterForm: () => (
    <div>
      <input aria-label="Email para newsletter" />
      <button>Suscribirme</button>
    </div>
  ),
}))

describe('Footer', () => {
  it('renders brand logo', () => {
    render(<Footer />)
    expect(screen.getByText('Carbono')).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
  })

  it('renders tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/determinismo completo/)).toBeInTheDocument()
  })

  it('renders social icons with aria-labels', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders services column with 5 links', () => {
    render(<Footer />)
    expect(screen.getByText('Agente de Inventario')).toBeInTheDocument()
    expect(screen.getByText('Agente Financiero')).toBeInTheDocument()
    expect(screen.getByText('Agente de Documentación')).toBeInTheDocument()
    expect(screen.getByText('Orquestador Multi-Agente')).toBeInTheDocument()
    expect(screen.getByText('Agentes a medida')).toBeInTheDocument()
  })

  it('renders company column with 3 links', () => {
    render(<Footer />)
    expect(screen.getByText('Metodología')).toBeInTheDocument()
    expect(screen.getByText('Seguridad')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('renders newsletter input and button', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email para newsletter')).toBeInTheDocument()
    expect(screen.getByText('Suscribirme')).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 Carbono14/)).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByText('Política de privacidad')).toBeInTheDocument()
    expect(screen.getByText('Términos de uso')).toBeInTheDocument()
  })
})
