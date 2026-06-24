import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Reveal } from '../components/ui/primitives'
import InlineCTA from '../components/ui/InlineCTA'
import PulseMarker from '../components/brand/PulseMarker'
import PhotoFrame from '../components/ui/PhotoFrame'

/**
 * Content page with prose blocks. Used for pages whose copy exists
 * (montres, cardio check-up, legal) and as a graceful placeholder for
 * pages still to be written (clearly labelled, never a dead end).
 * With a photo, image sits beside the text (not full-width).
 */
export default function Simple({ path, eyebrow, title, answer, crumbs, blocks = [], variant = 'calm', draft = false, cta = true, photo, photoSrc }) {
  const body = (
    <div>
      {draft && (
        <p className="mb-8 rounded-card border border-gold/30 bg-gold/5 px-4 py-3 font-mono text-2xs uppercase tracking-eyebrow text-gold">
          Page en cours de rédaction · contenu détaillé à venir
        </p>
      )}
      {blocks.map((b, i) => (
        <Reveal key={i} delay={i * 0.04}>
          {b.h && <h2 className="mt-8 font-display text-2xl text-ink first:mt-0">{b.h}</h2>}
          {b.p && <p className="mt-4 text-slate">{b.p}</p>}
          {b.list && (
            <ul className="mt-4 space-y-2">
              {b.list.map((li) => <li key={li} className="flex items-start gap-3 text-slate"><PulseMarker /> {li}</li>)}
            </ul>
          )}
        </Reveal>
      ))}
      <Reveal>
        <p className="mt-12 text-sm text-slate">
          <Link to="/" className="link-underline font-semibold text-ink">← Retour à l’accueil</Link>
        </p>
      </Reveal>
    </div>
  )

  return (
    <>
      <Seo path={path} title={title} description={answer} />
      <PageHero crumbs={crumbs} eyebrow={eyebrow} title={title} answer={answer} variant={variant} />

      <Section className="py-16">
        {photo ? (
          <Container>
            {/* Image beside the text (image left), full-width stack on mobile */}
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
              <Reveal>
                <PhotoFrame ratio="4/3" src={photoSrc} alt={photo} label={photo} className="lg:sticky lg:top-28" />
              </Reveal>
              <Reveal delay={0.1}>{body}</Reveal>
            </div>
          </Container>
        ) : (
          <Container className="max-w-reading">{body}</Container>
        )}
      </Section>

      {cta && <InlineCTA />}
    </>
  )
}
