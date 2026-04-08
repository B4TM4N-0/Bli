<template>
  <div class="min-h-screen bg-[#0f0f11] flex flex-col">
    <TopBar />

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />

  </div>
</template>

<script setup>
import TopBar from '~/components/layout/TopBar.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>