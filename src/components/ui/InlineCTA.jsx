import { Container, Button, Reveal } from './primitives'
import { DOCTOLIB_URL, site } from '../../data/site'

export default function InlineCTA({ title = 'Besoin d’un avis spécialisé ?', sub }) {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl2 bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-display text-2xl text-paper sm:text-3xl">{title}</h2>
              <p className="mt-2 text-sm text-paper/60">{sub || `${site.sector} · ${site.phones[0]}`}</p>
            </div>
            <Button href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" variant="signal" className="shrink-0">
              Prendre rendez-vous
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
