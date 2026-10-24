<template>
  <section class="cta-section navy">
    <div class="wrap">
      <span v-reveal class="cta-kicker">Rejoignez le mouvement économique</span>
      <h2 v-reveal="{ effect: 'zoom', delay: 100 }">Be part of Africa’s next investment conversation.</h2>
      <p v-reveal="{ effect: 'up', delay: 200 }" class="cta-lead">
        Les opportunités de co-investissement, d'expansion commerciale et de partenariats stratégiques se concrétisent à Cotonou du 03 au 05 Décembre 2026.
      </p>
      <div v-reveal="{ effect: 'up', delay: 300 }" class="cta-actions">
        <NuxtLink to="/reservation" class="btn primary cta-btn">
          Réserver mon pass d'accès
        </NuxtLink>
        <NuxtLink to="/programme" class="btn ghost cta-btn-ghost">
          Explorer le programme
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  text-align: center;
  padding: 110px 0;
  background-color: var(--navy-bg);
  color: var(--navy-text);
  border-top: 1px solid var(--navy-line);
}

.cta-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.cta-section h2 {
  font-size: var(--fs-h1);
  max-width: 900px;
  margin: 0 auto 20px;
  line-height: 1.1;
  color: var(--navy-text);
}

.cta-lead {
  max-width: 640px;
  margin: 0 auto 36px;
  font-size: var(--fs-lead);
  color: var(--navy-muted);
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 16px 36px;
  font-size: var(--fs-body);
  text-decoration: none;
}

.cta-btn-ghost {
  padding: 16px 32px;
  font-size: var(--fs-body);
  text-decoration: none;
}

@media (max-width: 600px) {
  .cta-section {
    padding: 72px 0;
  }
}
</style>
