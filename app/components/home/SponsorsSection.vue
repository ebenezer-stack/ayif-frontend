<script setup lang="ts">
import { sponsors } from '../../data/mockData'

const loop = [...sponsors, ...sponsors]

const partnerTiers = [
  'Bailleurs Multilatéraux',
  'Banques de Développement',
  'Fonds de Capital-Risque',
  'Opérateurs Industriels (GDIZ)',
  'Chambres de Commerce Panafricaines'
]
</script>

<template>
  <section class="sponsors-section">
    <div class="wrap">
      <div class="sponsors-head">
        <div class="head-text-block">
          <div class="kicker-group" v-reveal>
            <span class="kicker-gem" aria-hidden="true">◆</span>
            <span class="sub-kicker">Alliances Stratégiques &amp; Bailleurs</span>
          </div>
          <h2 v-reveal="{ effect: 'up', delay: 100 }" class="sponsors-title">
            La Coalition des Capitaux &amp; Partenaires Officiels
          </h2>
          <p v-reveal="{ effect: 'up', delay: 180 }" class="intro">
            Institutions de développement, groupes bancaires, fonds souverains et leaders industriels engagés pour l'essor de la jeunesse africaine et l'intégration des marchés.
          </p>

          <!-- Registre Protocolaire d'Accréditation (Remplace le pill IA générique) -->
          <div v-reveal="{ effect: 'up', delay: 240 }" class="protocol-registry-strip">
            <div class="registry-header-badge">
              <span class="registry-pulse-dot" aria-hidden="true"></span>
              <span class="registry-badge-title">CYCLE D'ACCRÉDITATION EN COURS</span>
            </div>
            <p class="registry-notice">
              Les accords bilatéraux, fonds partenaires et bailleurs multilatéraux sont homologués et dévoilés progressivement par le comité d'organisation.
            </p>
          </div>
        </div>

        <div class="head-cta-block" v-reveal="'right'">
          <NuxtLink to="/partenaires" class="btn-partner-prestige">
            <span>Devenir partenaire officiel 2026</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="partner-arrow">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Tiers de Partenariat Stratégique -->
      <div v-reveal="{ effect: 'up', delay: 280 }" class="partner-tiers-cluster">
        <span 
          v-for="(tier, idx) in partnerTiers" 
          :key="idx" 
          class="tier-pill"
        >
          <span class="tier-bullet"></span>
          <span>{{ tier }}</span>
        </span>
      </div>
    </div>

    <!-- Bandeau Défilant Continu avec Séparateurs Or Héraldiques -->
    <div v-reveal="'fade'" class="marquee logos-marquee" style="--marquee-duration: 38s">
      <ul class="marquee-track logos">
        <li v-for="(s, i) in loop" :key="s + i" :aria-hidden="i >= sponsors.length">
          <div class="sponsor-card">
            <span class="sponsor-seal-accent" aria-hidden="true">✦</span>
            <span class="sponsor-name">{{ s }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   SPONSORS SECTION — COALITION STRATÉGIQUE HAUTE-COUTURE
   ========================================================================== */
.sponsors-section {
  padding: 96px 0 104px;
  background-color: var(--bg-page);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
  border-top: 1px solid var(--border-line);
  overflow: hidden;
}

.sponsors-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 28px;
}

.head-text-block {
  max-width: 760px;
}

.kicker-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.kicker-gem {
  color: var(--color-gold);
  font-size: 11px;
}

.sub-kicker {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.sponsors-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.2vw, 2.6rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 14px 0;
}

.intro {
  font-family: var(--font-sans);
  font-size: 15.5px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 24px 0;
}

/* Registre Protocolaire d'Accréditation (Remplace le pill jaune IA) */
.protocol-registry-strip {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--bg-surface);
  border: 1px solid rgba(217, 162, 27, 0.4);
  border-left: 3px solid var(--color-gold);
  border-radius: 12px;
  padding: 12px 18px;
  flex-wrap: wrap;
}

.registry-header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(217, 162, 27, 0.18);
  border: 1px solid rgba(217, 162, 27, 0.4);
  padding: 4px 10px;
  border-radius: 99px;
  flex-shrink: 0;
}

.registry-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--color-gold);
  box-shadow: 0 0 8px var(--color-gold);
  animation: pulse-ring 2s infinite ease-in-out;
}

@keyframes pulse-ring {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.35); opacity: 0.6; }
}

.registry-badge-title {
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8C6D1F;
}

:root.dark .registry-badge-title,
.dark .registry-badge-title {
  color: var(--color-gold);
}

.registry-notice {
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 600;
  line-height: 1.45;
  margin: 0;
}

/* Bouton Partenariat */
.head-cta-block {
  flex-shrink: 0;
}

.btn-partner-prestige {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 26px;
  border-radius: 99px;
  background: var(--ayif-navy);
  color: #FFFFFF;
  text-decoration: none;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(8, 43, 85, 0.2);
  transition: all 0.25s ease;
  white-space: nowrap;
}

.btn-partner-prestige:hover {
  background: var(--ayif-blue);
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(7, 87, 184, 0.32);
}

.partner-arrow {
  width: 16px;
  height: 16px;
  color: var(--color-gold);
  transition: transform 0.2s ease;
}

.btn-partner-prestige:hover .partner-arrow {
  transform: translateX(4px);
}

/* Tiers de Partenariat */
.partner-tiers-cluster {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.tier-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 6px 14px;
  border-radius: 99px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  transition: all 0.2s ease;
}

.tier-pill:hover {
  border-color: var(--color-gold);
  color: var(--text-page);
}

.tier-bullet {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--color-gold);
}

/* ==========================================================================
   MARQUEE LOGOS
   ========================================================================== */
.logos-marquee {
  margin-top: 48px;
  border-top: 1px solid var(--border-line);
  border-bottom: 1px solid var(--border-line);
  background: var(--bg-surface);
}

.logos {
  list-style: none;
  margin: 0;
  padding: 0;
}

.logos li {
  flex: 0 0 auto;
  width: 280px;
  height: 108px;
  display: grid;
  place-items: center;
  padding: 16px 28px;
  border-right: 1px solid var(--border-line);
  transition: background-color 0.2s ease;
}

.logos li:hover {
  background-color: var(--bg-page);
}

.sponsor-card {
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.sponsor-seal-accent {
  font-size: 10px;
  color: var(--color-gold);
  opacity: 0.75;
}

.sponsor-name {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 15.5px;
  letter-spacing: 0.01em;
  color: var(--text-page);
  transition: color 0.2s ease;
}

.logos li:hover .sponsor-name {
  color: var(--ayif-blue);
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 900px) {
  .sponsors-head {
    flex-direction: column;
    align-items: flex-start;
  }
  .btn-partner-prestige {
    width: 100%;
    justify-content: center;
  }
}
</style>
