import { Link } from 'react-router-dom'
import { site, nav } from '../../data/site'
import ECGLine from '../brand/ECGLine'

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-encre text-paper/80">
      <ECGLine variant="calm" height={70} className="absolute inset-x-0 top-0 opacity-25" stroke="#2E8A8F" />
      <div className="container-edge grid gap-12 pb-28 pt-20 sm:pb-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl font-semibold text-paper">Dr Sana Amraoui</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper/55">
            Rythmologue interventionnelle. Cheffe d’unité, Hôpital Américain de Paris.
            Fondatrice de Cardio Check-Up.
          </p>
          <p className="mt-5 font-mono text-2xs uppercase tracking-eyebrow text-gold-soft">
            Rétablir le rythme
          </p>
        </div>

        <nav aria-label="Plan du site">
          <p className="mb-3 font-mono text-2xs uppercase tracking-eyebrow text-paper/40">Naviguer</p>
          <ul className="space-y-2 text-sm">
            {nav.slice(0, 5).map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="text-paper/70 transition-colors hover:text-signal-glow">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 font-mono text-2xs uppercase tracking-eyebrow text-paper/40">Contact</p>
          <ul className="space-y-2 text-sm text-paper/70">
            {site.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-signal-glow">{p}</a>
              </li>
            ))}
            <li className="break-all">
              <a href={`mailto:${site.email}`} className="hover:text-signal-glow">{site.email}</a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-signal-glow">LinkedIn</a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-signal-glow">YouTube</a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-signal-glow">Instagram</a>
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-2xs uppercase tracking-eyebrow text-paper/40">Lieux de consultation</p>
          <ul className="space-y-3 text-sm text-paper/70">
            {site.locations.map((l) => (
              <li key={l.name}>
                <span className="block text-paper">{l.name}</span>
                <span className="text-xs text-paper/45">{l.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Google review QR — clickable, scannable */}
      <div className="border-t border-paper/10">
        <div className="container-edge flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-mono text-2xs uppercase tracking-eyebrow text-gold-soft">Votre avis compte</p>
            <p className="mt-1.5 text-sm text-paper/70">Scannez le QR code pour laisser un avis Google.</p>
          </div>
          <a
            href="https://g.page/r/CduP-ZEHa8huEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Laisser un avis Google"
            className="shrink-0 transition-transform hover:-translate-y-0.5"
          >
            <img
              src="/Dr_Amraoui_Review_QR-4_navy.png"
              alt="QR code — laisser un avis Google au Dr Amraoui"
              className="h-28 w-28 rounded-lg"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-edge flex flex-col gap-2 py-5 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {2026} Dr Sana Amraoui · {site.sector}</p>
          <div className="flex gap-4">
            <Link to="/mentions-legales" className="hover:text-paper/80">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-paper/80">Confidentialité · RGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
