import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, site, DOCTOLIB_URL } from '../../data/site'

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Accueil, Dr Sana Amraoui">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden className="shrink-0">
        <rect width="32" height="32" rx="7" className="fill-ink" />
        <path
          d="M3 16h6l2-7 4 14 3-9 2 4h9"
          fill="none"
          className="stroke-signal"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-lg font-semibold leading-none tracking-tight text-ink">
        Dr Sana Amraoui
      </span>
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-calm ${
        scrolled ? 'bg-paper/85 backdrop-blur-md shadow-[0_1px_0_rgba(14,27,42,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="container-edge flex h-[72px] items-center justify-between gap-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                to={item.href}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {item.label}
                {item.children && (
                  <span className="text-[10px] text-slate transition-transform group-hover:rotate-180">▾</span>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-card border border-ink/8 bg-paper-pure shadow-card">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        to={c.href}
                        className="block border-l-2 border-transparent px-4 py-2.5 text-sm text-ink/75 transition-colors hover:border-signal hover:bg-paper hover:text-ink"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-card bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:bg-signal hover:shadow-signal sm:inline-flex"
          >
            Prendre rendez-vous
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/8 bg-paper-pure lg:hidden"
            aria-label="Navigation mobile"
          >
            <div className="container-edge space-y-1 py-5">
              {nav.map((item) => (
                <div key={item.href}>
                  <Link to={item.href} className="block py-2.5 font-display text-lg text-ink">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mb-2 ml-3 border-l border-ink/10 pl-4">
                      {item.children.map((c) => (
                        <Link key={c.href} to={c.href} className="block py-1.5 text-sm text-slate">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-card bg-ink px-5 py-3.5 text-center font-semibold text-paper"
              >
                Prendre rendez-vous
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
