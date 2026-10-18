<script setup lang="ts">
import { ref, computed } from 'vue'
import { speakers } from '../../data/mockData'

const featuredSpeakers = speakers.filter(s => s.featured).slice(0, 3)

// Filtres interactifs par secteur d'expertise
const activeFilter = ref<string>('all')

const filterOptions = [
  { id: 'all', label: 'Sélection d\'Honneur' },
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
  const pool = activeFilter.value === 'all'
    ? speakers.filter(s => s.featured)
    : speakers.filter(s => getCategory(s) === activeFilter.value)
  return pool.slice(0, 3)
})
</script>

<template>
  <section class="speakers-curated-section">
    <!-- FOND DE SECTION BLANC LUMINEUX AVEC HALOS DE RÉFRACTION SUBTILS -->
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

      <!-- GRILLE DE CARTES EN FOND BLEU NUIT GLASSMORPHISME & NEUMORPHISME -->
      <div class="speakers-vitreous-grid">
        <NuxtLink 
          v-for="(s, i) in displayedSpeakers" 
          :key="s.id" 
          v-reveal="{ effect: 'up', delay: i * 80 }"
          to="/speakers" 
          class="vitreous-card"
        >
          <!-- SCÈNE VISUELLE EN VERRE DÉPOLI AVEC MONOGRAMME FILIGRANE (FIN DU MÉDAILLON ROND) -->
          <div class="card-visual-stage">
            <div class="stage-glow" aria-hidden="true"></div>

            <!-- MONOGRAMME ÉDITORIAL EN FILIGRANE SOYEUX -->
            <div class="stage-monogram-watermark" aria-hidden="true">
              {{ s.initials }}
            </div>

            <!-- BADGES FLOTTANTS EN VERRE SUR LA SCÈNE VISUELLE -->
            <div class="stage-badges-bar">
              <div class="stage-country-capsule">
                <span class="country-beacon"></span>
                <span class="country-name">{{ s.country }}</span>
              </div>
              <span v-if="s.topics && s.topics[0]" class="stage-topic-capsule">
                {{ s.topics[0] }}
              </span>
            </div>
          </div>

          <!-- IDENTITÉ & TITRES DU SPEAKER -->
          <div class="card-identity-block">
            <h3 class="speaker-name">{{ s.name }}</h3>
            <p class="speaker-role">{{ s.role }}</p>
            <p class="speaker-org">{{ s.organization }}</p>
          </div>

          <!-- SÉPARATEUR EN FILIGRANE D'OR -->
          <div class="card-gold-separator" aria-hidden="true"></div>

          <!-- CHAMBRE BIO EN VERRE DÉPOLI NOCTURNE -->
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
   CANEVAS DE SECTION BLANC LUMINEUX
   ========================================================================== */
.speakers-curated-section {
  position: relative;
  padding: 104px 0 112px;
  background-color: #FFFFFF;
  color: var(--ayif-navy);
  border-top: 1px solid #E8EFF7;
  border-bottom: 1px solid #E8EFF7;
  overflow: hidden;
}

/* HALOS DIFFUS POUR DONNER DE LA VIE AU FOND BLANC */
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  z-index: 1;
}

.glow-blue {
  width: 550px;
  height: 550px;
  top: -120px;
  left: -100px;
  background: radial-gradient(circle, rgba(7, 87, 184, 0.06) 0%, transparent 70%);
}

.glow-gold {
  width: 500px;
  height: 500px;
  bottom: -100px;
  right: -100px;
  background: radial-gradient(circle, rgba(217, 162, 27, 0.05) 0%, transparent 70%);
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
  color: var(--color-accent);
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
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  box-shadow: 
    4px 6px 16px rgba(8, 43, 85, 0.06),
    -4px -4px 12px #FFFFFF;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.neu-all-link:hover {
  transform: translateY(-2px);
  border-color: var(--color-accent);
  box-shadow: 
    6px 12px 22px rgba(7, 87, 184, 0.12),
    -4px -4px 14px #FFFFFF;
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
  background: #F1F5F9;
  padding: 6px;
  border-radius: 99px;
  box-shadow: 
    inset 2px 2px 6px rgba(8, 43, 85, 0.06), 
    inset -2px -2px 6px #FFFFFF;
  border: 1px solid #E2E8F0;
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

.neu-tray-pill.active {
  background: #FFFFFF;
  color: var(--ayif-blue);
  font-weight: 700;
  border: 1px solid #E2E8F0;
  box-shadow: 
    2px 3px 10px rgba(8, 43, 85, 0.08), 
    -2px -2px 6px #FFFFFF;
}

/* ==========================================================================
   GRILLE EN CARTES BLEU NUIT GLASSMORPHISME & NEUMORPHISME
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
  background: linear-gradient(155deg, #092C56 0%, #051C36 100%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-top: 1.5px solid rgba(217, 162, 27, 0.4);
  border-radius: 26px;
  padding: 26px;
  text-decoration: none;
  box-shadow: 
    14px 20px 44px rgba(8, 43, 85, 0.16),
    0 4px 14px rgba(8, 43, 85, 0.08),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.vitreous-card:hover {
  transform: translateY(-6px);
  border-color: rgba(217, 162, 27, 0.6);
  border-top-color: var(--color-gold);
  box-shadow: 
    18px 28px 52px rgba(8, 43, 85, 0.28),
    0 8px 20px rgba(7, 87, 184, 0.25),
    inset 0 1px 2px rgba(255, 255, 255, 0.35);
}

/* ==========================================================================
   SCÈNE VISUELLE VITREUSE HAUTE DÉFINITION (REMPLACE LE MÉDAILLON ROND)
   ========================================================================== */
.card-visual-stage {
  position: relative;
  width: 100%;
  height: 190px;
  border-radius: 18px;
  background: linear-gradient(145deg, #07254A 0%, #031427 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.15),
    inset 0 -2px 8px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  overflow: hidden;
  margin-bottom: 22px;
}

/* Lueur d'ambiance bleutée au centre de la scène visuelle */
.stage-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(46, 167, 242, 0.18) 0%, transparent 70%);
  pointer-events: none;
  transition: all 0.35s ease;
}

.vitreous-card:hover .stage-glow {
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(217, 162, 27, 0.2) 0%, transparent 70%);
}

/* Monogramme sérif noble en filigrane soyeux */
.stage-monogram-watermark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 64px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.2);
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
  user-select: none;
  pointer-events: none;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.vitreous-card:hover .stage-monogram-watermark {
  color: rgba(217, 162, 27, 0.45);
  transform: scale(1.05);
}

/* Badges flottants en verre dépoli sur la scène visuelle */
.stage-badges-bar {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.stage-country-capsule {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(3, 18, 38, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 5px 12px;
  border-radius: 99px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.country-beacon {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-gold);
  box-shadow: 0 0 8px rgba(217, 162, 27, 0.8);
}

.country-name {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.stage-topic-capsule {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  color: #D6E4F0;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 5px 12px;
  border-radius: 99px;
  white-space: nowrap;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ==========================================================================
   IDENTITÉ & TITRES DU SPEAKER
   ========================================================================== */
.card-identity-block {
  margin-bottom: 6px;
}

.speaker-name {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.25;
  margin: 0 0 5px 0;
  transition: color 0.2s ease;
}

.vitreous-card:hover .speaker-name {
  color: #FFFFFF;
}

.speaker-role {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 500;
  color: #9FB8D2;
  line-height: 1.35;
  margin: 0 0 3px 0;
}

.speaker-org {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  color: #2EA7F2;
  line-height: 1.35;
  margin: 0;
}

/* ==========================================================================
   SÉPARATEUR EN FILIGRANE D'OR
   ========================================================================== */
.card-gold-separator {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(217, 162, 27, 0.45) 0%, rgba(255, 255, 255, 0.1) 60%, transparent 100%);
  margin: 18px 0;
}

/* ==========================================================================
   CHAMBRE BIO EN VERRE DÉPOLI NOCTURNE
   ========================================================================== */
.card-bio-chamber {
  flex: 1;
  background: rgba(255, 255, 255, 0.045);
  border-radius: 14px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    inset 1px 1px 3px rgba(0, 0, 0, 0.25), 
    inset -1px -1px 3px rgba(255, 255, 255, 0.04);
  margin-bottom: 20px;
}

.bio-text {
  font-family: var(--font-sans);
  font-size: 13.5px;
  line-height: 1.65;
  color: #D1DFEC;
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
  color: #E2EBF5;
  padding: 5px 12px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

.vitreous-card:hover .topic-gem {
  background: rgba(46, 167, 242, 0.15);
  border-color: rgba(46, 167, 242, 0.4);
  color: #FFFFFF;
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
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease;
}

.action-text {
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 700;
  color: #E6EFF8;
  transition: color 0.2s ease;
}

.action-disc {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  transition: all 0.25s ease;
}

.action-disc svg {
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
}

.vitreous-card:hover .card-action-bar {
  background: rgba(217, 162, 27, 0.18);
  border-color: rgba(217, 162, 27, 0.45);
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
  background: #F8FAFD;
  border: 1px solid #E2E8F0;
  border-radius: 24px;
  box-shadow: 
    10px 16px 36px rgba(8, 43, 85, 0.06), 
    -8px -8px 24px #FFFFFF;
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
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  box-shadow: 
    2px 3px 8px rgba(8, 43, 85, 0.06);
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
    padding: 20px;
  }

  .card-visual-stage {
    height: 170px;
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
