import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Reveal } from '../components/ui/primitives'
import InlineCTA from '../components/ui/InlineCTA'
import { faPagFaq } from '../data/content'

const groups = [
  {
    cat: 'Général',
    items: faPagFaq,
  },
  {
    cat: 'Symptômes & examens',
    items: [
      { q: 'Mes palpitations sont-elles graves ?', a: 'Des palpitations occasionnelles sont fréquentes et souvent bénignes. Elles justifient un avis si elles sont répétées, prolongées, accompagnées de malaise, d’essoufflement ou de douleur thoracique. Un enregistrement (ECG, Holter, montre connectée) permet de documenter l’épisode.' },
      { q: 'Qu’est-ce qu’un Holter implantable ?', a: 'C’est un petit moniteur cardiaque placé sous la peau qui enregistre le rythme en continu pendant plusieurs années. Il détecte les arythmies rares ou silencieuses que les examens de courte durée ne captent pas.' },
    ],
  },
  {
    cat: 'Technologies & suivi à distance',
    items: [
      { q: 'Une montre connectée peut-elle détecter une arythmie ?', a: 'Oui. Certaines montres réalisent un ECG à une dérivation et alertent en cas d’irrégularité du rythme. C’est un outil de dépistage utile. Dans un cas réel, une tachycardie à 190 bpm a été diagnostiquée grâce à l’ECG d’une montre, puis traitée par une intervention curative. Le diagnostic reste confirmé par le rythmologue.' },
    ],
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: groups.flatMap((g) => g.items).map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
}

export default function Faq() {
  return (
    <>
      <Seo path="/faq" title="FAQ : questions sur le rythme cardiaque"
        description="Réponses aux questions fréquentes sur la rythmologie : différence cardiologue / rythmologue, quand consulter, montres connectées, examens et traitements."
        schema={schema} />

      <PageHero
        crumbs={[{ label: 'FAQ' }]}
        eyebrow="Questions fréquentes"
        title="Le cœur a ses raisons… que nous vous expliquons ici"
        answer="En avoir le cœur net : les réponses aux questions que les patients posent le plus souvent."
      />

      <Section className="py-16">
        <Container className="max-w-3xl">
          {groups.map((g, gi) => (
            <Reveal key={g.cat} delay={gi * 0.05}>
              <div className="mb-12">
                <p className="eyebrow mb-4">{g.cat}</p>
                <div className="divide-y divide-ink/8 border-y border-ink/8">
                  {g.items.map((f) => (
                    <details key={f.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-ink">
                        {f.q}
                        <span className="shrink-0 text-signal transition-transform duration-300 group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-slate">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </Section>

      <InlineCTA />
    </>
  )
}
