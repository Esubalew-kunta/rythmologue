import { site, DOCTOLIB_URL } from '../../data/site'

/** Mobile-only persistent action bar — booking is always one tap away (UX §2). */
export default function StickyBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper-pure/95 backdrop-blur-md sm:hidden">
      <div className="flex items-stretch gap-2 p-3">
        <a
          href={`tel:${site.phones[0].replace(/\s/g, '')}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-card border border-ink/15 py-3 text-sm font-semibold text-ink"
          aria-label="Appeler le secrétariat"
        >
          <span aria-hidden>☏</span> Appeler
        </a>
        <a
          href={DOCTOLIB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[1.6] items-center justify-center rounded-card bg-ink py-3 text-sm font-semibold text-paper"
        >
          Prendre rendez-vous
        </a>
      </div>
    </div>
  )
}
