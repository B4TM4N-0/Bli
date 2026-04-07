export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  vite: {
    server: {
      watch: {
        ignored: ['**/.local/share/pnpm/store/**', '**/node_modules/**']
      }
    }
  },

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

  devtools: { enabled: true }
})