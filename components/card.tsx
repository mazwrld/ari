import Image from 'next/image'
import Link from 'next/link'

import type { Stack } from '@/config/stack'

interface CardProps {
  items: Stack
}

export function Card({ items }: CardProps) {
  return (
    <>
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
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {item.name}
                </h5>
              </Link>
              <p
                title={item.description}
                className="mb-3 overflow-hidden font-normal leading-6"
              >
                {item.description.length > 200
                  ? item.description.slice(0, 200) + '...'
                  : item.description}
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}
