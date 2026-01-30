import Script from 'next/script'
import { services } from '@/modules/landing/data/services'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://carbono-14.net'

function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Carbono14',
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description:
      'Automatización con IA, desarrollo de inteligencia artificial, web y software a medida. Soluciones tecnológicas innovadoras para impulsar tu negocio.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
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
      'Servicios de inteligencia artificial, automatización y desarrollo de software.',
    inLanguage: 'es',
  }
}

function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios de Carbono14',
    description: 'Servicios de tecnología e inteligencia artificial',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'Carbono14',
        },
        serviceType: service.title,
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
