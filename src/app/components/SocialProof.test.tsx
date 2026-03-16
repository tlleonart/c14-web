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
    expect(screen.getByText(/Empresas que confían/)).toBeInTheDocument()
  })

  it('renders client logos with links', () => {
    render(<SocialProof />)
    expect(screen.getByLabelText(/Visitar sitio de Aladil/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Visitar sitio de Zephyra/)).toBeInTheDocument()
  })

  it('renders client images', () => {
    render(<SocialProof />)
    expect(screen.getByAltText('Aladil')).toBeInTheDocument()
    expect(screen.getByAltText('Zephyra')).toBeInTheDocument()
  })

  it('renders metrics line', () => {
    render(<SocialProof />)
    expect(screen.getByText(/Especialistas en IA operativa/)).toBeInTheDocument()
  })

  it('has section with id="clientes"', () => {
    render(<SocialProof />)
    expect(document.getElementById('clientes')).toBeInTheDocument()
  })
})
