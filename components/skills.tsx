import { skillsData } from '@/config/skills'

export default function Skills() {
  return (
    <>
      <h2 className="flex justify-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        i&apos;m okay at
      </h2>
      <div className="max-w-8xl mx-auto mt-5 flex flex-wrap justify-center gap-4">
        <ul className="md:text-md flex max-w-sm flex-wrap justify-center gap-2 pt-4 lg:text-xl">
          {skillsData.map((skill, index) => (
            <li className="rounded-lg border p-2 shadow" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
