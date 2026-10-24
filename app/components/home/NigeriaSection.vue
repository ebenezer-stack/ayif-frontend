<script setup lang="ts">
import { nigeriaStats, nigeriaGallery } from '../../data/mockData'
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

      <!-- STATISTIQUES CLES -->
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

      <!-- GALERIE PHOTOS AYIF 2025 -->
      <div class="gallery-block">
        <div class="gallery-header">
          <span class="gallery-kicker">Moments Forts en Images</span>
          <h3 class="gallery-title">Rétrospective Photographique Abuja 2025</h3>
        </div>

        <div class="gallery-grid">
          <figure 
            v-for="(item, idx) in nigeriaGallery" 
            :key="idx" 
            class="gallery-item"
            v-reveal="{ effect: 'up', delay: idx * 100 }"
          >
            <div class="img-wrapper">
              <img 
                :src="item.image" 
                :alt="item.title"
                loading="lazy"
                class="gallery-img"
              />
              <div class="overlay-grad"></div>
            </div>
            <figcaption class="item-caption">
              <strong class="item-title">{{ item.title }}</strong>
              <p class="item-sub">{{ item.caption }}</p>
            </figcaption>
          </figure>
        </div>
      </div>
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
  border-radius: 6px;
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

/* Galerie Photos */
.gallery-block {
  margin-top: 64px;
  padding-top: 48px;
  border-top: 1px solid var(--navy-line);
}

.gallery-header {
  margin-bottom: 28px;
}

.gallery-kicker {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 4px;
}

.gallery-title {
  font-size: 22px;
  font-weight: 800;
  color: var(--navy-text);
  margin: 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.gallery-item {
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--navy-line);
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
  border-color: var(--color-gold);
}

.img-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.05);
}

.overlay-grad {
  display: none;
}

.item-caption {
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--navy-text);
  line-height: 1.3;
}

.item-sub {
  font-size: 12px;
  color: var(--navy-muted);
  line-height: 1.4;
  margin: 0;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .s3 {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
