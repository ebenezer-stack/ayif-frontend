<script setup lang="ts">
import { ref, computed } from 'vue'
import { generalProgram } from '../../data/mockData'

const selectedDay = ref<number>(1)

// Points forts structurants par journée (synthétiques et hautement lisibles)
const dayHighlights: Record<number, string[]> = {
  1: [
    'Accueil solennel des délégations & ouverture officielle',
    'Panel bilatéral Bénin–Nigéria : intégration & ZLECAf',
    'Immersion de terrain dans la Zone industrielle de Glo-Djigbé (GDIZ)'
  ],
  2: [
    'Clinique AYIF : diagnostic 360° et conformité fiscale des PME',
    'Salons Deal Rooms fermés avec fonds de capital-risque',
    'Masterclass stratégique : levée de fonds & méthodes africaines'
  ],
  3: [
    'Visite agro-industrielle : usine et plantations Des Fruits Tillous',
    'Immersion culturelle et historique à la Cité mémoire de Ouidah',
    'Dîner de prestige officiel, signatures d’accords & AYIF Awards'
  ]
}

// Répartition des modules horaires pour chaque journée
const dayTimeSlots: Record<number, Array<{ time: string; tag: string; title: string; location?: string }>> = {
  1: [
    { time: '08h30', tag: 'Protocole', title: 'Accueil officiel des délégations, remise des badges VIP et visite du village d’exhibition', location: 'Hall d\'Honneur' },
    { time: '10h00', tag: 'Cérémonial', title: 'Ouverture solennelle avec honneur aux drapeaux et hymnes nationaux du Bénin et du Nigéria', location: 'Salle Plénière Sémè' },
    { time: '11h30', tag: 'Plénière', title: 'Panel de haut niveau : Leadership, gouvernance et entrepreneuriat des jeunes en Afrique', location: 'Amphithéâtre Central' },
    { time: '13h00', tag: 'Networking', title: 'Déjeuner d’affaires et réseautage direct entre investisseurs, ministres et créateurs de valeur', location: 'Espace Salons VIP' },
    { time: '14h30', tag: 'Stratégie', title: 'Panel bilatéral : Intégration régionale, corridors transfrontaliers Bénin–Nigéria et ZLECAf', location: 'Salle Plénière Sémè' },
    { time: '16h30', tag: 'Immersion', title: 'Visite opérationnelle de la Zone industrielle de Glo-Djigbé (GDIZ) et des unités de transformation', location: 'Corridor GDIZ' }
  ],
  2: [
    { time: '09h00', tag: 'Keynote', title: 'Innovation de rupture, écosystèmes technologiques et capitaux patients en Afrique de l’Ouest', location: 'Amphithéâtre Central' },
    { time: '10h30', tag: 'Clinique AYIF', title: 'Diagnostic personnalisé des PME : finance, gouvernance, conformité fiscale et scalabilité', location: 'Pavillon Cliniques' },
    { time: '13h30', tag: 'Deal Rooms', title: 'Sessions fermées de pitch et négociation directe avec les gérants de fonds de capital-risque', location: 'Salons Deal Rooms' },
    { time: '15h30', tag: 'Export', title: 'Masterclass : Accès aux marchés transfrontaliers et levée de fonds selon les méthodes africaines', location: 'Atelier A' },
    { time: '17h00', tag: 'Synthèse', title: 'Synthèse des cliniques d’experts et feuilles de route d’accélération financière', location: 'Salle Plénière Sémè' }
  ],
  3: [
    { time: '09h00', tag: 'Immersion Agro', title: 'Visite de terrain : Plantations d’ananas et usine de transformation agro-industrielle Des Fruits Tillous', location: 'Pôle Agro-industriel' },
    { time: '12h00', tag: 'Patrimoine', title: 'Immersion culturelle et historique à Ouidah : Cité mémoire et convergence des diasporas', location: 'Cité Historique Ouidah' },
    { time: '16h00', tag: 'B2B / B2G', title: 'Rencontres institutionnelles finales, signature de protocoles d’accord et partenariats', location: 'Salons Diplomatiques' },
    { time: '19h30', tag: 'Soirée de Gala', title: 'Dîner de prestige officiel AYIF, remise des AYIF Awards et célébration des alliances', location: 'Grand Palais des Congrès' }
  ]
}

const currentDayData = computed(() => {
  return generalProgram.find(d => d.dayNumber === selectedDay.value) || generalProgram[0]
})
</script>

<template>
  <section class="program-section">
    <div class="wrap program-wrap">
      <!-- EN-TÊTE ÉDITORIAL DU PROGRAMME (MAJESTUEUX & CENTRÉ) -->
      <div v-reveal class="program-header">
        <div class="kicker-wrapper">
          <span class="kicker-star" aria-hidden="true">★</span>
          <span class="sub-kicker">Architecture Officielle du Sommet</span>
        </div>
        <h2 class="program-title">Trois Journées Stratégiques &amp; Opérationnelles</h2>
        <p class="program-lead">
          Un parcours immersif en trois étapes structurantes pour rassembler l'écosystème, accélérer concrètement les entreprises et transformer les opportunités en accords d'investissement durables.
        </p>
      </div>

      <!-- RUBAN MAÎTRE DES 3 JOURNÉES (CARTES-ONGLETS INTERACTIVES TRÈS EXPLICITES) -->
      <div class="days-master-ribbon" role="tablist" aria-label="Sélectionner une journée du sommet">
        <button
          v-for="day in generalProgram"
          :key="day.dayId"
          type="button"
          role="tab"
          :aria-selected="selectedDay === day.dayNumber"
          class="day-treaty-card"
          :class="{ active: selectedDay === day.dayNumber }"
          @click="selectedDay = day.dayNumber"
        >
          <!-- EN-TÊTE DE CARTE : CHRONOLOGIE & CARTOUCHE DU PILIER -->
          <div class="treaty-card-header">
            <div class="treaty-chronometer">
              <span class="chronometer-roman">JOUR {{ day.dayNumber === 1 ? 'I' : day.dayNumber === 2 ? 'II' : 'III' }}</span>
              <span class="chronometer-date">{{ day.dateLabel.split(' ')[0] }} {{ day.dateLabel.split(' ')[1] }}</span>
            </div>

            <!-- CARTOUCHE STÈLE DU PILIER D'ACTION (DESIGN GÉOMÉTRIQUE SOUVERAIN) -->
            <div class="pillar-crest-cartouche" :class="`pillar-type-${day.dayNumber}`">
              <div class="cartouche-icon-box" aria-hidden="true">
                <svg v-if="day.dayNumber === 1" viewBox="0 0 20 20" fill="currentColor" class="p-svg">
                  <!-- Alliance & Convergence : Deux anneaux entrelacés -->
                  <path d="M7 4a5 5 0 00-2.58 9.28A5 5 0 1013 16a5 5 0 002.58-9.28A5 5 0 007 4zm0 2a3 3 0 012.83 2H5.17A3 3 0 017 6zm3 4a2.99 2.99 0 012.83 2h-5.66A2.99 2.99 0 0110 10zm3 4a3 3 0 01-2.83-2h5.66A3 3 0 0113 14z"/>
                </svg>
                <svg v-else-if="day.dayNumber === 2" viewBox="0 0 20 20" fill="currentColor" class="p-svg">
                  <!-- Propulsion & Croissance : Losange à chevron ascendant -->
                  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
                </svg>
                <svg v-else viewBox="0 0 20 20" fill="currentColor" class="p-svg">
                  <!-- Concrétisation & Alliances : Étoile royale à 4 pointes et diamant -->
                  <path d="M10 2l1.9 4.8L17 8.2l-3.8 3.5.9 5.3L10 14.5 5.9 17l.9-5.3L3 8.2l5.1-1.4L10 2z"/>
                </svg>
              </div>
              <div class="cartouche-labels">
                <span class="cartouche-sub">PILIER 0{{ day.dayNumber }}</span>
                <span class="cartouche-action">{{ day.actionWord }}</span>
              </div>
            </div>
          </div>

          <!-- CORPS ÉDITORIAL : TITRE & 3 TEMPS FORTS CONCIS (PAS DE BLOC DE TEXTE INDIGESTE) -->
          <div class="treaty-card-body">
            <h3 class="treaty-day-theme">{{ day.dayTitle }}</h3>
            <ul class="treaty-highlights-list" role="list">
              <li
                v-for="(point, pIdx) in dayHighlights[day.dayNumber]"
                :key="pIdx"
                class="highlight-item"
              >
                <span class="highlight-pip" aria-hidden="true">◆</span>
                <span class="highlight-text">{{ point }}</span>
              </li>
            </ul>
          </div>

          <!-- VRAI BOUTON D'ACTION EXPLICITE (COMPRÉHENSIBLE PAR TOUS) -->
          <div class="treaty-action-footer">
            <div
              class="treaty-action-btn"
              :class="{ 'is-selected': selectedDay === day.dayNumber }"
            >
              <svg
                v-if="selectedDay === day.dayNumber"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="btn-state-icon"
                aria-hidden="true"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="btn-text">
                {{ selectedDay === day.dayNumber ? 'Programme actuellement affiché' : `Afficher le programme Jour ${day.dayNumber}` }}
              </span>
              <span class="btn-arrow" aria-hidden="true">
                {{ selectedDay === day.dayNumber ? '↓' : '→' }}
              </span>
            </div>
          </div>

          <!-- POINTEUR D'ANCRAGE SOUS LA CARTE ACTIVE (POINTE VERS LE PROGRAMME CI-DESSOUS) -->
          <div v-if="selectedDay === day.dayNumber" class="active-anchor-caret" aria-hidden="true"></div>
        </button>
      </div>

      <!-- CONTENU DU DÉROULÉ HORAIRE -->
      <div class="day-chronicle-stage">
        <!-- BANDEAU EXÉCUTIF DU MANDAT STRATÉGIQUE -->
        <div class="executive-mandate-banner">
          <div class="mandate-left">
            <div class="mandate-tag-row">
              <span class="mandate-crest" aria-hidden="true">★</span>
              <span class="mandate-label">Mandat Stratégique Officiel · Jour {{ selectedDay === 1 ? 'I' : selectedDay === 2 ? 'II' : 'III' }}</span>
            </div>
            <p class="mandate-quote">
              « {{ currentDayData?.objective }} »
            </p>
          </div>
          <div class="mandate-right">
            <span class="mandate-venue-badge">
              <svg viewBox="0 0 20 20" fill="currentColor" class="venue-pin" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span>Palais des Congrès de Cotonou</span>
            </span>

            <!-- CARTOUCHE DU PILIER ACTIF -->
            <div class="pillar-crest-cartouche" :class="`pillar-type-${selectedDay}`">
              <div class="cartouche-icon-box" aria-hidden="true">
                <svg v-if="selectedDay === 1" viewBox="0 0 20 20" fill="currentColor" class="p-svg">
                  <path d="M7 4a5 5 0 00-2.58 9.28A5 5 0 1013 16a5 5 0 002.58-9.28A5 5 0 007 4zm0 2a3 3 0 012.83 2H5.17A3 3 0 017 6zm3 4a2.99 2.99 0 012.83 2h-5.66A2.99 2.99 0 0110 10zm3 4a3 3 0 01-2.83-2h5.66A3 3 0 0113 14z"/>
                </svg>
                <svg v-else-if="selectedDay === 2" viewBox="0 0 20 20" fill="currentColor" class="p-svg">
                  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
                </svg>
                <svg v-else viewBox="0 0 20 20" fill="currentColor" class="p-svg">
                  <path d="M10 2l1.9 4.8L17 8.2l-3.8 3.5.9 5.3L10 14.5 5.9 17l.9-5.3L3 8.2l5.1-1.4L10 2z"/>
                </svg>
              </div>
              <div class="cartouche-labels">
                <span class="cartouche-sub">PILIER 0{{ selectedDay }}</span>
                <span class="cartouche-action">{{ currentDayData?.actionWord }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- AXE CHRONOLOGIQUE VERTICAL (TIMELINE DIPLOMATIQUE) -->
        <div class="chronicle-timeline">
          <div class="timeline-axis-line" aria-hidden="true"></div>

          <div
            v-for="(slot, sIdx) in (dayTimeSlots[selectedDay] || [])"
            :key="sIdx"
            class="timeline-row-item"
          >
            <!-- COLONNE HEURE & NŒUD -->
            <div class="row-time-col">
              <div class="time-stamp-box">
                <span class="time-value">{{ slot.time }}</span>
              </div>
              <div class="time-node-anchor" aria-hidden="true">
                <div class="node-diamond">◆</div>
              </div>
            </div>

            <!-- CARTE DE SESSION CHRONOLOGIQUE -->
            <div class="row-session-card">
              <div class="session-card-header">
                <span class="session-category-badge">{{ slot.tag }}</span>
                <span v-if="slot.location" class="session-venue-sub">{{ slot.location }}</span>
              </div>
              <h4 class="session-title">{{ slot.title }}</h4>
            </div>
          </div>
        </div>
      </div>

      <!-- BAS DE SECTION : BANDEAU PROTOCOLAIRE ET CTA DÉTAILLÉ -->
      <div v-reveal class="program-footer-bar">
        <div class="footer-meta-info">
          <span class="meta-dates">03 au 05 Décembre 2026</span>
          <span class="meta-dot">·</span>
          <span class="meta-location">Palais des Congrès de Cotonou, République du Bénin</span>
        </div>
        <NuxtLink to="/programme" class="btn-prog-primary">
          <span>Consulter le programme général complet</span>
          <svg viewBox="0 0 20 20" fill="currentColor" class="prog-arrow" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   PROGRAM SECTION — REDESIGN ARCHITECTURAL SOUVERAIN (ZÉRO DÉGRADÉ)
   ========================================================================== */
.program-section {
  position: relative;
  padding: 104px 0 112px;
  background-color: var(--bg-page);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
  border-top: 1px solid var(--border-line);
}

.program-wrap {
  max-width: 1240px;
}

/* ==========================================================================
   EN-TÊTE ÉDITORIAL DU PROGRAMME (CENTRÉ & PRESTIGIEUX)
   ========================================================================== */
.program-header {
  text-align: center;
  max-width: 860px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.kicker-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.kicker-star {
  color: var(--color-gold);
  font-size: 13px;
}

.sub-kicker {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.program-title {
  font-family: var(--font-serif);
  font-size: clamp(2.1rem, 3.6vw, 2.85rem);
  font-weight: 700;
  color: var(--text-page);
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 16px 0;
}

.program-lead {
  font-family: var(--font-sans);
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 0 24px 0;
}

/* ==========================================================================
   RUBAN MAÎTRE DES 3 JOURNÉES (TRAITÉ DIPLOMATIQUE — CARTES-ONGLETS)
   ========================================================================== */
.days-master-ribbon {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 24px;
}

.day-treaty-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 26px 20px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px rgba(8, 43, 85, 0.04);
}

.day-treaty-card:hover {
  border-color: var(--ayif-blue);
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(8, 43, 85, 0.09);
}

/* État actif souverain : plein aplat bleu marine, liseré or */
.day-treaty-card.active {
  background-color: var(--ayif-navy);
  border-color: var(--color-gold);
  border-width: 1.5px;
  box-shadow: 0 14px 34px rgba(8, 43, 85, 0.24);
  transform: translateY(-2px);
}

/* Flèche d'ancrage sous la carte active (pointe vers le programme affiché ci-dessous) */
.active-anchor-caret {
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 9px solid var(--color-gold);
  z-index: 5;
}

/* En-tête de carte : Date + Cartouche */
.treaty-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.treaty-chronometer {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.chronometer-roman {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.day-treaty-card.active .chronometer-roman {
  color: var(--color-gold);
}

.chronometer-date {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 800;
  color: var(--ayif-navy);
  letter-spacing: -0.01em;
}

:root.dark .chronometer-date,
.dark .chronometer-date {
  color: #FFFFFF;
}

.day-treaty-card.active .chronometer-date {
  color: #FFFFFF;
}

/* ==========================================================================
   CARTOUCHE STÈLE DU PILIER D'ACTION (NOUVEAU DESIGN SOUVERAIN HORS IA)
   ========================================================================== */
.pillar-crest-cartouche {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 6px 12px 6px 10px;
  background-color: #F1F5F9;
  border: 1px solid rgba(8, 43, 85, 0.16);
  border-radius: 4px;
  clip-path: polygon(4px 0%, 100% 0%, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0% 100%, 0% 4px);
  transition: all 0.2s ease;
  flex-shrink: 0;
}

:root.dark .pillar-crest-cartouche,
.dark .pillar-crest-cartouche {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.14);
}

/* Dans la carte active ou le bandeau mandat : cartouche or & fond nocturne profond */
.day-treaty-card.active .pillar-crest-cartouche,
.executive-mandate-banner .pillar-crest-cartouche {
  background-color: #041224;
  border-color: var(--color-gold);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
}

.cartouche-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background-color: rgba(8, 43, 85, 0.08);
  border-radius: 3px;
  flex-shrink: 0;
  color: var(--ayif-blue);
}

:root.dark .cartouche-icon-box,
.dark .cartouche-icon-box {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-gold);
}

.day-treaty-card.active .cartouche-icon-box,
.executive-mandate-banner .cartouche-icon-box {
  background-color: rgba(217, 162, 27, 0.18);
  color: var(--color-gold);
}

.p-svg {
  width: 14px;
  height: 14px;
}

.cartouche-labels {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  text-align: left;
}

.cartouche-sub {
  font-family: var(--font-sans);
  font-size: 8.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.day-treaty-card.active .cartouche-sub,
.executive-mandate-banner .cartouche-sub {
  color: rgba(217, 162, 27, 0.85);
}

.cartouche-action {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ayif-navy);
}

:root.dark .cartouche-action,
.dark .cartouche-action {
  color: #FFFFFF;
}

.day-treaty-card.active .cartouche-action,
.executive-mandate-banner .cartouche-action {
  color: #FFFFFF;
}

/* Corps de la carte */
.treaty-card-body {
  margin-bottom: 20px;
}

.treaty-day-theme {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.25;
  margin: 0 0 12px 0;
}

.day-treaty-card.active .treaty-day-theme {
  color: #FFFFFF;
}

/* Liste des 3 temps forts concis */
.treaty-highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: 12px;
  line-height: 1.4;
  color: var(--text-muted);
}

.day-treaty-card.active .highlight-item {
  color: #CBD5E1;
}

.highlight-pip {
  font-size: 8px;
  color: var(--color-gold);
  margin-top: 3px;
  flex-shrink: 0;
}

.highlight-text {
  flex: 1;
}

/* ==========================================================================
   BOUTON D'ACTION DANS LA CARTE (AFFORDANCE DE CLIC TRÈS FORTE)
   ========================================================================== */
.treaty-action-footer {
  padding-top: 14px;
  border-top: 1px dashed rgba(8, 43, 85, 0.12);
}

:root.dark .treaty-action-footer,
.dark .treaty-action-footer {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.day-treaty-card.active .treaty-action-footer {
  border-top-color: rgba(217, 162, 27, 0.3);
}

.treaty-action-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 9px 14px;
  border-radius: 6px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
  background-color: rgba(8, 43, 85, 0.05);
  border: 1px solid rgba(8, 43, 85, 0.14);
  color: var(--ayif-navy);
}

:root.dark .treaty-action-btn,
.dark .treaty-action-btn {
  background-color: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.16);
  color: #FFFFFF;
}

.day-treaty-card:hover .treaty-action-btn:not(.is-selected) {
  background-color: var(--ayif-blue);
  border-color: var(--ayif-blue);
  color: #FFFFFF;
}

/* Bouton actif sélectionné */
.treaty-action-btn.is-selected {
  background-color: var(--color-gold);
  border-color: var(--color-gold);
  color: #041224;
  box-shadow: 0 2px 8px rgba(217, 162, 27, 0.4);
}

.btn-state-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: #041224;
}

.btn-arrow {
  font-weight: 800;
  font-size: 13px;
  transition: transform 0.2s ease;
}

.day-treaty-card:hover .btn-arrow {
  transform: translateX(3px);
}

.treaty-action-btn.is-selected .btn-arrow {
  transform: translateY(2px);
}

/* ==========================================================================
   SCÈNE DU DÉROULÉ HORAIRE
   ========================================================================== */
.day-chronicle-stage {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Bandeau Exécutif du Mandat Stratégique */
.executive-mandate-banner {
  background-color: var(--ayif-navy);
  border: 1px solid rgba(217, 162, 27, 0.4);
  border-radius: 8px;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
  box-shadow: 0 8px 24px rgba(8, 43, 85, 0.16);
}

.mandate-left {
  flex: 1;
  min-width: 280px;
}

.mandate-tag-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.mandate-crest {
  color: var(--color-gold);
  font-size: 12px;
}

.mandate-label {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.mandate-quote {
  font-family: var(--font-serif);
  font-size: 15.5px;
  line-height: 1.55;
  color: #E6EFF8;
  font-style: italic;
  margin: 0;
}

.mandate-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.mandate-venue-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 5px 12px;
  border-radius: 4px;
}

.venue-pin {
  width: 14px;
  height: 14px;
  color: var(--color-accent);
}

/* ==========================================================================
   AXE CHRONOLOGIQUE VERTICAL (TIMELINE DIPLOMATIQUE)
   ========================================================================== */
.chronicle-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 0;
}

.timeline-axis-line {
  position: absolute;
  top: 24px;
  bottom: 24px;
  left: 118px;
  width: 2px;
  background-color: rgba(217, 162, 27, 0.35);
}

.timeline-row-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 28px;
  z-index: 2;
}

.row-time-col {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  flex-shrink: 0;
}

.time-stamp-box {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 8px 14px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(8, 43, 85, 0.04);
}

.time-value {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 800;
  color: var(--ayif-navy);
  letter-spacing: 0.02em;
}

:root.dark .time-value,
.dark .time-value {
  color: var(--color-gold);
}

.time-node-anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: var(--bg-page);
  border-radius: 50%;
}

.node-diamond {
  font-size: 12px;
  color: var(--color-gold);
  line-height: 1;
}

.row-session-card {
  flex: 1;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 6px;
  padding: 18px 24px;
  transition: all 0.22s ease;
  box-shadow: 0 3px 10px rgba(8, 43, 85, 0.03);
}

.row-session-card:hover {
  border-color: var(--color-gold);
  transform: translateX(4px);
  box-shadow: 0 6px 18px rgba(8, 43, 85, 0.08);
}

.session-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

.session-category-badge {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ayif-blue);
  background-color: rgba(7, 87, 184, 0.09);
  border: 1px solid rgba(7, 87, 184, 0.2);
  padding: 3px 9px;
  border-radius: 3px;
}

:root.dark .session-category-badge,
.dark .session-category-badge {
  color: var(--ayif-sky);
  background-color: rgba(46, 167, 242, 0.12);
  border-color: rgba(46, 167, 242, 0.25);
}

.session-venue-sub {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
}

.session-title {
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 600;
  color: var(--text-page);
  line-height: 1.45;
  margin: 0;
}

/* ==========================================================================
   BAS DE SECTION : BANDEAU PROTOCOLAIRE ET CTA
   ========================================================================== */
.program-footer-bar {
  margin-top: 48px;
  padding: 24px 32px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  box-shadow: 0 4px 16px rgba(8, 43, 85, 0.04);
}

.footer-meta-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  flex-wrap: wrap;
}

.meta-dates {
  color: var(--ayif-blue);
  font-weight: 800;
}

:root.dark .meta-dates,
.dark .meta-dates {
  color: var(--ayif-sky);
}

.meta-dot {
  color: var(--color-gold);
}

.btn-prog-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background-color: var(--ayif-navy);
  color: #FFFFFF;
  border-radius: 99px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(8, 43, 85, 0.2);
  transition: all 0.22s ease;
}

.btn-prog-primary:hover {
  background-color: var(--ayif-blue);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(7, 87, 184, 0.3);
}

.prog-arrow {
  width: 15px;
  height: 15px;
  color: var(--color-gold);
  transition: transform 0.2s ease;
}

.btn-prog-primary:hover .prog-arrow {
  transform: translateX(4px);
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */

@media (max-width: 768px) {
  .days-master-ribbon {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .active-anchor-caret {
    display: none;
  }

  .timeline-axis-line {
    left: 20px;
  }

  .timeline-row-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-left: 48px;
  }

  .row-time-col {
    width: auto;
  }

  .time-node-anchor {
    position: absolute;
    left: 9px;
    top: 8px;
  }

  .executive-mandate-banner {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .program-footer-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-prog-primary {
    width: 100%;
    justify-content: center;
  }
}
</style>
