# Dr Sana Amraoui — Design Plan & Build Specification

> **Status:** v2 · build-ready and partially implemented (React + Vite + Tailwind + Framer Motion).
> **Sources of truth:** this file (design + decisions) · `RESEARCH_rythmologue_audit.md` (evidence + the 7 revisions) · `dr_amraoui_website_content.md` (raw content).
> **Authored as a five-discipline team:** Brand · UX architecture · UI/visual · Content/SEO-GEO · Psychology/conversion.

---

## 0. Executive summary

A site about **rhythm and signal**, not the bleeding-heart cliché. Clinically calm (warm paper-white + ink), with a single **living ECG hairline** as the only ornament and the signature interaction. Patient-first emotionally; peer-grade in depth; engineered for AI citation (GEO). The brand promise is two words: **« Rétablir le rythme. »**

Every decision is traceable to a discipline:
- **Brand** → positioning as *l’électricienne du cœur* (her own metaphor).
- **UX** → symptom-first IA, zero dead-ends, booking always one tap away.
- **UI** → no healthcare-blue, no crimson; teal signal + diploma gold on paper.
- **GEO** → extractable facts, question-shaped headings, `Physician`/`FAQPage` schema, an author entity AI engines can resolve and trust.
- **Psychology** → warmth+competence fast; fear-with-an-exit; authority-led trust.

---

## 1. What changed from v1 (evidence-driven)

After auditing the live site + open web (`RESEARCH_rythmologue_audit.md`), seven revisions were folded into this plan and the build:

1. **Trust is authority-led, not review-led.** She has **no published Doctolib/Google reviews yet**, so the homepage trust block leads with media (*Le Cardiologue*), peer/publications (*Radcliffe Cardiology*), congresses (*EHRA 2026*, *PariSanté Campus*) and institutions — the review widget is a deferred, feature-flagged slot.
2. **New brand pillar: woman leader in interventional EP** (she self-identifies with `#women #cardiology`).
3. **`/en` is strategic** (existing EN site + real Maghreb/international engagement).
4. **Secteur-2 transparency** module (honoraires libres → French cost-anxiety).
5. **Two-stream blog**: *Guides* (evergreen/GEO) + *Actualités* (news), seeded with her 4 real posts.
6. **New citable facts**: « 1 adulte sur 4 de plus de 40 ans », the **190 bpm smartwatch case**, and **Affera/pulsed-field** depth on ablation.
7. **Two phone numbers + reconciled multi-location** in contact + schema.
8. **Typography:** body face changed from Inter → **Hanken Grotesk** (the frontend-design discipline rules out Inter as generic).

---

## A. Brand identity

**Positioning** — *Le Dr Sana Amraoui ne soigne pas seulement le cœur : elle en restaure le rythme. Électrophysiologue interventionnelle formée à Londres, New York et à la LSE, elle conjugue la médecine de pointe de l’arythmie à une vision entrepreneuriale de la prévention.*

**The one claim no rival owns:** *l’électricienne du cœur* — a sur-spécialiste of the heart’s **electrical** system who also builds the preventive system around it (Cardio Check-Up).

**Personality:** Précise · Rassurante · Pionnière · Rigoureuse · Humaine.

**Tagline (chosen):** **« Rétablir le rythme. »** — active, two words, works clinically and emotionally. EN micro-tag: *“Restoring the heart’s rhythm — interventional electrophysiology, Paris.”*

---

## B. Colour system (implemented in `tailwind.config.js`)

| Token | Hex | Role |
|---|---|---|
| `ink` | `#0E1B2A` | Text + authority surfaces (navy-black, calm not cold) |
| `paper` | `#F7F5F0` | Primary background (warm report-paper, low 2am glare) |
| `signal` | `#0FB5A6` | The brand spark — ECG line, CTAs, focus rings (electricity, not red/blue) |
| `gold` | `#C8A24B` | Prestige accent — credentials, eyebrows (diploma gold-leaf) |
| `slate` | `#5B6B7A` | Secondary text / UI |
| `alert` | `#E0744F` | Risk callouts + errors ONLY (muted coral, never crimson) |

**Rules:** ~80 % paper+ink / ~14 % teal / ≤6 % gold+coral. Teal is the only colour that *moves*. Coral appears ≤1× per page. CTAs never coral (action ≠ danger).

**The aesthetic risk:** the **living ECG line** as a structural device (§G). Justified because the rhythm trace *is* her specialty and her own metaphor — rendered as one instrument-grade hairline, not clip-art.

---

## C. Typography (implemented)

- **Display — Fraunces** (variable serif, opt-size): editorial gravitas of a medical journal, characterful, distinctly French-intellectual. H1/H2/pull-quotes.
- **Body — Hanken Grotesk** (400–700): warm humanist sans, highly legible at mobile sizes, *not* Inter/Roboto. 17px base / 1.7 line-height for clinical reading.
- **Utility — IBM Plex Mono**: statistics, eyebrows, dates, “bpm”, “−70 °C” — the “instrument readout” that also flags the exact numbers AI cites.

Scale (rem): `0.75 · 0.8125 · 0.9375 · 1.0625 · 1.1875 · 1.375 · 1.75 · 2.25 · 3 · 3.75 · 4.75`.

H1 specimen — `01 — RYTHMOLOGIE` (mono/gold eyebrow) → **Rétablir le rythme.** (Fraunces 600, *rythme.* italic teal) → ECG sweep → sub (Hanken slate) → CTAs.

---

## D. Site architecture

Symptom-first nav: **Arythmies · Traitements · Apnée du sommeil · Cardio Check-Up · Montres connectées · Blog · À propos** + persistent **Prendre RDV**. Mobile: drawer + sticky bottom action bar.

| Page | Slug | Goal | Schema |
|---|---|---|---|
| Accueil | `/` | Reassure + authority + route | Physician + MedicalBusiness |
| À propos | `/dr-sana-amraoui` | Person + legend (E-E-A-T entity) | Physician (alumniOf/sameAs) |
| Arythmies (hub) | `/arythmies` | Orient by symptom | MedicalWebPage |
| · Fibrillation atriale | `/arythmies/fibrillation-atriale` | Flagship convert | MedicalCondition + FAQPage |
| · Palpitations | `/arythmies/palpitations` | Define + de-escalate | FAQPage |
| · Tachycardies | `/arythmies/types-tachycardie` | Explain types | — |
| · Holter implantable | `/arythmies/holter-implantable` | Monitoring | MedicalProcedure |
| Traitements (hub) | `/traitements` | Curative options | hub |
| · Ablation | `/traitements/ablation-catheter` | Flagship (électroporation) | MedicalProcedure |
| · Pacemaker | `/traitements/pacemaker` | Reassure implants | MedicalProcedure |
| · Défibrillateur | `/traitements/defibrillateur` | idem | MedicalProcedure |
| Apnée du sommeil | `/apnee-du-sommeil` | Cross-sell cardiac-sleep | FAQPage |
| Cardio Check-Up | `/cardio-check-up` | Venture / prevention | MedicalBusiness |
| Montres connectées | `/montres-connectees-telesuivi` | Tech positioning | MedicalWebPage |
| Blog | `/blog` (+ `/blog/:slug`) | GEO engine | Article + FAQPage + Breadcrumb |
| FAQ | `/faq` | Capture AI queries | FAQPage |
| Rendez-vous / Contact | `/contact` | Convert | MedicalClinic ×locations |
| Légal / RGPD | `/mentions-legales`, `/politique-confidentialite` | Compliance | — |

301-redirect old Wix slugs → new clean slugs at launch. EN mirror of the 5 priority pages with `hreflang`.

---

## E. Homepage blueprint (implemented in `src/pages/Home.jsx`)

1. **Sticky header** — escape route always visible (anxiety ↓).
2. **Hero** — H1 + ECG sweep + portrait + two CTAs (warmth+competence <2s).
3. **Credential strip** — the “I trust her” moment (authority stacking).
4. **Differentiator** — *« l’électricien du cœur »* (rare super-specialist).
5. **Conditions grid** — symptom-led self-ID; FA card flagged ×4,8 (coral).
6. **Treatments / 3 energies** (ink section, irregular ECG) — fear→hope; électroporation badged.
7. **FA stats band** — count-up citable facts + resolution quote.
8. **Cardio Check-Up** — reciprocity + entrepreneurial proof.
9. **Connected health** — live 190 bpm ECG card (modernity).
10. **Authority** — media/peer/congress (NOT empty reviews).
11. **Blog teaser** — active expert (E-E-A-T).
12. **FAQ teaser** — pre-empt objections.
13. **Final CTA** — ECG resolves to steady rhythm; single action at peak intent.

---

## F. Blog / GEO strategy

**5 cornerstones:** FA-2026 · Ablation (RF/cryo/électroporation) · Apnée-cœur · Cardiologue vs rythmologue · Montres & ECG. **10 cluster pieces** (palpitations, 3 formes FA, pacemaker, DAI, Holter, cardioversion vs ablation, AVC+FA, sport, anticoagulants, 1ère consultation).

**Per-article template:** H1 = the natural question · *réponse courte* in first 2 sentences (LLM snippet) · question-shaped H2s · mono stat box · FAQ block (`FAQPage`) · author byline → entity · `dateModified` fresh · 3–5 internal links. **FA page = spider center.** Two streams: *Guides* (evergreen) + *Actualités* (news, seeded with EHRA/PariSanté/Affera/Tanger).

---

## G. Signature element — « Le tracé vivant »

A single teal ECG hairline (`src/components/brand/ECGLine.jsx`) that draws one rhythm sweep on entry. Variants: **calm** (regular sinus), **irregular** (fibrillation-like chaos when introducing a condition), **resolved** (chaos that settles back into rhythm — hero + final CTA). It is her actual clinical signal and her own metaphor; one hairline, never cartoon. GPU-cheap `pathLength`; `prefers-reduced-motion` → static resolved trace.

---

## H. Component library (built)

`layout/` Header · MobileNav (in Header) · StickyBookingBar · Footer.
`brand/` ECGLine.
`ui/` primitives (Container, Section, Eyebrow, Button, Reveal) · Seo (+physicianSchema) · AnimatedStat · Portrait · PageHero · InlineCTA.
`pages/` Home · About · FibrillationAtriale · Ablation · ApneeSommeil · Contact · Faq · Blog · Hub · Simple.
`data/` site.js (contact/nav) · content.js (clinical/editorial).

---

## I. Technical stack (implemented + recommended)

- **Built:** Vite 5 + React 18 + Tailwind 3.4 + Framer Motion 11 + React Router 6 + react-helmet-async. Build verified (416 modules, ~114 kB JS gz, ~5.5 kB CSS gz). Fonts via Google Fonts (preconnect + `display=swap`).
- **For production GEO (recommended next):** migrate to **`vite-react-ssg`** so every page ships pre-rendered HTML with JSON-LD in source (the live Wix site’s JS-only rendering is its biggest GEO liability).
- **i18n:** `react-i18next`, FR default, `/en/` for 5 priority pages, `hreflang`.
- **Schema:** centralized `<Seo>` JSON-LD per page type; validate in CI.
- **Blog CMS:** **MDX** (git-based, fast, zero runtime) primary; **Sanity** fallback if self-publishing needed. Avoid Notion-as-CMS for prod.
- **Doctolib:** deep-link buttons primary; iframe only on `/contact`, lazy below fold.
- **Analytics:** Plausible/Matomo (cookieless, RGPD) + Search Console + Bing.
- **Perf:** AVIF/WebP, font subsetting/self-host, route code-split, lazy embeds (YouTube facade, maps). Target LCP < 2.0s mobile, CLS < 0.05.

---

## J. What to avoid (enforced in build)

Healthcare-blue gradient · red/crimson hearts & heartbeat clip-art · stock smiling-model photos · dark mode default · text walls at anxious readers · aggressive US conversion copy & popups · carousels for key content · autoplay sound · over-animation (motion only where meaningful, all with reduced-motion) · Doctolib iframe above the fold · jargon-first nav · one page serving peers and patients identically.

---

## K. Open questions for the client

Address(es) to confirm (17e vs Neuilly vs Tour Cœur Défense) · reviews disabled or none yet · secteur-2 transparency level · Cardio Check-Up separate domain? · `/en` scope · “women in cardiology” emphasis · Affera/électroporation naming/imagery constraints · real photography · media kit (Le Cardiologue, publications).

---

## L. How to run

```bash
npm install
npm run dev      # local dev
npm run build    # production build → dist/
npm run preview  # serve the build
```

Replace the `Portrait` placeholders with real photography, fill the draft pages and blog articles (MDX), then migrate to `vite-react-ssg` before launch for full GEO.
