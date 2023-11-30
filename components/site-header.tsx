import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { buttonVariants } from '@/components/ui/button'

import { Icons } from '@/components/icons'
import MainNav from '@/components/main-nav'
import ThemeToggle from '@/components/theme-toggle'

export default function SiteHeader() {
  return (
    <header className="relative z-[999]">
      <div className="border-opacity/40 bg-opacity/80 dark:bg-opacity/75 fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white bg-white shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full">
        <div className="container flex h-full items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
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
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
