<script setup lang="ts">
import { ref, computed } from 'vue'
import AnimatedCounter from '../common/AnimatedCounter.vue'

interface StrategicPillar {
  id: string
  shortTitle: string
  title: string
  badge: string
  statValue: string
  statLabel: string
  description: string
  highlight: string
  icon: string
}

const activePillarId = ref<string>('port')

const pillars: StrategicPillar[] = [
  {
    id: 'port',
    shortTitle: 'Port & Sahel',
    title: 'Plateforme Portuaire & Corridor Sahel',
    badge: 'Logistique Maritime Régionale',
    statValue: '12M+',
    statLabel: 'Tonnes de fret annuel en transit',
    description: 'Poumon maritime naturel du Golfe de Guinée, le Port Autonome de Cotonou modernisé constitue l\'artère de désenclavement direct vers le Niger, le Burkina Faso et le Mali.',
    highlight: 'Accès maritime direct et plateforme logistique de classe mondiale.',
    icon: 'port'
  },
  {
    id: 'corridor',
    shortTitle: 'Axe Nigéria',
    title: 'Corridor Économique avec le Nigéria',
    badge: 'Bassin de 300M+ d\'habitants',
    statValue: '120 km',
    statLabel: 'Distance directe Lagos — Cotonou',
    description: 'À moins de deux heures de la première mégapole économique d\'Afrique de l\'Ouest, Cotonou offre un terrain commercial et financier neutre pour les capitaux nigérians et régionaux.',
    highlight: 'Passerelle sans friction entre le géant fédéral et le marché intégré UEMOA.',
    icon: 'corridor'
  },
  {
    id: 'reform',
    shortTitle: 'Cadre & Climat',
    title: 'Stabilité Macro & Réformes Structurantes',
    badge: 'Sécurité Juridique & OHADA',
    statValue: '+6.5%',
    statLabel: 'Croissance annuelle moyenne soutenue',
    description: 'Avec une politique macroéconomique saluée par les agences internationales, une fiscalité incitative pour les startups et le droit des affaires OHADA, le Bénin sécurise les investissements.',
    highlight: 'Guichet unique numérisé et protection des investisseurs transfrontaliers.',
    icon: 'reform'
  }
]

const currentPillar = computed(() => {
  return pillars.find(p => p.id === activePillarId.value) || pillars[0]!
})

const selectPillar = (id: string) => {
  activePillarId.value = id
}
</script>

<template>
  <section class="about-section-container">
    <div class="wrap">
      <!-- HEADER SOBRE & ÉLÉGANT -->
      <header class="section-header" v-reveal="'up'">
        <div class="header-content">
          <span class="sub-kicker">À propos de l'initiative</span>
          <h2 class="section-title">
            L'Épicentre où les Projets Rencontrent le Capital
          </h2>
          <p class="section-lead">
            L'Africa Youth Investment Forum (AYIF) est la plateforme bilatérale conçue pour accélérer le financement des entreprises africaines à forte croissance et connecter les écosystèmes anglophones et francophones.
          </p>
        </div>
      </header>

      <!-- DUAL GRID LAYOUT -->
      <div class="about-grid">
        <!-- VOLET 1 : L'INITIATIVE & LES CO-ORGANISATEURS -->
        <article class="narrative-card" v-reveal="'left'">
          <div class="card-inner">
            <span class="card-eyebrow">Vision &amp; Fondations</span>
            <h3 class="card-heading">
              Une Passerelle Stratégique entre Deux Espaces Économiques
            </h3>

            <p class="card-text">
              L’Africa Youth Investment Forum (AYIF) réunit chaque année des fonds d’investissement, banques de développement, institutions régionales et jeunes entrepreneurs pour dépasser le modèle de simples subventions et structurer de véritables prises de participation en capital patient.
            </p>

            <p class="card-text secondary">
              Co-organisé par <strong>NACCIMA Youth Entrepreneurs</strong> (Nigéria) et <strong>Elieson Business Consulting</strong> (Bénin), l’événement constitue une passerelle stratégique et opérationnelle entre les marchés anglophones et francophones.
            </p>

            <!-- DUO D'ORGANISATEURS CLAIR ET PROFESSIONNEL -->
            <div class="organizers-duo">
              <div class="org-block">
                <span class="org-country-badge">Nigéria &middot; Anglophone</span>
                <h4 class="org-name">NACCIMA Youth</h4>
                <p class="org-desc">Mobilisation du patronat et des réseaux d'affaires nigérians (220M d'habitants).</p>
              </div>

              <div class="org-block">
                <span class="org-country-badge">Bénin &middot; Francophone</span>
                <h4 class="org-name">Elieson Consulting</h4>
                <p class="org-desc">Ingénierie financière, structuration des deals et ancrage dans l'espace UEMOA.</p>
              </div>
            </div>

            <!-- ENGAGEMENTS CLÉS SOBRES -->
            <div class="key-takeaways">
              <div class="takeaway-item">
                <span class="takeaway-bullet" aria-hidden="true">&bull;</span>
                <div>
                  <strong>Capitaux Patients &amp; Equity</strong>
                  <span>Accompagnement financier durable pour les PME et scale-ups à fort impact.</span>
                </div>
              </div>
              <div class="takeaway-item">
                <span class="takeaway-bullet" aria-hidden="true">&bull;</span>
                <div>
                  <strong>Deal Room Bilatérale</strong>
                  <span>Mise en relation directe et qualifiée entre fondateurs et décideurs financiers.</span>
                </div>
              </div>
            </div>

            <div class="card-bottom">
              <NuxtLink to="/a-propos" class="about-link">
                <span>Découvrir l'histoire et les organisateurs</span>
                <svg class="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </article>

        <!-- VOLET 2 : CONSOLE POURQUOI COTONOU 2026 -->
        <aside class="strategy-console" v-reveal="{ effect: 'right', delay: 120 }">
          <!-- PHOTO DU PORT DE COTONOU AVEC OVERLAY PROFOND -->
          <div class="console-backdrop" aria-hidden="true">
            <div class="backdrop-image"></div>
            <div class="backdrop-overlay"></div>
          </div>

          <div class="console-inner">
            <div class="console-head">
              <span class="console-eyebrow">Hub Stratégique 2026</span>
              <span class="host-city-tag">Cotonou, Bénin</span>
            </div>

            <h3 class="console-title">Pourquoi le Choix de Cotonou ?</h3>
            <p class="console-desc">
              Port atlantique naturel de premier plan, corridor direct vers le Niger, le Burkina Faso et le Mali : le Bénin offre un cadre macro-économique stable et ouvre l’accès à un marché régional de plus de 300 millions d'habitants.
            </p>

            <!-- TABS INTERACTIFS CLAIRS ET ÉLÉGANTS -->
            <div class="pillar-tabs" role="tablist" aria-label="Atouts de Cotonou">
              <button
                v-for="pillar in pillars"
                :key="pillar.id"
                role="tab"
                :aria-selected="activePillarId === pillar.id"
                class="tab-btn"
                :class="{ active: activePillarId === pillar.id }"
                @click="selectPillar(pillar.id)"
              >
                {{ pillar.shortTitle }}
              </button>
            </div>

            <!-- AFFICHAGE DYNAMIQUE DE L'ATOUT SÉLECTIONNÉ -->
            <div class="active-feature-card">
              <div class="feature-metric-row">
                <div>
                  <div class="metric-value">
                    <AnimatedCounter :value="currentPillar.statValue" />
                  </div>
                  <span class="metric-label">{{ currentPillar.statLabel }}</span>
                </div>
                <span class="metric-badge">{{ currentPillar.badge }}</span>
              </div>

              <h4 class="feature-title">{{ currentPillar.title }}</h4>
              <p class="feature-text">{{ currentPillar.description }}</p>
              
              <div class="feature-highlight">
                <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ currentPillar.highlight }}</span>
              </div>
            </div>

            <!-- ACTIONS -->
            <div class="console-actions">
              <NuxtLink to="/a-propos#cotonou" class="btn console-btn-primary">
                Explorer l'édition Cotonou
              </NuxtLink>
              <NuxtLink to="/reservation" class="btn console-btn-ghost">
                Réserver mon accès
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   CONTENEUR PRINCIPAL
   ========================================================================== */
.about-section-container {
  background-color: var(--ayif-navy);
  color: var(--ayif-white);
  padding: 96px 0;
  border-top: 1px solid var(--navy-line);
  border-bottom: 1px solid var(--navy-line);
}

/* ==========================================================================
   HEADER DE SECTION SOBRE & ÉDITORIAL
   ========================================================================== */
.section-header {
  margin-bottom: 52px;
}

.header-content {
  max-width: 860px;
}

.sub-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.2vw, 2.6rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--ayif-white);
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.section-lead {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  color: var(--navy-muted);
  margin: 0;
}

/* ==========================================================================
   GRILLE À 2 VOLETS (DUAL GRID)
   ========================================================================== */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 36px;
  align-items: stretch;
}

/* ==========================================================================
   VOLET 1 : NARRATIVE CARD (SANS BORDURE GAUCHE JAUNE ARTIFICIELLE)
   ========================================================================== */
.narrative-card {
  background-color: #061e3d;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
}

.card-inner {
  padding: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 14px;
}

.card-heading {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--ayif-white);
  margin-bottom: 18px;
}

.card-text {
  font-size: 14px;
  line-height: 1.65;
  color: var(--navy-muted);
  margin-bottom: 14px;
}

.card-text strong {
  color: var(--ayif-white);
  font-weight: 600;
}

.card-text.secondary {
  margin-bottom: 24px;
}

/* DUO ORGANISATEURS CLAIR */
.organizers-duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  background-color: rgba(8, 43, 85, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 24px;
}

.org-block {
  display: flex;
  flex-direction: column;
}

.org-country-badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 4px;
}

.org-name {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  color: var(--ayif-white);
  margin-bottom: 4px;
}

.org-desc {
  font-size: 11px;
  color: var(--navy-muted);
  line-height: 1.45;
  margin: 0;
}

/* POINTS CLÉS */
.key-takeaways {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
}

.takeaway-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--navy-muted);
}

.takeaway-bullet {
  color: var(--color-gold);
  font-size: 16px;
  line-height: 1;
}

.takeaway-item strong {
  color: var(--ayif-white);
  display: block;
  font-size: 13px;
  margin-bottom: 2px;
}

.takeaway-item span {
  display: block;
  font-size: 12px;
}

.card-bottom {
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.about-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent);
  transition: color 0.2s ease, transform 0.2s ease;
}

.about-link:hover {
  color: var(--ayif-white);
  transform: translateX(4px);
}

.link-arrow {
  width: 16px;
  height: 16px;
}

/* ==========================================================================
   VOLET 2 : STRATEGY CONSOLE (POURQUOI COTONOU 2026)
   ========================================================================== */
.strategy-console {
  position: relative;
  background-color: #06182f;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.console-backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.backdrop-image {
  position: absolute;
  inset: 0;
  background-image: url('/images/blog/cotonou-port.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.14;
}

.backdrop-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(6, 24, 47, 0.94);
}

.console-inner {
  position: relative;
  z-index: 2;
  padding: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.console-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.console-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.host-city-tag {
  font-size: 11px;
  font-weight: 600;
  color: var(--navy-muted);
  background-color: rgba(255, 255, 255, 0.08);
  padding: 3px 10px;
  border-radius: 4px;
}

.console-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--ayif-white);
  margin-bottom: 12px;
}

.console-desc {
  font-size: 14px;
  line-height: 1.65;
  color: var(--navy-muted);
  margin-bottom: 22px;
}

/* TABS ÉPURÉS */
.pillar-tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background-color: rgba(8, 43, 85, 0.75);
  padding: 5px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 22px;
}

.tab-btn {
  background: transparent;
  border: none;
  border-radius: 4px;
  padding: 9px 8px;
  color: var(--navy-muted);
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.tab-btn:hover {
  color: var(--ayif-white);
}

.tab-btn.active {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
  box-shadow: 0 2px 8px rgba(7, 87, 184, 0.35);
}

/* CARTE ACTIVE */
.active-feature-card {
  background-color: rgba(8, 43, 85, 0.85);
  border: 1px solid rgba(46, 167, 242, 0.25);
  border-radius: 6px;
  padding: 22px;
  margin-bottom: 24px;
}

.feature-metric-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.metric-value {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: 4px;
}

.metric-label {
  font-size: 12px;
  color: var(--color-accent);
  font-weight: 600;
}

.metric-badge {
  font-size: 11px;
  font-weight: 600;
  color: var(--ayif-white);
  background-color: rgba(7, 87, 184, 0.4);
  padding: 3px 8px;
  border-radius: 4px;
}

.feature-title {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  color: var(--ayif-white);
  margin-bottom: 6px;
}

.feature-text {
  font-size: 13px;
  line-height: 1.55;
  color: var(--navy-muted);
  margin-bottom: 14px;
}

.feature-highlight {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(46, 167, 242, 0.07);
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--ayif-white);
}

.check-icon {
  width: 15px;
  height: 15px;
  color: var(--color-gold);
  flex-shrink: 0;
}

/* ACTIONS */
.console-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;
}

.console-btn-primary {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
  padding: 11px 22px;
  border-radius: 99px;
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.console-btn-primary:hover {
  background-color: var(--color-accent);
  color: #041224;
  transform: translateY(-1px);
}

.console-btn-ghost {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--ayif-white);
  padding: 11px 20px;
  border-radius: 99px;
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.console-btn-ghost:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-1px);
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 960px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 640px) {
  .about-section-container {
    padding: 60px 0;
  }

  .card-inner,
  .console-inner {
    padding: 24px;
  }

  .organizers-duo {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .pillar-tabs {
    grid-template-columns: 1fr;
  }

  .console-actions {
    flex-direction: column;
  }

  .console-btn-primary,
  .console-btn-ghost {
    width: 100%;
    text-align: center;
  }
}
</style>
