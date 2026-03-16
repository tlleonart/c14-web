import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Agentes } from './Agentes'

describe('Agentes', () => {
  it('renders section heading', () => {
    render(<Agentes />)
    expect(screen.getByText(/Cuatro agentes/)).toBeInTheDocument()
  })

  it('renders 4 agent cards', () => {
    render(<Agentes />)
    expect(screen.getByText('Inventario')).toBeInTheDocument()
    expect(screen.getByText('Financiero')).toBeInTheDocument()
    expect(screen.getByText('Documentación')).toBeInTheDocument()
    expect(screen.getByText('Orquestador')).toBeInTheDocument()
  })

  it('renders agent codes', () => {
    render(<Agentes />)
    expect(screen.getByText('AGENT / STOCK-001')).toBeInTheDocument()
    expect(screen.getByText('AGENT / BUDGET-002')).toBeInTheDocument()
    expect(screen.getByText('AGENT / DOC-GEN-003')).toBeInTheDocument()
    expect(screen.getByText('AGENT / ORCH-000')).toBeInTheDocument()
  })

  it('renders architecture disclaimer', () => {
    render(<Agentes />)
    expect(screen.getByText(/Arquitectura de ejemplo/)).toBeInTheDocument()
  })

  it('renders custom agent card', () => {
    render(<Agentes />)
    expect(screen.getByText('Tu Agente Personalizado')).toBeInTheDocument()
    expect(screen.getByText('AGENT / CUSTOM-???')).toBeInTheDocument()
    expect(screen.getByText(/Diseñemos tu arquitectura/)).toBeInTheDocument()
  })

  it('renders bottom CTA', () => {
    render(<Agentes />)
    expect(screen.getByText(/Analizar mis procesos/)).toBeInTheDocument()
  })

  it('has section with id="agentes"', () => {
    render(<Agentes />)
    expect(document.getElementById('agentes')).toBeInTheDocument()
  })
})
