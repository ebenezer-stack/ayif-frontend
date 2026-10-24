<script setup lang="ts">
import { ref, computed } from 'vue'
import { speakers } from '../../data/mockData'

const selectedEdition = ref<'2026' | '2025'>('2025')
const featuredSpeakers = speakers.filter(s => s.featured).slice(0, 3)

// Options de motifs géométriques patrimoniaux (100% Zéro Dégradé)
const patternOptions = [
  { id: 'danxome', name: 'Royal Danxomè (Bénin)', symbol: '◆' },
  { id: 'guilloche', name: 'Guilloche Diplomatique', symbol: '✦' },
  { id: 'kente', name: 'Tissage Panafricain', symbol: '❖' }
]
const selectedPattern = ref<'danxome' | 'guilloche' | 'kente'>('danxome')

// 4 Collèges stratégiques en cours d'homologation protocolaire pour 2026
const strategicColleges2026 = [
  {
    number: '01',
    title: 'Ministres & Régulateurs',
    seats: '12 Sièges Protocolaires',
    domains: 'ZLECAf, intégration monétaire UEMOA-CEDEAO, douanes et corridors',
    status: 'Validation interministérielle en cours'
  },
  {
    number: '02',
    title: 'Fonds Souverains & VCs',
    seats: '18 Gérants de Fonds',
    domains: 'Capital-risque africain, dette privée, private equity & business angels',
    status: 'Comités de sélection des deal-rooms'
  },
  {
    number: '03',
    title: 'Licornes & Bâtisseurs Tech',
    seats: '14 Fondateurs Panafricains',
    domains: 'Fintech, infrastructures numériques, agritech, logistique & IA',
    status: 'Confirmation des keynotes sessions'
  },
  {
    number: '04',
    title: 'Capitaines de l\'Industrie',
    seats: '10 Groupes Industriels',
    domains: 'Zone industrielle de Glo-Djigbé (GDIZ), transformation agricole, ports & énergie',
    status: 'Délégations patronales Bénin-Nigéria'
  }
]

// Filtres interactifs par secteur d'expertise (édition 2025)
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
    <!-- AMBIANCE LUMINEUSE PROFONDE -->
    <div class="ambient-glow glow-blue" aria-hidden="true"></div>
    <div class="ambient-glow glow-gold" aria-hidden="true"></div>

    <div class="wrap speakers-wrap">
      <!-- HEADER ÉDITORIAL PRESTIGIEUX -->
      <div v-reveal class="speakers-header">
        <div class="header-intro">
          <div class="editorial-kicker">
            <span class="kicker-seal-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </span>
            <span class="kicker-label">Intervenants &amp; Décideurs Continentaux</span>
          </div>
          <h2 class="section-title">Les Voix qui Façonnent l'Économie</h2>
          <p class="section-desc">
            Chaque édition de l'AYIF réunit son collège d'intervenants de premier ordre. Les personnalités officielles de chaque forum sont publiées au fur et à mesure de leur validation protocolaire.
          </p>
        </div>

        <NuxtLink to="/speakers" class="neu-all-link">
          <span class="link-label">Voir l'annuaire complet</span>
          <span class="link-count">Par édition</span>
          <div class="link-disc" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </NuxtLink>
      </div>

      <!-- NAVIGATION CHRONOLOGIQUE DES ÉDITIONS (ÉDITORIALE, SANS PILLULE, SANS BORDER-TOP) -->
      <nav v-reveal class="summit-chronicle-nav" aria-label="Navigation chronologique des éditions">
        <button 
          type="button" 
          role="tab"
          :aria-selected="selectedEdition === '2026'"
          class="chronicle-tab-btn" 
          :class="{ active: selectedEdition === '2026' }"
          @click="selectedEdition = '2026'"
        >
          <span class="tab-kicker-year">Édition 2026</span>
          <span class="tab-place-title">Cotonou, Bénin</span>
          <span class="tab-state-sub">Homologation officielle en cours</span>
        </button>

        <button 
          type="button" 
          role="tab"
          :aria-selected="selectedEdition === '2025'"
          class="chronicle-tab-btn" 
          :class="{ active: selectedEdition === '2025' }"
          @click="selectedEdition = '2025'"
        >
          <span class="tab-kicker-year">Édition 2025</span>
          <span class="tab-place-title">Abuja, Nigéria</span>
          <span class="tab-state-sub">Délégation d'Honneur &amp; Rétrospective</span>
        </button>
      </nav>

      <!-- ÉTAT 2026 : LA TABLE STRATÉGIQUE DES 4 COLLÈGES (CADRAGE INSTITUTIONNEL) -->
      <div v-if="selectedEdition === '2026'" v-reveal class="summit-ledger-container">
        <!-- Bandeau de cadrage protocolaire -->
        <div class="ledger-header-strip">
          <div class="ledger-header-intro">
            <span class="ledger-seal-tag">Protocole Bilatéral NACCIMA × Elieson</span>
            <h3 class="ledger-headline">La Sélection Officielle 2026 : 4 Collèges de Décideurs</h3>
            <p class="ledger-intro-text">
              Les personnalités intervenantes sont officialisées par vagues successives par le comité protocolaire bilatéral Bénin–Nigéria dès confirmation de leur participation.
            </p>
          </div>
          <div class="ledger-header-actions">
            <NuxtLink to="/speakers#candidature" class="ledger-header-cta">
              <span>Recommander un intervenant</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="cta-icon" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Matrice des 4 Collèges en Colonnes Éditoriales avec Séparateurs Verticaux Purs -->
        <div class="ledger-matrix">
          <article 
            v-for="c in strategicColleges2026" 
            :key="c.number" 
            class="ledger-column"
          >
            <div class="col-num-line">
              <span class="col-order-num">{{ c.number }}</span>
              <span class="col-seats-label">{{ c.seats }}</span>
            </div>
            
            <h4 class="col-title">{{ c.title }}</h4>
            <p class="col-domains-desc">{{ c.domains }}</p>
            
            <div class="col-status-bar">
              <span class="status-tick" aria-hidden="true"></span>
              <span class="status-phrase">{{ c.status }}</span>
            </div>
          </article>
        </div>

        <!-- Pied du Registre -->
        <div class="ledger-footer-row">
          <span class="footer-venue-meta">
            Palais des Congrès de Cotonou • 03-05 Décembre 2026 • 54 Sièges Protocolaires
          </span>
          <button type="button" class="footer-archive-btn" @click="selectedEdition = '2025'">
            Consulter la rétrospective d'Abuja 2025 →
          </button>
        </div>
      </div>

      <!-- ÉTAT 2025 : INTERVENANTS HISTORIQUES ABUJA -->
      <div v-else>
        <!-- SÉLECTEUR DE FILTRES -->
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

        <!-- BARRE DE SÉLECTION DU MOTIF GÉOMÉTRIQUE PROTOCOLAIRE -->
        <div v-reveal class="pattern-selector-bar">
          <span class="pattern-selector-label">
            <svg viewBox="0 0 16 16" fill="currentColor" class="pattern-icon" aria-hidden="true">
              <path d="M8 1l2.5 5 5.5.5-4 4 1 5.5-5-3-5 3 1-5.5-4-4 5.5-.5z"/>
            </svg>
            Motif géométrique de prestige :
          </span>
          <div class="pattern-pills-group" role="tablist" aria-label="Choisir le motif géométrique">
            <button
              v-for="p in patternOptions"
              :key="p.id"
              type="button"
              role="tab"
              :aria-selected="selectedPattern === p.id"
              class="pattern-pill-btn"
              :class="{ active: selectedPattern === p.id }"
              @click="selectedPattern = (p.id as any)"
            >
              <span class="p-symbol">{{ p.symbol }}</span>
              <span class="p-name">{{ p.name }}</span>
            </button>
          </div>
        </div>

        <!-- GRILLE DE CARTES EN FOND BLEU NUIT AVEC MOTIFS PATRIMONIAUX -->
        <div class="speakers-vitreous-grid">
          <NuxtLink 
            v-for="(s, i) in displayedSpeakers" 
            :key="s.id" 
            v-reveal="{ effect: 'up', delay: i * 80 }"
            to="/speakers" 
            class="vitreous-card"
            :class="[`pattern-card-${selectedPattern}`]"
          >
            <!-- BANDEAU SUPÉRIEUR ORNEMENTAL DE PROTOCOLE -->
            <div class="card-pattern-crown" aria-hidden="true">
              <div class="crown-security-line"></div>
            </div>

            <!-- REPERES D'ANGLES PROTOCOLAIRES -->
            <div class="corner-bracket corner-tl" aria-hidden="true"></div>
            <div class="corner-bracket corner-tr" aria-hidden="true"></div>
            <div class="corner-bracket corner-bl" aria-hidden="true"></div>
            <div class="corner-bracket corner-br" aria-hidden="true"></div>

            <!-- SCÈNE VISUELLE AVEC MOTIF GÉOMÉTRIQUE & SCEAU PROTOCOLAIRE -->
            <div class="card-visual-stage" :class="[`pattern-bg-${selectedPattern}`]">
              <!-- BADGES FLOTTANTS EN VERRE SOLIDE -->
              <div class="stage-badges-bar">
                <div class="stage-country-capsule">
                  <span class="country-name">{{ s.country }}</span>
                </div>
                <span v-if="s.topics && s.topics[0]" class="stage-topic-capsule">
                  {{ s.topics[0] }}
                </span>
              </div>

              <!-- SCEAU CENTRAL MONOGRAMME DIPLOMATIQUE -->
              <div class="stage-seal-emblem">
                <div class="seal-outer-lattice" aria-hidden="true"></div>
                <div class="seal-inner-core">
                  <span class="monogram-initials">{{ s.initials }}</span>
                  <span class="monogram-sub-seal" aria-hidden="true">◆</span>
                </div>
              </div>

              <!-- BANDEAU BAS DU STAGE : FILIGRANE D'ACCRÉDITATION -->
              <div class="stage-footer-strip">
                <span class="accreditation-code">AYIF·2025·#{{ s.id.slice(0, 3).toUpperCase() }}</span>
                <span class="credential-seal-mark">OFFICIEL</span>
              </div>
            </div>

            <!-- IDENTITÉ & TITRES DU SPEAKER -->
            <div class="card-identity-block">
              <h3 class="speaker-name">{{ s.name }}</h3>
              <p class="speaker-role">{{ s.role }}</p>
              <p class="speaker-org">{{ s.organization }}</p>
            </div>

            <!-- SÉPARATEUR EN FILIGRANE D'OR AVEC LOSANGE CENTRAL -->
            <div class="card-gold-separator" aria-hidden="true">
              <span class="sep-rule-left"></span>
              <span class="sep-diamond">◆</span>
              <span class="sep-rule-right"></span>
            </div>

            <!-- CHAMBRE BIO EN VERRE NOCTURNE AVEC BORDURE ACCENT -->
            <div class="card-bio-chamber">
              <p class="bio-text">{{ s.bio }}</p>
            </div>

            <!-- DOMAINES D'EXPERTISE -->
            <div v-if="s.topics && s.topics.length" class="topics-gem-cluster">
              <span 
                v-for="(topic, tIdx) in s.topics.slice(0, 2)" 
                :key="tIdx" 
                class="topic-gem"
              >
                {{ topic }}
              </span>
            </div>

            <!-- BOUTON D'ACTION TACTILE -->
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
      </div>

      <!-- BANDEAU CTA BAS : SCEAU DIPLOMATIQUE ÉLÉGANT (SUPPRESSION DÉFINITIVE DU CARRÉ BLANC À POINT JAUNE) -->
      <div v-reveal class="speakers-cta-casket">
        <div class="casket-content">
          <!-- Sceau Héraldique Officiel AYIF (Remplace le carré vide avec point) -->
          <div class="casket-heraldic-seal" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" class="seal-svg">
              <circle cx="24" cy="24" r="22" stroke="#D9A21B" stroke-width="1.5" stroke-dasharray="3 3" />
              <circle cx="24" cy="24" r="18" fill="rgba(8, 43, 85, 0.9)" stroke="#D9A21B" stroke-width="1.5" />
              <path d="M24 11L27.5 19.5L36.5 20.5L30 26.5L31.5 35.5L24 31L16.5 35.5L18 26.5L11.5 20.5L20.5 19.5L24 11Z" fill="#D9A21B" />
            </svg>
          </div>
          <div class="casket-text">
            <h4 class="casket-heading">Rejoindre la tribune officielle AYIF 2026</h4>
            <p class="casket-sub">
              Les candidatures de keynotes, modérateurs de panels et présentateurs de fonds d'investissement sont examinées par le comité protocolaire jusqu'au 31 août 2026.
            </p>
          </div>
        </div>
        <NuxtLink to="/speakers#candidature" class="casket-btn">
          <span>Déposer une candidature officielle</span>
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
   CANEVAS DE SECTION
   ========================================================================== */
.speakers-curated-section {
  position: relative;
  padding: 104px 0 112px;
  background-color: var(--bg-page);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
  border-top: 1px solid var(--border-line);
  border-bottom: 1px solid var(--border-line);
  overflow: hidden;
}

.ambient-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  z-index: 1;
}

.glow-blue {
  display: none;
}

.glow-gold {
  display: none;
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

.kicker-seal-icon {
  width: 16px;
  height: 16px;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
}

.kicker-seal-icon svg {
  width: 100%;
  height: 100%;
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
  color: var(--text-page);
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 14px 0;
}

.section-desc {
  font-family: var(--font-sans);
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

.neu-all-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 18px 10px 22px;
  border-radius: 4px;
  background: var(--bg-surface);
  border: 1px solid var(--border-line);
  box-shadow: 0 4px 14px rgba(8, 43, 85, 0.05);
  text-decoration: none;
  transition: all 0.25s ease;
}

.neu-all-link:hover {
  transform: translateY(-2px);
  border-color: var(--color-accent);
  box-shadow: 0 8px 20px rgba(7, 87, 184, 0.12);
}

.link-label {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  color: var(--text-page);
}

.link-count {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  color: #0757B8;
  background: rgba(7, 87, 184, 0.1);
  padding: 3px 9px;
  border-radius: 2px;
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
   NAVIGATION CHRONOLOGIQUE DES ÉDITIONS (ÉDITORIALE, SANS PILULE, SANS BORDER-TOP)
   ========================================================================== */
.summit-chronicle-nav {
  display: flex;
  align-items: stretch;
  gap: 0;
  border-bottom: 1px solid var(--border-line);
  margin-bottom: 36px;
  background: transparent;
}

.chronicle-tab-btn {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 16px 28px 16px 0;
  margin-right: 36px;
  background: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-align: left;
  opacity: 0.6;
  transition: all 0.22s ease;
}

.chronicle-tab-btn:hover {
  opacity: 0.9;
}

.chronicle-tab-btn.active {
  opacity: 1;
}

.chronicle-tab-btn::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 28px;
  height: 3px;
  background-color: transparent;
  transition: background-color 0.22s ease;
}

.chronicle-tab-btn.active::after {
  background-color: var(--ayif-navy);
}

:root.dark .chronicle-tab-btn.active::after,
.dark .chronicle-tab-btn.active::after {
  background-color: var(--color-gold);
}

.tab-kicker-year {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.chronicle-tab-btn.active .tab-kicker-year {
  color: #B5810E;
}

:root.dark .chronicle-tab-btn.active .tab-kicker-year,
.dark .chronicle-tab-btn.active .tab-kicker-year {
  color: var(--color-gold);
}

.tab-place-title {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.2;
}

.chronicle-tab-btn.active .tab-place-title {
  font-weight: 800;
  color: var(--ayif-navy);
}

:root.dark .chronicle-tab-btn.active .tab-place-title,
.dark .chronicle-tab-btn.active .tab-place-title {
  color: #FFFFFF;
}

.tab-state-sub {
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}

.chronicle-tab-btn:hover .tab-place-title {
  color: var(--ayif-blue);
}

/* ==========================================================================
   LE REGISTRE PLÉNIER 2026 : MATRICE DES 4 COLLÈGES (HAUTE DIPLOMATIE)
   ========================================================================== */
.summit-ledger-container {
  background: var(--bg-surface);
  border-left: 1px solid var(--border-line);
  border-right: 1px solid var(--border-line);
  border-bottom: 1px solid var(--border-line);
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 20px rgba(8, 43, 85, 0.04);
  margin-bottom: 48px;
}

:root.dark .summit-ledger-container,
.dark .summit-ledger-container {
  background: #07203E;
  border-color: rgba(46, 167, 242, 0.2);
}

/* Bandeau Supérieur du Registre */
.ledger-header-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 32px 36px;
  border-bottom: 1px solid var(--border-line);
  flex-wrap: wrap;
}

.ledger-header-intro {
  flex: 1;
  min-width: 280px;
}

.ledger-seal-tag {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #B5810E;
  background: rgba(217, 162, 27, 0.12);
  border: 1px solid rgba(217, 162, 27, 0.35);
  padding: 3px 8px;
  border-radius: 2px;
  margin-bottom: 10px;
}

:root.dark .ledger-seal-tag,
.dark .ledger-seal-tag {
  color: var(--color-gold);
}

.ledger-headline {
  font-family: var(--font-serif);
  font-size: clamp(1.4rem, 2vw, 1.75rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.25;
  margin: 0 0 8px 0;
}

.ledger-intro-text {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 760px;
  margin: 0;
}

.ledger-header-actions {
  flex-shrink: 0;
}

.ledger-header-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  background-color: var(--ayif-navy);
  color: #FFFFFF;
  border: 1px solid var(--ayif-navy);
  border-radius: 4px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
}

.ledger-header-cta:hover {
  background-color: var(--ayif-blue);
  border-color: var(--ayif-blue);
  transform: translateY(-1px);
}

.cta-icon {
  width: 14px;
  height: 14px;
  color: var(--color-gold);
  transition: transform 0.2s ease;
}

.ledger-header-cta:hover .cta-icon {
  transform: translateX(3px);
}

/* Matrice 4 Colonnes avec Filets Verticaux Purs */
.ledger-matrix {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid var(--border-line);
}

.ledger-column {
  padding: 32px 28px;
  border-right: 1px solid var(--border-line);
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s ease;
}

.ledger-column:last-child {
  border-right: none;
}

.ledger-column:hover {
  background-color: rgba(8, 43, 85, 0.02);
}

:root.dark .ledger-column:hover,
.dark .ledger-column:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.col-num-line {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 18px;
}

.col-order-num {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.col-seats-label {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ayif-blue);
}

:root.dark .col-seats-label,
.dark .col-seats-label {
  color: var(--ayif-sky);
}

.col-title {
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.3;
  margin: 0 0 12px 0;
}

.col-domains-desc {
  font-family: var(--font-sans);
  font-size: 12.5px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-line);
  flex: 1;
}

.col-status-bar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-tick {
  width: 5px;
  height: 5px;
  background-color: var(--color-gold);
  border-radius: 0;
  flex-shrink: 0;
}

.status-phrase {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  line-height: 1.3;
}

/* Pied du Registre Plénier */
.ledger-footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 36px;
  background-color: rgba(8, 43, 85, 0.02);
  flex-wrap: wrap;
}

:root.dark .ledger-footer-row,
.dark .ledger-footer-row {
  background-color: rgba(0, 0, 0, 0.15);
}

.footer-venue-meta {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.02em;
}

.footer-archive-btn {
  background: transparent;
  border: none;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  color: var(--ayif-blue);
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
}

:root.dark .footer-archive-btn,
.dark .footer-archive-btn {
  color: var(--ayif-sky);
}

.footer-archive-btn:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .ledger-matrix {
    grid-template-columns: repeat(2, 1fr);
  }
  .ledger-column:nth-child(2) {
    border-right: none;
  }
  .ledger-column:nth-child(1),
  .ledger-column:nth-child(2) {
    border-bottom: 1px solid var(--border-line);
  }
}

@media (max-width: 640px) {
  .ledger-matrix {
    grid-template-columns: 1fr;
  }
  .ledger-column {
    border-right: none;
    border-bottom: 1px solid var(--border-line);
  }
  .ledger-column:last-child {
    border-bottom: none;
  }
}

/* ==========================================================================
   TRAY NEUMORPHIQUE POUR LES FILTRES 2025
   ========================================================================== */
.neu-tray-wrapper {
  margin-bottom: 44px;
}

.neu-tray {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  background: var(--bg-surface);
  padding: 6px;
  border-radius: 4px;
  border: 1px solid var(--border-line);
}

.neu-tray-pill {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  background: transparent;
  border: 1px solid transparent;
  padding: 8px 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.22s ease;
}

.neu-tray-pill:hover {
  color: var(--text-page);
}

.neu-tray-pill.active {
  background: var(--bg-page);
  color: var(--ayif-blue);
  font-weight: 700;
  border: 1px solid var(--border-line);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* ==========================================================================
   BARRE DE SÉLECTION DU MOTIF GÉOMÉTRIQUE PROTOCOLAIRE
   ========================================================================== */
.pattern-selector-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  padding: 12px 20px;
  background: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 6px;
}

.pattern-selector-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}

.pattern-icon {
  width: 14px;
  height: 14px;
  color: var(--color-gold);
}

.pattern-pills-group {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.pattern-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  background: var(--bg-page);
  border: 1px solid var(--border-line);
  border-radius: 4px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  color: var(--text-page);
  cursor: pointer;
  transition: all 0.2s ease;
}

.pattern-pill-btn .p-symbol {
  color: var(--color-gold);
  font-size: 11px;
}

.pattern-pill-btn:hover {
  border-color: var(--color-gold);
  color: var(--ayif-blue);
}

.pattern-pill-btn.active {
  background: var(--ayif-navy);
  border-color: var(--color-gold);
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(8, 43, 85, 0.2);
}

.pattern-pill-btn.active .p-symbol {
  color: var(--color-gold);
}

/* ==========================================================================
   DÉFINITION DES MOTIFS GÉOMÉTRIQUES (100% SVG PUR, ZÉRO DÉGRADÉ)
   ========================================================================== */
.pattern-bg-danxome {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M28 0 L56 28 L28 56 L0 28 Z' fill='none' stroke='%23D9A21B' stroke-width='1.2' stroke-opacity='0.24'/%3E%3Cpath d='M28 10 L46 28 L28 46 L10 28 Z' fill='none' stroke='%232EA7F2' stroke-width='1' stroke-opacity='0.18'/%3E%3Cpath d='M28 20 L36 28 L28 36 L20 28 Z' fill='none' stroke='%23D9A21B' stroke-width='1' stroke-opacity='0.3'/%3E%3Crect x='26.5' y='26.5' width='3' height='3' fill='%23D9A21B' fill-opacity='0.45'/%3E%3Cpath d='M0 0 L14 14 M42 42 L56 56 M56 0 L42 14 M0 56 L14 42' stroke='%232EA7F2' stroke-width='0.8' stroke-opacity='0.16'/%3E%3Cpath d='M0 28 L8 20 M0 28 L8 36 M56 28 L48 20 M56 28 L48 36 M28 0 L20 8 M28 0 L36 8 M28 56 L20 48 M28 56 L36 48' stroke='%23FFFFFF' stroke-width='0.6' stroke-opacity='0.12'/%3E%3C/svg%3E");
  background-size: 56px 56px;
  background-repeat: repeat;
}

.pattern-bg-guilloche {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Ccircle cx='22' cy='22' r='20' fill='none' stroke='%23D9A21B' stroke-width='0.9' stroke-opacity='0.22' stroke-dasharray='3 2'/%3E%3Ccircle cx='22' cy='22' r='14' fill='none' stroke='%232EA7F2' stroke-width='0.9' stroke-opacity='0.18'/%3E%3Ccircle cx='22' cy='22' r='8' fill='none' stroke='%23D9A21B' stroke-width='1' stroke-opacity='0.28'/%3E%3Cpath d='M22 2 L22 42 M2 22 L42 22 M8 8 L36 36 M8 36 L36 8' stroke='%23FFFFFF' stroke-width='0.5' stroke-opacity='0.1'/%3E%3Cpath d='M0 22 A22 22 0 0 1 22 0 M22 0 A22 22 0 0 1 44 22 M44 22 A22 22 0 0 1 22 44 M22 44 A22 22 0 0 1 0 22' fill='none' stroke='%232EA7F2' stroke-width='0.75' stroke-opacity='0.14'/%3E%3C/svg%3E");
  background-size: 44px 44px;
  background-repeat: repeat;
}

.pattern-bg-kente {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M0 12 L24 0 L48 12 M0 36 L24 24 L48 36 M0 48 L24 36 L48 48' fill='none' stroke='%23D9A21B' stroke-width='1' stroke-opacity='0.24'/%3E%3Cpath d='M12 0 L24 6 L36 0 M12 24 L24 30 L36 24 M12 48 L24 54 L36 48' fill='none' stroke='%232EA7F2' stroke-width='0.8' stroke-opacity='0.18'/%3E%3Cpath d='M24 0 L24 48 M0 24 L48 24' stroke='%23FFFFFF' stroke-width='0.6' stroke-opacity='0.09'/%3E%3Cpolygon points='24,18 28,24 24,30 20,24' fill='none' stroke='%23D9A21B' stroke-width='1' stroke-opacity='0.35'/%3E%3C/svg%3E");
  background-size: 48px 48px;
  background-repeat: repeat;
}

/* ==========================================================================
   GRILLE EN CARTES BLEU NUIT PRESTIGE 2025
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
  background-color: #07203E;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 24px;
  text-decoration: none;
  box-shadow: 
    0 14px 44px rgba(8, 43, 85, 0.18),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

/* Filigrane discret en fond de carte */
.vitreous-card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.035;
  background-size: 56px 56px;
  background-repeat: repeat;
  z-index: 1;
}

.pattern-card-danxome::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M28 0 L56 28 L28 56 L0 28 Z' fill='none' stroke='%232EA7F2' stroke-width='1'/%3E%3C/svg%3E");
}

.pattern-card-guilloche::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Ccircle cx='22' cy='22' r='18' fill='none' stroke='%232EA7F2' stroke-width='1'/%3E%3C/svg%3E");
}

.pattern-card-kente::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M0 12 L24 0 L48 12 M0 36 L24 24 L48 36' fill='none' stroke='%232EA7F2' stroke-width='1'/%3E%3C/svg%3E");
}

.vitreous-card:hover {
  transform: translateY(-6px);
  border-color: rgba(217, 162, 27, 0.75);
  box-shadow: 
    0 22px 56px rgba(8, 43, 85, 0.35),
    0 0 0 1px rgba(217, 162, 27, 0.4);
}

/* BANDEAU SUPÉRIEUR ORNEMENTAL DE PROTOCOLE */
.card-pattern-crown {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--color-gold);
  z-index: 4;
}

.crown-security-line {
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='4' viewBox='0 0 24 4'%3E%3Crect x='0' y='0' width='10' height='4' fill='%23D9A21B'/%3E%3Crect x='12' y='0' width='10' height='4' fill='%232EA7F2'/%3E%3C/svg%3E");
  background-size: 24px 4px;
  background-repeat: repeat-x;
}

/* REPERES D'ANGLES PROTOCOLAIRES */
.corner-bracket {
  position: absolute;
  width: 8px;
  height: 8px;
  pointer-events: none;
  z-index: 3;
  transition: border-color 0.25s ease;
}

.corner-tl {
  top: 6px;
  left: 6px;
  border-top: 1.5px solid rgba(217, 162, 27, 0.45);
  border-left: 1.5px solid rgba(217, 162, 27, 0.45);
}

.corner-tr {
  top: 6px;
  right: 6px;
  border-top: 1.5px solid rgba(217, 162, 27, 0.45);
  border-right: 1.5px solid rgba(217, 162, 27, 0.45);
}

.corner-bl {
  bottom: 6px;
  left: 6px;
  border-bottom: 1.5px solid rgba(217, 162, 27, 0.45);
  border-left: 1.5px solid rgba(217, 162, 27, 0.45);
}

.corner-br {
  bottom: 6px;
  right: 6px;
  border-bottom: 1.5px solid rgba(217, 162, 27, 0.45);
  border-right: 1.5px solid rgba(217, 162, 27, 0.45);
}

.vitreous-card:hover .corner-bracket {
  border-color: var(--color-gold);
}

/* SCÈNE VISUELLE AVEC MOTIF GÉOMÉTRIQUE ET ANIMATIONS */
.card-visual-stage {
  position: relative;
  width: 100%;
  height: 204px;
  border-radius: 4px;
  background-color: var(--ayif-navy);
  border: 1px solid rgba(217, 162, 27, 0.32);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 16px;
  overflow: hidden;
  margin-bottom: 22px;
  z-index: 2;
  animation: pattern-drift 45s linear infinite;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

@keyframes pattern-drift {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 56px 56px;
  }
}

.vitreous-card:hover .card-visual-stage {
  border-color: var(--color-gold);
  box-shadow: 0 0 18px rgba(217, 162, 27, 0.25);
  animation-duration: 20s;
}

.stage-badges-bar {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.stage-country-capsule {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(4, 18, 36, 0.82);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(217, 162, 27, 0.4);
  padding: 5px 14px;
  border-radius: 99px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.25s ease;
}

.country-name {
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #F3CA52;
  line-height: 1;
}

.stage-topic-capsule {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #E2EBF5;
  background-color: rgba(4, 18, 36, 0.82);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(46, 167, 242, 0.32);
  padding: 5px 12px;
  border-radius: 99px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  line-height: 1;
  transition: all 0.25s ease;
}

.vitreous-card:hover .stage-country-capsule {
  border-color: #F3CA52;
  background-color: rgba(8, 43, 85, 0.92);
  box-shadow: 0 4px 12px rgba(8, 43, 85, 0.4);
}

.vitreous-card:hover .stage-topic-capsule {
  border-color: rgba(46, 167, 242, 0.6);
  background-color: rgba(8, 43, 85, 0.92);
}

/* SCEAU CENTRAL MONOGRAMME DIPLOMATIQUE AVEC ANIMATIONS */
.stage-seal-emblem {
  position: relative;
  margin: auto;
  width: 74px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.vitreous-card:hover .stage-seal-emblem {
  transform: scale(1.08);
}

.seal-outer-lattice {
  position: absolute;
  inset: -6px;
  border: 1px dashed rgba(217, 162, 27, 0.45);
  border-radius: 50%;
  animation: seal-spin-slow 28s linear infinite;
  transition: border-color 0.3s ease;
}

.vitreous-card:hover .seal-outer-lattice {
  border-color: var(--color-gold);
  animation-duration: 14s;
}

@keyframes seal-spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.seal-inner-core {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: #041224;
  border: 1.5px solid var(--color-gold);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  animation: seal-breathe 4s ease-in-out infinite;
  transition: all 0.3s ease;
}

@keyframes seal-breathe {
  0%, 100% {
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
  }
  50% {
    box-shadow: 0 4px 20px rgba(217, 162, 27, 0.28);
  }
}

.vitreous-card:hover .seal-inner-core {
  border-color: #FFFFFF;
  box-shadow: 0 0 22px rgba(217, 162, 27, 0.4);
}

.monogram-initials {
  font-family: var(--font-serif);
  font-size: 26px;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: 0.06em;
  line-height: 1;
}

.monogram-sub-seal {
  font-size: 8px;
  color: var(--color-gold);
  line-height: 1;
  animation: diamond-gleam 2.5s ease-in-out infinite;
}

@keyframes diamond-gleam {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

.stage-footer-strip {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 2px;
}

.accreditation-code {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.25s ease;
}

.vitreous-card:hover .accreditation-code {
  color: var(--color-accent);
}

.credential-seal-mark {
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
  background-color: rgba(8, 43, 85, 0.9);
  border: 1px solid rgba(217, 162, 27, 0.4);
  padding: 2px 6px;
  border-radius: 2px;
  transition: all 0.25s ease;
}

.vitreous-card:hover .credential-seal-mark {
  border-color: var(--color-gold);
  background-color: var(--ayif-navy);
}

/* IDENTITÉ & TITRES DU SPEAKER */
.card-identity-block {
  position: relative;
  z-index: 2;
  margin-bottom: 6px;
}

.speaker-name {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.25;
  margin: 0 0 5px 0;
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

/* SÉPARATEUR ORNEMENTAL AVEC LOSANGE OR */
.card-gold-separator {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 18px 0;
}

.sep-rule-left,
.sep-rule-right {
  flex: 1;
  height: 1px;
  background-color: rgba(217, 162, 27, 0.3);
}

.sep-diamond {
  font-size: 9px;
  color: var(--color-gold);
  opacity: 0.85;
  line-height: 1;
}

/* CHAMBRE BIO EN FOND BLEU NOCTURNE SANS BORDER-LEFT */
.card-bio-chamber {
  position: relative;
  z-index: 2;
  flex: 1;
  background: #05182F;
  border-radius: 4px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  margin-bottom: 20px;
  transition: border-color 0.25s ease;
}

.vitreous-card:hover .card-bio-chamber {
  border-color: rgba(46, 167, 242, 0.25);
}

.bio-text {
  font-family: var(--font-sans);
  font-size: 13.5px;
  line-height: 1.65;
  color: #D1DFEC;
  margin: 0;
}

/* DOMAINES D'EXPERTISE */
.topics-gem-cluster {
  position: relative;
  z-index: 2;
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
  padding: 4px 10px;
  border-radius: 3px;
  background: rgba(8, 43, 85, 0.65);
  border: 1px solid rgba(46, 167, 242, 0.28);
}

/* BOUTON D'ACTION TACTILE */
.card-action-bar {
  position: relative;
  z-index: 2;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px 10px 18px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.25s ease;
}

.action-text {
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 700;
  color: #E6EFF8;
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
}

.vitreous-card:hover .card-action-bar {
  background: rgba(217, 162, 27, 0.18);
  border-color: rgba(217, 162, 27, 0.55);
}

.vitreous-card:hover .action-disc {
  background: var(--color-gold);
  color: var(--ayif-navy);
  transform: translateX(3px);
}

/* ==========================================================================
   BANDEAU CTA BAS : SCEAU DIPLOMATIQUE PRESTIGIEUX (REMPLACE LE CARRÉ AVEC POINT)
   ========================================================================== */
.speakers-cta-casket {
  margin-top: 60px;
  padding: 36px 44px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(8, 43, 85, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;
}

.casket-content {
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 740px;
}

.casket-heraldic-seal {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.seal-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 10px rgba(217, 162, 27, 0.35));
}

.casket-heading {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-page);
  margin: 0 0 6px 0;
}

.casket-sub {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
}

.casket-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--ayif-navy);
  color: #FFFFFF;
  padding: 14px 28px;
  font-size: 14px;
  border-radius: 99px;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(8, 43, 85, 0.25);
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
@media (max-width: 1024px) {
  .registry-dossier-split {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

@media (max-width: 900px) {
  .speakers-vitreous-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .edition-pill-group {
    width: 100%;
    flex-direction: column;
    border-radius: 16px;
    padding: 6px;
  }
  .edition-pill-btn {
    width: 100%;
    justify-content: space-between;
  }
  .college-stream-card {
    grid-template-columns: 36px 1fr;
    gap: 12px;
    padding: 18px 16px;
  }
  .stream-card-right {
    grid-column: 2 / -1;
    justify-content: flex-start;
    margin-top: 6px;
  }
  .manifesto-metrics-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .metric-value {
    font-size: 22px;
  }
  .speakers-cta-casket {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
  .casket-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
