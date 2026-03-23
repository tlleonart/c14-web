'use client'

import { useState } from 'react'
import styles from './Faq.module.css'

const FAQ_ITEMS = [
  {
    question: '¿Qué es la IA operativa y en qué se diferencia de ChatGPT?',
    answer:
      'La IA operativa es un sistema diseñado para ejecutar procesos de negocio con reglas definidas, resultados deterministas y trazabilidad completa. A diferencia de la IA generativa (como ChatGPT), que genera respuestas probables a partir de patrones, la IA operativa sigue reglas de negocio explícitas: misma entrada, misma salida, siempre. ChatGPT fue diseñado para generar contenido — la IA operativa fue diseñada para operar procesos donde cada decisión debe poder auditarse.',
  },
  {
    question: '¿Cuánto cuesta implementar IA operativa?',
    answer:
      'Ofrecemos una validación gratuita de tu proceso en menos de 48 horas, donde evaluamos la factibilidad de automatización y te damos próximos pasos recomendados — sin compromiso ni costo. Si decidís avanzar, la implementación se cotiza a medida según la complejidad de tus procesos.',
  },
  {
    question: '¿Para qué industrias funciona la IA operativa?',
    answer:
      'Funciona para cualquier empresa que opere procesos repetitivos con reglas formales que requieran trazabilidad. Las industrias donde vemos mayor impacto son: finanzas (conciliación, aprobación de créditos), logística (inventario, ruteo), salud (documentación clínica), seguros (evaluación de siniestros) y legal (validación de contratos).',
  },
  {
    question: '¿Qué diferencia a Carbono14 de otras consultoras de IA?',
    answer:
      'Tres cosas: somos AI-first (nuestro propio equipo opera con agentes autónomos), construimos con determinismo (reglas explícitas, logs auditables, escalamiento humano, sin cajas negras), y empezamos con una validación gratuita en menos de 48 horas — sin contrato y sin compromiso.',
  },
  {
    question: '¿Cuánto tarda una implementación típica?',
    answer:
      'La validación gratuita toma menos de 48 horas. La auditoría técnica y especificación, 1-2 semanas. La implementación, 2-8 semanas. El proceso completo desde la validación hasta producción típicamente toma entre 4 y 12 semanas.',
  },
]

export const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={styles.section}>
      <div className="container">
        <span className="section-label">Preguntas frecuentes</span>
        <h2 className={styles.heading}>¿Tenés dudas? Las respondemos.</h2>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <svg
                  className={`${styles.chevron} ${openIndex === i ? styles.chevronOpen : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === i && (
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
