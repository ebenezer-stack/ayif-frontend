<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { EVENT_TARGET_DATE } from '../../data/mockData'

/* Barre de compte a rebours compacte, posee a cheval sur le bas du hero. */

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const target = new Date(EVENT_TARGET_DATE).getTime()

const compute = (): TimeLeft => {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000)
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

// Valeurs neutres au rendu serveur pour eviter un decalage d'hydratation
const time = ref<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  time.value = compute()
  timer = setInterval(() => { time.value = compute() }, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const units = [
  { key: 'days', label: 'Jours' },
  { key: 'hours', label: 'Heures' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Secondes' }
] as const
</script>

<template>
  <div class="cd-bar" role="timer" aria-label="Temps restant avant l'ouverture du forum">
    <template v-for="(u, i) in units" :key="u.key">
      <div class="cd-unit">
        <span class="cd-num">{{ u.key === 'days' ? time.days : pad(time[u.key]) }}</span>
        <span class="cd-label">{{ u.label }}</span>
      </div>
      <span v-if="i < units.length - 1" class="cd-sep" aria-hidden="true">:</span>
    </template>
  </div>
</template>

<style scoped>
.cd-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(14px, 4vw, 48px);
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
  padding: 26px clamp(20px, 5vw, 64px);
  border-radius: 6px;
  box-shadow: 0 24px 48px -20px rgba(4, 18, 36, 0.55);
}

.cd-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 64px;
}

.cd-num {
  font-family: var(--font-serif);
  font-size: var(--fs-stat);
  font-weight: 800;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.01em;
}

.cd-label {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
}

.cd-sep {
  font-family: var(--font-serif);
  font-size: var(--fs-h3);
  font-weight: 700;
  color: var(--color-gold);
  padding-bottom: 22px;
}

@media (max-width: 520px) {
  .cd-bar {
    padding: 18px 12px;
    gap: 8px;
  }
  .cd-unit {
    min-width: 52px;
  }
  .cd-label {
    font-size: 10px;
    letter-spacing: 0.06em;
  }
  .cd-sep {
    padding-bottom: 16px;
  }
}
</style>
