<script setup lang="ts">
import { ref, computed } from 'vue'
import { generalProgram, EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'
import type { GeneralProgramDay } from '../types'

useHead({
  title: 'Programme Général Officiel — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Découvrez l’architecture complète et le déroulé détaillé des 3 journées de l’Africa Youth Investment Forum (AYIF) 2026 : Rassembler, Accélérer, Transformer. Cotonou, 03-05 Décembre 2026.'
    }
  ]
})

// Navigation par onglets de journée ('all' ou 1, 2, 3)
const activeDayTab = ref<number | 'all'>('all')

// Déroulé chronologique officiel par créneaux horaires
const dayTimeSlots: Record<number, Array<{ time: string; tag: string; title: string; location: string }>> = {
  1: [
    {
      time: '08h30 — 10h00',
      tag: 'Accueil & Village',
      title: 'Accueil officiel des délégations & Visite inaugurale du Village d’Exhibition',
      location: 'Hall d’Exposition Panafricain'
    },
    {
      time: '10h00 — 11h30',
      tag: 'Cérémonie Solennelle',
      title: 'Ouverture solennelle AYIF 2026 : Honneur aux pays africains, hymnes nationaux du Bénin et du Nigéria',
      location: 'Grand Auditorium Sémè'
    },
    {
      time: '11h30 — 13h00',
      tag: 'Réseautage Stratégique',
      title: 'Petit-déjeuner officiel d’affaires et réseautage entre entrepreneurs, investisseurs et délégations ministérielles',
      location: 'Salons Diplomatiques'
    },
    {
      time: '13h00 — 14h30',
      tag: 'Panel Ministériel',
      title: 'Panel Plénier : Leadership, gouvernance et entrepreneuriat des jeunes en Afrique',
      location: 'Grand Auditorium'
    },
    {
      time: '14h45 — 16h15',
      tag: 'Panel Transfrontalier',
      title: 'Panel : Intégration régionale et corridors transfrontaliers Bénin–Nigéria (Synergies ZLECAf)',
      location: 'Grand Auditorium'
    },
    {
      time: '16h30 — 19h00',
      tag: 'Immersion Terrain',
      title: 'Visite exclusive de terrain de la Zone Industrielle de Glo-Djigbé (GDIZ)',
      location: 'Pôle Économique Spécial GDIZ'
    }
  ],
  2: [
    {
      time: '08h30 — 10h00',
      tag: 'Panel Tech & Capital',
      title: 'Panel : Innovation, Écosystèmes Technologiques & Investissements structurants',
      location: 'Grand Auditorium'
    },
    {
      time: '10h00 — 12h00',
      tag: 'Clinique d’Entreprise',
      title: 'Diagnostic d’entreprise personnalisé et séances de conseil individuel avec le collège d’experts',
      location: 'Pavillons Cliniques AYIF'
    },
    {
      time: '11h30 — 13h00',
      tag: 'Showcase & Démos',
      title: 'Présentation de produits, prototypes et solutions innovantes d’entreprises africaines',
      location: 'Village d’Innovation Technologique'
    },
    {
      time: '14h00 — 15h30',
      tag: 'Masterclass Financement',
      title: 'Clinique d’experts : Préparation au financement, due diligence et capital patient',
      location: 'Salons Deal Rooms Privées'
    },
    {
      time: '15h30 — 17h00',
      tag: 'Masterclass Marchés',
      title: 'Exportation, conformité douanière, accès aux marchés et corridors régionaux',
      location: 'Atelier Stratégique A'
    },
    {
      time: '17h00 — 19h00',
      tag: 'Session Spéciale',
      title: 'Session Spéciale : Les méthodes africaines de levée de fonds & Échanges d’expérience entre pairs',
      location: 'Grand Auditorium Sémè'
    }
  ],
  3: [
    {
      time: '08h30 — 12h00',
      tag: 'Immersion Agro-Industrie',
      title: 'Visite d’une grande plantation d’ananas et de l’usine de transformation Des Fruits Tillous',
      location: 'Pôle Agro-industriel d’Allada'
    },
    {
      time: '12h00 — 15h30',
      tag: 'Patrimoine & Histoire',
      title: 'Sortie touristique, recueillement mémoriel et immersion culturelle à Ouidah',
      location: 'Cité Historique de Ouidah'
    },
    {
      time: '16h00 — 18h30',
      tag: 'Deal Making B2B / B2G',
      title: 'Rencontres B2B, B2G et échanges de haut niveau autour des investissements et partenariats bilatéraux',
      location: 'Salons VIP du Palais des Congrès'
    },
    {
      time: '19h00 — 20h30',
      tag: 'Cérémonie d’Excellence',
      title: 'Cérémonie solennelle de remise des AYIF Awards 2026 & Reconnaissance des partenaires officiels',
      location: 'Grand Palais des Congrès'
    },
    {
      time: '20h30 — 23h30',
      tag: 'Gala Panafricain',
      title: 'Dîner de Gala officiel AYIF : Célébration économique et scellement des alliances continentales',
      location: 'Grand Palais des Congrès'
    }
  ]
}

const filteredDays = computed<GeneralProgramDay[]>(() => {
  if (activeDayTab.value === 'all') {
    return generalProgram
  }
  return generalProgram.filter(d => d.dayNumber === activeDayTab.value)
})
</script>

<template>
  <div class="programme-page">
    <!-- HERO SECTION PRESTIGE (SANS BORDURE BASSE, PATTERN NAVY) -->
    <section class="prog-hero navy">
      <div class="wrap">
        <div class="kicker-group" v-reveal>
          <span class="kicker-gem" aria-hidden="true">◆</span>
          <span class="sub-kicker">Architecture Stratégique du Sommet</span>
        </div>
        <h1 class="hero-title" v-reveal="{ effect: 'up', delay: 80 }">
          Le Programme Officiel · Cotonou 2026
        </h1>
        <p class="hero-lead" v-reveal="{ effect: 'up', delay: 120 }">
          Trois journées structurées pour faire converger l’écosystème continental : de la communion institutionnelle à l’accélération opérationnelle des entreprises, jusqu’à l’immersion productive et la célébration d’excellence.
        </p>
        <div class="meta-strip" v-reveal="{ effect: 'up', delay: 160 }">
          <span class="meta-capsule">{{ EVENT_DATES_LABEL }}</span>
          <span class="meta-capsule">{{ EVENT_LOCATION }}</span>
          <span class="meta-capsule gold">Palais des Congrès</span>
        </div>
      </div>
    </section>

    <!-- SECTION PROGRAMME (MOTIF GÉOMÉTRIQUE CONTINU, SANS CARTE ÉTOUFFANTE) -->
    <section class="prog-container">
      <div class="wrap">
        <!-- GRAND SÉLECTEUR MONUMENTAL DES JOURNÉES -->
        <nav class="master-day-selector" role="tablist" aria-label="Sélectionner une journée" v-reveal>
          <button
            type="button"
            role="tab"
            class="selector-tab-btn"
            :class="{ active: activeDayTab === 'all' }"
            :aria-selected="activeDayTab === 'all'"
            @click="activeDayTab = 'all'"
          >
            <span class="tab-mini-kicker">Vue Globale</span>
            <span class="tab-main-action">Les 3 Journées</span>
            <span class="tab-date-sub">03 — 05 Décembre</span>
          </button>

          <button
            v-for="d in generalProgram"
            :key="d.dayNumber"
            type="button"
            role="tab"
            class="selector-tab-btn"
            :class="{ active: activeDayTab === d.dayNumber }"
            :aria-selected="activeDayTab === d.dayNumber"
            @click="activeDayTab = d.dayNumber"
          >
            <span class="tab-mini-kicker">Acte {{ d.dayNumber === 1 ? 'I' : d.dayNumber === 2 ? 'II' : 'III' }}</span>
            <span class="tab-main-action">{{ d.action }}</span>
            <span class="tab-date-sub">{{ d.dateLabel.split(' ')[0] }} {{ d.dateLabel.split(' ')[1] }}</span>
          </button>
        </nav>

        <!-- LISTE ÉDITORIALE DES JOURNÉES (ARCHITECTURE OUVERTE) -->
        <div class="programme-manifesto-flow">
          <article
            v-for="day in filteredDays"
            :key="day.dayNumber"
            class="day-manifesto-entry"
            v-reveal="{ effect: 'up', delay: 60 }"
          >
            <!-- 1. EN-TÊTE ÉDITORIAL DU JOUR -->
            <header class="manifesto-head">
              <div class="manifesto-meta-top">
                <span class="acte-badge">
                  <span class="gem-bullet" aria-hidden="true">◆</span>
                  <span>JOUR {{ day.dayNumber === 1 ? 'I' : day.dayNumber === 2 ? 'II' : 'III' }} · ACTE {{ day.dayNumber }}</span>
                </span>
                <span class="manifesto-date">{{ day.dateLabel }}</span>
              </div>

              <div class="manifesto-title-lockup">
                <span class="manifesto-action-word">{{ day.actionWord }}</span>
                <h2 class="manifesto-theme-title">{{ day.dayTitle }}</h2>
              </div>

              <p class="manifesto-lead">{{ day.narrative }}</p>

              <!-- CAPSULE OBJECTIF CLÉ -->
              <div class="manifesto-objective-pill">
                <span class="objective-gem" aria-hidden="true">◆</span>
                <div class="objective-content">
                  <strong class="objective-label">Objectif Clé :</strong>
                  <span class="objective-text">{{ day.objective }}</span>
                </div>
              </div>
            </header>

            <!-- 2. CORPS DU JOUR : 2 VOLETS COMPLÉMENTAIRES -->
            <div class="manifesto-split-grid">
              <!-- VOLET GAUCHE : POINTS FORTS & THÉMATIQUES OFFICIELLES DU PROGRAMME REÇU -->
              <div class="manifesto-themes-col">
                <div class="col-head">
                  <span class="col-kicker">Thématiques &amp; Pôles Stratégiques</span>
                  <h3 class="col-title">Au programme de l’Acte {{ day.dayNumber }}</h3>
                </div>

                <div class="official-points-list">
                  <div
                    v-for="(point, pIdx) in day.items"
                    :key="pIdx"
                    class="official-point-item"
                  >
                    <span class="point-gem" aria-hidden="true">✦</span>
                    <span class="point-desc">{{ point }}</span>
                  </div>
                </div>
              </div>

              <!-- VOLET DROIT : DÉROULÉ CHRONOLOGIQUE DES SESSIONS & SALLES -->
              <div class="manifesto-timeline-col">
                <div class="col-head">
                  <span class="col-kicker">Déroulé Chronologique</span>
                  <h3 class="col-title">Séances &amp; Espaces du Sommet</h3>
                </div>

                <div class="sessions-timeline-flow">
                  <div
                    v-for="(slot, sIdx) in dayTimeSlots[day.dayNumber]"
                    :key="sIdx"
                    class="timeline-session-item"
                  >
                    <div class="session-time-block">
                      <span class="time-stamp">{{ slot.time }}</span>
                      <span class="session-tag">{{ slot.tag }}</span>
                    </div>

                    <div class="session-body-block">
                      <h4 class="session-name">{{ slot.title }}</h4>
                      <div class="session-venue">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="venue-pin" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        <span>{{ slot.location }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- BANDEAU PRESTIGE D'ACCRÉDITATION (ZÉRO BORDURE TRONQUANTE) -->
        <div class="participate-manifesto-banner navy" v-reveal="{ effect: 'up', delay: 100 }">
          <div class="banner-narrative">
            <span class="banner-sub-kicker">Rejoignez les Délibérations</span>
            <h2 class="banner-headline">Prenez part aux 3 Journées de Cotonou</h2>
            <p class="banner-description">
              Les accès aux Deal Rooms, à la Clinique entrepreneuriale PME, aux immersions industrielles (GDIZ &amp; Allada) et au Dîner de Gala AYIF sont délivrés selon les accréditations officielles.
            </p>
          </div>
          <div class="banner-action-buttons">
            <NuxtLink to="/reservation" class="btn-manifesto-gold">
              <span>Réserver mon accréditation</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="cta-arrow" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/a-propos" class="btn-manifesto-ghost">
              Découvrir la vision AYIF
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ==========================================================================
   PAGE PROGRAMME GÉNÉRAL — ARCHITECTURE ÉDITORIALE HAUTE-COUTURE
   ZÉRO DÉGRADÉ · ZÉRO BORDURE TRONQUANTE (TOP/LEFT/BOTTOM) · ZÉRO ÉMOJI
   ========================================================================== */
.programme-page {
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
   1. HERO SECTION PROGRAMME (AÉRÉ, PATTERN NAVY, SANS BORDURE BASSE)
   -------------------------------------------------------------------------- */
.prog-hero {
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
   2. CONTENEUR DU PROGRAMME & SÉLECTEUR MONUMENTAL
   -------------------------------------------------------------------------- */
.prog-container {
  padding: 88px 0 120px;
  border: none;
}

/* Ruban Sélecteur Master des Journées */
.master-day-selector {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 72px;
}

.selector-tab-btn {
  background-color: rgba(8, 43, 85, 0.04);
  border: none;
  padding: 22px 20px;
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.selector-tab-btn:hover {
  background-color: rgba(8, 43, 85, 0.08);
  transform: translateY(-2px);
}

.selector-tab-btn.active {
  background-color: var(--navy-bg, #082b55);
  box-shadow: 0 10px 28px rgba(8, 43, 85, 0.16);
}

.tab-mini-kicker {
  font-family: var(--font-sans);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 800;
  color: var(--color-gold, #d9a21b);
}

.tab-main-action {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.2;
}

.tab-date-sub {
  font-family: var(--font-sans);
  font-size: 12.5px;
  color: var(--text-muted);
}

.selector-tab-btn.active .tab-main-action {
  color: #ffffff;
}

.selector-tab-btn.active .tab-date-sub {
  color: rgba(255, 255, 255, 0.78);
}

/* --------------------------------------------------------------------------
   3. FLUX DES JOURNÉES DU PROGRAMME (STYLE MANIFESTE ARCHITECTURAL)
   -------------------------------------------------------------------------- */
.programme-manifesto-flow {
  display: flex;
  flex-direction: column;
  gap: 96px;
  margin-bottom: 96px;
}

.day-manifesto-entry {
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: transparent;
  border: none;
  padding: 0;
}

/* En-tête Éditorial du Jour */
.manifesto-head {
  display: flex;
  flex-direction: column;
}

.manifesto-meta-top {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.acte-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
}

.gem-bullet {
  font-size: 9px;
}

.manifesto-date {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  color: var(--text-muted);
}

.manifesto-title-lockup {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.manifesto-action-word {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-accent, #2ea7f2);
  margin-bottom: 6px;
}

.manifesto-theme-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.4vw, 2.75rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin: 0;
}

.manifesto-lead {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.65;
  color: var(--text-page);
  max-width: 980px;
  margin: 0 0 24px;
}

/* Capsule Objectif Clé (Sans bordures) */
.manifesto-objective-pill {
  display: inline-flex;
  align-items: baseline;
  gap: 12px;
  background-color: rgba(217, 162, 27, 0.1);
  padding: 16px 22px;
  border-radius: 14px;
  border: none;
  max-width: 980px;
}

.objective-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 11px;
}

.objective-content {
  font-family: var(--font-sans);
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--navy-bg, #082b55);
}

.objective-label {
  font-weight: 800;
  margin-right: 6px;
}

.objective-text {
  font-weight: 600;
}

/* --------------------------------------------------------------------------
   4. CORPS EN 2 VOLETS (THÉMATIQUES & TIMELINE DES SESSIONS)
   -------------------------------------------------------------------------- */
.manifesto-split-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 56px;
  align-items: start;
}

.col-head {
  margin-bottom: 24px;
}

.col-kicker {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent, #2ea7f2);
  display: block;
  margin-bottom: 6px;
}

.col-title {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-page);
  letter-spacing: -0.02em;
  margin: 0;
}

/* Volet Gauche : Points Clés Officiels */
.manifesto-themes-col {
  display: flex;
  flex-direction: column;
}

.official-points-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.official-point-item {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 14px 18px;
  background-color: rgba(8, 43, 85, 0.03);
  border-radius: 12px;
  border: none;
  transition: background-color 0.2s ease;
}

.official-point-item:hover {
  background-color: rgba(8, 43, 85, 0.06);
}

.point-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 11px;
  flex-shrink: 0;
}

.point-desc {
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 600;
  line-height: 1.55;
  color: var(--text-page);
}

/* Volet Droit : Timeline Chronologique des Sessions */
.manifesto-timeline-col {
  display: flex;
  flex-direction: column;
}

.sessions-timeline-flow {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.timeline-session-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 22px;
  background-color: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  border: none;
  box-shadow: 0 4px 16px rgba(8, 43, 85, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.timeline-session-item:hover {
  transform: translateX(4px);
  box-shadow: 0 6px 20px rgba(8, 43, 85, 0.06);
}

.session-time-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

.time-stamp {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--color-gold, #d9a21b);
  letter-spacing: -0.01em;
}

.session-tag {
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ayif-blue, #0757b8);
  background-color: rgba(7, 87, 184, 0.08);
  padding: 3px 10px;
  border-radius: 999px;
}

.session-body-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.session-name {
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.4;
  margin: 0;
}

.session-venue {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
}

.venue-pin {
  width: 13px;
  height: 13px;
  color: var(--color-gold, #d9a21b);
}

/* --------------------------------------------------------------------------
   5. BANDEAU PRESTIGE D'ACCRÉDITATION (ZÉRO BORDURE TRONQUANTE)
   -------------------------------------------------------------------------- */
.participate-manifesto-banner {
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: #ffffff;
  border-radius: 24px;
  padding: 56px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  border: none;
  box-shadow: 0 20px 48px rgba(8, 43, 85, 0.18);
}

.banner-narrative {
  max-width: 680px;
}

.banner-sub-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
  margin-bottom: 10px;
}

.banner-headline {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
}

.banner-description {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

.banner-action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

.btn-manifesto-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--color-gold, #d9a21b);
  color: var(--navy-bg, #082b55);
  padding: 16px 28px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
  white-space: nowrap;
}

.btn-manifesto-gold:hover {
  background-color: #c49114;
  transform: translateY(-2px);
}

.btn-manifesto-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 14px 26px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.btn-manifesto-ghost:hover {
  background-color: rgba(255, 255, 255, 0.16);
}

.cta-arrow {
  width: 16px;
  height: 16px;
}

/* --------------------------------------------------------------------------
   6. RESPONSIVE DESIGN FLUIDE
   -------------------------------------------------------------------------- */
@media (max-width: 1024px) {
  .master-day-selector {
    grid-template-columns: repeat(2, 1fr);
  }

  .manifesto-split-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .participate-manifesto-banner {
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 36px;
  }

  .banner-action-buttons {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .master-day-selector {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .banner-action-buttons {
    flex-direction: column;
  }

  .btn-manifesto-gold,
  .btn-manifesto-ghost {
    width: 100%;
  }
}
</style>
