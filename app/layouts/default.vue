<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
</script>

<template>
  <div id="top" class="ayif-layout">
    <AppHeader />
    <main class="ayif-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.ayif-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-page);
  color: var(--text-page);
}

.ayif-main {
  flex: 1;
}
</style>
