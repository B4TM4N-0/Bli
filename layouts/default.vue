<template>
  <div class="min-h-screen bg-[#0f0f11] flex flex-col">

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />

  </div>
</template>

<script setup>
import AppFooter from '~/components/layout/AppFooter.vue'
</script>