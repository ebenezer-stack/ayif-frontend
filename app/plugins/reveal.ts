/* ==========================================================================
   Directive v-reveal : fait apparaitre un element quand il entre a l'ecran.

   Usage :
     <div v-reveal>                     -> fondu + montee (par defaut)
     <div v-reveal="'left'">            -> variantes : up | left | right | zoom | fade
     <div v-reveal="{ effect: 'zoom', delay: 120 }">

   Le rendu serveur laisse le contenu visible (SEO, pas de JS = pas de contenu
   cache). Les classes ne sont ajoutees que cote client.
   ========================================================================== */
import type { Directive, DirectiveBinding } from 'vue'

type Effect = 'up' | 'left' | 'right' | 'zoom' | 'fade'
type RevealValue = Effect | { effect?: Effect; delay?: number } | undefined

let observer: IntersectionObserver | null = null

const getObserver = () => {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  return observer
}

const parse = (binding: DirectiveBinding<RevealValue>) => {
  const v = binding.value
  if (typeof v === 'string') return { effect: v, delay: 0 }
  return { effect: v?.effect ?? 'up', delay: v?.delay ?? 0 }
}

const reveal: Directive<HTMLElement, RevealValue> = {
  mounted(el, binding) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !('IntersectionObserver' in window)) return

    const { effect, delay } = parse(binding)
    el.classList.add('reveal', `reveal-${effect}`)
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
  getSSRProps() {
    return {}
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})
