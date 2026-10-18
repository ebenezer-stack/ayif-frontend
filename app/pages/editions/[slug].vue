<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { forumEditions } from '../../data/mockData'
import type { ForumEdition } from '../../types'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const edition = computed<ForumEdition | undefined>(() => {
  return forumEditions.find(e => e.slug === slug.value)
})

// Other editions for quick navigation
const otherEditions = computed(() => {
  return forumEditions.filter(e => e.slug !== slug.value)
})

// Download modal / feedback simulation
const isDownloading = ref(false)
const downloadMessage = ref('')

const handleDownloadReport = () => {
  if (!edition.value) return
  isDownloading.value = true
  downloadMessage.value = `Téléchargement de « ${edition.value.reportTitle || 'Rapport AYIF'} » en cours...`
  setTimeout(() => {
    isDownloading.value = false
    downloadMessage.value = 'Document prêt. Le fichier a été transmis avec succès.'
    setTimeout(() => {
      downloadMessage.value = ''
    }, 4000)
  }, 1200)
}

useHead(() => {
  if (!edition.value) {
    return {
      title: 'Édition non trouvée — AYIF',
      meta: [{ name: 'description', content: 'L’édition demandée n’existe pas dans les archives de l’AYIF.' }]
    }
  }

  return {
    title: `${edition.value.title} — Archives & Bilan Officiel AYIF`,
    meta: [
      {
        name: 'description',
        content: `${edition.value.title} : ${edition.value.theme}. Découvrez les indicateurs clés, les lauréats du concours de pitch, les intervenants et le rapport d'impact complet.`
      }
    ]
  }
})
</script>

<template>
  <div v-if="edition" class="edition-detail-page">
    <!-- SUBNAV BREADCRUMB -->
    <nav class="edition-breadcrumb navy" aria-label="Fil d'ariane">
      <div class="wrap breadcrumb-wrap">
        <NuxtLink to="/editions" class="back-link">
          <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          <span>Toutes les éditions</span>
        </NuxtLink>
        <span class="bc-sep">/</span>
        <span class="bc-current">{{ edition.title }}</span>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <header class="edition-hero navy">
      <div class="wrap">
        <div class="hero-top-meta">
          <span 
            class="status-badge"
            :class="{
              'badge-current': edition.status === 'current',
              'badge-past': edition.status === 'past',
              'badge-upcoming': edition.status === 'upcoming'
            }"
          >
            {{ edition.statusLabel }}
          </span>
          <span class="edition-tag">{{ edition.editionNumber }} · Année {{ edition.year }}</span>
        </div>

        <h1 class="hero-edition-title">{{ edition.title }}</h1>
        <p class="hero-tagline">« {{ edition.tagline }} »</p>

        <!-- THEMATIC HIGHLIGHT BOX -->
        <div class="theme-box">
          <div class="theme-box-label">Thématique Centrale :</div>
          <div class="theme-box-text">{{ edition.theme }}</div>
        </div>

        <!-- PRACTICAL METADATA BAR -->
        <div class="metadata-strip">
          <div class="meta-unit">
            <svg class="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <div>
              <span class="unit-label">Dates Officielles</span>
              <strong class="unit-val">{{ edition.dates }}</strong>
            </div>
          </div>

          <div class="meta-unit">
            <svg class="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <span class="unit-label">Lieu &amp; Espace</span>
              <strong class="unit-val">{{ edition.venue }}</strong>
            </div>
          </div>

          <div class="meta-unit">
            <svg class="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <div>
              <span class="unit-label">Territoire Hôte</span>
              <strong class="unit-val">{{ edition.city }}, {{ edition.country }}</strong>
            </div>
          </div>
        </div>

        <!-- QUICK CTAS -->
        <div class="hero-actions-row">
          <NuxtLink v-if="edition.status === 'current'" to="/reservation" class="btn primary">
            Réserver mon Pass Cotonou 2026
          </NuxtLink>
          <button v-else-if="edition.reportTitle" type="button" class="btn primary" @click="handleDownloadReport">
            <svg class="btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Télécharger le Rapport d'Impact</span>
          </button>
          <NuxtLink v-else to="/partenaires#contact" class="btn primary">
            Rejoindre les Partenaires de cette édition
          </NuxtLink>

          <NuxtLink to="/programme" class="btn secondary">
            Consulter le Programme
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- DOWNLOAD NOTIFICATION TOAST -->
    <div v-if="downloadMessage" class="download-toast">
      <div class="wrap toast-inner">
        <svg class="toast-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>{{ downloadMessage }}</span>
      </div>
    </div>

    <!-- SECTION 1: CONTEXT & OVERVIEW -->
    <section class="section-overview">
      <div class="wrap">
        <div class="overview-grid">
          <div class="overview-content">
            <span class="section-kicker">Vision &amp; Contexte Historique</span>
            <h2 class="section-h2">Genèse et Enjeux Stratégiques de l’Édition</h2>
            <p class="lead-text">{{ edition.leadParagraph }}</p>
            
            <div class="narrative-body">
              <p v-for="(p, idx) in edition.description" :key="idx">{{ p }}</p>
            </div>
          </div>

          <div class="overview-visual">
            <div class="visual-card">
              <img :src="edition.coverImage" :alt="edition.title" class="visual-img" />
              <div class="visual-caption">
                <strong>{{ edition.title }}</strong>
                <span>{{ edition.venue }}, {{ edition.country }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: STANDARDIZED IMPACT INDICATORS (STATS GRID) -->
    <section class="section-stats navy">
      <div class="wrap">
        <div class="section-head text-center">
          <span class="sub-kicker">Indicateurs de Performance</span>
          <h2 class="section-h2 text-white">Chiffres Clés &amp; Retombées Mesurées</h2>
          <p class="section-lead-muted">
            Les données certifiées reflétant la mobilisation des capitaux, des délégations et des écosystèmes.
          </p>
        </div>

        <div class="stats-grid">
          <div v-for="stat in edition.stats" :key="stat.label" class="edition-stat-card">
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-title">{{ stat.label }}</div>
            <div v-if="stat.detail" class="stat-detail">{{ stat.detail }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: HIGHLIGHTS & MAJOR OUTCOMES -->
    <section class="section-highlights">
      <div class="wrap">
        <div class="section-head">
          <span class="section-kicker">Temps Forts &amp; Accomplissements</span>
          <h2 class="section-h2">Moments Clés de l’Édition</h2>
          <p class="section-lead">Les décisions majeures, signatures d’accords et avancées concrètes enregistrées.</p>
        </div>

        <div class="highlights-grid">
          <article v-for="(hl, idx) in edition.highlights" :key="hl.title" class="highlight-card">
            <div class="hl-counter">0{{ idx + 1 }}</div>
            <h3 class="hl-title">{{ hl.title }}</h3>
            <p class="hl-desc">{{ hl.description }}</p>
            <div v-if="hl.outcome" class="hl-outcome-box">
              <span class="outcome-label">Résultat &amp; Impact :</span>
              <span class="outcome-val">{{ hl.outcome }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 4: SPEAKERS & LEADERS -->
    <section class="section-speakers navy">
      <div class="wrap">
        <div class="section-head text-center">
          <span class="sub-kicker">Gouvernance &amp; Décideurs</span>
          <h2 class="section-h2 text-white">Personnalités Marquantes Réunies</h2>
          <p class="section-lead-muted">Les dirigeants, investisseurs et personnalités publiques ayant rythmé les débats.</p>
        </div>

        <div class="speakers-grid">
          <div v-for="spk in edition.keySpeakers" :key="spk.name" class="edition-speaker-card">
            <div class="speaker-avatar-circle">
              {{ spk.name.split(' ').map(n => n[0]).join('') }}
            </div>
            <div class="speaker-info">
              <h3 class="speaker-name">{{ spk.name }}</h3>
              <div class="speaker-role">{{ spk.role }}</div>
              <div class="speaker-org">{{ spk.organization }}</div>
              <div class="speaker-country">{{ spk.country }}</div>
              <div v-if="spk.topic" class="speaker-topic">
                <span class="topic-lbl">Intervention :</span>
                « {{ spk.topic }} »
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: PITCH COMPETITION & LAUREATES -->
    <section class="section-pitch">
      <div class="wrap">
        <div class="section-head">
          <span class="section-kicker">Compétition Panafricaine de Pitch</span>
          <h2 class="section-h2">Lauréats &amp; Pépites Entrepreneuriales</h2>
          <p class="section-lead">
            Le tremplin d’accélération de l’AYIF qui propulse les meilleures startups à fort potentiel de croissance.
          </p>
        </div>

        <div v-if="edition.pitchWinners && edition.pitchWinners.length" class="pitch-winners-list">
          <div 
            v-for="winner in edition.pitchWinners" 
            :key="winner.rank + winner.startup" 
            class="pitch-winner-card"
            :class="{ 'card-podium': winner.rank.includes('1er') }"
          >
            <div class="rank-badge">{{ winner.rank }}</div>
            <div class="winner-details">
              <h3 class="startup-name">{{ winner.startup }}</h3>
              <div class="startup-sector">Secteur d'activité : <strong>{{ winner.sector }}</strong></div>
              <div class="startup-founder">Fondateur / Contact : <strong>{{ winner.founder }}</strong></div>
              <div class="startup-prize">
                <span class="prize-label">Dotation / Financement :</span>
                <span class="prize-val">{{ winner.prize }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: PHOTO RETROSPECTIVE & GALLERY -->
    <section class="section-gallery navy">
      <div class="wrap">
        <div class="section-head text-center">
          <span class="sub-kicker">Mémoire Visuelle</span>
          <h2 class="section-h2 text-white">Galerie &amp; Rétrospective Photo</h2>
          <p class="section-lead-muted">Immersion dans les travaux, plénières et sessions confidentielles de l’AYIF.</p>
        </div>

        <div class="gallery-grid">
          <figure v-for="item in edition.gallery" :key="item.title" class="gallery-card">
            <div class="gallery-img-wrap">
              <img :src="item.image" :alt="item.title" class="gallery-img" loading="lazy" />
            </div>
            <figcaption class="gallery-caption">
              <strong>{{ item.title }}</strong>
              <p>{{ item.caption }}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- SECTION 7: OFFICIAL PARTNERS OF THIS EDITION -->
    <section class="section-partners">
      <div class="wrap">
        <div class="section-head text-center">
          <span class="section-kicker">Coalition Institutionnelle</span>
          <h2 class="section-h2">Partenaires Officiels de l’Édition</h2>
          <p class="section-lead">Les institutions publiques, bailleurs et entreprises partenaires de cette édition.</p>
        </div>

        <div class="partners-tags-list">
          <div v-for="p in edition.keyPartners" :key="p" class="partner-tag">
            <svg class="partner-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>{{ p }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 8: LIVRE BLANC / IMPACT REPORT CTA -->
    <section class="section-report-cta blue">
      <div class="wrap">
        <div class="report-box navy">
          <div class="report-box-text">
            <span class="cot-kicker">Documentation Officielle</span>
            <h2 class="report-title text-white">{{ edition.reportTitle || 'Rapport Officiel AYIF' }}</h2>
            <p class="report-desc">
              Accédez à l’intégralité des résolutions, synthèses des panels, déclarations ministérielles et cartographie des financements actés lors de cette édition.
            </p>
            <div class="report-file-meta">Format PDF · Téléchargement libre et direct</div>
          </div>
          <div class="report-box-action">
            <button type="button" class="btn primary btn-large" @click="handleDownloadReport">
              <svg class="btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>{{ edition.reportDownloadText || 'Télécharger le Document' }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: INTER-EDITION NAVIGATION (SWITCHER) -->
    <section class="section-other-editions">
      <div class="wrap">
        <div class="section-head text-center">
          <span class="section-kicker">Continuité Panafricaine</span>
          <h2 class="section-h2">Explorer les Autres Éditions de l’AYIF</h2>
          <p class="section-lead">Passez d’une capitale à l’autre pour comparer les bilans et perspectives.</p>
        </div>

        <div class="other-editions-grid">
          <NuxtLink 
            v-for="other in otherEditions" 
            :key="other.slug" 
            :to="`/editions/${other.slug}`"
            class="other-edition-card"
          >
            <div class="other-thumb">
              <img :src="other.coverImage" :alt="other.title" class="other-img" />
              <span class="other-year-badge">{{ other.year }}</span>
            </div>
            <div class="other-info">
              <span class="other-num">{{ other.editionNumber }}</span>
              <h3 class="other-title">{{ other.title }}</h3>
              <p class="other-dates">{{ other.dates }} · {{ other.city }}</p>
              <span class="other-link-txt">
                Voir le dossier
                <svg class="mini-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 NOT FOUND STATE -->
  <div v-else class="edition-not-found navy">
    <div class="wrap text-center not-found-wrap">
      <h1 class="hero-edition-title">Édition Non Trouvée</h1>
      <p class="hero-lead">L’édition spécifiée dans l’adresse URL n’existe pas dans les archives de l’AYIF.</p>
      <NuxtLink to="/editions" class="btn primary">
        Retourner au Hub des Éditions
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.edition-detail-page {
  background-color: var(--bg-page);
  color: var(--text-page);
  min-height: 100vh;
}

/* BREADCRUMB */
.edition-breadcrumb {
  padding-top: 105px;
  padding-bottom: 14px;
  background-color: var(--navy-bg);
  border-bottom: 1px solid var(--navy-line);
}

.breadcrumb-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
}

.back-link:hover {
  text-decoration: underline;
}

.svg-icon {
  width: 14px;
  height: 14px;
}

.bc-sep {
  color: var(--navy-muted);
}

.bc-current {
  color: var(--navy-text);
  font-weight: 600;
}

/* HERO */
.edition-hero {
  padding-top: 40px;
  padding-bottom: 70px;
  background-color: var(--navy-bg);
  border-bottom: 1px solid var(--navy-line);
}

.hero-top-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.status-badge {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 5px 12px;
  border-radius: 3px;
}

.status-badge.badge-current {
  background-color: var(--color-gold);
  color: var(--ayif-navy);
}

.status-badge.badge-past {
  background-color: #0c3866;
  color: var(--ayif-white);
  border: 1px solid var(--navy-line);
}

.status-badge.badge-upcoming {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
}

.edition-tag {
  font-size: 13px;
  color: var(--navy-muted);
  font-weight: 600;
}

.hero-edition-title {
  font-size: var(--fs-h1);
  font-weight: 800;
  line-height: 1.05;
  color: var(--navy-text);
  margin: 0 0 12px;
}

.hero-tagline {
  font-size: var(--fs-lead);
  line-height: 1.5;
  font-style: italic;
  color: var(--color-gold);
  margin: 0 0 24px;
  max-width: 860px;
}

.theme-box {
  background-color: #0a3360;
  border-left: 4px solid var(--color-accent);
  padding: 16px 20px;
  border-radius: 0 4px 4px 0;
  margin-bottom: 32px;
  max-width: 860px;
}

.theme-box-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 4px;
}

.theme-box-text {
  font-size: var(--fs-body);
  font-weight: 600;
  color: var(--navy-text);
  line-height: 1.5;
}

.metadata-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: #072242;
  border: 1px solid var(--navy-line);
  padding: 18px 24px;
  border-radius: 4px;
  margin-bottom: 32px;
  max-width: 860px;
}

.meta-unit {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.meta-svg {
  width: 20px;
  height: 20px;
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.unit-label {
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--navy-muted);
}

.unit-val {
  font-size: 13px;
  color: var(--navy-text);
  line-height: 1.4;
}

.hero-actions-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.btn-svg {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}

/* DOWNLOAD TOAST */
.download-toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: var(--ayif-navy);
  color: var(--ayif-white);
  border: 1px solid var(--color-gold);
  padding: 14px 20px;
  border-radius: 4px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  animation: slideInUp 0.3s ease;
}

.toast-inner {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  font-weight: 600;
}

.toast-svg {
  width: 18px;
  height: 18px;
  color: var(--color-gold);
}

@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* SECTION 1: OVERVIEW */
.section-overview {
  padding: 80px 0;
  border-bottom: 1px solid var(--border-line);
}

.overview-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
}

.section-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.sub-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 8px;
}

.section-h2 {
  font-size: var(--fs-h2);
  font-weight: 800;
  color: var(--text-page);
  margin: 0 0 16px;
  line-height: 1.2;
}

.lead-text {
  font-size: var(--fs-lead);
  font-weight: 600;
  line-height: 1.6;
  color: var(--color-navy);
  margin-bottom: 20px;
}

.narrative-body p {
  font-size: var(--fs-body);
  line-height: 1.65;
  color: var(--text-page);
  margin-bottom: 16px;
}

.visual-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 4px;
  overflow: hidden;
}

.visual-img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
}

.visual-caption {
  padding: 16px 20px;
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-line);
}

.visual-caption strong {
  display: block;
  font-size: 14px;
  color: var(--text-page);
}

.visual-caption span {
  font-size: 12px;
  color: var(--text-muted);
}

/* SECTION 2: STATS */
.section-stats {
  padding: 80px 0;
  background-color: var(--navy-bg);
  border-bottom: 1px solid var(--navy-line);
}

.text-center {
  text-align: center;
}

.text-white {
  color: var(--navy-text) !important;
}

.section-lead-muted {
  font-size: var(--fs-body);
  color: var(--navy-muted);
  max-width: 640px;
  margin: 0 auto 48px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.edition-stat-card {
  background-color: #0b3464;
  border: 1px solid var(--navy-line);
  padding: 28px 24px;
  border-radius: 4px;
  transition: transform 0.2s ease;
}

.edition-stat-card:hover {
  transform: translateY(-2px);
}

.stat-number {
  font-family: var(--font-serif);
  font-size: var(--fs-stat);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-title {
  font-size: var(--fs-body);
  font-weight: 700;
  color: var(--navy-text);
  margin-bottom: 6px;
}

.stat-detail {
  font-size: 13px;
  color: var(--navy-muted);
  line-height: 1.45;
}

/* SECTION 3: HIGHLIGHTS */
.section-highlights {
  padding: 80px 0;
  border-bottom: 1px solid var(--border-line);
}

.section-head {
  margin-bottom: 48px;
}

.section-lead {
  font-size: var(--fs-body);
  color: var(--text-muted);
  margin: 0;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.highlight-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 28px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.hl-counter {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 800;
  color: var(--color-gold);
  margin-bottom: 14px;
}

.hl-title {
  font-size: var(--fs-h4);
  font-weight: 800;
  line-height: 1.3;
  color: var(--text-page);
  margin: 0 0 12px;
}

.hl-desc {
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 18px;
}

.hl-outcome-box {
  margin-top: auto;
  background-color: var(--bg-surface-soft);
  border-left: 3px solid var(--ayif-blue);
  padding: 10px 14px;
  border-radius: 0 3px 3px 0;
}

.outcome-label {
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--ayif-blue);
}

.outcome-val {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-page);
}

/* SECTION 4: SPEAKERS */
.section-speakers {
  padding: 80px 0;
  background-color: var(--navy-bg);
  border-bottom: 1px solid var(--navy-line);
}

.speakers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.edition-speaker-card {
  background-color: #0b3464;
  border: 1px solid var(--navy-line);
  padding: 24px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.speaker-avatar-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #072242;
  border: 2px solid var(--color-gold);
  color: var(--color-gold);
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.speaker-name {
  font-size: 16px;
  font-weight: 800;
  color: var(--navy-text);
  margin: 0 0 4px;
}

.speaker-role {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 2px;
}

.speaker-org {
  font-size: 12px;
  color: var(--navy-muted);
  margin-bottom: 4px;
}

.speaker-country {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-gold);
  font-weight: 700;
  margin-bottom: 12px;
}

.speaker-topic {
  font-size: 12px;
  font-style: italic;
  color: #c0d1e5;
  background-color: #072242;
  padding: 10px;
  border-radius: 3px;
  line-height: 1.4;
  margin-top: auto;
  text-align: left;
}

.topic-lbl {
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: var(--color-accent);
  font-style: normal;
  margin-bottom: 2px;
}

/* SECTION 5: PITCH WINNERS */
.section-pitch {
  padding: 80px 0;
  border-bottom: 1px solid var(--border-line);
}

.pitch-winners-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pitch-winner-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 28px;
}

.pitch-winner-card.card-podium {
  border-color: var(--color-gold);
  background-color: #fffdf5;
}

.rank-badge {
  font-family: var(--font-serif);
  font-size: 14px;
  font-weight: 800;
  background-color: var(--ayif-navy);
  color: var(--color-gold);
  padding: 10px 16px;
  border-radius: 4px;
  white-space: nowrap;
}

.winner-details {
  flex: 1;
}

.startup-name {
  font-size: var(--fs-h4);
  font-weight: 800;
  color: var(--text-page);
  margin: 0 0 6px;
}

.startup-sector,
.startup-founder {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.startup-prize {
  margin-top: 10px;
  background-color: #f1f6fc;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 3px;
}

.prize-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--ayif-blue);
}

.prize-val {
  font-size: 13px;
  font-weight: 800;
  color: var(--color-navy);
}

/* SECTION 6: GALLERY */
.section-gallery {
  padding: 80px 0;
  background-color: var(--navy-bg);
  border-bottom: 1px solid var(--navy-line);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.gallery-card {
  margin: 0;
  background-color: #0b3464;
  border: 1px solid var(--navy-line);
  border-radius: 4px;
  overflow: hidden;
}

.gallery-img-wrap {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-card:hover .gallery-img {
  transform: scale(1.05);
}

.gallery-caption {
  padding: 16px;
}

.gallery-caption strong {
  display: block;
  font-size: 14px;
  color: var(--navy-text);
  margin-bottom: 4px;
}

.gallery-caption p {
  margin: 0;
  font-size: 12px;
  color: var(--navy-muted);
  line-height: 1.45;
}

/* SECTION 7: PARTNERS */
.section-partners {
  padding: 70px 0;
  border-bottom: 1px solid var(--border-line);
}

.partners-tags-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  max-width: 860px;
  margin: 0 auto;
}

.partner-tag {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 12px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  color: var(--text-page);
}

.partner-check-svg {
  width: 16px;
  height: 16px;
  color: var(--color-accent);
  flex-shrink: 0;
}

/* SECTION 8: REPORT CTA */
.section-report-cta {
  padding: 70px 0;
  background-color: var(--ayif-blue);
}

.report-box {
  padding: 48px;
  border-radius: 4px;
  border: 1px solid var(--navy-line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
}

.cot-kicker {
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 8px;
}

.report-title {
  font-size: var(--fs-h2);
  font-weight: 800;
  margin: 0 0 12px;
  line-height: 1.2;
}

.report-desc {
  font-size: var(--fs-body);
  color: var(--navy-muted);
  line-height: 1.6;
  max-width: 640px;
  margin: 0 0 12px;
}

.report-file-meta {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-large {
  padding: 16px 28px;
  font-size: 14px;
  white-space: nowrap;
}

/* SECTION 9: OTHER EDITIONS */
.section-other-editions {
  padding: 80px 0;
}

.other-editions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}

.other-edition-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  transition: transform 0.2s, box-shadow 0.2s;
}

.other-edition-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(8, 43, 85, 0.1);
}

.other-thumb {
  position: relative;
  width: 160px;
  flex-shrink: 0;
  background-color: var(--ayif-navy);
}

.other-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.other-year-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 2px;
}

.other-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.other-num {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 4px;
}

.other-title {
  font-size: 16px;
  font-weight: 800;
  color: var(--text-page);
  margin: 0 0 6px;
}

.other-dates {
  font-size: 12px;
  color: var(--text-muted);
  margin: 0 0 14px;
}

.other-link-txt {
  margin-top: auto;
  font-size: 13px;
  font-weight: 700;
  color: var(--ayif-blue);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.mini-arrow {
  width: 14px;
  height: 14px;
}

/* NOT FOUND */
.edition-not-found {
  padding: 160px 0 100px;
  background-color: var(--navy-bg);
  min-height: 80vh;
}

.not-found-wrap {
  max-width: 600px;
  margin: 0 auto;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .overview-grid,
  .metadata-strip,
  .stats-grid,
  .highlights-grid,
  .speakers-grid,
  .gallery-grid,
  .other-editions-grid {
    grid-template-columns: 1fr;
  }

  .pitch-winner-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .report-box {
    flex-direction: column;
    text-align: center;
    padding: 32px 24px;
  }
}
</style>
