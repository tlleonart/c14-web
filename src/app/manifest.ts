import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Carbono14 - Servicios de IA y Desarrollo',
    short_name: 'Carbono14',
    description:
      'Automatización con IA, desarrollo de inteligencia artificial, web y software a medida.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#d94e28',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
