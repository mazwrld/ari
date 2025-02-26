import Link from 'next/link'

import { siteConfig } from '@/config/site'
import Particles from '@/components/particles'

export default function Home() {
  'use memo'
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-linear-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <h1 className="animate-title font-display z-10 cursor-default bg-white bg-clip-text px-0.5 py-3.5 text-3xl font-bold whitespace-nowrap text-transparent duration-1000 sm:text-6xl md:text-9xl">
        Maz
      </h1>
      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="animate-fade-in my-16 text-center">
        <h2 className="text-sm text-zinc-500">
          Currently working{' '}
          <Link
            target="_blank"
            href="https://www.oakwoodroofing.com/"
            className="duration-500 hover:text-zinc-300"
          >
            @Oakwood Roofing & Sheet Metal Co Ltd.
          </Link>{' '}
          to solve AI integration, sales and marketing problems.
        </h2>
      </div>
      <footer className="animate-fade-in mt-10 flex items-center justify-center gap-4">
        <ul>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
          >
            LinkedIn
          </Link>
        </ul>
        <ul>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
          >
            Github
          </Link>
        </ul>
      </footer>
    </div>
  )
}
