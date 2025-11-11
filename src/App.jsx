import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <Hero />
        <Overview />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-sm text-slate-500 sm:flex-row sm:justify-between sm:text-left">
          <p>© 2025 Julius Pajarillo. All rights reserved.</p>
          <p className="text-slate-400">
            Crafted with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
