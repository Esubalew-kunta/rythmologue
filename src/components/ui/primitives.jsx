import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

export function Container({ className = '', children }) {
  return <div className={`container-edge ${className}`}>{children}</div>
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  )
}

export function Eyebrow({ children, num, center = false }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      {num && <span className="text-slate">{num}</span>}
      <span className="h-px w-6 bg-gold/60" aria-hidden />
      {children}
    </p>
  )
}

/** Primary CTA — ink fill with a signal glow on hover. Never coral (coral = risk). */
export function Button({ to, href, children, variant = 'primary', className = '', ...rest }) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-card px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-calm focus-visible:outline-2'
  const styles = {
    primary:
      'bg-prune text-craie shadow-accent hover:bg-prune-deep hover:-translate-y-0.5',
    signal: 'bg-prune text-craie hover:bg-prune-deep hover:shadow-accent hover:-translate-y-0.5',
    ghost: 'border border-current/25 text-current hover:border-prune hover:text-prune',
  }
  const cls = `${base} ${styles[variant]} ${className}`
  const inner = (
    <>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  return <a href={href} className={cls} {...rest}>{inner}</a>
}

/** Scroll-reveal wrapper with a reduced-motion fallback. */
export function Reveal({ children, delay = 0, y = 18, className = '' }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
