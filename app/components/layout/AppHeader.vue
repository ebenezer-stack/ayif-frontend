<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { navLinks } from '../../data/mockData'
import { useTheme } from '../../composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const scrolled = ref(false)
const menuOpen = ref(false)
const activeLang = ref<'FR' | 'EN'>('FR')

const onScroll = () => {
  if (import.meta.client) {
    scrolled.value = window.scrollY > 40
  }
}

const toggleLang = () => {
  activeLang.value = activeLang.value === 'FR' ? 'EN' : 'FR'
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', onScroll)
  }
})
</script>

<template>
  <header class="hd" :class="{ solid: scrolled || menuOpen }">
    <div class="wrap bar">
      <!-- Logo AYIF -->
      <NuxtLink to="/" class="logo" aria-label="AYIF Benin 2026 — Retour accueil">
        <b>AYIF</b>
        <span>BENIN 2026</span>
      </NuxtLink>

      <!-- Menu Navigation Desktop -->
      <nav class="menu" aria-label="Navigation principale">
        <NuxtLink 
          v-for="l in navLinks" 
          :key="l.href + l.label" 
          :to="l.href"
          class="nav-link"
          active-class="nav-active"
        >
          {{ l.label }}
        </NuxtLink>
      </nav>

      <!-- Actions Droite -->
      <div class="right">
        <!-- Bouton Changement de Langue -->
        <button 
          class="lang-btn" 
          type="button"
          :aria-label="'Changer de langue, actuelle: ' + activeLang" 
          @click="toggleLang"
        >
          <span :class="{ active: activeLang === 'FR' }">FR</span>
          <span class="sep">|</span>
          <span :class="{ active: activeLang === 'EN' }">EN</span>
        </button>

        <!-- Bouton Thème Sombre / Clair -->
        <button 
          id="theme-toggle-btn"
          class="theme-toggle" 
          type="button"
          :aria-label="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'"
          :title="isDark ? 'Mode clair' : 'Mode sombre'"
          @click="toggleTheme"
        >
          <!-- Icône Soleil (quand dark) -->
          <svg v-if="isDark" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <!-- Icône Lune (quand light) -->
          <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <!-- CTA Réserver -->
        <NuxtLink to="/reservation" class="btn primary nav-cta">
          Réserver un pass
        </NuxtLink>

        <!-- Burger Mobile -->
        <button 
          class="burger" 
          type="button"
          :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'" 
          :aria-expanded="menuOpen" 
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="burger-svg" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="burger-svg" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Drawer Mobile -->
    <nav v-if="menuOpen" class="drawer" aria-label="Menu mobile">
      <NuxtLink 
        v-for="l in navLinks" 
        :key="l.href + l.label" 
        :to="l.href" 
        class="drawer-link"
        active-class="drawer-active"
        @click="menuOpen = false"
      >
        {{ l.label }}
      </NuxtLink>
      
      <div class="drawer-controls">
        <button class="drawer-theme-btn" type="button" @click="toggleTheme">
          <span>{{ isDark ? 'Basculer en Mode clair' : 'Basculer en Mode sombre' }}</span>
          <svg v-if="isDark" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
          </svg>
          <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>

      <NuxtLink to="/reservation" class="btn primary drawer-cta" @click="menuOpen = false">
        Réserver mon pass d'accès
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.hd {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  background-color: transparent;
  border-bottom: 1px solid transparent;
}

.hd.solid {
  background-color: var(--header-bg-solid);
  border-bottom: 1px solid var(--header-border);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  color: var(--ayif-white);
  line-height: 1;
  text-decoration: none;
}

.logo b {
  display: block;
  font-family: var(--font-serif);
  font-size: var(--fs-h3);
  font-weight: 800;
  letter-spacing: 0.04em;
}

.logo span {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: var(--color-gold);
}

.menu {
  display: flex;
  gap: 20px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
}

.nav-link {
  transition: color 0.2s ease;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  padding: 6px 0;
  position: relative;
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link.nav-active {
  color: var(--color-accent);
  font-weight: 700;
}

.nav-link.nav-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-accent);
}

.right {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--ayif-white);
}

.lang-btn {
  background: none;
  border: none;
  font-size: 12px;
  font-weight: 700;
  color: var(--ayif-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  opacity: 0.85;
}

.lang-btn .active {
  color: var(--color-accent);
}

.lang-btn .sep {
  opacity: 0.5;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 99px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--ayif-white);
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: var(--color-accent);
}

.icon {
  width: 18px;
  height: 18px;
}

.burger {
  display: none;
  background: none;
  border: 0;
  color: var(--ayif-white);
  padding: 6px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.burger-svg {
  width: 24px;
  height: 24px;
}

.drawer {
  background-color: var(--header-bg-solid);
  height: calc(100dvh - 72px);
  overflow-y: auto;
  padding: 8px 20px 28px;
  border-top: 1px solid var(--header-border);
}

.drawer-link {
  display: block;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: var(--fs-h3);
  color: var(--ayif-white);
  text-decoration: none;
}

.drawer-link.drawer-active {
  color: var(--color-accent);
}

.drawer-controls {
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.drawer-theme-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: var(--ayif-white);
  font-family: var(--font-sans);
  font-size: var(--fs-body);
  cursor: pointer;
}

.drawer a.drawer-cta {
  margin-top: 24px;
  text-align: center;
  border: 0;
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: var(--fs-body);
}

@media (max-width: 1100px) {
  .menu,
  .nav-cta,
  .lang-btn,
  .theme-toggle {
    display: none;
  }
  .burger {
    display: block;
  }
}
</style>
