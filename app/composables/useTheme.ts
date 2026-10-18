import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const applyTheme = (dark: boolean) => {
    isDark.value = dark
    if (import.meta.client) {
      const root = document.documentElement
      if (dark) {
        root.classList.add('dark')
        root.setAttribute('data-theme', 'dark')
        try {
          localStorage.setItem('ayif-theme', 'dark')
        } catch {
          // localStorage non disponible
        }
      } else {
        root.classList.remove('dark')
        root.setAttribute('data-theme', 'light')
        try {
          localStorage.setItem('ayif-theme', 'light')
        } catch {
          // localStorage non disponible
        }
      }

      try {
        const colorMode = useColorMode()
        colorMode.preference = dark ? 'dark' : 'light'
      } catch {
        // useColorMode non disponible
      }
    }
  }

  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  const initTheme = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('ayif-theme')
      if (saved === 'dark') {
        applyTheme(true)
      } else if (saved === 'light') {
        applyTheme(false)
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        applyTheme(prefersDark)
      }
    }
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme,
    applyTheme,
    initTheme
  }
}
