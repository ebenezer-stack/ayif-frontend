<script setup lang="ts">
import { ref, computed } from 'vue'
import { sponsors, officialPartners } from '../../data/mockData'

const loop = [...sponsors, ...sponsors]

const activeFilter = ref<string>('all')

const filterOptions = [
  { id: 'all', label: 'Toute la Coalition (12)' },
  { id: 'titre', label: 'Partenaires Titre & Bailleurs' },
  { id: 'fonds', label: 'Fonds VC & Capital-Investissement' },
  { id: 'industrie', label: 'Industrie, Tech & Agro' }
]

const filteredPartners = computed(() => {
  if (activeFilter.value === 'all') return officialPartners
  if (activeFilter.value === 'titre') {
    return officialPartners.filter(p => 
      p.category.includes('Titre') || 
      p.category.includes('Bailleur') || 
      p.tierBadge.includes('Platine')
    )
  }
  if (activeFilter.value === 'fonds') {
    return officialPartners.filter(p => 
      p.category.includes('Fonds') || 
      p.category.includes('Angels') || 
      p.category.includes('FinTech')
    )
  }
  if (activeFilter.value === 'industrie') {
    return officialPartners.filter(p => 
      p.category.includes('Industriel') || 
      p.category.includes('Institutionnel') || 
      p.category.includes('Agro') || 
      p.category.includes('Groupe')
    )
  }
  return officialPartners
})
</script>

<template>
  <section class="sponsors-section" aria-label="Partenaires et Coalition des Capitaux AYIF 2026">
    <div class="wrap">
      <!-- EN-TÊTE ÉDITORIAL DE LA COALITION (AÉRÉ, SANS BORDURES RIGIDES) -->
      <header class="sponsors-header">
        <div class="kicker-group" v-reveal>
          <span class="kicker-gem" aria-hidden="true">◆</span>
          <span class="sub-kicker">Alliances Stratégiques &amp; Bailleurs Officiels</span>
        </div>

        <div class="header-split-row">
          <div class="header-text-col" v-reveal="{ effect: 'up', delay: 80 }">
            <h2 class="sponsors-title">
              La Coalition des Capitaux &amp; Partenaires d’AYIF 2026
            </h2>
            <p class="sponsors-lead">
              Fonds d’investissement souverains, banques multilatérales de développement et consortiums manufacturiers engagés pour financer et propulser l’entrepreneuriat des jeunes en Afrique.
            </p>
          </div>

          <div class="header-action-col" v-reveal="{ effect: 'up', delay: 140 }">
            <NuxtLink to="/partenaires" class="btn-partner-prestige">
              <span>Devenir partenaire officiel</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="cta-arrow" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <span class="protocol-notice">
              Homologations bilatérales validées au secrétariat permanent
            </span>
          </div>
        </div>
      </header>

      <!-- BARRE DES FILTRES DE NAVIGATION (DÉGAGÉE AVEC MARGES GÉNÉREUSES) -->
      <nav class="partners-filter-wrapper" aria-label="Filtrer les partenaires par pôle d'activité">
        <div class="filter-pills-row" role="tablist">
          <button
            v-for="opt in filterOptions"
            :key="opt.id"
            type="button"
            role="tab"
            :aria-selected="activeFilter === opt.id"
            class="filter-tab-pill"
            :class="{ active: activeFilter === opt.id }"
            @click="activeFilter = opt.id"
          >
            {{ opt.label }}
          </button>
        </div>
      </nav>

      <!-- GRILLE AÉRÉE À 2 COLONNES : CARTES EXÉCUTIVES SPATIEUSES (ZÉRO TRONCATURE, ZÉRO DÉBORDEMENT) -->
      <div class="partners-executive-grid">
        <article
          v-for="(partner, pIdx) in filteredPartners"
          :key="partner.id"
          v-reveal="{ effect: 'up', delay: (pIdx % 2) * 90 }"
          class="partner-prestige-card"
        >
          <!-- Cadre Portrait Noble (Format généreux sans étouffement) -->
          <div class="card-portrait-frame">
            <img
              :src="partner.image"
              :alt="partner.name"
              loading="lazy"
              class="card-portrait-img"
            />
          </div>

          <!-- Contenu et Identité Institutionnelle -->
          <div class="card-content-col">
            <div class="card-badges-row">
              <span class="badge-tier">{{ partner.tierBadge }}</span>
              <span class="badge-country">{{ partner.country }}</span>
            </div>

            <!-- Nom de l'Institution (Affichage complet en pleine largeur, jamais coupé) -->
            <h3 class="card-org-name">{{ partner.organization }}</h3>

            <!-- Représentant & Fonction officielle -->
            <div class="card-patron-block">
              <span class="patron-fullname">{{ partner.name }}</span>
              <span class="patron-function">{{ partner.role }}</span>
            </div>

            <!-- Mandat et apport stratégique au Forum -->
            <p class="card-mandate-text">{{ partner.highlight }}</p>
          </div>
        </article>
      </div>
    </div>

    <!-- BANDEAU CONTINU DE LOGOS & ENSEIGNES (DÉFILEMENT NATUREL) -->
    <div class="marquee-showcase-zone" v-reveal="'fade'">
      <div class="marquee-sub-legend">
        <span>BANQUES DE DÉVELOPPEMENT, CHAMBRES CONSULAIRES &amp; ENSEIGNES RÉGIONALES ACCRÉDITÉES</span>
      </div>

      <div class="marquee logos-marquee" style="--marquee-duration: 32s">
        <ul class="marquee-track logos">
          <li
            v-for="(s, i) in loop"
            :key="s + i"
            :aria-hidden="i >= sponsors.length"
            class="sponsor-track-item"
          >
            <div class="sponsor-capsule-card">
              <span class="sponsor-star-badge" aria-hidden="true">✦</span>
              <span class="sponsor-name">{{ s }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   SPONSORS & PARTENAIRES — ARCHITECTURE AÉRÉE HAUTE-COUTURE
   ZÉRO DÉGRADÉ · ZÉRO BORDURE TRONQUANTE · ZÉRO ÉMOJI
   ========================================================================== */
.sponsors-section {
  padding: 96px 0 110px;
  background-color: var(--bg-page);
  color: var(--text-page);
  border: none;
  overflow: hidden;
}

/* En-tête */
.sponsors-header {
  margin-bottom: 36px;
}

.kicker-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.kicker-gem {
  color: var(--color-gold, #d4af37);
  font-size: 11px;
}

.sub-kicker {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent, #c9a24d);
}

.header-split-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 32px;
}

.header-text-col {
  max-width: 760px;
}

.sponsors-title {
  font-family: var(--font-serif);
  font-size: clamp(2.1rem, 3.3vw, 2.85rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.18;
  letter-spacing: -0.025em;
  margin: 0 0 14px 0;
}

.sponsors-lead {
  font-family: var(--font-sans);
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

.header-action-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.btn-partner-prestige {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--color-navy, #0c2340);
  color: #FFFFFF;
  padding: 13px 26px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(12, 35, 64, 0.18);
  transition: transform 0.25s ease, background-color 0.25s ease;
  border: none;
}

.btn-partner-prestige:hover {
  background-color: #12345d;
  transform: translateY(-2px);
}

.cta-arrow {
  width: 16px;
  height: 16px;
  color: var(--color-gold, #d4af37);
}

.protocol-notice {
  font-family: var(--font-sans);
  font-size: 11px;
  color: var(--text-muted);
  opacity: 0.85;
}

/* ==========================================================================
   BARRE DE FILTRAGE — ESPACÉE ET CLAIRE
   ========================================================================== */
.partners-filter-wrapper {
  margin: 28px 0 40px 0;
  width: 100%;
}

.filter-pills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-tab-pill {
  padding: 9px 20px;
  border-radius: 999px;
  background-color: rgba(12, 35, 64, 0.05);
  color: var(--text-muted);
  border: none;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

:root.dark .filter-tab-pill,
.dark .filter-tab-pill {
  background-color: rgba(255, 255, 255, 0.06);
  color: #c5cbd3;
}

.filter-tab-pill:hover {
  background-color: rgba(12, 35, 64, 0.1);
  color: var(--text-page);
}

.filter-tab-pill.active {
  background-color: var(--color-navy, #0c2340);
  color: #FFFFFF;
}

/* ==========================================================================
   GRILLE À 2 COLONNES — SPATIEUSE ET LUXUEUSE
   ========================================================================== */
.partners-executive-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  width: 100%;
  box-sizing: border-box;
}

.partner-prestige-card {
  background-color: var(--color-surface, #FFFFFF);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 22px;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  box-sizing: border-box;
  min-width: 0;
}

.partner-prestige-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.08);
}

/* Portrait photo (Généreux, 104px × 126px, jamais aplati) */
.card-portrait-frame {
  width: 104px;
  height: 126px;
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: var(--color-navy, #0c2340);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.card-portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.4s ease;
}

.partner-prestige-card:hover .card-portrait-img {
  transform: scale(1.05);
}

/* Colonne d'information textuelle */
.card-content-col {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
}

.card-badges-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.badge-tier {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background-color: rgba(212, 175, 55, 0.15);
  color: #8C6D1F;
  padding: 3px 9px;
  border-radius: 5px;
}

:root.dark .badge-tier,
.dark .badge-tier {
  color: var(--color-gold, #d4af37);
  background-color: rgba(212, 175, 55, 0.22);
}

.badge-country {
  font-family: var(--font-sans);
  font-size: 11px;
  color: var(--text-muted);
  font-weight: 600;
  background-color: rgba(12, 35, 64, 0.04);
  padding: 2px 8px;
  border-radius: 999px;
}

:root.dark .badge-country,
.dark .badge-country {
  background-color: rgba(255, 255, 255, 0.06);
  color: #d1d5db;
}

/* Nom de l'Organisation — Pas de troncature ! */
.card-org-name {
  font-family: var(--font-sans);
  font-size: 17px;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.32;
  margin: 0 0 8px 0;
  word-break: break-word;
}

/* Bloc Dirigeant / Représentant */
.card-patron-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: rgba(12, 35, 64, 0.03);
  margin-bottom: 10px;
}

:root.dark .card-patron-block,
.dark .card-patron-block {
  background-color: rgba(255, 255, 255, 0.04);
}

.patron-fullname {
  font-family: var(--font-serif);
  font-size: 14.5px;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.25;
}

.patron-function {
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.35;
}

/* Texte d'impact / Mandat */
.card-mandate-text {
  font-family: var(--font-sans);
  font-size: 12.5px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
}

/* ==========================================================================
   BANDEAU CONTINU DE LOGOS & ENSEIGNES (DÉFILEMENT NATUREL)
   ========================================================================== */
.marquee-showcase-zone {
  margin-top: 56px;
}

.marquee-sub-legend {
  text-align: center;
  margin-bottom: 18px;
}

.marquee-sub-legend span {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  opacity: 0.75;
}

.marquee {
  width: 100%;
  overflow: hidden;
  user-select: none;
  display: flex;
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: 16px;
  width: max-content;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  animation: marquee-scroll var(--marquee-duration, 32s) linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.sponsor-track-item {
  flex-shrink: 0;
}

.sponsor-capsule-card {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: var(--color-surface, #FFFFFF);
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.035);
  border: none;
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.sponsor-capsule-card:hover {
  transform: translateY(-2px);
  background-color: var(--color-navy, #0c2340);
}

.sponsor-star-badge {
  color: var(--color-gold, #d4af37);
  font-size: 11px;
  flex-shrink: 0;
}

.sponsor-name {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 13.5px;
  letter-spacing: 0.01em;
  color: var(--text-page);
  transition: color 0.2s ease;
}

.sponsor-capsule-card:hover .sponsor-name {
  color: #FFFFFF;
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 980px) {
  .partners-executive-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .sponsors-section {
    padding: 72px 0 80px;
  }

  .header-split-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
  }

  .btn-partner-prestige {
    width: 100%;
    justify-content: center;
  }

  .partner-prestige-card {
    padding: 18px;
    gap: 16px;
  }

  .card-portrait-frame {
    width: 88px;
    height: 108px;
  }
}

@media (max-width: 480px) {
  .partner-prestige-card {
    flex-direction: column;
  }

  .card-portrait-frame {
    width: 100%;
    height: 180px;
  }
}
</style>
