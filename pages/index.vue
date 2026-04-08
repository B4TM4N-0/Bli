<template>
  <section class="relative overflow-hidden">

    <!-- Background glows -->
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]">
      <div class="absolute left-1/2 top-12 h-72 w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_60%)] blur-3xl" />
      <div class="absolute right-10 top-36 h-48 w-72 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_55%)] blur-3xl" />
    </div>

    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

      <!-- Half circle hero container -->
      <div class="relative flex flex-col items-center text-center">

        <!-- The actual half circle shape behind text -->
        <div class="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[500px] h-[280px] rounded-[50%] bg-white/5 border border-white/10 blur-[2px]" />

        <!-- Content sitting on top -->
        <div ref="heroRef" class="relative z-10 flex flex-col items-center text-center space-y-5 py-14 px-6">
          <h1 class="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Xyzu
          </h1>
          <p class="max-w-sm text-base leading-7 text-white/70">
            The best place to find and explore Roblox scripts.
          </p>
          <button ref="buttonRef" class="inline-flex items-center justify-center rounded-[7px] bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_8px_rgba(255,255,255,0.08)]">
            Trending
          </button>
        </div>
      </div>

      <!-- Sections -->
      <div class="mt-12 space-y-16">
        <Section title="Featured Scripts">
          <ScriptCard
            v-for="script in featured"
            :key="script.id"
            v-bind="script"
          />
        </Section>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Section from '~/components/sections/Section.vue'
import ScriptCard from '~/components/cards/ScriptCard.vue'
import { featured } from '~/data/mock'
import { useScrollReveal } from '~/composables/useScrollReveal'

const heroRef = ref(null)
const buttonRef = ref(null)
const { reveal } = useScrollReveal()

onMounted(() => {
  reveal(heroRef.value, 0)
  reveal(buttonRef.value, 80)
})
</script>
