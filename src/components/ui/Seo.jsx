import { Helmet } from 'react-helmet-async'

/**
 * Per-page meta + JSON-LD. The author entity (Physician with sameAs links)
 * is the site's biggest GEO asset — see RESEARCH §4.
 */
export default function Seo({ title, description, schema, path = '' }) {
  const url = `https://www.rythmologue.fr${path}`
  const fullTitle = title
    ? `${title} · Dr Sana Amraoui`
    : 'Dr Sana Amraoui, rythmologue interventionnelle · Paris'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}

export const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr Sana Amraoui',
  medicalSpecialty: 'Cardiology, Interventional Electrophysiology',
  description:
    'Rythmologue interventionnelle, cheffe d’unité à l’Hôpital Américain de Paris.',
  url: 'https://www.rythmologue.fr',
  telephone: '+33755505258',
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'London School of Economics' },
    { '@type': 'CollegeOrUniversity', name: 'Université de Bordeaux' },
  ],
  worksFor: { '@type': 'Hospital', name: 'Hôpital Américain de Paris' },
  sameAs: [
    'https://www.linkedin.com/in/dr-sana-amraoui-md-ms-msc-rythmologue/',
    'https://www.youtube.com/@drsanaamraoui',
    'https://www.american-hospital.org/trouver-un-medecin/sana-amraoui',
    'https://www.radcliffecardiology.com/authors/sana-amraoui',
  ],
}
