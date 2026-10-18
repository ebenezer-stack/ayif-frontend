<script setup lang="ts">
import { heroStats } from '../../data/mockData'
import AnimatedCounter from '../common/AnimatedCounter.vue'

const getStatIcon = (index: number, label: string) => {
  const l = label.toLowerCase()
  if (l.includes('participant') || l.includes('délégué')) return 'people'
  if (l.includes('pays') || l.includes('nation')) return 'globe'
  if (l.includes('speaker') || l.includes('intervenant') || l.includes('expert')) return 'speaker'
  if (l.includes('fond') || l.includes('investisseur') || l.includes('capital')) return 'finance'
  
  const fallback = ['people', 'globe', 'speaker', 'finance']
  return fallback[index % fallback.length]
}
</script>

<template>
  <section class="stats-banner-section">
    <!-- FOND PHOTOGRAPHIQUE AVEC OVERLAY BLEU NUIT DE LA CHARTE -->
    <div class="stats-banner-overlay" aria-hidden="true"></div>

    <div class="wrap stats-content-wrap">
      <div class="stats-grid">
        <div
          v-for="(s, i) in heroStats"
          :key="s.label"
          v-reveal="{ effect: 'up', delay: i * 110 }"
          class="stat-item"
        >
          <!-- BADGE EN FORME DE GALET ORGANIQUE AVEC LISERÉ INCURVÉ EXTÉRIEUR (RÉFÉRENCE UTILISATEUR) -->
          <div class="stat-pebble-badge">
            <!-- People / Participants -->
            <svg
              v-if="getStatIcon(i, s.label) === 'people'"
              class="badge-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>

            <!-- Globe / Pays -->
            <svg
              v-else-if="getStatIcon(i, s.label) === 'globe'"
              class="badge-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>

            <!-- Speaker / Microphone -->
            <svg
              v-else-if="getStatIcon(i, s.label) === 'speaker'"
              class="badge-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="22"/>
              <line x1="8" y1="22" x2="16" y2="22"/>
            </svg>

            <!-- Finance / Investisseurs / Capitaux -->
            <svg
              v-else
              class="badge-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>

          <!-- GRAND CHIFFRE NUMÉRIQUE ANIMÉ -->
          <div class="stat-number">
            <AnimatedCounter :value="s.value" />
          </div>

          <!-- LIBELLÉ AVEC PRÉFIXE '+' CONFORME À LA RÉFÉRENCE -->
          <div class="stat-title">
            + {{ s.label }}
          </div>

          <!-- DÉTAIL SOUS LE TITRE -->
          <div v-if="s.detail" class="stat-caption">
            {{ s.detail }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   BANDEAU STATISTIQUES AVEC FOND PHOTOGRAPHIQUE & OVERLAY CHARTE AYIF
   ========================================================================== */
.stats-banner-section {
  position: relative;
  background-image: url('/images/hero-conference.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 0;
  border-top: 1px solid var(--navy-line);
  border-bottom: 1px solid var(--navy-line);
  overflow: hidden;
}

.stats-banner-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(8, 43, 85, 0.88);
  backdrop-filter: blur(2px);
  z-index: 1;
}

.stats-content-wrap {
  position: relative;
  z-index: 2;
  max-width: 1200px;
}

/* ==========================================================================
   GRILLE DES 4 INDICATEURS
   ========================================================================== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  align-items: flex-start;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.25s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
}

/* ==========================================================================
   BADGE ORGANIQUE EN GALET AVEC CONTOUR COURBÉ DÉCALÉ (RÉFÉRENCE)
   ========================================================================== */
.stat-pebble-badge {
  width: 78px;
  height: 66px;
  background-color: var(--color-gold);
  border-radius: 46% 54% 48% 52% / 54% 46% 54% 46%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  position: relative;
  color: #ffffff;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* Liseré extérieur courbé décalé en bas à droite (comme sur la 2e image) */
.stat-pebble-badge::after {
  content: '';
  position: absolute;
  right: -6px;
  bottom: -4px;
  width: 100%;
  height: 100%;
  border-radius: 46% 54% 48% 52% / 54% 46% 54% 46%;
  border-right: 2.5px solid #ffffff;
  border-bottom: 2.5px solid #ffffff;
  pointer-events: none;
}

.stat-item:hover .stat-pebble-badge {
  transform: scale(1.08);
}

.badge-svg {
  width: 30px;
  height: 30px;
  stroke: #ffffff;
  flex-shrink: 0;
}

/* ==========================================================================
   CHIFFRE, TITRE & DÉTAIL
   ========================================================================== */
.stat-number {
  font-family: var(--font-serif);
  font-size: 38px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.stat-title {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.35;
  margin-bottom: 6px;
}

.stat-caption {
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--navy-muted);
  line-height: 1.45;
  max-width: 220px;
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 992px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 24px;
  }
}

@media (max-width: 580px) {
  .stats-banner-section {
    padding: 60px 0;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .stat-number {
    font-size: 34px;
  }
}
</style>
