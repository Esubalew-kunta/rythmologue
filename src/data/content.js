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
  { value: '750 000+', label: 'personnes concernées par la FA en France' },
  { value: '×4,8', label: 'risque d’AVC sans prise en charge, précisément ce que le traitement prévient' },
  { value: '> 10 %', label: 'de prévalence après 80 ans : la FA augmente fortement avec l’âge' },
  { value: '110–230 000', label: 'nouveaux cas de FA par an en France' },
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
// Educational videos in the Treatments area (Change 5).
// URLs intentionally empty until the real YouTube links are supplied.
export const treatmentVideos = [
  {
    title: 'Comprendre l’ablation par cathéter',
    desc: 'En quoi consiste l’intervention, comment elle se déroule, et ce qu’elle permet.',
    audience: 'Patients',
    duration: '2–4 min',
    url: 'https://www.youtube.com/watch?v=VKK9bjPBDpg',
  },
  {
    title: 'L’électroporation, une énergie de nouvelle génération',
    desc: 'Le principe des champs électriques pulsés et pourquoi ils ménagent les tissus voisins.',
    audience: 'Patients & confrères',
    duration: '3–5 min',
    url: 'https://www.youtube.com/watch?v=BjDfsH-kozo',
  },
  {
    title: 'Vivre avec un pacemaker ou un défibrillateur',
    desc: 'Le quotidien après la pose d’un dispositif implantable, en pratique.',
    audience: 'Patients',
    duration: '2–4 min',
    url: 'https://www.youtube.com/watch?v=tzG7RqOk1IU',
  },
  {
    title: 'Montres connectées : bien suivre son rythme',
    desc: 'Ce que l’ECG d’une montre détecte vraiment, et comment l’utiliser utilement.',
    audience: 'Patients',
    duration: '2–3 min',
    url: 'https://www.youtube.com/watch?v=fw8CV0Hq2Lo',
  },
]

// The blog's five fixed categories (Change 4c).
// Blog categories present on the solo site (apnée removed).
export const blogCategories = [
  { key: 'examens', label: 'Examens & Diagnostic' },
  { key: 'traitements', label: 'Traitements & Interventions' },
  { key: 'prevention', label: 'Prévention & Conseils' },
]

export const categoryLabel = (key) =>
  blogCategories.find((c) => c.key === key)?.label ?? key

// Real articles sourced from the Cardio Check-up Actualités (Dr Amraoui's own clinic content).
export const articles = [
  {
    "slug": "qu-est-ce-qu-un-holter-ecg",
    "category": "examens",
    "kind": "Guide",
    "title": "Qu'est-ce qu'un Holter ECG ?",
    "excerpt": "Un petit boîtier qui enregistre votre cœur de 24 heures à 2 semaines. On vous explique simplement à quoi il sert, comment il se déroule et pourquoi votre cardiologue vous l'a prescrit.",
    "read": "5 min",
    "date": "Juin 2026",
    "author": "Dr Sana Amraoui",
    "body": [
      {
        "type": "p",
        "text": "Votre cardiologue vous a prescrit un Holter ECG et ce nom un peu technique vous inquiète ? Rassurez-vous : il s'agit de l'un des examens les plus simples et les plus confortables de la cardiologie. Aucun geste douloureux, aucune préparation contraignante, et vous pouvez poursuivre votre vie quotidienne pendant toute la durée de l'enregistrement."
      },
      {
        "type": "p",
        "text": "Le Holter ECG est un enregistreur portable de l'électrocardiogramme. Concrètement, c'est un petit boîtier relié à quelques électrodes collées sur votre poitrine, qui suit l'activité électrique de votre cœur en continu, de 24 heures jusqu'à 2 semaines selon la prescription."
      },
      {
        "type": "video",
        "videoId": "XusqaX3z1U8",
        "caption": "En vidéo : le déroulement d’un Holter ECG, expliqué pas à pas."
      },
      {
        "type": "h2",
        "text": "À quoi sert un Holter ECG ?"
      },
      {
        "type": "p",
        "text": "Un électrocardiogramme classique, réalisé au cabinet, ne dure que quelques secondes. Or beaucoup de troubles du rythme cardiaque sont intermittents : ils vont et viennent, et ont toutes les chances d'être absents au moment précis de la consultation. Le Holter résout ce problème en enregistrant votre cœur sur la durée, dans vos conditions de vie réelles."
      },
      {
        "type": "p",
        "text": "Votre médecin peut vous le prescrire notamment en cas de :"
      },
      {
        "type": "list",
        "items": [
          "Palpitations ou sensation de cœur qui s'emballe",
          "Malaises, vertiges ou pertes de connaissance inexpliqués",
          "Suspicion de trouble du rythme comme la fibrillation atriale",
          "Contrôle de l'efficacité d'un traitement déjà en place"
        ]
      },
      {
        "type": "h2",
        "text": "Comment se déroule l’examen ?"
      },
      {
        "type": "h3",
        "text": "La pose"
      },
      {
        "type": "p",
        "text": "Au cabinet, l'assistante médicale colle quelques électrodes sur votre thorax et les relie au boîtier, en une dizaine de minutes. La pose est totalement indolore. Vous repartez ensuite chez vous avec l'appareil."
      },
      {
        "type": "h3",
        "text": "Pendant l'enregistrement"
      },
      {
        "type": "p",
        "text": "Vous vivez normalement : travail, marche, sommeil, activités habituelles. C'est même tout l'intérêt de l'examen : capturer votre cœur dans la vraie vie. On vous remet un petit carnet pour noter l'heure de vos symptômes (palpitations, malaise…), ce qui aide votre cardiologue à relier une sensation à un tracé précis."
      },
      {
        "type": "tip",
        "title": "Bon à savoir",
        "text": "L'appareil n'est pas étanche : pas de douche ni de bain pendant l'enregistrement, et on ne l'arrête jamais avant l'heure prévue. Une peau propre et sèche au moment de la pose aide les électrodes à bien adhérer."
      },
      {
        "type": "h2",
        "text": "Que recherche votre cardiologue ?"
      },
      {
        "type": "p",
        "text": "Une fois l'appareil rapporté, votre médecin analyse l'enregistrement à la recherche d'anomalies du rythme : battements trop rapides, trop lents, irréguliers, ou pauses. Il met ces événements en regard de votre carnet de symptômes pour poser un diagnostic précis et, si besoin, adapter votre prise en charge."
      },
      {
        "type": "quote",
        "text": "Le Holter, c'est un peu une caméra de surveillance bienveillante posée sur votre cœur : il observe sans rien changer à votre quotidien, et nous révèle ce qu'une consultation de quelques minutes ne peut pas voir.",
        "cite": "Dr Sana Amraoui"
      },
      {
        "type": "p",
        "text": "Si vous avez la moindre question avant votre examen, n'hésitez pas à en parler à votre cardiologue ou à notre secrétariat : un examen bien compris est toujours mieux vécu."
      }
    ]
  },
  {
    "slug": "5-signes-consulter-cardiologue",
    "category": "prevention",
    "kind": "Guide",
    "title": "5 signes qui doivent vous inciter à consulter un cardiologue",
    "excerpt": "Douleur dans la poitrine, essoufflement inhabituel, palpitations… Voici cinq signaux que votre cœur vous envoie et qu'il vaut mieux ne pas ignorer.",
    "read": "6 min",
    "date": "Mai 2026",
    "author": "Dr Sana Amraoui",
    "body": [
      {
        "type": "p",
        "text": "Le cœur sait se faire discret, mais il envoie aussi des signaux. Savoir les reconnaître permet de consulter au bon moment, ni dans l'angoisse permanente, ni trop tard. Voici cinq symptômes qui méritent l'avis d'un cardiologue. Aucun d'eux n'est synonyme de maladie grave, mais chacun mérite d'être pris au sérieux."
      },
      {
        "type": "h2",
        "text": "1. Une douleur ou une oppression dans la poitrine"
      },
      {
        "type": "p",
        "text": "Une sensation de serrement, de poids ou de brûlure derrière le sternum, surtout si elle survient à l'effort et cède au repos, doit toujours être évaluée. Elle peut être bénigne, mais c'est aussi le symptôme cardiaque à ne jamais banaliser."
      },
      {
        "type": "h2",
        "text": "2. Un essoufflement inhabituel"
      },
      {
        "type": "p",
        "text": "Être essoufflé après un escalier que vous montiez sans peine il y a quelques mois, ou vous réveiller la nuit en manquant d'air, n'est pas un simple signe de fatigue ou d'âge. Un essoufflement qui s'installe ou s'aggrave mérite un bilan."
      },
      {
        "type": "h2",
        "text": "3. Des palpitations"
      },
      {
        "type": "p",
        "text": "Sentir son cœur s'emballer, cogner, sauter un battement ou battre de façon irrégulière est une raison fréquente de consultation. Le plus souvent sans gravité, ces palpitations peuvent parfois révéler un trouble du rythme qu'un Holter ECG saura objectiver."
      },
      {
        "type": "h2",
        "text": "4. Des malaises ou pertes de connaissance"
      },
      {
        "type": "p",
        "text": "Un malaise, une sensation de tête qui tourne juste avant de tomber, ou une vraie perte de connaissance, ne doivent jamais être mis sur le compte de la seule fatigue. Lorsqu'ils sont d'origine cardiaque, ils nécessitent un avis rapide."
      },
      {
        "type": "h2",
        "text": "5. Un gonflement des jambes ou une fatigue persistante"
      },
      {
        "type": "p",
        "text": "Des chevilles qui gonflent en fin de journée, une fatigue inhabituelle et durable, une prise de poids rapide en quelques jours : associés, ces signes peuvent traduire un cœur qui peine à assurer son travail de pompe. Ils justifient une consultation."
      },
      {
        "type": "tip",
        "title": "En cas d’urgence, appelez le 15",
        "tone": "urgent",
        "text": "Une douleur intense dans la poitrine qui dure, qui s'accompagne d'un essoufflement, de sueurs, d'une douleur au bras ou à la mâchoire, est une urgence vitale. N'attendez pas : appelez immédiatement le SAMU (15) ou le 112."
      },
      {
        "type": "quote",
        "text": "Consulter, ce n'est pas s'alarmer : c'est reprendre le contrôle. La très grande majorité de ces symptômes ont une explication simple, encore faut-il l'entendre d'un professionnel plutôt que de l'imaginer seul.",
        "cite": "Dr Sana Amraoui"
      },
      {
        "type": "p",
        "text": "Au-delà des symptômes, un bilan cardiovasculaire de prévention est recommandé en présence de facteurs de risque (hypertension, cholestérol, diabète, tabac, antécédents familiaux) ou avant une reprise sportive. Mieux vaut un examen rassurant qu'un doute qui s'éternise."
      }
    ]
  },
  {
    "slug": "qu-est-ce-que-l-ablation-par-catheter",
    "category": "traitements",
    "kind": "Guide",
    "title": "Qu'est-ce que l'ablation par cathéter ?",
    "excerpt": "Une technique de référence pour traiter durablement certains troubles du rythme cardiaque, sans chirurgie à cœur ouvert. Explications en mots simples.",
    "read": "7 min",
    "date": "Avril 2026",
    "author": "Dr Sana Amraoui",
    "body": [
      {
        "type": "p",
        "text": "Quand un trouble du rythme cardiaque résiste aux médicaments ou retentit sur la qualité de vie, la rythmologie interventionnelle propose une solution souvent décisive : l'ablation par cathéter. Derrière ce nom impressionnant se cache une technique éprouvée, mini-invasive, qui vise à corriger l'anomalie à sa source."
      },
      {
        "type": "h2",
        "text": "Le principe de l'ablation"
      },
      {
        "type": "p",
        "text": "Certaines arythmies naissent d'un petit foyer de cellules cardiaques qui émet des impulsions électriques anarchiques, ou d'un circuit électrique anormal au sein du cœur. L'ablation consiste à neutraliser très précisément cette zone responsable, à l'aide d'un cathéter (un fin tuyau souple) introduit jusqu'au cœur par une veine, le plus souvent au pli de l'aine."
      },
      {
        "type": "p",
        "text": "Une fois la zone repérée, on l'inactive par la chaleur (radiofréquence) ou par le froid (cryoablation). Le cœur retrouve alors, dans une majorité de cas, un rythme régulier."
      },
      {
        "type": "h2",
        "text": "Quels troubles du rythme peut-on traiter ?"
      },
      {
        "type": "list",
        "items": [
          "La fibrillation atriale, le trouble du rythme le plus fréquent",
          "Le flutter atrial",
          "Les tachycardies jonctionnelles (Bouveret)",
          "Certaines extrasystoles et tachycardies ventriculaires"
        ]
      },
      {
        "type": "h2",
        "text": "Comment se déroule l'intervention ?"
      },
      {
        "type": "h3",
        "text": "Avant"
      },
      {
        "type": "p",
        "text": "L'intervention est précédée d'un bilan complet et d'une consultation de rythmologie qui valide l'indication et répond à toutes vos questions. Elle se déroule en milieu hospitalier spécialisé."
      },
      {
        "type": "h3",
        "text": "Pendant"
      },
      {
        "type": "p",
        "text": "Vous êtes installé confortablement, sous anesthésie locale et sédation (parfois anesthésie générale). Le rythmologue guide les cathéters jusqu'au cœur sous contrôle d'imagerie, cartographie l'activité électrique, puis réalise l'ablation. L'intervention dure généralement entre une et trois heures."
      },
      {
        "type": "h3",
        "text": "Après"
      },
      {
        "type": "p",
        "text": "Une surveillance de quelques heures à une nuit est habituelle. La reprise des activités est rapide, avec quelques précautions au point de ponction. Un suivi rythmologique permet de vérifier le résultat dans les semaines qui suivent."
      },
      {
        "type": "tip",
        "title": "Un geste très encadré",
        "text": "L'ablation par cathéter est pratiquée depuis des décennies et bénéficie d'un haut niveau de sécurité. Comme tout geste médical, elle comporte des risques, rares, qui vous sont expliqués en détail lors de la consultation préalable."
      },
      {
        "type": "quote",
        "text": "Traiter l'arythmie à sa source, plutôt que d'en masquer les symptômes au long cours : c'est tout le sens de la rythmologie interventionnelle. Pour de nombreux patients, c'est un vrai retour à une vie normale.",
        "cite": "Dr Sana Amraoui"
      },
      {
        "type": "p",
        "text": "Chaque situation est unique : seule une consultation spécialisée permet de dire si l'ablation est la meilleure option pour vous, et selon quelles modalités."
      }
    ]
  }
]
