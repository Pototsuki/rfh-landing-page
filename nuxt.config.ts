// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/a11y",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
  ],

  ssr: true,

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true, static: true },
    "/classes": { static: true },
    "/classes/**": { ssr: true },
  },
  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "always",
      },
    },
  },
});
