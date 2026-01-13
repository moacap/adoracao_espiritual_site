<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import maosBebe from '../assets/maos_bebe.png';

const currentSlide = ref(0);
let slideInterval = null;

const slides = [
  {
    tag: 'Seja um Anjo da Guarda',
    title: 'Adote espiritualmente uma criança.',
    text: 'Proteja uma vida em perigo de ser interrompida pelo aborto através da oração diária durante nove meses.',
    image: 'https://cms.adocaoespiritualrio.org.br/uploads/banner_principal_0a4797804c.webp',
  },
  {
    tag: 'Movimento em Defesa da Vida',
    title: 'Oração que salva vidas.',
    text: 'Milhares de crianças já foram salvas por intermédio de pessoas que se comprometeram com a oração diária.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2000&auto=format&fit=crop',
  },
  {
    tag: 'Fé e Compromisso',
    title: 'Um ato de amor ao próximo.',
    text: 'Adoção espiritual não requer recursos financeiros, apenas o seu tempo e o seu coração voltados para Deus.',
    image: maosBebe,
  }
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
  <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-site-dark">
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
    <div class="container relative z-10 text-center text-white px-4">
      <Transition name="fade-up" mode="out-in">
        <div :key="currentSlide" class="will-change-transform">
          <span class="text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-6 block drop-shadow-md text-white/90">
            {{ slides[currentSlide].tag }}
          </span>
          <h1 class="text-5xl md:text-8xl font-serif leading-tight mb-8 max-w-5xl mx-auto drop-shadow-2xl">
            {{ slides[currentSlide].title }}
          </h1>
          <p class="text-lg md:text-xl font-medium mb-0 max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
            {{ slides[currentSlide].text }}
          </p>
        </div>
      </Transition>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
      <button 
        v-for="(_, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        class="group relative p-2 outline-none"
      >
        <div 
          class="w-2.5 h-2.5 rounded-full transition-all duration-500"
          :class="[currentSlide === index ? 'bg-white scale-125' : 'bg-white/30 group-hover:bg-white/60']"
        ></div>
        <div 
          v-if="currentSlide === index"
          class="absolute inset-0 border border-white rounded-full animate-ping opacity-20"
        ></div>
      </button>
    </div>
  </section>
</template>

<style scoped>
.fade-bg-enter-active,
.fade-bg-leave-active {
  transition: opacity 1.5s ease;
}
.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
