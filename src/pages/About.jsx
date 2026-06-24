import Seo, { physicianSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Eyebrow, Reveal } from '../components/ui/primitives'
import InlineCTA from '../components/ui/InlineCTA'
import CategoryDropdown from '../components/ui/CategoryDropdown'

const timeline = [
  { year: '2008–2012', title: 'Internat de cardiologie', org: 'Université de Bordeaux-Segalen' },
  { year: '2011', title: 'Fellowship', org: 'Columbia Memorial Health · New York' },
  { year: '2012', title: 'Fellowship', org: 'St Thomas’ Hospital · Londres' },
  { year: '2012–2016', title: 'Chef de clinique de rythmologie', org: 'Hôpital Haut-Lévêque · Pessac' },
  { year: '2021', title: 'Executive MSc / MBA, Health Economics', org: 'London School of Economics' },
  { year: '2020–', title: 'Cheffe d’unité · cardiologie & arythmie', org: 'Hôpital Américain de Paris' },
]

// Concise dropdown items — closed shows year + name, open reveals institution + location.
const diplomas = [
  { year: '2011', name: 'Échographie cardiaque', institution: 'Université Bordeaux Segalen', location: 'Bordeaux, France' },
  { year: '2012', name: 'DESS de cardiologie et maladies vasculaires', institution: 'Université Bordeaux Segalen', location: 'Bordeaux, France' },
  { year: '2012', name: 'Doctorat en sciences médicales', institution: 'Université Bordeaux Segalen', location: 'Bordeaux, France' },
  { year: '2014', name: 'Master 2 en sciences de la vie et de la santé', institution: 'Université Paris 7 · Diderot', location: 'Paris, France' },
  { year: '2015', name: 'DIU de rythmologie, stimulation et défibrillation', institution: 'Université Bordeaux Segalen', location: 'Bordeaux, France' },
  { year: '2021', name: 'Executive MSc / MBA · Health Economics', institution: 'London School of Economics', location: 'Londres, Royaume-Uni' },
]

const experiences = timeline.map((t) => ({ year: t.year, name: t.title, institution: t.org }))

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
            {/* Background-removed cut-out — sits naturally on the cream page, no frame/box */}
            <img
              src="/about-amraoui-v2.png"
              alt="Dr Sana Amraoui, cardiologue rythmologue"
              className="mx-auto w-full max-w-sm lg:sticky lg:top-28"
            />
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
            </div>

            {/* Parcours — two independent dropdowns under the bio, within the right column */}
            <div className="mt-10 grid items-start gap-4 sm:grid-cols-2">
              <CategoryDropdown title="Diplômes" items={diplomas} />
              <CategoryDropdown title="Expériences" items={experiences} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <InlineCTA title="Consulter le Dr Amraoui" />
    </>
  )
}
