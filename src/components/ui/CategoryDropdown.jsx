import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/**
 * Self-contained category dropdown (e.g. "Diplômes" or "Expériences").
 * Closed: title + plus. Open: concise list (gold year, marine text).
 * Two of these sit side by side and open/close independently.
 */
export default function CategoryDropdown({ title, items = [] }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <div className="rounded-xl2 border border-marine/10 bg-craie-pure shadow-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-xl text-marine sm:text-2xl">{title}</span>
        <span
          className={`shrink-0 text-2xl leading-none transition-all duration-300 ${open ? 'rotate-45 text-or' : 'text-marine/35 group-hover:text-or-patine'}`}
          aria-hidden
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="px-6 pb-6">
              {items.map((it) => (
                <li
                  key={`${it.year}-${it.name}`}
                  className="flex flex-col gap-0.5 border-t border-marine/8 py-3 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="shrink-0 font-mono text-xs text-or-patine sm:w-14">{it.year}</span>
                  <span className="flex-1">
                    <span className="font-display text-base text-marine">{it.name}</span>
                    {it.institution && <span className="block text-sm text-brume">{it.institution}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
