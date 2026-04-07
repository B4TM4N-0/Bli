<template>
  <div class="relative rounded-lg overflow-hidden cursor-pointer group">

    <!-- Cover Image -->
    <div class="relative aspect-[3/4] w-full">
      <img
        :src="cover"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <!-- Dark gradient overlay at bottom -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <!-- Title -->
      <div class="absolute bottom-0 left-0 right-0 p-2 space-y-1">
        <h3 class="text-white text-sm font-semibold leading-tight line-clamp-2">
          {{ title }}
        </h3>

        <!-- Date + Rating Row -->
        <div class="flex items-center justify-between">
          <span class="text-white/50 text-[10px]">{{ date }}</span>
          <span class="flex items-center gap-1 text-yellow-400 text-[10px] font-medium">
            ⭐ {{ rating }}
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  cover: String,
  title: String,
  date: String,
  rating: Number
})
</script>