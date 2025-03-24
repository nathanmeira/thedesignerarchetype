<script setup lang="ts">
import { ref, onMounted } from 'vue';

const questions = ref([
  {
    question: "What's your preferred design style?",
    options: [
      { text: "Minimal", value: 1 },
      { text: "Bold", value: 2 },
      { text: "Eclectic", value: 3 },
    ],
    weight: 2,
  },
  {
    question: "How do you approach problem-solving?",
    options: [
      { text: "Logical and structured", value: 1 },
      { text: "Creative and intuitive", value: 2 },
      { text: "A mix of both", value: 3 },
    ],
    weight: 3,
  },
  {
    question: "What tool do you prefer for designing interfaces?",
    options: [
      { text: "Figma", value: 1 },
      { text: "Sketch", value: 2 },
      { text: "Adobe XD", value: 3 },
    ],
    weight: 1,
  },
]);

const currentQuestionIndex = ref(0);
const answers = ref<Array<number | null>>(new Array(questions.value.length).fill(null));
const result = ref<number | null>(null);
const isQuizCompleted = ref(false);

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
  let totalScore = 0;
  questions.value.forEach((question, index) => {
    if (answers.value[index] !== null) {
      totalScore += answers.value[index] * question.weight;
    }
  });
  return totalScore;
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
            <icon
                v-if="answers[currentQuestionIndex] === option.value"
                name="material-symbols:check-circle"
                size="1.5em"
                class="bg-white"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-6">
        <button
            v-if="currentQuestionIndex > 0"
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
      <h2 class="text-3xl font-semibold mb-4">Your Result</h2>
      <p class="text-xl mb-6">Your total score is: {{ result }}</p>
      <button
          class="bg-zinc-600 text-zinc-100 py-2 px-6 rounded-lg hover:bg-zinc-500"
          @click="retakeQuiz"
      >
        Retake the Quiz
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
