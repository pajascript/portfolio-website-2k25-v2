const Contact = () => (
  <section
    id="contact"
    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-primary/15 via-slate-900 to-slate-950 px-6 py-14 sm:px-10"
  >
    <div className="absolute inset-0 -z-10 opacity-60">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-brand-accent/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-brand-primary/30 blur-3xl" />
    </div>
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">Let&apos;s Connect</span>
      <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
        Ready to ship something remarkable together?
      </h2>
      <p className="text-base text-slate-200/80 sm:text-lg">
        Whether you need a technical partner, a product-minded engineer, or an audit of your current platform—drop me a
        message.
      </p>
      <div className="flex flex-col items-center gap-4 text-sm sm:flex-row sm:gap-6">
        <a
          href="mailto:jp@buildwithjp.dev"
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-slate-50 transition hover:bg-slate-900"
        >
          jpatrickpajarillo@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-pajarillo-47aa53211/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-100 transition hover:text-slate-50/80"
        >
          Connect on LinkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 4.5h3.75v3.75" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l9-9" />
          </svg>
        </a>
      </div>
    </div>
  </section>
)

export default Contact

