import { useEffect, useState } from 'react'
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from './Icons.jsx'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      )
    }
    return 'light'
  })

  // Apply dark mode class to <html> element
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.4 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-b border-line/60 shadow-sm py-1'
          : 'bg-transparent py-3'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-14 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group text-lg font-semibold tracking-tight text-ink transition-colors flex items-center gap-1.5"
        >
          <span className="font-mono text-accent text-base">&lt;</span>
          <span className="group-hover:text-accent transition-colors">Rahul Dev</span>
          <span className="font-mono text-accent text-base">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface/50 border border-line/40 backdrop-blur-sm">
          {links.map((link) => {
            const isActive = activeSection === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-ink bg-paper shadow-sm'
                      : 'text-muted hover:text-ink hover:bg-surface/80'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions (Dark Mode Toggle & CTA) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn relative flex items-center justify-center w-10 h-10 rounded-full border border-line/40 bg-surface/60 text-ink hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className={`theme-icon ${theme === 'dark' ? 'rotate-sun' : 'visible-icon'}`}>
              <SunIcon className="w-5 h-5" />
            </span>
            <span className={`theme-icon ${theme === 'light' ? 'rotate-moon' : 'visible-icon'}`}>
              <MoonIcon className="w-5 h-5" />
            </span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-ink text-paper text-sm font-medium px-5 py-2 hover:bg-accent hover:shadow-md transition-all duration-200 active:scale-95"
          >
            Let's talk
          </a>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn relative flex items-center justify-center w-10 h-10 rounded-lg border border-line/40 bg-surface/60 text-ink hover:bg-surface transition-colors"
            aria-label="Toggle dark mode"
          >
            <span className={`theme-icon ${theme === 'dark' ? 'rotate-sun' : 'visible-icon'}`}>
              <SunIcon className="w-5 h-5" />
            </span>
            <span className={`theme-icon ${theme === 'light' ? 'rotate-moon' : 'visible-icon'}`}>
              <MoonIcon className="w-5 h-5" />
            </span>
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-ink hover:bg-surface transition-colors focus:outline-none"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-65px bg-paper/95 backdrop-blur-xl border-b border-line shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <ul className="container-px py-6 flex flex-col gap-2">
            {links.map((link) => {
              const isActive = activeSection === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-surface text-accent'
                        : 'text-ink hover:bg-surface/60'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="pt-4 border-t border-line/60">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-lg bg-ink text-paper text-base font-medium py-3 hover:bg-accent transition-colors"
              >
                Let's talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}