import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialProof } from './SocialProof'

// Mock tRPC client
vi.mock('@/trpc/client', () => ({
  trpc: {
    clients: {
      list: {
        useQuery: () => ({
          data: [
            { _id: '1', name: 'Aladil', imageUrl: '/test-aladil.png', url: 'https://aladil.com', displayOrder: 1, _creationTime: 0 },
            { _id: '2', name: 'Zephyra', imageUrl: '/test-zephyra.png', url: 'https://zephyra.com', displayOrder: 2, _creationTime: 0 },
          ],
          isLoading: false,
        }),
      },
    },
  },
}))

describe('SocialProof', () => {
  it('renders section title', () => {
    render(<SocialProof />)
    expect(screen.getByText(/Confían en nosotros/)).toBeInTheDocument()
  })

  it('renders client logos with links', () => {
    render(<SocialProof />)
    expect(screen.getByLabelText(/Visitar sitio de Aladil/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Visitar sitio de Zephyra/)).toBeInTheDocument()
  })

  it('renders client images', () => {
    render(<SocialProof />)
    expect(screen.getByAltText('Logo de Aladil')).toBeInTheDocument()
    expect(screen.getByAltText('Logo de Zephyra')).toBeInTheDocument()
  })

  it('renders tech logos', () => {
    render(<SocialProof />)
    expect(screen.getByText(/Construido con/)).toBeInTheDocument()
    expect(screen.getByAltText('Logo de Anthropic')).toBeInTheDocument()
    expect(screen.getByAltText('Logo de n8n')).toBeInTheDocument()
    expect(screen.getByAltText('Logo de Vercel')).toBeInTheDocument()
  })

  it('renders metrics line', () => {
    render(<SocialProof />)
    expect(screen.getByText(/Validación gratuita/)).toBeInTheDocument()
  })

  it('has section with id="clientes"', () => {
    render(<SocialProof />)
    expect(document.getElementById('clientes')).toBeInTheDocument()
  })
})
