<template>
  <div class="space-y-4">
    
    <!-- Section Header -->
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-bold tracking-wide text-white">{{ title }}</h2>
      <span class="text-xs text-white/40 cursor-pointer hover:text-white/70 transition-colors">
        View all →
      </span>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      <slot />
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>