<template>
  <section class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]">
      <div class="absolute left-1/2 top-12 h-72 w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_60%)] blur-3xl" />
      <div class="absolute right-10 top-36 h-48 w-72 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_55%)] blur-3xl" />
    </div>

    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div class="space-y-6">
            <span ref="badgeRef" class="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/60">
              Script Vault
            </span>

            <div ref="heroRef" class="space-y-6">
              <h1 class="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Xyzu
              </h1>
              <p class="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                The best place to find and explore Roblox scripts.
              </p>
            </div>

            <div ref="buttonRef">
              <button class="inline-flex items-center justify-center rounded-[7px] bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_8px_rgba(255,255,255,0.08)]">
                Trending
              </button>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-[26px] border border-white/10 bg-[#11131a]/70 p-5">
              <p class="text-xs uppercase tracking-[0.28em] text-white/40">Trending</p>
              <h2 class="mt-4 text-2xl font-bold text-white">Top scripts today</h2>
              <p class="mt-3 text-sm leading-6 text-white/60">
                Discover featured Roblox scripts curated for speed, stealth, and premium performance.
              </p>
            </div>
            <div class="rounded-[26px] border border-white/10 bg-[#11131a]/70 p-5">
              <p class="text-xs uppercase tracking-[0.28em] text-white/40">Ready to use</p>
              <h2 class="mt-4 text-2xl font-bold text-white">Minimal setup</h2>
              <p class="mt-3 text-sm leading-6 text-white/60">
                Browse clean script cards built around a calm, focused dark experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 space-y-16">
        <Section title="Featured scripts">
          <ScriptCard
            v-for="script in featured"
            :key="script.id"
            v-bind="script"
          />
        </Section>

        <Section title="Recommended">
          <ScriptCard
            v-for="script in recommended"
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
import { featured, recommended } from '~/data/mock'
import { useScrollReveal } from '~/composables/useScrollReveal'

const badgeRef = ref(null)
const heroRef = ref(null)
const buttonRef = ref(null)
const { reveal } = useScrollReveal()

onMounted(() => {
  reveal(badgeRef.value, 0)
  reveal(heroRef.value, 80)
  reveal(buttonRef.value, 120)
})
</script>