import { MetadataRoute } from 'next'
import AppDetails from '@/package.json'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: AppDetails.name,
    short_name: AppDetails.short_name,
    description: AppDetails.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#d2f4c3',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
