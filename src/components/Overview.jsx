import cssLogo from '../assets/techstack/css.png'
import gitLogo from '../assets/techstack/git.png'
import htmlLogo from '../assets/techstack/html.png'
import javascriptLogo from '../assets/techstack/javascript.png'
import mongodbLogo from '../assets/techstack/mongodb.png'
import nodeLogo from '../assets/techstack/nodejs.png'
import reactLogo from '../assets/techstack/reactjs.png'
import firebaseLogo from '../assets/techstack/firebase.png'
import tailwindLogo from '../assets/techstack/tailwind.png'
import typescriptLogo from '../assets/techstack/typescript.png'
import postgresqlLogo from '../assets/techstack/postgresql.png'
import postmanLogo from '../assets/techstack/postman.png'
import nextLogo from '../assets/techstack/nextjs.svg'

const techStack = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Next.js', logo: nextLogo },
  { name: 'Tailwind CSS', logo: tailwindLogo },
  { name: 'Node.js & Express', logo: nodeLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'Firebase', logo: firebaseLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'Postman', logo: postmanLogo },
]

const Overview = () => (
  <section id="about" className="flex flex-col gap-10">
    <div className="flex flex-col gap-4">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">Overview</span>
      <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">Building thoughtful software, end to end.</h2>
      <p className="max-w-3xl text-base text-slate-400 sm:text-lg">
        From the first line of code to deployment, I stay close to the full stack to help teams ship dependable
        experiences. I move with care, ask questions early, and work alongside design, product, and stakeholders to keep
        the work grounded in what people actually need.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {techStack.map(({ name, logo }) => (
        <div
          key={name}
          className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.04] p-4 transition hover:border-brand-primary/50 hover:bg-white/[0.06]"
        >
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white/5 text-brand-primary transition group-hover:bg-brand-primary/10">
            {logo ? (
              <img src={logo} alt={`${name} logo`} className="h-10 w-10 object-contain" loading="lazy" />
            ) : (
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary/90">
                {name
                  .split(/\s|&/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join('')}
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-slate-100">{name}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Overview

