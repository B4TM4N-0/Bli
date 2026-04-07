<template>
  <div class="min-h-screen bg-[#0f0f11] text-white">
    <Carousel :images="carouselImages" />

    <div class="px-6 py-10 space-y-12">
      <Section title="Featured">
        <MangaCard v-for="m in featured" :key="m.id" v-bind="m" />
      </Section>

      <Section title="Recommended">
        <MangaCard v-for="m in recommended" :key="m.id" v-bind="m" />
      </Section>
    </div>
  </div>
</template>

<script setup>
import { carouselImages, featured, recommended } from '~/data/mock.ts'
</script>