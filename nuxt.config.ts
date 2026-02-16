// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-graphql-client",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@tresjs/nuxt",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  fonts: {
    families: [{ name: "Inter", provider: "google" }],
    defaults: {
      weights: [400, 500, 700],
    },
  },
});
