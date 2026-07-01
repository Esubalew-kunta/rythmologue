import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Reveal } from '../components/ui/primitives'
import { articles, blogCategories, categoryLabel } from '../data/content'

const filters = [{ key: 'all', label: 'Tout' }, ...blogCategories]

export default function Blog() {
  const [active, setActive] = useState('all')
  const list = active === 'all' ? articles : articles.filter((a) => a.category === active)

  return (
    <>
      <Seo path="/blog" title="Blog : guides et actualités en rythmologie"
        description="Guides patients et actualités du Dr Sana Amraoui : fibrillation atriale, traitements, examens, montres connectées et actualités de la rythmologie." />

      <PageHero
        crumbs={[{ label: 'Blog' }]}
        eyebrow="Comprendre & suivre"
        title="Guides & actualités"
        answer="Des guides patients pensés pour être clairs et fiables, et les actualités de la rythmologie interventionnelle, classés par thème."
      />

      <Section className="py-12">
        <Container>
          {/* Category filter */}
          <div className="-mx-1 mb-10 flex gap-2 overflow-x-auto scroll-strip px-1 pb-1">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                aria-pressed={active === f.key}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === f.key ? 'bg-marine text-craie' : 'border border-marine/15 text-brume hover:border-signal hover:text-marine'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.06}>
                <Link to={`/blog/${a.slug}`} className="group flex h-full flex-col rounded-xl2 border border-marine/8 bg-craie-pure p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-signal/10 px-2.5 py-1 text-2xs font-semibold text-signal">
                      {categoryLabel(a.category)}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-eyebrow text-brume">{a.read} · {a.date}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl leading-snug text-marine group-hover:text-signal">{a.title}</h2>
                  <p className="mt-3 flex-1 text-sm text-brume">{a.excerpt}</p>
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
