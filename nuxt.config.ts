export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image',
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/base.css',
  ],
})
