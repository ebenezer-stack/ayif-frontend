// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-headlessui',
    'nuxt-livekit',
    'nuxt-qrcode',
    'nuxt-realtime'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'AYIF Benin 2026 — Africa Youth Investment Forum',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Africa Youth Investment Forum (AYIF) Cotonou, Bénin 2026. Where Africa’s boldest ideas meet capital, opportunity and impact.'
        },
        { name: 'theme-color', content: '#082B55' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Manrope:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  },

  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', name: 'Français' },
      { code: 'en', name: 'English' }
    ],
    strategy: 'no_prefix'
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
