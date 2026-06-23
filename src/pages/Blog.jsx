import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Reveal } from '../components/ui/primitives'
import { articles } from '../data/content'

const extra = [
  { stream: 'Actualité', slug: 'parisante-campus', title: 'Le Dr Amraoui à PariSanté Campus', excerpt: 'Table ronde sur l’intelligence artificielle appliquée aux troubles du rythme cardiaque.', read: '3 min' },
  { stream: 'Actualité', slug: 'systeme-affera', title: 'Le système Affera en rythmologie', excerpt: 'Une avancée dans le traitement de la fibrillation atriale et du flutter atrial.', read: '5 min' },
  { stream: 'Guide', slug: 'apnee-sommeil-coeur', title: 'Apnée du sommeil et cœur : le lien que l’on ignore', excerpt: 'Pourquoi traiter l’apnée est essentiel pour ne pas voir récidiver une arythmie.', read: '7 min' },
]

const all = [...articles, ...extra]
const streams = ['Tout', 'Guide', 'Actualité']

export default function Blog() {
  const [filter, setFilter] = useState('Tout')
  const list = filter === 'Tout' ? all : all.filter((a) => a.stream === filter)

  return (
    <>
      <Seo path="/blog" title="Blog : guides et actualités en rythmologie"
        description="Guides patients et actualités du Dr Sana Amraoui : fibrillation atriale, ablation, apnée du sommeil, montres connectées, congrès EHRA." />

      <PageHero
        crumbs={[{ label: 'Blog' }]}
        eyebrow="Comprendre & suivre"
        title="Guides & actualités"
        answer="Deux fils : des guides patients pensés pour être clairs et fiables, et les actualités de la rythmologie interventionnelle."
      />

      <Section className="py-12">
        <Container>
          <div className="mb-10 flex gap-2">
            {streams.map((s) => (
              <button key={s} onClick={() => setFilter(s)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === s ? 'bg-ink text-paper' : 'border border-ink/15 text-slate hover:border-signal hover:text-ink'}`}>
                {s}{s !== 'Tout' && 's'}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.06}>
                <Link to={`/blog/${a.slug}`} className="group flex h-full flex-col rounded-card border border-ink/8 bg-paper-pure p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-2xs uppercase tracking-eyebrow ${a.stream === 'Guide' ? 'text-signal' : 'text-gold'}`}>{a.stream}</span>
                    <span className="text-2xs text-slate">{a.read}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl leading-snug text-ink group-hover:text-signal-deep">{a.title}</h2>
                  <p className="mt-3 flex-1 text-sm text-slate">{a.excerpt}</p>
                  <span className="mt-4 text-sm font-semibold text-signal">Lire →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
