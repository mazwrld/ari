import { skillsData } from '@/config/skills'

export default function Skills() {
  return (
    <div className="relative flex h-[17rem] w-full items-center  justify-center bg-dot-black/[0.2] lg:h-[20rem] dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black)] dark:bg-black"></div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2">
        <h2 className="text-5xl font-bold tracking-normal md:text-6xl lg:text-5xl lg:tracking-tight">
          Tech Skills
        </h2>
        <ul className="md:text-md flex max-w-sm flex-wrap justify-center gap-2 pt-4 lg:text-xl">
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
