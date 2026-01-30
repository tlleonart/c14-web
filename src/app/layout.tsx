import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
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
    <html lang="es" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
