import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonios } from './Testimonios'

describe('Testimonios', () => {
  it('renders section heading', () => {
    render(<Testimonios />)
    expect(screen.getByText(/Lo que dicen los CTOs/)).toBeInTheDocument()
  })

  it('renders 3 testimonial cards with names', () => {
    render(<Testimonios />)
    expect(screen.getByText('Marcos Delgado')).toBeInTheDocument()
    expect(screen.getByText('Carolina Ibáñez')).toBeInTheDocument()
    expect(screen.getByText('Rodrigo Salas')).toBeInTheDocument()
  })

  it('renders 15 stars (5 per card)', () => {
    render(<Testimonios />)
    const stars = screen.getAllByText('★')
    expect(stars.length).toBe(15)
  })

  it('renders 4 metrics', () => {
    render(<Testimonios />)
    expect(screen.getByText('78%')).toBeInTheDocument()
    expect(screen.getByText('3.4x')).toBeInTheDocument()
    expect(screen.getByText('<2 mes')).toBeInTheDocument()
  })

  it('has section with id="testimonios"', () => {
    render(<Testimonios />)
    expect(document.getElementById('testimonios')).toBeInTheDocument()
  })
})
