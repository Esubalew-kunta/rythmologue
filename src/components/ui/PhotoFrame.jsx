/**
 * Editorial photo placeholder. No stock imagery (constraint §8): a neutral
 * block at the correct aspect ratio until real photography is supplied.
 * Swap the inner block for <img> at build time.
 */
export default function PhotoFrame({ ratio = '4/5', label = 'Photographie éditoriale', className = '', tone = 'light' }) {
  const bg = tone === 'dark' ? 'bg-encre' : 'bg-[#e9e6df]'
  const fg = tone === 'dark' ? 'text-craie/30' : 'text-ardoise/30'
  return (
    <div className={`relative overflow-hidden rounded-xl2 ${bg} ${className}`} style={{ aspectRatio: ratio }}>
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <span className="absolute left-5 top-5 h-7 w-7 border-l border-t border-or/50" aria-hidden />
      <span className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-or/50" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-sans text-[11px] uppercase tracking-[0.18em] ${fg}`}>{label}</span>
      </div>
    </div>
  )
}
