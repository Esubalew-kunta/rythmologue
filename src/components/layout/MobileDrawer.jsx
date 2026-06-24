import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { site, DOCTOLIB_URL } from '../../data/site'

/**
 * Full-screen mobile/tablet nav over "Nuit Médicale".
 * Large 48px+ touch targets, pinned booking CTA, morphing close (X).
 * Locks body scroll and traps focus context while open.
 */
export default function MobileDrawer({ open, onClose, nav }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const ease = [0.22, 1, 0.36, 1]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="fixed inset-0 z-[60] flex flex-col bg-encre-nuit text-craie lg:hidden"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-xl font-semibold">Dr Sana Amraoui</span>
            <button
              onClick={onClose}
              aria-label="Fermer le menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-craie"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Navigation mobile">
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 + i * 0.05, duration: 0.4, ease }}
                className="border-b border-craie/10"
              >
                <Link
                  to={item.href}
                  className="flex min-h-[52px] items-center justify-between py-2 font-display text-2xl"
                >
                  {item.label}
                  <span className="text-or" aria-hidden>→</span>
                </Link>
                {item.children && (
                  <div className="mb-3 ml-1 flex flex-wrap gap-x-4 gap-y-1">
                    {item.children.map((c) => (
                      <Link key={c.href} to={c.href} className="py-1 font-sans text-sm text-craie/55">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Pinned footer: phone + booking CTA */}
          <div className="space-y-3 border-t border-craie/10 px-5 pb-7 pt-4">
            <a
              href={`tel:${site.phones[0].replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 font-sans text-sm text-craie/70"
            >
              <span aria-hidden>☏</span> {site.phones[0]}
            </a>
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-card bg-prune py-4 text-center font-semibold text-craie"
            >
              Prendre rendez-vous&nbsp;→
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
