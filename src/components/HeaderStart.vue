<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import LanguageSelector from './LanguageSelector.vue';
import aePretoLogo from '../assets/ae-preto.png';

const props = defineProps({
  alwaysOpaque: {
    type: Boolean,
    default: false
  }
});

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 50;
};

const showOpaque = computed(() => props.alwaysOpaque || isSticky.value);

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
        showOpaque 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-8'
      ]"
    >
      <div class="w-full flex items-center justify-between px-5 md:px-10">
        <!-- Logo (Left) -->
        <a href="site_page.html" class="flex-shrink-0">
          <img 
            :src="aePretoLogo" 
            alt="Adoção Espiritual" 
            :class="[
              'h-12 lg:h-16 w-auto transition-all duration-500',
              !showOpaque ? 'brightness-0 invert' : ''
            ]"
          />
        </a>

        <!-- Language Selector (Right) -->
        <div class="flex items-center">
          <LanguageSelector :isWhite="showOpaque" />
        </div>
      </div>
    </nav>
  </header>
</template>
