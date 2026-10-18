<script setup lang="ts">
import { pillars } from '../../data/mockData'
</script>

<template>
  <section class="why-section">
    <div class="wrap split">
      <div v-reveal="'left'">
        <span class="sub-kicker">Vision &amp; Objectifs</span>
        <h2>Pourquoi l’AYIF ?</h2>
        <p class="intro">
          Un forum panafricain conçu pour que la jeunesse passe de l’idée au financement, et du financement à l’impact durable.
        </p>
        <NuxtLink to="/a-propos" class="learn-more-link">
          Comprendre notre mission et nos piliers →
        </NuxtLink>
      </div>

      <ul class="pillars">
        <li v-for="(p, i) in pillars" :key="p.title" v-reveal="{ effect: 'up', delay: i * 120 }">
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.why-section {
  padding: 88px 0;
  background-color: var(--bg-page);
  color: var(--text-page);
}

.sub-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 56px;
}

.pillars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.pillars li {
  border-top: 2px solid var(--ayif-blue);
  padding-top: 18px;
}

.pillars h3 {
  font-size: var(--fs-h3);
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-page);
}

.pillars p {
  margin: 0;
  color: var(--text-muted);
  font-size: var(--fs-body);
  line-height: 1.55;
}

.learn-more-link {
  display: inline-block;
  margin-top: 24px;
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: var(--fs-body);
  color: var(--color-accent);
  text-decoration: none;
  transition: transform 0.2s ease;
}

.learn-more-link:hover {
  transform: translateX(4px);
}

@media (max-width: 900px) {
  .split {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 600px) {
  .pillars {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
