<script setup lang="ts">
import { sponsors } from '../../data/mockData'

const loop = [...sponsors, ...sponsors]
</script>

<template>
  <section class="sponsors-section">
    <div class="wrap">
      <div class="sponsors-head">
        <div>
          <span v-reveal class="sub-kicker">Alliances Stratégiques</span>
          <h2 v-reveal="{ effect: 'up', delay: 100 }">Sponsors &amp; Partners</h2>
          <p v-reveal="{ effect: 'up', delay: 200 }" class="intro">
            Institutions de développement, groupes bancaires et leaders industriels engagés pour l’essor de la jeunesse africaine.
          </p>
        </div>
        <NuxtLink v-reveal="'right'" to="/partenaires" class="link-dark">
          Devenir partenaire officiel →
        </NuxtLink>
      </div>
    </div>

    <!-- Bandeau qui defile en continu (pause au survol) -->
    <div v-reveal="'fade'" class="marquee logos-marquee" style="--marquee-duration: 38s">
      <ul class="marquee-track logos">
        <li v-for="(s, i) in loop" :key="s + i" :aria-hidden="i >= sponsors.length">
          <span>{{ s }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.sponsors-section {
  background-color: var(--bg-page);
  color: var(--text-page);
  border-top: 1px solid var(--border-line);
  overflow: hidden;
}

.sponsors-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
}

.sub-kicker {
  display: block;
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.link-dark {
  font-weight: 700;
  font-size: var(--fs-body);
  color: var(--ayif-blue);
  border-bottom: 2px solid var(--ayif-blue);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.link-dark:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.logos-marquee {
  margin-top: 44px;
  border-top: 1px solid var(--border-line);
  border-bottom: 1px solid var(--border-line);
}

.logos {
  list-style: none;
  margin: 0;
  padding: 0;
}

.logos li {
  flex: 0 0 auto;
  width: 260px;
  height: 104px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 16px 24px;
  border-right: 1px solid var(--border-line);
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: var(--fs-body);
  color: var(--text-muted);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.logos li:hover {
  color: var(--ayif-blue);
  background-color: var(--bg-surface);
}
</style>
