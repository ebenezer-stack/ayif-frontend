<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { EVENT_TARGET_DATE } from '../../data/mockData'

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

const time = ref<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  time.value = compute()
  timer = setInterval(() => { time.value = compute() }, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="cd-simple" role="timer" aria-label="Compte à rebours avant l'ouverture de l'AYIF 2026">
    <div class="cd-item">
      <span class="cd-val">{{ time.days }}</span>
      <span class="cd-lbl">Jours</span>
    </div>

    <div class="cd-line" aria-hidden="true"></div>

    <div class="cd-item">
      <span class="cd-val">{{ pad(time.hours) }}</span>
      <span class="cd-lbl">Heures</span>
    </div>

    <div class="cd-line" aria-hidden="true"></div>

    <div class="cd-item">
      <span class="cd-val">{{ pad(time.minutes) }}</span>
      <span class="cd-lbl">Minutes</span>
    </div>

    <div class="cd-line" aria-hidden="true"></div>

    <div class="cd-item">
      <span class="cd-val">{{ pad(time.seconds) }}</span>
      <span class="cd-lbl">Secondes</span>
    </div>
  </div>
</template>

<style scoped>
.cd-simple {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  background-color: var(--ayif-navy, #082B55);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  padding: 24px clamp(24px, 4vw, 56px);
  box-shadow: 0 16px 36px rgba(4, 18, 36, 0.35);
  color: #FFFFFF;
}

.cd-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.cd-val {
  font-family: var(--font-sans);
  font-size: clamp(2.1rem, 3.8vw, 2.85rem);
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

.cd-lbl {
  margin-top: 8px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.05em;
}

.cd-line {
  width: 1px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .cd-simple {
    padding: 14px 18px;
    border-radius: 6px;
    max-width: 360px;
  }
  .cd-val {
    font-size: 1.45rem;
  }
  .cd-lbl {
    font-size: 10px;
    margin-top: 4px;
  }
  .cd-line {
    height: 24px;
  }
}
</style>
