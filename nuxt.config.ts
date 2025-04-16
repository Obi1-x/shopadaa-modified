// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'light-blue': '#1DA1F2',
            cyan: '#1CB1F2',
          },
        },
      },
    },
  },
  css: ['@/assets/css/styles.css']
});

