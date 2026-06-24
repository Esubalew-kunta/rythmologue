// Single source of truth for contact + identity data.
// Values reconciled with RESEARCH_rythmologue_audit.md (live site + Doctolib + Ameli).

// Single canonical booking URL for every "Prendre rendez-vous" action (Change 4a).
export const DOCTOLIB_URL =
  'https://www.doctolib.fr/cardiologue/neuilly-sur-seine/sana-amraoui'

export const site = {
  name: 'Dr Sana Amraoui',
  role: 'Rythmologue interventionnelle',
  tagline: 'Rétablir le rythme.',
  taglineEn: "Restoring the heart's rhythm. Interventional electrophysiology, Paris.",
  phones: ['07 55 50 52 58', '07 61 83 99 92'],
  email: 'secretariatdramraoui@myeva.ovh',
  doctolib: DOCTOLIB_URL,
  social: {
    linkedin: 'https://www.linkedin.com/in/dr-sana-amraoui-md-ms-msc-rythmologue/',
    youtube: 'https://www.youtube.com/@drsanaamraoui',
    instagram: 'https://www.instagram.com/dr_rythmo',
    google: 'https://g.co/kgs/7PsUYf',
  },
  locations: [
    {
      name: 'Hôpital Américain de Paris',
      detail: 'Centre d’expertise en rythmologie · 55 Bd du Château, 92200 Neuilly-sur-Seine',
      map: 'https://www.american-hospital.org/trouver-un-medecin/sana-amraoui',
      booking: DOCTOLIB_URL,
    },
    {
      name: 'Cabinet de consultation',
      detail: 'Consultations privées · Paris',
      map: 'https://g.co/kgs/7PsUYf',
      booking: DOCTOLIB_URL,
    },
    {
      name: 'Cardio Check-Up',
      detail: 'Centre de prévention cardiovasculaire',
      map: 'https://g.co/kgs/7PsUYf',
      booking: DOCTOLIB_URL,
    },
  ],
  // Sector 2 — honoraires libres (see research §3 CHANGE 4)
  sector: 'Cardiologue conventionnée secteur 2 · honoraires libres',
}

export const nav = [
  {
    label: 'Arythmies',
    href: '/arythmies',
    children: [
      { label: 'Palpitations & généralités', href: '/arythmies/palpitations' },
      { label: 'Tachycardies & types', href: '/arythmies/types-tachycardie' },
      { label: 'Fibrillation atriale', href: '/arythmies/fibrillation-atriale' },
      { label: 'Holter implantable', href: '/arythmies/holter-implantable' },
    ],
  },
  {
    label: 'Traitements',
    href: '/traitements',
    children: [
      { label: 'Ablation par cathéter', href: '/traitements/ablation-catheter' },
      { label: 'Pacemaker', href: '/traitements/pacemaker' },
      { label: 'Défibrillateur (DAI)', href: '/traitements/defibrillateur' },
    ],
  },
  { label: 'Apnée du sommeil', href: '/apnee-du-sommeil' },
  { label: 'Cardio Check-Up', href: '/cardio-check-up' },
  { label: 'Montres connectées', href: '/montres-connectees-telesuivi' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/dr-sana-amraoui' },
]
