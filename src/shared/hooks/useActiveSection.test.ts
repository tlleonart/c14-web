import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useActiveSection } from './useActiveSection'

describe('useActiveSection', () => {
  let mockObserve: ReturnType<typeof vi.fn>
  let mockDisconnect: ReturnType<typeof vi.fn>
  let observerCallback: IntersectionObserverCallback

  beforeEach(() => {
    mockObserve = vi.fn()
    mockDisconnect = vi.fn()

    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback
      }
      observe = mockObserve
      disconnect = mockDisconnect
      unobserve = vi.fn()
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    // Clean up DOM elements
    const ids = ['problema', 'agentes', 'metodologia', 'gobernanza', 'por-que', 'clientes']
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) el.remove()
    })
  })

  it('returns null when no sections are visible', () => {
    const { result } = renderHook(() => useActiveSection())
    expect(result.current).toBeNull()
  })

  it('observes all section elements that exist in the DOM', () => {
    const sections = ['problema', 'agentes', 'metodologia', 'gobernanza', 'por-que', 'clientes']
    sections.forEach((id) => {
      const el = document.createElement('section')
      el.id = id
      document.body.appendChild(el)
    })

    renderHook(() => useActiveSection())
    expect(mockObserve).toHaveBeenCalledTimes(6)
  })

  it('returns the active section ID when a section intersects', () => {
    const section = document.createElement('section')
    section.id = 'agentes'
    document.body.appendChild(section)

    const { result } = renderHook(() => useActiveSection())

    act(() => {
      observerCallback(
        [
          {
            target: section,
            isIntersecting: true,
            intersectionRatio: 0.5,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver
      )
    })

    expect(result.current).toBe('agentes')
  })

  it('cleans up observer on unmount', () => {
    const section = document.createElement('section')
    section.id = 'problema'
    document.body.appendChild(section)

    const { unmount } = renderHook(() => useActiveSection())
    unmount()

    expect(mockDisconnect).toHaveBeenCalled()
  })
})
