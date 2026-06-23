import { Link } from 'react-router-dom'
import { Container, Eyebrow, Reveal } from './primitives'
import ECGLine from '../brand/ECGLine'

/** Shared hero for inner pages. `answer` = the GEO "short answer" snippet. */
export default function PageHero({ crumbs = [], eyebrow, title, answer, variant = 'calm' }) {
  return (
    <section className="relative overflow-hidden border-b border-ink/8 pt-32 pb-16 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden />
      <ECGLine variant={variant} height={70} className="absolute inset-x-0 bottom-0 text-signal opacity-20" />
      <Container>
        <nav aria-label="Fil d’Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate">
          <Link to="/" className="hover:text-signal">Accueil</Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex items-center gap-2">
              <span aria-hidden>/</span>
              {c.href ? <Link to={c.href} className="hover:text-signal">{c.label}</Link> : <span className="text-ink">{c.label}</span>}
            </span>
          ))}
        </nav>
        <Reveal>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}</Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl">{title}</h1>
        </Reveal>
        {answer && (
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-reading border-l-2 border-signal pl-5 text-lg text-ink/85">{answer}</p>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
