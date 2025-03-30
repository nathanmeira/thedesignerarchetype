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
        { property: 'og:image:type', content: 'image/jpeg' },  // Specify image type
        { property: 'og:image:width', content: '1200' },         // Set image width
        { property: 'og:image:height', content: '630' },         // Set image height
        { property: 'og:image:alt', content: 'Discover your designer archetype' }, // Alt text for accessibility
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: window.location.href }, // Ensure URL is dynamically set
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://rfiaajufzglggcggicou.supabase.co/storage/v1/object/sign/nnathan/perfectionist.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJubmF0aGFuL3BlcmZlY3Rpb25pc3QuanBnIiwiaWF0IjoxNzQzMjY4MTA0LCJleHAiOjE5MDA5NDgxMDR9.Q6-TYJfTvzuImKmY04BStliFFsKGaVZVBlJs7EGHC2A' },
        { name: 'twitter:image:alt', content: 'Discover your designer archetype' }, // Alt text for Twitter
        { name: 'twitter:title', content: 'Take the Designer Archetype Quiz' },
        { name: 'twitter:description', content: 'Discover your design personality with our quick quiz!' },
      ]
    };
  }

}
</script>
