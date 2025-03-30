<script setup lang="ts">
import NavbarMenu from "~/components/NavbarMenu.vue";
import { Analytics } from '@vercel/analytics/nuxt';

</script>

<template>
  <navbar-menu />
  <div class="flex flex-col items-center h-screen py-4">
    <slot />
  </div>
  <Analytics />
</template>

<script lang="ts">
export default {
  head() {
    return {
      meta: [
        { property: 'og:title', content: 'Take the Designer Archetype Quiz' },
        { property: 'og:description', content: 'Discover your design personality with our quick quiz!' },
        { property: 'og:image', content: 'https://rfiaajufzglggcggicou.supabase.co/storage/v1/object/sign/nnathan/perfectionist.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJubmF0aGFuL3BlcmZlY3Rpb25pc3QuanBnIiwiaWF0IjoxNzQzMjY4MTA0LCJleHAiOjE5MDA5NDgxMDR9.Q6-TYJfTvzuImKmY04BStliFFsKGaVZVBlJs7EGHC2A' },
        { property: 'og:image:secure_url', content: 'https://rfiaajufzglggcggicou.supabase.co/storage/v1/object/sign/nnathan/perfectionist.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJubmF0aGFuL3BlcmZlY3Rpb25pc3QuanBnIiwiaWF0IjoxNzQzMjY4MTA0LCJleHAiOjE5MDA5NDgxMDR9.Q6-TYJfTvzuImKmY04BStliFFsKGaVZVBlJs7EGHC2A' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Discover your designer archetype' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: window.location.href },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ]
    };
  }

}
</script>
