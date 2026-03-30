import { describe, it, expect } from 'vitest'
import { buildEmailHtml } from './base'
import { w1Html, w2Html, w3Html, W1_SUBJECT, W2_SUBJECT, W3_SUBJECT } from './welcome-sequence'
import {
  n1Html,
  n2Html,
  n3Html,
  n4Html,
  n5Html,
  N1_SUBJECT,
  N2_SUBJECT,
  N3_SUBJECT,
  N4_SUBJECT,
  N5_SUBJECT,
} from './nurturing-white-paper'
import { r1Html, r2Html, r3Html, R1_SUBJECT, R2_SUBJECT, R3_SUBJECT } from './re-engagement'

const TEST_WP_URL = 'https://example.com/white-paper.pdf'
const TEST_CALENDLY = 'https://calendly.com/test'

describe('buildEmailHtml (base)', () => {
  it('returns a valid HTML string with required layout elements', () => {
    const html = buildEmailHtml({ body: '<p>Test</p>' })
    expect(html).toContain('<!DOCTYPE html>')
    expect(html).toContain('logo-email.png')
    expect(html).toContain('alt="Carbono14"')
    expect(html).toContain('carbono-14.net')
    // TASK-A06: Resend placeholder replaced with static contact URL (interim fix)
    expect(html).not.toContain('{{{RESEND_UNSUBSCRIBE_URL}}}')
    expect(html).toContain('https://carbono-14.net/contacto')
    expect(html).toContain('Darse de baja')
  })

  it('includes preview text when provided', () => {
    const html = buildEmailHtml({ previewText: 'Preview here', body: '<p>Body</p>' })
    expect(html).toContain('Preview here')
  })

  it('renders body content inside the container', () => {
    const html = buildEmailHtml({ body: '<p>Hello world</p>' })
    expect(html).toContain('Hello world')
  })
})

describe('Welcome Sequence', () => {
  it('W1: returns HTML with white paper download link', () => {
    const html = w1Html(TEST_WP_URL)
    expect(html).toContain(TEST_WP_URL)
    expect(html).toContain('IA Generativa vs IA Operativa')
    expect(html).toContain('Carbono14')
  })

  it('W1: subject is defined', () => {
    expect(W1_SUBJECT).toBeTruthy()
    expect(W1_SUBJECT).toContain('White Paper')
  })

  it('W2: returns HTML with determinismo operativo content', () => {
    const html = w2Html(TEST_WP_URL)
    expect(html).toContain(TEST_WP_URL)
    expect(html).toContain('determinismo')
    expect(html).toContain('Carbono14')
  })

  it('W2: subject is defined', () => {
    expect(W2_SUBJECT).toBeTruthy()
    expect(W2_SUBJECT.length).toBeGreaterThan(10)
  })

  it('W3: returns HTML with auditoría CTA', () => {
    const html = w3Html()
    expect(html).toContain('carbono-14.net')
    expect(html).toContain('auditoría')
    expect(html).toContain('gratuita')
  })

  it('W3: subject is defined', () => {
    expect(W3_SUBJECT).toBeTruthy()
    expect(W3_SUBJECT.length).toBeGreaterThan(10)
  })
})

describe('Nurturing White Paper Sequence', () => {
  it('N1: returns HTML with PDF download link', () => {
    const html = n1Html(TEST_WP_URL)
    expect(html).toContain(TEST_WP_URL)
    expect(html).toContain('IA Generativa vs IA Operativa')
    expect(html).toContain('tres partes')
  })

  it('N1: subject matches Alexia spec', () => {
    expect(N1_SUBJECT).toBe(
      'Tu White Paper llegó. Esto es lo que vas a encontrar adentro.',
    )
  })

  it('N2: returns HTML with 3 automation criteria', () => {
    const html = n2Html()
    expect(html).toContain('Criterio 1')
    expect(html).toContain('Criterio 2')
    expect(html).toContain('Criterio 3')
  })

  it('N2: subject is defined', () => {
    expect(N2_SUBJECT).toBeTruthy()
    expect(N2_SUBJECT).toContain('criterios')
  })

  it('N3: returns HTML with 48h audit process', () => {
    const html = n3Html()
    expect(html).toContain('0')
    expect(html).toContain('intake')
    expect(html).toContain('diagnóstico')
  })

  it('N3: subject is defined', () => {
    expect(N3_SUBJECT).toBeTruthy()
    expect(N3_SUBJECT).toContain('48 horas')
  })

  it('N4: returns HTML with 3 objections answered', () => {
    const html = n4Html()
    expect(html).toContain('Fallback')
    expect(html).toContain('Trazabilidad')
    expect(html).toContain('Monitoreo')
  })

  it('N4: subject is defined', () => {
    expect(N4_SUBJECT).toBeTruthy()
    expect(N4_SUBJECT).toContain('preguntas')
  })

  it('N5: returns HTML with final auditoría CTA', () => {
    const html = n5Html()
    expect(html).toContain('auditoría')
    expect(html).toContain('carbono-14.net')
  })

  it('N5: subject is defined', () => {
    expect(N5_SUBJECT).toBeTruthy()
    expect(N5_SUBJECT.length).toBeGreaterThan(10)
  })
})

describe('Re-engagement Sequence', () => {
  it('R1: returns HTML with Fase 1 / Fase 2 content', () => {
    const html = r1Html()
    expect(html).toContain('FASE 1')
    expect(html).toContain('FASE 2')
    expect(html).toContain('LATAM')
  })

  it('R1: subject is defined', () => {
    expect(R1_SUBJECT).toBeTruthy()
    expect(R1_SUBJECT).toContain('30 días')
  })

  it('R2: returns HTML with failure reason content', () => {
    const html = r2Html()
    expect(html).toContain('incertidumbre')
    expect(html).toContain('predecibles')
    expect(html).toContain('carbono-14.net')
  })

  it('R2: subject is defined', () => {
    expect(R2_SUBJECT).toBeTruthy()
    expect(R2_SUBJECT).toContain('LATAM')
  })

  it('R3: returns HTML with unsubscribe and calendly links', () => {
    const html = r3Html(TEST_CALENDLY)
    expect(html).toContain(TEST_CALENDLY)
    expect(html).toContain('Darse de baja')
    expect(html).toContain('último correo')
  })

  it('R3: uses default calendly URL when not provided', () => {
    const html = r3Html()
    expect(html).toContain('calendly.com')
  })

  it('R3: subject is defined', () => {
    expect(R3_SUBJECT).toBeTruthy()
    expect(R3_SUBJECT).toContain('baja')
  })
})
