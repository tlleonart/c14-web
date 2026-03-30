import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MinimalHeader } from './MinimalHeader'

describe('MinimalHeader', () => {
  it('renders the Carbono14 logo text', () => {
    render(<MinimalHeader />)
    expect(screen.getByText('Carbono')).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
  })

  it('renders the logo as a link', () => {
    render(<MinimalHeader />)
    const link = screen.getByRole('link', { name: /Carbono14/i })
    expect(link).toBeInTheDocument()
  })

  it('renders a header element', () => {
    const { container } = render(<MinimalHeader />)
    expect(container.querySelector('header')).toBeInTheDocument()
  })
})
