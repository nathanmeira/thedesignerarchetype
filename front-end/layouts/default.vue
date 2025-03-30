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