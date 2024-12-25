<template>
  <section id="rented-cars" class="relative w-full min-h-screen bg-black text-white px-4 py-10">
    <div class="relative z-10 max-w-6xl mx-auto">
      <h2 class="text-4xl font-semibold mb-8 text-[#A5846C]">Арендованные автомобили</h2>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="car in rented_cars" :key="car.id" class="bg-[#1C1C1C] rounded-xl overflow-hidden shadow-lg flex flex-col">
          <img :src="car.imageUrl" :alt="car.name" class="w-full h-48 object-cover">
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-[#C1A38A] mb-2">{{ car.name }}<br>{{ car.year }}</h3>
            <p class="flex items-start text-sm text-gray-300 mb-2">
              <ul>
                <li>Объем: {{ car.engine }}</li>
                <li>Коробка передач: {{ car.transmission }}</li>
              </ul>
            </p>
            <p class="text-xl font-semibold text-white mb-4">{{ car.price }} тг/сутки</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { rented_cars } from './path-to-your-component-file' // Import rented_cars from the main component
</script>
