import { buildEmailHtml, p, ctaLink, divider, signature } from './base'

/**
 * N-1 — Confirmación + Welcome (día 0)
 * Trigger: form submit en LP-002 (white paper). Enviado inmediatamente por sendWhitePaperEmail.ts
 * Asunto: Tu White Paper llegó. Esto es lo que vas a encontrar adentro.
 */
export function n1Html(whitePaperUrl: string): string {
  const body = [
    p('Hola,'),
    p('Tu descarga está lista:'),
    ctaLink(whitePaperUrl, 'Descargar: &ldquo;IA Generativa vs IA Operativa &mdash; Guía para equipos técnicos&rdquo;'),
    p('El white paper tiene tres partes:'),
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;width:100%;">
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
          <p style="margin:0 0 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">1. Por qué las dos categorías no son intercambiables</p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">La diferencia no es de calidad sino de diseño. IA generativa y IA operativa fueron pensadas para resolver problemas distintos. Entender eso evita errores caros.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
          <p style="margin:0 0 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">2. Determinismo operativo &mdash; qué es y por qué importa en producción</p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">El atributo que diferencia un sistema que &ldquo;funciona en el demo&rdquo; de uno que funciona cuando la operación depende de él.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 0;">
          <p style="margin:0 0 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">3. Cómo evaluar si un proceso está listo para IA operativa</p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">Tres criterios concretos. Podés aplicarlos a tus procesos sin necesitar un consultor.</p>
        </td>
      </tr>
    </table>`,
    p('En los próximos días te voy a compartir contenido relacionado &mdash; sin spam, con cadencia razonable. Si en algún momento preferís no recibirlo más, el link está abajo.'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'Tu white paper ya está en tu inbox. Esto es lo que vas a encontrar.',
    body,
  })
}

export const N1_SUBJECT = 'Tu White Paper llegó. Esto es lo que vas a encontrar adentro.'
export const N1_SUBJECT_AB = '"IA Generativa vs IA Operativa" — ya está en tu inbox.'

/**
 * N-2 — Contenido profundo: determinismo operativo (día 2)
 * Trigger: 2 días después de N-1
 * Asunto: Los 3 criterios para saber si tu proceso puede automatizarse con IA.
 */
export function n2Html(): string {
  const body = [
    p('Hola,'),
    p('Una pregunta que nos hacen seguido: <em>&ldquo;&iquest;Cómo sabemos qué procesos son candidatos reales para IA operativa?&rdquo;</em>'),
    p('Es la pregunta correcta. Acá van tres criterios que usamos en nuestras auditorías:'),
    divider,
    `<p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;line-height:1.4;">Criterio 1: &iquest;El proceso tiene reglas suficientemente estables?</p>`,
    p('IA operativa trabaja bien cuando las reglas del proceso son conocidas, documentables y relativamente estables. No porque no pueda manejar excepciones &mdash; sino porque las excepciones deben estar definidas de antemano.'),
    `<p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2d2d3a;line-height:1.6;"><em><strong>Señal positiva:</strong> El proceso tiene un procedimiento escrito o implícito que los operadores aplican de forma consistente.</em></p>`,
    `<p style="margin:0 0 20px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2d2d3a;line-height:1.6;"><em><strong>Señal negativa:</strong> Cada caso es &ldquo;especial&rdquo; y las decisiones dependen de criterio individual no documentado.</em></p>`,
    divider,
    `<p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;line-height:1.4;">Criterio 2: &iquest;Los datos del proceso son estructurados o estructurables?</p>`,
    p('Un sistema de IA operativa necesita leer datos para tomar decisiones. Si los datos existen pero están en PDFs sin estructura, emails sueltos o en la cabeza de las personas, el trabajo previo es de estructuración &mdash; y eso tiene un costo.'),
    `<p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2d2d3a;line-height:1.6;"><em><strong>Señal positiva:</strong> Los datos clave del proceso están en un sistema (ERP, CRM, base de datos), aunque sea desordenado.</em></p>`,
    `<p style="margin:0 0 20px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2d2d3a;line-height:1.6;"><em><strong>Señal negativa:</strong> El 80% de la información necesaria para ejecutar el proceso es verbal o está en documentos no estructurados.</em></p>`,
    divider,
    `<p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;line-height:1.4;">Criterio 3: &iquest;Hay un criterio claro de éxito / error?</p>`,
    p('Los sistemas de IA operativa necesitan saber cuándo funcionaron bien y cuándo no. Ese criterio tiene que existir antes de la implementación &mdash; no se puede inferir después.'),
    `<p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2d2d3a;line-height:1.6;"><em><strong>Señal positiva:</strong> Hay un SLA, una tasa de error conocida, o una métrica operativa que define si el proceso fue exitoso.</em></p>`,
    `<p style="margin:0 0 20px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2d2d3a;line-height:1.6;"><em><strong>Señal negativa:</strong> El éxito del proceso es &ldquo;cuando el cliente está contento&rdquo; &mdash; sin métrica objetiva.</em></p>`,
    divider,
    p('Estos tres criterios son el punto de partida de toda auditoría técnica que hacemos. Si querés aplicarlos a tus procesos, la próxima semana te compartimos cómo es el proceso de auditoría paso a paso.'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'No todos los procesos son automatizables hoy. Estos criterios te ayudan a priorizar.',
    body,
  })
}

export const N2_SUBJECT = 'Los 3 criterios para saber si tu proceso puede automatizarse con IA.'
export const N2_SUBJECT_AB = '¿Qué hace que un proceso sea automatizable? Tres preguntas concretas.'

/**
 * N-3 — Cómo funciona la auditoría en 48 horas (día 7)
 * Trigger: 5 días después de N-2 (7 días desde N-1)
 * Asunto: Cómo funciona la auditoría técnica en 48 horas.
 */
export function n3Html(): string {
  const body = [
    p('Hola,'),
    p('La auditoría técnica gratuita de Carbono14 tiene una estructura definida. Acá va el detalle de cómo funciona.'),
    divider,
    `<p style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">Hora 0&ndash;2: Sesión de intake</p>`,
    p('Una videollamada de trabajo, no una presentación. Participan los decisores técnicos y operativos del proceso que queremos analizar. Agenda: el proceso, los datos disponibles, los sistemas actuales, los requisitos de compliance, los puntos de falla conocidos.'),
    p('Sin slides. Sin template genérico. Preguntas concretas para entender tu contexto específico.'),
    divider,
    `<p style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">Hora 2&ndash;36: Análisis interno</p>`,
    p('Nuestro equipo analiza la información del intake. Evaluamos: viabilidad técnica, arquitectura posible, datos necesarios vs. disponibles, riesgos operativos, esfuerzo estimado, ROI esperado.'),
    p('No escribimos código en esta etapa. Solo análisis.'),
    divider,
    `<p style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">Hora 36&ndash;48: Entrega del diagnóstico</p>`,
    `<p style="margin:0 0 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#2d2d3a;line-height:1.7;">Un documento técnico con:</p>`,
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;width:100%;">
      <tr><td style="padding:4px 0 4px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">&bull; Evaluación del proceso: qué es automatizable hoy, qué no lo es y por qué</td></tr>
      <tr><td style="padding:4px 0 4px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">&bull; Arquitectura sugerida de IA operativa para el proceso</td></tr>
      <tr><td style="padding:4px 0 4px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">&bull; Datos requeridos y estado actual de esos datos</td></tr>
      <tr><td style="padding:4px 0 4px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">&bull; Riesgos identificados y cómo mitigarlos</td></tr>
      <tr><td style="padding:4px 0 4px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">&bull; Estimación de esfuerzo y ROI con tus números</td></tr>
    </table>`,
    p('Este documento es tuyo. Sin importar qué decidas después.'),
    divider,
    `<p style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">Qué NO hacemos en la auditoría:</p>`,
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;width:100%;">
      <tr><td style="padding:4px 0 4px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">&bull; No te mostramos un demo genérico</td></tr>
      <tr><td style="padding:4px 0 4px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">&bull; No te pedimos que firmes nada</td></tr>
      <tr><td style="padding:4px 0 4px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">&bull; No empezamos a vender antes de terminar el diagnóstico</td></tr>
      <tr><td style="padding:4px 0 4px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">&bull; No prometemos números que no podemos justificar</td></tr>
    </table>`,
    p('Si te interesa conocer el proceso completo, hay más detalle en el sitio.'),
    ctaLink('https://carbono-14.net/auditoria', 'Conocé el proceso completo en carbono-14.net'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'Qué hacemos, qué entregamos y — tan importante — qué no hacemos.',
    body,
  })
}

export const N3_SUBJECT = 'Cómo funciona la auditoría técnica en 48 horas.'
export const N3_SUBJECT_AB = 'Qué pasa exactamente en las 48 horas de auditoría.'

/**
 * N-4 — Objeciones respondidas (día 14)
 * Trigger: 7 días después de N-3 (14 días desde N-1)
 * Asunto: Las 3 preguntas que nos hacen antes de la primera reunión.
 */
export function n4Html(): string {
  const body = [
    p('Hola,'),
    p('Hay tres preguntas que escuchamos casi siempre antes de que alguien agende la primera reunión. Las respondemos acá directamente.'),
    divider,
    `<p style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">&ldquo;&iquest;Tenemos procesos suficientemente maduros para IA?&rdquo;</p>`,
    p('La mayoría de las empresas que nos hacen esta pregunta sí tienen procesos candidatos &mdash; aunque no parezca.'),
    p('La madurez del proceso no es el criterio más importante. Lo que importa es que el proceso tenga reglas claras, datos disponibles y un criterio de éxito medible. Hemos trabajado con empresas donde el proceso era &ldquo;informal&rdquo; pero funcionaba con consistencia &mdash; y eso es suficiente para empezar.'),
    p('Si no estás seguro, la auditoría técnica existe exactamente para responder esa pregunta con datos concretos de tu operación.'),
    divider,
    `<p style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">&ldquo;&iquest;Cuánto tiempo lleva la implementación?&rdquo;</p>`,
    p('Depende del proceso y la complejidad de la integración. Como referencia:'),
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;width:100%;">
      <tr><td style="padding:6px 0 6px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">&bull; Procesos simples con datos estructurados: <strong>4&ndash;8 semanas</strong></td></tr>
      <tr><td style="padding:6px 0 6px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">&bull; Procesos medios con integración a sistemas existentes: <strong>8&ndash;16 semanas</strong></td></tr>
      <tr><td style="padding:6px 0 6px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2d2d3a;line-height:1.6;">&bull; Procesos complejos con múltiples fuentes de datos o requisitos de compliance estrictos: <strong>16&ndash;24 semanas</strong></td></tr>
    </table>`,
    p('No damos timelines antes de hacer la auditoría. La razón es simple: sin entender el proceso real, cualquier número es una suposición. Preferimos decírtelo después de saber con qué estamos trabajando.'),
    divider,
    `<p style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0a0a0f;">&ldquo;&iquest;Qué pasa si el sistema falla en producción?&rdquo;</p>`,
    p('Es la pregunta más importante y nos alegra que la hagas.'),
    p('Todos los sistemas que implementamos tienen tres capas de resiliencia:'),
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;width:100%;">
      <tr><td style="padding:8px 0;"><p style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#0a0a0f;">1. Fallback definido</p><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">Si el sistema de IA no puede tomar una decisión con la confianza requerida, deriva al operador humano. No improvisa.</p></td></tr>
      <tr><td style="padding:8px 0;"><p style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#0a0a0f;">2. Trazabilidad completa</p><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">Cada decisión del sistema queda registrada con su input, output y nivel de confianza. Sabés exactamente qué pasó y por qué.</p></td></tr>
      <tr><td style="padding:8px 0;"><p style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#0a0a0f;">3. Monitoreo activo</p><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b6b7a;line-height:1.6;">No desaparecemos después del deploy. Tenemos alertas configuradas y respondemos cuando algo se desvía de los parámetros normales.</p></td></tr>
    </table>`,
    p('Los sistemas que construimos están diseñados para fallar de forma controlada. Eso no es marketing &mdash; es arquitectura.'),
    divider,
    p('Si tu pregunta no está acá, respondé este correo directamente. Leemos todo.'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'Las respondemos directamente. Sin evasivas.',
    body,
  })
}

export const N4_SUBJECT = 'Las 3 preguntas que nos hacen antes de la primera reunión.'
export const N4_SUBJECT_AB = 'Antes de agendar: las dudas más comunes sobre IA operativa.'

/**
 * N-5 — CTA directo a auditoría (día 21)
 * Trigger: 7 días después de N-4 (21 días desde N-1)
 * Asunto: ¿Querés saber si tu proceso está listo para IA operativa?
 */
export function n5Html(): string {
  const body = [
    p('Hola,'),
    p('Breve y directo.'),
    p('En las últimas tres semanas te compartimos el white paper, los criterios de automatización, cómo funciona la auditoría y las preguntas más comunes.'),
    p('Si llegaste hasta acá y todavía no agendaste, probablemente haya una razón. Puede ser timing, puede ser que el tema todavía no es prioridad, o puede ser que necesitás más información antes de dar un paso.'),
    p('Cualquiera de esas razones es válida.'),
    p('Lo que sí puedo decirte es esto: la auditoría técnica es gratuita, toma menos de 48 horas, y el diagnóstico que recibís es tuyo independientemente de lo que pase después. No hay contrato, no hay compromiso de continuidad, no hay pitch en el medio de la sesión de trabajo.'),
    p('Si el momento es ahora, el link está acá:'),
    ctaLink('https://carbono-14.net/auditoria', 'Solicitá tu auditoría técnica gratuita'),
    p('Si el momento es más adelante, no hay problema. Seguimos en contacto.'),
    signature,
  ].join('\n')

  return buildEmailHtml({
    previewText: 'Sin compromiso, sin contrato. Solo un diagnóstico honesto de tu situación.',
    body,
  })
}

export const N5_SUBJECT = '¿Querés saber si tu proceso está listo para IA operativa?'
export const N5_SUBJECT_AB = 'La auditoría es gratuita. Esto es lo que incluye.'
