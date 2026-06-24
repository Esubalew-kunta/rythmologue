import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Eyebrow, Reveal } from '../components/ui/primitives'
import InlineCTA from '../components/ui/InlineCTA'
import PhotoFrame from '../components/ui/PhotoFrame'
import { energies } from '../data/content'

const procSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Ablation par cathéter',
  procedureType: 'https://schema.org/PercutaneousProcedure',
  howPerformed:
    'Intervention mini-invasive neutralisant l’activité électrique anormale du muscle cardiaque par radiofréquence, cryoablation ou électroporation.',
  bodyLocation: 'Cœur',
}

export default function Ablation() {
  return (
    <>
      <Seo path="/traitements/ablation-catheter" title="Ablation par cathéter : radiofréquence, cryo, électroporation"
        description="L'ablation par cathéter est le traitement de référence des arythmies. Comparatif des 3 énergies : radiofréquence, cryoablation et électroporation."
        schema={procSchema} />

      <PageHero
        variant="irregular"
        crumbs={[{ label: 'Traitements', href: '/traitements' }, { label: 'Ablation par cathéter' }]}
        eyebrow="Traitements · Rythmologie interventionnelle"
        title="L’ablation par cathéter : le traitement de référence des arythmies"
        answer="L’ablation par cathéter est une intervention mini-invasive qui neutralise les zones du muscle cardiaque où se produisent les courts-circuits électriques. Proposée en première intention pour de nombreuses arythmies, elle se pratique dans des structures accréditées comme l’Hôpital Américain de Paris."
      />

      <Section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-slate">
              <p className="text-lg text-ink">Neutraliser le court-circuit, restaurer le rythme.</p>
              <p>
                Le principe : localiser puis inactiver les zones spécifiques du tissu cardiaque
                responsables de l’arythmie. Les premières techniques ont été développées au CHU de
                Bordeaux dès 1992 (flutter atrial), puis étendues à la fibrillation atriale à la
                fin des années 1990.
              </p>
              <p>
                Aujourd’hui, l’ablation est réalisée à l’échelle mondiale dans des centres
                d’expertise, avec une cartographie anatomique du cœur en trois dimensions qui
                guide le geste au millimètre.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl2 border border-ink/8 bg-paper-pure p-7 shadow-card">
              <p className="font-mono text-2xs uppercase tracking-eyebrow text-gold">Cartographie 3D</p>
              <p className="mt-3 text-slate">
                Une carte électrique et anatomique de la cavité traitée permet de visualiser et de
                localiser précisément les zones de dysfonctionnement, gage d’efficacité et de
                sécurité.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="pb-4">
        <Container>
          <Reveal>
            <PhotoFrame ratio="16/9" src="/ablation-eplab.png" alt="Salle d’électrophysiologie avec cartographie 3D du cœur" label="Cartographie 3D en salle d’électrophysiologie · illustration de procédure" />
          </Reveal>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <Reveal>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <Eyebrow center>Les 3 énergies</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold">Chaleur, froid ou champ électrique</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {energies.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.1}>
                <div className={`flex h-full flex-col rounded-card border p-7 ${e.badge ? 'border-signal/40 bg-signal/5' : 'border-ink/8 bg-paper-pure'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xs uppercase tracking-eyebrow text-slate">0{i + 1}</span>
                    {e.badge && <span className="rounded-full bg-signal/15 px-2.5 py-1 text-2xs font-semibold text-signal-deep">{e.badge}</span>}
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-ink">{e.name}</h3>
                  <p className="mt-1 font-mono text-xs text-gold">{e.by}</p>
                  <p className="mt-4 text-sm text-slate">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-reading text-sm text-slate">
              Réf. : <a className="link-underline font-semibold text-ink" href="https://www.sfcardio.fr/publication/tachycardie-ou-une-anomalie-electrique-par-ablation-endocavitaire" target="_blank" rel="noopener noreferrer">Consentements SFC sur l’ablation</a>.
            </p>
          </Reveal>
        </Container>
      </Section>

      <InlineCTA title="Discuter d’une ablation" sub="Évaluation de votre arythmie et de la meilleure stratégie thérapeutique" />
    </>
  )
}
