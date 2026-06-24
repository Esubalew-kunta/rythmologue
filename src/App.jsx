import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import StickyBookingBar from './components/layout/StickyBookingBar'

import Home from './pages/Home'
import About from './pages/About'
import FibrillationAtriale from './pages/FibrillationAtriale'
import Ablation from './pages/Ablation'
import ApneeSommeil from './pages/ApneeSommeil'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import Hub from './pages/Hub'
import Simple from './pages/Simple'
import { treatmentVideos } from './data/content'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a href="#contenu" className="skip-link">Aller au contenu</a>
      <Navbar />
      <main id="contenu" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dr-sana-amraoui" element={<About />} />

          {/* Arythmies */}
          <Route
            path="/arythmies"
            element={
              <Hub
                path="/arythmies"
                crumbs={[{ label: 'Arythmies' }]}
                eyebrow="Arythmies"
                title="Les troubles du rythme cardiaque"
                answer="L’arythmie est une perturbation du système de conduction électrique du cœur. Plus de 50 % des épisodes sont asymptomatiques, d’où l’importance du dépistage."
                items={[
                  { href: '/arythmies/fibrillation-atriale', label: 'Fibrillation atriale', desc: 'L’arythmie la plus fréquente au monde.' },
                  { href: '/arythmies/palpitations', label: 'Palpitations & généralités', desc: 'Comprendre ce que ressent votre cœur.' },
                  { href: '/arythmies/types-tachycardie', label: 'Tachycardies & types', desc: 'Les différents troubles du rythme.' },
                  { href: '/arythmies/holter-implantable', label: 'Holter implantable', desc: 'Détecter l’arythmie invisible.' },
                ]}
              />
            }
          />
          <Route path="/arythmies/fibrillation-atriale" element={<FibrillationAtriale />} />
          <Route
            path="/arythmies/palpitations"
            element={
              <Simple
                path="/arythmies/palpitations" crumbs={[{ label: 'Arythmies', href: '/arythmies' }, { label: 'Palpitations' }]}
                eyebrow="Arythmies · Généralités" title="Palpitations & généralités de l’arythmie"
                answer="L’arythmie est une perturbation du système électrique du cœur : le rythme peut être trop lent, trop rapide ou irrégulier. Plus de 50 % des épisodes sont asymptomatiques."
                blocks={[
                  { h: 'Symptômes', p: 'Lorsqu’ils sont présents : palpitations, malaises, fatigue inexpliquée, essoufflement. Plus de la moitié des arythmies restent toutefois silencieuses, ce qui justifie le dépistage en présence de facteurs favorisants.' },
                  { h: 'Diagnostic', p: 'Le rythmologue établit le diagnostic, évalue les risques associés et définit une stratégie : règles hygiéno-diététiques, traitement médicamenteux, ou intervention mini-invasive type ablation. Certaines montres connectées permettent un ECG à une dérivation lors des symptômes.' },
                  { h: 'Traitements médicamenteux', list: ['Anticoagulants : ils fluidifient le sang et préviennent les caillots, réduisant le risque d’AVC ischémique.', 'Anti-arythmiques : ils modifient les propriétés électriques du cœur ; leur efficacité est parfois réduite avec le temps.'] },
                ]}
              />
            }
          />
          <Route
            path="/arythmies/types-tachycardie"
            element={<Simple path="/arythmies/types-tachycardie" draft crumbs={[{ label: 'Arythmies', href: '/arythmies' }, { label: 'Tachycardies & types' }]}
              eyebrow="Arythmies · Types" title="Tachycardies & types d’arythmie"
              answer="Les arythmies se classent selon leur origine (atriale ou ventriculaire) et leur mécanisme. Identifier le type exact conditionne le traitement."
              blocks={[{ p: 'Le contenu détaillé de cette page (flutter atrial, tachycardies supraventriculaires, extrasystoles, etc.) est en cours de rédaction.' }]} />}
          />
          <Route
            path="/arythmies/holter-implantable"
            element={<Simple path="/arythmies/holter-implantable" draft crumbs={[{ label: 'Arythmies', href: '/arythmies' }, { label: 'Holter implantable' }]}
              eyebrow="Arythmies · Diagnostic" title="Le Holter implantable"
              answer="Le Holter implantable est un moniteur cardiaque placé sous la peau qui enregistre le rythme en continu pendant plusieurs années, pour détecter les arythmies rares ou silencieuses."
              blocks={[{ p: 'Contenu détaillé en cours de rédaction.' }]} />}
          />

          {/* Traitements */}
          <Route
            path="/traitements"
            element={
              <Hub
                path="/traitements" crumbs={[{ label: 'Traitements' }]}
                videos={treatmentVideos}
                eyebrow="Traitements" title="Traiter durablement les arythmies"
                answer="De l’ablation par cathéter, traitement de référence, aux dispositifs implantables, chaque arythmie appelle une stratégie adaptée."
                items={[
                  { href: '/traitements/ablation-catheter', label: 'Ablation par cathéter', desc: 'Radiofréquence, cryoablation, électroporation.' },
                  { href: '/traitements/pacemaker', label: 'Pacemaker', desc: 'Stimulateur cardiaque.' },
                  { href: '/traitements/defibrillateur', label: 'Défibrillateur (DAI)', desc: 'Défibrillateur automatique implantable.' },
                ]}
              />
            }
          />
          <Route path="/traitements/ablation-catheter" element={<Ablation />} />
          <Route
            path="/traitements/pacemaker"
            element={<Simple path="/traitements/pacemaker" draft crumbs={[{ label: 'Traitements', href: '/traitements' }, { label: 'Pacemaker' }]}
              eyebrow="Traitements · Stimulation" title="Le pacemaker (stimulateur cardiaque)"
              answer="Le pacemaker est un petit dispositif implanté qui surveille le rythme et stimule le cœur lorsqu’il bat trop lentement."
              blocks={[{ p: 'Contenu détaillé en cours de rédaction.' }]} />}
          />
          <Route
            path="/traitements/defibrillateur"
            element={<Simple path="/traitements/defibrillateur" draft crumbs={[{ label: 'Traitements', href: '/traitements' }, { label: 'Défibrillateur' }]}
              eyebrow="Traitements · Défibrillation" title="Le défibrillateur automatique implantable (DAI)"
              answer="Le DAI surveille le rythme en permanence et délivre un choc électrique pour interrompre une arythmie ventriculaire potentiellement mortelle."
              blocks={[{ p: 'Contenu détaillé en cours de rédaction.' }]} />}
          />

          <Route path="/apnee-du-sommeil" element={<ApneeSommeil />} />

          <Route
            path="/cardio-check-up"
            element={<Simple path="/cardio-check-up" crumbs={[{ label: 'Cardio Check-Up' }]}
              photo="Centre Cardio Check-Up · espace d’accueil" photoSrc="/cardio-checkup.png"
              eyebrow="Prévention" title="Cardio Check-Up : la prévention cardiovasculaire repensée"
              answer="Fondé et dirigé par le Dr Amraoui, Cardio Check-Up est un centre dédié au bilan cardiovasculaire personnalisé et à la prévention proactive."
              blocks={[
                { h: 'Une médecine proactive', p: 'Plutôt que d’attendre la maladie, Cardio Check-Up propose des bilans personnalisés pour dépister tôt les risques cardiovasculaires, y compris les arythmies silencieuses.' },
                { h: 'L’empreinte d’une double formation', p: 'L’approche reflète la double expertise du Dr Amraoui : la rythmologie de pointe et l’économie de la santé (LSE), au service d’une prévention efficiente et accessible.' },
                { list: ['Bilan cardiovasculaire personnalisé', 'Dépistage des troubles du rythme', 'Conseils hygiéno-diététiques et suivi'] },
              ]} />}
          />

          <Route
            path="/montres-connectees-telesuivi"
            element={<Simple path="/montres-connectees-telesuivi" variant="irregular" crumbs={[{ label: 'Montres connectées' }]}
              photo="Montre connectée affichant un ECG" photoSrc="/montres-ecg.png"
              eyebrow="Cardiologie connectée" title="Montres connectées & télésurveillance"
              answer="Les montres connectées réalisent un ECG à une dérivation et alertent en cas d’irrégularité du rythme. Un outil de dépistage précieux, en complément du suivi médical."
              blocks={[
                { h: 'En pratique', p: 'Chez les patients asymptomatiques, les capteurs d’irrégularité alertent et permettent un ECG précoce, ce qui réduit le risque d’AVC et d’insuffisance cardiaque. Chez les patients symptomatiques, la montre documente l’épisode de palpitation par un ECG.' },
                { h: 'Cas clinique', p: 'Une tachycardie supraventriculaire à 190 bpm a été diagnostiquée grâce à l’ECG d’une montre connectée, puis traitée par une intervention curative.' },
                { h: 'Télésurveillance des prothèses', p: 'Pacemakers et défibrillateurs peuvent être suivis à distance, pour détecter au plus tôt toute anomalie sans multiplier les déplacements.' },
              ]} />}
          />

          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/:slug"
            element={<Simple path="/blog" draft crumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Article' }]}
              eyebrow="Blog" title="Article"
              answer="Le contenu complet de cet article sera publié prochainement."
              blocks={[{ p: 'Cet espace accueillera l’article (gabarit GEO : réponse courte, sous-titres en questions, encadré statistique, bloc FAQ, signature de l’auteure).' }]} cta={false} />}
          />

          <Route
            path="/mentions-legales"
            element={<Simple path="/mentions-legales" crumbs={[{ label: 'Mentions légales' }]}
              eyebrow="Légal" title="Mentions légales" cta={false}
              answer="Informations légales relatives au site du Dr Sana Amraoui."
              blocks={[{ p: 'Éditrice : Dr Sana Amraoui, rythmologue. Contenu informatif ne se substituant pas à une consultation médicale. Hébergement et coordonnées complètes à préciser.' }]} />}
          />
          <Route
            path="/politique-confidentialite"
            element={<Simple path="/politique-confidentialite" crumbs={[{ label: 'Confidentialité · RGPD' }]}
              eyebrow="Légal · RGPD" title="Politique de confidentialité" cta={false}
              answer="Vos données de santé sont traitées conformément au RGPD."
              blocks={[{ p: 'Les données transmises via le formulaire sont utilisées uniquement pour traiter votre demande. Aucun cookie de suivi publicitaire. Analytics respectueux de la vie privée (sans consentement requis). Vous disposez d’un droit d’accès, de rectification et d’effacement.' }]} />}
          />

          <Route
            path="*"
            element={<Simple path="/404" crumbs={[{ label: 'Page introuvable' }]}
              eyebrow="Erreur 404" title="Cette page a perdu le rythme" cta={false}
              answer="La page que vous cherchez n’existe pas ou a été déplacée."
              blocks={[{ p: 'Revenez à l’accueil, ou prenez directement rendez-vous.' }]} />}
          />
        </Routes>
      </main>
      <Footer />
      <StickyBookingBar />
    </>
  )
}
