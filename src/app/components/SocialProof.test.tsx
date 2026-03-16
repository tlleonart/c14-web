import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialProof } from './SocialProof'

describe('SocialProof', () => {
  it('renders section title', () => {
    render(<SocialProof />)
    expect(screen.getByText(/Empresas que confían/)).toBeInTheDocument()
  })

  it('renders 6 logo placeholders', () => {
    render(<SocialProof />)
    expect(screen.getByText('ACME Corp')).toBeInTheDocument()
    expect(screen.getByText('NovaTech')).toBeInTheDocument()
    expect(screen.getByText('Grupo Delta')).toBeInTheDocument()
    expect(screen.getByText('FinData SA')).toBeInTheDocument()
    expect(screen.getByText('Meridian')).toBeInTheDocument()
    expect(screen.getByText('Atlas Ops')).toBeInTheDocument()
  })

  it('renders metrics line', () => {
    render(<SocialProof />)
    expect(screen.getByText(/30\+ agentes desplegados/)).toBeInTheDocument()
  })

  it('has section with id="clientes"', () => {
    render(<SocialProof />)
    expect(document.getElementById('clientes')).toBeInTheDocument()
  })
})
