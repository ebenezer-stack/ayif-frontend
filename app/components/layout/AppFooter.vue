<script setup lang="ts">
import { footerCols } from '../../data/mockData'
</script>

<template>
  <footer class="ft">
    <div class="wrap fg">
      <div class="brand-col">
        <NuxtLink to="/" class="fl">
          AYIF <i>Benin 2026</i>
        </NuxtLink>
        <p class="desc">
          Africa Youth Investment Forum.<br />
          12 — 14 Novembre 2026 · Cotonou, Bénin.<br />
          Le carrefour panafricain des capitaux et de l’entrepreneuriat jeunesse.
        </p>
        <div class="organizers-note">
          <span>Co-organisé par :</span>
          <strong>NACCIMA Youth Entrepreneurs &amp; Elieson Business Consulting</strong>
        </div>
      </div>

      <div v-for="c in footerCols" :key="c.title" class="col">
        <h4>{{ c.title }}</h4>
        <NuxtLink v-for="l in c.links" :key="l.label" :to="l.href">
          {{ l.label }}
        </NuxtLink>
      </div>
    </div>

    <div class="bottom-bar">
      <div class="wrap cp-wrap">
        <p class="cp">
          © 2026 AYIF Benin · NACCIMA Youth Entrepreneurs et Elieson Business Consulting · Tous droits réservés.
        </p>
        <div class="sub-links">
          <NuxtLink to="/a-propos#mentions">Mentions Légales</NuxtLink>
          <span class="sep">·</span>
          <NuxtLink to="/reservation#faq">FAQ &amp; Accréditations</NuxtLink>
          <span class="sep">·</span>
          <NuxtLink to="/partenaires">Espace Partenaires</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ft {
  background-color: var(--navy-bg);
  color: var(--navy-muted);
  font-size: 14px;
  border-top: 1px solid var(--navy-line);
}

.fg {
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 40px;
  padding-top: 64px;
  padding-bottom: 64px;
}

.brand-col .desc {
  margin: 12px 0 16px 0;
  line-height: 1.6;
}

.organizers-note {
  font-size: 12px;
  color: var(--navy-muted);
  border-left: 2px solid var(--color-accent);
  padding-left: 10px;
  margin-top: 12px;
}

.organizers-note span {
  display: block;
  opacity: 0.8;
}

.organizers-note strong {
  color: var(--navy-text);
  font-weight: 600;
}

.fl {
  display: inline-block;
  margin: 0 0 8px;
  font-family: var(--font-serif);
  font-weight: 800;
  font-size: var(--fs-h3);
  color: var(--navy-text);
  text-decoration: none;
}

.fl i {
  font-style: normal;
  color: var(--color-gold);
}

.col h4 {
  color: var(--navy-text);
  margin: 0 0 14px;
  font-size: var(--fs-body);
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: 0.02em;
}

.col a {
  display: block;
  padding: 6px 0;
  color: var(--navy-muted);
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.col a:hover {
  color: var(--color-accent);
  padding-left: 4px;
}

.bottom-bar {
  border-top: 1px solid var(--navy-line);
}

.cp-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
  flex-wrap: wrap;
  gap: 12px;
}

.cp {
  margin: 0;
  font-size: 12px;
  color: var(--navy-muted);
}

.sub-links {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
}

.sub-links a {
  color: var(--navy-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.sub-links a:hover {
  color: var(--color-accent);
}

.sub-links .sep {
  opacity: 0.5;
}

@media (max-width: 800px) {
  .fg {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .cp-wrap {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
}

@media (max-width: 500px) {
  .fg {
    grid-template-columns: 1fr;
  }
}
</style>
