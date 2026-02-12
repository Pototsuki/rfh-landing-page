/* eslint-disable nuxt/nuxt-config-keys-order */
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/a11y",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "motion-v/nuxt",
  ],

  ssr: false,

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true, static: true },
  },

  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English" },
      { code: "id", name: "Indonesia" },
    ],
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      alwaysRedirect: false,
      fallbackLocale: "en",
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
    },
  },

  fonts: {
    families: [
      {
        name: "Plus Jakarta Sans",
        provider: "google",
        weights: [300, 400, 500, 600, 700, 800],
        styles: ["normal"],
      },
      {
        name: "Playfair Display",
        provider: "google",
        weights: [300, 400, 500, 600, 700, 800],
        styles: ["normal"],
      },
    ],
  },

  content: {
    database: {
      type: "pglite",
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

  devServer: {
    port: 5100,
  },
});
