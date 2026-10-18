<script setup lang="ts">
import { ref, computed } from 'vue'
import { speakers, EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'
import type { Speaker } from '../types'

useHead({
  title: 'Intervenants & Experts — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les conférenciers, investisseurs et leaders d’opinion participant à l’Africa Youth Investment Forum (AYIF) 2026 à Cotonou.'
    }
  ]
})

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

const filteredSpeakers = computed<Speaker[]>(() => {
  if (selectedFilter.value === 'ALL') return speakers
  return speakers.filter(s => {
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
    alert('Veuillez remplir au moins les champs Nom, Email et Titre de l’intervention.')
    return
  }
  speakerForm.value.submitted = true
}
</script>

<template>
  <div class="speakers-page">
    <!-- HERO SECTION -->
    <section class="sp-hero navy">
      <div class="wrap">
        <span class="sub-kicker">Panel d’Excellence</span>
        <h1 class="hero-title">Les Voix de l’Économie Africaine</h1>
        <p class="hero-lead">
          Plus de 50 investisseurs de premier plan, décideurs institutionnels et fondateurs chevronnés réunis pour inspirer, orienter et financer la jeunesse africaine.
        </p>
        <div class="meta-strip">
          <span>{{ EVENT_DATES_LABEL }}</span>
          <span class="dot">·</span>
          <span>{{ EVENT_LOCATION }}</span>
        </div>
      </div>
    </section>

    <!-- SPEAKERS LIST & FILTERS -->
    <section class="sp-content">
      <div class="wrap">
        <!-- BARRE DE FILTRES -->
        <div class="filter-strip">
          <span class="filter-label">Filtrer par pays / spécialité :</span>
          <div class="filter-pills">
            <button 
              v-for="f in filters" 
              :key="f.id"
              type="button"
              class="pill-btn"
              :class="{ active: selectedFilter === f.id }"
              @click="selectedFilter = f.id"
            >
              {{ f.label }}
            </button>
          </div>
        </div>

        <!-- GRILLE DÉTAILLÉE DES SPEAKERS -->
        <div class="speakers-grid">
          <div 
            v-for="s in filteredSpeakers" 
            :key="s.id" 
            class="speaker-card"
          >
            <div class="sp-top-visual">
              <div class="sp-photo navy">
                <span>{{ s.initials }}</span>
                <em>{{ s.country }}</em>
              </div>
            </div>

            <div class="sp-info">
              <div class="sp-header">
                <h3>{{ s.name }}</h3>
                <p class="sp-role-title">{{ s.role }}</p>
                <p class="sp-org-name">{{ s.organization }}</p>
              </div>

              <p class="sp-bio">{{ s.bio }}</p>

              <div class="sp-topics">
                <span v-for="t in s.topics" :key="t" class="topic-tag">
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION APPEL À CANDIDATURE -->
    <section id="candidature" class="candidacy-section">
      <div class="wrap cand-split">
        <div class="cand-info">
          <span class="sub-kicker">Call for Speakers 2026</span>
          <h2>Proposer une intervention ou animer un atelier</h2>
          <p class="intro">
            Vous dirigez un fonds d'investissement, une startup à fort impact ou une institution publique et souhaitez partager vos analyses ou retours d'expérience sur l'une des thématiques de l'AYIF ?
          </p>
          <div class="criteria-box">
            <h4>Critères de sélection :</h4>
            <ul>
              <li>Expérience démontrée sur le marché africain</li>
              <li>Approche pragmatique orientée solutions et chiffres</li>
              <li>Capacité à interagir avec une audience de jeunes dirigeants</li>
            </ul>
          </div>
        </div>

        <div class="cand-form-box">
          <div v-if="speakerForm.submitted" class="cand-success navy">
            <h3>Candidature bien reçue</h3>
            <p>Merci pour votre proposition d’intervention. Le comité scientifique de l'AYIF étudiera votre dossier et reviendra vers vous sous 72 heures ouvrées.</p>
            <button type="button" class="btn primary" @click="speakerForm.submitted = false">
              Soumettre une autre proposition
            </button>
          </div>

          <form v-else class="cand-form" @submit.prevent="submitCandidacy">
            <h3>Formulaire de proposition</h3>
            <div class="f-group">
              <label for="candName">Nom et Prénom *</label>
              <input id="candName" v-model="speakerForm.name" type="text" required placeholder="Ex: Dr. Moussa Traoré" />
            </div>

            <div class="f-group">
              <label for="candEmail">Email professionnel *</label>
              <input id="candEmail" v-model="speakerForm.email" type="email" required placeholder="contact@fonds-afrique.com" />
            </div>

            <div class="f-group">
              <label for="candOrg">Organisation / Fonds / Entreprise *</label>
              <input id="candOrg" v-model="speakerForm.organization" type="text" required placeholder="Ex: Sahel Growth Capital" />
            </div>

            <div class="f-group">
              <label for="candTopic">Thématique ou titre de la session proposée *</label>
              <input id="candTopic" v-model="speakerForm.topic" type="text" required placeholder="Ex: Structuration de fonds d’amorçage en zone UEMOA" />
            </div>

            <div class="f-group">
              <label for="candBio">Biographie synthétique &amp; Liens (LinkedIn, travaux)</label>
              <textarea id="candBio" v-model="speakerForm.bio" rows="3" placeholder="Présentation synthétique de votre parcours et vos réalisations..."></textarea>
            </div>

            <button type="submit" class="btn primary cand-submit-btn">
              Transmettre ma proposition au comité
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- BANNIÈRE BILLETTERIE -->
    <section class="sp-cta-bar navy">
      <div class="wrap cta-bar-content">
        <div>
          <h2>Venez échanger directement avec nos intervenants</h2>
          <p>Réservez dès maintenant pour accéder aux sessions de questions-réponses et aux rendez-vous B2B.</p>
        </div>
        <NuxtLink to="/reservation" class="btn primary">
          Prendre mon pass d'accès
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.speakers-page {
  background-color: var(--bg-page);
  color: var(--text-page);
}

.sp-hero {
  padding-top: 150px;
  padding-bottom: 70px;
  background-color: var(--navy-bg);
  color: var(--navy-text);
  border-bottom: 1px solid var(--navy-line);
}

.sub-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 12px;
}

.hero-title {
  font-size: var(--fs-h1);
  font-weight: 800;
  line-height: 1.05;
  margin: 0 0 18px;
  color: var(--navy-text);
}

.hero-lead {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--navy-muted);
  max-width: 760px;
  margin: 0 0 28px;
}

.meta-strip {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--color-accent);
  font-weight: 600;
}

.meta-strip .dot {
  opacity: 0.5;
}

/* Grille et filtres */
.sp-content {
  padding: 60px 0 96px;
}

.filter-strip {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.filter-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-muted);
}

.filter-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.pill-btn {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 6px 14px;
  border-radius: 99px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-page);
  cursor: pointer;
  transition: all 0.2s ease;
}

.pill-btn:hover {
  border-color: var(--color-accent);
}

.pill-btn.active {
  background-color: var(--ayif-blue);
  border-color: var(--ayif-blue);
  color: var(--ayif-white);
}

.speakers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.speaker-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 32px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 28px;
  align-items: start;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.speaker-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.sp-photo {
  aspect-ratio: 4 / 5;
  border-radius: 4px;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--navy-line);
}

.sp-photo span {
  font-family: var(--font-serif);
  font-size: var(--fs-stat);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.25);
}

.sp-photo em {
  position: absolute;
  left: 8px;
  bottom: 8px;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  font-style: normal;
  color: var(--color-gold);
  background-color: rgba(8, 43, 85, 0.8);
  padding: 2px 6px;
  border-radius: 2px;
}

.sp-header h3 {
  font-size: var(--fs-h3);
  font-weight: 700;
  margin: 0 0 4px;
  color: var(--text-page);
}

.sp-role-title {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
}

.sp-org-name {
  margin: 2px 0 14px;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent);
}

.sp-bio {
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0 0 16px;
}

.sp-topics {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.topic-tag {
  font-size: 11px;
  font-weight: 600;
  background-color: var(--bg-page);
  border: 1px solid var(--border-line);
  padding: 3px 8px;
  border-radius: 2px;
  color: var(--text-muted);
}

/* Appel à candidature */
.candidacy-section {
  padding: 88px 0;
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-line);
}

.cand-split {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 56px;
  align-items: start;
}

.cand-info h2 {
  font-size: var(--fs-h2);
  font-weight: 700;
  margin: 0 0 16px;
  color: var(--text-page);
}

.criteria-box {
  margin-top: 28px;
  padding: 24px;
  background-color: var(--bg-page);
  border: 1px solid var(--border-line);
  border-radius: 4px;
}

.criteria-box h4 {
  margin: 0 0 10px;
  font-size: var(--fs-body);
  color: var(--ayif-blue);
}

.criteria-box ul {
  margin: 0;
  padding-left: 18px;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.6;
}

.cand-form-box {
  background-color: var(--bg-page);
  border: 1px solid var(--border-line);
  padding: 36px;
  border-radius: 4px;
}

.cand-form h3 {
  font-size: var(--fs-h3);
  font-weight: 700;
  margin: 0 0 20px;
  color: var(--text-page);
}

.f-group {
  margin-bottom: 18px;
}

.f-group label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--text-page);
}

.f-group input,
.f-group textarea {
  width: 100%;
  padding: 10px 14px;
  font-family: var(--font-sans);
  font-size: 14px;
  border: 1px solid var(--border-line);
  border-radius: 4px;
  background-color: var(--bg-surface);
  color: var(--text-page);
}

.f-group input:focus,
.f-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.cand-submit-btn {
  width: 100%;
  padding: 14px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
}

.cand-success {
  padding: 32px;
  border-radius: 4px;
  text-align: center;
}

.cand-success h3 {
  font-size: var(--fs-h3);
  color: var(--navy-text);
  margin-bottom: 10px;
}

.cand-success p {
  color: var(--navy-muted);
  font-size: var(--fs-body);
  margin-bottom: 24px;
}

/* CTA Bar */
.sp-cta-bar {
  padding: 60px 0;
  background-color: var(--navy-bg);
  border-top: 1px solid var(--navy-line);
}

.cta-bar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
}

.cta-bar-content h2 {
  font-size: var(--fs-h3);
  font-weight: 700;
  color: var(--navy-text);
  margin: 0 0 6px;
}

.cta-bar-content p {
  margin: 0;
  font-size: var(--fs-body);
  color: var(--navy-muted);
}

@media (max-width: 900px) {
  .speakers-grid,
  .cand-split {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 560px) {
  .speaker-card {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .sp-photo {
    max-width: 120px;
  }
}
</style>
