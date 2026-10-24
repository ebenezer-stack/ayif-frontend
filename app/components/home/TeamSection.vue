<script setup lang="ts">
import { ref, computed } from 'vue'
import { organizingTeam } from '../../data/mockData'

const activeFilter = ref<string>('all')

const filterOptions = [
  { id: 'all', label: 'Toute l’Équipe (12)' },
  { id: 'nigeria', label: 'NACCIMA Youth (Nigeria)' },
  { id: 'benin', label: 'Elieson Consulting (Bénin)' },
  { id: 'comite', label: 'Comité Conjoint & Stratégie' }
]

const filteredMembers = computed(() => {
  if (activeFilter.value === 'all') return organizingTeam
  if (activeFilter.value === 'nigeria') {
    return organizingTeam.filter(m => m.country === 'Nigeria')
  }
  if (activeFilter.value === 'benin') {
    return organizingTeam.filter(m => m.country === 'Bénin')
  }
  if (activeFilter.value === 'comite') {
    return organizingTeam.filter(m => m.organization.includes('Comité') || m.organization.includes('Conseil'))
  }
  return organizingTeam
})
</script>

<template>
  <section id="equipe" class="team-section" aria-label="Équipe organisatrice officielle AYIF 2026">
    <div class="wrap team-wrap">
      <!-- EN-TÊTE ÉDITORIAL DU COMITÉ D'ORGANISATION -->
      <div v-reveal class="team-header-block">
        <div class="kicker-group">
          <span class="kicker-gem" aria-hidden="true">◆</span>
          <span class="sub-kicker">Gouvernance &amp; Comité d’Organisation</span>
        </div>
        <h2 class="team-title">Rencontrez l’Équipe Organisatrice d’AYIF 2026</h2>
        <p class="team-lead">
          Les femmes et les hommes engagés derrière le succès de l’édition 2026. Une coalition transfrontalière unissant les forces vives de NACCIMA Youth Entrepreneurs et d’Elieson Business Consulting pour propulser l’entrepreneuriat et l’investissement panafricain.
        </p>

        <!-- FILTRES D'AFFICHAGE SANS BORDURES RIGIDES -->
        <div class="team-filter-bar" role="tablist" aria-label="Filtrer les membres de l'organisation">
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
      </div>

      <!-- GRILLE DES MEMBRES DE L'ÉQUIPE (PLAQUES HAUTE-COUTURE SANS BORDURES CUT) -->
      <div class="team-grid">
        <article
          v-for="(member, idx) in filteredMembers"
          :key="member.id"
          v-reveal="{ effect: 'up', delay: (idx % 4) * 80 }"
          class="team-member-card"
        >
          <!-- CADRE DU PORTRAIT OFFICIEL -->
          <div class="member-photo-frame">
            <img
              :src="member.image"
              :alt="member.name"
              loading="lazy"
              class="member-photo"
            />
            <!-- BADGE PAYS / DIPLOMATIQUE -->
            <div v-if="member.country" class="member-country-tag">
              <span class="country-name">{{ member.country }}</span>
            </div>
          </div>

          <!-- FICHE D'IDENTITÉ ET MANDAT -->
          <div class="member-identity-box">
            <span class="member-org-tag">{{ member.organization }}</span>
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p v-if="member.highlight" class="member-highlight">{{ member.highlight }}</p>
          </div>
        </article>
      </div>

      <!-- BANDEAU PROTOCOLAIRE DE L'ALLIANCE BILATÉRALE -->
      <div v-reveal class="bilateral-alliance-footer">
        <div class="alliance-left">
          <span class="alliance-sub">LEADERSHIP CONJOINT · BÉNIN &amp; NIGERIA</span>
          <h4 class="alliance-heading">Une Gouvernance Unifiée au Service de la Jeunesse Africaine</h4>
          <p class="alliance-desc">
            Le comité de pilotage AYIF réunit des experts de haut niveau en capital-risque, diplomatie économique, agro-industrie et politiques publiques pour garantir une expérience de sommet d’envergure mondiale au Palais des Congrès de Cotonou.
          </p>
        </div>

        <div class="alliance-actions">
          <NuxtLink to="/a-propos#organisateurs" class="btn-alliance-secondary">
            En savoir plus sur les co-organisateurs
          </NuxtLink>
          <NuxtLink to="/partenaires" class="btn-alliance-primary">
            <span>Rejoindre la dynamique</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-mini" aria-hidden="true">
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
   TEAM SECTION — ÉQUIPE ORGANISATRICE OFFICIELLE AYIF 2026 (ZÉRO DÉGRADÉ)
   ========================================================================== */
.team-section {
  padding: 100px 0 112px;
  background-color: var(--bg-page);
  color: var(--text-page);
  border: none;
  overflow: hidden;
}

.team-wrap {
  position: relative;
  max-width: 1240px;
}

/* En-tête */
.team-header-block {
  text-align: center;
  max-width: 860px;
  margin: 0 auto 52px;
}

.kicker-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
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

.team-title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 3.8vw, 3rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin: 0 0 16px 0;
}

.team-lead {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 0 32px 0;
}

/* Onglets de filtrage sans bordures dures */
.team-filter-bar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 8px;
  background-color: var(--bg-surface);
  border-radius: 99px;
  box-shadow: 0 4px 18px rgba(8, 43, 85, 0.05);
  flex-wrap: wrap;
}

:root.dark .team-filter-bar,
.dark .team-filter-bar {
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.3);
}

.filter-tab-pill {
  padding: 8px 18px;
  border-radius: 99px;
  border: none;
  background-color: transparent;
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 700;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.22s ease;
}

.filter-tab-pill:hover {
  color: var(--text-page);
  background-color: rgba(217, 162, 27, 0.1);
}

.filter-tab-pill.active {
  background-color: var(--ayif-navy);
  color: #FFFFFF;
  box-shadow: 0 3px 10px rgba(8, 43, 85, 0.2);
}

:root.dark .filter-tab-pill.active,
.dark .filter-tab-pill.active {
  background-color: var(--ayif-blue);
  color: #FFFFFF;
}

/* Grille des membres */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 64px;
}

.team-member-card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-surface);
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 22px rgba(8, 43, 85, 0.06);
  transition: all 0.26s cubic-bezier(0.16, 1, 0.3, 1);
  margin: 0;
}

:root.dark .team-member-card,
.dark .team-member-card {
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.4);
}

.team-member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(8, 43, 85, 0.14);
}

:root.dark .team-member-card:hover,
.dark .team-member-card:hover {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
}

/* Cadre photo */
.member-photo-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 4.8;
  background-color: #041224;
  overflow: hidden;
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.35s ease;
}

.team-member-card:hover .member-photo {
  transform: scale(1.04);
}

.member-country-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(4, 18, 36, 0.85);
  padding: 4px 10px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.country-name {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
}

/* Identité et Mandat */
.member-identity-box {
  padding: 22px 20px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.member-org-tag {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ayif-sky, #2EA7F2);
  margin-bottom: 6px;
}

.member-name {
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.3;
  margin: 0 0 6px 0;
}

.member-role {
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 700;
  color: var(--color-gold);
  line-height: 1.4;
  margin: 0 0 10px 0;
}

.member-highlight {
  font-family: var(--font-sans);
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-muted);
  margin: 0;
  flex: 1;
}

/* Bandeau Protocolaire Alliance Bilatérale */
.bilateral-alliance-footer {
  background-color: var(--ayif-navy);
  color: #FFFFFF;
  border-radius: 12px;
  padding: 40px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
  box-shadow: 0 12px 36px rgba(8, 43, 85, 0.25);
}

:root.dark .bilateral-alliance-footer,
.dark .bilateral-alliance-footer {
  background-color: #07203E;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);
}

.alliance-left {
  flex: 1;
  min-width: 320px;
}

.alliance-sub {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 8px;
}

.alliance-heading {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.25;
  margin: 0 0 10px 0;
}

.alliance-desc {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.6;
  color: #CBD5E1;
  margin: 0;
}

.alliance-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-alliance-secondary {
  padding: 12px 22px;
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

.btn-alliance-secondary:hover {
  border-color: #FFFFFF;
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-alliance-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: var(--color-gold);
  color: #041224;
  border-radius: 99px;
  border: none;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(217, 162, 27, 0.35);
  transition: all 0.22s ease;
}

.btn-alliance-primary:hover {
  background-color: #FFFFFF;
  color: #041224;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(255, 255, 255, 0.3);
}

.arrow-mini {
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
}

.btn-alliance-primary:hover .arrow-mini {
  transform: translateX(3px);
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 1100px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 800px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .bilateral-alliance-footer {
    padding: 30px 24px;
    flex-direction: column;
    align-items: flex-start;
  }

  .alliance-actions {
    width: 100%;
    flex-direction: column;
  }

  .btn-alliance-secondary,
  .btn-alliance-primary {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 520px) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .team-section {
    padding: 72px 0 80px;
  }

  .filter-tab-pill {
    width: 100%;
    text-align: center;
  }
}
</style>
