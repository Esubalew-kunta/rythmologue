import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Eyebrow, Reveal, Button } from '../components/ui/primitives'
import AnimatedStat from '../components/ui/AnimatedStat'
import InlineCTA from '../components/ui/InlineCTA'
import { stats } from '../data/content'

const forms = [
  { name: 'FA Paroxystique', desc: 'Épisodes intermittents qui disparaissent spontanément en moins de 7 jours.' },
  { name: 'FA Persistante', desc: 'Épisodes qui se prolongent au-delà de 7 jours, ou après échec de traitement.' },
  { name: 'FA Permanente', desc: 'Stade évolutif avancé, arythmie installée de façon permanente.' },
]

const treatments = [
  { n: '01', title: 'Traitements médicamenteux', desc: 'Anticoagulants pour prévenir l’AVC, anti-arythmiques pour réguler le rythme. Efficacité parfois réduite avec le temps.' },
  { n: '02', title: 'Cardioversion électrique', desc: 'Choc électrique externe sous anesthésie. Solution temporaire, non curative.' },
  { n: '03', title: 'Ablation de FA', desc: 'Intervention mini-invasive isolant les zones arythmiques. Aujourd’hui le moyen le plus efficace, avec une possibilité de guérison complète.', hot: true },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'La fibrillation atriale est-elle dangereuse ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La FA multiplie par 4,8 le risque d’AVC ischémique et peut entraîner une insuffisance cardiaque sans traitement. Prise en charge tôt, elle se traite très efficacement.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on guérir de la fibrillation atriale ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L’ablation par cathéter, traitée précocement, offre une possibilité de guérison complète en isolant les zones de tissu cardiaque à l’origine de l’arythmie.' },
    },
  ],
}

export default function FibrillationAtriale() {
  return (
    <>
      <Seo path="/arythmies/fibrillation-atriale" title="Fibrillation atriale : symptômes, risques, traitements"
        description="La fibrillation atriale est l'arythmie la plus fréquente au monde. Symptômes, risque d'AVC (×4,8), 3 formes et traitements, dont l'ablation curative."
        schema={faqSchema} />

      <PageHero
        variant="resolved"
        crumbs={[{ label: 'Arythmies', href: '/arythmies' }, { label: 'Fibrillation atriale' }]}
        eyebrow="Arythmies · Fibrillation atriale"
        title="Fibrillation atriale : comprendre, pour mieux la traiter"
        answer="La fibrillation atriale (FA) est l’arythmie la plus fréquente au monde. Elle se manifeste par des contractions rapides et irrégulières des oreillettes, et multiplie par 4,8 le risque d’AVC. Traitée tôt, elle se soigne pourtant très efficacement."
      />

      {/* Stats */}
      <Section className="py-16">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}><AnimatedStat {...s} /></Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mechanism */}
      <Section className="py-12">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div>
              <Eyebrow>Le mécanisme</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold">Quand le signal électrique s’emballe</h2>
              <p className="mt-5 text-slate">
                Normalement, les impulsions du nœud sinusal imposent un rythme régulier. Dans la FA,
                des circuits électriques anormaux, souvent issus des veines pulmonaires,
                provoquent des contractions anarchiques des oreillettes. Cliniquement :
                palpitations, fatigue, essoufflement, majorés à l’effort.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl2 border border-alert/30 bg-alert/5 p-7">
              <p className="font-mono text-2xs uppercase tracking-eyebrow text-alert">Pourquoi agir</p>
              <p className="mt-3 font-display text-2xl text-ink">
                La FA est récurrente et évolutive.
              </p>
              <p className="mt-3 text-slate">
                Un traitement précoce est associé à un meilleur taux de succès. Sans prise en
                charge, le risque d’AVC et d’insuffisance cardiaque augmente.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3 forms */}
      <Section className="py-16">
        <Container>
          <Reveal><Eyebrow>Les 3 formes</Eyebrow></Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {forms.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <div className="h-full rounded-card border border-ink/8 bg-paper-pure p-6 shadow-card">
                  <h3 className="font-display text-xl text-ink">{f.name}</h3>
                  <p className="mt-3 text-sm text-slate">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Treatments */}
      <Section className="py-16">
        <Container>
          <Reveal>
            <Eyebrow>Options thérapeutiques</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold">Du médicament à la guérison</h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {treatments.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className={`flex flex-col gap-4 rounded-card border p-6 sm:flex-row sm:items-center ${t.hot ? 'border-signal/40 bg-signal/5' : 'border-ink/8 bg-paper-pure'}`}>
                  <span className="font-mono text-sm text-slate">{t.n}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-ink">{t.title}</h3>
                    <p className="mt-1 text-sm text-slate">{t.desc}</p>
                  </div>
                  {t.hot && (
                    <Button to="/traitements/ablation-catheter" variant="signal" className="shrink-0">
                      L’ablation
                    </Button>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <InlineCTA title="Un bilan pour votre fibrillation atriale" sub="Consultation rapide · examens complets · prise en charge personnalisée" />

      <Section className="pb-20">
        <Container>
          <p className="text-sm text-slate">
            À lire aussi :{' '}
            <Link to="/apnee-du-sommeil" className="link-underline font-semibold text-ink">Apnée du sommeil & cœur</Link>{' · '}
            <Link to="/traitements/ablation-catheter" className="link-underline font-semibold text-ink">Ablation par cathéter</Link>{' · '}
            <Link to="/montres-connectees-telesuivi" className="link-underline font-semibold text-ink">Montres connectées</Link>
          </p>
        </Container>
      </Section>
    </>
  )
}
