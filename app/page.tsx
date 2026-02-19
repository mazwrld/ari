import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

const heroStats = [
  { value: '6+', label: 'Years crafting web products' },
  { value: '40+', label: 'Projects shipped end-to-end' },
  { value: '95+', label: 'Lighthouse scores on key builds' },
]

const featuredProjects = [
  {
    title: 'Oakwood Sales Command Center',
    type: 'AI + RevOps',
    summary:
      'Built a lead-to-close command layer that unifies CRM context, sales prompts, and campaign analytics in one operating surface.',
    impact: '+28% proposal conversion in first quarter',
    stack: ['Next.js', 'TypeScript', 'Automation', 'Analytics'],
  },
  {
    title: 'Roofing Estimator Experience',
    type: 'Conversion Design',
    summary:
      'Redesigned the quote journey into a guided decision system with adaptive forms, instant pricing bands, and friction-aware UX.',
    impact: '-37% drop-off through quote funnel',
    stack: ['UX Systems', 'Experimentation', 'React', 'Motion Design'],
  },
  {
    title: 'Growth Landing Framework',
    type: 'Design System',
    summary:
      'Created a modular landing framework with reusable content blocks, motion patterns, and accessibility defaults for rapid campaign launches.',
    impact: 'From brief to launch in under 48 hours',
    stack: ['Design Tokens', 'Tailwind', 'Content Ops', 'A/B Testing'],
  },
]

const capabilityTicker = [
  'Product Design',
  'Frontend Architecture',
  'Motion Direction',
  'Conversion Strategy',
  'Experiment Loops',
  'AI Workflow Design',
  'Performance Engineering',
  'Design Systems',
  'User Research',
]

const studioPrinciples = [
  {
    title: 'Narrative-first interfaces',
    text: 'Every screen needs intent. I build interfaces that tell users what matters, fast.',
  },
  {
    title: 'Motion with meaning',
    text: 'Animation is used as guidance, hierarchy, and delight. Never decoration for its own sake.',
  },
  {
    title: 'Performance as a design feature',
    text: 'Speed and responsiveness are part of the visual language, not an afterthought.',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Frame the opportunity',
    text: 'Map user friction, business targets, and product constraints into one clear problem statement.',
  },
  {
    step: '02',
    title: 'Prototype the system',
    text: 'Design and ship a high-fidelity vertical slice to validate direction and technical feasibility.',
  },
  {
    step: '03',
    title: 'Launch and evolve',
    text: 'Roll out with instrumentation, iterate on real behavior, and scale patterns across the product.',
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/mazwrld' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mazen-mahari-63958717a/',
  },
  { label: 'X', href: 'https://twitter.com/mazenwrld' },
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
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-xl md:px-6">
          <Link
            href="#home"
            className="font-display flex items-center gap-2.5 text-[0.74rem] tracking-[0.2em] text-white uppercase"
          >
            <Image
              src="/logo.png"
              alt="Mazen Mahari logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full bg-white/10 object-cover"
            />
            Mazen Mahari
          </Link>
          <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
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
            className="rounded-full border border-white/25 bg-white/5 px-3 py-1.5 text-[0.7rem] tracking-[0.18em] text-white uppercase transition hover:border-white/45 hover:bg-white/10 md:px-4"
          >
            Start a project
          </Link>
        </nav>
      </header>

      <section className="px-4 pt-16 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="space-y-7 md:space-y-8">
            <div className="reveal inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-[0.67rem] tracking-[0.14em] text-white/85 uppercase">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent-2)] shadow-[0_0_0_6px_var(--color-accent-2-soft)]" />
              Open for high-impact builds
            </div>

            <p className="section-kicker reveal max-w-xl text-white/60 [animation-delay:120ms]">
              Senior Frontend Engineer and Product Designer
            </p>

            <h1 className="font-display reveal max-w-4xl text-5xl leading-[0.98] [animation-delay:220ms] sm:text-6xl md:text-7xl">
              I design and engineer digital experiences that feel cinematic,
              fast, and built to convert.
            </h1>

            <p className="section-copy reveal max-w-2xl text-base [animation-delay:320ms]">
              I partner with ambitious teams to turn rough ideas into polished
              product moments. My focus sits at the intersection of interface
              craft, growth strategy, and pragmatic engineering.
            </p>

            <div className="reveal flex flex-wrap gap-3 [animation-delay:420ms]">
              <Link
                href="#work"
                className="rounded-full border border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-xs tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-[rgba(255,122,24,0.34)]"
              >
                View selected work
              </Link>
              <Link
                href="mailto:mazenmahari@gmail.com"
                className="rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-xs tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
              >
                Book intro call
              </Link>
            </div>

            <dl className="grid max-w-2xl gap-3 pt-2 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-panel reveal rounded-2xl px-4 py-4 sm:px-5"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <dt className="text-[0.65rem] tracking-[0.12em] text-white/55 uppercase">
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
              <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[0.65rem] tracking-[0.12em] text-white/75 uppercase">
                2026
              </span>
            </div>
            <h2 className="font-display max-w-xs text-3xl leading-tight text-white sm:text-4xl">
              Product-led growth through smarter UX systems.
            </h2>
            <p className="section-copy mt-4 text-sm">
              Leading initiatives that combine AI-enabled workflows, cleaner
              user journeys, and conversion-focused frontends for service-based
              businesses.
            </p>
            <div className="mt-8 space-y-3">
              {[
                'Designing multi-step sales flows with adaptive logic',
                'Shipping analytics-ready landing systems for rapid testing',
                'Improving team velocity with reusable frontend architecture',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/15 bg-black/25 px-3 py-3 text-sm text-white/80"
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
            Premium product execution with measurable business outcomes.
          </h2>
          <p className="section-copy reveal mt-4 max-w-2xl text-base [animation-delay:220ms]">
            A sample of problem spaces where design, engineering, and growth
            strategy had to move as one system.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="project-card reveal transition-transform duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${280 + index * 120}ms` }}
              >
                <p className="section-kicker text-white/60">{project.type}</p>
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
                <p className="mt-7 text-sm text-white/84">{project.impact}</p>
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
              Design taste plus production rigor.
            </h2>
            <div className="mt-7 space-y-4">
              {studioPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-black/20 p-4"
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
              From signal to shipped result.
            </h2>
            <div className="mt-8 space-y-6">
              {workflow.map((item) => (
                <article key={item.step} className="process-step">
                  <p className="section-kicker text-white/55">
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
            If you are building something ambitious, I can help shape and ship
            it.
          </h2>
          <p className="section-copy mt-4 max-w-2xl text-base">
            Available for select collaborations across product design, frontend
            engineering, and conversion-focused growth work.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="mailto:mazenmahari@gmail.com"
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
