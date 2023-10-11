import Image from 'next/image'

import ProfileImg from '@/public/me.png'

import { MotionDiv } from '@/components/utils/use-client'

export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden border-t py-6 text-center md:py-0">
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
          scale: [1, 2, 2, 3, 2],
          borderRadius: ['20%', '20%', '50%', '80%', '20%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#a8bf00]" />
        <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-[#a9bf0083]" />
        <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-[#a83f02]" />
        <div className="border-accent-500 absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border" />
        <div className="absolute mt-52 h-[800px] w-[800px] rounded-full border border-[#c10656]" />
      </MotionDiv>
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
