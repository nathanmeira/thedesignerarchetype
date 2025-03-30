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
  ],
  app: {
    head: {
      title: 'The Designer Archetype',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Find out your design archetype through our quiz.' },
        { property: 'og:title', content: 'Take the Designer Archetype Quiz' },
        { property: 'og:description', content: 'Discover your design personality with our quick quiz!' },
        { property: 'og:image', content: 'https://rfiaajufzglggcggicou.supabase.co/storage/v1/object/sign/nnathan/perfectionist.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJubmF0aGFuL3BlcmZlY3Rpb25pc3QuanBnIiwiaWF0IjoxNzQzMjY4MTA0LCJleHAiOjE5MDA5NDgxMDR9.Q6-TYJfTvzuImKmY04BStliFFsKGaVZVBlJs7EGHC2A' },
        { property: 'og:image:secure_url', content: 'https://rfiaajufzglggcggicou.supabase.co/storage/v1/object/sign/nnathan/perfectionist.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJubmF0aGFuL3BlcmZlY3Rpb25pc3QuanBnIiwiaWF0IjoxNzQzMjY4MTA0LCJleHAiOjE5MDA5NDgxMDR9.Q6-TYJfTvzuImKmY04BStliFFsKGaVZVBlJs7EGHC2A' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Discover your designer archetype' },
        { property: 'og:url', content: 'https://thedesignerarchetype.vercel.app/' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' }
      ]
    }
  }
})