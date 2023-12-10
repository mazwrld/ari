import { stack } from '@/config/stack'

import Card from '@/components/card'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Skills from '@/components/skills'

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Skills />
      <Card items={stack} />
      <Footer />
    </>
  )
}
