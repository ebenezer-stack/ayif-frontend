<script setup lang="ts">
import { nigeriaStats, nigeriaGallery, nigeriaHighlights } from '../../data/mockData'
import AnimatedCounter from '../common/AnimatedCounter.vue'

// Métadonnées enrichies des stèles de réalisations
const statStelae = [
  {
    tag: 'Délégations & Décideurs',
    value: '420',
    unit: 'Délégués',
    label: 'Participants Stratégiques Réunis',
    detail: 'Ministres, gérants de fonds, business angels et fondateurs industriels accrédités à l’AICC d’Abuja.',
    icon: 'delegates'
  },
  {
    tag: 'Convergence Régionale',
    value: '14',
    unit: 'Nations',
    label: 'Pays d’Afrique de l’Ouest & Centrale',
    detail: 'Une coalition transfrontalière historique scellant l’alliance entre zones anglophones et francophones.',
    icon: 'nations'
  },
  {
    tag: 'Accords Structurés',
    value: '$8.4M+',
    unit: 'Engagements',
    label: 'Volume d’Investissements Négociés',
    detail: 'Capitaux mobilisés et intentions d’investissement signées sous protocole de Deal Room confidentielle.',
    icon: 'capital'
  }
]
</script>

<template>
  <section class="nigeria-retrospective-section" aria-label="Rétrospective historique de l'édition AYIF Nigeria 2025">
    <!-- FILIGRANE GÉOMÉTRIQUE PANAFRICAIN EN ARRIÈRE-PLAN (ZÉRO DÉGRADÉ) -->
    <div class="retrospective-pattern-overlay" aria-hidden="true"></div>

    <div class="wrap retro-wrap">
      <!-- BANDEAU PROTOCOLAIRE : L'AXE HISTORIQUE ABUJA 2025 ⇄ COTONOU 2026 -->
      <div v-reveal class="bilateral-corridor-ribbon">
        <div class="corridor-flag-group">
          <span class="corridor-flag">ABUJA 2025</span>
          <span class="corridor-axis-divider" aria-hidden="true">
            <span class="corridor-line"></span>
            <span class="corridor-diamond">◆</span>
            <span class="corridor-line"></span>
          </span>
          <span class="corridor-flag">COTONOU 2026</span>
        </div>
        <span class="corridor-motto">ACTE FONDATEUR · CONTINUITÉ INSTITUTIONNELLE DU SOMMET</span>
      </div>

      <!-- EN-TÊTE ÉDITORIAL MAJESTUEUX -->
      <div v-reveal class="retro-header-band">
        <div class="header-left">
          <div class="kicker-group">
            <span class="kicker-star" aria-hidden="true">★</span>
            <span class="retro-sub-kicker">Rétrospective &amp; Héritage</span>
          </div>
          <h2 class="retro-title">L’Héritage d’Abuja : Le Socle Panafricain</h2>
          <p class="retro-lead">
            En novembre 2025, la capitale fédérale du Nigéria a accueilli la session inaugurale historique de l’Africa Youth Investment Forum sous l’égide de NACCIMA Youth Entrepreneurs. Trois journées d'engagements concrets, de deal rooms bilatérales et d'alliances stratégiques qui ont posé les fondations du corridor d'investissement transfrontalier.
          </p>
        </div>

        <div class="header-right">
          <NuxtLink to="/editions/abuja-2025" class="btn-retro-acts">
            <span>Consulter les Actes d’Abuja 2025</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="btn-arrow-icon" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- LES 3 STÈLES MÉTRIQUES DE RÉALISATIONS (STYLE ARCHITECTURAL SOUVERAIN) -->
      <div class="retro-stelae-grid">
        <article
          v-for="(stela, idx) in statStelae"
          :key="stela.tag"
          v-reveal="{ effect: 'up', delay: idx * 120 }"
          class="metric-stela-card"
        >
          <!-- COIN SUPÉRIEUR DIPLOMATIQUE -->
          <div class="stela-top-bar">
            <span class="stela-tag-pill">{{ stela.tag }}</span>
            <span class="stela-index">ACTE 0{{ idx + 1 }}</span>
          </div>

          <!-- CHIFFRE & UNITÉ -->
          <div class="stela-value-row">
            <span class="stela-number">
              <AnimatedCounter :value="stela.value" />
            </span>
            <span class="stela-unit-badge">{{ stela.unit }}</span>
          </div>

          <!-- INTITULÉ ET DÉTAIL D'IMPACT -->
          <h3 class="stela-label">{{ stela.label }}</h3>
          <p class="stela-detail">{{ stela.detail }}</p>

          <!-- BORDURE ET LISERÉ D'HONNEUR -->
          <div class="stela-bottom-seal" aria-hidden="true">
            <span class="seal-line"></span>
            <span class="seal-pip">◆</span>
          </div>
        </article>
      </div>

      <!-- TRIPTYQUE DES RÉSOLUTIONS HISTORIQUES D'ABUJA -->
      <div v-reveal class="resolutions-dossier-box">
        <div class="resolutions-header">
          <div class="res-tag-wrap">
            <span class="res-crest" aria-hidden="true">★</span>
            <span class="res-kicker">Piliers d’Héritage Institutionnel</span>
          </div>
          <h3 class="res-title">Trois Conquêtes Majeures de la Session Inaugurale</h3>
        </div>

        <div class="resolutions-grid">
          <div
            v-for="(item, i) in nigeriaHighlights"
            :key="i"
            class="resolution-item"
          >
            <div class="res-item-num">0{{ i + 1 }}</div>
            <div class="res-item-body">
              <h4 class="res-item-title">{{ item.title }}</h4>
              <p class="res-item-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- SCÉNOGRAPHIE DES ARCHIVES PHOTOGRAPHIQUES OFFICIELLES -->
      <div class="gallery-exhibition-stage">
        <div v-reveal class="exhibition-header">
          <div class="exh-title-group">
            <span class="exh-sub-kicker">Archives Iconographiques Officielles</span>
            <h3 class="exh-heading">Témoignages Visuels d’Abuja 2025</h3>
          </div>
          <p class="exh-lead">
            Moments solennels capturés lors des cérémonies protocolaires, des négociations bilatérales et de la soirée de gala au Palais International des Congrès d’Abuja (AICC).
          </p>
        </div>

        <div class="exhibition-grid">
          <figure
            v-for="(item, idx) in nigeriaGallery"
            :key="idx"
            v-reveal="{ effect: 'up', delay: idx * 100 }"
            class="archive-plaque-card"
          >
            <!-- CADRE DU CLICHÉ OFFICIEL -->
            <div class="plaque-media-frame">
              <img
                :src="item.image"
                :alt="item.title"
                loading="lazy"
                class="plaque-photo"
              />
              <!-- BANDEAU TIMBRE D'ARCHIVE -->
              <div class="archive-stamp-chip">
                <span class="stamp-text">CLICHÉ 0{{ idx + 1 }} · ARCHIVE</span>
              </div>
            </div>

            <!-- FICHE D'AUTHENTICITÉ DU CLICHÉ -->
            <figcaption class="plaque-caption-body">
              <div class="caption-venue-row">
                <svg viewBox="0 0 20 20" fill="currentColor" class="venue-svg" aria-hidden="true">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span class="venue-text">Abuja International Conference Centre (AICC)</span>
              </div>
              <h4 class="caption-title">{{ item.title }}</h4>
              <p class="caption-description">{{ item.caption }}</p>
            </figcaption>
          </figure>
        </div>
      </div>

      <!-- BANDEAU DE TRANSMISSION DU FLAMBEAU : VERS COTONOU 2026 -->
      <div v-reveal class="torch-transmission-banner">
        <div class="torch-left">
          <span class="torch-kicker">Le Relais Panafricain</span>
          <h3 class="torch-title">D’Abuja 2025 à Bénin 2026 : L’Élan se Déploie</h3>
          <p class="torch-quote">
            « Le succès d’Abuja a établi la preuve de concept. Cotonou 2026 en matérialise l’accélération à l’échelle de l’Afrique entière. »
          </p>
        </div>
        <div class="torch-actions">
          <NuxtLink to="/editions/abuja-2025" class="btn-torch-secondary">
            Explorer le bilan complet 2025
          </NuxtLink>
          <NuxtLink to="/reservation" class="btn-torch-primary">
            <span>Prendre part à l’Édition 2026</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-tiny" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   RÉTROSPECTIVE NIGERIA 2025 — ARCHITECTURE ÉDITORIALE SOUVERAINE (ZÉRO DÉGRADÉ)
   ========================================================================== */
.nigeria-retrospective-section {
  position: relative;
  padding: 104px 0 112px;
  background-color: var(--ayif-bg-dark, #041224);
  color: #FFFFFF;
  border-top: 1px solid rgba(217, 162, 27, 0.35);
  border-bottom: 1px solid rgba(217, 162, 27, 0.25);
  overflow: hidden;
}

/* Filigrane géométrique diplomatique en SVG pur (zéro dégradé) */
.retrospective-pattern-overlay {
  position: absolute;
  inset: 0;
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  opacity: 0.04;
  pointer-events: none;
}

.retro-wrap {
  position: relative;
  z-index: 2;
  max-width: 1240px;
}

/* ==========================================================================
   RUBAN DU PONT BILATÉRAL (ABUJA ⇄ COTONOU)
   ========================================================================== */
.bilateral-corridor-ribbon {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  padding: 7px 18px;
  background-color: #07203E;
  border: 1px solid rgba(217, 162, 27, 0.4);
  border-radius: 99px;
  margin-bottom: 32px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
}

.corridor-flag-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.corridor-flag {
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--color-gold);
}

.corridor-axis-divider {
  display: flex;
  align-items: center;
  gap: 6px;
}

.corridor-line {
  display: inline-block;
  width: 14px;
  height: 1px;
  background-color: rgba(217, 162, 27, 0.5);
}

.corridor-diamond {
  font-size: 8px;
  color: var(--color-gold);
}

.corridor-motto {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #CBD5E1;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 14px;
}

/* ==========================================================================
   EN-TÊTE ÉDITORIAL DU CHAPITRE HISTORIQUE
   ========================================================================== */
.retro-header-band {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
  margin-bottom: 52px;
}

.header-left {
  max-width: 820px;
}

.kicker-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.kicker-star {
  color: var(--color-gold);
  font-size: 13px;
}

.retro-sub-kicker {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.retro-title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 3.8vw, 3rem);
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 16px 0;
}

.retro-lead {
  font-family: var(--font-sans);
  font-size: 15.5px;
  line-height: 1.65;
  color: #CBD5E1;
  margin: 0;
}

.header-right {
  flex-shrink: 0;
}

.btn-retro-acts {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 24px;
  background-color: #07203E;
  border: 1px solid var(--color-gold);
  border-radius: 99px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  color: var(--color-gold);
  text-decoration: none;
  transition: all 0.22s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

.btn-retro-acts:hover {
  background-color: var(--color-gold);
  color: #041224;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(217, 162, 27, 0.35);
}

.btn-arrow-icon {
  width: 15px;
  height: 15px;
  transition: transform 0.2s ease;
}

.btn-retro-acts:hover .btn-arrow-icon {
  transform: translateX(4px);
}

/* ==========================================================================
   LES 3 STÈLES MÉTRIQUES (MONOLITHES D'IMPACT)
   ========================================================================== */
.retro-stelae-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 56px;
}

.metric-stela-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #07203E;
  border: 1px solid rgba(217, 162, 27, 0.35);
  border-radius: 8px;
  padding: 30px 28px 26px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.metric-stela-card:hover {
  border-color: var(--color-gold);
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

.stela-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.stela-tag-pill {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  background-color: rgba(217, 162, 27, 0.12);
  border: 1px solid rgba(217, 162, 27, 0.35);
  padding: 3px 9px;
  border-radius: 4px;
}

.stela-index {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.5);
}

.stela-value-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
}

.stela-number {
  font-family: var(--font-serif);
  font-size: clamp(2.8rem, 4.2vw, 3.8rem);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1;
  letter-spacing: -0.03em;
}

.stela-unit-badge {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ayif-sky, #2EA7F2);
  background-color: rgba(46, 167, 242, 0.12);
  border: 1px solid rgba(46, 167, 242, 0.28);
  padding: 3px 8px;
  border-radius: 4px;
}

.stela-label {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-gold);
  line-height: 1.3;
  margin: 0 0 8px 0;
}

.stela-detail {
  font-family: var(--font-sans);
  font-size: 13px;
  line-height: 1.55;
  color: #CBD5E1;
  margin: 0 0 20px 0;
  flex: 1;
}

.stela-bottom-seal {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}

.seal-line {
  flex: 1;
  height: 1px;
  background-color: rgba(217, 162, 27, 0.2);
}

.seal-pip {
  font-size: 8px;
  color: var(--color-gold);
}

/* ==========================================================================
   DOSSIER DES 3 RÉSOLUTIONS MAJEURES D'ABUJA
   ========================================================================== */
.resolutions-dossier-box {
  background-color: #07203E;
  border: 1px solid rgba(217, 162, 27, 0.4);
  border-radius: 8px;
  padding: 36px 36px 32px;
  margin-bottom: 68px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
}

.resolutions-header {
  margin-bottom: 28px;
  border-bottom: 1px solid rgba(217, 162, 27, 0.25);
  padding-bottom: 16px;
}

.res-tag-wrap {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.res-crest {
  color: var(--color-gold);
  font-size: 12px;
}

.res-kicker {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.res-title {
  font-family: var(--font-serif);
  font-size: 21px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
}

.resolutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.resolution-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.res-item-num {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 800;
  color: var(--color-gold);
  background-color: rgba(217, 162, 27, 0.14);
  border: 1px solid rgba(217, 162, 27, 0.4);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.res-item-body {
  flex: 1;
}

.res-item-title {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 6px 0;
  line-height: 1.3;
}

.res-item-desc {
  font-family: var(--font-sans);
  font-size: 13px;
  line-height: 1.5;
  color: #CBD5E1;
  margin: 0;
}

/* ==========================================================================
   SCÉNOGRAPHIE DES ARCHIVES PHOTOGRAPHIQUES OFFICIELLES
   ========================================================================== */
.gallery-exhibition-stage {
  margin-bottom: 64px;
}

.exhibition-header {
  margin-bottom: 32px;
}

.exh-title-group {
  margin-bottom: 8px;
}

.exh-sub-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 6px;
}

.exh-heading {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
}

.exh-lead {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.6;
  color: #CBD5E1;
  max-width: 820px;
  margin: 0;
}

.exhibition-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.archive-plaque-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #07203E;
  border: 1px solid rgba(217, 162, 27, 0.35);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  margin: 0;
}

.archive-plaque-card:hover {
  border-color: var(--color-gold);
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
}

.plaque-media-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 11;
  background-color: #041224;
  overflow: hidden;
}

.plaque-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.archive-plaque-card:hover .plaque-photo {
  transform: scale(1.05);
}

/* Timbre d'archive officiel */
.archive-stamp-chip {
  position: absolute;
  top: 10px;
  left: 10px;
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  background-color: #041224;
  border: 1px solid var(--color-gold);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.stamp-text {
  font-family: var(--font-sans);
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.plaque-caption-body {
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.caption-venue-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 700;
  color: var(--color-gold);
  letter-spacing: 0.04em;
}

.venue-svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  color: var(--color-gold);
}

.caption-title {
  font-family: var(--font-serif);
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.3;
  margin: 0;
}

.caption-description {
  font-family: var(--font-sans);
  font-size: 12.5px;
  line-height: 1.45;
  color: #CBD5E1;
  margin: 0;
}

/* ==========================================================================
   BANDEAU DE TRANSMISSION DU FLAMBEAU : VERS BÉNIN 2026
   ========================================================================== */
.torch-transmission-banner {
  background-color: #07203E;
  border: 1px solid var(--color-gold);
  border-radius: 8px;
  padding: 36px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.4);
}

.torch-left {
  flex: 1;
  min-width: 300px;
}

.torch-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 6px;
}

.torch-title {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 8px 0;
  line-height: 1.25;
}

.torch-quote {
  font-family: var(--font-serif);
  font-size: 14.5px;
  font-style: italic;
  line-height: 1.55;
  color: #E6EFF8;
  margin: 0;
}

.torch-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-torch-secondary {
  padding: 12px 20px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 99px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-torch-secondary:hover {
  border-color: #FFFFFF;
  background-color: rgba(255, 255, 255, 0.08);
}

.btn-torch-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: var(--color-gold);
  color: #041224;
  border-radius: 99px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(217, 162, 27, 0.35);
  transition: all 0.22s ease;
}

.btn-torch-primary:hover {
  background-color: #FFFFFF;
  color: #041224;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(255, 255, 255, 0.3);
}

.arrow-tiny {
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
}

.btn-torch-primary:hover .arrow-tiny {
  transform: translateX(3px);
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 1024px) {
  .retro-stelae-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .resolutions-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .exhibition-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .nigeria-retrospective-section {
    padding: 72px 0;
  }

  .retro-header-band {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .btn-retro-acts {
    width: 100%;
    justify-content: center;
  }

  .exhibition-grid {
    grid-template-columns: 1fr;
  }

  .resolutions-dossier-box {
    padding: 24px 20px;
  }

  .torch-transmission-banner {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 20px;
    gap: 20px;
  }

  .torch-actions {
    width: 100%;
    flex-direction: column;
  }

  .btn-torch-secondary,
  .btn-torch-primary {
    width: 100%;
    justify-content: center;
  }
}
</style>
