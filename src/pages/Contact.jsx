import { useState } from 'react'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Eyebrow, Reveal } from '../components/ui/primitives'
import { site, DOCTOLIB_URL } from '../data/site'

const motifs = ['Première consultation', 'Suivi / contrôle', 'Avis sur une arythmie', 'Bilan Cardio Check-Up', 'Autre']

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <Seo path="/contact" title="Prendre rendez-vous & contact"
        description="Prenez rendez-vous avec le Dr Sana Amraoui via Doctolib, par téléphone ou par le formulaire de contact. Hôpital Américain de Paris et cabinet privé." />

      <PageHero
        crumbs={[{ label: 'Rendez-vous' }]}
        eyebrow="Rendez-vous & contact"
        title="Prendre rendez-vous"
        answer="La prise de rendez-vous se fait en ligne via Doctolib, ou par téléphone auprès du secrétariat. Une lettre de votre médecin traitant est recommandée pour respecter le parcours de soins."
      />

      <Section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Primary path: Doctolib + phone */}
          <Reveal>
            <div className="space-y-4">
              <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl2 bg-ink p-7 text-paper transition-all hover:shadow-lift">
                <div>
                  <p className="font-mono text-2xs uppercase tracking-eyebrow text-signal-glow">Le plus rapide</p>
                  <p className="mt-2 font-display text-2xl text-paper">Réserver sur Doctolib</p>
                </div>
                <span className="text-2xl text-signal-glow transition-transform group-hover:translate-x-1">→</span>
              </a>

              <div className="grid gap-4 sm:grid-cols-2">
                {site.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="rounded-card border border-ink/10 bg-paper-pure p-5 transition-colors hover:border-signal">
                    <p className="font-mono text-2xs uppercase tracking-eyebrow text-slate">Secrétariat</p>
                    <p className="mt-1 text-lg font-semibold text-ink">{p}</p>
                  </a>
                ))}
              </div>

              <div className="rounded-card border border-gold/30 bg-gold/5 p-5">
                <p className="font-mono text-2xs uppercase tracking-eyebrow text-gold">Bon à savoir</p>
                <p className="mt-2 text-sm text-slate">
                  {site.sector}. Une lettre d’adressage de votre médecin traitant permet un
                  meilleur remboursement et la transmission de vos examens (ECG, échographie).
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {site.locations.map((l) => (
                  <a key={l.name} href={l.map} target="_blank" rel="noopener noreferrer"
                    className="block rounded-card border border-ink/8 bg-paper-pure p-5 transition-colors hover:border-signal/40">
                    <p className="font-display text-lg text-ink">{l.name}</p>
                    <p className="text-sm text-slate">{l.detail}</p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Secondary: message form */}
          <Reveal delay={0.1}>
            <div className="rounded-xl2 border border-ink/8 bg-paper-pure p-7 shadow-card">
              <Eyebrow>Message au secrétariat</Eyebrow>
              {sent ? (
                <p className="mt-6 text-slate">Merci, votre message a bien été pris en compte. Le secrétariat vous recontactera.</p>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Prénom" name="prenom" />
                    <Field label="Nom" name="nom" />
                  </div>
                  <Field label="E-mail" name="email" type="email" />
                  <Field label="Téléphone" name="tel" type="tel" />
                  <label className="block">
                    <span className="font-mono text-2xs uppercase tracking-eyebrow text-slate">Motif</span>
                    <select name="motif" className="mt-1.5 w-full rounded-card border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-signal">
                      {motifs.map((m) => <option key={m}>{m}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="font-mono text-2xs uppercase tracking-eyebrow text-slate">Message</span>
                    <textarea name="message" rows={4} className="mt-1.5 w-full rounded-card border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-signal" />
                  </label>
                  <label className="flex items-start gap-3 text-xs text-slate">
                    <input type="checkbox" required className="mt-0.5 accent-signal" />
                    J’accepte que mes données soient utilisées pour traiter ma demande (RGPD).
                  </label>
                  <button type="submit" className="w-full rounded-card bg-ink py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-signal">
                    Envoyer
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}

function Field({ label, name, type = 'text' }) {
  return (
    <label className="block">
      <span className="font-mono text-2xs uppercase tracking-eyebrow text-slate">{label}</span>
      <input type={type} name={name} className="mt-1.5 w-full rounded-card border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-signal" />
    </label>
  )
}
