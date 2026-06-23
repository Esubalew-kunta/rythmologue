import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/** Big citable number that counts up once on view (mono = "instrument readout"). */
export default function AnimatedStat({ value, label, alert = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(value)

  // Count up only the leading numeric part (e.g. "230 000"), keep prefixes/suffixes.
  useEffect(() => {
    if (reduce || !inView) return
    const match = String(value).match(/[\d  ]+/)
    if (!match) return
    const target = parseInt(match[0].replace(/\s/g, ''), 10)
    if (Number.isNaN(target)) return
    const prefix = value.slice(0, match.index)
    const suffix = value.slice(match.index + match[0].length)
    const dur = 1200
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      const n = Math.round(target * eased)
      setDisplay(`${prefix}${n.toLocaleString('fr-FR')}${suffix}`)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, value])

  return (
    <div ref={ref} className="relative">
      <span
        className={`block font-mono text-4xl font-medium tabular-nums tracking-tight sm:text-5xl ${
          alert ? 'text-alert' : 'text-signal'
        }`}
      >
        {display}
      </span>
      <span className="mt-2 block max-w-[22ch] text-sm leading-snug text-slate">{label}</span>
    </div>
  )
}
