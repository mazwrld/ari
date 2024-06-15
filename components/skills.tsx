import { skillsData } from '@/config/skills'

export default function Skills() {
  return (
    <div className="relative flex h-96 w-full items-center justify-center bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <h2 className="text-balance text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Tech{' '}
          <span className="underline decoration-[#d2f4c3] decoration-dashed underline-offset-8">
            Skills
          </span>
        </h2>
        <ul className="flex max-w-sm flex-wrap justify-center gap-2 text-balance pt-4 lg:text-xl">
          {skillsData.map((skill, index) => (
            <li className="rounded-lg border p-2 shadow" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
