import { motion, useReducedMotion } from 'framer-motion'

/**
 * "Le tracé vivant" — the signature element (DESIGN_PLAN §G).
 * A single teal hairline that draws one rhythm sweep on entry.
 *   variant="calm"      regular sinus rhythm (reassurance sections)
 *   variant="irregular" fibrillation-like chaos (when introducing a condition)
 *   variant="resolved"  chaos that settles back into rhythm (final CTA)
 * Honours prefers-reduced-motion by rendering the trace static.
 */

const BASE = 60
const W = 1200

// one regular PQRST beat, relative commands, ~200px wide
const beat = 'h44 l9,-5 9,5 h8 l5,15 l7,-40 l7,34 l6,-10 h10 q9,-13 18,0 h26'
// a chaotic FA segment — irregular, fast, low-amplitude tremor
const fib =
  'l10,-8 8,12 9,-16 7,18 10,-22 8,14 9,-6 7,10 10,-18 8,8 9,-12 7,16 10,-10 8,6 9,-14 7,12'

function buildPath(variant) {
  let d = `M0,${BASE} `
  if (variant === 'irregular') {
    for (let i = 0; i < 7; i++) d += fib + ' '
  } else if (variant === 'resolved') {
    for (let i = 0; i < 4; i++) d += fib + ' '
    for (let i = 0; i < 4; i++) d += beat + ' '
  } else {
    for (let i = 0; i < 6; i++) d += beat + ' '
  }
  return d.trim()
}

export default function ECGLine({
  variant = 'calm',
  className = '',
  stroke = 'var(--signal)',
  height = 90,
  loop = false,
}) {
  const reduce = useReducedMotion()
  const d = buildPath(variant)

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} 120`}
      width="100%"
      height={height}
      fill="none"
      preserveAspectRatio="none"
      role="img"
      aria-label="Tracé électrocardiographique"
    >
      {/* faint baseline */}
      <line x1="0" y1={BASE} x2={W} y2={BASE} stroke="currentColor" strokeOpacity="0.08" />
      {reduce ? (
        <path d={d} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <motion.path
          d={d}
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: !loop, margin: '-40px' }}
          transition={{
            pathLength: { duration: 2.4, ease: [0.4, 0, 0.2, 1], repeat: loop ? Infinity : 0, repeatDelay: 1.2 },
            opacity: { duration: 0.4 },
          }}
        />
      )}
    </svg>
  )
}
