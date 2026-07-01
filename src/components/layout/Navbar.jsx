import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileDrawer from './MobileDrawer'
import { site, DOCTOLIB_URL } from '../../data/site'

// Max 5 top-level items (critique §1). Cardio Check-Up + Montres demoted.
export const primaryNav = [
  {
    label: 'Arythmies',
    href: '/arythmies',
    children: [
      { label: 'Généralités', href: '/arythmies/palpitations' },
      { label: 'Types', href: '/arythmies/types-tachycardie' },
      { label: 'Fibrillation atriale', href: '/arythmies/fibrillation-atriale' },
      { label: 'Holter implantable', href: '/arythmies/holter-implantable' },
    ],
  },
  {
    label: 'Traitements',
    href: '/traitements',
    children: [
      { label: 'Ablation par cathéter', href: '/traitements/ablation-catheter' },
      { label: 'Pacemaker', href: '/traitements/pacemaker' },
      { label: 'Défibrillateur', href: '/traitements/defibrillateur' },
    ],
  },
  { label: 'Montres connectées', href: '/montres-connectees-telesuivi' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/dr-sana-amraoui' },
]

function LogoMark({ className = '' }) {
  // Gold ECG glyph reads on both the dark hero and the white scrolled state.
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" aria-hidden className={className}>
      <rect x="1" y="1" width="34" height="34" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.35" />
      <path d="M5 18h5l2-6 4 12 3-8 2 4h10" fill="none" stroke="#CBB388" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openMenu, setOpenMenu] = useState(null) // which desktop dropdown is open
  const closeTimer = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpenDrawer(false); setOpenMenu(null) }, [pathname])

  // Hero is now light (Change 2), so nav text stays marine in every state;
  // only the background frosts in on scroll.
  const textCls = 'text-marine'

  const hoverOpen = (label) => { clearTimeout(closeTimer.current); setOpenMenu(label) }
  const hoverClose = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 120) }

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-calm ${
        scrolled ? 'bg-craie/90 shadow-nav backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* Mobile utility strip — phone always one tap away (critique §1) */}
      <a
        href={`tel:${site.phones[0].replace(/\s/g, '')}`}
        className={`flex items-center justify-center gap-2 py-1.5 text-2xs font-medium tracking-wide transition-colors lg:hidden ${
          scrolled ? 'bg-encre text-craie' : 'bg-encre/80 text-craie backdrop-blur-sm'
        }`}
      >
        <span aria-hidden>☏</span> Secrétariat · {site.phones[0]}
      </a>

      <div className="container-edge flex h-[68px] items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className={`flex items-center gap-3 ${textCls}`} aria-label="Accueil, Dr Sana Amraoui">
          <LogoMark />
          <span className="hidden sm:block leading-none">
            <span className="block font-display text-xl font-semibold tracking-tightish">Dr Sana Amraoui</span>
            <span className="mt-0.5 block font-sans text-[11px] font-medium uppercase tracking-[0.14em] opacity-70">
              Cardiologue · Rythmologue
            </span>
          </span>
        </Link>

        {/* Desktop nav (≥1024px) */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {primaryNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && hoverOpen(item.label)}
              onMouseLeave={hoverClose}
            >
              <Link
                to={item.href}
                className={`group flex items-center gap-1.5 py-2 text-sm font-medium transition-colors ${textCls} ${
                  isActive(item.href) ? '' : 'opacity-85 hover:opacity-100'
                }`}
                aria-haspopup={item.children ? 'true' : undefined}
                aria-expanded={item.children ? openMenu === item.label : undefined}
                onFocus={() => item.children && hoverOpen(item.label)}
              >
                {item.label}
                {item.children && <span className="text-[9px] opacity-70 transition-transform group-hover:rotate-180">▼</span>}
                {/* active underline in accent */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-prune transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0'
                  }`}
                  aria-hidden
                />
              </Link>

              {item.children && (
                <div
                  className={`absolute left-0 top-full w-60 pt-3 transition-all duration-200 ${
                    openMenu === item.label ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
                  }`}
                  onKeyDown={(e) => e.key === 'Escape' && setOpenMenu(null)}
                >
                  <div className="overflow-hidden rounded-card border border-ardoise/8 bg-craie-pure shadow-card">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        to={c.href}
                        className="block border-l-2 border-transparent px-4 py-2.5 font-sans text-sm text-ardoise/80 transition-colors hover:border-prune hover:bg-craie hover:text-ardoise"
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

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-card bg-prune px-5 py-2.5 text-sm font-semibold text-craie shadow-accent transition-all duration-300 hover:bg-prune-deep hover:-translate-y-0.5 lg:inline-flex"
          >
            Prendre rendez-vous&nbsp;→
          </a>

          {/* Tablet abbreviated CTA */}
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-card bg-prune px-4 py-2 text-sm font-semibold text-craie sm:inline-flex lg:hidden"
          >
            RDV&nbsp;→
          </a>

          {/* Hamburger (tablet + mobile) */}
          <button
            onClick={() => setOpenDrawer(true)}
            className={`flex h-11 w-11 items-center justify-center rounded-lg lg:hidden ${textCls}`}
            aria-label="Ouvrir le menu"
            aria-expanded={openDrawer}
            aria-controls="mobile-drawer"
          >
            <div className="space-y-[5px]">
              <span className="block h-0.5 w-6 rounded-full bg-current" />
              <span className="block h-0.5 w-6 rounded-full bg-current" />
              <span className="block h-0.5 w-6 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </div>

    </header>

    {/* Rendered OUTSIDE <header>: the scrolled header uses backdrop-filter,
        which would otherwise become the containing block for this fixed
        overlay and mis-position it after scrolling. */}
    <MobileDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} nav={primaryNav} />
    </>
  )
}
