<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="w-full">


    <!-- Main Navigation (Simplified) -->
    <nav 
      :class="[
        'w-full transition-all duration-300 z-50',
        isSticky ? 'fixed top-0 left-0 bg-white/60 backdrop-blur-md shadow-lg py-3' : 'relative bg-white/50 backdrop-blur-md py-5'
      ]"
    >
      <div class="container flex items-center justify-center">
        <!-- Logo -->
        <a href="/" class="flex-shrink-0">
          <img 
            src="https://adocaoespiritual.org.br/assets/logo-0061352b.png" 
            alt="Adoção Espiritual" 
            class="h-12 lg:h-14 w-auto"
          />
        </a>

        <!-- Menu Removed as requested -->
      </div>
    </nav>
  </header>
</template>
