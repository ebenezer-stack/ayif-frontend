<script setup lang="ts">
import { ref, computed } from 'vue'
import { forumEditions } from '../../data/mockData'
import type { ForumEdition } from '../../types'

useHead({
  title: 'Toutes les Éditions — Africa Youth Investment Forum (AYIF)',
  meta: [
    {
      name: 'description',
      content: 'Explorez les éditions passées, actuelles et futures de l’Africa Youth Investment Forum : Abuja 2025, Cotonou 2026 et Dakar 2027. Retrouvez les bilans, chiffres clés, lauréats et programmes détaillés.'
    }
  ]
})

type FilterStatus = 'all' | 'current' | 'past' | 'upcoming'
const currentFilter = ref<FilterStatus>('all')

const filteredEditions = computed(() => {
  if (currentFilter.value === 'all') return forumEditions
  return forumEditions.filter(ed => ed.status === currentFilter.value)
})

const getStatusBadgeClass = (status: ForumEdition['status']) => {
  switch (status) {
    case 'current':
      return 'badge-current'
    case 'past':
      return 'badge-past'
    case 'upcoming':
      return 'badge-upcoming'
    default:
      return ''
  }
}
</script>

<template>
  <div class="editions-index-page">
    <!-- HERO SECTION -->
    <section class="editions-hero navy">
      <div class="wrap">
        <div class="hero-inner">
          <div class="hero-header-badge">
            <span class="sub-kicker">Trajectoire Panafricaine</span>
          </div>
          <h1 class="hero-title">Les Grandes Éditions de l’AYIF</h1>
          <p class="hero-lead">
            D’Abuja 2025 à Cotonou 2026 et vers la prochaine destination continentale : découvrez l’histoire, les retombées économiques réelles et l'appel à candidatures pour accueillir la prochaine édition du forum.
          </p>

          <!-- QUICK COUNTER BADGES -->
          <div class="macro-badges">
            <div class="macro-badge">
              <span class="macro-num">2</span>
              <span class="macro-txt">Éditions Réalisées</span>
            </div>
            <div class="macro-badge">
              <span class="macro-num">920+</span>
              <span class="macro-txt">Délégués Cumulés</span>
            </div>
            <div class="macro-badge">
              <span class="macro-num">$33M+</span>
              <span class="macro-txt">Capitaux Négociés &amp; Mobilisés</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MAIN LIST SECTION -->
    <section class="editions-catalog-section">
      <div class="wrap">
        <div class="catalog-top-bar">
          <div>
            <span class="section-kicker">Parcours &amp; Archives</span>
            <h2 class="section-h2">Sélectionnez une édition pour explorer ses archives</h2>
            <p class="section-sub">
              Chaque édition dispose de son espace complet : bilan d’impact, lauréats pitch, galeries photos, intervenants et livre blanc téléchargeable.
            </p>
          </div>

          <!-- FILTERS -->
          <div class="filter-pills" role="tablist" aria-label="Filtrer les éditions">
            <button 
              type="button" 
              class="filter-btn" 
              :class="{ active: currentFilter === 'all' }"
              @click="currentFilter = 'all'"
            >
              Toutes ({{ forumEditions.length }})
            </button>
            <button 
              type="button" 
              class="filter-btn" 
              :class="{ active: currentFilter === 'past' }"
              @click="currentFilter = 'past'"
            >
              Éditions Terminées (Abuja &amp; Cotonou)
            </button>
            <button 
              type="button" 
              class="filter-btn" 
              :class="{ active: currentFilter === 'upcoming' }"
              @click="currentFilter = 'upcoming'"
            >
              Prochaine Édition (À définir)
            </button>
          </div>
        </div>

        <!-- EDITIONS CARDS GRID -->
        <div class="editions-grid">
          <article 
            v-for="edition in filteredEditions" 
            :key="edition.slug" 
            class="edition-card"
            :class="{ 'card-highlight': edition.status === 'current' }"
          >
            <div class="card-media">
              <img :src="edition.coverImage" :alt="edition.title" class="card-cover-img" loading="lazy" />
              <div class="card-tags-overlay">
                <span class="status-pill" :class="getStatusBadgeClass(edition.status)">
                  {{ edition.statusLabel }}
                </span>
                <span class="year-pill">{{ edition.year }}</span>
              </div>
            </div>

            <div class="card-content">
              <div class="card-edition-num">{{ edition.editionNumber }} · {{ edition.country }}</div>
              <h3 class="card-title">
                <NuxtLink :to="`/editions/${edition.slug}`" class="title-link">
                  {{ edition.title }}
                </NuxtLink>
              </h3>
              <p class="card-tagline">« {{ edition.tagline }} »</p>
              
              <div class="card-meta-list">
                <div class="card-meta-item">
                  <svg class="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>{{ edition.dates }}</span>
                </div>
                <div class="card-meta-item">
                  <svg class="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{{ edition.venue }}, {{ edition.city }}</span>
                </div>
              </div>

              <!-- KEY STATS SNIPPET -->
              <div class="card-stats-row">
                <div v-for="stat in edition.stats.slice(0, 3)" :key="stat.label" class="card-stat-box">
                  <div class="card-stat-val">{{ stat.value }}</div>
                  <div class="card-stat-lbl">{{ stat.label }}</div>
                </div>
              </div>

              <div class="card-footer">
                <NuxtLink :to="`/editions/${edition.slug}`" class="btn-card-action">
                  <span>Explorer cette édition</span>
                  <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </NuxtLink>

                <NuxtLink 
                  v-if="edition.status === 'current'" 
                  to="/reservation" 
                  class="btn-reserve-badge"
                >
                  Billetterie 2026
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- COMPARISON TABLE SECTION -->
    <section class="comparison-section navy">
      <div class="wrap">
        <div class="section-head text-center">
          <span class="sub-kicker">Tableau Comparatif Réel</span>
          <h2 class="section-h2 text-white">Changement d’Échelle au Fil des Éditions</h2>
          <p class="section-lead-muted">
            De la fondation à Abuja jusqu'au déploiement de Cotonou et à l'ouverture des candidatures pour la prochaine édition.
          </p>
        </div>

        <div class="comparison-table-wrapper">
          <table class="editions-table">
            <thead>
              <tr>
                <th class="col-metric">Critères &amp; Indicateurs</th>
                <th class="col-ed">
                  <span class="th-year">2025</span>
                  <span class="th-title">Abuja (Édition 1)</span>
                  <span class="th-status past">Terminée</span>
                </th>
                <th class="col-ed">
                  <span class="th-year">2026</span>
                  <span class="th-title">Cotonou (Édition 2)</span>
                  <span class="th-status past">Terminée</span>
                </th>
                <th class="col-ed ed-current">
                  <span class="th-year">À venir</span>
                  <span class="th-title">Prochaine Édition (Édition 3)</span>
                  <span class="th-status upcoming">À Définir Ultérieurement</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-metric">Pays &amp; Ville Hôte</td>
                <td>Nigeria · Abuja</td>
                <td>Bénin · Cotonou</td>
                <td class="td-current"><strong>À Définir Ultérieurement (Candidatures Ouvertes)</strong></td>
              </tr>
              <tr>
                <td class="td-metric">Dates Officielles</td>
                <td>20 — 22 Novembre 2025</td>
                <td>03 — 05 Décembre 2026</td>
                <td class="td-current"><strong>À fixer avec le pays hôte</strong></td>
              </tr>
              <tr>
                <td class="td-metric">Lieu Officiel</td>
                <td>Abuja Int. Conference Centre</td>
                <td>Palais des Congrès de Cotonou</td>
                <td class="td-current">Centre International sélectionné</td>
              </tr>
              <tr>
                <td class="td-metric">Thématique &amp; Structure</td>
                <td>L’Envol du Capital Jeunesse &amp; Intégration Ouest-Africaine</td>
                <td>Jour 1 Rassembler, Jour 2 Accélérer (Clinique AYIF), Jour 3 Transformer (Visites, Gala)</td>
                <td class="td-current"><strong>Co-définie avec le pays hôte retenu</strong></td>
              </tr>
              <tr>
                <td class="td-metric">Délégués &amp; Participants</td>
                <td>420 participants accrédités</td>
                <td>500+ participants qualifiés</td>
                <td class="td-current"><strong>800+ délégués attendus</strong></td>
              </tr>
              <tr>
                <td class="td-metric">Pays Représentés</td>
                <td>14 pays</td>
                <td>25+ pays</td>
                <td class="td-current"><strong>30+ pays ciblés</strong></td>
              </tr>
              <tr>
                <td class="td-metric">Volume Deal Room &amp; Investissements</td>
                <td>$8.4M d'engagements signés</td>
                <td>$25M+ de pipeline et intentions d'affaires</td>
                <td class="td-current"><strong class="highlight-gold">$50M+ objectif d'intermédiation</strong></td>
              </tr>
              <tr>
                <td class="td-metric">Clinique Entrepreneuriale &amp; Diagnostics</td>
                <td>Ateliers sectoriels</td>
                <td>Clinique AYIF avec documents, chiffres réels et levée de fonds</td>
                <td class="td-current">Clinique d'experts continentale à grande échelle</td>
              </tr>
              <tr>
                <td class="td-metric">Visites de Terrain Productives</td>
                <td>Sessions en salle de conférence</td>
                <td>Zone Industrielle de Glo-Djigbé (GDIZ), Usine Des Fruits Tillous, Ouidah</td>
                <td class="td-current">Immersion dans les hubs industriels et culturels du pays hôte</td>
              </tr>
              <tr>
                <td class="td-metric">Dossier &amp; Action</td>
                <td>
                  <NuxtLink to="/editions/abuja-2025" class="table-link">
                    Consulter les archives 2025
                  </NuxtLink>
                </td>
                <td>
                  <NuxtLink to="/editions/cotonou-2026" class="table-link">
                    Consulter les actes de Cotonou 2026
                  </NuxtLink>
                </td>
                <td class="td-current">
                  <NuxtLink to="/partenaires#devenir-organisateur" class="table-link-current">
                    Candidater &amp; Devenir Pays Hôte &rarr;
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- HOSTING ANNOUNCEMENT BANNER -->
    <section id="prochain-organisateur" class="host-cta-section">
      <div class="wrap">
        <div class="host-banner">
          <div class="host-banner-text">
            <span class="section-kicker">Appel aux Nations &amp; Partenaires Majeurs</span>
            <h3>Et si ton pays devenait le prochain organisateur ?</h3>
            <p>
              Après le Nigéria (Abuja 2025) et le Bénin (Cotonou 2026), l’Africa Youth Investment Forum prépare sa 3ème grande édition. Ministères, chambres de commerce nationales, patronats ou grands groupes privés : déposez la candidature officielle de votre pays pour accueillir le forum, enregistrez votre structure et réglez les modalités de partenariat officiel.
            </p>
          </div>
          <div class="host-banner-actions">
            <NuxtLink to="/partenaires#devenir-organisateur" class="btn primary">
              Candidater &amp; Enregistrement Partenaire
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.editions-index-page {
  background-color: var(--bg-page);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
  min-height: 100vh;
}

/* HERO */
.editions-hero {
  padding-top: 150px;
  padding-bottom: 70px;
  background-color: var(--navy-bg);
  border-bottom: 1px solid var(--navy-line);
}

.hero-inner {
  max-width: 900px;
}

.sub-kicker {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 14px;
}

.hero-title {
  font-size: var(--fs-h1);
  font-weight: 800;
  line-height: 1.1;
  color: var(--navy-text);
  margin: 0 0 18px;
}

.hero-lead {
  font-size: var(--fs-lead);
  line-height: 1.6;
  color: var(--navy-muted);
  margin: 0 0 36px;
  max-width: 820px;
}

.macro-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.macro-badge {
  background-color: #0c3866;
  border: 1px solid var(--navy-line);
  padding: 14px 22px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.macro-num {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 800;
  color: var(--color-accent);
}

.macro-txt {
  font-size: 12px;
  color: var(--navy-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

/* CATALOG */
.editions-catalog-section {
  padding: 70px 0;
  border-bottom: 1px solid var(--border-line);
}

.catalog-top-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 48px;
}

.section-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.section-h2 {
  font-size: var(--fs-h2);
  font-weight: 800;
  color: var(--text-page);
  margin: 0 0 8px;
}

.section-sub {
  font-size: var(--fs-body);
  color: var(--text-muted);
  margin: 0;
  max-width: 640px;
}

/* FILTER PILLS */
.filter-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 6px;
  border-radius: 4px;
}

.filter-btn {
  background: none;
  border: none;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  color: var(--text-page);
  background-color: var(--bg-surface-soft);
}

.filter-btn.active {
  background-color: var(--ayif-navy);
  color: var(--ayif-white);
}

/* EDITIONS GRID */
.editions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.edition-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.edition-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(8, 43, 85, 0.12);
}

.edition-card.card-highlight {
  border-color: var(--color-gold);
  box-shadow: 0 4px 18px rgba(217, 162, 27, 0.15);
}

.card-media {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: var(--ayif-navy);
}

.card-cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.edition-card:hover .card-cover-img {
  transform: scale(1.04);
}

.card-tags-overlay {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-pill {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 5px 10px;
  border-radius: 3px;
}

.status-pill.badge-current {
  background-color: var(--color-gold);
  color: var(--ayif-navy);
}

.status-pill.badge-past {
  background-color: rgba(8, 43, 85, 0.85);
  color: var(--ayif-white);
  border: 1px solid var(--navy-line);
}

.status-pill.badge-upcoming {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
}

.year-pill {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 3px;
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-edition-num {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-accent);
  margin-bottom: 6px;
}

.card-title {
  font-size: var(--fs-h4);
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 8px;
}

.title-link {
  color: var(--text-page);
  text-decoration: none;
  transition: color 0.2s ease;
}

.title-link:hover {
  color: var(--color-accent);
}

.card-tagline {
  font-size: 13px;
  font-style: italic;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 18px;
}

.card-meta-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border-line);
}

.card-meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-page);
}

.meta-svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  color: var(--color-accent);
}

.card-stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background-color: var(--bg-surface-soft);
  border: 1px solid var(--border-line);
  padding: 12px 10px;
  border-radius: 3px;
  margin-bottom: 20px;
}

.card-stat-box {
  text-align: center;
}

.card-stat-val {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1.1;
}

.card-stat-lbl {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 2px;
}

.card-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 12px;
}

.btn-card-action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: var(--ayif-navy);
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-card-action:hover {
  color: var(--ayif-blue);
}

.btn-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.btn-card-action:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-reserve-badge {
  font-size: 11px;
  font-weight: 700;
  background-color: var(--color-gold);
  color: var(--ayif-navy);
  padding: 6px 12px;
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
}

.btn-reserve-badge:hover {
  opacity: 0.9;
}

/* COMPARISON TABLE */
.comparison-section {
  padding: 80px 0;
  background-color: var(--navy-bg);
  border-bottom: 1px solid var(--navy-line);
}

.text-center {
  text-align: center;
}

.text-white {
  color: var(--navy-text) !important;
}

.section-lead-muted {
  font-size: var(--fs-body);
  color: var(--navy-muted);
  max-width: 680px;
  margin: 0 auto 48px;
}

.comparison-table-wrapper {
  overflow-x: auto;
  background-color: #0b325f;
  border: 1px solid var(--navy-line);
  border-radius: 4px;
}

.editions-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 13px;
}

.editions-table th,
.editions-table td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--navy-line);
}

.editions-table th {
  background-color: var(--navy-bg);
  color: var(--navy-text);
  vertical-align: top;
  border-bottom: 2px solid var(--color-accent);
}

.col-metric {
  width: 260px;
  font-weight: 700;
}

.col-ed {
  width: 25%;
}

.ed-current {
  background-color: #0d3d75 !important;
  border-left: 1px solid var(--color-gold);
  border-right: 1px solid var(--color-gold);
}

.th-year {
  display: block;
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 800;
  color: var(--color-gold);
}

.th-title {
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin: 2px 0 6px;
}

.th-status {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 3px 6px;
  border-radius: 2px;
}

.th-status.past {
  background-color: #072242;
  color: #8da4c4;
}

.th-status.current {
  background-color: var(--color-gold);
  color: var(--ayif-navy);
}

.th-status.upcoming {
  background-color: var(--ayif-blue);
  color: #ffffff;
}

.td-metric {
  font-weight: 700;
  color: var(--color-accent);
}

.editions-table td {
  color: var(--navy-text);
  line-height: 1.5;
}

.td-current {
  background-color: #0d3d75;
  border-left: 1px solid var(--color-gold);
  border-right: 1px solid var(--color-gold);
}

.highlight-gold {
  color: var(--color-gold);
}

.table-link {
  color: var(--color-accent);
  text-decoration: underline;
  font-weight: 600;
}

.table-link-current {
  display: inline-block;
  background-color: var(--color-gold);
  color: var(--ayif-navy);
  padding: 6px 12px;
  border-radius: 3px;
  font-weight: 700;
  text-decoration: none;
}

/* HOST CTA */
.host-cta-section {
  padding: 70px 0;
}

.host-banner {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;
}

.host-banner-text {
  max-width: 680px;
}

.host-banner-text h3 {
  font-size: var(--fs-h3);
  font-weight: 800;
  margin: 0 0 10px;
  color: var(--text-page);
}

.host-banner-text p {
  font-size: var(--fs-body);
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .editions-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }

  .catalog-top-bar {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .macro-badges {
    flex-direction: column;
  }

  .host-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
