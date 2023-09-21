import { stack } from '@/config/stack'

import CanvasComponent from '@/components/canvas'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Hero from '@/components/hero'

export default function IndexPage() {
  return (
    <>
      <Hero />
      {/* <div className="mb-10 text-center md:text-center">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-2xl">
          The best of the full stack TypeScript ecosystem...
        </h2>
        <h3 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl lg:text-5xl">
          ...with MODULARITY in mind
        </h3>
        <p className="mt-4 text-base md:text-lg">
          The T3 stack is in my opinion the best way to build a full stack web
          apps
        </p>
      </div> */}
      {/* <Timeline timeline={timelineData} /> */}
      <CanvasComponent />
      <Card items={stack} />
      <Footer />
    </>
  )
}
