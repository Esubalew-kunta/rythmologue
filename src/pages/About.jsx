import Seo, { physicianSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Eyebrow, Reveal } from '../components/ui/primitives'
import PhotoFrame from '../components/ui/PhotoFrame'
import InlineCTA from '../components/ui/InlineCTA'
import PulseMarker from '../components/brand/PulseMarker'

const timeline = [
  { year: '2008–2012', title: 'Internat de cardiologie', org: 'Université de Bordeaux-Segalen' },
  { year: '2011', title: 'Fellowship', org: 'Columbia Memorial Health · New York' },
  { year: '2012', title: 'Fellowship', org: 'St Thomas’ Hospital · Londres' },
  { year: '2012–2016', title: 'Chef de clinique de rythmologie', org: 'Hôpital Haut-Lévêque · Pessac' },
  { year: '2021', title: 'Executive MSc / MBA, Health Economics', org: 'London School of Economics' },
  { year: '2020–', title: 'Cheffe d’unité · cardiologie & arythmie', org: 'Hôpital Américain de Paris' },
]

const diplomas = [
  'Échographie cardiaque · Bordeaux (2011)',
  'DESS cardiologie et maladies vasculaires · Bordeaux (2012)',
  'Doctorat en sciences médicales · Bordeaux (2012)',
  'Master 2 sciences de la vie et de la santé · Paris Diderot (2014)',
  'DIU rythmologie, stimulation et défibrillation · Bordeaux (2015)',
  'Executive MSc Health Economics (MBA) · LSE (2021)',
]

export default function About() {
  return (
    <>
      <Seo path="/dr-sana-amraoui" title="Dr Sana Amraoui : parcours et expertise"
        description="Rythmologue interventionnelle, cheffe d'unité à l'Hôpital Américain de Paris, fondatrice de Cardio Check-Up, diplômée de la London School of Economics."
        schema={physicianSchema} />

      <PageHero
        crumbs={[{ label: 'À propos' }]}
        eyebrow="Le parcours"
        title="Une experte du rythme cardiaque, formée à Bordeaux, Londres, New York et à la LSE"
        answer="Le Dr Sana Amraoui est rythmologue interventionnelle et cheffe d’unité du département de cardiologie et d’arythmie de l’Hôpital Américain de Paris. Elle est aussi fondatrice et CEO de Cardio Check-Up."
      />

      <Section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <PhotoFrame className="lg:sticky lg:top-28" ratio="4/5"
              label="Portrait éditorial · Dr Amraoui" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-slate">
              <p className="text-lg text-ink">
                Une double expertise rare : la médecine de pointe de l’arythmie, et une vision
                économique de la santé.
              </p>
              <p>
                Reconnue pour sa prise en charge de la fibrillation atriale et des ablations
                complexes, le Dr Amraoui développe à l’Hôpital Américain de Paris des approches
                innovantes en rythmologie et en cardiologie interventionnelle, dont
                l’électroporation, technique de dernière génération.
              </p>
              <p>
                Diplômée en économie de la santé de la London School of Economics, elle intègre
                les enjeux d’efficience des soins et d’innovation à sa pratique clinique comme à
                son activité entrepreneuriale. Tous ses diplômes ont été obtenus avec la mention
                <span className="text-gold"> félicitations du jury</span>.
              </p>
              <p>
                Femme leader dans une sur-spécialité encore très masculine, elle s’engage pour la
                place des femmes en cardiologie interventionnelle.
              </p>

              <div className="!mt-10">
                <Eyebrow>Diplômes</Eyebrow>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {diplomas.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-ink">
                      <PulseMarker /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-ink/8 py-20">
        <Container>
          <Reveal><Eyebrow>Expériences</Eyebrow></Reveal>
          <div className="mt-10 space-y-px">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink/8 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="font-mono text-xs uppercase tracking-eyebrow text-gold">{t.year}</span>
                  <div>
                    <p className="font-display text-lg text-ink">{t.title}</p>
                    <p className="text-sm text-slate">{t.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <InlineCTA title="Consulter le Dr Amraoui" />
    </>
  )
}
