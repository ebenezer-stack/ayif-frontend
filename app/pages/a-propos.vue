<script setup lang="ts">
import { EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'

useHead({
  title: 'À Propos — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Découvrez la genèse, la vision et les organisateurs de l’Africa Youth Investment Forum (AYIF). Pourquoi Cotonou 2026 est le carrefour de l’investissement africain.'
    }
  ]
})

const pillarsData = [
  {
    id: 'investment',
    num: '01',
    roman: 'I',
    kicker: 'Pôle I · Deal Room & Capital',
    title: 'Investissement & Capital Patient',
    text: 'Des fonds de capital-risque, des banques multilatérales de développement et des business angels mobilisés pour financer les projets à fort potentiel de croissance.',
    details: 'Mise en relation directe et qualifiée à travers des sessions de pitch privées, des Deal Rooms fermées et des rencontres de négociation bilatérales.',
    iconType: 'investment'
  },
  {
    id: 'entrepreneurship',
    num: '02',
    roman: 'II',
    kicker: 'Pôle II · Leadership & PME',
    title: 'Entrepreneuriat & Scalabilité',
    text: 'Des fondateurs chevronnés et de jeunes entrepreneurs qui partagent les réalités du terrain et les stratégies concrètes de passage à l’échelle en Afrique.',
    details: 'Retours d’expérience sans filtre sur la gestion de trésorerie, la conformité fiscale, le recrutement de talents locaux et l’expansion régionale dans la CEDEAO.',
    iconType: 'entrepreneurship'
  },
  {
    id: 'innovation',
    num: '03',
    roman: 'III',
    kicker: 'Pôle III · Technologies Continentales',
    title: 'Innovation & Technologies',
    text: 'Fintech, agritech, logistique, énergies renouvelables : les technologies de pointe adaptées aux défis structurels du continent africain.',
    details: 'Présentation de solutions novatrices développées par des talents africains pour fluidifier les flux de paiement, moderniser les filières agricoles et décarboner les transports.',
    iconType: 'innovation'
  },
  {
    id: 'networking',
    num: '04',
    roman: 'IV',
    kicker: 'Pôle IV · Commerce & ZLECAf',
    title: 'Réseautage Stratégique & B2B',
    text: 'Un agenda structuré de rendez-vous B2B planifiés en amont pour concrétiser des accords commerciaux et des partenariats durables.',
    details: 'Une plateforme de mise en relation intelligente permettant aux participants de réserver des créneaux de 20 minutes avec les décideurs de leur choix.',
    iconType: 'networking'
  }
]
</script>

<template>
  <div class="about-page">
    <!-- HERO SECTION (AÉRÉ, SANS BORDURE BASSE, PATTERN NAVY) -->
    <section class="about-hero navy">
      <div class="wrap">
        <div class="kicker-group" v-reveal>
          <span class="kicker-gem" aria-hidden="true">◆</span>
          <span class="sub-kicker">Genèse &amp; Ambition Continentale</span>
        </div>
        <h1 class="hero-title" v-reveal="{ effect: 'up', delay: 80 }">
          L’Afrique investit en sa jeunesse créatrice d’avenir
        </h1>
        <p class="hero-lead" v-reveal="{ effect: 'up', delay: 120 }">
          L’Africa Youth Investment Forum (AYIF) est la plateforme de référence pour connecter les projets entrepreneuriaux les plus prometteurs du continent aux capitaux institutionnels et privés.
        </p>
        <div class="meta-strip" v-reveal="{ effect: 'up', delay: 160 }">
          <span class="meta-capsule">{{ EVENT_DATES_LABEL }}</span>
          <span class="meta-capsule">{{ EVENT_LOCATION }}</span>
          <span class="meta-capsule gold">Plateforme Panafricaine</span>
        </div>
      </div>
    </section>

    <!-- MISSION & VISION (AÉRÉ, SANS BORDURES DE COUPE) -->
    <section class="mission-section">
      <div class="wrap split-intro">
        <div class="mission-intro-col" v-reveal>
          <div class="kicker-group">
            <span class="kicker-gem" aria-hidden="true">◆</span>
            <span class="section-kicker">Notre Raison d'Être</span>
          </div>
          <h2 class="mission-title">Combler le fossé de financement des PME africaines</h2>
          <div class="mission-quote-card">
            <span class="quote-symbol" aria-hidden="true">“</span>
            <p class="quote-text">
              Passer des discours de plaidoyer aux mécanismes concrets d’allocation de capitaux patients et d’intégration transfrontalière.
            </p>
          </div>
        </div>

        <div class="mission-text-col" v-reveal="{ effect: 'up', delay: 100 }">
          <p class="lead-text">
            Chaque année en Afrique subsaharienne, des centaines de milliers de jeunes fondateurs conçoivent des innovations à fort impact social et économique dans l'agritech, la logistique, la santé et les services financiers. Pourtant, l'accès au capital de croissance reste le défi majeur.
          </p>
          <p class="body-text">
            L'AYIF a été initié pour transformer ce paradigme : substituer aux discours théoriques des mécanismes d'investissement bilatéraux concrets, des instruments de capital patient et des corridors de libre-échange opérationnels entre les espaces économiques anglophones et francophones.
          </p>
          <div class="mission-key-pillars">
            <div class="pillar-bullet">
              <span class="bullet-gem" aria-hidden="true">✦</span>
              <span>Capital patient adapté aux cycles de croissance africains</span>
            </div>
            <div class="pillar-bullet">
              <span class="bullet-gem" aria-hidden="true">✦</span>
              <span>Corridors logistiques et douaniers bilatéraux Bénin–Nigéria</span>
            </div>
            <div class="pillar-bullet">
              <span class="bullet-gem" aria-hidden="true">✦</span>
              <span>Synergie opérationnelle entre les pôles francophones et anglophones</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LES 4 PILIERS STRATÉGIQUES (ARCHITECTURE OUVERTE ÉDITORIALE, ZÉRO CARTE, ZÉRO BORDURE) -->
    <section class="pillars-deep-section">
      <div class="wrap">
        <!-- En-tête de section centré et aéré -->
        <header class="pillars-section-head" v-reveal>
          <div class="kicker-group centered">
            <span class="kicker-gem" aria-hidden="true">◆</span>
            <span class="sub-kicker">Notre Cadre d'Action</span>
          </div>
          <h2 class="pillars-main-title">Les 4 Piliers Stratégiques</h2>
          <p class="pillars-intro-text">
            Quatre axes directeurs structurés pour dynamiser l’investissement, soutenir les PME et accélérer l’intégration continentale.
          </p>
        </header>

        <!-- Grille aérée et ouverte des 4 Piliers (2 colonnes élégantes, direct sur le motif géométrique) -->
        <div class="pillars-pure-grid">
          <article
            v-for="(p, pIdx) in pillarsData"
            :key="p.id"
            class="pillar-pure-item"
            v-reveal="{ effect: 'up', delay: pIdx * 90 }"
          >
            <!-- En-tête du Pilier avec Emblème & Numéro -->
            <div class="pillar-pure-header">
              <div class="pillar-pure-topline">
                <span class="pillar-pure-roman">
                  <span class="pillar-pure-gem" aria-hidden="true">◆</span>
                  <span>PÔLE {{ p.roman }}</span>
                </span>

                <div class="pillar-pure-icon-badge" aria-hidden="true">
                  <!-- Investment -->
                  <svg v-if="p.iconType === 'investment'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pure-svg">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <!-- Entrepreneurship -->
                  <svg v-else-if="p.iconType === 'entrepreneurship'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pure-svg">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                  <!-- Innovation -->
                  <svg v-else-if="p.iconType === 'innovation'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pure-svg">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                  <!-- Networking -->
                  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pure-svg">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>

              <span class="pillar-pure-num">{{ p.num }}</span>
              <span class="pillar-pure-kicker">{{ p.kicker }}</span>
              <h3 class="pillar-pure-title">{{ p.title }}</h3>
            </div>

            <!-- Corps narratif aéré -->
            <p class="pillar-pure-lead">{{ p.text }}</p>
            <p class="pillar-pure-details">{{ p.details }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- FOCUS COTONOU 2026 (EXPANSION PRESTIGE SANS BORDURES DE SÉPARATION) -->
    <section id="cotonou" class="cotonou-section navy">
      <div class="wrap cot-split">
        <div class="cot-content" v-reveal>
          <div class="kicker-group">
            <span class="kicker-gem" aria-hidden="true">◆</span>
            <span class="cot-kicker">Hub Régional 2026</span>
          </div>
          <h2 class="cot-title">Pourquoi le choix stratégique de Cotonou ?</h2>
          <p class="cot-lead">
            Capitale économique du Bénin, Cotonou s'impose comme le point de jonction naturel entre le géant nigérian et les marchés de l'UEMOA et du Sahel.
          </p>

          <div class="cot-reasons-cards">
            <div class="reason-card">
              <div class="reason-header">
                <span class="reason-num">01</span>
                <h4>Le Port Autonome de Cotonou</h4>
              </div>
              <p>Véritable poumon de transit régional desservant le Niger, le Burkina Faso et le Mali, le port modernisé traite plus de 12 millions de tonnes de fret annuel.</p>
            </div>

            <div class="reason-card">
              <div class="reason-header">
                <span class="reason-num">02</span>
                <h4>Cadre Macroéconomique &amp; Réformes</h4>
              </div>
              <p>Avec une croissance soutenue supérieure à 6% et des réformes majeures de dématérialisation administrative, le Bénin figure parmi les économies les plus attractives d'Afrique de l'Ouest.</p>
            </div>

            <div class="reason-card">
              <div class="reason-header">
                <span class="reason-num">03</span>
                <h4>Passerelle Anglophone — Francophone</h4>
              </div>
              <p>Situé à 120 km de Lagos, Cotonou offre un terrain neutre et propice aux alliances transfrontalières entre investisseurs nigérians et porteurs de projets francophones.</p>
            </div>
          </div>
        </div>

        <div class="cot-action-col" v-reveal="{ effect: 'up', delay: 120 }">
          <div class="cot-box">
            <span class="box-badge">ACCRÉDITATIONS OFFICIELLES</span>
            <h3 class="box-title">Participez aux Rencontres de Cotonou</h3>
            <p class="box-desc">
              3 jours de débats de haut niveau, 50 intervenants internationaux et des sessions de deal-making fermées au Palais des Congrès.
            </p>

            <div class="box-stats-grid">
              <div class="stat-capsule">
                <span class="stat-number">300M+</span>
                <span class="stat-label">Consommateurs dans l'hinterland</span>
              </div>
              <div class="stat-capsule">
                <span class="stat-number">48h</span>
                <span class="stat-label">Délai moyen obtention e-Visa Bénin</span>
              </div>
              <div class="stat-capsule">
                <span class="stat-number">35+</span>
                <span class="stat-label">Fonds d'investissement présents</span>
              </div>
            </div>

            <NuxtLink to="/reservation" class="btn-cot-prestige">
              <span>Réserver mon accréditation</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="cta-arrow" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- LES ORGANISATEURS (PRESTIGE BILATÉRAL SANS BORDURES DE COUPE) -->
    <section id="organisateurs" class="organizers-section">
      <div class="wrap">
        <header class="section-head" v-reveal>
          <div class="kicker-group centered">
            <span class="kicker-gem" aria-hidden="true">◆</span>
            <span class="section-kicker">Gouvernance &amp; Partenariat Bilatéral</span>
          </div>
          <h2>Les Organisateurs de l'Événement</h2>
          <p class="intro">Une alliance transfrontalière conjointe au service du développement économique africain.</p>
        </header>

        <div class="org-grid">
          <article class="org-card" v-reveal="{ effect: 'up', delay: 80 }">
            <div class="org-badge-row">
              <span class="org-badge">Co-Organisateur · Nigéria</span>
              <span class="org-country-pill">Abuja · Lagos</span>
            </div>
            <h3 class="org-name">NACCIMA Youth Entrepreneurs</h3>
            <p class="org-desc">
              Branche jeunesse de la Chambre Nationale de Commerce, d’Industrie, des Mines et de l’Agriculture du Nigeria (NACCIMA). Elle fédère des milliers de jeunes chefs d'entreprises à travers les 36 États de la fédération nigériane et soutient leur déploiement sur les marchés régionaux.
            </p>
            <div class="org-highlights-chips">
              <span class="org-pill">Réseau patronal de premier plan</span>
              <span class="org-pill">Connexion directe avec les fonds du Nigéria</span>
            </div>
          </article>

          <article class="org-card" v-reveal="{ effect: 'up', delay: 140 }">
            <div class="org-badge-row">
              <span class="org-badge">Co-Organisateur · Bénin</span>
              <span class="org-country-pill">Cotonou</span>
            </div>
            <h3 class="org-name">Elieson Business Consulting</h3>
            <p class="org-desc">
              Cabinet ouest-africain de conseil stratégique, d’intelligence économique et d’ingénierie financière basé à Cotonou. Elieson accompagne les gouvernements, institutions multilatérales et entreprises privées dans la structuration de partenariats public-privé et l'attractivité des investissements.
            </p>
            <div class="org-highlights-chips">
              <span class="org-pill">Expertise territoriale et réglementaire</span>
              <span class="org-pill">Ancrage institutionnel en zone francophone</span>
            </div>
          </article>
        </div>

        <!-- BANDEAU TRANSVERSAL DU COMITÉ D'ORGANISATION OFFICIEL D'AYIF 2026 -->
        <div class="committee-banner-card" v-reveal="{ effect: 'up', delay: 180 }">
          <div class="committee-banner-content">
            <div class="committee-badge-tag">
              <span class="gem-bullet">◆</span>
              <span>Comité d’Organisation Officiel d’AYIF 2026</span>
            </div>
            <h3 class="committee-banner-title">
              Une délégation conjointe d'experts et de commissaires bilatéraux
            </h3>
            <p class="committee-banner-lead">
              Les femmes et les hommes des commissions stratégiques (Deal Room, Protocole, Logistique Cotonou, Communication, Clinique PME) mobilisés pour assurer le plein succès du sommet.
            </p>
          </div>
          <div class="committee-banner-action">
            <NuxtLink to="/partenaires" class="btn-comite-action">
              <span>Voir le comité &amp; partenaires</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="cta-arrow" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- BANNIÈRE CTA FINALE (AÉRÉE, SANS BORDURE SUPÉRIEURE) -->
    <section class="about-cta-bar navy">
      <div class="wrap cta-content">
        <div class="cta-text-col" v-reveal>
          <span class="cta-pre-kicker">Rejoignez le Sommet de Cotonou</span>
          <h2 class="cta-main-title">Prêt à prendre part aux échanges continentaux ?</h2>
        </div>
        <div class="cta-actions" v-reveal="{ effect: 'up', delay: 100 }">
          <NuxtLink to="/reservation" class="btn-cta-gold">
            Réserver mon pass
          </NuxtLink>
          <NuxtLink to="/programme" class="btn-cta-ghost">
            Voir le programme détaillé
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ==========================================================================
   PAGE À PROPOS — ARCHITECTURE ÉDITORIALE HAUTE-COUTURE
   ZÉRO DÉGRADÉ · ZÉRO BORDURE TRONQUANTE (TOP/LEFT/BOTTOM) · ZÉRO ÉMOJI
   ========================================================================== */
.about-page {
  --page-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M28 0 L56 28 L28 56 L0 28 Z M28 12 L44 28 L28 44 L12 28 Z M28 23 L33 28 L28 33 L23 28 Z M0 12 L12 0 M44 0 L56 12 M0 44 L12 56 M44 56 L56 44 M0 23 L5 28 L0 33 M56 23 L51 28 L56 33 M23 0 L28 5 L33 0 M23 56 L28 51 L33 56' fill='none' stroke='%23082B55' stroke-width='1.1' stroke-opacity='0.08'/%3E%3C/svg%3E");
  --navy-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M28 0 L56 28 L28 56 L0 28 Z M28 12 L44 28 L28 44 L12 28 Z M28 23 L33 28 L28 33 L23 28 Z M0 12 L12 0 M44 0 L56 12 M0 44 L12 56 M44 56 L56 44 M0 23 L5 28 L0 33 M56 23 L51 28 L56 33 M23 0 L28 5 L33 0 M23 56 L28 51 L33 56' fill='none' stroke='%232EA7F2' stroke-width='1.1' stroke-opacity='0.085'/%3E%3C/svg%3E");
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
  border: none;
}

/* Kicker Group Commun */
.kicker-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.kicker-group.centered {
  justify-content: center;
}

.kicker-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 11px;
}

.sub-kicker,
.section-kicker,
.cot-kicker {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent, #2ea7f2);
}

/* --------------------------------------------------------------------------
   1. HERO SECTION (AÉRÉ, AVEC PATTERN NAVY, SANS BORDURE BASSE)
   -------------------------------------------------------------------------- */
.about-hero {
  padding-top: 154px;
  padding-bottom: 84px;
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--navy-text, #ffffff);
  border: none;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 4.2vw, 3.25rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin: 0 0 20px;
  color: var(--navy-text, #ffffff);
  max-width: 960px;
}

.hero-lead {
  font-family: var(--font-sans);
  font-size: clamp(1.05rem, 1.8vw, 1.18rem);
  line-height: 1.65;
  color: var(--navy-muted, rgba(255, 255, 255, 0.8));
  max-width: 780px;
  margin: 0 0 32px;
}

.meta-strip {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.meta-capsule {
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 600;
  border: none;
}

.meta-capsule.gold {
  background-color: rgba(217, 162, 27, 0.18);
  color: var(--color-gold, #d9a21b);
}

/* --------------------------------------------------------------------------
   2. MISSION & VISION (ZÉRO BORDURE DE COUPE)
   -------------------------------------------------------------------------- */
.mission-section {
  padding: 96px 0;
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  border: none;
}

.split-intro {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 64px;
  align-items: start;
}

.mission-title {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3vw, 2.35rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-page);
  letter-spacing: -0.02em;
  margin: 0 0 24px;
}

.mission-quote-card {
  background-color: var(--bg-surface, #f8fafc);
  padding: 24px 28px;
  border-radius: 16px;
  border: none;
  position: relative;
}

.quote-symbol {
  font-family: var(--font-serif);
  font-size: 38px;
  line-height: 1;
  color: var(--color-gold, #d9a21b);
  display: block;
  margin-bottom: 4px;
}

.quote-text {
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 600;
  line-height: 1.55;
  color: var(--text-page);
  margin: 0;
}

.lead-text {
  font-size: 16.5px;
  line-height: 1.65;
  color: var(--text-page);
  font-weight: 600;
  margin: 0 0 18px;
}

.body-text {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0 0 28px;
}

.mission-key-pillars {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pillar-bullet {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--bg-surface, #f8fafc);
  padding: 12px 20px;
  border-radius: 12px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-page);
  border: none;
}

.bullet-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 12px;
}

/* --------------------------------------------------------------------------
   3. LES 4 PILIERS STRATÉGIQUES — ALTERNANCE EN 4 CHAPITRES ASYMÉTRIQUES
   STYLE GRAND MAGAZINE ÉCONOMIQUE · ZÉRO CARTE · ZÉRO BOÎTE · ZÉRO BORDURE
   -------------------------------------------------------------------------- */
.pillars-deep-section {
  padding: 104px 0 128px;
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  border: none;
}

.pillars-section-head {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 80px;
}

.pillars-main-title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 3.8vw, 3rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin: 0 0 16px;
}

.pillars-intro-text {
  font-family: var(--font-sans);
  font-size: 16.5px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

/* --------------------------------------------------------------------------
   3. LES 4 PILIERS STRATÉGIQUES — ARCHITECTURE ÉPURÉE ÉDITORIALE
   ZÉRO STATS · ZÉRO CARTE · ZÉRO BOÎTE FERMÉE · ZÉRO BORDURE
   -------------------------------------------------------------------------- */
.pillars-deep-section {
  padding: 96px 0 112px;
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  border: none;
}

.pillars-section-head {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 64px;
}

.pillars-main-title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 3.8vw, 3rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin: 0 0 16px;
}

.pillars-intro-text {
  font-family: var(--font-sans);
  font-size: 16.5px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

/* Grille des 4 Piliers Épurés (Zéro Carte, Zéro Boîte, Zéro Bordure, Zéro Stat) */
.pillars-pure-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px 64px;
}

.pillar-pure-item {
  display: flex;
  flex-direction: column;
  background: transparent;
  border: none;
  padding: 0;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.pillar-pure-item:hover {
  transform: translateY(-4px);
}

.pillar-pure-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.pillar-pure-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.pillar-pure-roman {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
}

.pillar-pure-gem {
  font-size: 9px;
}

.pillar-pure-icon-badge {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background-color: rgba(8, 43, 85, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ayif-blue, #0757b8);
  transition: background-color 0.25s ease, color 0.25s ease;
}

.pillar-pure-item:hover .pillar-pure-icon-badge {
  background-color: var(--navy-bg, #082b55);
  color: var(--color-gold, #d9a21b);
}

.pure-svg {
  width: 22px;
  height: 22px;
}

.pillar-pure-num {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 4.2vw, 3.8rem);
  font-weight: 800;
  line-height: 0.88;
  color: var(--color-gold, #d9a21b);
  letter-spacing: -0.04em;
  margin-bottom: 8px;
  transition: transform 0.25s ease;
}

.pillar-pure-item:hover .pillar-pure-num {
  transform: translateX(3px);
}

.pillar-pure-kicker {
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent, #2ea7f2);
  margin-bottom: 8px;
}

.pillar-pure-title {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 2.2vw, 1.95rem);
  font-weight: 700;
  line-height: 1.22;
  color: var(--text-page);
  letter-spacing: -0.02em;
  margin: 0;
}

.pillar-pure-lead {
  font-family: var(--font-sans);
  font-size: 15.5px;
  font-weight: 600;
  line-height: 1.65;
  color: var(--text-page);
  margin: 0 0 10px;
}

.pillar-pure-details {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

@media (max-width: 840px) {
  .pillars-pure-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}

/* --------------------------------------------------------------------------
   4. FOCUS COTONOU 2026 (EXPANSION PRESTIGE SANS BORDURES DE SÉPARATION)
   -------------------------------------------------------------------------- */
.cotonou-section {
  padding: 104px 0;
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--navy-text, #ffffff);
  border: none;
}

.cot-split {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 56px;
  align-items: center;
}

.cot-title {
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 3.2vw, 2.5rem);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
  color: #ffffff;
}

.cot-lead {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 32px;
}

.cot-reasons-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.reason-card {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 22px 24px;
  border-radius: 16px;
  border: none;
}

.reason-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.reason-num {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 800;
  color: var(--color-gold, #d9a21b);
}

.reason-header h4 {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: #ffffff;
}

.reason-card p {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

/* Boîte d'accréditation noble */
.cot-box {
  background-color: rgba(255, 255, 255, 0.07);
  padding: 42px 36px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

.box-badge {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
  margin-bottom: 12px;
}

.box-title {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 12px;
  color: #ffffff;
}

.box-desc {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
  margin: 0 0 28px;
}

.box-stats-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.stat-capsule {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: rgba(255, 255, 255, 0.06);
  padding: 14px 20px;
  border-radius: 12px;
  border: none;
}

.stat-number {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-gold, #d9a21b);
}

.stat-label {
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

.btn-cot-prestige {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background-color: var(--ayif-blue, #0757b8);
  color: #ffffff;
  padding: 14px 24px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(7, 87, 184, 0.35);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-cot-prestige:hover {
  background-color: #064796;
  transform: translateY(-2px);
}

/* --------------------------------------------------------------------------
   5. LES ORGANISATEURS (ZÉRO BORDURE DE COUPE)
   -------------------------------------------------------------------------- */
.organizers-section {
  padding: 104px 0;
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  border: none;
}

.section-head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 56px;
}

.section-head h2 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.18;
  letter-spacing: -0.025em;
  margin: 0 0 14px;
}

.section-head .intro {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

.org-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 40px;
}

.org-card {
  background-color: var(--card-bg, #ffffff);
  border-radius: 20px;
  padding: 40px 36px;
  border: none;
  box-shadow: 0 10px 30px rgba(8, 43, 85, 0.04);
  display: flex;
  flex-direction: column;
}

.org-badge-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.org-badge {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
  background-color: rgba(217, 162, 27, 0.12);
  padding: 4px 12px;
  border-radius: 999px;
  border: none;
}

.org-country-pill {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
}

.org-name {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-page);
  margin: 0 0 14px;
}

.org-desc {
  font-family: var(--font-sans);
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 0 24px;
}

.org-highlights-chips {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.org-pill {
  display: inline-block;
  background-color: var(--bg-surface, #f8fafc);
  padding: 10px 16px;
  border-radius: 12px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--ayif-blue, #0757b8);
  border: none;
}

/* Bandeau transversal du Comité Officiel */
.committee-banner-card {
  background-color: var(--navy-bg, #082b55);
  color: #ffffff;
  padding: 36px 42px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 16px 40px rgba(8, 43, 85, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.committee-banner-content {
  max-width: 720px;
}

.committee-badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
  margin-bottom: 8px;
}

.committee-badge-tag .gem-bullet {
  font-size: 10px;
}

.committee-banner-title {
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px;
}

.committee-banner-lead {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.btn-comite-action {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--color-gold, #d9a21b);
  color: var(--ayif-navy, #082b55);
  padding: 13px 26px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn-comite-action:hover {
  transform: translateY(-2px);
  opacity: 0.95;
}

/* --------------------------------------------------------------------------
   6. BANNIÈRE CTA FINALE (AÉRÉE, SANS BORDURE SUPÉRIEURE)
   -------------------------------------------------------------------------- */
.about-cta-bar {
  padding: 68px 0;
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  border: none;
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;
}

.cta-pre-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
  margin-bottom: 6px;
}

.cta-main-title {
  font-family: var(--font-serif);
  font-size: clamp(1.4rem, 2.4vw, 1.95rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.cta-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.btn-cta-gold {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-gold, #d9a21b);
  color: var(--ayif-navy, #082b55);
  padding: 13px 28px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn-cta-gold:hover {
  transform: translateY(-2px);
  opacity: 0.95;
}

.btn-cta-ghost {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  padding: 13px 26px;
  font-family: var(--font-sans);
  font-size: 14px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: background-color 0.2s ease;
}

.btn-cta-ghost:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cta-arrow {
  width: 16px;
  height: 16px;
}

/* --------------------------------------------------------------------------
   RESPONSIVE
   -------------------------------------------------------------------------- */
@media (max-width: 1100px) {
  .pillars-monument-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 960px) {
  .split-intro,
  .cot-split,
  .org-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .committee-banner-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .pillars-monument-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
</style>
