// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
      PIXABAY_API_KEY: process.env.NUXT_PUBLIC_PIXABAY_API_KEY
    },
    private: {
      supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ]
})