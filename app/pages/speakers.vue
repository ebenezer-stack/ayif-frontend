<script setup lang="ts">
import { ref, computed } from 'vue'
import { speakers, EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'
import type { Speaker } from '../types'

useHead({
  title: 'Intervenants & Décideurs Continentaux — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les intervenants officiels, investisseurs et personnalités économiques participant à l’Africa Youth Investment Forum (AYIF). Cotonou 2026 & Rétrospective Abuja 2025.'
    }
  ]
})

// Sélection d'édition ('2026' ou '2025')
const selectedEdition = ref<'2026' | '2025'>('2026')
const selectedFilter = ref('ALL')

const filters = [
  { id: 'ALL', label: 'Tous les intervenants' },
  { id: 'Nigeria', label: 'Nigeria' },
  { id: 'Bénin', label: 'Bénin' },
  { id: 'Sénégal', label: 'Sénégal' },
  { id: 'Ghana', label: 'Ghana' },
  { id: 'Côte d’Ivoire', label: 'Côte d’Ivoire' },
  { id: 'Capital-risque', label: 'Capital-Risque & Financement' },
  { id: 'Logistique', label: 'Logistique & Commerce' }
]

// Collèges d'intervenants attendus pour l'édition 2026
const colleges2026 = [
  {
    num: '01',
    roman: 'I',
    title: 'Hautes Autorités & Diplomatie Économique',
    kicker: 'Pôle Souverain & Intégration',
    desc: 'Délégations ministérielles du Bénin et du Nigéria, représentants de la Commission de la CEDEAO et du Secrétariat de la ZLECAf.',
    topics: ['Accords bilatéraux', 'Harmonisation douanière', 'Corridors transfrontaliers']
  },
  {
    num: '02',
    roman: 'II',
    title: 'Fonds d’Investissement & Capital Patient',
    kicker: 'Pôle Capital & Financement',
    desc: 'Gestionnaires de fonds de capital-risque, banques multilatérales de développement (BOAD, BAD) et réseaux de Business Angels ouest-africains.',
    topics: ['Capital d’amorçage', 'Financement mixte', 'Tours de table PME']
  },
  {
    num: '03',
    roman: 'III',
    title: 'Fondateurs de Licornes & Bâtisseurs Industriels',
    kicker: 'Pôle Entrepreneuriat & Scalabilité',
    desc: 'Chefs d’entreprises et fondateurs de solutions technologiques majeures dans la fintech, l’agritech, la logistique et l’énergie verte.',
    topics: ['Passage à l’échelle', 'Expansion CEDEAO', 'Innovation locale']
  },
  {
    num: '04',
    roman: 'IV',
    title: 'Chambres Consulaires & Réseaux Patronaux',
    kicker: 'Pôle Alliances & Commerce B2B',
    desc: 'Leaders patronaux de NACCIMA Youth Entrepreneurs, de la Chambre de Commerce et d’Industrie du Bénin (CCIB) et des fédérations patronales régionales.',
    topics: ['Coopération patronale', 'Alliances B2B', 'Mentorat stratégique']
  }
]

const filteredSpeakers = computed<Speaker[]>(() => {
  const editionSpeakers = speakers.filter(s => (s.editionYear || 2025) === 2025)
  if (selectedFilter.value === 'ALL') return editionSpeakers
  return editionSpeakers.filter(s => {
    return s.country === selectedFilter.value || 
      s.topics.some(t => t.toLowerCase().includes(selectedFilter.value.toLowerCase()))
  })
})

// Formulaire de candidature speaker
const speakerForm = ref({
  name: '',
  email: '',
  organization: '',
  topic: '',
  bio: '',
  submitted: false
})

const submitCandidacy = () => {
  if (!speakerForm.value.name || !speakerForm.value.email || !speakerForm.value.topic) {
    alert('Veuillez renseigner au minimum votre Nom, Email et Titre de l’intervention proposée.')
    return
  }
  speakerForm.value.submitted = true
}
</script>

<template>
  <div class="speakers-page">
    <!-- HERO SECTION PRESTIGE (PATTERN NAVY, SANS BORDURE BASSE) -->
    <section class="sp-hero navy">
      <div class="wrap">
        <div class="kicker-group" v-reveal>
          <span class="kicker-gem" aria-hidden="true">◆</span>
          <span class="sub-kicker">Collège Continental des Leaders &amp; Experts</span>
        </div>
        <h1 class="hero-title" v-reveal="{ effect: 'up', delay: 80 }">
          Les Voix qui Façonnent l'Économie Africaine
        </h1>
        <p class="hero-lead" v-reveal="{ effect: 'up', delay: 120 }">
          Chaque édition de l'AYIF réunit son collège d'intervenants de premier ordre : investisseurs de capital-risque, dirigeants d'institutions multilatérales, bâtisseurs d'infrastructures et ministres de la région.
        </p>
        <div class="meta-strip" v-reveal="{ effect: 'up', delay: 160 }">
          <span class="meta-capsule">{{ EVENT_DATES_LABEL }}</span>
          <span class="meta-capsule">{{ EVENT_LOCATION }}</span>
          <span class="meta-capsule gold">Palais des Congrès de Cotonou</span>
        </div>
      </div>
    </section>

    <!-- SECTION PRINCIPALE DES INTERVENANTS (PATTERN CONTINU, SANS CARTE ÉTOUFFANTE) -->
    <section class="sp-content">
      <div class="wrap">
        <!-- SÉLECTEUR MONUMENTAL D'ÉDITIONS -->
        <nav class="edition-master-nav" role="tablist" aria-label="Sélectionner l’édition" v-reveal>
          <button 
            type="button" 
            role="tab"
            class="edition-tab-btn"
            :class="{ active: selectedEdition === '2026' }"
            :aria-selected="selectedEdition === '2026'"
            @click="selectedEdition = '2026'"
          >
            <span class="ed-kicker">Sommet en Préparation</span>
            <span class="ed-title">Édition Cotonou 2026</span>
            <span class="ed-badge-status">
              <span class="status-gem" aria-hidden="true">◆</span>
              <span>Annonce Protocolaire en Cours</span>
            </span>
          </button>

          <button 
            type="button" 
            role="tab"
            class="edition-tab-btn"
            :class="{ active: selectedEdition === '2025' }"
            :aria-selected="selectedEdition === '2025'"
            @click="selectedEdition = '2025'"
          >
            <span class="ed-kicker">Rétrospective Historique</span>
            <span class="ed-title">Édition Abuja 2025</span>
            <span class="ed-badge-status confirmed">
              <span class="status-gem" aria-hidden="true">✦</span>
              <span>Collège d’Experts Confirmés</span>
            </span>
          </button>
        </nav>

        <!-- ====================================================================
             VOLET ÉDITION 2026 : ANNONCE PROTOCOLAIRE MAJESTUEUSE & COLLÈGES ATTENDUS
             ==================================================================== -->
        <div v-if="selectedEdition === '2026'" class="edition-2026-flow" v-reveal>
          <!-- BANDEAU MANIFESTE PROTOCOLAIRE -->
          <div class="protocol-manifesto-card">
            <div class="manifesto-badge-row">
              <span class="protocol-pill">
                <span class="p-gem" aria-hidden="true">◆</span>
                <span>Statut Officiel du Protocole</span>
              </span>
              <span class="protocol-date">Validation officielle AYIF 2026</span>
            </div>

            <h2 class="protocol-headline">
              La Publication des Personnalités Officielles 2026 s'opère au Rythme des Validations d'État
            </h2>

            <p class="protocol-narrative">
              Chaque édition de l’Africa Youth Investment Forum réunit un collège sélectif de ministres plénipotentiaires, présidents de banques de développement, dirigeants de licornes et investisseurs de capital-risque.
            </p>
            <p class="protocol-subnarrative">
              Pour l’édition de Cotonou (03 au 05 Décembre 2026 au Palais des Congrès), les intervenants officiels sont publiés au fur et à mesure de la validation de leurs délégations gouvernementales et institutionnelles par le comité conjoint Bénin–Nigéria.
            </p>

            <div class="protocol-actions-row">
              <a href="#candidature" class="btn-protocol-gold">
                <span>Proposer une intervention officielle 2026</span>
                <svg viewBox="0 0 20 20" fill="currentColor" class="cta-arrow" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
              <button type="button" class="btn-protocol-ghost" @click="selectedEdition = '2025'">
                Explorer la rétrospective des intervenants d’Abuja 2025
              </button>
            </div>
          </div>

          <!-- LES 4 COLLÈGES D'INTERVENTION EN COURS DE DÉPLOIEMENT -->
          <div class="colleges-section">
            <div class="colleges-section-head">
              <span class="colleges-kicker">Panels Stratégiques &amp; Plénières</span>
              <h3 class="colleges-title">Les 4 Collèges de Décideurs Mobilisés pour 2026</h3>
              <p class="colleges-lead">
                Une architecture collégiale garantissant un équilibre rigoureux entre décideurs politiques, bailleurs de fonds et entrepreneurs de terrain.
              </p>
            </div>

            <div class="colleges-grid">
              <article 
                v-for="college in colleges2026"
                :key="college.num"
                class="college-monument-item"
              >
                <div class="college-header">
                  <div class="college-emblem-row">
                    <span class="college-roman-tag">
                      <span class="c-gem" aria-hidden="true">◆</span>
                      <span>COLLÈGE {{ college.roman }}</span>
                    </span>
                    <span class="college-num">{{ college.num }}</span>
                  </div>
                  <span class="college-kicker">{{ college.kicker }}</span>
                  <h4 class="college-name">{{ college.title }}</h4>
                </div>

                <p class="college-desc">{{ college.desc }}</p>

                <div class="college-topics-list">
                  <div v-for="t in college.topics" :key="t" class="college-topic-chip">
                    <span class="topic-bullet" aria-hidden="true">✦</span>
                    <span>{{ t }}</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <!-- ====================================================================
             VOLET ÉDITION 2025 : RÉTROSPECTIVE DES INTERVENANTS CONFIRMÉS D'ABUJA
             ==================================================================== -->
        <div v-else class="edition-2025-flow" v-reveal>
          <!-- BARRE DE FILTRES PRESTIGE -->
          <div class="filter-master-bar">
            <span class="filter-lead-label">Filtrer par territoire ou domaine (Abuja 2025) :</span>
            <div class="filter-pills-wrap">
              <button 
                v-for="f in filters" 
                :key="f.id"
                type="button"
                class="filter-pill-item"
                :class="{ active: selectedFilter === f.id }"
                @click="selectedFilter = f.id"
              >
                {{ f.label }}
              </button>
            </div>
          </div>

          <!-- GRILLE ÉDITORIALE DES INTERVENANTS HISTORIQUES (ZÉRO CARTE ÉTOUFFANTE) -->
          <div class="speakers-pure-grid">
            <article 
              v-for="s in filteredSpeakers" 
              :key="s.id" 
              class="speaker-monolith-item"
            >
              <div class="sp-avatar-row">
                <div class="sp-monogram-circle navy">
                  <span class="monogram-text">{{ s.initials }}</span>
                </div>
                <div class="sp-country-capsule">
                  <span class="country-gem" aria-hidden="true">◆</span>
                  <span>{{ s.country }}</span>
                </div>
              </div>

              <div class="sp-text-body">
                <h3 class="sp-person-name">{{ s.name }}</h3>
                <p class="sp-role-line">{{ s.role }}</p>
                <p class="sp-org-line">{{ s.organization }}</p>

                <p class="sp-bio-text">{{ s.bio }}</p>

                <div class="sp-topics-flow">
                  <span v-for="t in s.topics" :key="t" class="topic-pill-chip">
                    <span class="t-gem" aria-hidden="true">✦</span>
                    <span>{{ t }}</span>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION APPEL À CANDIDATURE OFFICIEL (STYLE NAVY SOUVERAIN) -->
    <section id="candidature" class="candidacy-section navy">
      <div class="wrap cand-split-layout">
        <div class="cand-intro-col" v-reveal>
          <div class="kicker-group">
            <span class="kicker-gem" aria-hidden="true">◆</span>
            <span class="sub-kicker">Call for Speakers &amp; Panélistes 2026</span>
          </div>
          <h2 class="cand-title">Proposer une Intervention ou Présenter un Atelier</h2>
          <p class="cand-lead">
            Vous pilotez un fonds d'investissement panafricain, une PME industrielle en forte expansion ou une institution publique et souhaitez enrichir les débats de Cotonou ?
          </p>

          <div class="cand-criteria-list">
            <div class="criteria-item">
              <span class="criteria-gem" aria-hidden="true">✦</span>
              <div>
                <strong>Expertise territoriale et sectorielle démontrée</strong> sur les marchés africains (CEDEAO / ZLECAf).
              </div>
            </div>
            <div class="criteria-item">
              <span class="criteria-gem" aria-hidden="true">✦</span>
              <div>
                <strong>Approche pragmatique orientée chiffres et solutions</strong> concrètes pour les dirigeants d'entreprises.
              </div>
            </div>
            <div class="criteria-item">
              <span class="criteria-gem" aria-hidden="true">✦</span>
              <div>
                <strong>Capacité d'interaction bilatérale</strong> et disposition aux séances de questions sans complaisance.
              </div>
            </div>
          </div>
        </div>

        <div class="cand-form-col" v-reveal="{ effect: 'up', delay: 100 }">
          <div v-if="speakerForm.submitted" class="cand-success-panel">
            <div class="success-icon-badge" aria-hidden="true">
              <span class="success-gem">◆</span>
            </div>
            <h3 class="success-title">Dossier Protocolaire Transmis</h3>
            <p class="success-text">
              Votre proposition d’intervention a bien été enregistrée par le secrétariat de l'AYIF. Le comité scientifique et institutionnel étudiera votre dossier et reviendra vers vous sous 72 heures ouvrées.
            </p>
            <button type="button" class="btn-success-reset" @click="speakerForm.submitted = false">
              Soumettre une autre proposition
            </button>
          </div>

          <form v-else class="cand-form-pure" @submit.prevent="submitCandidacy">
            <h3 class="form-heading">Formulaire de Dépôt de Candidature</h3>

            <div class="form-row-group">
              <label for="candName">Nom et Prénom *</label>
              <input 
                id="candName" 
                v-model="speakerForm.name" 
                type="text" 
                required 
                placeholder="Ex: Dr. Moussa Traoré" 
                class="pure-input"
              />
            </div>

            <div class="form-row-group">
              <label for="candEmail">Email professionnel *</label>
              <input 
                id="candEmail" 
                v-model="speakerForm.email" 
                type="email" 
                required 
                placeholder="contact@fonds-afrique.com" 
                class="pure-input"
              />
            </div>

            <div class="form-row-group">
              <label for="candOrg">Organisation / Fonds / Institution *</label>
              <input 
                id="candOrg" 
                v-model="speakerForm.organization" 
                type="text" 
                required 
                placeholder="Ex: Sahel Growth Capital" 
                class="pure-input"
              />
            </div>

            <div class="form-row-group">
              <label for="candTopic">Thématique ou titre de la session proposée *</label>
              <input 
                id="candTopic" 
                v-model="speakerForm.topic" 
                type="text" 
                required 
                placeholder="Ex: Structuration de fonds d’amorçage en zone UEMOA" 
                class="pure-input"
              />
            </div>

            <div class="form-row-group">
              <label for="candBio">Biographie synthétique &amp; Profil LinkedIn</label>
              <textarea 
                id="candBio" 
                v-model="speakerForm.bio" 
                rows="3" 
                placeholder="Présentation synthétique de votre parcours, réalisations et liens vers vos travaux..." 
                class="pure-textarea"
              ></textarea>
            </div>

            <button type="submit" class="btn-form-submit">
              Transmettre mon dossier au comité protocolaire
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- BANNIÈRE FINALE DE BILLETTERIE (FOND CLAIR CONTRASTÉ, SANS BORDURE) -->
    <section class="sp-cta-bar light">
      <div class="wrap cta-bar-split" v-reveal>
        <div class="cta-bar-text">
          <span class="cta-pre-kicker">Rencontres B2B &amp; Networking Diplomatique</span>
          <h2 class="cta-bar-title">Venez échanger directement avec nos intervenants</h2>
          <p class="cta-bar-desc">
            Les accréditations officielles de l'AYIF 2026 vous donnent un accès direct aux sessions de questions-réponses et aux Deal Rooms bilatérales au Palais des Congrès.
          </p>
        </div>
        <div class="cta-bar-actions">
          <NuxtLink to="/reservation" class="btn-cta-gold">
            <span>Prendre mon pass d’accès officiel</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="cta-arrow" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ==========================================================================
   PAGE SPEAKERS & DÉCIDEURS — ARCHITECTURE ÉDITORIALE HAUTE-COUTURE
   ZÉRO DÉGRADÉ · ZÉRO BORDURE TRONQUANTE (TOP/LEFT/BOTTOM) · ZÉRO ÉMOJI
   ========================================================================== */
.speakers-page {
  --page-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M28 0 L56 28 L28 56 L0 28 Z M28 12 L44 28 L28 44 L12 28 Z M28 23 L33 28 L28 33 L23 28 Z M0 12 L12 0 M44 0 L56 12 M0 44 L12 56 M44 56 L56 44 M0 23 L5 28 L0 33 M56 23 L51 28 L56 33 M23 0 L28 5 L33 0 M23 56 L28 51 L33 56' fill='none' stroke='%23082B55' stroke-width='1.1' stroke-opacity='0.08'/%3E%3C/svg%3E");
  --navy-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M28 0 L56 28 L28 56 L0 28 Z M28 12 L44 28 L28 44 L12 28 Z M28 23 L33 28 L28 33 L23 28 Z M0 12 L12 0 M44 0 L56 12 M0 44 L12 56 M44 56 L56 44 M0 23 L5 28 L0 33 M56 23 L51 28 L56 33 M23 0 L28 5 L33 0 M23 56 L28 51 L33 56' fill='none' stroke='%232EA7F2' stroke-width='1.1' stroke-opacity='0.085'/%3E%3C/svg%3E");
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
  border: none;
}

/* Kicker Group Commun */
.kicker-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
}

.kicker-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 11px;
}

.sub-kicker {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent, #2ea7f2);
}

/* --------------------------------------------------------------------------
   1. HERO SECTION SPEAKERS (AÉRÉ, PATTERN NAVY, SANS BORDURE BASSE)
   -------------------------------------------------------------------------- */
.sp-hero {
  padding-top: 154px;
  padding-bottom: 84px;
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--navy-text, #ffffff);
  border: none;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 4.2vw, 3.25rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin: 0 0 20px;
  color: #ffffff;
  max-width: 960px;
}

.hero-lead {
  font-family: var(--font-sans);
  font-size: clamp(1.05rem, 1.8vw, 1.18rem);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.82);
  max-width: 820px;
  margin: 0 0 32px;
}

.meta-strip {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.meta-capsule {
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 600;
  border: none;
}

.meta-capsule.gold {
  background-color: rgba(217, 162, 27, 0.18);
  color: var(--color-gold, #d9a21b);
}

/* --------------------------------------------------------------------------
   2. CONTENEUR PRINCIPAL & SÉLECTEUR D'ÉDITION
   -------------------------------------------------------------------------- */
.sp-content {
  padding: 88px 0 112px;
  border: none;
}

.edition-master-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 72px;
}

.edition-tab-btn {
  background-color: rgba(8, 43, 85, 0.04);
  border: none;
  padding: 24px 28px;
  border-radius: 18px;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.edition-tab-btn:hover {
  background-color: rgba(8, 43, 85, 0.08);
  transform: translateY(-2px);
}

.edition-tab-btn.active {
  background-color: var(--navy-bg, #082b55);
  box-shadow: 0 12px 32px rgba(8, 43, 85, 0.15);
}

.ed-kicker {
  font-family: var(--font-sans);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 800;
  color: var(--color-gold, #d9a21b);
}

.ed-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.2;
}

.ed-badge-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 700;
  color: var(--color-accent, #2ea7f2);
  margin-top: 4px;
}

.status-gem {
  font-size: 9px;
}

.ed-badge-status.confirmed {
  color: var(--color-gold, #d9a21b);
}

.edition-tab-btn.active .ed-title {
  color: #ffffff;
}

/* --------------------------------------------------------------------------
   3. VOLET 2026 : MANIFESTE PROTOCOLAIRE & COLLÈGES EN COURS
   -------------------------------------------------------------------------- */
.edition-2026-flow {
  display: flex;
  flex-direction: column;
  gap: 88px;
}

/* Carte de Manifeste Protocolaire (Écrin Souverain Bleu avec Pattern, Zéro bordure) */
.protocol-manifesto-card {
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: #ffffff;
  padding: 48px 52px;
  border-radius: 24px;
  border: none;
  box-shadow: 0 16px 40px rgba(8, 43, 85, 0.14);
}

.manifesto-badge-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.protocol-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
}

.p-gem {
  font-size: 9px;
}

.protocol-date {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
}

.protocol-headline {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3vw, 2.35rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 18px;
}

.protocol-narrative {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.95);
  max-width: 920px;
  margin: 0 0 12px;
}

.protocol-subnarrative {
  font-family: var(--font-sans);
  font-size: 14.5px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
  max-width: 920px;
  margin: 0 0 32px;
}

.protocol-actions-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-protocol-gold {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--color-gold, #d9a21b);
  color: var(--navy-bg, #082b55);
  padding: 14px 26px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-protocol-gold:hover {
  background-color: #c49114;
  transform: translateY(-2px);
}

.btn-protocol-ghost {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  padding: 14px 20px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.btn-protocol-ghost:hover {
  color: #ffffff;
}

/* Les 4 Collèges d'Intervention */
.colleges-section {
  display: flex;
  flex-direction: column;
}

.colleges-section-head {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 56px;
}

.colleges-kicker {
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent, #2ea7f2);
  display: block;
  margin-bottom: 8px;
}

.colleges-title {
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 3.2vw, 2.5rem);
  font-weight: 700;
  color: var(--text-page);
  letter-spacing: -0.02em;
  margin: 0 0 14px;
}

.colleges-lead {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

.colleges-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.college-monument-item {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  padding: 36px 38px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 8px 24px rgba(8, 43, 85, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.college-monument-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(8, 43, 85, 0.08);
}

.college-emblem-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
}

.college-roman-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
}

.c-gem {
  font-size: 9px;
}

.college-num {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 800;
  color: rgba(8, 43, 85, 0.15);
  line-height: 1;
}

.college-kicker {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent, #2ea7f2);
  margin-bottom: 6px;
  display: block;
}

.college-name {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.25;
  margin: 0 0 14px;
}

.college-desc {
  font-family: var(--font-sans);
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 0 20px;
}

.college-topics-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
}

.college-topic-chip {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-page);
}

.topic-bullet {
  color: var(--color-gold, #d9a21b);
  font-size: 10px;
}

/* --------------------------------------------------------------------------
   4. VOLET 2025 : RÉTROSPECTIVE D'ABUJA (GALERIE D'EXCELLENCE)
   -------------------------------------------------------------------------- */
.edition-2025-flow {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.filter-master-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.filter-lead-label {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.filter-pills-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-pill-item {
  background-color: rgba(8, 43, 85, 0.04);
  color: var(--text-page);
  padding: 8px 18px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.filter-pill-item:hover {
  background-color: rgba(8, 43, 85, 0.08);
}

.filter-pill-item.active {
  background-color: var(--navy-bg, #082b55);
  color: #ffffff;
}

/* Grille des Intervenants d'Abuja */
.speakers-pure-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.speaker-monolith-item {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  padding: 38px 40px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 8px 24px rgba(8, 43, 85, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.speaker-monolith-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(8, 43, 85, 0.08);
}

.sp-avatar-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.sp-monogram-circle {
  width: 58px;
  height: 58px;
  border-radius: 999px;
  background-color: var(--navy-bg, #082b55);
  color: var(--color-gold, #d9a21b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.sp-country-capsule {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
  background-color: rgba(217, 162, 27, 0.12);
  padding: 6px 14px;
  border-radius: 999px;
}

.country-gem {
  font-size: 9px;
}

.sp-person-name {
  font-family: var(--font-serif);
  font-size: 1.55rem;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.2;
  margin: 0 0 6px;
}

.sp-role-line {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  color: var(--color-accent, #2ea7f2);
  margin: 0;
}

.sp-org-line {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-muted);
  margin: 0 0 16px;
}

.sp-bio-text {
  font-family: var(--font-sans);
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--text-page);
  margin: 0 0 20px;
}

.sp-topics-flow {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.topic-pill-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  background-color: rgba(8, 43, 85, 0.04);
  padding: 4px 12px;
  border-radius: 999px;
}

.t-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 9px;
}

/* --------------------------------------------------------------------------
   5. SECTION APPEL À CANDIDATURE (CALL FOR SPEAKERS 2026 EN FOND BLEU SOUVERAIN)
   -------------------------------------------------------------------------- */
.candidacy-section.navy {
  padding: 104px 0;
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: #ffffff;
  border: none;
}

.cand-split-layout {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 64px;
  align-items: start;
}

.candidacy-section.navy .cand-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.18;
  letter-spacing: -0.025em;
  margin: 0 0 16px;
}

.candidacy-section.navy .cand-lead {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.82);
  margin: 0 0 32px;
}

.cand-criteria-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.candidacy-section.navy .criteria-item {
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-family: var(--font-sans);
  font-size: 14.5px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.9);
}

.criteria-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 12px;
  flex-shrink: 0;
}

/* Formulaire Épuré Translucide */
.candidacy-section.navy .cand-form-pure {
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  padding: 44px 48px;
  border-radius: 24px;
  border: none;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.candidacy-section.navy .form-heading {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px;
}

.form-row-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.candidacy-section.navy .form-row-group label {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
}

.candidacy-section.navy .pure-input,
.candidacy-section.navy .pure-textarea {
  font-family: var(--font-sans);
  font-size: 14.5px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.08);
  border: none;
  border-radius: 12px;
  padding: 14px 18px;
  outline: none;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.candidacy-section.navy .pure-input::placeholder,
.candidacy-section.navy .pure-textarea::placeholder {
  color: rgba(255, 255, 255, 0.45);
}

.candidacy-section.navy .pure-input:focus,
.candidacy-section.navy .pure-textarea:focus {
  background-color: rgba(255, 255, 255, 0.14);
  box-shadow: 0 0 0 2px var(--color-gold, #d9a21b);
}

.candidacy-section.navy .btn-form-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gold, #d9a21b);
  color: var(--navy-bg, #082b55);
  padding: 16px 28px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.candidacy-section.navy .btn-form-submit:hover {
  background-color: #c49114;
  transform: translateY(-2px);
}

/* Panel Succès */
.candidacy-section.navy .cand-success-panel {
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  color: #ffffff;
  padding: 44px 48px;
  border-radius: 24px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.success-icon-badge {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background-color: rgba(217, 162, 27, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.success-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 18px;
}

.success-title {
  font-family: var(--font-serif);
  font-size: 1.65rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: #ffffff;
}

.success-text {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 28px;
  max-width: 480px;
}

.btn-success-reset {
  background-color: var(--color-gold, #d9a21b);
  color: var(--navy-bg, #082b55);
  padding: 14px 26px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn-success-reset:hover {
  transform: translateY(-2px);
}

/* --------------------------------------------------------------------------
   6. BANNIÈRE PRESTIGE BILLETTERIE (FOND CLAIR CONTRASTÉ, SANS BORDURE)
   -------------------------------------------------------------------------- */
.sp-cta-bar.light {
  padding: 92px 0;
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
  border: none;
}

.cta-bar-split {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
}

.cta-bar-text {
  max-width: 720px;
}

.sp-cta-bar.light .cta-pre-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent, #2ea7f2);
  margin-bottom: 10px;
}

.sp-cta-bar.light .cta-bar-title {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}

.sp-cta-bar.light .cta-bar-desc {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

.btn-cta-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--color-gold, #d9a21b);
  color: var(--navy-bg, #082b55);
  padding: 16px 30px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-cta-gold:hover {
  background-color: #c49114;
  transform: translateY(-2px);
}

.cta-arrow {
  width: 16px;
  height: 16px;
}

/* --------------------------------------------------------------------------
   7. RESPONSIVE DESIGN FLUIDE
   -------------------------------------------------------------------------- */
@media (max-width: 1024px) {
  .edition-master-nav,
  .colleges-grid,
  .speakers-pure-grid,
  .cand-split-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .cta-bar-split {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .protocol-manifesto-card,
  .cand-form-pure,
  .cand-success-panel {
    padding: 32px 24px;
  }

  .btn-protocol-gold,
  .btn-protocol-ghost,
  .btn-cta-gold {
    width: 100%;
  }
}
</style>
