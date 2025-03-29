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

    <div class="px-6 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <h3 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl text-center">
          See How Others Are Scoring
        </h3>

        <!-- Mock Data Section: Archetypes Ranking -->
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold text-gray-900">Minimalist</h4>
            <p class="mt-4 text-gray-700">1000 votes</p>
            <div class="mt-4 bg-zinc-200 rounded-full h-4">
              <div class="bg-zinc-800 h-4 rounded-full" style="width: 50%"></div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold text-gray-900">Visionary</h4>
            <p class="mt-4 text-gray-700">850 votes</p>
            <div class="mt-4 bg-zinc-200 rounded-full h-4">
              <div class="bg-zinc-800 h-4 rounded-full" style="width: 45%"></div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold text-gray-900">Empath</h4>
            <p class="mt-4 text-gray-700">750 votes</p>
            <div class="mt-4 bg-zinc-200 rounded-full h-4">
              <div class="bg-zinc-800 h-4 rounded-full" style="width: 40%"></div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold text-gray-900">Perfectionist</h4>
            <p class="mt-4 text-gray-700">500 votes</p>
            <div class="mt-4 bg-zinc-200 rounded-full h-4">
              <div class="bg-zinc-800 h-4 rounded-full" style="width: 25%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
