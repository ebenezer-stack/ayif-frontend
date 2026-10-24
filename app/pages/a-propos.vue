<script setup lang="ts">
import { pillars, EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'

useHead({
  title: 'À Propos — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Découvrez la genèse, la vision et les organisateurs de l’Africa Youth Investment Forum (AYIF). Pourquoi Cotonou 2026 est le carrefour de l’investissement africain.'
    }
  ]
})
</script>

<template>
  <div class="about-page">
    <!-- HERO SECTION -->
    <section class="about-hero navy">
      <div class="wrap">
        <span class="sub-kicker">Genèse &amp; Ambition</span>
        <h1 class="hero-title">L’Afrique investit en sa jeunesse créatrice d’avenir</h1>
        <p class="hero-lead">
          L’Africa Youth Investment Forum (AYIF) est la plateforme de référence pour connecter les projets entrepreneuriaux les plus prometteurs du continent aux capitaux institutionnels et privés.
        </p>
        <div class="meta-strip">
          <span>{{ EVENT_DATES_LABEL }}</span>
          <span class="dot">·</span>
          <span>{{ EVENT_LOCATION }}</span>
        </div>
      </div>
    </section>

    <!-- MISSION & VISION -->
    <section class="mission-section">
      <div class="wrap split-intro">
        <div>
          <span class="section-kicker">Notre Raison d'Être</span>
          <h2>Combler le fossé de financement des PME africaines</h2>
        </div>
        <div>
          <p class="lead-text">
            Chaque année en Afrique subsaharienne, des centaines de milliers de jeunes fondateurs conçoivent des innovations à fort impact social et économique dans l'agritech, la logistique, la santé et les services financiers. Pourtant, l'accès au capital de croissance reste le défi majeur.
          </p>
          <p class="body-text">
            L'AYIF a été initié pour transformer ce paradigme : substituer aux discours théoriques des mécanismes d'investissement bilatéraux concrets, des instruments de capital patient et des corridors de libre-échange opérationnels entre les espaces économiques anglophones et francophones.
          </p>
        </div>
      </div>
    </section>

    <!-- LES 4 PILIERS DÉTAILLÉS -->
    <section class="pillars-deep-section">
      <div class="wrap">
        <div class="section-head">
          <span class="section-kicker">Notre Cadre d'Action</span>
          <h2>Les 4 Piliers Stratégiques</h2>
          <p class="intro">Une approche holistique pour catalyser l'écosystème entrepreneurial continental.</p>
        </div>

        <div class="pillars-grid">
          <div v-for="p in pillars" :key="p.title" class="pillar-card">
            <span class="pillar-tag">{{ p.title }}</span>
            <h3>{{ p.title }}</h3>
            <p class="pillar-summary">{{ p.text }}</p>
            <p v-if="p.details" class="pillar-details">{{ p.details }}</p>

            <div v-if="p.kpis" class="pillar-kpis">
              <span v-for="kpi in p.kpis" :key="kpi" class="kpi-chip">
                {{ kpi }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOCUS COTONOU 2026 -->
    <section id="cotonou" class="cotonou-section blue">
      <div class="wrap cot-split">
        <div class="cot-content">
          <span class="cot-kicker">Hub Régional 2026</span>
          <h2>Pourquoi le choix de Cotonou ?</h2>
          <p class="cot-lead">
            Capitale économique du Bénin, Cotonou s'impose comme le point de jonction naturel entre le géant nigérian et les marchés de l'UEMOA et du Sahel.
          </p>
          <div class="cot-reasons">
            <div class="reason-item">
              <h4>1. Le Port Autonome de Cotonou</h4>
              <p>Véritable poumon de transit régional desservant le Niger, le Burkina Faso et le Mali, le port modernisé traite plus de 12 millions de tonnes de fret annuel.</p>
            </div>
            <div class="reason-item">
              <h4>2. Cadre Macroéconomique &amp; Réformes</h4>
              <p>Avec une croissance soutenue supérieure à 6% et des réformes majeures de dématérialisation administrative, le Bénin figure parmi les économies les plus attractives d'Afrique de l'Ouest.</p>
            </div>
            <div class="reason-item">
              <h4>3. Passerelle Anglophone — Francophone</h4>
              <p>Situé à 120 km de Lagos, Cotonou offre un terrain neutre et propice aux alliances transfrontalières entre investisseurs nigérians et porteurs de projets francophones.</p>
            </div>
          </div>
        </div>

        <div class="cot-box navy">
          <h3>Participez aux Rencontres de Cotonou</h3>
          <p>
            3 jours de débats de haut niveau, 50 speakers internationaux et des sessions de deal-making fermées au Palais des Congrès.
          </p>
          <ul class="box-stats">
            <li><strong>300M+</strong><span>Consommateurs dans l'hinterland</span></li>
            <li><strong>48h</strong><span>Délai moyen d'obtention de l'e-Visa Bénin</span></li>
            <li><strong>35+</strong><span>Fonds d'investissement présents</span></li>
          </ul>
          <NuxtLink to="/reservation" class="btn primary cot-btn">
            Réserver mon accréditation
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- LES ORGANISATEURS -->
    <section id="organisateurs" class="organizers-section">
      <div class="wrap">
        <div class="section-head">
          <span class="section-kicker">Gouvernance &amp; Partenariat</span>
          <h2>Les Organisateurs de l'Événement</h2>
          <p class="intro">Une alliance transfrontalière au service du développement économique africain.</p>
        </div>

        <div class="org-grid">
          <div class="org-card">
            <div class="org-badge">Co-Organisateur · Nigeria</div>
            <h3>NACCIMA Youth Entrepreneurs</h3>
            <p class="org-desc">
              Branche jeunesse de la Chambre Nationale de Commerce, d’Industrie, des Mines et de l’Agriculture du Nigeria (NACCIMA). Elle fédère des milliers de jeunes chefs d'entreprises à travers les 36 États de la fédération nigériane et soutient leur déploiement sur les marchés régionaux.
            </p>
            <div class="org-highlights">
              <span>Réseau patronal de premier plan</span>
              <span>Connexion avec les fonds du Nigeria</span>
            </div>
          </div>

          <div class="org-card">
            <div class="org-badge">Co-Organisateur · Bénin</div>
            <h3>Elieson Business Consulting</h3>
            <p class="org-desc">
              Cabinet ouest-africain de conseil stratégique, d’intelligence économique et d’ingénierie financière basé à Cotonou. Elieson accompagne les gouvernements, institutions multilatérales et entreprises privées dans la structuration de partenariats public-privé et l'attractivité des investissements.
            </p>
            <div class="org-highlights">
              <span>Expertise territoriale et réglementaire</span>
              <span>Ancrage institutionnel en zone francophone</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BANNIÈRE CTA -->
    <section class="about-cta-bar navy">
      <div class="wrap cta-content">
        <h2>Prêt à prendre part aux échanges ?</h2>
        <div class="cta-actions">
          <NuxtLink to="/reservation" class="btn primary">
            Réserver mon pass
          </NuxtLink>
          <NuxtLink to="/programme" class="btn ghost-light">
            Voir le programme détaillé
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  background-color: var(--bg-page);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
}

.about-hero {
  padding-top: 150px;
  padding-bottom: 70px;
  background-color: var(--navy-bg);
  color: var(--navy-text);
  border-bottom: 1px solid var(--navy-line);
}

.sub-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 12px;
}

.hero-title {
  font-size: var(--fs-h1);
  font-weight: 800;
  line-height: 1.05;
  margin: 0 0 18px;
  color: var(--navy-text);
  max-width: 900px;
}

.hero-lead {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--navy-muted);
  max-width: 720px;
  margin: 0 0 28px;
}

.meta-strip {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--color-accent);
  font-weight: 600;
}

.meta-strip .dot {
  opacity: 0.5;
}

/* Mission Section */
.mission-section {
  padding: 88px 0;
  border-bottom: 1px solid var(--border-line);
}

.split-intro {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 56px;
  align-items: start;
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

.split-intro h2 {
  font-size: var(--fs-h2);
  font-weight: 700;
  line-height: 1.15;
  color: var(--text-page);
  margin: 0;
}

.lead-text {
  font-size: var(--fs-lead);
  line-height: 1.6;
  color: var(--text-page);
  font-weight: 500;
  margin: 0 0 16px;
}

.body-text {
  font-size: var(--fs-body);
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

/* Piliers Deep */
.pillars-deep-section {
  padding: 88px 0;
  background-color: var(--bg-surface);
}

.section-head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 56px;
}

.section-head h2 {
  font-size: var(--fs-h2);
  font-weight: 700;
  color: var(--text-page);
  margin: 0 0 10px;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.pillar-card {
  background-color: var(--bg-page);
  border: 1px solid var(--border-line);
  border-top: 3px solid var(--ayif-blue);
  padding: 36px 30px;
  border-radius: 4px;
}

.pillar-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.pillar-card h3 {
  font-size: var(--fs-h3);
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--text-page);
}

.pillar-summary {
  font-size: var(--fs-body);
  line-height: 1.6;
  color: var(--text-page);
  font-weight: 500;
  margin: 0 0 12px;
}

.pillar-details {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 20px;
}

.pillar-kpis {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-top: 1px solid var(--border-line);
  padding-top: 16px;
}

.kpi-chip {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-accent);
}

/* Cotonou Section */
.cotonou-section {
  padding: 96px 0;
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
}

.cot-split {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 56px;
  align-items: center;
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

.cot-content h2 {
  font-size: var(--fs-h2);
  font-weight: 700;
  margin: 0 0 16px;
}

.cot-lead {
  font-size: var(--fs-lead);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 32px;
}

.cot-reasons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reason-item h4 {
  font-size: var(--fs-lead);
  font-weight: 700;
  margin: 0 0 4px;
  color: var(--color-gold);
}

.reason-item p {
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.82);
}

.cot-box {
  background-color: var(--navy-bg);
  border: 1px solid var(--navy-line);
  padding: 40px;
  border-radius: 4px;
}

.cot-box h3 {
  font-size: var(--fs-h3);
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--navy-text);
}

.cot-box p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--navy-muted);
  margin: 0 0 24px;
}

.box-stats {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid var(--navy-line);
  border-bottom: 1px solid var(--navy-line);
  padding: 16px 0;
}

.box-stats li {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.box-stats strong {
  font-family: var(--font-serif);
  font-size: var(--fs-h3);
  color: var(--color-accent);
}

.box-stats span {
  font-size: 12px;
  color: var(--navy-muted);
}

.cot-btn {
  width: 100%;
  text-align: center;
}

/* Organisateurs Section */
.organizers-section {
  padding: 88px 0;
  border-bottom: 1px solid var(--border-line);
}

.org-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
}

.org-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 40px 32px;
  border-radius: 4px;
}

.org-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-gold);
  background-color: rgba(217, 162, 27, 0.1);
  padding: 3px 10px;
  border-radius: 99px;
  margin-bottom: 14px;
}

.org-card h3 {
  font-size: var(--fs-h3);
  font-weight: 700;
  margin: 0 0 14px;
  color: var(--text-page);
}

.org-desc {
  font-size: 14px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 0 24px;
}

.org-highlights {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--border-line);
}

.org-highlights span {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-accent);
}

/* About CTA */
.about-cta-bar {
  padding: 60px 0;
  background-color: var(--navy-bg);
  border-top: 1px solid var(--navy-line);
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
}

.cta-content h2 {
  font-size: var(--fs-h3);
  font-weight: 700;
  color: var(--navy-text);
  margin: 0;
}

.cta-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn.ghost-light {
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: var(--ayif-white);
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 99px;
  text-decoration: none;
  font-weight: 700;
  transition: background-color 0.2s ease;
}

.btn.ghost-light:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

@media (max-width: 900px) {
  .split-intro,
  .cot-split,
  .pillars-grid,
  .org-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
