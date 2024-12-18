import Image from 'next/image'

import Rays from '@/components/rays'

export default function Hero() {
  return (
    <>
      <Rays />
      <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden py-6 text-center md:py-0">
        <Image
          src="https://github.com/mazwrld/ari/blob/main/public/me.png?raw=true"
          priority
          height={144}
          width={144}
          alt="Profile picture"
          className="relative mx-auto h-36 w-36 rounded-full"
        />
        <div className="z-20">
          <h2 className="pb-2 text-xs uppercase tracking-[15px] text-muted-foreground sm:text-xs">
            Lifelong Learner
          </h2>
          <h1 className="px-10 text-3xl font-semibold tracking-[1px] sm:text-[2.4rem] lg:text-6xl">
            Mazen Mahari
          </h1>
        </div>
      </div>
    </>
  )
}
