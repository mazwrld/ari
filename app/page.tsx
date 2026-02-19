import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

const heroStats = [
  { value: 'Sales IT', label: 'Current IT role' },
  { value: 'Site Rebuild', label: 'Company website in progress' },
  { value: 'Custom Apps', label: 'Built for real job workflows' },
]

const featuredProjects = [
  {
    title: 'Oakwood Roofing Website Rebuild',
    type: 'Company Website',
    summary:
      'Rebuilding the company website with clearer service pages, cleaner navigation, and a stronger lead flow.',
    impact: 'In progress with a focus on clarity, speed, and lead quality.',
    stack: ['Next.js', 'React', 'Tailwind', 'Content Structure'],
  },
  {
    title: 'Internal Job Tracking Tool',
    type: 'Custom Internal App',
    summary:
      'Built a lightweight app to help a team track task status, notes, and priorities in one place.',
    impact: 'Gave the team a clearer view of active work and priorities.',
    stack: ['React', 'TypeScript', 'Forms', 'Internal Ops'],
  },
  {
    title: 'Request Intake Helper',
    type: 'Workflow Utility',
    summary:
      'Created a small internal tool to standardize incoming requests and reduce repetitive back-and-forth.',
    impact: 'Cut manual admin steps and made follow-up easier.',
    stack: ['JavaScript', 'Automation', 'Workflow Design', 'Internal Tools'],
  },
]

const capabilityTicker = [
  'Frontend Development',
  'Website Rebuilds',
  'Internal Tools',
  'Process Cleanup',
  'Form Workflows',
  'UI Improvement',
  'Basic Analytics',
  'Performance Basics',
  'IT Support',
]

const studioPrinciples = [
  {
    title: 'Clarity first',
    text: 'I build straightforward interfaces that help people complete tasks without confusion.',
  },
  {
    title: 'Built for real work',
    text: 'Most projects start from daily workflow pain points and focus on practical improvements.',
  },
  {
    title: 'Ship and improve',
    text: 'I launch a useful first version, gather feedback, and keep iterating.',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Understand the workflow',
    text: 'I map the current process, where it breaks down, and what a better flow should look like.',
  },
  {
    step: '02',
    title: 'Build a practical first version',
    text: 'I ship something usable quickly, then tighten the UX and structure as feedback comes in.',
  },
  {
    step: '03',
    title: 'Improve through use',
    text: 'After launch, I fix friction points, refine content, and keep the system easier to maintain.',
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/mazwrld' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mazen-mahari-63958717a/',
  },
]

export default function Home() {
  return (
    <main className="relative overflow-x-clip pb-24">
      <div className="gradient-bar" />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="portfolio-background" />
        <div className="absolute inset-0">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orb orb-three" />
        </div>
        <div className="grid-layer" />
        <div className="noise-layer" />
      </div>

      <header className="reveal sticky top-4 z-50 px-4" id="home">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/30 bg-black/65 px-4 py-3 backdrop-blur-xl md:px-6">
          <Link
            href="#home"
            className="font-display flex items-center gap-2.5 text-[0.74rem] tracking-[0.2em] text-white uppercase"
          >
            <Image
              src="/logo.png"
              alt="Mazen Mahari logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full bg-white/20 object-cover"
            />
            Mazen Mahari
          </Link>
          <div className="hidden items-center gap-7 text-sm text-white/90 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="mailto:mazenmahari@gmail.com"
            className="rounded-full border border-white/45 bg-white/12 px-3 py-1.5 text-[0.7rem] tracking-[0.18em] text-white uppercase transition hover:border-white/70 hover:bg-white/20 md:px-4"
          >
            Start a project
          </Link>
        </nav>
      </header>

      <section className="px-4 pt-16 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="space-y-7 md:space-y-8">
            <div className="reveal inline-flex w-fit items-center gap-2 rounded-full border border-white/35 bg-white/12 px-3 py-2 text-[0.67rem] tracking-[0.14em] text-white/95 uppercase">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent-2)] shadow-[0_0_0_6px_var(--color-accent-2-soft)]" />
              Available for practical builds
            </div>

            <p className="section-kicker reveal max-w-xl text-white/80 [animation-delay:120ms]">
              IT Specialist at Oakwood Roofing
            </p>

            <h1 className="font-display reveal max-w-4xl text-5xl leading-[0.98] [animation-delay:220ms] sm:text-6xl md:text-7xl">
              I build practical websites and internal tools that make everyday
              work easier.
            </h1>

            <p className="section-copy reveal max-w-2xl text-base [animation-delay:320ms]">
              I currently handle IT at Oakwood Roofing and I&apos;m rebuilding
              our website. I&apos;ve also built small custom apps for my jobs to
              help teams move faster and stay organized.
            </p>

            <div className="reveal flex flex-wrap gap-3 [animation-delay:420ms]">
              <Link
                href="#work"
                className="rounded-full border border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-xs tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-[rgba(255,43,61,0.45)]"
              >
                View selected work
              </Link>
              <Link
                href="mailto:mazenmahari@gmail.com"
                className="rounded-full border border-white/45 bg-white/12 px-5 py-2.5 text-xs tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/20"
              >
                Send a message
              </Link>
            </div>

            <dl className="grid max-w-2xl gap-3 pt-2 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-panel reveal rounded-2xl px-4 py-4 sm:px-5"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <dt className="text-[0.65rem] tracking-[0.12em] text-white/78 uppercase">
                    {stat.label}
                  </dt>
                  <dd className="font-display mt-2 text-2xl text-white sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="glass-panel reveal relative rounded-3xl p-6 [animation-delay:340ms] md:p-8">
            <div className="mb-7 flex items-center justify-between">
              <p className="section-kicker">Current focus</p>
              <span className="rounded-full border border-white/35 bg-white/12 px-2.5 py-1 text-[0.65rem] tracking-[0.12em] text-white/92 uppercase">
                2026
              </span>
            </div>
            <h2 className="font-display max-w-xs text-3xl leading-tight text-white sm:text-4xl">
              Rebuilding Oakwood&apos;s web presence while improving internal
              workflows.
            </h2>
            <p className="section-copy mt-4 text-sm">
              My day-to-day work blends IT support with hands-on frontend
              building, focused on tools and pages that are useful for the team.
            </p>
            <div className="mt-8 space-y-3">
              {[
                'Leading the Oakwood Roofing website rebuild',
                'Building small internal apps to reduce manual tasks',
                'Handling daily IT support while shipping improvements',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/30 bg-black/45 px-3 py-3 text-sm text-white/95"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="reveal px-4 py-14 [animation-delay:420ms] md:py-20">
        <div className="ticker-wrap mx-auto w-full max-w-6xl">
          <div className="ticker-track">
            {[...capabilityTicker, ...capabilityTicker].map((item, index) => (
              <span key={`${item}-${index}`} className="ticker-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-4 py-10 md:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <p className="section-kicker reveal">Selected work</p>
          <h2 className="section-title reveal mt-3 max-w-3xl text-4xl [animation-delay:120ms] sm:text-5xl md:text-6xl">
            Recent projects grounded in day-to-day business needs.
          </h2>
          <p className="section-copy reveal mt-4 max-w-2xl text-base [animation-delay:220ms]">
            A sample of the website and internal tool work I&apos;ve done across
            my roles.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="project-card reveal transition-transform duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${280 + index * 120}ms` }}
              >
                <p className="section-kicker text-white/82">{project.type}</p>
                <h3 className="font-display mt-3 text-2xl leading-tight text-white">
                  {project.title}
                </h3>
                <p className="section-copy mt-3 text-sm">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="meta-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-7 text-sm text-white/95">{project.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="px-4 py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="glass-panel reveal rounded-3xl p-6 md:p-8">
            <p className="section-kicker">Approach</p>
            <h2 className="section-title mt-3 text-4xl sm:text-5xl">
              Keep it simple, useful, and shippable.
            </h2>
            <div className="mt-7 space-y-4">
              {studioPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/28 bg-black/38 p-4"
                >
                  <h3 className="font-display text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="section-copy mt-2 text-sm">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div
            className="glass-panel reveal rounded-3xl p-6 md:p-8"
            style={{ animationDelay: '120ms' }}
          >
            <p className="section-kicker">Workflow</p>
            <h2 className="section-title mt-3 text-4xl sm:text-5xl">
              How I usually work.
            </h2>
            <div className="mt-8 space-y-6">
              {workflow.map((item) => (
                <article key={item.step} className="process-step">
                  <p className="section-kicker text-white/80">
                    Step {item.step}
                  </p>
                  <h3 className="font-display mt-2 text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="section-copy mt-2 text-sm">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pt-14">
        <div className="contact-shell reveal mx-auto w-full max-w-6xl p-7 md:p-10">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-3 max-w-3xl text-4xl sm:text-5xl md:text-6xl">
            If you need a practical website or internal tool, I can help build
            it.
          </h2>
          <p className="section-copy mt-4 max-w-2xl text-base">
            Best fit for small teams that want cleaner workflows, better web
            pages, and steady technical support.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="mailto:rexnowa@gmail.com"
              className="rounded-full border border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-xs tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5"
            >
              mazenmahari@gmail.com
            </Link>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
