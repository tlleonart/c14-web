import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://carbono-14.net'

function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Carbono14',
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description:
      'Sistemas de IA operativa determinista para empresas. Agentes con reglas formales, resultados verificables y escalamiento a humanos.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@carbono-14.net',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: ['https://linkedin.com/company/carbono14'],
  }
}

function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Carbono14',
    url: siteUrl,
    description:
      'IA operativa determinista para empresas. Agentes con reglas formales, resultados verificables y escalamiento a humanos.',
    inLanguage: 'es',
  }
}

const SERVICES = [
  'Agentes de IA operativa',
  'Consultoría de IA',
  'Monitoreo y operación de agentes',
  'Desarrollo a medida',
]

function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios de Carbono14',
    description: 'Servicios de tecnología e inteligencia artificial',
    itemListElement: SERVICES.map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name,
        provider: {
          '@type': 'Organization',
          name: 'Carbono14',
        },
        serviceType: name,
      },
    })),
  }
}

function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Qué es la IA operativa y en qué se diferencia de ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'La IA operativa es un sistema diseñado para ejecutar procesos de negocio con reglas definidas, resultados deterministas y trazabilidad completa. A diferencia de la IA generativa (como ChatGPT), que genera respuestas probables a partir de patrones, la IA operativa sigue reglas de negocio explícitas: misma entrada, misma salida, siempre.' } },
      { '@type': 'Question', name: '¿Cuánto cuesta implementar IA operativa?', acceptedAnswer: { '@type': 'Answer', text: 'Ofrecemos una validación gratuita de tu proceso en menos de 48 horas, donde evaluamos la factibilidad de automatización y te damos próximos pasos recomendados — sin compromiso ni costo. Si decidís avanzar, la implementación se cotiza a medida según la complejidad de tus procesos.' } },
      { '@type': 'Question', name: '¿Para qué industrias funciona la IA operativa?', acceptedAnswer: { '@type': 'Answer', text: 'Funciona para cualquier empresa que opere procesos repetitivos con reglas formales que requieran trazabilidad. Las industrias donde vemos mayor impacto son: finanzas, logística, salud, seguros y legal.' } },
      { '@type': 'Question', name: '¿Qué diferencia a Carbono14 de otras consultoras de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Tres cosas: somos AI-first, construimos con determinismo (reglas explícitas, logs auditables, escalamiento humano, sin cajas negras), y empezamos con una validación gratuita en menos de 48 horas.' } },
      { '@type': 'Question', name: '¿Cuánto tarda una implementación típica?', acceptedAnswer: { '@type': 'Answer', text: 'La validación gratuita toma menos de 48 horas. La auditoría técnica y especificación, 1-2 semanas. La implementación, 2-8 semanas. El proceso completo típicamente toma entre 4 y 12 semanas.' } },
    ],
  }
}

export function JsonLd() {
  const organizationSchema = getOrganizationSchema()
  const webSiteSchema = getWebSiteSchema()
  const servicesSchema = getServicesSchema()
  const faqSchema = getFaqSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webSiteSchema)}
      </Script>
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(servicesSchema)}
      </Script>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>
    </>
  )
}
