<template>
  <h1 class="text-4xl p-4 font-semibold">About the project</h1>

  <div class="max-w-6xl mx-4 py-4 flex flex-col items-center gap-4">
    <div class="w-full md:w-2/3 mx-auto flex flex-col gap-4">
      <p>
        Welcome to <strong>The Designer Archetype</strong> – an interactive experience designed to help you uncover your unique creative identity.
        This project started as a simple idea: a way to merge my passion for design with my technical skills.
        But more than that, I wanted to create an experience that encourages designers to reflect on how they think, work, and approach creativity.
      </p>
    </div>
    <div class="w-full md:w-2/3 mx-auto rounded-lg">
      <video
          autoplay
          loop
          muted
          playsinline
          class="rounded-lg"
      >
        <source
            src="https://rfiaajufzglggcggicou.supabase.co/storage/v1/object/sign/nnathan/project_making_off.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJubmF0aGFuL3Byb2plY3RfbWFraW5nX29mZi5tcDQiLCJpYXQiOjE3NDI3NzE0MjYsImV4cCI6MTkwMDQ1MTQyNn0.jFYBiN5DkoOkxlYCk2J8NJfwmq65K6IxZA3auueZhek"
            type="video/mp4"
        />
      </video>
    </div>
    <div class="w-full md:w-2/3 mx-auto flex flex-col gap-4">
      <p>
        Throughout my journey as a designer and developer, I've met people with completely different approaches to design.
        Some are structured and methodical, others are spontaneous visionaries. Some obsess over every detail, while others focus on emotions and storytelling.
        This quiz is an attempt to capture those different mindsets and turn them into something interactive, insightful, and fun.
      </p>
      <p>
        The process of building this was also an exploration of both technology and design thinking.
        From defining the archetypes to developing the front-end and setting up the back-end, every step was an opportunity to learn, experiment, and refine.
      </p>
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
<script setup lang="ts">
</script>