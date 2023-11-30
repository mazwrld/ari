import CanvasComponent from '@/components/canvas'

export default function About() {
  return (
    <section className="max-w-8xl mx-auto mt-4 flex flex-wrap justify-center gap-4">
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          About Me
        </h2>
        <p className="max-w-[600px] text-xl/relaxed text-zinc-500 dark:text-zinc-400 md:text-base/relaxed lg:text-xl/relaxed xl:text-zinc-400">
          I am a passionate software developer with over 5 years of experience
          in the industry. I specialize in front-end development and have a keen
          interest in user interface design. I love solving complex problems and
          creating intuitive, beautiful interfaces for users.
        </p>
        <CanvasComponent />
      </div>
    </section>
  )
}
