import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import { GtmScript, GtmNoScript, Analytics } from './Analytics'

// Mock next/script as a div to avoid testing-library ignoring script elements
vi.mock('next/script', () => ({
  default: ({ children, id }: { children?: string; id?: string }) => (
    <div data-testid="gtm-script" data-script-id={id}>
      {children}
    </div>
  ),
}))

describe('GtmScript', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('renders null when GTM_CONTAINER_ID is not set', () => {
    delete process.env.NEXT_PUBLIC_GTM_CONTAINER_ID
    const { container } = render(<GtmScript />)
    expect(container.firstChild).toBeNull()
  })

  it('renders GTM element when GTM_CONTAINER_ID is set', () => {
    process.env.NEXT_PUBLIC_GTM_CONTAINER_ID = 'GTM-TEST123'
    const { getByTestId } = render(<GtmScript />)
    expect(getByTestId('gtm-script')).toBeInTheDocument()
  })

  it('includes the container ID in the script content', () => {
    process.env.NEXT_PUBLIC_GTM_CONTAINER_ID = 'GTM-TEST123'
    const { getByTestId } = render(<GtmScript />)
    expect(getByTestId('gtm-script').textContent).toContain('GTM-TEST123')
  })

  it('uses script id "gtm-script"', () => {
    process.env.NEXT_PUBLIC_GTM_CONTAINER_ID = 'GTM-TEST123'
    const { getByTestId } = render(<GtmScript />)
    expect(getByTestId('gtm-script').getAttribute('data-script-id')).toBe('gtm-script')
  })
})

describe('GtmNoScript', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('renders null when GTM_CONTAINER_ID is not set', () => {
    delete process.env.NEXT_PUBLIC_GTM_CONTAINER_ID
    const { container } = render(<GtmNoScript />)
    expect(container.firstChild).toBeNull()
  })

  it('renders noscript element when GTM_CONTAINER_ID is set', () => {
    process.env.NEXT_PUBLIC_GTM_CONTAINER_ID = 'GTM-TEST123'
    const { container } = render(<GtmNoScript />)
    expect(container.querySelector('noscript')).toBeInTheDocument()
  })

  it('renders exactly one noscript element', () => {
    process.env.NEXT_PUBLIC_GTM_CONTAINER_ID = 'GTM-TEST123'
    const { container } = render(<GtmNoScript />)
    expect(container.querySelectorAll('noscript')).toHaveLength(1)
  })
})

describe('Analytics (legacy)', () => {
  it('is exported for backwards compatibility', () => {
    expect(Analytics).toBeDefined()
  })
})
