<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue'
import StatsSection from '../components/home/StatsSection.vue'
import WhySection from '../components/home/WhySection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ThemesSection from '../components/home/ThemesSection.vue'
import SpeakersSection from '../components/home/SpeakersSection.vue'
import ProgramSection from '../components/home/ProgramSection.vue'
import NigeriaSection from '../components/home/NigeriaSection.vue'
import SponsorsSection from '../components/home/SponsorsSection.vue'
import BlogSection from '../components/home/BlogSection.vue'
import CtaSection from '../components/home/CtaSection.vue'

useHead({
  title: 'AYIF Benin 2026 — Africa Youth Investment Forum',
  meta: [
    {
      name: 'description',
      content: 'Africa Youth Investment Forum (AYIF) Cotonou, Bénin 2026. Où les idées les plus audacieuses de la jeunesse africaine rencontrent le capital, l’opportunité et l’impact.'
    }
  ]
})
</script>

<template>
  <div class="homepage">
    <HeroSection />
    <WhySection />
    <AboutSection />
    <ThemesSection />
    <StatsSection />
    <SpeakersSection />
    <ProgramSection />
    <NigeriaSection />
    <SponsorsSection />
    <BlogSection />
    <CtaSection />
  </div>
</template>

<style scoped>
.homepage {
  width: 100%;
}
</style>
