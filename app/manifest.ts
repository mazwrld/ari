import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'mazwrld.dev',
    short_name: 'maz.dev',
    description: "Maz's personal portfolio and side project",
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
