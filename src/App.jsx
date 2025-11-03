import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-4 py-3 backdrop-blur-md shadow-sm">
            <a href="#" className="text-sm font-semibold tracking-wide text-indigo-600">DIWASH ACHARYA</a>
            <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
              <a href="#about" className="hover:text-indigo-600">About</a>
              <a href="#projects" className="hover:text-indigo-600">Projects</a>
              <a href="#contact" className="hover:text-indigo-600">Contact</a>
            </nav>
            <a href="#projects" className="hidden rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-lg sm:block">Explore</a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t bg-gray-50 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Diwash Acharya — Built with care and motion.
      </footer>
    </div>
  )
}

export default App
