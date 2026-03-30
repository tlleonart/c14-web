import { buildEmailHtml, p, ctaLink, divider, signature } from './base'

const DEFAULT_CALENDLY_URL = 'https://calendly.com/tomas-carbono-14/30min'

/**
 * R-1 — Insight nuevo (día 0 del trigger de inactividad 30+días)
 * Asunto: Algo cambió en los últimos 30 días en IA operativa.
 */
export function r1Html(): string {
  const body = [
    p('Hola,'),
    p('No te escribimos para hablar de ChatGPT ni del último modelo de OpenAI.'),
    p('Te escribimos porque en los últimos meses vimos algo concreto en el mercado: las empresas en Argentina y LATAM que están avanzando con IA no son las que encontraron el mejor modelo de lenguaje. Son las que encontraron el proceso correcto para implementarlo.'),
    p('El patrón que estamos viendo repetirse:'),
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;width:100%;">
      <tr>
        <td style="padding:12px 16px;background-color:#f9f9fb;border-radius:6px;margin-bottom:8px;">
          <p style="margin:0 0 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#6b6b7a;">FASE 1 (ya pasó en muchas empresas)</p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">Experimentación con herramientas generativas &mdash; ChatGPT, Copilot, herramientas de generación de contenido. Resultados mixtos, valor limitado en procesos críticos.</p>
        </td>
      </tr>
    </table>`,
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;width:100%;">
      <tr>
        <td style="padding:12px 16px;background-color:#fff3f1;border-left:3px solid #d44030;border-radius:0 6px 6px 0;">
          <p style="margin:0 0 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#d44030;">FASE 2 (donde están las empresas que avanzan ahora)</p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">Identificación de 1&ndash;2 procesos operativos específicos donde la IA puede funcionar con garantías reales. Implementación con determinismo. Medición de resultados.</p>
        </td>
      </tr>
    </table>`,
    p('La diferencia entre las dos fases es la pregunta que se hacen: ya no es &ldquo;&iquest;podemos usar IA?&rdquo; sino &ldquo;&iquest;en qué proceso exactamente y con qué garantías operativas?&rdquo;.'),
    p('&iquest;En cuál de las dos fases está tu empresa hoy?'),
    p('<em>(Podés responder directamente este correo &mdash; leemos todo.)</em>'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'No es sobre lo que todos están hablando. Es sobre lo que está funcionando.',
    body,
  })
}

export const R1_SUBJECT = 'Algo cambió en los últimos 30 días en IA operativa.'
export const R1_SUBJECT_AB = 'Lo que están haciendo las empresas LATAM con IA en 2026.'

/**
 * R-2 — Contenido concreto (día 7)
 * Trigger: 7 días después de R-1
 * Asunto: Por qué el 70% de los proyectos de IA en LATAM fallan en producción.
 */
export function r2Html(): string {
  const body = [
    p('Hola,'),
    p('Hay una estadística que circula bastante: la mayoría de los proyectos de IA empresarial no llegan a producción, o no escalan cuando llegan.'),
    p('No es falta de presupuesto. No es falta de talento. Es un error que aparece en el diseño inicial.'),
    `<p style="margin:0 0 20px 0;padding:16px 20px;background-color:#fff3f1;border-left:3px solid #d44030;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#0a0a0f;font-weight:700;border-radius:0 6px 6px 0;">El error: construir sobre incertidumbre.</p>`,
    p('Los modelos de lenguaje generativo son potentes porque son flexibles. Pueden responder preguntas que no esperaban, interpretar contexto ambiguo, generar texto que &ldquo;suena bien&rdquo;. Esas propiedades los hacen ideales para asistentes, generadores de contenido, chatbots de atención al cliente.'),
    p('Esas mismas propiedades los hacen riesgosos en procesos operativos donde la respuesta tiene que ser la misma hoy que mañana, donde cada decisión tiene que poder auditarse, donde un error tiene consecuencias reales.'),
    p('El problema no es el modelo. Es que se usó la herramienta equivocada para el trabajo.'),
    p('<strong>IA operativa funciona sobre principios distintos:</strong> reglas explícitas, outputs predecibles, trazabilidad completa, fallback controlado. No es más simple que IA generativa &mdash; es diferente.'),
    p('Las empresas que están escalando en LATAM son las que separaron estos dos mundos y eligieron la herramienta correcta para cada problema.'),
    p('Si querés profundizar en esto, el white paper de Carbono14 tiene la versión completa con ejemplos concretos:'),
    ctaLink('https://carbono-14.net/white-paper', 'Leer &ldquo;IA Generativa vs IA Operativa&rdquo;'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'No es falta de presupuesto ni de talento. Es un error de arquitectura.',
    body,
  })
}

export const R2_SUBJECT = 'Por qué el 70% de los proyectos de IA en LATAM fallan en producción.'
export const R2_SUBJECT_AB = 'El error más común en implementaciones de IA — y cómo evitarlo.'

/**
 * R-3 — Último intento (día 14)
 * Trigger: 7 días después de R-2 (14 días desde R-1)
 * Asunto: Último correo antes de darte de baja.
 * Nota: Si no hay actividad en 14 días post-envío → unsubscribe automático en Resend
 */
export function r3Html(calendlyUrl: string = DEFAULT_CALENDLY_URL): string {
  const body = [
    p('Hola,'),
    p('Este es el último correo que te enviamos antes de darte de baja de la lista de Carbono14.'),
    p('Si IA operativa ya no es relevante para tu empresa, o si simplemente preferís no recibir más correos nuestros, no hay ningún problema. Solo hacé click acá y no te escribimos más:'),
    ctaLink('{{{RESEND_UNSUBSCRIBE_URL}}}', 'Darse de baja'),
    p('Si IA operativa sigue siendo algo que estás explorando pero el momento no es ahora, podemos coordinar 15 minutos cuando el timing sea mejor:'),
    ctaLink(calendlyUrl, 'Agendar 15 minutos'),
    p('Sin agenda de ventas. Solo una conversación.'),
    p('Si no hacés nada, entendemos que el tema ya no es prioritario y dejamos de escribirte.'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'Si esto ya no es para vos, no hay problema. Si sigue siendo relevante, podemos coordinar.',
    body,
  })
}

export const R3_SUBJECT = 'Último correo antes de darte de baja.'
