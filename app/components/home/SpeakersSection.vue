<script setup lang="ts">
import { speakers } from '../../data/mockData'

const featuredSpeakers = speakers.filter(s => s.featured).slice(0, 6)
</script>

<template>
  <section class="speakers-section">
    <div class="wrap">
      <div v-reveal class="head">
        <div>
          <span class="sub-kicker">Intervenants &amp; Experts</span>
          <h2>Featured Speakers</h2>
          <p class="intro">
            Des personnalités influentes du capital-investissement, de la tech et des affaires publiques.
          </p>
        </div>
        <NuxtLink to="/speakers" class="link-dark">
          Voir tous les intervenants (50+) →
        </NuxtLink>
      </div>

      <div class="grid6">
        <NuxtLink 
          v-for="(s, i) in featuredSpeakers" 
          :key="s.id" 
          v-reveal="{ effect: 'zoom', delay: i * 90 }"
          to="/speakers" 
          class="sp"
        >
          <div class="ph navy">
            <span>{{ s.initials }}</span>
            <em>{{ s.country }}</em>
          </div>
          <h3>{{ s.name }}</h3>
          <p class="sp-role">{{ s.role }}</p>
          <p class="sp-org">{{ s.organization }}</p>
        </NuxtLink>
      </div>

      <div v-reveal class="speakers-bottom-cta">
        <p>Vous souhaitez intervenir ou présenter votre fonds lors de l'édition 2026 ?</p>
        <NuxtLink to="/speakers#candidature" class="btn ghost-navy">
          Soumettre une candidature speaker
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.speakers-section {
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

.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
}

.link-dark {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: var(--fs-body);
  color: var(--ayif-blue);
  text-decoration: none;
  border-bottom: 2px solid var(--ayif-blue);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.link-dark:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.grid6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 28px 20px;
  margin-top: 48px;
}

.ph {
  position: relative;
  aspect-ratio: 4 / 5;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid var(--navy-line);
  border-radius: 4px;
  background-color: var(--navy-bg);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.sp:hover .ph {
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.ph span {
  font-family: var(--font-serif);
  font-size: var(--fs-stat);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.2);
}

.ph em {
  position: absolute;
  left: 10px;
  bottom: 8px;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  font-style: normal;
  color: var(--color-gold);
  background-color: rgba(8, 43, 85, 0.7);
  padding: 2px 6px;
  border-radius: 2px;
}

.sp {
  text-decoration: none;
}

.sp h3 {
  font-size: var(--fs-lead);
  font-weight: 600;
  margin-top: 12px;
  color: var(--text-page);
  transition: color 0.2s ease;
}

.sp:hover h3 {
  color: var(--ayif-blue);
}

.sp-role {
  margin: 3px 0 0;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  line-height: 1.35;
}

.sp-org {
  margin: 2px 0 0;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-accent);
}

.speakers-bottom-cta {
  margin-top: 56px;
  padding: 24px 32px;
  border: 1px solid var(--border-line);
  border-radius: 4px;
  background-color: var(--bg-surface);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.speakers-bottom-cta p {
  margin: 0;
  font-weight: 500;
  color: var(--text-page);
}

.btn.ghost-navy {
  border: 1px solid var(--ayif-blue);
  color: var(--ayif-blue);
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 99px;
  text-decoration: none;
  font-weight: 700;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.btn.ghost-navy:hover {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
}

@media (max-width: 1000px) {
  .grid6 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 560px) {
  .grid6 {
    grid-template-columns: repeat(2, 1fr);
  }

  .speakers-bottom-cta {
    flex-direction: column;
    text-align: center;
  }
}
</style>
