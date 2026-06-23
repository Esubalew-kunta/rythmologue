# Research & Live-Site Audit — rythmologue.fr

> Prepared: 2026-06-23 · Source: live crawl of https://www.rythmologue.fr + web research
> Purpose: validate and revise the design plan against what the live site and the open web actually contain.
> Companion to: `dr_amraoui_website_content.md` (content extract) and the design plan.

---

## 0. Method & limitations

- The current site is **Wix (JS-rendered)**. The homepage, the *Montres connectées* page and the *Blog* index returned content to the fetcher; most deep clinical pages and individual blog posts returned **HTTP 404 to a non-JS fetcher** (the routes only resolve in a browser that executes Wix's client bundle). This is itself a finding — see §4 (SEO/GEO red flag).
- Pages successfully read: Home, Blog index, Montres connectées.
- Pages confirmed to exist but not deep-readable headless: FA, Ablation, Apnée, FAQ, individual `/post/*` articles, `/en`.
- Open-web research filled the gaps (Doctolib, Ameli, American Hospital of Paris, Le Cardiologue, Radcliffe Cardiology, LinkedIn).

---

## 1. NEW data found (not in the original content extract)

### Identity / practice
| Field | New value | Source |
|---|---|---|
| Second phone | **07 61 83 99 92** (in addition to 07 55 50 52 58) | Home page |
| Official practice address | **55 Boulevard du Château, 92200 Neuilly-sur-Seine** | Doctolib / Ameli |
| Private practice (alt) | **Tour Cœur Défense** mentioned as private-practice location | rythmologue.fr/en research |
| Sector | **Cardiologue secteur 2 (non conventionné / honoraires libres)** | Doctolib/Ameli |
| Working pattern | ~**4 days/week**: ~2.5 days Hôpital Américain, ~1.5 days private practice | Doctolib research |
| English site | **/en already exists** (rythmologue.fr/en) | Search |
| Reputation phrasing | "expert in atrial fibrillation ablation and **complex ablation, with national and international renown**" | American Hospital of Paris |

> ⚠️ **Address inconsistency to resolve with client:** the content extract says *cabinet 17e arrondissement*; Doctolib/Ameli say *55 Bd du Château, Neuilly*; another source says *Tour Cœur Défense (La Défense)*. The new site must state the correct, current consultation address(es). Flag this before build.

### Authority / E-E-A-T signals (strong — these are gold for GEO)
- **Le Cardiologue — "Le portrait du mois : Sana Amraoui"** → a French medical-press profile feature. Real third-party authority.
- **Radcliffe Cardiology author profile** → she is an author/contributor in international (English) cardiology media → a *verifiable publication footprint*, which is exactly what AI engines weight for author trust.
- **American Hospital of Paris** has an official "centre d'expertise en rythmologie" page referencing the unit she heads.
- **LinkedIn** active, posting `#electrophysiology #cardiology #ablation` and notably **`#women #cardiology`** (see brand note below).
- Listed on **Ameli** (official French health directory) → legitimacy.

### Connected-health page (newly read) — usable facts
- Headings: *"Utilité des montres connectées en rythmologie" / "Quid des montres connectées?" / "En pratique" / "Cas clinique"*.
- Stat: **"la fibrillation atriale touche jusqu'à 1 adulte sur 4 de plus de 40 ans"** (lifetime-risk framing — distinct from the 45M/1M prevalence stats; useful GEO fact).
- Single-lead ECG from the watch documents palpitation episodes.
- **Case study:** a **190 bpm supraventricular tachycardia diagnosed via smartwatch ECG, then cured by intervention** — a concrete, citable, story-driven proof point. Keep this.
- No specific watch brands named (deliberately generic).

### Blog — actual current articles (the real editorial voice)
The live blog is **event/conference-driven**, not patient-education-driven:
1. **"Le Dr Amraoui à PariSanté Campus !"** — round table on **AI in cardiology / arrhythmia management**.
2. **"Le système Affera en rythmologie : une avancée dans le traitement des arythmies"** — mapping/ablation tech (FA + flutter). *(Note: Affera is a pulsed-field/RF combined mapping-ablation platform — ties directly to her electroporation expertise.)*
3. **"Le Dr Amraoui au Forum National de l'Investissement des Marocains du Monde à Tanger !"** — **Moroccan diaspora / international** engagement.
4. **"EHRA 2026 : Le Dr Amraoui au cœur des échanges"** — **European Heart Rhythm Association** congress (the top European EP peer event).

> These confirm two positioning vectors the original brief only hinted at: (a) **AI + connected cardiology** is something she's *already publicly associated with*, and (b) a genuine **international / Maghreb / Francophone-Africa** dimension (Tanger forum), reinforcing the Gulf/Africa audience layer.

---

## 2. Confirmation of the core problem (why the redesign is justified)

- Live home confirms a **generic blue/white clinical theme**, Wix layout, repeated contact blocks, no brand personality — exactly the "any cardiologist" look the brief wants to escape. ✅ Plan's diagnosis holds.
- Navigation is **jargon/anatomy-led** ("Arythmie ▸ Généralités / Types") rather than symptom-led. ✅ Plan's symptom-first IA is the right correction.
- Old tagline **"La santé de votre cœur est notre priorité"** is generic and interchangeable. ✅ Replacing it ("Rétablir le rythme") is justified.
- JS-only rendering = poor crawlability. ✅ Validates the plan's hard requirement for **SSG/prerendered HTML**, not a bare SPA.

---

## 3. REALITY-CHECKS — where the plan must change

### 🔴 CHANGE 1 — Social proof: there are **no published Doctolib/Google reviews yet**
The plan leaned on a "Google reviews embed + Doctolib rating" as the homepage trust anchor. **That well is currently empty.** Revise the trust hierarchy to lead with assets she *does* have:
1. **Institutional authority** — Cheffe d'unité, Hôpital Américain de Paris (+ the hospital's own EP-centre page).
2. **Media features** — *Le Cardiologue* "Portrait du mois", any press/TV.
3. **Peer/academic footprint** — Radcliffe Cardiology authorship, EHRA presence, PariSanté Campus, publications.
4. **Education credentials** — LSE, Columbia, St Thomas', "félicitations du jury".
5. **Video** — her YouTube (@drsanaamraoui) → real face, real voice = warmth + competence.
6. *Later, as they accumulate:* a Doctolib/Google rating module designed but **feature-flagged off until reviews exist** (an empty/low-count rating widget actively *reduces* trust).

→ Build a `TrustSignals` system that is **authority-led, not rating-led**, with the review module as a deferred, toggleable slot.

### 🟡 CHANGE 2 — Add an authentic brand pillar: **woman leader in interventional EP**
She self-identifies with `#women #cardiology` on LinkedIn, and the brief calls out "French female doctor … exceptional." Interventional electrophysiology is heavily male-dominated; being a **female cheffe d'unité performing electroporation** is a genuine, ownable distinction. Weave it in with restraint (an "À propos" narrative beat, possibly a mentorship/"women in cardiology" note) — *not* as a gimmick, but it strengthens the "exceptional, before a word is read" mandate.

### 🟡 CHANGE 3 — International / diaspora layer is real → treat `/en` as strategic, not decorative
Evidence (Tanger forum, international renown, existing `/en`, Radcliffe authorship) supports the Gulf/Maghreb/Francophone-Africa audience. Recommendation upgrade: the **EN mirror of the 5 priority pages is confirmed worth building** (Home, À propos, FA, Ablation, Contact), with `hreflang` + per-locale schema. Consider a short "International patients" note (how to consult from abroad / second opinion).

### 🟡 CHANGE 4 — Pricing/sector transparency (French cost-anxiety)
She is **secteur 2 (honoraires libres)**. French patients are sensitive to non-conventionné pricing. Add a calm, factual note on the Contact/RDV page (and FAQ) about sector 2, "dépassements d'honoraires", and the *parcours de soins* (the existing FAQ already mentions the referral-letter point). Reduces a real friction/objection.

### 🟢 CHANGE 5 — Blog strategy: reconcile two voices
Current blog = **conference/news log**; the plan proposed **evergreen patient-education cornerstones**. Both are valuable and serve different goals:
- **Cornerstone/cluster (patient-ed, evergreen)** → the GEO citation engine. *Keep as the priority.*
- **Actualités (news: EHRA, PariSanté, Affera, forums)** → the E-E-A-T / "active expert" signal that makes the cornerstones credible.

→ Split the section into **two streams under `/blog`**: `Guides` (evergreen, schema-rich, the citation targets) and `Actualités` (news/events). The original plan's `/blog` + `/le-saviez-vous` should fold into this two-stream model. Carry over the 4 existing posts as the seed of `Actualités`.

### 🟢 CHANGE 6 — Use the new citable facts
Add to the GEO fact inventory: **"FA touche jusqu'à 1 adulte sur 4 de plus de 40 ans"** and the **190 bpm SVT smartwatch case study**. Add an **Affera / pulsed-field** explainer to the ablation/electroporation content (she's publicly linked to it) — deepens the electroporation differentiator with a named, current platform.

### 🟢 CHANGE 7 — Second phone number + multi-location
Reflect **both phone numbers** and reconcile the **multiple addresses** in the `Contact`/`LocationCard` components and in `LocalBusiness` schema (one entry per real consultation site).

---

## 4. SEO / GEO findings specific to the live site

- **JS-only rendering is the single biggest GEO liability today** — confirms the SSG/prerender requirement is non-negotiable, not a nice-to-have.
- **Author entity is unusually strong** — Radcliffe + Le Cardiologue + EHRA + LSE + hospital give a verifiable, cross-referenced author identity. Build the `Physician` schema with `sameAs` pointing to LinkedIn, the American Hospital profile, Radcliffe, Doctolib, YouTube — this is what lets an AI engine *resolve and trust the entity*. **This is her biggest GEO advantage; the plan should foreground it.**
- The existing slugs (`/fibrillation-atriale-coeur`, `/ablation-coeur`, etc.) carry whatever equity exists → set **301 redirects** from old Wix slugs to the new clean slugs at launch.
- No reviews → no `AggregateRating` schema yet (don't fake it; Google penalizes and it's empty anyway).

---

## 5. Open questions for the client (confirm before build)

1. **Exact current consultation address(es)** — 17e arrondissement vs Neuilly (55 Bd du Château) vs Tour Cœur Défense? Which are active, and which is the Cardio Check-Up address?
2. **Doctolib reviews** — are reviews disabled, or simply none yet? Plan for when/if to surface ratings.
3. **Secteur 2 pricing** — how transparent does she want to be about tarifs/dépassements?
4. **Cardio Check-Up** — separate domain/site, or a section of this site? (affects IA + schema entity split)
5. **`/en` scope** — full mirror or the 5 priority pages? International-patient workflow (remote second opinion)?
6. **"Women in cardiology" pillar** — comfortable featuring it, and to what degree?
7. **Affera / electroporation** — any vendor/marketing constraints on naming the platform or showing procedure imagery?
8. **Photography** — do we have/will we shoot real portraits + setting photos (critical; no stock)?
9. **Media kit** — can we get the *Le Cardiologue* feature, any TV/press, and publication list for the authority strip?

---

## 6. Net effect on the design plan

The plan's **core direction is validated**: anti-generic, signal/rhythm brand, symptom-first IA, paper-white + ink + teal palette (the live blue/white confirms the cliché to avoid), SSG for GEO, author-entity-led content.

**Seven adjustments** flow into the build:
1. Trust hierarchy → **authority/media/peer-led**, review widget deferred (CHANGE 1).
2. Add **woman-leader-in-EP** brand pillar (CHANGE 2).
3. **`/en` confirmed strategic** + international-patient note (CHANGE 3).
4. **Secteur-2 transparency** module (CHANGE 4).
5. Blog → **two streams: Guides (evergreen/GEO) + Actualités (news)**, seeded with the 4 existing posts (CHANGE 5).
6. New **citable facts + Affera/pulsed-field** depth (CHANGE 6).
7. **Two phones + reconciled multi-location** in contact + schema (CHANGE 7).

---

## 7. Sources

- [Home — rythmologue.fr](https://www.rythmologue.fr/)
- [Blog — rythmologue.fr/blog](https://www.rythmologue.fr/blog)
- [English site — rythmologue.fr/en](https://www.rythmologue.fr/en)
- [Doctolib — Dr Sana Amraoui, Neuilly-sur-Seine](https://www.doctolib.fr/cardiologue/neuilly-sur-seine/sana-amraoui)
- [American Hospital of Paris — Sana Amraoui](https://www.american-hospital.org/trouver-un-medecin/sana-amraoui)
- [American Hospital of Paris — Centre d'expertise en rythmologie](https://www.american-hospital.org/actualites-et-evenements/notre-centre-dexpertise-diagnostique-et-therapeutique-en-rythmologie)
- [Le Cardiologue — Portrait du mois : Sana Amraoui](https://lecardiologue.com/sana-amraoui-cardiologue-rythmologue/)
- [Radcliffe Cardiology — Sana Amraoui (author)](https://www.radcliffecardiology.com/authors/sana-amraoui)
- [Annuaire Santé Ameli — Amraoui Sana, Neuilly-sur-Seine](https://annuairesante.ameli.fr/professionnels-de-sante/fiche-detaillee-amraoui-sana-CbA1lTMyNTqw)
- [LinkedIn — Dr Sana Amraoui, MD, MS, MSc](https://www.linkedin.com/in/dr-sana-amraoui-md-ms-msc-rythmologue/)
