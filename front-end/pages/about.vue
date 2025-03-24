<script setup lang="ts">
</script>

<template>
  <h1 class="text-4xl p-4 font-semibold">About the project</h1>

  <div class="max-w-6xl mx-4 py-4 flex flex-col items-center gap-4">
    <div class="w-full md:w-2/3 mx-auto">
      <p>Welcome to The Designer Archetype – a fun and interactive experience designed to help you discover your unique designer archetype.</p>
      <p>In this project, I wanted to combine my passion for design and my technical skills to create something engaging.
        This project is not just about exploring who you are as a designer, but also about the journey I took to bring this concept to life.
      </p>
    </div>
    <div class="w-full md:w-2/3 mx-auto">
      <video
          autoplay
          loop
          muted
          playsinline
      >
        <source
            src="https://rfiaajufzglggcggicou.supabase.co/storage/v1/object/sign/nnathan/project_making_off.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJubmF0aGFuL3Byb2plY3RfbWFraW5nX29mZi5tcDQiLCJpYXQiOjE3NDI3NzE0MjYsImV4cCI6MTkwMDQ1MTQyNn0.jFYBiN5DkoOkxlYCk2J8NJfwmq65K6IxZA3auueZhek"
            type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <hr class="w-full md:w-2/3 bg-zinc-600">
    <div class="w-full md:w-2/3 mx-auto">
      <h3 class="text-2xl font-semibold mb-4">Roles</h3>
      <div class="flex flex-wrap gap-2">
        <p class="bg-zinc-800 rounded-full px-4 py-1 text-zinc-100 text-sm md:text-base">Front-end developer</p>
        <p class="bg-zinc-800 rounded-full px-4 py-1 text-zinc-100 text-sm md:text-base">UX/UI Designer</p>
        <p class="bg-zinc-800 rounded-full px-4 py-1 text-zinc-100 text-sm md:text-base">DevOps</p>
        <p class="bg-zinc-800 rounded-full px-4 py-1 text-zinc-100 text-sm md:text-base">Project manager</p>
      </div>
    </div>
    <div class="w-full md:w-2/3 mx-auto">
      <h3 class="text-2xl font-semibold mb-4">Stack</h3>
      <div class="flex flex-wrap gap-4 items-center">
        Nuxt.js <icon name="logos:nuxt-icon" title="Nuxt.js" />
        Vite.js <icon name="logos:vitejs" title="Vite.js" />
        TypeScript <icon name="logos:typescript-icon-round" title="TypeScript" />
        TailwindCSS <icon name="logos:tailwindcss-icon" title="TailwindCSS" />
        Supabase <icon name="logos:supabase-icon" title="Supabase" />

      </div>
    </div>
  </div>

</template>

<style scoped>
</style>
