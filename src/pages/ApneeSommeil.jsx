import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Eyebrow, Reveal } from '../components/ui/primitives'
import AnimatedStat from '../components/ui/AnimatedStat'
import InlineCTA from '../components/ui/InlineCTA'
import PulseMarker from '../components/brand/PulseMarker'

const types = [
  { name: 'Apnée obstructive', tag: '95 % des cas', desc: 'Blocage mécanique des voies respiratoires : relâchement des tissus, surpoids, anatomie.' },
  { name: 'Apnée centrale', tag: 'Commande', desc: 'Le cerveau cesse d’envoyer le signal de respirer.' },
  { name: 'Apnée mixte', tag: 'Combinée', desc: 'Combinaison des mécanismes obstructif et central.' },
]

const symptoms = {
  nuit: ['Ronflements bruyants et irréguliers', 'Pauses respiratoires constatées par l’entourage', 'Réveils en sursaut, sensation d’étouffement'],
  jour: ['Fatigue chronique, somnolence diurne', 'Troubles de la mémoire et de la concentration', 'Irritabilité ou dépression', 'Maux de tête au réveil'],
}

export default function ApneeSommeil() {
  return (
    <>
      <Seo path="/apnee-du-sommeil" title="Apnée du sommeil et cœur : comprendre pour mieux traiter"
        description="Près de 2 millions de personnes souffrent d'apnée du sommeil en France. Lien avec la fibrillation atriale, l'hypertension et l'AVC, diagnostic et traitement." />

      <PageHero
        variant="irregular"
        crumbs={[{ label: 'Apnée du sommeil' }]}
        eyebrow="Apnée du sommeil"
        title="L’apnée du sommeil et votre cœur : comprendre pour mieux traiter"
        answer="Le syndrome d’apnées-hypopnées obstructives du sommeil (SAHOS) interrompt la respiration de façon répétée pendant la nuit. À chaque pause, le cœur subit un stress intense, ce qui en fait une cause fréquente de fibrillation atriale."
      />

      <Section className="py-16">
        <Container className="grid gap-10 sm:grid-cols-3">
          <Reveal><AnimatedStat value="2 000 000" label="personnes touchées en France (modérée à sévère)" /></Reveal>
          <Reveal delay={0.08}><AnimatedStat value="95 %" label="des cas sont des apnées obstructives" /></Reveal>
          <Reveal delay={0.16}><AnimatedStat value="La majorité" label="des cas ne sont pas diagnostiqués" /></Reveal>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <Reveal>
            <div className="rounded-xl2 border border-signal/30 bg-signal/5 p-8">
              <Eyebrow>Le lien avec le cœur</Eyebrow>
              <p className="mt-4 font-display text-2xl text-ink sm:text-3xl">
                « Si nous traitons votre trouble du rythme sans traiter votre apnée du sommeil, le
                risque de récidive est beaucoup plus élevé. »
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                <li className="flex items-start gap-2.5 text-sm text-slate"><PulseMarker /> Perturbations du rythme (FA, bradycardie nocturne)</li>
                <li className="flex items-start gap-2.5 text-sm text-slate"><PulseMarker /> Hypertension artérielle persistante</li>
                <li className="flex items-start gap-2.5 text-sm text-slate"><PulseMarker /> Risque accru d’infarctus et d’AVC</li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <Reveal><Eyebrow>Les 3 types</Eyebrow></Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {types.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="h-full rounded-card border border-ink/8 bg-paper-pure p-6 shadow-card">
                  <span className="font-mono text-2xs uppercase tracking-eyebrow text-gold">{t.tag}</span>
                  <h3 className="mt-2 font-display text-xl text-ink">{t.name}</h3>
                  <p className="mt-3 text-sm text-slate">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-card border border-ink/8 bg-ink p-7 text-paper">
              <p className="font-mono text-2xs uppercase tracking-eyebrow text-paper/40">La nuit</p>
              <ul className="mt-4 space-y-2 text-sm text-paper/80">{symptoms.nuit.map((s) => <li key={s} className="flex items-start gap-2.5"><PulseMarker className="text-petrole-glow" /> {s}</li>)}</ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-card border border-ink/8 bg-paper-pure p-7">
              <p className="font-mono text-2xs uppercase tracking-eyebrow text-gold">Le jour</p>
              <ul className="mt-4 space-y-2 text-sm text-slate">{symptoms.jour.map((s) => <li key={s} className="flex items-start gap-2.5"><PulseMarker /> {s}</li>)}</ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <Reveal>
            <p className="max-w-reading text-slate">
              <span className="font-semibold text-ink">Diagnostic & traitement.</span> Le dépistage
              est simple et indolore : polygraphie ventilatoire ou polysomnographie. Le traitement
              repose sur la PPC (pression positive continue) ou une orthèse d’avancée mandibulaire.
            </p>
          </Reveal>
        </Container>
      </Section>

      <InlineCTA title="Dépister l’apnée du sommeil" />

      <Section className="pb-20">
        <Container>
          <p className="text-sm text-slate">
            À lire aussi :{' '}
            <Link to="/arythmies/fibrillation-atriale" className="link-underline font-semibold text-ink">Fibrillation atriale</Link>
          </p>
        </Container>
      </Section>
    </>
  )
}
