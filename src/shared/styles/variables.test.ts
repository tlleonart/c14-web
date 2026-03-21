import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const variablesCss = fs.readFileSync(
  path.resolve(__dirname, './variables.css'),
  'utf-8'
)

describe('Design Tokens — variables.css', () => {
  describe('Color tokens (AC-01 to AC-04)', () => {
    const requiredColors = [
      ['--primary', '#d44030'],
      ['--primary-dark', '#b33020'],
      ['--primary-light', 'rgba(212, 64, 48, 0.12)'],
      ['--secondary', '#2d3a8c'],
      ['--secondary-dark', '#1e2a6b'],
      ['--accent', '#f5a623'],
      ['--bg', '#fafaf8'],
      ['--bg-warm', '#f0ece6'],
      ['--bg-dark', '#1a1a2e'],
      ['--bg-dark-2', '#16213e'],
      ['--bg-card', '#ffffff'],
      ['--text', '#1c1c1e'],
      ['--text-secondary', '#555558'],
      ['--text-muted', '#707075'],
      ['--text-on-dark', '#e8e8f0'],
      ['--text-on-dark-muted', '#9090b0'],
      ['--border', '#e2ddd8'],
      ['--border-dark', 'rgba(255, 255, 255, 0.08)'],
    ]

    it.each(requiredColors)(
      'defines %s with value %s',
      (token, value) => {
        const regex = new RegExp(`${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*${value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`)
        expect(variablesCss).toMatch(regex)
      }
    )
  })

  describe('Typography tokens (AC-05, AC-06)', () => {
    it('does NOT contain --font-headline', () => {
      expect(variablesCss).not.toContain('--font-headline')
    })

    it('defines --font-body with Inter', () => {
      expect(variablesCss).toMatch(/--font-body:\s*'Inter'/)
    })

    it('defines --font-mono with JetBrains Mono', () => {
      expect(variablesCss).toMatch(/--font-mono:\s*'JetBrains Mono'/)
    })

    it('defines display size with clamp', () => {
      expect(variablesCss).toMatch(/--display-size:\s*clamp/)
    })

    it('defines weight tokens', () => {
      expect(variablesCss).toContain('--weight-display: 900')
      expect(variablesCss).toContain('--weight-h1: 800')
      expect(variablesCss).toContain('--weight-h2: 700')
    })
  })

  describe('Radius system (AC-07)', () => {
    it('defines all radius tokens', () => {
      expect(variablesCss).toContain('--radius-sm: 4px')
      expect(variablesCss).toContain('--radius: 8px')
      expect(variablesCss).toContain('--radius-lg: 16px')
      expect(variablesCss).toContain('--radius-pill: 999px')
    })
  })

  describe('Shadow system (AC-08)', () => {
    it('defines all shadow tokens', () => {
      expect(variablesCss).toContain('--shadow-sm:')
      expect(variablesCss).toContain('--shadow:')
      expect(variablesCss).toContain('--shadow-lg:')
      expect(variablesCss).toContain('--shadow-glow:')
    })
  })

  describe('Transition token (AC-09)', () => {
    it('defines --transition with cubic-bezier', () => {
      expect(variablesCss).toMatch(/--transition:\s*all\s+0\.22s\s+cubic-bezier/)
    })
  })

  describe('Layout tokens (AC-10)', () => {
    it('defines header height and max width', () => {
      expect(variablesCss).toContain('--header-h: 68px')
      expect(variablesCss).toContain('--max-w: 1200px')
      expect(variablesCss).toContain('--section-py: 96px')
    })
  })

  describe('Preserved tokens (AC-11, AC-12)', () => {
    it('preserves spacing tokens', () => {
      expect(variablesCss).toContain('--spacing-xs: 0.25rem')
      expect(variablesCss).toContain('--spacing-sm: 0.5rem')
      expect(variablesCss).toContain('--spacing-md: 1rem')
      expect(variablesCss).toContain('--spacing-lg: 1.5rem')
      expect(variablesCss).toContain('--spacing-xl: 2rem')
      expect(variablesCss).toContain('--spacing-2xl: 3rem')
      expect(variablesCss).toContain('--spacing-3xl: 4rem')
      expect(variablesCss).toContain('--spacing-4xl: 6rem')
      expect(variablesCss).toContain('--spacing-5xl: 8rem')
    })

    it('preserves z-index tokens', () => {
      expect(variablesCss).toContain('--z-base: 0')
      expect(variablesCss).toContain('--z-dropdown: 100')
      expect(variablesCss).toContain('--z-sticky: 200')
      expect(variablesCss).toContain('--z-fixed: 300')
      expect(variablesCss).toContain('--z-modal: 500')
      expect(variablesCss).toContain('--z-tooltip: 700')
    })
  })

  describe('No old tokens remain (AC-15)', () => {
    const removedTokens = [
      '--bg-primary',
      '--bg-secondary',
      '--accent-primary',
      '--accent-functional',
      '--shadow-subtle',
      '--transition-fast',
      '--transition-normal',
      '--radius-max',
      '--content-max',
    ]

    it.each(removedTokens)('does NOT contain %s', (token) => {
      expect(variablesCss).not.toContain(`${token}:`)
    })
  })

  describe('WCAG AA Contrast Ratios (AC-14)', () => {
    function hexToRgb(hex: string): [number, number, number] {
      const r = parseInt(hex.slice(1, 3), 16) / 255
      const g = parseInt(hex.slice(3, 5), 16) / 255
      const b = parseInt(hex.slice(5, 7), 16) / 255
      return [r, g, b]
    }

    function luminance([r, g, b]: [number, number, number]): number {
      const a = [r, g, b].map((v) =>
        v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
      )
      return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
    }

    function contrastRatio(hex1: string, hex2: string): number {
      const l1 = luminance(hexToRgb(hex1))
      const l2 = luminance(hexToRgb(hex2))
      const lighter = Math.max(l1, l2)
      const darker = Math.min(l1, l2)
      return (lighter + 0.05) / (darker + 0.05)
    }

    const normalTextPairs: [string, string, string, string][] = [
      ['--text', '#1c1c1e', '--bg', '#fafaf8'],
      ['--text-secondary', '#555558', '--bg', '#fafaf8'],
      ['--text-secondary', '#555558', '--bg-warm', '#f0ece6'],
      ['--text-on-dark', '#e8e8f0', '--bg-dark', '#1a1a2e'],
      ['--text-on-dark', '#e8e8f0', '--bg-dark-2', '#16213e'],
      ['--text-on-dark-muted', '#9090b0', '--bg-dark', '#1a1a2e'],
      ['--text-on-dark-muted', '#9090b0', '--bg-dark-2', '#16213e'],
    ]

    it.each(normalTextPairs)(
      '%s on %s meets 4.5:1 ratio',
      (textName, textHex, bgName, bgHex) => {
        const ratio = contrastRatio(textHex, bgHex)
        expect(ratio).toBeGreaterThanOrEqual(4.5)
      }
    )

    it('--text-muted on --bg meets 4.5:1 ratio (WCAG AA)', () => {
      const ratio = contrastRatio('#707075', '#fafaf8')
      expect(ratio).toBeGreaterThanOrEqual(4.5)
    })

    it('--text-muted on --bg-warm meets 3:1 ratio (large text)', () => {
      const ratio = contrastRatio('#707075', '#f0ece6')
      expect(ratio).toBeGreaterThanOrEqual(3.0)
    })
  })
})
