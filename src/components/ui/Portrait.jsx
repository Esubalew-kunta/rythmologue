/**
 * Placeholder for Dr Amraoui's real photography (no stock — see PLAN §J).
 * Renders an intentional editorial frame so layouts read as designed until
 * real portraits are shot. Swap the inner block for an <img> at build time.
 */
export default function Portrait({ className = '', caption = 'Dr Sana Amraoui', ratio = '4/5' }) {
  return (
    <figure className={`relative ${className}`}>
      <div
        className="relative overflow-hidden rounded-xl2 bg-ink"
        style={{ aspectRatio: ratio }}
      >
        {/* warm-to-ink gradient stand-in */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-soft via-ink to-[#06121f]" />
        <div className="absolute inset-0 bg-grid opacity-[0.15]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <span className="font-display text-6xl font-semibold text-paper/15">SA</span>
          <span className="font-mono text-2xs uppercase tracking-eyebrow text-paper/30">
            Portrait · à intégrer
          </span>
        </div>
        {/* gold corner hairlines */}
        <span className="absolute left-4 top-4 h-6 w-6 border-l border-t border-gold/50" aria-hidden />
        <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-gold/50" aria-hidden />
      </div>
      <figcaption className="mt-3 font-mono text-2xs uppercase tracking-eyebrow text-slate">
        {caption}
      </figcaption>
    </figure>
  )
}
