import type { Metadata, Viewport } from 'next'

import '@/styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { fontDisplay, fontSans } from '@/lib/fonts'

export const viewport: Viewport = {
  themeColor: '#080b12',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mazwrld.dev'),
  title: {
    default: 'Mazen Mahari | IT Specialist & Web Builder',
    template: '%s | Mazen Mahari',
  },
  description:
    'Portfolio of Mazen Mahari, IT specialist at Oakwood Roofing building practical websites and internal tools.',
  authors: [
    {
      name: 'Mazen Mahari',
      url: 'https://www.mazwrld.dev/',
    },
  ],
  openGraph: {
    title: 'Mazen Mahari | IT Specialist & Web Builder',
    description:
      'Portfolio of Mazen Mahari, currently focused on IT work, website rebuilding, and small custom apps for real workflows.',
    url: 'https://www.mazwrld.dev/',
    siteName: 'Mazen Mahari Portfolio',
    locale: 'en_CA',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
