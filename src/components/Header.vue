<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LanguageSelector from './LanguageSelector.vue';

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
    <!-- Main Navigation -->
    <nav 
      :class="[
        'w-full transition-all duration-300 z-50',
        isSticky ? 'fixed top-0 left-0 bg-white/60 backdrop-blur-md shadow-lg py-3' : 'relative bg-white/50 backdrop-blur-md py-5'
      ]"
    >
      <div class="w-full flex items-center justify-between px-5 md:px-10">
        <!-- Logo (Left) -->
        <a href="/" class="flex-shrink-0">
          <img 
            src="https://adocaoespiritual.org.br/assets/logo-0061352b.png" 
            alt="Adoção Espiritual" 
            class="h-12 lg:h-14 w-auto"
          />
        </a>

        <!-- Right Side Group (Social + Language) -->
        <div class="flex items-center gap-6">
          <!-- Social Icons -->
          <div class="flex items-center gap-4 text-site-dark/60">
            <a href="https://instagram.com/adocaoespiritualrio" target="_blank" class="hover:text-site-terracotta transition-colors text-lg"><i class="fab fa-instagram"></i></a>
            <a href="https://facebook.com/adocaoespiritualrio" target="_blank" class="hover:text-site-terracotta transition-colors text-lg"><i class="fab fa-facebook-f"></i></a>
            <a href="https://youtube.com/@adocaoespiritualrio" target="_blank" class="hover:text-site-terracotta transition-colors text-lg"><i class="fab fa-youtube"></i></a>
            <a href="https://wa.me/552112345678" target="_blank" class="hover:text-site-terracotta transition-colors text-lg"><i class="fab fa-whatsapp"></i></a>
            <a href="mailto:contato@adocaoespiritual.org.br" class="hover:text-site-terracotta transition-colors text-lg"><i class="fas fa-envelope"></i></a>
          </div>
          
          <div class="w-px h-4 bg-black/10"></div> <!-- Subtle Divider -->

          <!-- Language Selector -->
          <div class="flex items-center">
            <LanguageSelector :isWhite="true" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
