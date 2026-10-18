<script setup lang="ts">
import { sessions } from '../../data/mockData'

const previewSessions = sessions.slice(0, 4)
</script>

<template>
  <section class="program-section">
    <div class="wrap prog">
      <div v-reveal="'left'" class="prog-side">
        <span class="sub-kicker">Agenda du Forum</span>
        <h2>Program Preview</h2>
        <p class="intro">
          Trois jours intenses rythmés par des keynotes visionnaires, des panels d'experts, des compétitions de pitch et plus de 300 rendez-vous B2B qualifiés.
        </p>
        <div class="prog-badges">
          <span class="p-badge">12 Nov : Capital &amp; Politiques</span>
          <span class="p-badge">13 Nov : PME, Pitchs &amp; Gala</span>
          <span class="p-badge">14 Nov : ZLECAf &amp; B2B</span>
        </div>
        <NuxtLink to="/programme" class="btn primary">
          Consulter le programme complet (3 jours)
        </NuxtLink>
      </div>

      <div class="prog-list">
        <article
          v-for="(s, i) in previewSessions"
          :key="s.id"
          v-reveal="{ effect: 'right', delay: i * 120 }"
          class="sess"
        >
          <time>{{ s.time }}</time>
          <div>
            <div class="sess-meta">
              <span class="tag">{{ s.type }}</span>
              <span class="day-hint">{{ s.dayLabel.split('—')[0] }}</span>
            </div>
            <h3>{{ s.title }}</h3>
            <p class="desc-line">{{ s.description }}</p>
            <p class="speaker-line">{{ s.speakers }} · {{ s.place }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.program-section {
  padding: 88px 0;
  background-color: var(--bg-page);
  color: var(--text-page);
  border-top: 1px solid var(--border-line);
}

.prog {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 56px;
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

.prog-badges {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0 28px 0;
}

.p-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-left: 3px solid var(--color-accent);
  border-radius: 2px;
  color: var(--text-page);
}

.sess {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px;
  border-top: 1px solid var(--border-line);
  padding: 24px 0;
}

.sess time {
  font-family: var(--font-serif);
  font-size: var(--fs-lead);
  font-weight: 700;
  color: var(--ayif-blue);
  line-height: 1.2;
}

.sess-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tag {
  display: inline-block;
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
  border-radius: 99px;
  padding: 3px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.day-hint {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-gold);
}

.sess h3 {
  font-size: var(--fs-h4);
  font-weight: 600;
  margin: 10px 0 6px;
  color: var(--text-page);
  line-height: 1.25;
}

.desc-line {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.45;
}

.speaker-line {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-accent);
}

@media (max-width: 900px) {
  .prog {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 560px) {
  .sess {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
