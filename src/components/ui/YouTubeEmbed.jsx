/**
 * Lazy YouTube embed (Change 5). Accepts a full URL or an 11-char video id.
 * Until a real URL is supplied (url empty), it renders an on-brand placeholder
 * so no fake/placeholder video URLs ship.
 */
function extractId(url = '') {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/)
  return m ? m[1] : (/^[A-Za-z0-9_-]{11}$/.test(url) ? url : null)
}

export default function YouTubeEmbed({ url = '', title = '' }) {
  const id = extractId(url)

  if (!id) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-xl2 border border-marine/10 bg-craie-soft">
        <span className="px-6 text-center font-sans text-2xs uppercase tracking-eyebrow text-brume">
          Vidéo à venir · {title}
        </span>
      </div>
    )
  }

  return (
    <div className="aspect-video overflow-hidden rounded-xl2 border border-marine/10 bg-encre">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
