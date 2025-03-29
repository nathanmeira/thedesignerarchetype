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
        { property: 'og:type', content: 'website' },
      ]
    };
  }
}
</script>
