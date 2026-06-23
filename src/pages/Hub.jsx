import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Reveal } from '../components/ui/primitives'
import InlineCTA from '../components/ui/InlineCTA'

/** Generic hub page (Arythmies / Traitements). */
export default function Hub({ path, eyebrow, title, answer, crumbs, items }) {
  return (
    <>
      <Seo path={path} title={title} description={answer} />
      <PageHero crumbs={crumbs} eyebrow={eyebrow} title={title} answer={answer} />
      <Section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.href} delay={i * 0.06}>
                <Link to={it.href} className="group flex items-center justify-between gap-4 rounded-card border border-ink/8 bg-paper-pure p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lift">
                  <div>
                    <h2 className="font-display text-xl text-ink">{it.label}</h2>
                    {it.desc && <p className="mt-1 text-sm text-slate">{it.desc}</p>}
                  </div>
                  <span className="text-signal transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <InlineCTA />
    </>
  )
}
