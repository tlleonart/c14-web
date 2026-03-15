import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@/shared/components/Analytics'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://carbono-14.net'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Carbono14 - Servicios de IA y Desarrollo de Software',
    template: '%s | Carbono14',
  },
  description:
    'Automatización con IA, desarrollo de inteligencia artificial, web y software a medida. Soluciones tecnológicas innovadoras para impulsar tu negocio hacia el futuro.',
  keywords: [
    'inteligencia artificial',
    'desarrollo de software',
    'automatización',
    'IA',
    'machine learning',
    'desarrollo web',
    'software a medida',
    'transformación digital',
    'consultoria tecnológica',
    'Argentina',
  ],
  authors: [{ name: 'Carbono14' }],
  creator: 'Carbono14',
  publisher: 'Carbono14',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: 'Carbono14',
    title: 'Carbono14 - Servicios de IA y Desarrollo de Software',
    description:
      'Automatización con IA, desarrollo de inteligencia artificial, web y software a medida. Soluciones tecnológicas innovadoras para impulsar tu negocio.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carbono14 - Servicios de IA y Desarrollo de Software',
    description:
      'Automatización con IA, desarrollo de inteligencia artificial, web y software a medida. Soluciones tecnológicas innovadoras.',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  verification: {
    google: 'google9d26cff35aa7d976',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <noscript><style>{'.fadeIn{opacity:1!important}'}</style></noscript>
        <Analytics />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
