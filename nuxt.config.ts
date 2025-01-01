// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: ['~/assets/css/main.css'],

  modules: [
      "@nuxt/ui", "@vueuse/motion/nuxt", "nuxt-svgo", "@pinia/nuxt",
      '@pinia-plugin-persistedstate/nuxt'
  ],

  components: true,

  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },

  compatibilityDate: "2025-01-01",
})