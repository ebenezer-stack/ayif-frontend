<script setup lang="ts">
import CountdownTimer from '../common/CountdownTimer.vue'
import { EVENT_DATES_LABEL } from '../../data/mockData'
</script>

<template>
  <section class="hero">
    <!-- Photo de fond + voile bleu nuit uni (pas de degrade) -->
    <div class="hero-media" aria-hidden="true"><div class="hero-bg"></div></div>
    <div class="hero-veil" aria-hidden="true"></div>

    <div class="wrap hero-inner">
      <p class="hero-date rise">{{ EVENT_DATES_LABEL }}</p>

      <h1 class="rise d2">Africa Youth<br />Investment Forum 2026</h1>

      <ul class="hero-meta rise d3">
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          500+ participants
        </li>
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" /></svg>
          50+ speakers
        </li>
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          Palais des Congrès, Cotonou
        </li>
      </ul>

      <div class="hero-btns rise d4">
        <NuxtLink to="/reservation" class="btn primary">Réserver mon ticket</NuxtLink>
        <NuxtLink to="/programme" class="btn ghost">Voir le programme</NuxtLink>
      </div>
    </div>

    <!-- Compte a rebours a cheval sur le bas du hero -->
    <div class="wrap hero-countdown">
      <div class="rise d4">
        <CountdownTimer />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 0;
  margin-bottom: 72px; /* reserve la moitie basse de la barre qui deborde */
  color: var(--ayif-white);
}

.hero-media {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: var(--ayif-navy) url('/images/hero-conference.jpg') center 40% / cover no-repeat;
  animation: slow-zoom 18s ease-out both;
}

/* Voile uni : assure la lisibilite du texte blanc sans degrade */
.hero-veil {
  position: absolute;
  inset: 0;
  background-color: rgba(8, 43, 85, 0.72);
}

:root.dark .hero-veil,
.dark .hero-veil {
  background-color: rgba(4, 18, 36, 0.8);
}

.hero-inner {
  position: relative;
  z-index: 1;
  min-height: min(88vh, 760px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 120px;
  padding-bottom: 130px; /* espace pour la barre de compte a rebours */
}

.hero-date {
  margin: 0 0 18px;
  font-size: var(--fs-body);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.hero h1 {
  font-size: var(--fs-display);
  font-weight: 800;
  line-height: 1;
  color: var(--ayif-white);
  margin: 0 0 26px;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 28px;
  list-style: none;
  margin: 0 0 34px;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
}

.hero-meta li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.hero-meta svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hero-btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.hero-countdown {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  transform: translateY(50%);
  max-width: 860px;
}

@media (max-width: 600px) {
  .hero-inner {
    min-height: auto;
    padding-top: 110px;
    padding-bottom: 110px;
  }
  .hero-meta {
    flex-direction: column;
    align-items: center;
    font-size: 13px;
  }
  .hero-btns .btn {
    width: 100%;
  }
  .hero {
    margin-bottom: 56px;
  }
}
</style>
