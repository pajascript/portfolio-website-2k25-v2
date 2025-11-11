import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (event, href) => {
    event.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <a
          href="#hero"
          className="font-semibold tracking-wide text-slate-100 transition hover:text-brand-primary"
          onClick={(event) => handleNavigate(event, '#hero')}
        >
          JP | Full-Stack Dev
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(event) => handleNavigate(event, href)}
              className="relative py-1 transition hover:text-brand-primary"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-200 transition hover:border-brand-primary/60 hover:text-brand-primary md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/5 bg-slate-950/95 px-6 pb-6 pt-2 shadow-lg backdrop-blur md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-300">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(event) => handleNavigate(event, href)}
                className="rounded-md px-3 py-2 transition hover:bg-white/5 hover:text-brand-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

