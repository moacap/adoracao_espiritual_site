<script setup>
import HeaderStart from "./components/HeaderStart.vue";
import HeroStart from "./components/HeroStart.vue";
import LinksSection from "./components/LinksSection.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-white">
    <HeaderStart hide-social />
    <main>
      <HeroStart />
      <LinksSection />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
