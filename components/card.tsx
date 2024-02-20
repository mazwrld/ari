import Image from 'next/image'
import Link from 'next/link'

import type { Stack } from '@/config/stack'

interface CardProps {
  items: Stack
}

export default function Card({ items }: CardProps) {
  return (
    <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-4">
      {items?.map((item, index) => {
        return (
          <div key={index} className="max-w-sm rounded-lg border shadow">
            <div className="p-4">
              <Image
                className="rounded"
                src={item.logo}
                width={350}
                height={350}
                alt="picture of technologies logo"
              />
              <Link href={item.href}>
                <span className="mb-2 text-2xl font-bold tracking-tight">
                  {item.name}
                </span>
              </Link>
              <p
                title={item.description}
                className="mb-3 overflow-hidden font-normal leading-6 text-muted-foreground"
              >
                {item.description.length > 200
                  ? item.description.slice(0, 200) + '...'
                  : item.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
