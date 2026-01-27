<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LanguageSelector from "./LanguageSelector.vue";
import aePretoLogo from "../assets/ae-preto.png";

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="w-full">
    <!-- Main Navigation -->
    <nav
      :class="[
        'w-full transition-all duration-700 z-50 fixed top-0 left-0',
        isSticky
          ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-8',
      ]"
    >
      <div class="w-full flex items-center justify-between px-3 md:px-10">
        <!-- Logo (Left) -->
        <a href="index.html" class="flex-shrink-0">
          <img
            :src="aePretoLogo"
            alt="Adoção Espiritual"
            :class="[
              'h-9 md:h-12 lg:h-16 w-auto transition-all duration-500',
              !isSticky ? 'brightness-0 invert' : '',
            ]"
          />
        </a>

        <!-- Right Side Group (Social + Language) -->
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Social Icons -->
          <div
            class="flex items-center gap-2 md:gap-[23px] transition-colors duration-300"
            :class="isSticky ? 'text-site-dark/60' : 'text-white/80'"
          >
            <a
              href="https://instagram.com/adocaoespiritualrio"
              target="_blank"
              class="hover:text-site-terracotta transition-colors text-base md:text-lg"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="https://facebook.com/adocaoespiritualrio"
              target="_blank"
              class="hover:text-site-terracotta transition-colors text-base md:text-lg"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a
              href="https://youtube.com/@adocaoespiritualrio"
              target="_blank"
              class="hover:text-site-terracotta transition-colors text-base md:text-lg"
              ><i class="fab fa-youtube"></i
            ></a>
            <a
              href="https://wa.me/552112345678"
              target="_blank"
              class="hover:text-site-terracotta transition-colors text-base md:text-lg"
              ><i class="fab fa-whatsapp"></i
            ></a>
          </div>

          <div
            class="w-px h-5"
            :class="isSticky ? 'bg-black/20' : 'bg-white/30'"
          ></div>
          <!-- Subtle Divider -->

          <!-- Language Selector -->
          <div class="flex items-center">
            <LanguageSelector :isWhite="isSticky" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
