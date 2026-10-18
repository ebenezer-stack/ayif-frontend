<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

/* Anime un chiffre de 0 a sa valeur quand il devient visible.
   Accepte des valeurs formatees : "500+", "$8M+", "25", "48h". */
const props = withDefaults(defineProps<{ value: string; duration?: number }>(), {
  duration: 1600
})

const parsed = computed(() => {
  const m = props.value.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/)
  if (!m) return null
  return { prefix: m[1], target: parseFloat(m[2]!.replace(',', '.')), suffix: m[3] }
})

// Rendu serveur = valeur finale (lisible sans JS)
const display = ref(props.value)
const el = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
let frame = 0

const run = () => {
  const p = parsed.value
  if (!p) return
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / props.duration)
    const eased = 1 - Math.pow(1 - t, 3)
    display.value = `${p.prefix}${Math.round(p.target * eased)}${p.suffix}`
    if (t < 1) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  const p = parsed.value
  if (!p || !el.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  display.value = `${p.prefix}0${p.suffix}`
  observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) {
      run()
      observer?.disconnect()
    }
  }, { threshold: 0.4 })
  observer.observe(el.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<template>
  <span ref="el" class="counter">{{ display }}</span>
</template>

<style scoped>
.counter {
  font-variant-numeric: tabular-nums;
}
</style>
