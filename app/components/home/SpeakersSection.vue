<script setup lang="ts">
import { ref, computed } from 'vue'
import { speakers } from '../../data/mockData'

const featuredSpeakers = speakers.filter(s => s.featured).slice(0, 6)

// Filtres interactifs par secteur d'expertise
const activeFilter = ref<string>('all')

const filterOptions = [
  { id: 'all', label: 'Tous les profils' },
  { id: 'finance', label: 'Capital & Investissement' },
  { id: 'tech', label: 'Tech & Infrastructures' },
  { id: 'policy', label: 'Institutions & Patronat' }
]

const getCategory = (s: any) => {
  const combined = `${s.role} ${s.organization} ${(s.topics || []).join(' ')}`.toLowerCase()
  if (combined.includes('invest') || combined.includes('capital') || combined.includes('bank') || combined.includes('venture')) {
    return 'finance'
  }
  if (combined.includes('logistics') || combined.includes('tech') || combined.includes('cloud') || combined.includes('syst')) {
    return 'tech'
  }
  return 'policy'
}

const displayedSpeakers = computed(() => {
  if (activeFilter.value === 'all') return featuredSpeakers
  return featuredSpeakers.filter(s => getCategory(s) === activeFilter.value)
})
</script>

<template>
  <section class="speakers-curated-section">
    <!-- REFLETS AMBIANTS DOUX (DONNE DU RELIEF AU VERRE SUR FOND BLANC) -->
    <div class="ambient-glow glow-blue" aria-hidden="true"></div>
    <div class="ambient-glow glow-gold" aria-hidden="true"></div>

    <div class="wrap speakers-wrap">
      <!-- HEADER ÉDITORIAL PRESTIGIEUX -->
      <div v-reveal class="speakers-header">
        <div class="header-intro">
          <div class="editorial-kicker">
            <span class="kicker-gem"></span>
            <span class="kicker-label">Intervenants &amp; Décideurs Cotonou 2026</span>
          </div>
          <h2 class="section-title">Les Voix qui Façonnent l'Économie</h2>
          <p class="section-desc">
            Rencontrez les leaders du capital-investissement, fondateurs de licornes, régulateurs et capitaines d'industrie mobilisés pour accélérer les flux d'affaires entre le Bénin, le Nigéria et l'Afrique de l'Ouest.
          </p>
        </div>

        <NuxtLink to="/speakers" class="neu-all-link">
          <span class="link-label">Voir l'annuaire complet</span>
          <span class="link-count">50+ experts</span>
          <div class="link-disc" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </NuxtLink>
      </div>

      <!-- SÉLECTEUR DE FILTRES : TRAY SCULPTÉ NEUMORPHIQUE -->
      <div v-reveal class="neu-tray-wrapper">
        <div class="neu-tray" role="tablist" aria-label="Filtrer les intervenants par domaine">
          <button
            v-for="opt in filterOptions"
            :key="opt.id"
            role="tab"
            :aria-selected="activeFilter === opt.id"
            class="neu-tray-pill"
            :class="{ active: activeFilter === opt.id }"
            @click="activeFilter = opt.id"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>

      <!-- GRILLE ÉDITORIALE EN MONOLITHES VITREUX (GLASSMORPHISME + NEUMORPHISME) -->
      <div class="speakers-vitreous-grid">
        <NuxtLink 
          v-for="(s, i) in displayedSpeakers" 
          :key="s.id" 
          v-reveal="{ effect: 'up', delay: i * 80 }"
          to="/speakers" 
          class="vitreous-card"
        >
          <!-- CARTOUCHE SUPÉRIEURE : MÉDAILLON EN RELIEF + IDENTIFIANTS INSTITUTIONNELS -->
          <div class="card-identity-header">
            <!-- Médaillon Monogramme Sculpté (Conception Sceau de Prestige) -->
            <div class="cameo-seal">
              <div class="cameo-well">
                <div class="cameo-lens">
                  <span class="cameo-monogram">{{ s.initials }}</span>
                </div>
              </div>
            </div>

            <!-- Identité & Pays en typographie éditoriale (Évite le cliché des 2 pilules d'angle) -->
            <div class="identity-lead">
              <div class="country-dossier">
                <span class="country-flag-dot"></span>
                <span class="country-text">{{ s.country }}</span>
              </div>
              <h3 class="speaker-name">{{ s.name }}</h3>
              <p class="speaker-role">{{ s.role }}</p>
              <p class="speaker-org">{{ s.organization }}</p>
            </div>
          </div>

          <!-- SÉPARATEUR EN FILIGRANE D'OR -->
          <div class="card-gold-separator" aria-hidden="true"></div>

          <!-- CHAMBRE BIO EN VERRE DÉPOLI (BIO COMPLÈTE SANS TRONCATURE ABRUPTE) -->
          <div class="card-bio-chamber">
            <p class="bio-text">{{ s.bio }}</p>
          </div>

          <!-- DOMAINES D'EXPERTISE EN MICRO-GEMMES VITREUSES -->
          <div v-if="s.topics && s.topics.length" class="topics-gem-cluster">
            <span 
              v-for="(topic, tIdx) in s.topics.slice(0, 2)" 
              :key="tIdx" 
              class="topic-gem"
            >
              {{ topic }}
            </span>
          </div>

          <!-- BOUTON D'ACTION TACTILE SCULPTÉ -->
          <div class="card-action-bar">
            <span class="action-text">Consulter le dossier officiel</span>
            <div class="action-disc" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- BANDEAU CTA BAS : ÉCRIN EN VERRE SCULPTÉ -->
      <div v-reveal class="speakers-cta-casket">
        <div class="casket-content">
          <div class="casket-emblem" aria-hidden="true">
            <div class="emblem-core"></div>
          </div>
          <div class="casket-text">
            <h4 class="casket-heading">Rejoindre la tribune officielle AYIF 2026</h4>
            <p class="casket-sub">
              Les candidatures de keynotes, modérateurs et présentateurs de fonds d'investissement sont ouvertes jusqu'au 31 août 2026.
            </p>
          </div>
        </div>
        <NuxtLink to="/speakers#candidature" class="casket-btn">
          <span>Déposer une candidature</span>
          <svg viewBox="0 0 20 20" fill="currentColor" class="casket-arrow">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   CANEVAS LUMINEUX & MINÉRAL (#F6F9FD) — PERMET LE JEU D'OMBRES DOUCES ET DE VERRE
   ========================================================================== */
.speakers-curated-section {
  position: relative;
  padding: 104px 0 112px;
  background-color: #F6F9FD;
  color: var(--ayif-navy);
  overflow: hidden;
}

/* LUEURS DIFFUSES EN FOND (RÉFRACTION DOUCE POUR LE VERRE DÉPOLI) */
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(90px);
  z-index: 1;
}

.glow-blue {
  width: 520px;
  height: 520px;
  top: -120px;
  left: -120px;
  background: radial-gradient(circle, rgba(7, 87, 184, 0.05) 0%, transparent 70%);
}

.glow-gold {
  width: 480px;
  height: 480px;
  bottom: -100px;
  right: -100px;
  background: radial-gradient(circle, rgba(217, 162, 27, 0.045) 0%, transparent 70%);
}

.speakers-wrap {
  position: relative;
  z-index: 2;
  max-width: 1240px;
}

/* ==========================================================================
   HEADER DE SECTION
   ========================================================================== */
.speakers-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 36px;
}

.header-intro {
  max-width: 720px;
}

.editorial-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.kicker-gem {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--color-gold);
  box-shadow: 0 0 10px rgba(217, 162, 27, 0.6);
}

.kicker-label {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ayif-blue);
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(2.1rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: var(--ayif-navy);
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 14px 0;
}

.section-desc {
  font-family: var(--font-sans);
  font-size: 15.5px;
  line-height: 1.65;
  color: #485D77;
  margin: 0;
}

/* Bouton Neumorphique & Verre en En-tête */
.neu-all-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 18px 10px 22px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 
    6px 8px 18px rgba(8, 43, 85, 0.05),
    -6px -6px 16px #FFFFFF;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.neu-all-link:hover {
  transform: translateY(-2px);
  box-shadow: 
    8px 12px 24px rgba(7, 87, 184, 0.12),
    -6px -6px 18px #FFFFFF;
}

.link-label {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  color: var(--ayif-navy);
}

.link-count {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  color: #0757B8;
  background: #EAF1F8;
  padding: 3px 9px;
  border-radius: 99px;
}

.link-disc {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--ayif-navy);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background 0.2s ease;
}

.link-disc svg {
  width: 14px;
  height: 14px;
}

.neu-all-link:hover .link-disc {
  background: var(--ayif-blue);
  transform: translateX(3px);
}

/* ==========================================================================
   TRAY NEUMORPHIQUE POUR LES FILTRES (SEGMENTED CONTROL EN RELIEF SOFT-UI)
   ========================================================================== */
.neu-tray-wrapper {
  margin-bottom: 44px;
}

.neu-tray {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  background: #E8EEF5;
  padding: 6px;
  border-radius: 99px;
  box-shadow: 
    inset 3px 3px 8px rgba(8, 43, 85, 0.07), 
    inset -3px -3px 8px #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.neu-tray-pill {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: #53677F;
  background: transparent;
  border: 1px solid transparent;
  padding: 9px 20px;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.22s ease;
}

.neu-tray-pill:hover {
  color: var(--ayif-navy);
}

/* État actif : coussin de verre érigé au-dessus du rail */
.neu-tray-pill.active {
  background: #FFFFFF;
  color: var(--ayif-blue);
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 
    3px 4px 12px rgba(8, 43, 85, 0.08), 
    -2px -2px 8px #FFFFFF;
}

/* ==========================================================================
   GRILLE EN MONOLITHES VITREUX (GLASSMORPHISME + NEUMORPHISME HAUTE PRÉCISION)
   ========================================================================== */
.speakers-vitreous-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.vitreous-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.92) 0%, rgba(246, 250, 254, 0.76) 100%);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 26px;
  padding: 30px;
  text-decoration: none;
  box-shadow: 
    12px 18px 40px rgba(8, 43, 85, 0.05),
    -10px -10px 26px #FFFFFF,
    inset 0 1.5px 2px #FFFFFF,
    inset 0 -1px 2px rgba(8, 43, 85, 0.02);
  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.vitreous-card:hover {
  transform: translateY(-6px);
  background: linear-gradient(145deg, #FFFFFF 0%, rgba(248, 251, 255, 0.95) 100%);
  border-color: rgba(46, 167, 242, 0.45);
  box-shadow: 
    18px 26px 48px rgba(7, 87, 184, 0.12),
    -12px -12px 30px #FFFFFF,
    inset 0 2px 2px #FFFFFF;
}

/* ==========================================================================
   CARTOUCHE SUPÉRIEURE : MÉDAILLON EN RELIEF + IDENTITÉ ÉDITORIALE
   ========================================================================== */
.card-identity-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}

/* Sceau Cameo Sculpté (Monogramme en relief noble) */
.cameo-seal {
  flex-shrink: 0;
}

.cameo-well {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #EDF3F9;
  padding: 5px;
  box-shadow: 
    inset 3px 3px 7px rgba(8, 43, 85, 0.07), 
    inset -3px -3px 7px #FFFFFF;
}

.cameo-lens {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFFFFF 0%, #E6EFF8 100%);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 
    2px 3px 8px rgba(8, 43, 85, 0.08), 
    -2px -2px 6px #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.cameo-monogram {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 800;
  color: var(--ayif-navy);
  letter-spacing: 0.04em;
  transition: color 0.3s ease;
}

.vitreous-card:hover .cameo-lens {
  background: var(--ayif-navy);
  box-shadow: 0 6px 18px rgba(7, 87, 184, 0.25);
}

.vitreous-card:hover .cameo-monogram {
  color: var(--color-gold);
}

/* Lead Typographique */
.identity-lead {
  flex: 1;
  min-width: 0;
}

.country-dossier {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.country-flag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-gold);
  box-shadow: 0 0 6px rgba(217, 162, 27, 0.5);
}

.country-text {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6C7F95;
}

.speaker-name {
  font-family: var(--font-serif);
  font-size: 21px;
  font-weight: 700;
  color: var(--ayif-navy);
  line-height: 1.25;
  margin: 0 0 4px 0;
  transition: color 0.2s ease;
}

.vitreous-card:hover .speaker-name {
  color: var(--ayif-blue);
}

.speaker-role {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: #556B84;
  line-height: 1.35;
  margin: 0 0 3px 0;
}

.speaker-org {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  color: var(--ayif-blue);
  line-height: 1.35;
  margin: 0;
}

/* ==========================================================================
   SÉPARATEUR EN FILIGRANE D'OR
   ========================================================================== */
.card-gold-separator {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(217, 162, 27, 0.35) 0%, rgba(8, 43, 85, 0.05) 50%, transparent 100%);
  margin: 18px 0;
}

/* ==========================================================================
   CHAMBRE BIO EN VERRE DÉPOLI
   ========================================================================== */
.card-bio-chamber {
  flex: 1;
  background: rgba(239, 245, 252, 0.5);
  border-radius: 14px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow: 
    inset 2px 2px 5px rgba(8, 43, 85, 0.04), 
    inset -2px -2px 5px #FFFFFF;
  margin-bottom: 20px;
}

.bio-text {
  font-family: var(--font-sans);
  font-size: 13.5px;
  line-height: 1.65;
  color: #455A72;
  margin: 0;
}

/* ==========================================================================
   DOMAINES D'EXPERTISE (MICRO-GEMMES VITREUSES)
   ========================================================================== */
.topics-gem-cluster {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
}

.topic-gem {
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 700;
  color: var(--ayif-navy);
  padding: 5px 12px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 
    2px 3px 7px rgba(8, 43, 85, 0.04), 
    -2px -2px 6px #FFFFFF;
  transition: all 0.2s ease;
}

.vitreous-card:hover .topic-gem {
  border-color: rgba(7, 87, 184, 0.2);
  color: var(--ayif-blue);
}

/* ==========================================================================
   BOUTON D'ACTION TACTILE SCULPTÉ
   ========================================================================== */
.card-action-bar {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px 10px 18px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 
    3px 4px 10px rgba(8, 43, 85, 0.04), 
    -3px -3px 8px #FFFFFF;
  transition: all 0.25s ease;
}

.action-text {
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ayif-navy);
  transition: color 0.2s ease;
}

.action-disc {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #F0F5FA;
  box-shadow: 
    2px 2px 5px rgba(8, 43, 85, 0.08), 
    -2px -2px 5px #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ayif-navy);
  transition: all 0.25s ease;
}

.action-disc svg {
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
}

.vitreous-card:hover .card-action-bar {
  background: var(--ayif-navy);
  border-color: var(--ayif-navy);
  box-shadow: 0 6px 18px rgba(8, 43, 85, 0.2);
}

.vitreous-card:hover .action-text {
  color: #FFFFFF;
}

.vitreous-card:hover .action-disc {
  background: var(--color-gold);
  color: var(--ayif-navy);
  transform: translateX(3px);
}

/* ==========================================================================
   BANDEAU CTA BAS : ÉCRIN EN VERRE SCULPTÉ
   ========================================================================== */
.speakers-cta-casket {
  margin-top: 60px;
  padding: 32px 40px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(246, 250, 254, 0.8) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  box-shadow: 
    14px 20px 44px rgba(8, 43, 85, 0.06), 
    -12px -12px 30px #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
}

.casket-content {
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 720px;
}

.casket-emblem {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: #EDF3F9;
  box-shadow: 
    inset 2px 2px 6px rgba(8, 43, 85, 0.08), 
    inset -2px -2px 6px #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.emblem-core {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-gold);
  box-shadow: 0 0 12px rgba(217, 162, 27, 0.7);
}

.casket-heading {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 700;
  color: var(--ayif-navy);
  margin: 0 0 4px 0;
}

.casket-sub {
  font-family: var(--font-sans);
  font-size: 13.5px;
  line-height: 1.5;
  color: #53677F;
  margin: 0;
}

.casket-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--ayif-navy);
  color: #ffffff;
  padding: 14px 28px;
  font-size: 13.5px;
  border-radius: 99px;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 
    4px 8px 20px rgba(8, 43, 85, 0.25),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  transition: all 0.25s ease;
  white-space: nowrap;
}

.casket-btn:hover {
  background: var(--ayif-blue);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(7, 87, 184, 0.35);
}

.casket-arrow {
  width: 15px;
  height: 15px;
  transition: transform 0.2s ease;
}

.casket-btn:hover .casket-arrow {
  transform: translateX(4px);
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 1060px) {
  .speakers-vitreous-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 720px) {
  .speakers-curated-section {
    padding: 68px 0;
  }

  .speakers-vitreous-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .vitreous-card {
    padding: 24px;
  }

  .speakers-cta-casket {
    flex-direction: column;
    align-items: flex-start;
    padding: 26px;
  }

  .casket-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
