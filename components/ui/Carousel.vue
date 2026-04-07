<template>
  <div class="relative w-full overflow-hidden" @touchstart="onTouchStart" @touchend="onTouchEnd">
    
    <!-- Images -->
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${current * 100}%)` }"
    >
      <img
        v-for="img in images"
        :key="img.id"
        :src="img.src"
        class="w-full h-[220px] object-cover flex-shrink-0"
      />
    </div>

    <!-- Dot / Pill Indicators -->
    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
      <button
        v-for="(img, i) in images"
        :key="img.id"
        @click="current = i"
        class="h-2 rounded-full transition-all duration-300 bg-white"
        :class="current === i ? 'w-6 opacity-100' : 'w-2 opacity-40'"
      />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: Array
})

const current = ref(0)
let timer = null

// Auto swipe
onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % props.images.length
  }, 3000)
})

onUnmounted(() => clearInterval(timer))

// Touch swipe
let touchStartX = 0

function onTouchStart(e) {
  touchStartX = e.touches[0].clientX
}

function onTouchEnd(e) {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (diff > 50) current.value = (current.value + 1) % props.images.length
  if (diff < -50) current.value = (current.value - 1 + props.images.length) % props.images.length
}
</script>