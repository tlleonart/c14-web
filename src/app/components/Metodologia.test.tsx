import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Metodologia } from './Metodologia'

describe('Metodologia', () => {
  it('renders section heading', () => {
    render(<Metodologia />)
    expect(screen.getByText(/De la idea al agente/)).toBeInTheDocument()
  })

  it('renders 4 phases', () => {
    render(<Metodologia />)
    expect(screen.getByText('Auditoría')).toBeInTheDocument()
    expect(screen.getByText('Especificación')).toBeInTheDocument()
    expect(screen.getByText('Implementación')).toBeInTheDocument()
    expect(screen.getByText('Operación')).toBeInTheDocument()
  })

  it('renders phase numbers', () => {
    render(<Metodologia />)
    expect(screen.getByText('00')).toBeInTheDocument()
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders time badges', () => {
    render(<Metodologia />)
    expect(screen.getByText('<48h entrega')).toBeInTheDocument()
    expect(screen.getByText('1-2 semanas')).toBeInTheDocument()
    expect(screen.getByText('2-6 semanas')).toBeInTheDocument()
    expect(screen.getByText('Continuo')).toBeInTheDocument()
  })

  it('has section with id="metodologia"', () => {
    render(<Metodologia />)
    expect(document.getElementById('metodologia')).toBeInTheDocument()
  })
})
