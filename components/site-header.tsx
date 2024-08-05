import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import MainNav from '@/components/main-nav'
import ThemeToggle from '@/components/theme-toggle'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center">
      <nav className="shadow-black-3 supports-[backdrop-filter] absolute top-0 w-full rounded-none border-b bg-background/40 shadow-lg backdrop-blur-xl transition-all duration-200 sm:top-4 sm:w-[36rem] sm:rounded-full">
        <div className="container flex h-14 items-center justify-between sm:justify-start">
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
