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
    sameAs: [],
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

export function JsonLd() {
  const organizationSchema = getOrganizationSchema()
  const webSiteSchema = getWebSiteSchema()
  const servicesSchema = getServicesSchema()

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
    </>
  )
}
