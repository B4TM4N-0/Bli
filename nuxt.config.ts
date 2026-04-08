export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@vueuse/nuxt',
  ],
  
  css: ['~/assets/css/variables.css'],

  app: {
    head: {
      title: 'MangaVault',
      meta: [
        { name: 'description', content: 'Read manga and manhua online for free' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },

  eslint: {
    config: {},
  },

  icon: {
    mode: 'css',
    cssLayer: 'base',
  },

  devtools: { enabled: true }
})
