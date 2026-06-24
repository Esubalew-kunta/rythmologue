import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Seo, { physicianSchema } from '../components/ui/Seo'
import { Container, Section, Eyebrow, Button, Reveal } from '../components/ui/primitives'
import PhotoFrame from '../components/ui/PhotoFrame'
import ECGLine from '../components/brand/ECGLine'
import { DOCTOLIB_URL, site } from '../data/site'
import { conditions, energies, faPagFaq, articles } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

/* Hero headline animated word-by-word (staggerChildren) with reduced-motion guard. */
function HeroHeadline() {
  const reduce = useReducedMotion()
  const lines = [['L’électricité'], ['du', 'cœur.'], ['Maîtrisée.']]
  let wordIndex = 0
  return (
    <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tightish text-marine sm:text-6xl lg:text-7xl">
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.map((word) => {
            const i = wordIndex++
            const accent = word === 'Maîtrisée.'
            if (reduce) return <span key={i} className={accent ? 'italic text-or-patine' : ''}>{word} </span>
            return (
              <motion.span
                key={i}
                className={`inline-block ${accent ? 'italic text-or-patine' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease }}
              >
                {word}&nbsp;
              </motion.span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

const heroStats = [
  '45M de patients atteints de FA dans le monde',
  'Ablation par électroporation disponible',
  'Hôpital Américain de Paris · Centre d’expertise',
]

const institutions = [
  'Hôpital Américain de Paris',
  'London School of Economics',
  'St Thomas’ Hospital · Londres',
  'Columbia Memorial Health · NYC',
  'Université de Bordeaux',
]

const conditionCards = [
  { slug: 'fibrillation-atriale', name: 'Fibrillation atriale', stat: 'L’arythmie la plus fréquente, et l’une des mieux traitées aujourd’hui.' },
  { slug: 'types-tachycardie', name: 'Tachycardie & bradycardie', stat: 'Un rythme trop rapide ou trop lent : identifiable, et traitable.' },
  { slug: '../apnee-du-sommeil', name: 'Apnée du sommeil', stat: 'Souvent liée au cœur : un dépistage simple permet de bien la prendre en charge.' },
]

const treatmentBlocks = [
  { n: '01', title: 'Ablation par cathéter', desc: 'Radiofréquence, cryoablation, électroporation. Le traitement de référence des arythmies, souvent curatif.', href: '/traitements/ablation-catheter' },
  { n: '02', title: 'Dispositifs implantables', desc: 'Pacemakers et défibrillateurs, pour sécuriser durablement le rythme.', href: '/traitements/pacemaker' },
  { n: '03', title: 'Montres & télésurveillance', desc: 'ECG connecté et suivi à distance des prothèses, au quotidien.', href: '/montres-connectees-telesuivi' },
]

const badges = ['LSE', 'Hôpital Américain', 'Columbia', 'Bordeaux']

const authority = [
  { tag: 'Presse médicale', title: '« Portrait du mois »', org: 'Le Cardiologue' },
  { tag: 'Congrès', title: 'EHRA 2026', org: 'European Heart Rhythm Association' },
  { tag: 'Publications', title: 'Auteure', org: 'Radcliffe Cardiology' },
  { tag: 'Chaîne', title: '@drsanaamraoui', org: 'YouTube', href: site.social.youtube },
]

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        description="Le Dr Sana Amraoui, cardiologue rythmologue et cheffe d'unité à l'Hôpital Américain de Paris, traite la fibrillation atriale, l'apnée du sommeil et pratique l'ablation par cathéter, dont l'électroporation."
        schema={physicianSchema}
      />

      {/* ── A · HERO (light — calm on arrival, Change 2) ──────────────────── */}
      <Section className="relative overflow-hidden bg-craie text-ardoise">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="absolute -right-40 -top-24 -z-0 h-[520px] w-[520px] rounded-full bg-signal/5 blur-3xl" aria-hidden />
        <Container className="relative grid items-center gap-10 pb-14 pt-28 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-20 lg:pt-44">
          {/* Text — left */}
          <div>
            <Reveal>
              <p className="eyebrow">Cardiologue · Rythmologue interventionnelle</p>
            </Reveal>
            <div className="mt-5">
              <HeroHeadline />
            </div>
            <Reveal delay={0.5}>
              <div className="mt-6 max-w-prose">
                <ECGLine variant="resolved" height={52} stroke="#1C5E63" />
              </div>
            </Reveal>
            <Reveal delay={0.55}>
              <p className="mt-5 max-w-prose text-lg text-brume">
                Dr Sana Amraoui · Cardiologue rythmologue · Cheffe d’unité, Hôpital Américain de Paris.
              </p>
            </Reveal>
            <Reveal delay={0.62}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full sm:w-auto">
                  Prendre rendez-vous
                </Button>
                <a
                  href="#approche"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-card border border-marine/30 px-6 py-3.5 text-sm font-semibold text-marine transition-colors hover:border-signal hover:text-signal sm:w-auto"
                >
                  Découvrir mon approche
                </a>
              </div>
            </Reveal>
          </div>

          {/* Photo — gradient-fade cut-out (background removed), right */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <img
                src="/hero-amraoui-v3.png"
                alt="Dr Sana Amraoui, cardiologue rythmologue"
                className="relative z-10 mx-auto w-auto max-h-[420px] object-contain object-bottom sm:max-h-[520px] lg:ml-auto lg:mr-0 lg:max-h-[600px]"
              />
              {/* cream fades from the left into the photo */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-craie from-5% via-craie/0 via-55% to-transparent" aria-hidden />
            </div>
          </div>
        </Container>

        {/* Bottom stat strip */}
        <div className="relative border-t border-marine/10">
          <Container className="grid gap-3 py-5 sm:grid-cols-3">
            {heroStats.map((s) => (
              <p key={s} className="font-mono text-[11px] uppercase tracking-[0.12em] text-brume">{s}</p>
            ))}
          </Container>
        </div>
      </Section>

      {/* ── B · TRUST BAR ─────────────────────────────────────────────────── */}
      <Section className="border-b border-ardoise/8 bg-craie-soft/50">
        <Container className="py-6">
          <div className="scroll-strip flex snap-x snap-mandatory gap-x-8 gap-y-2 overflow-x-auto sm:flex-wrap sm:justify-center sm:overflow-visible">
            {institutions.map((n) => (
              <span key={n} className="shrink-0 snap-start whitespace-nowrap font-display text-base text-brume">{n}</span>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── C · WHAT IS A RYTHMOLOGUE ─────────────────────────────────────── */}
      <Section id="approche" className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-def text-center">
              <Eyebrow>Qu’est-ce qu’une rythmologue ?</Eyebrow>
              <p className="mx-auto mt-7 font-display text-3xl italic leading-tight text-prune sm:text-4xl">
                « L’électricien du cœur. »
              </p>
              <p className="mt-6 text-lg text-brume">
                Là où le cardiologue veille sur la santé globale du cœur, la rythmologue est l’experte
                exclusive de son électricité. Diagnostiquer puis corriger un signal devenu chaotique :
                c’est une sur-spécialité, et c’est tout ce que je pratique.
              </p>
              <Link to="/faq" className="link-underline mt-6 inline-block text-sm font-semibold text-ardoise">
                Les questions fréquentes
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── D · CONDITIONS ────────────────────────────────────────────────── */}
      <Section className="py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <Eyebrow center>Vos symptômes</Eyebrow>
              <h2 className="mt-5 text-3xl sm:text-4xl">Mettre un nom sur ce que ressent votre cœur</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {conditionCards.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08} className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
                <Link
                  to={c.slug.startsWith('..') ? `/${c.slug.replace('../', '')}` : `/arythmies/${c.slug}`}
                  className="group flex h-full flex-col justify-between rounded-xl2 border border-ardoise/8 bg-craie-pure p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-prune/40 hover:shadow-lift"
                >
                  <div>
                    <h3 className="font-display text-2xl text-ardoise">{c.name}</h3>
                    <p className="mt-3 text-sm text-brume">{c.stat}</p>
                  </div>
                  <span className="mt-6 text-sm font-semibold text-prune">En savoir plus →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── E · TREATMENTS (ECG signature) ────────────────────────────────── */}
      <Section className="relative overflow-hidden bg-encre py-20 text-craie lg:py-28">
        <ECGLine variant="resolved" height={120} className="absolute inset-x-0 top-12 opacity-25" stroke="#2E8A8F" loop />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow center>Mes traitements</Eyebrow>
              <h2 className="mt-5 text-3xl text-craie sm:text-4xl">Du diagnostic à la correction du rythme</h2>
              <p className="mx-auto mt-5 max-w-reading text-craie/60">
                Le tracé ci-dessus part d’un rythme normal, traverse la fibrillation, puis retrouve son
                ordre : l’image même de ce que permet une prise en charge bien menée.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl2 border border-craie/10 bg-craie/10 md:grid-cols-3">
            {treatmentBlocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <Link to={b.href} className="block h-full bg-encre p-7 transition-colors hover:bg-encre-nuit">
                  <span className="font-mono text-2xs uppercase tracking-eyebrow text-or">{b.n}</span>
                  <h3 className="mt-3 font-display text-2xl text-craie">{b.title}</h3>
                  <p className="mt-3 text-sm text-craie/60">{b.desc}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-or">En savoir plus →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── F · DR AMRAOUI (split bio) ────────────────────────────────────── */}
      <Section className="py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <PhotoFrame ratio="3/4" src="/consultation.jpeg" alt="Dr Amraoui en consultation" label="Salle d’électrophysiologie · Hôpital Américain de Paris" />
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <Eyebrow>Dr Sana Amraoui</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl">La précision de l’arythmie, la vision de la prévention</h2>
              <div className="mt-6 space-y-4 text-brume">
                <p>
                  Cheffe d’unité à l’Hôpital Américain de Paris, je traite les troubles du rythme par
                  les techniques les plus avancées, dont l’électroporation.
                </p>
                <p>
                  Formée à Bordeaux, Londres et New York, diplômée en économie de la santé de la London
                  School of Economics, j’associe la médecine de pointe à une vision entrepreneuriale de
                  la prévention, à travers Cardio Check-Up.
                </p>
                <p>
                  Femme à la tête d’une unité dans une sur-spécialité encore très masculine, j’attache
                  autant d’importance à l’excellence du geste qu’à la clarté de l’explication.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span key={b} className="rounded-full border border-or/40 bg-or/10 px-3 py-1 font-mono text-2xs uppercase tracking-eyebrow text-or-patine">
                    {b}
                  </span>
                ))}
              </div>
              <Link to="/dr-sana-amraoui" className="link-underline mt-7 inline-block text-sm font-semibold text-ardoise">
                Lire mon parcours complet →
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── G · BLOG PREVIEW ──────────────────────────────────────────────── */}
      <Section className="py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow center>Comprendre & suivre</Eyebrow>
              <h2 className="mt-5 text-3xl sm:text-4xl">Guides & actualités</h2>
              <Link to="/blog" className="link-underline mt-5 inline-block text-sm font-semibold text-ardoise">Tout le blog →</Link>
            </div>
          </Reveal>
          <div className="scroll-strip mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08} className="min-w-[78%] snap-start sm:min-w-[42%] md:min-w-0">
                <Link to={`/blog/${a.slug}`} className="group flex h-full flex-col rounded-xl2 border border-ardoise/8 bg-craie-pure p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-1 text-2xs font-semibold ${a.kind === 'Guide' ? 'bg-signal/10 text-signal' : 'bg-or/15 text-or-patine'}`}>{a.kind}</span>
                    <span className="font-mono text-[10px] uppercase tracking-eyebrow text-brume">{a.read}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-snug text-ardoise group-hover:text-prune">{a.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-brume">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── H · CARDIO CHECK-UP BAND ──────────────────────────────────────── */}
      <Section className="py-8">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-xl2 bg-encre p-8 text-craie sm:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <Eyebrow>Avant la maladie</Eyebrow>
                  <h2 className="mt-4 text-3xl text-craie sm:text-4xl">Cardio Check-Up : la prévention, pensée comme une startup</h2>
                  <p className="mt-4 max-w-reading text-craie/60">
                    Mon centre dédié au bilan cardiovasculaire personnalisé et à la prévention proactive.
                  </p>
                </div>
                <div className="lg:text-right">
                  <Button to="/cardio-check-up" variant="ghost" className="border-craie/30 text-craie hover:border-or hover:text-or">
                    Découvrir Cardio Check-Up
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── I · SOCIAL PROOF (authority-led, no empty reviews) ────────────── */}
      <Section className="py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <Eyebrow center>Reconnaissance</Eyebrow>
              <h2 className="mt-5 text-3xl sm:text-4xl">Une expertise reconnue, en France et à l’international</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {authority.map((m, i) => {
              const inner = (
                <figure className="flex h-full flex-col rounded-xl2 border border-ardoise/8 bg-craie-pure p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                  <span className="eyebrow">{m.tag}</span>
                  <blockquote className="mt-3 font-display text-xl text-ardoise">{m.title}</blockquote>
                  <figcaption className="mt-1 text-sm text-brume">{m.org}</figcaption>
                </figure>
              )
              return (
                <Reveal key={m.title} delay={i * 0.07}>
                  {m.href ? <a href={m.href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner}
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ── J · FINAL CTA + CONTACT ───────────────────────────────────────── */}
      <Section className="bg-marine py-20 text-craie lg:py-24">
        <Container className="text-center">
          <Reveal>
            <Eyebrow><span className="text-or">Besoin d’un avis ?</span></Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl text-craie sm:text-5xl">Remettons votre cœur en rythme.</h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-card bg-signal px-7 py-4 text-base font-semibold text-craie shadow-accent transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Prendre rendez-vous →
              </a>
              <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="text-lg font-semibold text-craie/90 hover:text-craie">
                {site.phones[0]}
              </a>
            </div>
            <p className="mt-8 text-sm text-craie/60">
              {site.email} · Hôpital Américain de Paris (Neuilly-sur-Seine) · Cabinet de consultation, Paris
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
