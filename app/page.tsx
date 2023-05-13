export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          This is my portfolio <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          I am a full-stack developer with a passion for building
          <br className="hidden sm:inline" /> beautiful and functional user
          interfaces.
        </p>
      </div>
      {/* <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div> */}
    </section>
  )
}
