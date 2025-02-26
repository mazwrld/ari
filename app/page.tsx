import Link from 'next/link'

import Particles from '@/components/particles'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <h1 className="text-edge-outline animate-title font-display z-10 cursor-default whitespace-nowrap bg-white bg-clip-text px-0.5 py-3.5 text-3xl text-transparent duration-1000 sm:text-3xl md:text-4xl lg:text-9xl">
        Mazen Mahari
      </h1>

      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="animate-fade-in my-16 text-center">
        <h2 className="text-sm text-zinc-500">
          I'm working at{' '}
          <Link
            target="_blank"
            href="https://www.oakwoodroofing.com/"
            className="underline duration-500 hover:text-zinc-300"
          >
            Oakwood Roofing & Sheet Metal Co Ltd.
          </Link>{' '}
          to solve AI integration, sales and marketing problems.
        </h2>
      </div>
    </div>
  )
}
