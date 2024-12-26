<template>
  <section id="rented-cars" class="w-full min-h-screen bg-gray-100 text-gray-800 px-4 py-10">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-semibold mb-8 text-[#A5846C]">Арендованные автомобили</h2>

      <!-- If no cars rented yet -->
      <div v-if="rentedCars.length === 0" class="text-center text-gray-500">
        Нет арендованных автомобилей.
      </div>

      <!-- Otherwise, display them as cards -->
      <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
            v-for="(car, index) in rentedCars"
            :key="car.id"
            class="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col"
        >
          <img
              :src="car.imageUrl"
              :alt="car.name"
              class="w-full h-48 object-cover"
          />
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-[#C1A38A] mb-2">
              {{ car.name }}<br>{{ car.year }}
            </h3>
            <p class="text-sm text-gray-600 mb-2">
              Объем: {{ car.engine }} <br>
              Коробка передач: {{ car.transmission }}
            </p>
            <div class="text-sm text-gray-600">
              <strong>Аренда:</strong>
              <span class="block">
                c {{ car.rentedFrom }} по {{ car.rentedTo }}
              </span>
            </div>
            <p class="text-xl font-semibold text-gray-800 mb-4">
              {{ car.price }} тг/сутки
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {computed, onMounted} from 'vue'
import { useCarStore } from '@/store/index.ts'

const carStore = useCarStore()

// We can use a getter to retrieve the rented cars
const rentedCars = computed(() => carStore.getRentedCars)

onMounted(() => {
  console.log(rentedCars)
})
</script>
