import { Link } from 'react-router-dom'
import Seo, { physicianSchema } from '../components/ui/Seo'
import { Container, Section, Eyebrow, Button, Reveal } from '../components/ui/primitives'
import AnimatedStat from '../components/ui/AnimatedStat'
import Portrait from '../components/ui/Portrait'
import ECGLine from '../components/brand/ECGLine'
import { DOCTOLIB_URL, site } from '../data/site'
import { credentials, conditions, energies, stats, faPagFaq, articles } from '../data/content'

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title=""
        description="Le Dr Sana Amraoui, rythmologue interventionnelle et cheffe d'unité à l'Hôpital Américain de Paris, traite la fibrillation atriale, pose pacemakers et défibrillateurs, et pratique l'ablation par cathéter."
        schema={physicianSchema}
      />

      {/* 1 · HERO ----------------------------------------------------------- */}
      <Section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden />
        <div className="absolute -right-40 -top-20 -z-10 h-[520px] w-[520px] rounded-full bg-signal/5 blur-3xl" aria-hidden />
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <Eyebrow num="01">Rythmologie interventionnelle · Paris</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
                Rétablir le<br />
                <span className="italic text-signal">rythme.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-6 max-w-prose">
                <ECGLine variant="resolved" height={54} className="text-signal" />
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 max-w-prose text-lg text-slate">
                Quand le cœur perd la mesure, une experte du signal électrique cardiaque le remet
                en ordre. Fibrillation atriale, ablation, stimulation. À Paris, formée à Londres
                et New York.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" variant="primary">
                  Prendre rendez-vous
                </Button>
                <Link
                  to="/arythmies/fibrillation-atriale"
                  className="link-underline text-sm font-semibold text-ink"
                >
                  Comprendre l’arythmie
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              <Portrait className="mx-auto max-w-sm" caption="Dr Sana Amraoui · Cheffe d’unité, Hôpital Américain de Paris" />
              <div className="absolute -bottom-5 -left-5 hidden rounded-card border border-ink/8 bg-paper-pure px-4 py-3 shadow-card sm:block">
                <p className="font-mono text-2xs uppercase tracking-eyebrow text-gold">London School of Economics</p>
                <p className="text-sm font-semibold text-ink">Health Economics · MBA</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 2 · CREDENTIAL STRIP ---------------------------------------------- */}
      <Section className="border-y border-ink/8 bg-paper-warm/40">
        <Container className="py-7">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <span className="font-mono text-2xs uppercase tracking-eyebrow text-slate">Parcours</span>
            {credentials.map((c) => (
              <div key={c.label + c.org} className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-ink">{c.label}</span>
                <span className="text-xs text-slate">· {c.org}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3 · DIFFERENTIATOR ------------------------------------------------- */}
      <Section className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow num="02">Qu’est-ce qu’une rythmologue ?</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
                « Le rythmologue, c’est <span className="text-signal">l’électricien du cœur</span>. »
              </p>
              <p className="mt-6 max-w-reading text-slate">
                Là où le cardiologue généraliste veille sur la santé globale du cœur (artères,
                tension), la rythmologue est l’experte exclusive de son électricité. Diagnostiquer
                et corriger un signal devenu chaotique : c’est une sur-spécialité, et c’est tout ce
                que fait le Dr Amraoui.
              </p>
              <Link to="/dr-sana-amraoui" className="link-underline mt-6 inline-block text-sm font-semibold text-ink">
                Découvrir son parcours
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 4 · CONDITIONS ----------------------------------------------------- */}
      <Section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <Eyebrow num="03">Vos symptômes</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Mettre un nom sur ce que ressent votre cœur
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link
                  to={`/arythmies/${c.slug}`}
                  className="group flex h-full flex-col justify-between rounded-card border border-ink/8 bg-paper-pure p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-lift"
                >
                  <div>
                    <p className="font-mono text-2xs uppercase tracking-eyebrow text-slate">{c.symptom}</p>
                    <h3 className="mt-3 font-display text-xl text-ink">{c.name}</h3>
                    <p className="mt-3 text-sm text-slate">{c.blurb}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    {c.flag ? (
                      <span className="rounded-full bg-alert/10 px-2.5 py-1 text-2xs font-semibold text-alert">{c.flag}</span>
                    ) : <span />}
                    <span className="text-signal transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5 · TREATMENTS / 3 ENERGIES --------------------------------------- */}
      <Section className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32">
        <ECGLine variant="irregular" height={120} className="absolute inset-x-0 top-10 text-paper opacity-10" loop />
        <Container className="relative">
          <Reveal>
            <Eyebrow num="04">Des solutions, souvent curatives</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold text-paper sm:text-4xl">
              L’ablation par cathéter : le traitement de référence des arythmies
            </h2>
            <p className="mt-5 max-w-reading text-paper/60">
              Une intervention mini-invasive qui isole les zones de tissu cardiaque à l’origine
              de l’arythmie. Trois énergies, choisies selon votre cas.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-paper/10 bg-paper/10 md:grid-cols-3">
            {energies.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.1}>
                <div className="h-full bg-ink p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xs uppercase tracking-eyebrow text-paper/40">
                      0{i + 1}
                    </span>
                    {e.badge && (
                      <span className="rounded-full bg-signal/15 px-2.5 py-1 text-2xs font-semibold text-signal-glow">
                        {e.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-paper">{e.name}</h3>
                  <p className="mt-1 font-mono text-xs text-gold-soft">{e.by}</p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <Button to="/traitements/ablation-catheter" variant="signal">
                Tout savoir sur l’ablation
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 6 · FA STATS BAND (fear → resolution) ----------------------------- */}
      <Section className="py-24 lg:py-28">
        <Container>
          <Reveal>
            <Eyebrow num="05">Fibrillation atriale · les chiffres</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-4xl">
              L’arythmie la plus fréquente au monde, et l’une des plus traitables à condition
              d’agir tôt.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <AnimatedStat value={s.value} label={s.label} alert={s.alert} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-12 max-w-reading border-l-2 border-signal pl-5 font-display text-xl italic text-ink">
              « Traitée précocement, la fibrillation atriale offre une possibilité de guérison
              complète. »
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 7 · CARDIO CHECK-UP ------------------------------------------------ */}
      <Section className="py-20">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-xl2 border border-gold/25 bg-gradient-to-br from-paper-warm to-paper p-8 sm:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <Eyebrow num="06">Avant la maladie</Eyebrow>
                  <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                    Cardio Check-Up : la prévention, pensée comme une startup
                  </h2>
                  <p className="mt-5 max-w-reading text-slate">
                    Fondatrice et CEO, le Dr Amraoui a créé un centre dédié au bilan
                    cardiovasculaire personnalisé. Une médecine proactive et accessible, dans le
                    prolongement de sa double formation médicale et en économie de la santé (LSE).
                  </p>
                  <div className="mt-8">
                    <Button to="/cardio-check-up" variant="ghost">Découvrir Cardio Check-Up</Button>
                  </div>
                </div>
                <div className="rounded-card border border-ink/8 bg-paper-pure p-6 shadow-card">
                  <p className="font-mono text-2xs uppercase tracking-eyebrow text-gold">Approche</p>
                  <ul className="mt-3 space-y-3 text-sm text-ink">
                    <li className="flex items-start gap-3"><span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-signal" /> Bilan personnalisé</li>
                    <li className="flex items-start gap-3"><span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-signal" /> Dépistage des arythmies silencieuses</li>
                    <li className="flex items-start gap-3"><span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-signal" /> Prévention cardiovasculaire</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 8 · CONNECTED HEALTH ---------------------------------------------- */}
      <Section className="py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <Eyebrow num="07">Cardiologie connectée</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Votre montre a peut-être déjà repéré le problème
              </h2>
              <p className="mt-5 max-w-reading text-slate">
                ECG à une dérivation, capteurs d’irrégularité, télésurveillance des prothèses :
                la rythmologie se vit désormais au quotidien. Un cas réel : une tachycardie à
                190 bpm diagnostiquée grâce à l’ECG d’une montre, puis traitée par une
                intervention curative.
              </p>
              <Link to="/montres-connectees-telesuivi" className="link-underline mt-6 inline-block text-sm font-semibold text-ink">
                Montres connectées & télésuivi
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-xl2 border border-ink/8 bg-ink p-8 text-paper shadow-lift">
              <div className="flex items-end justify-between">
                <span className="font-mono text-xs uppercase tracking-eyebrow text-paper/40">Live · ECG</span>
                <span className="font-mono text-3xl tabular-nums text-signal-glow">190<span className="text-base text-paper/40"> bpm</span></span>
              </div>
              <ECGLine variant="irregular" height={110} className="mt-4 text-signal" loop />
              <p className="mt-2 font-mono text-2xs uppercase tracking-eyebrow text-alert/80">
                Tachycardie supraventriculaire détectée
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 9 · AUTHORITY (media + peer, NOT empty reviews — see RESEARCH §3) -- */}
      <Section className="border-y border-ink/8 bg-paper-warm/40 py-20">
        <Container>
          <Reveal>
            <Eyebrow num="08">Reconnaissance</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Une expertise reconnue, en France et à l’international
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { tag: 'Presse médicale', title: '« Portrait du mois »', org: 'Le Cardiologue' },
              { tag: 'Publications', title: 'Auteure & contributrice', org: 'Radcliffe Cardiology' },
              { tag: 'Congrès', title: 'EHRA 2026 · PariSanté Campus', org: 'European Heart Rhythm Association' },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <figure className="h-full rounded-card border border-ink/8 bg-paper-pure p-6 shadow-card">
                  <p className="font-mono text-2xs uppercase tracking-eyebrow text-gold">{m.tag}</p>
                  <blockquote className="mt-3 font-display text-xl text-ink">{m.title}</blockquote>
                  <figcaption className="mt-2 text-sm text-slate">{m.org}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10 · BLOG TEASER --------------------------------------------------- */}
      <Section className="py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow num="09">Comprendre & suivre</Eyebrow>
                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Guides & actualités</h2>
              </div>
              <Link to="/blog" className="link-underline text-sm font-semibold text-ink">Tout le blog</Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link to={`/blog/${a.slug}`} className="group block h-full rounded-card border border-ink/8 bg-paper-pure p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-2xs uppercase tracking-eyebrow ${a.stream === 'Guide' ? 'text-signal' : 'text-gold'}`}>{a.stream}</span>
                    <span className="text-2xs text-slate">{a.read}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-snug text-ink group-hover:text-signal-deep">{a.title}</h3>
                  <p className="mt-3 text-sm text-slate">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 11 · FAQ TEASER ---------------------------------------------------- */}
      <Section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <Eyebrow num="10">Questions fréquentes</Eyebrow>
              <p className="mt-5 font-display text-2xl text-ink">En avoir le cœur net.</p>
              <Link to="/faq" className="link-underline mt-5 inline-block text-sm font-semibold text-ink">Voir toute la FAQ</Link>
            </div>
          </Reveal>
          <div className="divide-y divide-ink/8 border-y border-ink/8">
            {faPagFaq.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-ink">
                    {f.q}
                    <span className="shrink-0 text-signal transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-reading text-slate">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 12 · FINAL CTA ----------------------------------------------------- */}
      <Section className="relative overflow-hidden bg-ink py-24 text-paper lg:py-28">
        <Container className="relative text-center">
          <Reveal>
            <Eyebrow num="11"><span className="text-gold-soft">Besoin d’un avis ?</span></Eyebrow>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold text-paper sm:text-5xl">
              Remettons votre cœur en rythme.
            </h2>
            <div className="mx-auto mt-8 max-w-xl">
              <ECGLine variant="resolved" height={60} className="text-signal" />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" variant="signal">
                Prendre rendez-vous
              </Button>
              <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="text-sm font-semibold text-paper/80 hover:text-paper">
                ou {site.phones[0]}
              </a>
            </div>
            <p className="mt-6 font-mono text-2xs uppercase tracking-eyebrow text-paper/40">{site.sector}</p>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
