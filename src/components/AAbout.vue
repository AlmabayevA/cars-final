<template>
  <section id="about" class="relative w-full min-h-[500px] bg-neutral-900 text-white px-4 py-16">
    <!-- Background silhouette of a car, adjust opacity and image URL as needed -->
    <div
        class="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-10"
        :style="{ backgroundImage: `url('/path/to/car-silhouette.png')` }"
    ></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section Heading -->
      <h2 class="text-4xl font-semibold mb-8 text-[#A5846C]">О НАС</h2>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        <!-- Feature 1 -->
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-5xl font-bold text-[#A5846C]">01</span>
            <!-- Replace with appropriate icon -->
            <svg class="w-10 h-10 text-[#A5846C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M..."/>
            </svg>
          </div>
          <p class="text-sm text-gray-200">Гибкие условия аренды</p>
        </div>

        <!-- Feature 2 -->
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-5xl font-bold text-[#A5846C]">02</span>
            <!-- Icon for deposit -->
            <svg class="w-10 h-10 text-[#A5846C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M..."/>
            </svg>
          </div>
          <p class="text-sm text-gray-200">Минимальный залог</p>
        </div>

        <!-- Feature 3 -->
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-5xl font-bold text-[#A5846C]">03</span>
            <!-- Icon for support -->
            <svg class="w-10 h-10 text-[#A5846C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M..."/>
            </svg>
          </div>
          <p class="text-sm text-gray-200">Поддержка 24/7</p>
        </div>

        <!-- Feature 4 -->
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-5xl font-bold text-[#A5846C]">04</span>
            <!-- Icon for age limit -->
            <svg class="w-10 h-10 text-[#A5846C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M..."/>
            </svg>
          </div>
          <p class="text-sm text-gray-200">Возраст 21+</p>
        </div>

        <!-- Feature 5 -->
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-5xl font-bold text-[#A5846C]">05</span>
            <!-- Icon for driving experience -->
            <svg class="w-10 h-10 text-[#A5846C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M..."/>
            </svg>
          </div>
          <p class="text-sm text-gray-200">Стаж вождения от 2-х лет</p>
        </div>

        <!-- Feature 6 -->
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-5xl font-bold text-[#A5846C]">06</span>
            <!-- Icon for traveling outside city -->
            <svg class="w-10 h-10 text-[#A5846C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M..."/>
            </svg>
          </div>
          <p class="text-sm text-gray-200">С возможностью выезда за город</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed, static content only
</script>

<style scoped>
/* Adjust styling as needed */
</style>
