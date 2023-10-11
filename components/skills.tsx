import { skillsData } from '@/config/skills'

export default function Skills() {
  return (
    <div className="max-w-8xl mx-auto mt-5 flex flex-wrap justify-center gap-4">
      <ul className="flex max-w-sm flex-wrap justify-center gap-2 pt-4 text-lg">
        {skillsData.map((skill, index) => (
          <li className="rounded-lg border p-2 shadow" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
