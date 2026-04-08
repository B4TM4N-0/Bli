<template>
  <div ref="cardRef" class="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#11131a]/90 shadow-[0_24px_90px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(124,58,237,0.16)] reveal-item">
    <div class="relative aspect-video overflow-hidden">
      <img
        :src="cover"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div class="absolute inset-x-0 bottom-0 p-5">
        <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">{{ subtitle }}</p>
        <h3 class="mt-2 text-sm font-semibold text-white">{{ title }}</h3>
      </div>

      <div class="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-black/45 px-3 py-2 text-xs font-semibold text-yellow-300 backdrop-blur-sm">
        <span>★</span>
        <span>{{ rating }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const props = defineProps({
  cover: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  rating: { type: [String, Number], required: true },
})

const cardRef = ref(null)
const { reveal } = useScrollReveal()

onMounted(() => {
  reveal(cardRef.value, 40)
})
</script>
