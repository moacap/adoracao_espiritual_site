<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import maosBebe from "../assets/maos_bebe.png";

const currentSlide = ref(0);
let slideInterval = null;

const slides = [
  {
    tag: "Seja um Anjo da Guarda",
    title: "Adote espiritualmente uma criança.",
    text: "Proteja uma vida em perigo de ser interrompida pelo aborto através da oração diária durante nove meses.",
    image:
      "https://cms.adocaoespiritualrio.org.br/uploads/banner_principal_0a4797804c.webp",
    ctaPrimary: "Faça sua Adoção",
    ctaSecondary: "Saiba Mais",
  },
  {
    tag: "Movimento em Defesa da Vida",
    title: "Oração que salva vidas.",
    text: "Milhares de crianças já foram salvas por intermédio de pessoas que se comprometeram com a oração diária.",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2000&auto=format&fit=crop",
    ctaPrimary: "Quero Ajudar",
    ctaSecondary: "Nossa História",
  },
  {
    tag: "Fé e Compromisso",
    title: "Um ato de amor ao próximo.",
    text: "Adoção espiritual não requer recursos financeiros, apenas o seu tempo e o seu coração voltados para Deus.",
    image: maosBebe,
    ctaPrimary: "Comece Agora",
    ctaSecondary: "Perguntas",
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
  resetInterval();
};

const startInterval = () => {
  slideInterval = setInterval(nextSlide, 7000);
};

const resetInterval = () => {
  if (slideInterval) clearInterval(slideInterval);
  startInterval();
};

onMounted(() => {
  startInterval();
});

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval);
});
</script>

<template>
  <section
    class="relative w-full aspect-[16/38] sm:aspect-[21/38] lg:aspect-[25/38] flex items-center justify-center overflow-hidden bg-site-dark"
  >
    <!-- Carousel Backgrounds -->
    <div class="absolute inset-0 z-0">
      <TransitionGroup name="fade-bg">
        <div
          v-for="(slide, index) in slides"
          v-show="currentSlide === index"
          :key="index"
          class="absolute inset-0"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover transform scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/45"></div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Carousel Content -->
    <div
      class="container relative z-10 text-center text-white px-4 pt-24 md:pt-0"
    >
      <Transition name="fade-up" mode="out-in">
        <div :key="currentSlide" class="will-change-transform">
          <span
            class="text-md md:text-lg font-bold uppercase tracking-[0.4em] mb-6 block drop-shadow-md text-white/90"
          >
            {{ slides[currentSlide].tag }}
          </span>
          <h1
            class="text-7xl md:text-9xl font-serif leading-tight mb-8 max-w-5xl mx-auto drop-shadow-2xl"
          >
            {{ slides[currentSlide].title }}
          </h1>
          <p
            class="text-2xl md:text-4xl font-medium mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md"
          >
            {{ slides[currentSlide].text }}
          </p>

          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              class="bg-site-terracotta text-white px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-site-dark transition-all duration-300 shadow-2xl min-w-[200px]"
            >
              {{ slides[currentSlide].ctaPrimary }}
            </a>
            <a
              href="#"
              class="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-site-dark transition-all duration-300 min-w-[200px]"
            >
              {{ slides[currentSlide].ctaSecondary }}
            </a>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Shape Divider (Soul Space Style - Concave Curve) -->
    <div
      class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="relative block w-full h-[40px] md:h-[100px] lg:h-[150px]"
      >
        <path
          d="M0,0 C480,120 720,120 1200,0 L1200,120 L0,120 Z"
          fill="#FFFFFF"
        ></path>
      </svg>
    </div>

    <!-- Navigation Dots -->
    <div
      class="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-4"
    >
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="group relative p-2 outline-none"
      >
        <div
          class="w-2.5 h-2.5 rounded-full transition-all duration-500"
          :class="[
            currentSlide === index
              ? 'bg-white scale-125'
              : 'bg-white/30 group-hover:bg-white/60',
          ]"
        ></div>
        <div
          v-if="currentSlide === index"
          class="absolute inset-0 border border-white rounded-full animate-ping opacity-20"
        ></div>
      </button>
    </div>

    <!-- Scroll Down Indicator -->
    <div
      class="absolute bottom-16 right-12 z-20 hidden md:flex flex-col items-center space-y-4 opacity-50"
    >
      <span
        class="text-[10px] font-bold uppercase tracking-[0.3em] rotate-90 origin-right translate-y-12"
        >Role para ver mais</span
      >
      <div class="w-px h-16 bg-white/30 relative overflow-hidden">
        <div
          class="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-bg-enter-active,
.fade-bg-leave-active {
  transition: opacity 2s ease;
}
.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes scroll-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(200%);
  }
}

.animate-scroll-down {
  animation: scroll-down 2s infinite ease-in-out;
}
</style>
