<template>
  <div v-if="resultData" class="max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm">
    <img :src="resultImage" alt="Result Image" class="rounded-t-lg" />
    <div class="p-4">
      <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900">{{ resultTitle }}</h5>
      <p class="mb-3 font-normal text-gray-700">{{ resultMessage }}</p>
      <p class="my-4 text-sm text-gray-500">
        If you want to learn more about the quiz algorithm, visit the
        <router-link to="/about" class="text-blue-500 hover:underline">About page</router-link>.
      </p>
      <button
          @click="shareOnLinkedIn"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 my-4 transition">
        Share on LinkedIn
      </button>
    </div>
  </div>
  <p v-else class="text-center text-gray-500">Loading result...</p>
</template>


<script setup>
import { computed } from 'vue';

const props = defineProps({
  result: {
    type: Number,
    required: true
  }
});

// List of results for each archetype
const results = [
  {
    title: "Minimalist Designer",
    message: "As a Minimalist, your design philosophy focuses on simplicity, clarity, and functionality. You thrive on removing unnecessary elements to ensure that every design is clean and to the point. You believe that less is more, and your work reflects that by prioritizing usability and elegance.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88"
  },
  {
    title: "Visionary Designer",
    message: "As a Visionary, you constantly push the boundaries of design, aiming to create groundbreaking and bold experiences. You’re not afraid to challenge the norm and experiment with creative ideas. Your work is driven by your bold imagination and the desire to redefine what’s possible in design.",
    image: "/images/visionary.png"
  },
  {
    title: "Empath Designer",
    message: "As an Empath, your designs are deeply rooted in understanding and connecting with the user's emotions and needs. You prioritize creating experiences that resonate with people on a personal level. Your work always keeps the user’s journey in mind, ensuring that every interaction feels intuitive and meaningful.",
    image: "/images/empath.png"
  },
  {
    title: "Perfectionist Designer",
    message: "As a Perfectionist, your designs are all about precision, detail, and refinement. You believe in creating flawless work by focusing on every element, from typography to spacing. You aim for nothing less than perfection in every project and often go the extra mile to make sure every detail is executed to its fullest potential.",
    image: "/images/perfectionist.png"
  }
];

const resultData = computed(() => {
  if (props.result >= 1 && props.result <= 4) {
    return results[props.result - 1];
  } else {
    return null;
  }
});

const resultTitle = computed(() => resultData?.value.title);
const resultMessage = computed(() => resultData?.value.message);
const resultImage = computed(() => resultData?.value.image);

const shareOnLinkedIn = () => {
  const text = `I just took a design personality quiz and got: ${resultTitle.value}. Discover your design archetype now!`;
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://thedesignerarchetype.vercel.app/')}&summary=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};
</script>
