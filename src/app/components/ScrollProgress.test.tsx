import { describe, it, expect, vi, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import { ScrollProgress } from './ScrollProgress'

describe('ScrollProgress', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders a progressbar element', () => {
    const { container } = render(<ScrollProgress />)
    const bar = container.querySelector('[role="progressbar"]')
    expect(bar).toBeInTheDocument()
  })

  it('has correct aria attributes', () => {
    const { container } = render(<ScrollProgress />)
    const bar = container.querySelector('[role="progressbar"]')
    expect(bar).toHaveAttribute('aria-valuemin', '0')
    expect(bar).toHaveAttribute('aria-valuemax', '100')
    expect(bar).toHaveAttribute('aria-label', 'Progreso de lectura')
  })

  it('starts with 0% width', () => {
    const { container } = render(<ScrollProgress />)
    const bar = container.querySelector('[role="progressbar"]') as HTMLElement
    expect(bar.style.width).toBe('0%')
  })
})
