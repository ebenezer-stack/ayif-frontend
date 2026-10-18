<script setup lang="ts">
import { ref, computed } from 'vue'
import { sessions, EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'
import type { Session } from '../types'

useHead({
  title: 'Programme Officiel — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Consultez le programme complet des 3 jours de l’Africa Youth Investment Forum (AYIF) Cotonou 2026. Panels, keynotes, pitchs de startups et rencontres B2B.'
    }
  ]
})

const activeDay = ref<'all' | 'day1' | 'day2' | 'day3'>('all')
const activeType = ref<string>('ALL')

const daysList = [
  { id: 'all', label: 'L’ensemble des 3 jours', date: '12 — 14 Nov 2026' },
  { id: 'day1', label: 'Jour 1 : Politiques & Capitaux', date: 'Jeudi 12 Nov 2026' },
  { id: 'day2', label: 'Jour 2 : Pitchs, PME & Gala', date: 'Vendredi 13 Nov 2026' },
  { id: 'day3', label: 'Jour 3 : ZLECAf & B2B', date: 'Samedi 14 Nov 2026' }
]

const typesList = [
  { id: 'ALL', label: 'Tous les formats' },
  { id: 'KEYNOTE', label: 'Keynotes & Cérémonies' },
  { id: 'PANEL', label: 'Panels Stratégiques' },
  { id: 'STARTUP PITCH', label: 'Pitch Competition' },
  { id: 'INVESTMENT SESSION', label: 'Sessions Investissement' },
  { id: 'NETWORKING B2B', label: 'Networking & B2B' },
  { id: 'ATELIER', label: 'Ateliers & Masterclasses' }
]

const filteredSessions = computed<Session[]>(() => {
  return sessions.filter(s => {
    const matchDay = activeDay.value === 'all' || s.day === activeDay.value
    const matchType = activeType.value === 'ALL' || s.type === activeType.value
    return matchDay && matchType
  })
})

// Favoris / Agenda personnel
const bookmarkedSessions = ref<string[]>([])
const toggleBookmark = (sessionId: string) => {
  if (bookmarkedSessions.value.includes(sessionId)) {
    bookmarkedSessions.value = bookmarkedSessions.value.filter(id => id !== sessionId)
  } else {
    bookmarkedSessions.value.push(sessionId)
  }
}
</script>

<template>
  <div class="programme-page">
    <!-- HERO SECTION -->
    <section class="prog-hero navy">
      <div class="wrap">
        <span class="sub-kicker">Agenda Détaillé</span>
        <h1 class="hero-title">Programme du Forum AYIF 2026</h1>
        <p class="hero-lead">
          Trois jours intensifs structurés autour des enjeux concrets du financement, de l'expansion régionale et des alliances d'affaires entre jeunes entrepreneurs et bailleurs de fonds.
        </p>
        <div class="meta-strip">
          <span>{{ EVENT_DATES_LABEL }}</span>
          <span class="dot">·</span>
          <span>{{ EVENT_LOCATION }}</span>
        </div>
      </div>
    </section>

    <!-- PROGRAM NAVIGATION & FILTERS -->
    <section class="prog-container">
      <div class="wrap">
        <!-- ONGLET JOURS -->
        <div class="day-tabs">
          <button 
            v-for="d in daysList" 
            :key="d.id"
            type="button"
            class="day-tab-btn"
            :class="{ active: activeDay === d.id }"
            @click="activeDay = d.id as any"
          >
            <span class="day-label">{{ d.label }}</span>
            <span class="day-date">{{ d.date }}</span>
          </button>
        </div>

        <!-- FILTRES FORMATS -->
        <div class="format-filters-bar">
          <span class="filter-hint">Filtrer par format :</span>
          <div class="filters-scroll">
            <button 
              v-for="t in typesList" 
              :key="t.id"
              type="button"
              class="type-pill-btn"
              :class="{ active: activeType === t.id }"
              @click="activeType = t.id"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

        <!-- LISTE DES SESSIONS -->
        <div class="sessions-timeline">
          <div v-if="filteredSessions.length === 0" class="empty-state">
            <p>Aucune session ne correspond aux filtres sélectionnés.</p>
            <button type="button" class="btn primary" @click="activeDay = 'all'; activeType = 'ALL'">
              Réinitialiser les filtres
            </button>
          </div>

          <article 
            v-for="s in filteredSessions" 
            :key="s.id" 
            class="session-card"
          >
            <div class="sess-time-col">
              <time class="sess-hour">{{ s.time }}</time>
              <span class="sess-day-tag">{{ s.dayLabel.split('—')[0] }}</span>
              <span class="sess-place">{{ s.place }}</span>
            </div>

            <div class="sess-body-col">
              <div class="sess-top-row">
                <span class="sess-badge">{{ s.type }}</span>
                <button 
                  type="button" 
                  class="bookmark-btn"
                  :class="{ bookmarked: bookmarkedSessions.includes(s.id) }"
                  :aria-label="bookmarkedSessions.includes(s.id) ? 'Retirer de mon agenda' : 'Ajouter à mon agenda'"
                  @click="toggleBookmark(s.id)"
                >
                  <svg v-if="bookmarkedSessions.includes(s.id)" class="bm-svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg v-else class="bm-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>{{ bookmarkedSessions.includes(s.id) ? 'Ajouté à mon agenda' : 'Ajouter à mon agenda' }}</span>
                </button>
              </div>

              <h2 class="sess-title">{{ s.title }}</h2>
              <p class="sess-desc">{{ s.description }}</p>

              <div class="sess-speakers-row">
                <span class="sp-lead">Intervenants :</span>
                <strong class="sp-names">{{ s.speakers }}</strong>
              </div>
            </div>
          </article>
        </div>

        <!-- TÉLÉCHARGEMENT PROGRAMME PDF BANNER -->
        <div class="download-banner navy">
          <div class="dl-content">
            <h3>Emportez le livret du programme officiel</h3>
            <p>Recevez la brochure complète avec le profil des 50 speakers et le plan des salles du Palais des Congrès.</p>
          </div>
          <div class="dl-actions">
            <NuxtLink to="/reservation" class="btn primary">
              Réserver mon accès pour assister aux sessions
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.programme-page {
  background-color: var(--bg-page);
  color: var(--text-page);
}

.prog-hero {
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

/* Onglets & Conteneur */
.prog-container {
  padding: 60px 0 96px;
}

.day-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 32px;
}

.day-tab-btn {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 18px 14px;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: all 0.2s ease;
}

.day-tab-btn:hover {
  border-color: var(--color-accent);
}

.day-tab-btn.active {
  background-color: var(--ayif-blue);
  border-color: var(--ayif-blue);
}

.day-label {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  color: var(--text-page);
}

.day-date {
  font-size: 12px;
  color: var(--text-muted);
}

.day-tab-btn.active .day-label {
  color: var(--ayif-white);
}

.day-tab-btn.active .day-date {
  color: rgba(255, 255, 255, 0.8);
}

/* Filtres formats */
.format-filters-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 44px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-line);
  flex-wrap: wrap;
}

.filter-hint {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-muted);
}

.filters-scroll {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.type-pill-btn {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 6px 14px;
  border-radius: 99px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-page);
  cursor: pointer;
  transition: all 0.2s ease;
}

.type-pill-btn:hover {
  border-color: var(--color-accent);
}

.type-pill-btn.active {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--ayif-white);
}

/* Liste des sessions */
.sessions-timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 64px;
}

.session-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 32px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.session-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.sess-time-col {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-right: 1px solid var(--border-line);
  padding-right: 20px;
}

.sess-hour {
  font-family: var(--font-serif);
  font-size: var(--fs-h4);
  font-weight: 700;
  color: var(--ayif-blue);
}

.sess-day-tag {
  font-size: 12px;
  font-weight: 700;
  color: var(--color-gold);
}

.sess-place {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
}

.sess-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.sess-badge {
  display: inline-block;
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
  padding: 3px 12px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.bookmark-btn {
  background: none;
  border: 1px solid var(--border-line);
  border-radius: 99px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.bm-svg {
  width: 14px;
  height: 14px;
}

.bookmark-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.bookmark-btn.bookmarked {
  background-color: rgba(217, 162, 27, 0.12);
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.sess-title {
  font-size: var(--fs-h3);
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 10px;
  color: var(--text-page);
}

.sess-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 18px;
}

.sess-speakers-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  padding-top: 14px;
  border-top: 1px dashed var(--border-line);
}

.sp-lead {
  color: var(--text-muted);
}

.sp-names {
  color: var(--color-accent);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  background-color: var(--bg-surface);
  border: 1px dashed var(--border-line);
  border-radius: 4px;
}

.empty-state p {
  font-size: var(--fs-body);
  color: var(--text-muted);
  margin-bottom: 16px;
}

/* Download Banner */
.download-banner {
  padding: 44px 40px;
  border-radius: 4px;
  border: 1px solid var(--navy-line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
}

.dl-content h3 {
  font-size: var(--fs-h3);
  font-weight: 700;
  margin: 0 0 6px;
  color: var(--navy-text);
}

.dl-content p {
  margin: 0;
  font-size: var(--fs-body);
  color: var(--navy-muted);
}

@media (max-width: 900px) {
  .day-tabs {
    grid-template-columns: repeat(2, 1fr);
  }

  .session-card {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .sess-time-col {
    border-right: none;
    border-bottom: 1px solid var(--border-line);
    padding-right: 0;
    padding-bottom: 14px;
  }
}

@media (max-width: 600px) {
  .day-tabs {
    grid-template-columns: 1fr;
  }

  .download-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
