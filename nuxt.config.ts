// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  content: {
    highlight: {
      theme: "slack-dark",
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: "c-menu__item--active",
        exactActiveClass: "c-menu__item--exact-active",
        prefetchedClass: "c-menu__item--prefetched",
      },
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/content",
    "nuxt-purgecss",
  ],
});
