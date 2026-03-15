import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders a button with aria-label', () => {
    render(<BackToTop />)
    expect(screen.getByLabelText('Volver arriba')).toBeInTheDocument()
  })

  it('calls window.scrollTo when clicked', () => {
    const scrollToMock = vi.fn()
    vi.stubGlobal('scrollTo', scrollToMock)

    render(<BackToTop />)
    fireEvent.click(screen.getByLabelText('Volver arriba'))

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('is a button element', () => {
    render(<BackToTop />)
    const btn = screen.getByLabelText('Volver arriba')
    expect(btn.tagName).toBe('BUTTON')
  })
})
