<script setup>
import HeaderStart from './components/HeaderStart.vue'
import HeroStart from './components/HeroStart.vue'
import LinksSection from './components/LinksSection.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <HeaderStart />
    <main>
      <HeroStart />
      <LinksSection />
    </main>
  </div>
</template>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
