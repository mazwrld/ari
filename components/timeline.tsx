import { type Timeline } from '@/config/timeline'

interface TimelineProps {
  timeline: Timeline
}

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <div className="my-20 flex flex-col justify-center md:flex-row">
      <div className="sm:w-5/10 w-full md:w-7/12">
        <h1 className="mb-5 text-2xl font-bold text-stone-900 underline decoration-4 underline-offset-8 dark:text-white">
          Timeline
        </h1>
        {timeline.map((item, index) => (
          <div key={index}>
            <ol className="relative flex flex-col border-l border-stone-200 dark:border-stone-700 md:flex-row">
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-200 dark:border-stone-900 dark:bg-stone-700" />
                <div className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
                  <span className="inline-block rounded-md bg-stone-900 px-2 py-1 font-semibold text-white dark:bg-white dark:text-stone-900">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                    {item.duration}
                  </div>
                </div>
                <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                  {item.details}
                </p>
              </li>
            </ol>
          </div>
        ))}
      </div>
    </div>
  )
}
