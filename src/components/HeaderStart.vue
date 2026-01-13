<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LanguageSelector from './LanguageSelector.vue';

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 50;
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
    <!-- Main Navigation (Soul Space Style) -->
    <nav 
      :class="[
        'w-full transition-all duration-700 z-50 fixed top-0 left-0',
        isSticky 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-8'
      ]"
    >
      <div class="w-full relative flex items-center justify-center px-5">
        <!-- Logo -->
        <a href="/" class="flex-shrink-0">
          <img 
            src="https://adocaoespiritual.org.br/assets/logo-0061352b.png" 
            alt="Adoção Espiritual" 
            :class="[
              'h-12 lg:h-16 w-auto transition-all duration-500',
              !isSticky ? 'brightness-0 invert' : ''
            ]"
          />
        </a>

        <!-- Language Selector (Right) -->
        <div class="absolute right-0 inset-y-0 flex items-center pr-5">
          <LanguageSelector :isWhite="isSticky" />
        </div>
      </div>
    </nav>
  </header>
</template>
