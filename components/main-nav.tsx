import Image from 'next/image'
import Link from 'next/link'

import { NavItem } from '@/types/nav'
import { siteConfig } from '@/config/site'
import cn from '@/lib/utils'

interface MainNavProps {
  items?: NavItem[]
}

export default function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2 md:flex">
        <Image
          src="https://github.com/mazwrld/ari/blob/main/public/logo.png?raw=true"
          height={34}
          width={34}
          alt="logo"
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-lg font-semibold text-muted-foreground sm:text-sm',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
