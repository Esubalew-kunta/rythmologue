import { useParams, Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Reveal } from '../components/ui/primitives'
import InlineCTA from '../components/ui/InlineCTA'
import YouTubeEmbed from '../components/ui/YouTubeEmbed'
import { articles, categoryLabel } from '../data/content'

/** Renders one body block from the structured article content. */
function Block({ b }) {
  switch (b.type) {
    case 'h2':
      return <h2 className="mt-12 font-display text-2xl text-ink sm:text-3xl">{b.text}</h2>
    case 'h3':
      return <h3 className="mt-8 font-display text-xl text-ink">{b.text}</h3>
    case 'list':
      return (
        <ul className="mt-5 space-y-2.5">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-slate">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <figure className="my-10 border-l-2 border-prune pl-6">
          <blockquote className="font-display text-2xl italic leading-snug text-prune">{b.text}</blockquote>
          {b.cite && <figcaption className="mt-3 font-mono text-2xs uppercase tracking-eyebrow text-brume">— {b.cite}</figcaption>}
        </figure>
      )
    case 'tip': {
      const urgent = b.tone === 'urgent'
      return (
        <aside className={`my-8 rounded-xl2 border p-6 ${urgent ? 'border-alert/40 bg-alert/5' : 'border-petrole/30 bg-petrole/5'}`}>
          {b.title && (
            <p className={`font-mono text-2xs uppercase tracking-eyebrow ${urgent ? 'text-alert' : 'text-petrole'}`}>{b.title}</p>
          )}
          <p className="mt-2 text-slate leading-relaxed">{b.text}</p>
        </aside>
      )
    }
    case 'video':
      return (
        <figure className="my-8">
          <YouTubeEmbed url={b.videoId} title={b.caption || ''} />
          {b.caption && <figcaption className="mt-3 text-center text-sm text-brume">{b.caption}</figcaption>}
        </figure>
      )
    case 'p':
    default:
      return <p className="mt-5 text-slate leading-relaxed">{b.text}</p>
  }
}

export default function Article() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <Section className="pt-40 pb-24 text-center">
        <Container>
          <p className="eyebrow justify-center">Article introuvable</p>
          <h1 className="mt-5 text-3xl">Cet article n’existe pas ou a été déplacé.</h1>
          <Link to="/blog" className="link-underline mt-6 inline-block text-sm font-semibold text-ink">← Retour au blog</Link>
        </Container>
      </Section>
    )
  }

  return (
    <>
      <Seo path={`/blog/${article.slug}`} title={article.title} description={article.excerpt} />

      <PageHero
        variant="resolved"
        crumbs={[{ label: 'Blog', href: '/blog' }, { label: categoryLabel(article.category) }]}
        eyebrow={categoryLabel(article.category)}
        title={article.title}
        answer={article.excerpt}
      />

      <Section className="py-14">
        <Container className="mx-auto max-w-reading">
          <p className="mb-8 font-mono text-2xs uppercase tracking-eyebrow text-brume">
            {article.author} · {article.read} · {article.date}
          </p>
          <Reveal>
            <div>
              {article.body.map((b, i) => (
                <Block key={i} b={b} />
              ))}
            </div>
          </Reveal>
          <p className="mt-12 text-sm text-slate">
            Cet article est informatif et ne remplace pas une consultation médicale.
          </p>
          <Link to="/blog" className="link-underline mt-6 inline-block text-sm font-semibold text-ink">← Tous les articles</Link>
        </Container>
      </Section>

      <InlineCTA title="Une question sur votre cœur ?" sub="Consultation rapide · examens complets · prise en charge personnalisée" />
    </>
  )
}
