<script setup lang="ts">
import { ref, computed } from 'vue'
import { generalProgram, EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'
import type { GeneralProgramDay } from '../types'

useHead({
  title: 'Programme Général — Africa Youth Investment Forum (AYIF)',
  meta: [
    {
      name: 'description',
      content: 'Découvrez le programme général des 3 jours de l’Africa Youth Investment Forum (AYIF) Bénin 2026 : Rassembler, Accélérer, Transformer. Immersion terrain, clinique d’entreprise et gala.'
    }
  ]
})

const activeDayTab = ref<number | 'all'>('all')

const filteredDays = computed<GeneralProgramDay[]>(() => {
  if (activeDayTab.value === 'all') {
    return generalProgram
  }
  return generalProgram.filter(d => d.dayNumber === activeDayTab.value)
})
</script>

<template>
  <div class="programme-page">
    <!-- HERO SECTION -->
    <section class="prog-hero navy">
      <div class="wrap">
        <span class="sub-kicker">Architecture Officielle</span>
        <h1 class="hero-title">Programme Général AYIF 2026</h1>
        <p class="hero-lead">
          Trois journées conçues pour faire converger l'écosystème entrepreneurial continental : de la communion institutionnelle à l'accélération concrète des affaires, jusqu'à l'immersion productive et la célébration d'excellence.
        </p>
        <div class="meta-strip">
          <span class="meta-item">{{ EVENT_DATES_LABEL }}</span>
          <span class="dot">·</span>
          <span class="meta-item">{{ EVENT_LOCATION }}</span>
          <span class="dot">·</span>
          <span class="meta-badge">Programme Général sans horodatage fixe</span>
        </div>
      </div>
    </section>

    <!-- PROGRAM CONTAINER -->
    <section class="prog-container">
      <div class="wrap">
        <!-- TABS JOURS -->
        <div class="day-tabs" role="tablist">
          <button 
            type="button"
            class="day-tab-btn"
            :class="{ active: activeDayTab === 'all' }"
            @click="activeDayTab = 'all'"
          >
            <span class="day-num">Vue d'ensemble</span>
            <span class="day-label">Les 3 Journées</span>
            <span class="day-date">03 — 05 Décembre 2026</span>
          </button>

          <button 
            v-for="d in generalProgram" 
            :key="d.dayNumber"
            type="button"
            class="day-tab-btn"
            :class="{ active: activeDayTab === d.dayNumber }"
            @click="activeDayTab = d.dayNumber"
          >
            <span class="day-num">Jour {{ d.dayNumber }}</span>
            <span class="day-label">{{ d.action }}</span>
            <span class="day-date">{{ d.dateLabel }}</span>
          </button>
        </div>

        <!-- DAYS LIST -->
        <div class="general-program-list">
          <article 
            v-for="day in filteredDays" 
            :key="day.dayNumber" 
            class="program-day-card"
          >
            <!-- Card Header -->
            <header class="day-card-header">
              <div class="day-badge-wrap">
                <span class="day-pill">JOUR {{ day.dayNumber }}</span>
                <span class="action-tag">{{ day.action }}</span>
                <span class="date-tag">{{ day.dateLabel }}</span>
              </div>
              <h2 class="day-card-title">
                JOUR {{ day.dayNumber }} — {{ day.action }} : {{ day.theme }}
              </h2>
            </header>

            <!-- Card Body -->
            <div class="day-card-body">
              <div class="narrative-box">
                <p class="narrative-text">{{ day.narrative }}</p>
              </div>

              <!-- Points du programme -->
              <div class="program-points-section">
                <h3 class="section-subtitle">Au programme de la journée :</h3>
                <ul class="points-list">
                  <li v-for="(item, idx) in day.items" :key="idx" class="point-item">
                    <span class="bullet-marker"></span>
                    <span class="point-content">{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Objectif Clé -->
              <div class="objective-card">
                <div class="obj-header">
                  <span class="obj-badge">Objectif</span>
                </div>
                <p class="obj-text">
                  <strong>Objectif :</strong> {{ day.objective }}
                </p>
              </div>

              <!-- Points Forts & Lieux -->
              <div v-if="day.highlights && day.highlights.length" class="highlights-row">
                <span class="hl-label">Temps forts & Lieux :</span>
                <div class="hl-tags">
                  <span v-for="(hl, hIdx) in day.highlights" :key="hIdx" class="hl-tag">
                    {{ hl }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- CALL TO ACTION BANNER -->
        <div class="participate-banner navy">
          <div class="banner-body">
            <span class="banner-kicker">Participez à l’Édition 2026</span>
            <h3 class="banner-title">Préparez votre venue à Cotonou</h3>
            <p class="banner-text">
              Les places pour la Clinique entrepreneuriale, les visites de terrain (GDIZ, Fruits Tillous, Ouidah) et le Dîner de Gala sont attribuées selon les catégories de pass.
            </p>
          </div>
          <div class="banner-cta">
            <NuxtLink to="/reservation" class="btn primary">
              Réserver mon pass officiel
            </NuxtLink>
            <NuxtLink to="/contact" class="btn outline">
              Poser une question à l’organisation
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
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
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
  max-width: 820px;
  margin: 0 0 28px;
}

.meta-strip {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--color-accent);
  font-weight: 600;
  flex-wrap: wrap;
}

.meta-strip .dot {
  opacity: 0.4;
}

.meta-badge {
  background-color: rgba(200, 168, 75, 0.15);
  color: var(--color-gold);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  letter-spacing: 0.04em;
  border: 1px solid rgba(200, 168, 75, 0.3);
}

/* Onglets & Conteneur */
.prog-container {
  padding: 60px 0 96px;
}

.day-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 48px;
}

.day-tab-btn {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 18px 16px;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: all 0.2s ease;
}

.day-tab-btn:hover {
  border-color: var(--color-gold);
  transform: translateY(-2px);
}

.day-tab-btn.active {
  background-color: var(--ayif-blue);
  border-color: var(--color-gold);
  box-shadow: 0 6px 18px rgba(10, 26, 47, 0.12);
}

.day-num {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 800;
  color: var(--color-gold);
}

.day-label {
  font-family: var(--font-sans);
  font-size: 15px;
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
  color: rgba(255, 255, 255, 0.85);
}

/* Program Days List */
.general-program-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 64px;
}

.program-day-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  transition: border-color 0.2s ease;
}

.program-day-card:hover {
  border-color: rgba(200, 168, 75, 0.4);
}

.day-card-header {
  padding: 32px 36px 24px;
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border-line);
}

.day-badge-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.day-pill {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
  font-size: 12px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 4px;
  letter-spacing: 0.06em;
}

.action-tag {
  background-color: rgba(200, 168, 75, 0.15);
  color: #8c6d1f;
  font-size: 12px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 4px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.date-tag {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 600;
}

.day-card-title {
  font-size: 24px;
  font-weight: 800;
  color: var(--ayif-blue);
  margin: 0;
  line-height: 1.3;
}

.day-card-body {
  padding: 32px 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.narrative-box {
  background-color: rgba(10, 26, 47, 0.02);
  border-left: 4px solid var(--ayif-blue);
  padding: 18px 22px;
  border-radius: 0 6px 6px 0;
}

.narrative-text {
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-page);
  margin: 0;
}

.section-subtitle {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin: 0 0 16px;
}

.points-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--text-page);
}

.bullet-marker {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-gold);
  margin-top: 7px;
  flex-shrink: 0;
}

.point-content {
  flex: 1;
}

.objective-card {
  background-color: var(--bg-surface);
  border: 1px solid rgba(200, 168, 75, 0.3);
  border-radius: 6px;
  padding: 20px 24px;
}

.obj-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #8c6d1f;
  margin-bottom: 6px;
}

.obj-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.55;
  color: var(--ayif-blue);
}

.highlights-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border-line);
  flex-wrap: wrap;
}

.hl-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-muted);
}

.hl-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.hl-tag {
  background-color: rgba(10, 26, 47, 0.06);
  color: var(--ayif-blue);
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
}

/* Banner CTA */
.participate-banner {
  background-color: var(--navy-bg);
  color: var(--navy-text);
  border-radius: 8px;
  padding: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
  border: 1px solid var(--navy-line);
}

.banner-kicker {
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 8px;
}

.banner-title {
  font-size: 26px;
  font-weight: 800;
  color: var(--navy-text);
  margin: 0 0 10px;
}

.banner-text {
  font-size: 15px;
  color: var(--navy-muted);
  max-width: 620px;
  margin: 0;
  line-height: 1.5;
}

.banner-cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn.primary {
  background-color: var(--color-gold);
  color: var(--ayif-blue);
  border: 1px solid var(--color-gold);
}

.btn.primary:hover {
  background-color: #b5933a;
  color: var(--ayif-white);
}

.btn.outline {
  background-color: transparent;
  color: var(--navy-text);
  border: 1px solid var(--navy-line);
}

.btn.outline:hover {
  border-color: var(--ayif-white);
  color: var(--ayif-white);
}

@media (max-width: 1024px) {
  .day-tabs {
    grid-template-columns: repeat(2, 1fr);
  }

  .participate-banner {
    flex-direction: column;
    align-items: flex-start;
  }

  .banner-cta {
    width: 100%;
    flex-direction: row;
  }
}

@media (max-width: 768px) {
  .day-tabs {
    grid-template-columns: 1fr;
  }

  .day-card-header,
  .day-card-body {
    padding: 24px 20px;
  }

  .day-card-title {
    font-size: 20px;
  }

  .banner-cta {
    flex-direction: column;
  }
}
</style>
