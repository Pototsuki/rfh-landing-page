/* eslint-disable nuxt/nuxt-config-keys-order */
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

  i18n: {
    defaultLocale: "id",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "id", name: "Indonesia", file: "id.json" },
    ],
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      alwaysRedirect: false,
      fallbackLocale: "id",
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
    },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "always",
        quotes: "double",
      },
    },
  },
});
