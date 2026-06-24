# Dr Sana Amraoui — Website Walkthrough

> A plain-English tour of what I built, how it's structured, and the thinking behind each part.
> Written so you can hand it to a friend and they'll "get it" in one read.

---

## TL;DR

I built the personal website of **Dr Sana Amraoui** — a Parisian cardiologist and *rythmologue* (heart-rhythm specialist) who performs cutting-edge ablation procedures and has an LSE MBA. The brief: make it look like a **world-class Parisian specialist**, not a generic clinic or health startup. It had to reassure anxious patients fast, impress peers, be French-first, mobile-first, and be found/cited by AI search engines.

**Stack:** React + Vite + Tailwind CSS + Framer Motion (+ React Router, react-helmet-async).
**Status:** builds clean, runs locally, pushed to GitHub. Homepage + navbar are fully designed; inner pages exist and inherit the same look.

---

## The core idea (the concept)

Everything hangs on one metaphor the doctor uses herself: **she is "the electrician of the heart."** Cardiology that's specifically about the heart's *electrical signal*.

So instead of the cliché (red hearts, healthcare blue), the whole site is built around **rhythm and signal**:

- A **living ECG line** (a thin animated heartbeat trace) is the signature visual. It starts chaotic (fibrillation) and resolves into a steady rhythm — literally the story of what she does to a patient.
- The tagline is **"L'électricité du cœur. Maîtrisée."** ("The electricity of the heart. Mastered.")
- The palette is **jewel-toned and editorial**, not clinical-cold.

The emotional target: a patient landing at 2am with a racing heart should feel **calmer within 3 seconds** and be able to **book in under 2 taps** on their phone.

---

## Colour system — "Prune Clinique"

The doctor also owns a second site (Cardio Check-Up) which is warm burgundy + gold. This personal site had to feel **related but cooler and more authoritative** — so I shifted burgundy toward **plum/violet**, made the gold paler (champagne), made the body text a cool slate-navy, and added one brand-new "anchor" colour the other site doesn't have.

| Colour | Hex | Where it's used |
|---|---|---|
| **Prune** (plum) | `#6C2A52` | The primary accent — buttons, links, active states |
| **Prune Profonde** | `#4A1D38` | Button hover / deep accents |
| **Encre Profonde** | `#1E1A2A` | Dark section backgrounds (hero, footer, bands) |
| **Nuit Médicale** | `#14111D` | The full-screen mobile menu background |
| **Or Académique** (champagne gold) | `#CBB388` | Credential badges, dividers, eyebrow labels |
| **Or Patiné** | `#A98C5F` | Deeper gold for small labels |
| **Ardoise** (slate-navy) | `#2A3140` | Body text + headings |
| **Brume** | `#6E7585` | Secondary/muted text |
| **Craie** (cream) | `#F6F2EA` | Main page background |
| **Pétrole** ⚡ (NEW anchor) | `#1C5E63` | The electric ECG line + precision accents |

**Concept:** plum = authority + intimacy (warmer than navy, calmer than red). Champagne gold = the "highest honours" prestige without bling. Pétrole (deep electric teal) = "electricity of the heart," used only for the ECG line so the brand's one moving colour literally *is* the signal.

---

## Typography

- **Cormorant Garamond** (elegant serif) → all big headlines. Gives the "Parisian magazine / luxury" feel.
- **Inter** (clean sans) → all body text, navigation, labels. Quiet and legible.
- **JetBrains Mono** (monospace) → reserved for *numbers and data only* (e.g. "45M", read-times). Makes statistics feel like instrument readouts.

**Concept:** a strong contrast between a characterful display serif and a neutral body sans is what separates "editorial" from "web app."

---

## The navbar (structure + concept)

**Structure:**
- **Logo** left: gold ECG mark + "Dr Sana Amraoui" + subtitle "Cardiologue · Rythmologue."
- **5 menu items** (French): Arythmies ▾ · Traitements ▾ · Apnée du sommeil · Blog · À propos. (Two dropdowns.)
- **Plum CTA** right: "Prendre rendez-vous →."

**Behaviour / concept:**
- On the homepage it's **transparent over the dark hero** (white text), then on scroll it turns into a **frosted white bar** with a subtle shadow. Feels premium and uncluttered.
- **Mobile:** a thin strip on top shows her **phone number as a tap-to-call link** (panic patients want to *call*), then logo + hamburger. Tapping the hamburger opens a **full-screen dark menu** with big touch targets and a permanent "Book" button pinned at the bottom.
- Fully keyboard-accessible, with a "skip to content" link and visible focus rings.

**Why:** the old version had 7 English menu items and a generic navy button — busy and off-brand. Cutting to 5 French items + one branded CTA is calmer and more credible.

---

## Homepage — section by section

The page is a deliberate emotional arc: **reassure → prove authority → explain → guide to booking.** Here's each section, its structure, and the concept.

### A — Hero (dark)
- **Structure:** deep plum-black background, eyebrow label, big 3-line headline that animates in word-by-word, the ECG line, a one-line credential subtitle, two buttons (plum "Book" + ghost "Discover my approach"), her photo on the right, and a thin strip of 3 key stats at the bottom.
- **Concept:** drama + calm. The dark editorial look says "world-class" instantly; the word-by-word headline feels intentional; warmth (her face) + competence (the credentials) land in the first 2 seconds — which is when trust is decided.

### B — Trust bar
- **Structure:** a quiet row of institution names (Hôpital Américain de Paris, LSE, St Thomas', Columbia, Bordeaux). Scrolls sideways on mobile.
- **Concept:** "quiet authority." No logos shouting — just the names, stacking credibility right after the hero.

### C — What is a rythmologue?
- **Structure:** centered, narrow text block with a big italic pull-quote: *"L'électricien du cœur."*
- **Concept:** reframes her as a rare super-specialist (not interchangeable with a regular cardiologist), using her own memorable phrase.

### D — Conditions
- **Structure:** 3 cards — Fibrillation atriale / Tachycardie & bradycardie / Apnée du sommeil. Each has a name, a one-line risk fact, and "En savoir plus →." They lift and gain a plum border on hover.
- **Concept:** symptom-first. An anxious patient self-identifies ("that's me") and gets routed to the right page fast.

### E — Treatments (with the ECG signature)
- **Structure:** dark section, the animated ECG line threading across the top (sinus → fibrillation → corrected), then 3 blocks: Ablation / Implantable devices / Watches & remote monitoring.
- **Concept:** turns fear into hope. The ECG visually *performs* the promise: chaos becoming order.

### F — Dr Amraoui (split bio)
- **Structure:** photo on one side, 3-paragraph bio on the other, gold credential pills (LSE | Hôpital Américain | Columbia | Bordeaux), and a link to her full story.
- **Concept:** the human + the legend. One line naturally notes she's a **woman leading a unit in a male-dominated subspecialty** — woven in, not announced.

### G — Blog preview
- **Structure:** 3 article cards tagged either "Guide" (evergreen) or "Actualité" (news). Swipeable on mobile.
- **Concept:** shows she's an active, current expert — which is also what makes AI engines trust and cite her.

### H — Cardio Check-Up band
- **Structure:** a dark band pitching her prevention venture, with a button to that site/section.
- **Concept:** widens the audience to the "worried well" and shows entrepreneurial range.

### I — Recognition (social proof)
- **Structure:** 4 cards: Le Cardiologue "Portrait du mois," EHRA 2026 congress, Radcliffe Cardiology author, YouTube channel.
- **Concept:** **authority-led trust instead of star ratings.** She has no public patient reviews yet, and an empty ratings widget *lowers* trust — so I lead with media + peer recognition instead.

### J — Final call-to-action
- **Structure:** plum background, big headline "Remettons votre cœur en rythme," a cream "Book" button + large tap-to-call phone number + email + addresses.
- **Concept:** one clear action at the moment of highest intent; the ECG resolves to a steady rhythm = emotional closure.

(Then the **footer**: dark, with navigation, both phone numbers, the three locations, social links, and legal pages.)

---

## How it's built (the file structure)

```
src/
├── main.jsx                 # app entry
├── App.jsx                  # all routes + layout (navbar, footer, mobile booking bar)
├── styles/globals.css       # colour variables + base typography
├── data/
│   ├── site.js              # contact info, phone numbers, nav, locations
│   └── content.js           # clinical text, stats, FAQ, articles
├── components/
│   ├── layout/   Navbar.jsx · MobileDrawer.jsx · Footer.jsx · StickyBookingBar.jsx
│   ├── brand/    ECGLine.jsx        # the signature animated heartbeat
│   └── ui/       primitives (buttons, sections), Seo, PageHero, PhotoFrame, AnimatedStat, InlineCTA
└── pages/        Home · About · FibrillationAtriale · Ablation · ApneeSommeil ·
                  Contact · Faq · Blog · Hub · Simple (+ legal + 404)
```

**Concept:** content lives in `data/` so the pages stay thin and easy to update. One `ECGLine` component is reused everywhere as the brand thread. Token-based colours mean the whole site can be re-skinned from one config file.

---

## The details that make it feel "designed"

- **Every animation respects "reduced motion"** — if your OS asks for less motion, animations turn off. Accessibility + good taste.
- **No stock photos** — real photo slots are neat placeholders until her actual photography is added.
- **Fast** — production build is ~115 KB of JavaScript (gzipped) and loads quickly; aims for top Core Web Vitals.
- **Found by AI** — every page carries structured data (JSON-LD) describing her as a verified physician, with FAQ markup, so ChatGPT / Google AI / Perplexity can quote her correctly. This is her secret weapon: she has real, cross-referenced credentials (American Hospital, Radcliffe, LSE) that AI engines trust.
- **No em-dashes** in the visible copy (they read as AI-written) — natural French punctuation throughout.

---

## How to run it

```bash
npm install
npm run dev      # open the local URL it prints (e.g. http://localhost:5174)
npm run build    # production build
```

---

## What's intentionally still "to do"

This is a strong, real foundation — not a finished launch. Before going live it needs:
1. **Real photography** (swap the placeholders).
2. **Full text** on the secondary pages + real blog articles.
3. **Pre-rendering for SEO** (so AI/search crawlers get full HTML — the single most important launch step).
4. A few **client confirmations** (exact consultation address, English version scope).

---

*Repo:* https://github.com/Esubalew-kunta/rythmologue
*Companion docs in this folder:* `DESIGN_PLAN.md` (full spec) · `RESEARCH_rythmologue_audit.md` (research behind the decisions).
