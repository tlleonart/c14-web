import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Problema } from './Problema'

describe('Problema', () => {
  it('renders section heading', () => {
    render(<Problema />)
    expect(screen.getByText(/IA generativa no alcanza/)).toBeInTheDocument()
  })

  it('renders 6 comparison criteria', () => {
    render(<Problema />)
    expect(screen.getByText('Determinismo')).toBeInTheDocument()
    expect(screen.getByText('Trazabilidad')).toBeInTheDocument()
    expect(screen.getByText('Auditabilidad')).toBeInTheDocument()
    expect(screen.getByText('Gobernanza')).toBeInTheDocument()
    expect(screen.getByText('Privacidad')).toBeInTheDocument()
    expect(screen.getByText('Procesos críticos')).toBeInTheDocument()
  })

  it('renders positive and negative values', () => {
    render(<Problema />)
    expect(screen.getByText('Garantizado')).toBeInTheDocument()
    expect(screen.getByText('Probabilístico')).toBeInTheDocument()
  })

  it('renders 3 benefit cards', () => {
    render(<Problema />)
    expect(screen.getByText('Reglas de negocio explícitas')).toBeInTheDocument()
    expect(screen.getByText('Validación humana en el loop')).toBeInTheDocument()
    expect(screen.getByText('Historial completo de ejecución')).toBeInTheDocument()
  })

  it('renders the quote', () => {
    render(<Problema />)
    expect(screen.getByText(/improvisa en producción/)).toBeInTheDocument()
  })

  it('has section with id="problema"', () => {
    render(<Problema />)
    expect(document.getElementById('problema')).toBeInTheDocument()
  })
})
