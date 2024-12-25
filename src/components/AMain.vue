<template>
  <section id="catalog" class="relative w-full min-h-screen bg-black text-white px-4 py-10">
    <div class="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20" :style="{ backgroundImage: `url('/img.png')` }"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <h2 class="text-4xl font-semibold mb-8 text-[#A5846C]">КАТАЛОГ</h2>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="car in cars" :key="car.id" class="bg-[#1C1C1C] rounded-xl overflow-hidden shadow-lg flex flex-col">
          <img :src="car.imageUrl" :alt="car.name" class="w-full h-48 object-cover">
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-[#C1A38A] mb-2">{{ car.name }}<br>{{ car.year }}</h3>
            <p class="flex items-start text-sm text-gray-300 mb-2">
              <svg class="w-5 h-5 inline-block mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3,1.046c..."/>
              </svg>
              <ul>
                <li>Объем: {{ car.engine }}</li>
                <li>Коробка передач: {{ car.transmission }}</li>
              </ul>
            </p>
            <p class="text-xl font-semibold text-white mb-4">{{ car.price }} тг/сутки</p>
            <button
                class="mt-auto bg-[#A5846C] text-white py-2 px-4 rounded hover:bg-[#8f6f5b] transition"
                @click="openModal(car)"
            >
              Арендовать авто
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div
          v-if="showModal"
          @click="showModal = false"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      >
        <div class="relative bg-white text-black w-full max-w-md mx-auto rounded-lg shadow-lg p-8" @click.stop="showModal">
          <h2 class="text-2xl font-semibold mb-2 text-black">Оставьте ваши данные и мы с вами свяжемся</h2>
          <p class="text-gray-600 mb-6 text-sm">Скидка 10% всем новым клиентам!</p>

          <form @submit.prevent="handleFormSubmit">
            <label class="block mb-4">
              <input
                  type="text"
                  placeholder="Ваше имя*"
                  v-model="formData.name"
                  class="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-[#A5846C]"
                  required
              />
            </label>

            <label class="block mb-1 relative">
              <span class="absolute left-4 top-2 text-xl">🇰🇿</span>
              <input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  v-model="formData.phone"
                  :class="{'border-red-500': !isPhoneValid && formData.phone}"
                  class="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-[#A5846C]"
                  required
              />
            </label>
            <p v-if="!isPhoneValid && formData.phone" class="text-red-500 text-sm mb-4">Пожалуйста, введите корректный номер в формате: +7 (XXX) XXX-XX-XX</p>

            <button
                type="submit"
                class="w-full rounded-full py-2 mt-4 text-white font-semibold"
                :style="{ background: 'linear-gradient(to right, #A5846C, #C1A38A)' }"
            >
              Арендовать авто
            </button>
          </form>

          <p class="text-gray-500 text-xs mt-4 italic">*Не сдаем в аренду под такси</p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const showModal = ref(false)
const formData = ref({
  name: '',
  phone: ''
})

const cars = ref([
  {
    id: 1,
    name: 'HYUNDAI ELANTRA 2018-2020',
    year: '2018-2020',
    engine: '2.5',
    transmission: 'автомат',
    price: 18000,
    imageUrl: '',  // Add your image URL here
  },
  {
    id: 2,
    name: 'KIA K3 2022-2023',
    year: '2022-2023',
    engine: '1.6',
    transmission: 'автомат',
    price: 23000,
    imageUrl: '',  // Add your image URL here
  },
  {
    id: 3,
    name: 'HYUNDAI ELANTRA 2022-2024',
    year: '2022-2024',
    engine: '1.6',
    transmission: 'автомат',
    price: 25000,
    imageUrl: '',  // Add your image URL here
  },
  {
    id: 4,
    name: 'HYUNDAI SONATA 2021',
    year: '2021',
    engine: '3.5',
    transmission: 'автомат',
    price: 35000,
    imageUrl: '',  // Add your image URL here
  },
  {
    id: 5,
    name: 'TOYOTA CAMRY 75 2024',
    year: '2024',
    engine: '2.5',
    transmission: 'автомат',
    price: 40000,
    imageUrl: '',  // Add your image URL here
  }
])

const rented_cars = ref([]) // Array to store rented cars

const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/

const isPhoneValid = computed(() => {
  if (formData.value.phone === '') return true
  return phoneRegex.test(formData.value.phone)
})

let currentCar = ref(null)

function handleFormSubmit() {
  if (!isPhoneValid.value) {
    return
  }

  // Add the rented car to the rented_cars array
  rented_cars.value.push(currentCar.value)

  // Clear form and close modal
  formData.value.name = ''
  formData.value.phone = ''
  showModal.value = false
}

function openModal(car) {
  currentCar.value = car
  showModal.value = true
}
</script>
