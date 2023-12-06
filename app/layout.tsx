import { siteConfig } from '@/config/site'

import cn from '@/lib/utils'

import SiteHeader from '@/components/site-header'
import ThemeProvider from '@/components/theme-provider'

import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/react'

import Rays from '@/components/rays'

export const metadata: Metadata = {
  title: {
    default: '🇨🇦 mazwrld.dev',
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
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
            'scrollbar-none min-h-screen scroll-smooth bg-background antialiased'
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
        </body>
      </html>
    </>
  )
}
