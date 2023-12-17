export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/base.css',
  ],

  colorMode: {
    classSuffix: '',
  },
})
