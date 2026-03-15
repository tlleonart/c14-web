import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/operan/)).toBeInTheDocument()
  })

  it('renders the gradient word "operan" with correct class', () => {
    render(<Hero />)
    const operan = screen.getByText('operan')
    expect(operan.tagName).toBe('SPAN')
  })

  it('renders the eyebrow label', () => {
    render(<Hero />)
    expect(screen.getByText(/IA OPERATIVA.*BUENOS AIRES.*EST\. 2023/)).toBeInTheDocument()
  })

  it('renders the subheadline with "determinismo completo"', () => {
    render(<Hero />)
    expect(screen.getByText(/determinismo completo/)).toBeInTheDocument()
  })

  it('renders primary CTA "Solicitar análisis gratuito"', () => {
    render(<Hero />)
    expect(screen.getByText('Solicitar análisis gratuito')).toBeInTheDocument()
  })

  it('renders secondary CTA "Ver agentes"', () => {
    render(<Hero />)
    expect(screen.getByText('Ver agentes')).toBeInTheDocument()
  })

  it('renders 4 trust indicators', () => {
    render(<Hero />)
    expect(screen.getByText('30+')).toBeInTheDocument()
    expect(screen.getByText('<48h')).toBeInTheDocument()
    expect(screen.getByText('99.9%')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('renders trust indicator labels', () => {
    render(<Hero />)
    expect(screen.getByText('AGENTES DESPLEGADOS')).toBeInTheDocument()
    expect(screen.getByText('TIEMPO DE ANÁLISIS')).toBeInTheDocument()
    expect(screen.getByText('UPTIME GARANTIZADO')).toBeInTheDocument()
    expect(screen.getByText('TRAZABILIDAD')).toBeInTheDocument()
  })

  it('renders the terminal card with orchestrator text', () => {
    render(<Hero />)
    expect(screen.getByText(/agent orchestrator v2\.4\.1/)).toBeInTheDocument()
    expect(screen.getByText(/audit_log saved/)).toBeInTheDocument()
  })

  it('renders hero section with id="top"', () => {
    render(<Hero />)
    const section = document.getElementById('top')
    expect(section).toBeInTheDocument()
    expect(section?.tagName).toBe('SECTION')
  })

  it('has CTA links pointing to correct anchors', () => {
    render(<Hero />)
    const primaryCta = screen.getByText('Solicitar análisis gratuito').closest('a')
    const secondaryCta = screen.getByText('Ver agentes').closest('a')
    expect(primaryCta).toHaveAttribute('href', '#contacto')
    expect(secondaryCta).toHaveAttribute('href', '#agentes')
  })
})
