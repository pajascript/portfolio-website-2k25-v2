import ctoLogo from '../assets/cto.png'

const experiences = [
  {
    role: 'Software Engineer | Associate Software Engineer',
    company: 'CTO Global Services, Inc.',
    timeframe: 'Aug 2022 – Present',
    accomplishments: [
      'Developing and maintaining web applications using React.js and related technologies.',
      'Leading feature delivery end to end—owning initiatives solo and partnering with teammates when the problem calls for it.',
      'Collaborating closely with designers, product managers, and fellow developers to ship high-quality products.',
      'Implementing responsive design principles and ensuring cross-browser compatibility across modern devices.',
      'Participating in code reviews and providing constructive feedback to raise the whole team’s bar.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    logo: ctoLogo,
  },
]

const WorkExperience = () => (
  <section id="work" className="flex flex-col gap-10">
    <div className="flex flex-col gap-4">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">Work Experience</span>
      <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">What I have done so far.</h2>
      <p className="max-w-3xl text-base text-slate-400 sm:text-lg">
        I thrive in fast-paced environments where shipping high-quality, maintainable software is paramount. Here&apos;s a
        snapshot of the roles where I&apos;ve delivered measurable outcomes.
      </p>
    </div>

    <div className="space-y-6">
      {experiences.map(({ role, company, timeframe, accomplishments, stack, logo }) => (
        <article
          key={`${role}-${company}`}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 shadow-lg shadow-black/20 transition hover:border-brand-primary/40 hover:bg-white/[0.05]"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              {logo ? (
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <img src={logo} alt={`${company} logo`} className="h-10 w-10 object-contain" />
                </span>
              ) : null}
              <div>
                <h3 className="text-xl font-semibold text-slate-50">{role}</h3>
                <p className="text-sm font-medium text-brand-primary">{company}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">{timeframe}</p>
          </div>

          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            {accomplishments.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-primary/70" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default WorkExperience

