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

export const metadata: Metadata = {
  title: 'Carbono14 - Servicios de IA y Desarrollo',
  description:
    'Automatización con IA, desarrollo de IA, web y software. Soluciones tecnológicas para impulsar tu negocio.',
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
