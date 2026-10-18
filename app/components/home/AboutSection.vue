<template>
  <section class="about-section blue">
    <div class="wrap two">
      <div v-reveal="'left'">
        <span class="about-kicker">À propos de l'initiative</span>
        <h2>About AYIF</h2>
        <p class="intro light">
          L’Africa Youth Investment Forum (AYIF) réunit chaque année des fonds d’investissement, banques de développement, institutions régionales et jeunes entrepreneurs pour accélérer le financement des entreprises africaines à forte croissance.
        </p>
        <p class="intro light sub">
          Co-organisé par NACCIMA Youth Entrepreneurs (Nigeria) et Elieson Business Consulting (Bénin), l’événement constitue une passerelle stratégique entre les marchés anglophones et francophones.
        </p>
        <NuxtLink to="/a-propos" class="link">
          Découvrir l'histoire et les organisateurs →
        </NuxtLink>
      </div>

      <div v-reveal="{ effect: 'right', delay: 150 }" class="navy card">
        <span class="card-tag">Hub Stratégique 2026</span>
        <h3>Pourquoi Cotonou ?</h3>
        <p>
          Port atlantique naturel de premier plan, corridor d’accès direct vers le Nigeria, le Niger, le Burkina Faso et le Mali : le Bénin offre un cadre macro-économique stable et ouvre l’accès à un marché régional de plus de 300 millions d'habitants.
        </p>
        <div class="card-features">
          <div class="feat-item">
            <strong>Zone Portuaire Moderne</strong>
            <span>Plateforme logistique d'envergure</span>
          </div>
          <div class="feat-item">
            <strong>Cadre des Affaires Réformé</strong>
            <span>Attractivité et sécurité des investissements</span>
          </div>
        </div>
        <div class="card-actions">
          <NuxtLink to="/a-propos#cotonou" class="btn primary">
            Explorer l'édition Cotonou
          </NuxtLink>
          <NuxtLink to="/reservation" class="btn ghost-light">
            Réserver mon accès
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 88px 0;
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
}

.about-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 8px;
}

.two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: stretch;
}

.intro.light {
  color: rgba(255, 255, 255, 0.88);
  font-size: var(--fs-lead);
  line-height: 1.6;
}

.intro.sub {
  margin-top: 14px;
}

.card {
  padding: 44px;
  background-color: var(--navy-bg);
  border: 1px solid var(--navy-line);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.card-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  margin-bottom: 12px;
}

.card h3 {
  font-size: var(--fs-h3);
  font-weight: 600;
  margin-bottom: 14px;
  color: var(--navy-text);
}

.card p {
  color: var(--navy-muted);
  font-size: var(--fs-body);
  line-height: 1.6;
  margin-bottom: 24px;
}

.card-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 28px;
  padding-top: 16px;
  border-top: 1px solid var(--navy-line);
}

.feat-item strong {
  display: block;
  font-size: 13px;
  color: var(--color-accent);
}

.feat-item span {
  font-size: 12px;
  color: var(--navy-muted);
}

.card-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;
}

.btn.ghost-light {
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: var(--ayif-white);
  padding: 12px 22px;
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
  .two {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
