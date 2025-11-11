const Hero = () => (
  <section
    id="hero"
    className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 px-6 py-16 shadow-2xl shadow-brand-primary/10 sm:px-10 md:py-24"
  >
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl" />
    </div>
    <div className="mx-auto flex max-w-3xl flex-col gap-8 text-center md:gap-10">
      <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary shadow-glow">
        Available for new opportunities
      </span>
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
        What&apos;s up? I&apos;m JP.
      </h1>
      <p className="text-base text-slate-400 sm:text-lg">
        a full-stack developer focused on building performant interfaces, robust APIs, and elegant developer
        experiences. I collaborate with product-minded teams to ship thoughtful software.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02] hover:bg-brand-primary/90"
        >
          Let&apos;s collaborate
        </a>
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-primary/40 hover:text-brand-primary"
        >
          Explore recent work
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 text-left text-sm text-slate-400 sm:grid-cols-2 sm:text-center">
        <div>
          <p className="text-lg font-semibold text-slate-100">3+ yrs</p>
          <p>Full-stack expertise</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-100">20+ features</p>
          <p>Launched across platforms</p>
        </div>
      </div>
    </div>
  </section>
)

export default Hero

