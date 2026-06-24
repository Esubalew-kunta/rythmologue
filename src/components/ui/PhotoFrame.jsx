/**
 * Editorial photo frame. With `src`, renders a real <img> filling the frame
 * at the given aspect ratio; without `src`, shows a labelled on-brand
 * placeholder (no stock imagery) until real photography is supplied.
 */
export default function PhotoFrame({ ratio = '4/5', label = 'Photographie éditoriale', className = '', tone = 'light', src, alt }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-xl2 bg-encre ${className}`} style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt || label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="pointer-events-none absolute left-5 top-5 h-7 w-7 border-l border-t border-or/50" aria-hidden />
        <span className="pointer-events-none absolute bottom-5 right-5 h-7 w-7 border-b border-r border-or/50" aria-hidden />
      </div>
    )
  }

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
