<script setup lang="ts">
</script>

<template>
  <h1 class="text-4xl p-4 font-semibold">Get in touch!</h1>
  <div class="w-full md:w-2/3 p-4 text-center">
    <p>
      Have questions or feedback? I’d love to hear from you! Whether you’re interested in learning more about the project, have suggestions, or just want to connect, feel free to reach out.
    </p>
  </div>

  <div class="flex flex-col items-center gap-4">
    <div class="w-full mx-auto">
      <form target="_blank" action="https://formsubmit.co/nathan.meira1@gmail.com" method="POST" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div>
            <input type="text" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500" placeholder="Name" required>
          </div>
          <div>
            <input type="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500" placeholder="Email Address" required>
          </div>
        </div>

        <div>
          <textarea name="message" placeholder="Your Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500" rows="6" required></textarea>
        </div>

        <button type="submit" class="w-full px-6 py-3 bg-zinc-800 text-white text-md font-semibold rounded-md shadow-md hover:bg-zinc-700 focus:ring-4 focus:ring-zinc-500">Submit</button>
      </form>
    </div>
  </div>

  <div class="flex flex-col justify-center items-center gap-6 mt-8">
    <p class="text-lg text-gray-700">You can also find me on:</p>
    <a href="https://github.com/nathanmeira" target="_blank" class="flex items-center gap-2 text-zinc-800 hover:text-zinc-600 underline">
      <Icon name="logos:github-icon" />GitHub
    </a>
    <a href="https://www.linkedin.com/in/nathan-m/" target="_blank" class="flex items-center gap-2 text-zinc-800 hover:text-zinc-600 underline">
      <Icon name="logos:linkedin-icon" />LinkedIn
    </a>
  </div>
</template>

<style scoped>
</style>
