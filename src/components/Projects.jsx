import { projects } from '../constants/projects'

const Projects = () => (
  <section id="projects" className="flex flex-col gap-10">
    <div className="flex flex-col gap-4">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">Projects</span>
      <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">Selected work that I&apos;m proud of.</h2>
      <p className="max-w-3xl text-base text-slate-400 sm:text-lg">
        Following projects showcases my skills and experience through real-world examples of my work. Each project is
        briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex
        problems, work with different technologies, and manage projects effectively.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {projects.map(({ name, description, tags, link, source_code_link: sourceCode, image }) => (
        <article
          key={name}
          className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-brand-primary/40 hover:bg-white/[0.06]"
        >
          <figure className="relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/60">
            <img
              src={image}
              alt={`${name} preview`}
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-75" />
          </figure>

          <div className="mt-6 flex-1">
            <div className="absolute inset-0 -z-10 opacity-0 blur-2xl transition group-hover:opacity-100 group-hover:blur-xl">
              <div className="h-full w-full bg-gradient-to-br from-brand-primary/15 via-transparent to-brand-accent/15" />
            </div>
            <h3 className="text-xl font-semibold text-slate-50">{name}</h3>
            <p className="mt-3 text-sm text-slate-400">{description}</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {tags.map(({ name: tag, color }) => (
              <span key={tag} className={`rounded-full bg-white/5 px-3 py-1 text-xs font-medium capitalize ${color}`}>
                {tag}
              </span>
            ))}
          </div>

          <a
            href={link}
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-primary transition hover:text-brand-primary/80"
            target="_blank"
            rel="noreferrer"
          >
            View project
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
          <a
            href={sourceCode}
            className="mt-2 inline-flex w-fit items-center gap-2 text-xs font-medium text-slate-300 transition hover:text-brand-primary"
            target="_blank"
            rel="noreferrer"
          >
            View source
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7V4h3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4 9 9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 17v3h-3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m20 20-5-5" />
            </svg>
          </a>
        </article>
      ))}
    </div>
  </section>
)

export default Projects

