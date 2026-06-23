// Clinical + editorial content data — sourced from dr_amraoui_website_content.md
// and the live-site audit. Kept structured so pages stay thin and GEO-friendly.

export const credentials = [
  { label: 'Cheffe d’unité', org: 'Hôpital Américain de Paris' },
  { label: 'Executive MSc / MBA', org: 'London School of Economics' },
  { label: 'Fellowship', org: 'St Thomas’ Hospital · Londres' },
  { label: 'Fellowship', org: 'Columbia Memorial Health · NYC' },
  { label: 'Fondatrice & CEO', org: 'Cardio Check-Up' },
  { label: 'Mention félicitations du jury', org: '× tous les diplômes' },
]

export const conditions = [
  {
    slug: 'fibrillation-atriale',
    name: 'Fibrillation atriale',
    symptom: 'Cœur emballé, irrégulier',
    blurb: 'L’arythmie la plus fréquente au monde, et la plus traitable aujourd’hui.',
    flag: 'Risque d’AVC ×4,8',
  },
  {
    slug: 'palpitations',
    name: 'Palpitations',
    symptom: 'Le cœur qui s’emballe',
    blurb: 'Plus de 50 % des arythmies sont silencieuses. Savoir, c’est déjà se protéger.',
  },
  {
    slug: 'types-tachycardie',
    name: 'Tachycardies',
    symptom: 'Rythme trop rapide',
    blurb: 'Comprendre le type exact d’arythmie pour choisir le bon traitement.',
  },
  {
    slug: 'holter-implantable',
    name: 'Malaises & syncopes',
    symptom: 'Pertes de connaissance',
    blurb: 'Le Holter implantable détecte ce que les examens courts ne voient pas.',
  },
]

export const energies = [
  {
    name: 'Radiofréquence',
    by: 'Par la chaleur',
    desc: 'Cartographie 3D du cœur pour localiser et neutraliser précisément les zones pathologiques. La cartographie avancée améliore l’efficacité et réduit les complications.',
  },
  {
    name: 'Cryoablation',
    by: 'Par le froid (−70 °C)',
    desc: 'Utilisée notamment pour la fibrillation atriale paroxystique. Sans cartographie électrique : moins optimale pour les arythmies complexes.',
  },
  {
    name: 'Électroporation',
    by: 'Par champs électriques',
    badge: 'Innovation',
    desc: 'Champs électriques à haute tension, ciblés, qui épargnent les structures cardiaques environnantes. Efficacité démontrée par de nombreuses études.',
  },
]

// Statistics presented as standalone, citable facts (GEO).
export const stats = [
  { value: '45 M', label: 'personnes touchées par la FA dans le monde' },
  { value: '×4,8', label: 'de risque d’AVC ischémique en cas de FA non traitée', alert: true },
  { value: '1 / 4', label: 'adultes de plus de 40 ans développeront une FA' },
  { value: '230 000', label: 'nouveaux cas de FA par an en France' },
]

export const faPagFaq = [
  {
    q: 'Quelle est la différence entre un cardiologue et un rythmologue ?',
    a: 'Le rythmologue est un cardiologue sur-spécialisé. Là où le cardiologue généraliste s’occupe de la santé globale du cœur (artères, tension), le rythmologue est l’expert exclusif de l’électricité du cœur : l’électricien du cœur. Il diagnostique et traite les troubles du rythme : fibrillation atriale, bradycardies, tachycardies.',
  },
  {
    q: 'Quand dois-je consulter un spécialiste du rythme cardiaque ?',
    a: 'Consultez si vous ressentez des palpitations, des essoufflements anormaux, des malaises ou des pertes de connaissance (syncope). Une consultation est aussi recommandée si votre médecin détecte une anomalie sur votre ECG, ou en cas d’antécédents familiaux de mort subite.',
  },
  {
    q: 'Faut-il une lettre du médecin traitant pour prendre rendez-vous ?',
    a: 'Idéalement oui. Pour respecter le parcours de soins et bénéficier d’un meilleur remboursement, il est préférable d’être adressé par votre médecin généraliste ou votre cardiologue de ville. Cela nous permet aussi de recevoir vos premiers examens (ECG, échographie) avant la consultation.',
  },
]

// Seeded from the live blog (Actualités) + planned cornerstone Guides.
export const articles = [
  {
    slug: 'fibrillation-atriale-2026',
    stream: 'Guide',
    title: 'Fibrillation atriale : symptômes, risques et traitements en 2026',
    excerpt:
      'Tout comprendre de l’arythmie la plus fréquente au monde, et des options qui, traitées tôt, offrent une possibilité de guérison.',
    read: '9 min',
  },
  {
    stream: 'Guide',
    slug: 'ablation-radiofrequence-cryo-electroporation',
    title: 'Ablation par cathéter : radiofréquence, cryoablation ou électroporation ?',
    excerpt:
      'Trois énergies, trois logiques. Le seul comparatif francophone écrit par une praticienne de l’électroporation.',
    read: '11 min',
  },
  {
    stream: 'Actualité',
    slug: 'ehra-2026',
    title: 'EHRA 2026 : le Dr Amraoui au cœur des échanges',
    excerpt:
      'Retour du congrès de l’European Heart Rhythm Association, où se dessine l’avenir de la rythmologie interventionnelle.',
    read: '4 min',
  },
]
