import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import cn from '@/lib/utils'
import Rays from '@/components/rays'
import SiteHeader from '@/components/site-header'
import ThemeProvider from '@/components/theme-provider'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: '🇨🇦 mazwrld.dev',
    template: `%s - ${siteConfig.name}`,
  },
  authors: [
    {
      name: 'Mazen Mahari',
      url: 'https://www.mazwrld.dev/',
    },
  ],
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/manifest.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen scroll-smooth font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Rays />
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  )
}
