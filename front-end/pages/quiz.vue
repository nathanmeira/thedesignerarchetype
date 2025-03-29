<script setup lang="ts">
import { ref, onMounted } from 'vue';

const archetypes = ['Minimalist', 'Visionary', 'Empath', 'Perfectionist'];
const questions = ref([
  {
    question: "What’s your starting point for a new design?",
    options: [
      { text: "Remove unnecessary elements and focus on clarity.", value: 1 },
      { text: "Think about bold ideas that could redefine the project.", value: 2 },
      { text: "Understand the user’s needs and emotional connection.", value: 3 },
      { text: "Plan every detail before moving forward.", value: 4 },
    ]
  },
  {
    question: "How do you respond to feedback?",
    options: [
      { text: "Simplify the design to align with feedback.", value: 1 },
      { text: "Use it as inspiration to innovate further.", value: 2 },
      { text: "Adjust to better meet the user’s needs.", value: 3 },
      { text: "Reassess every element for absolute precision.", value: 4 },
    ]
  },
  {
    question: "Which design principle resonates with you most?",
    options: [
      { text: "Less is more.", value: 1 },
      { text: "Break the rules to find something new.", value: 2 },
      { text: "Design for people, not just products.", value: 3 },
      { text: "Perfection lies in the details.", value: 4 },
    ]
  },
  {
    question: "How do you measure success in design?",
    options: [
      { text: "Simplicity and usability.", value: 1 },
      { text: "Originality and bold impact.", value: 2 },
      { text: "User satisfaction and emotional resonance.", value: 3 },
      { text: "Flawlessness and attention to detail.", value: 4 },
    ]
  },
  {
    question: "What’s your ideal design process?",
    options: [
      { text: "Focus on the essentials and eliminate noise.", value: 1 },
      { text: "Experiment and iterate to find groundbreaking ideas.", value: 2 },
      { text: "Build empathy for the user at every step.", value: 3 },
      { text: "Refine and polish until everything is perfect.", value: 4 },
    ]
  },
  {
    question: "What inspires your designs?",
    options: [
      { text: "Clean lines and purposeful design.", value: 1 },
      { text: "Future trends and bold concepts.", value: 2 },
      { text: "People and their stories.", value: 3 },
      { text: "Immaculate craftsmanship and quality.", value: 4 },
    ]
  },
  {
    question: "How do you approach problem-solving in design?",
    options: [
      { text: "Strip everything down to the essentials.", value: 1 },
      { text: "Explore unconventional solutions and push boundaries.", value: 2 },
      { text: "Think about how the user experiences the problem.", value: 3 },
      { text: "Analyze every detail meticulously before deciding.", value: 4 },
    ]
  },
  {
    question: "Which of these design tools or methods do you gravitate towards?",
    options: [
      { text: "Grids, whitespace, and clean typography.", value: 1 },
      { text: "Sketching wild concepts and brainstorming disruptive ideas.", value: 2 },
      { text: "User research, journey mapping, and feedback loops.", value: 3 },
      { text: "Precision tools, pixel-perfect adjustments, and refinement.", value: 4 },
    ]
  },
  {
    question: "What’s your biggest strength as a designer?",
    options: [
      { text: "Simplicity and clarity.", value: 1 },
      { text: "Innovation and bold thinking.", value: 2 },
      { text: "Deep understanding of user needs.", value: 3 },
      { text: "Detail-oriented perfection.", value: 4 },
    ]
  },
  {
    question: "If you could be remembered for one thing in design, what would it be?",
    options: [
      { text: "Creating timeless, functional designs.", value: 1 },
      { text: "Pushing the boundaries of creativity.", value: 2 },
      { text: "Designing experiences that truly connect with people.", value: 3 },
      { text: "Crafting flawless, high-quality work.", value: 4 },
    ]
  }
]);

const currentQuestionIndex = ref(0);
const answers = ref<Array<number | null>>(new Array(questions.value.length).fill(null));
const isQuizCompleted = ref(false);
const result = ref<string | null>(null);

onMounted(() => {
  const storedAnswers = localStorage.getItem('quizAnswers');
  if (storedAnswers) {
    answers.value = JSON.parse(storedAnswers);
    const storedIndex = localStorage.getItem('currentQuestionIndex');
    if (storedIndex) {
      currentQuestionIndex.value = parseInt(storedIndex);
    }
  }
});

const storeProgress = () => {
  localStorage.setItem('quizAnswers', JSON.stringify(answers.value));
  localStorage.setItem('currentQuestionIndex', currentQuestionIndex.value.toString());
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
    storeProgress();
  }
};

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
    storeProgress();
  }
};

const calculateResult = () => {
  const counts = [0, 0, 0, 0];
  answers.value.forEach(value => {
    if (value !== null) counts[value - 1]++;
  });
  const maxIndex = counts.indexOf(Math.max(...counts));
  return archetypes[maxIndex];
};

const submitQuiz = () => {
  result.value = calculateResult();
  isQuizCompleted.value = true;
  localStorage.removeItem('quizAnswers');
  localStorage.removeItem('currentQuestionIndex');
};

const retakeQuiz = () => {
  answers.value = new Array(questions.value.length).fill(null);
  currentQuestionIndex.value = 0;
  result.value = null;
  isQuizCompleted.value = false;
  localStorage.removeItem('quizAnswers');
  localStorage.removeItem('currentQuestionIndex');
};
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-semibold mb-6">Designer Archetype Quiz</h1>

    <div v-if="!isQuizCompleted" class="w-full md:w-2/3 mx-auto">
      <div v-if="currentQuestionIndex < questions.length" class="mb-6">
        <p class="text-xl font-semibold mb-4">{{ questions[currentQuestionIndex].question }}</p>
        <div class="flex flex-col gap-4">
          <div
              v-for="(option, index) in questions[currentQuestionIndex].options"
              :key="index"
              class="flex justify-between items-center rounded-lg p-3 cursor-pointer hover:bg-zinc-700"
              :class="{
                'bg-zinc-800': answers[currentQuestionIndex] !== option.value,
                'bg-zinc-500': answers[currentQuestionIndex] === option.value
              }"
              @click="answers[currentQuestionIndex] = option.value"
          >
            <p class="text-zinc-100 text-lg">{{ option.text }}</p>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-6">
        <button
            :disabled="currentQuestionIndex < 1"
            class="bg-zinc-600 text-zinc-100 py-2 px-6 rounded-lg hover:bg-zinc-500"
            @click="previousQuestion"
        >
          Back
        </button>
        <button
            v-if="currentQuestionIndex < questions.length - 1"
            class="bg-zinc-600 text-zinc-100 py-2 px-6 rounded-lg hover:bg-zinc-500"
            @click="nextQuestion"
        >
          Next
        </button>
        <button
            v-if="currentQuestionIndex === questions.length - 1"
            class="bg-zinc-600 text-zinc-100 py-2 px-6 rounded-lg hover:bg-zinc-500"
            @click="submitQuiz"
        >
          Submit
        </button>
      </div>
    </div>

    <div v-if="isQuizCompleted" class="w-full md:w-2/3 mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-4">Your Archetype</h2>
      <p class="text-xl mb-6">You are a <strong>{{ result }}</strong>!</p>
      <button
          class="bg-zinc-600 text-zinc-100 py-2 px-6 rounded-lg hover:bg-zinc-500"
          @click="retakeQuiz"
      >
        Retake the Quiz
      </button>
    </div>
  </div>
</template>
