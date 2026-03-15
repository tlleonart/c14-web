import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const globalsCss = fs.readFileSync(
  path.resolve(__dirname, '../../app/globals.css'),
  'utf-8'
)

describe('globals.css', () => {
  describe('Base styles use new tokens', () => {
    it('body uses --text (not --text-primary)', () => {
      expect(globalsCss).toContain('color: var(--text)')
      expect(globalsCss).not.toContain('var(--text-primary)')
    })

    it('body uses --bg (not --bg-primary)', () => {
      expect(globalsCss).toContain('background: var(--bg)')
      expect(globalsCss).not.toContain('var(--bg-primary)')
    })

    it('headings use --font-body (not --font-headline)', () => {
      expect(globalsCss).not.toContain('--font-headline')
      expect(globalsCss).toMatch(/h1.*\{[\s\S]*?font-family:\s*var\(--font-body\)/m)
    })

    it('links use --transition (not --transition-fast)', () => {
      expect(globalsCss).not.toContain('--transition-fast')
      expect(globalsCss).not.toContain('--transition-normal')
    })

    it('focus-visible uses --primary (not --accent-primary)', () => {
      expect(globalsCss).not.toContain('--accent-primary')
      expect(globalsCss).toMatch(/focus-visible[\s\S]*?var\(--primary\)/)
    })
  })

  describe('Utility classes from mockup', () => {
    it('has .container class', () => {
      expect(globalsCss).toContain('.container')
      expect(globalsCss).toContain('var(--max-w)')
    })

    it('has .section-label class with .dark and .blue variants', () => {
      expect(globalsCss).toContain('.section-label')
      expect(globalsCss).toContain('.section-label.dark')
      expect(globalsCss).toContain('.section-label.blue')
    })

    it('has .text-mono class', () => {
      expect(globalsCss).toContain('.text-mono')
    })

    it('has .text-display class', () => {
      expect(globalsCss).toContain('.text-display')
    })

    it('has button classes', () => {
      expect(globalsCss).toContain('.btn')
      expect(globalsCss).toContain('.btn-primary')
      expect(globalsCss).toContain('.btn-secondary')
      expect(globalsCss).toContain('.btn-outline-dark')
      expect(globalsCss).toContain('.btn-lg')
    })

    it('has .card class', () => {
      expect(globalsCss).toContain('.card')
    })
  })

  describe('Preserved utilities', () => {
    it('preserves .fadeIn utility', () => {
      expect(globalsCss).toContain('.fadeIn')
      expect(globalsCss).toContain('.fadeIn.visible')
    })

    it('preserves prefers-reduced-motion', () => {
      expect(globalsCss).toContain('prefers-reduced-motion')
    })
  })
})
