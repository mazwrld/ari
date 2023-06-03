import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.png'

export function Footer() {
  return (
    <>
      <footer className="mt-10 border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image src={Logo} height={34} width={34} alt="logo" />
            <p className="text-center text-sm leading-loose  md:text-left">
              Built on shadcn. The source code is available on{' '}
              <Link
                href="https://github.com/mazwrld/ari"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
