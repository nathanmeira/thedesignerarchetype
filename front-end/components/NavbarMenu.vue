<template>
  <nav class="bg-zinc-800 p-5">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl text-zinc-100 uppercase">The Designer Archetype</h1>
      <button id="menu-btn" class="lg:hidden text-3xl focus:outline-none" @click="toggleMenu">
        <Icon class="bg-zinc-100" :name="isMenuOpen ? 'material-symbols:close' : 'charm:menu-hamburger'"/>
      </button>
      <div
          class="lg:flex flex-col lg:flex-row gap-10 text-xl text-zinc-100 absolute lg:relative top-[4.75rem] lg:top-0 left-0 w-full lg:w-auto bg-zinc-800 lg:p-0 lg:bg-transparent lg:gap-10 lg:items-center lg:justify-end"
          :class="isMenuOpen? '' : 'hidden'"
      >
        <nuxt-link to="/" class="hover:text-zinc-300 block py-2 px-4 lg:inline" @click="toggleMenu">Home</nuxt-link>
        <hr>
        <nuxt-link to="/about" class="hover:text-zinc-300 block py-2 px-4 lg:inline" @click="toggleMenu">About</nuxt-link>
        <hr>
        <nuxt-link to="/quiz" class="hover:text-zinc-300 block py-2 px-4 lg:inline" @click="toggleMenu">Quiz</nuxt-link>
        <hr>
        <nuxt-link to="/contact" class="hover:text-zinc-300 block py-2 px-4 lg:inline" @click="toggleMenu">Contact</nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navbar-menu',
  setup() {
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    return { isMenuOpen, toggleMenu };
  }
}
</script>