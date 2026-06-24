import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Eyebrow, Reveal } from '../components/ui/primitives'
import InlineCTA from '../components/ui/InlineCTA'
import YouTubeEmbed from '../components/ui/YouTubeEmbed'

/** Generic hub page (Arythmies / Traitements). */
export default function Hub({ path, eyebrow, title, answer, crumbs, items, videos }) {
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

      {videos && videos.length > 0 && (
        <Section className="pb-4 pt-4">
          <Container>
            <Reveal>
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <Eyebrow center>En vidéo</Eyebrow>
                <h2 className="mt-5 text-3xl sm:text-4xl">Comprendre les traitements en quelques minutes</h2>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {videos.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) * 0.08}>
                  <figure>
                    <YouTubeEmbed url={v.url} title={v.title} />
                    <figcaption className="mt-3">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-signal/10 px-2.5 py-0.5 text-2xs font-semibold text-signal">{v.audience}</span>
                        <span className="font-mono text-[10px] uppercase tracking-eyebrow text-brume">{v.duration}</span>
                      </div>
                      <p className="mt-2 font-display text-xl text-marine">{v.title}</p>
                      <p className="mt-1 text-sm text-brume">{v.desc}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <InlineCTA />
    </>
  )
}
