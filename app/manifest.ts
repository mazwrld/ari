import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mazen Mahari Portfolio',
    short_name: 'Mazen',
    description:
      'Portfolio of Mazen Mahari: product design, frontend engineering, and growth-focused digital experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080b12',
    theme_color: '#080b12',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
