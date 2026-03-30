import { buildEmailHtml, p, h3, ctaLink, divider, signature } from './base'

/**
 * W-1 — Valor (día 0)
 * Trigger: form submit en cualquier LP excepto LP-002
 * Asunto: Tu White Paper ya está listo — y hay algo más.
 */
export function w1Html(whitePaperUrl: string): string {
  const body = [
    p('Hola,'),
    p('Tu White Paper está listo. Podés descargarlo ahora:'),
    ctaLink(whitePaperUrl, 'Descargar: &ldquo;IA Generativa vs IA Operativa &mdash; Guía para equipos técnicos&rdquo;'),
    p('Antes de que lo cerrés, una línea sobre qué es Carbono14.'),
    p('No somos una consultora que instala ChatGPT y cobra un fee. Somos un equipo técnico especializado en IA que funciona en producción &mdash; sistemas que toman decisiones reales en procesos reales, con trazabilidad, sin improvisación.'),
    p('La diferencia importa. Mucho.'),
    p('En los próximos días te voy a compartir un par de ideas que creemos que vale la pena que conozcas. Sin spam, sin pitch permanente. Si en algún momento sentís que esto no es para vos, el link para darte de baja está abajo.'),
    p('Esperamos que la guía sea útil.'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'La guía de IA operativa para empresas que operan en el mundo real, no en el demo.',
    body,
  })
}

export const W1_SUBJECT = 'Tu White Paper ya está listo — y hay algo más.'
export const W1_SUBJECT_AB = 'Descargaste el White Paper. Esto es lo que sigue.'

/**
 * W-2 — Autoridad (día 3)
 * Trigger: 3 días después de W-1
 * Asunto: Por qué "funciona en el demo" no es suficiente.
 */
export function w2Html(whitePaperUrl: string): string {
  const body = [
    p('Hola,'),
    p('Hay algo que casi ningún proveedor de IA menciona cuando muestra su demo: <strong>el sistema improvisa</strong>.'),
    p('ChatGPT no alcanza para operaciones críticas. No porque sea malo &mdash; porque fue diseñado para otra cosa. Fue diseñado para ser flexible, creativo, conversacional. Esas son virtudes en un asistente. Son riesgos en un proceso de auditoría, aprobación de créditos, o gestión de reclamos.'),
    p('La propiedad que hace la diferencia se llama <strong>determinismo operativo</strong>: dado el mismo input, el sistema produce el mismo output. Siempre. Con trazabilidad completa de cada decisión.'),
    p('En Carbono14 trabajamos con un proceso de tres etapas:'),
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;width:100%;">
      <tr><td style="padding:8px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#2d2d3a;line-height:1.6;"><strong>1. Auditoría técnica</strong> &mdash; Entendemos el proceso, los datos, los requisitos de compliance y los puntos de falla. En menos de 48 horas tenés un diagnóstico.</td></tr>
      <tr><td style="padding:8px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#2d2d3a;line-height:1.6;"><strong>2. Implementación</strong> &mdash; Construimos el sistema de IA con las garantías operativas que necesita tu contexto: auditoría de decisiones, fallback controlado, integración con tus sistemas.</td></tr>
      <tr><td style="padding:8px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#2d2d3a;line-height:1.6;"><strong>3. Operación</strong> &mdash; No desaparecemos después del deploy. Monitoreamos, ajustamos y respondemos cuando algo cambia.</td></tr>
    </table>`,
    p('Si te interesa profundizar en el concepto de determinismo, la sección de gobernanza del white paper que descargaste la semana pasada lo desarrolla con ejemplos concretos.'),
    ctaLink(whitePaperUrl, 'Ir a la sección de gobernanza del White Paper'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'Hay una propiedad que separa IA útil de IA peligrosa. Se llama determinismo.',
    body,
  })
}

export const W2_SUBJECT = 'Por qué "funciona en el demo" no es suficiente.'
export const W2_SUBJECT_AB = 'El problema del modelo que improvisa en producción.'

/**
 * W-3 — CTA directo (día 7)
 * Trigger: 4 días después de W-2 (7 días desde W-1)
 * Asunto: 48 horas para saber si tu empresa está lista para IA operativa.
 */
export function w3Html(): string {
  const body = [
    p('Hola,'),
    p('Una cosa que escuchamos seguido: <em>&ldquo;Sí, lo que hacen suena bien, pero no sabemos si nuestros procesos están listos para IA.&rdquo;</em>'),
    p('Es una pregunta honesta. Y tiene respuesta concreta.'),
    p('La auditoría técnica gratuita de Carbono14 existe exactamente para eso. En una sesión de trabajo, con tu equipo técnico y operativo, evaluamos:'),
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;width:100%;">
      <tr><td style="padding:8px 0 8px 12px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#2d2d3a;line-height:1.6;border-left:3px solid #d44030;"><strong>&iquest;Qué procesos son automatizables hoy?</strong> &mdash; No todos lo son. Te decimos cuáles sí y cuáles todavía no.</td></tr>
      <tr><td style="padding:8px 0 8px 12px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#2d2d3a;line-height:1.6;border-left:3px solid #d44030;"><strong>&iquest;Qué datos tenés y cómo están estructurados?</strong> &mdash; El diagnóstico de datos es la mitad del trabajo.</td></tr>
      <tr><td style="padding:8px 0 8px 12px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#2d2d3a;line-height:1.6;border-left:3px solid #d44030;"><strong>&iquest;Qué garantías operativas necesitás?</strong> &mdash; Compliance, trazabilidad, fallback, integración con sistemas existentes.</td></tr>
      <tr><td style="padding:8px 0 8px 12px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#2d2d3a;line-height:1.6;border-left:3px solid #d44030;"><strong>&iquest;Cuál sería el ROI esperado?</strong> &mdash; No con números inventados. Con tu proceso real y tus números reales.</td></tr>
    </table>`,
    p('El resultado es un informe técnico que es tuyo, sin importar qué decidas después.'),
    p('Sin compromiso. Sin contrato previo. Solo información útil para tomar una buena decisión.'),
    ctaLink('https://carbono-14.net/auditoria', 'Solicitá tu auditoría técnica gratuita'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'No te pedimos que compres nada. Te pedimos 30 minutos de conversación.',
    body,
  })
}

export const W3_SUBJECT = '48 horas para saber si tu empresa está lista para IA operativa.'
export const W3_SUBJECT_AB = 'La auditoría es gratuita. El diagnóstico, tuyo.'
