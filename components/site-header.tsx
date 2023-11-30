import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { buttonVariants } from '@/components/ui/button'

import { Icons } from '@/components/icons'
import MainNav from '@/components/main-nav'
import ThemeToggle from '@/components/theme-toggle'

export default function SiteHeader() {
  return (
    <header className="z-50 flex items-center justify-center">
      <nav className="border-opacity/40 bg-opacity/80 dark:bg-opacity/75 dark:border-black/4 absolute top-0 w-full rounded-none border shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 sm:top-6 sm:w-[36rem] sm:rounded-full">
        <div className="container flex h-12 items-center justify-between sm:justify-start">
          <MainNav items={siteConfig.mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="flex items-center space-x-1">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'transparent',
                  })}
                >
                  <Icons.gitHub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href={siteConfig.links.x} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'transparent',
                  })}
                >
                  <Icons.x className="h-5 w-5 fill-current" />
                  <span className="sr-only">X</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'transparent',
                  })}
                >
                  <Icons.linkedIn className="h-5 w-5 fill-current" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
