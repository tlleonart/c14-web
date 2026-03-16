import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gobernanza } from './Gobernanza'

describe('Gobernanza', () => {
  it('renders section heading', () => {
    render(<Gobernanza />)
    expect(screen.getByText(/Control total/)).toBeInTheDocument()
  })

  it('renders 4 governance cards', () => {
    render(<Gobernanza />)
    expect(screen.getByText('Trazabilidad completa')).toBeInTheDocument()
    expect(screen.getByText('Reglas auditables')).toBeInTheDocument()
    expect(screen.getByText('Rollback instantáneo')).toBeInTheDocument()
    expect(screen.getByText('Monitoreo 24/7')).toBeInTheDocument()
  })

  it('renders 3 compliance badges', () => {
    render(<Gobernanza />)
    expect(screen.getByText(/SOC 2/)).toBeInTheDocument()
    expect(screen.getByText(/GDPR/)).toBeInTheDocument()
    expect(screen.getByText(/Deploy en tu infraestructura/)).toBeInTheDocument()
  })

  it('has section with id="gobernanza"', () => {
    render(<Gobernanza />)
    expect(document.getElementById('gobernanza')).toBeInTheDocument()
  })
})
