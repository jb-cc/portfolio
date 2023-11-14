// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-primevue"],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ["Button"],
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["primevue/resources/themes/lara-light-teal/theme.css"],

  target: "static",
});
