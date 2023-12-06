import Image from 'next/image'

import ProfileImg from '@/public/me.png'

export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden border-t py-6 text-center md:py-0">
      <Image
        src={ProfileImg}
        priority
        height={144}
        width={144}
        alt="Profile picture"
        className="relative mx-auto h-36 w-36 rounded-full"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-400">
          Baby Developer
        </h2>
        <h1 className="px-10 text-3xl font-semibold tracking-[1px] md:text-4xl lg:text-6xl">
          Mazen Mahari
        </h1>
      </div>
    </div>
  )
}
