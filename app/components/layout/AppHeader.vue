<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navLinks } from '../../data/mockData'
import { useTheme } from '../../composables/useTheme'

const route = useRoute()
const { isDark, toggleTheme } = useTheme()

const scrolled = ref(false)
const menuOpen = ref(false)
const langOpen = ref(false)
const langDropdownRef = ref<HTMLElement | null>(null)

const languages = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' }
] as const

const activeLang = ref<'FR' | 'EN'>('FR')

const selectLang = (code: 'fr' | 'en') => {
  activeLang.value = code.toUpperCase() as 'FR' | 'EN'
  langOpen.value = false
}

const toggleLang = () => {
  activeLang.value = activeLang.value === 'FR' ? 'EN' : 'FR'
}

const onClickOutside = (event: MouseEvent) => {
  if (langDropdownRef.value && !langDropdownRef.value.contains(event.target as Node)) {
    langOpen.value = false
  }
}

const onScroll = () => {
  if (import.meta.client) {
    scrolled.value = window.scrollY > 30
  }
}

// Close drawer automatically when route changes
watch(() => route.path, () => {
  menuOpen.value = false
  langOpen.value = false
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', onClickOutside)
  }
})
</script>

<template>
  <header class="hd" :class="{ 'solid': scrolled, 'drawer-open': menuOpen }">
    <div class="wrap bar">
      <!-- Logo Officiel AYIF Monogramme -->
      <NuxtLink to="/" class="logo" aria-label="Africa Youth Investment Forum — Accueil">
        <div class="logo-crest">
          <span class="logo-abbr">AYIF</span>
        </div>
      </NuxtLink>

      <!-- Menu Navigation Desktop (Garanti sans retour à la ligne) -->
      <nav class="menu" aria-label="Navigation principale">
        <NuxtLink 
          v-for="l in navLinks" 
          :key="l.href + l.label" 
          :to="l.href"
          class="nav-link"
          active-class="nav-active"
        >
          <span class="nav-label">{{ l.label }}</span>
          <span class="nav-indicator" aria-hidden="true"></span>
        </NuxtLink>
      </nav>

      <!-- Actions Droite -->
      <div class="right">
        <!-- Sélecteur de Langue Dropdown -->
        <div ref="langDropdownRef" class="lang-dropdown">
          <button 
            class="lang-trigger" 
            type="button" 
            :aria-expanded="langOpen"
            aria-haspopup="true"
            aria-label="Sélectionner la langue"
            @click="langOpen = !langOpen"
          >
            <span class="lang-code">{{ activeLang }}</span>
            <svg class="lang-chevron" :class="{ 'rotate': langOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <Transition name="lang-pop">
            <div v-if="langOpen" class="lang-menu" role="menu">
              <button 
                v-for="l in languages" 
                :key="l.code"
                type="button"
                class="lang-item"
                :class="{ 'selected': activeLang === l.label }"
                role="menuitem"
                @click="selectLang(l.code)"
              >
                <span class="lang-item-code">{{ l.label }}</span>
                <span class="lang-item-name">{{ l.name }}</span>
                <svg v-if="activeLang === l.label" class="lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </button>
            </div>
          </Transition>
        </div>

        <!-- Bouton Thème Sombre / Clair -->
        <button 
          id="theme-toggle-btn"
          class="theme-toggle" 
          type="button"
          :aria-label="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'"
          :title="isDark ? 'Mode clair' : 'Mode sombre'"
          @click="toggleTheme"
        >
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
          <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <!-- CTA Réserver un pass (Prestige Design, garanti sans déborder) -->
        <NuxtLink to="/reservation" class="nav-cta-prestige">
          <span class="cta-sheen" aria-hidden="true"></span>
          <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <circle cx="6" cy="12" r="1.5" />
            <circle cx="18" cy="12" r="1.5" />
            <path d="M10 6v12M14 6v12" stroke-dasharray="2 2" />
          </svg>
          <span class="cta-text">Réserver un pass</span>
        </NuxtLink>

        <!-- Burger Mobile -->
        <button 
          class="burger" 
          type="button"
          :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'" 
          :aria-expanded="menuOpen" 
          @click="menuOpen = !menuOpen"
        >
          <span class="burger-box">
            <span class="burger-line" :class="{ 'open-1': menuOpen }"></span>
            <span class="burger-line" :class="{ 'open-2': menuOpen }"></span>
            <span class="burger-line" :class="{ 'open-3': menuOpen }"></span>
          </span>
        </button>
      </div>
    </div>

    <!-- Drawer Mobile Haute-Couture -->
    <Transition name="drawer-slide">
      <div v-if="menuOpen" class="drawer" aria-label="Menu mobile">
        <div class="drawer-header-meta">
          <span class="drawer-flag-dot"></span>
          <span class="drawer-event-dates">03 au 05 Décembre 2026 • Cotonou, Bénin</span>
        </div>

        <nav class="drawer-nav">
          <NuxtLink 
            v-for="(l, i) in navLinks" 
            :key="l.href + l.label" 
            :to="l.href" 
            class="drawer-link"
            active-class="drawer-active"
            :style="{ transitionDelay: `${i * 30}ms` }"
            @click="menuOpen = false"
          >
            <span class="drawer-link-index">0{{ i + 1 }}</span>
            <span class="drawer-link-title">{{ l.label }}</span>
            <svg class="drawer-link-arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </nav>
        
        <div class="drawer-footer">
          <div class="drawer-controls-row">
            <button class="drawer-action-pill" type="button" @click="toggleLang">
              <span>Langue : <strong>{{ activeLang === 'FR' ? 'Français' : 'English' }}</strong></span>
            </button>
            <button class="drawer-action-pill" type="button" @click="toggleTheme">
              <span>{{ isDark ? 'Mode clair' : 'Mode sombre' }}</span>
              <svg v-if="isDark" class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
              </svg>
              <svg v-else class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>

          <NuxtLink to="/reservation" class="drawer-cta-btn" @click="menuOpen = false">
            <span>Accéder à la billetterie officielle</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="drawer-cta-arrow">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* ==========================================================================
   HEADER STRUCTURANT — EXPÉRIENCE SOMMET HAUTE-COUTURE
   ========================================================================== */
.hd {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  height: 76px;
  background-color: rgba(4, 18, 38, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(217, 162, 27, 0.18);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.hd.solid {
  background-color: rgba(3, 14, 30, 0.94);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(217, 162, 27, 0.35);
}

.hd.drawer-open {
  background-color: rgba(3, 14, 30, 0.98);
}

/* Conteneur fluide élargi pour éviter toute troncature */
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 24px;
  gap: 16px;
}

/* ==========================================================================
   LOGO OFFICIEL AYIF
   ========================================================================== */
.logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-crest {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  background-color: var(--ayif-navy, #082B55);
  border: 1px solid rgba(217, 162, 27, 0.5);
  border-radius: 6px;
  flex-shrink: 0;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.logo:hover .logo-crest {
  border-color: var(--color-gold);
}

.logo-abbr {
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  line-height: 1;
}

/* ==========================================================================
   NAVIGATION DESKTOP — GARANTIE ANTI-RETOUR-À-LA-LIGNE
   ========================================================================== */
.menu {
  display: flex;
  align-items: center;
  gap: clamp(10px, 1.3vw, 22px);
  flex-shrink: 1;
  min-width: 0;
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 8px 4px;
  font-family: var(--font-sans);
  font-size: clamp(12.5px, 0.95vw, 14px);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #FFFFFF;
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 99px;
  background: transparent;
  transition: background-color 0.25s ease, transform 0.25s ease;
  transform: scaleX(0);
}

.nav-link:hover .nav-indicator {
  background-color: rgba(217, 162, 27, 0.5);
  transform: scaleX(0.7);
}

.nav-link.nav-active {
  color: var(--color-gold);
  font-weight: 700;
}

.nav-link.nav-active .nav-indicator {
  background-color: var(--color-gold);
  transform: scaleX(1);
}

/* ==========================================================================
   ACTIONS DROITE : LANGUE, THÈME & CTA SOMMET
   ========================================================================== */
.right {
  display: flex;
  align-items: center;
  gap: clamp(8px, 1vw, 14px);
  flex-shrink: 0;
}

/* Langue : Sélecteur Dropdown sobre */
.lang-dropdown {
  position: relative;
}

.lang-trigger {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 34px;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 6px;
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 700;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-trigger:hover {
  background-color: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
}

.lang-code {
  letter-spacing: 0.04em;
}

.lang-chevron {
  width: 12px;
  height: 12px;
  color: rgba(255, 255, 255, 0.7);
  transition: transform 0.2s ease;
}

.lang-chevron.rotate {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 140px;
  background-color: var(--ayif-navy, #082B55);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 6px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 110;
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 7px 10px;
  border-radius: 6px;
  background: transparent;
  border: none;
  font-family: var(--font-sans);
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.lang-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
}

.lang-item.selected {
  background-color: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
  font-weight: 600;
}

.lang-item-code {
  font-size: 11px;
  font-weight: 700;
  color: var(--color-accent, #2EA7F2);
  width: 18px;
}

.lang-item-name {
  font-size: 12px;
  flex: 1;
}

.lang-check {
  width: 14px;
  height: 14px;
  color: var(--color-accent, #2EA7F2);
}

.lang-pop-enter-active,
.lang-pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

.lang-pop-enter-from,
.lang-pop-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.96);
}

/* Sélecteur de Thème sobre */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  color: #FFFFFF;
}

.icon {
  width: 16px;
  height: 16px;
}

/* Bouton CTA Réserver : Épuré, institutionnel et net */
.nav-cta-prestige {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: var(--ayif-blue, #0757B8);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #FFFFFF;
  text-decoration: none;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  white-space: nowrap;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

.nav-cta-prestige:hover {
  background-color: #0c67d6;
  border-color: rgba(255, 255, 255, 0.35);
  transform: translateY(-1px);
}

.cta-icon {
  width: 15px;
  height: 15px;
  color: rgba(255, 255, 255, 0.85);
}

.cta-sheen {
  display: none;
}

/* ==========================================================================
   BURGER MOBILE MINIMALISTE & PRÉCIS
   ========================================================================== */
.burger {
  display: none;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #FFFFFF;
  padding: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.burger:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: var(--color-gold);
}

.burger-box {
  width: 22px;
  height: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.burger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #FFFFFF;
  border-radius: 2px;
  transition: all 0.25s ease;
}

.burger-line.open-1 {
  transform: translateY(7px) rotate(45deg);
  background-color: var(--color-gold);
}

.burger-line.open-2 {
  opacity: 0;
  transform: scaleX(0);
}

.burger-line.open-3 {
  transform: translateY(-7px) rotate(-45deg);
  background-color: var(--color-gold);
}

/* ==========================================================================
   DRAWER MOBILE PLEIN ÉCRAN RAFFINÉ
   ========================================================================== */
.drawer {
  position: fixed;
  top: 76px;
  left: 0;
  right: 0;
  height: calc(100dvh - 76px);
  background-color: rgba(3, 14, 30, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1px solid rgba(217, 162, 27, 0.25);
  display: flex;
  flex-direction: column;
  padding: 24px 20px 36px;
  overflow-y: auto;
  z-index: 99;
}

.drawer-header-meta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(217, 162, 27, 0.1);
  border: 1px solid rgba(217, 162, 27, 0.3);
  border-radius: 99px;
  margin-bottom: 24px;
  align-self: flex-start;
}

.drawer-flag-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-gold);
  box-shadow: 0 0 8px var(--color-gold);
}

.drawer-event-dates {
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--color-gold);
  text-transform: uppercase;
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.drawer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 12px;
  border-radius: 10px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.88);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}

.drawer-link:hover,
.drawer-link.drawer-active {
  background: rgba(255, 255, 255, 0.06);
  color: #FFFFFF;
}

.drawer-link.drawer-active {
  border-left: 3px solid var(--color-gold);
  color: var(--color-gold);
}

.drawer-link-index {
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-gold);
  opacity: 0.8;
  width: 28px;
}

.drawer-link-title {
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  flex: 1;
}

.drawer-link-arrow {
  width: 16px;
  height: 16px;
  opacity: 0.4;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.drawer-link:hover .drawer-link-arrow {
  opacity: 1;
  transform: translateX(4px);
  color: var(--color-gold);
}

.drawer-footer {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.drawer-controls-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.drawer-action-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 12px 14px;
  color: #FFFFFF;
  font-family: var(--font-sans);
  font-size: 12.5px;
  cursor: pointer;
}

.drawer-action-pill strong {
  color: var(--color-gold);
}

.icon-sm {
  width: 16px;
  height: 16px;
}

.drawer-cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--ayif-blue, #0757B8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  border-radius: 8px;
  padding: 14px 20px;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}

.drawer-cta-arrow {
  width: 18px;
  height: 18px;
  color: #FFFFFF;
}

/* Animations de transition */
.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-slide-enter-from,
.drawer-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ==========================================================================
   BREAKPOINTS RESPONSIVE INTELLIGENTS
   ========================================================================== */
/* Écrans larges compacts (1180px à 1280px) : compression douce */
@media (max-width: 1280px) {
  .menu {
    gap: 12px;
  }
  .nav-link {
    font-size: 12.5px;
  }
}

/* Bascule franche sur le burger en dessous de 1180px pour garantir 0 chevauchement */
@media (max-width: 1180px) {
  .menu,
  .nav-cta-prestige {
    display: none;
  }
  .burger {
    display: inline-flex;
  }
}

/* Écrans mobiles étroits (<= 640px) */
@media (max-width: 640px) {
  .bar {
    padding: 0 16px;
  }
  .logo-abbr {
    font-size: 17px;
  }
  .theme-toggle {
    width: 32px;
    height: 32px;
  }
}
</style>
