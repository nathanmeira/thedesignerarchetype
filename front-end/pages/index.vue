<template>
  <div class="">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          What kind of designer are you?
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
          Are you a Minimalist, a Visionary, an Empath, or a Perfectionist? Take the quiz to discover your design personality and gain insights into your creative strengths.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <router-link to="/quiz" class="rounded-md bg-zinc-800 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600">
            Take the quiz
          </router-link>
        </div>
      </div>
    </div>

    <div class="px-6 py-16 sm:px-6 lg:px-8 bg-gray-100">
      <div class="mx-auto max-w-3xl text-center">
        <h3 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Your design mindset shapes everything you create
        </h3>
        <p class="mt-6 text-lg text-gray-700">
          Every designer has a unique way of thinking, solving problems, and approaching creativity. Whether you thrive in structured minimalism, push boundaries with visionary ideas, connect deeply through empathy, or refine every detail with perfectionism, your approach defines your work.
        </p>
        <p class="mt-4 text-lg text-gray-700">
          By understanding your archetype, you’ll gain valuable insights into your strengths, challenges, and how you collaborate best with others. Ready to explore your creative identity?
        </p>
      </div>
    </div>

    <!-- Archetype Results Section -->
    <div class="px-6 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <h3 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl text-center">
          Scoreboard
        </h3>

        <!-- Cards for Archetypes -->
        <div v-if="archetypeResults.length" class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(result, index) in archetypeResults" :key="index" class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold text-gray-900">{{ result.archetype }}</h4>
            <div class="mt-4 bg-zinc-200 rounded-full h-6">
              <div class="bg-zinc-800 text-white pl-1 h-6 rounded-full" :style="{ width: result.percentage + '%' }">{{ `${result.percentage.toFixed(1)}%` }}</div>
            </div>
          </div>
        </div>
        <div v-else class="mt-8 text-gray-500">
          No data available for archetype results yet.
        </div>
      </div>
    </div>

    <!-- Time-Based Data Section -->
    <div class="px-4 py-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl text-center">
        <p class="text-lg text-gray-700">In the last hour, {{ recentTestTakers }} people took the quiz!</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const archetypeResults = ref([]);
const recentTestTakers = ref(0);

const fetchQuizResults = async () => {
  try {
    const response = await $fetch('/api/quizResults');
    console.log(response); // Log the response
    if (response.archetypeResults) {
      archetypeResults.value = response.archetypeResults;
    }
    if (response.recentTestTakers) {
      recentTestTakers.value = response.recentTestTakers;
    }
  } catch (error) {
    console.error('Error fetching quiz results:', error);
  }
};


onMounted(() => {
  fetchQuizResults();
});
</script>
