<script setup lang="ts">
import { nigeriaStats } from '../../data/mockData'
import AnimatedCounter from '../common/AnimatedCounter.vue'
</script>

<template>
  <section class="nigeria-section navy">
    <div class="wrap">
      <div v-reveal class="header-band">
        <div>
          <span class="sub-kicker">Rétrospective &amp; Héritage</span>
          <h2>AYIF Nigeria 2025</h2>
          <p class="intro light">
            Abuja a accueilli la première édition historique du forum : trois journées d'engagements concrets, de pitchs et de négociations directes entre investisseurs et jeunes créateurs de valeur.
          </p>
        </div>
        <NuxtLink to="/editions/abuja-2025" class="link">
          Découvrir les réalisations d'Abuja 2025 &rarr;
        </NuxtLink>
      </div>

      <dl class="s3">
        <div
          v-for="(s, i) in nigeriaStats"
          :key="s.label"
          v-reveal="{ effect: 'up', delay: i * 140 }"
          class="stat-card"
        >
          <dd class="num"><AnimatedCounter :value="s.value" /></dd>
          <dt class="label">{{ s.label }}</dt>
          <p class="sub-detail">{{ s.detail }}</p>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.nigeria-section {
  padding: 88px 0;
  background-color: var(--navy-bg);
  color: var(--navy-text);
  border-top: 1px solid var(--navy-line);
}

.header-band {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;
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

.s3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 48px 0 0;
  padding: 0;
}

.stat-card {
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--navy-line);
  padding: 32px 24px;
  border-radius: 4px;
}

.num {
  margin: 0;
  font-family: var(--font-serif);
  font-size: var(--fs-stat);
  font-weight: 800;
  line-height: 1;
  color: var(--color-accent);
}

.label {
  font-family: var(--font-sans);
  font-size: var(--fs-body);
  font-weight: 700;
  color: var(--navy-text);
  margin-top: 10px;
}

.sub-detail {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--navy-muted);
}

@media (max-width: 700px) {
  .s3 {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
