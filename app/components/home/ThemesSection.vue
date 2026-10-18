<script setup lang="ts">
import { themes } from '../../data/mockData'

// Deux rangees qui defilent en sens inverse ; la liste est doublee pour une boucle sans coupure
const rowA = themes.slice(0, Math.ceil(themes.length / 2))
const rowB = themes.slice(Math.ceil(themes.length / 2))
</script>

<template>
  <section id="themes" class="themes-section">
    <div class="wrap themes-head">
      <span v-reveal class="sub-kicker">Au programme</span>
      <h2 v-reveal="{ effect: 'up', delay: 100 }">Key themes</h2>
      <p v-reveal="{ effect: 'up', delay: 200 }" class="intro">
        Six thématiques structurent les panels, ateliers et sessions d'investissement de l'édition 2026.
      </p>
    </div>

    <div class="marquee themes-row" style="--marquee-duration: 45s" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="(t, i) in [...rowA, ...rowA, ...rowA, ...rowA]" :key="'a' + i" class="theme-chip">
          {{ t }}<i class="dot" />
        </span>
      </div>
    </div>

    <div class="marquee themes-row" style="--marquee-duration: 50s" aria-hidden="true">
      <div class="marquee-track reverse">
        <span v-for="(t, i) in [...rowB, ...rowB, ...rowB, ...rowB]" :key="'b' + i" class="theme-chip outline">
          {{ t }}<i class="dot" />
        </span>
      </div>
    </div>

    <!-- Liste accessible pour lecteurs d'ecran -->
    <ul class="sr-only">
      <li v-for="t in themes" :key="t">{{ t }}</li>
    </ul>
  </section>
</template>

<style scoped>
.themes-section {
  background-color: var(--bg-page);
  color: var(--text-page);
  overflow: hidden;
}

.themes-head {
  margin-bottom: 44px;
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

.themes-row {
  padding: 10px 0;
}

.theme-chip {
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding: 0 28px 0 0;
  white-space: nowrap;
  font-family: var(--font-serif);
  font-size: var(--fs-h2);
  font-weight: 600;
  color: var(--text-page);
  transition: color 0.25s ease;
}

.theme-chip.outline {
  color: var(--text-muted);
}

.theme-chip:hover {
  color: var(--ayif-blue);
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-gold);
}

.theme-chip.outline .dot {
  background-color: var(--color-accent);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>
