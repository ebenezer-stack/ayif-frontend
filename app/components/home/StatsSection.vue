<script setup lang="ts">
import { heroStats } from '../../data/mockData'
import AnimatedCounter from '../common/AnimatedCounter.vue'
</script>

<template>
  <div class="navy stats-band">
    <dl class="wrap stats">
      <div
        v-for="(s, i) in heroStats"
        :key="s.label"
        v-reveal="{ effect: 'up', delay: i * 120 }"
        class="stat-item"
      >
        <dd class="num"><AnimatedCounter :value="s.value" /></dd>
        <dt>{{ s.label }}</dt>
      </div>
    </dl>
  </div>
</template>

<style scoped>
.stats-band {
  padding: 0;
  border-top: 1px solid var(--navy-line);
  border-bottom: 1px solid var(--navy-line);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding-top: 56px;
  padding-bottom: 56px;
  margin: 0 auto;
}

.stat-item {
  margin: 0;
}

.num {
  margin: 0;
  font-family: var(--font-serif);
  font-weight: 800;
  font-size: var(--fs-stat);
  line-height: 1;
  color: var(--color-accent);
}

dt {
  font-size: 14px;
  color: var(--navy-muted);
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 700px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>
