<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import maosBebe from "../assets/maos_bebe.png";
import bebeCrucifixo from "../assets/bebe-crucifixo.png";

const { t } = useI18n();

const currentSlide = ref(0);
let slideInterval = null;

const slides = computed(() => [
  {
    tag: t("hero.slide1.tag"),
    title: t("hero.slide1.title"),
    text: t("hero.slide1.text"),
    image:
      "https://cms.adocaoespiritualrio.org.br/uploads/banner_principal_0a4797804c.webp",
  },
  {
    tag: t("hero.slide2.tag"),
    title: t("hero.slide2.title"),
    text: t("hero.slide2.text"),
    image: bebeCrucifixo,
  },
  {
    tag: t("hero.slide3.tag"),
    title: t("hero.slide3.title"),
    text: t("hero.slide3.text"),
    image: maosBebe,
  },
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
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
    class="relative w-full aspect-[3/4] sm:aspect-[21/14] lg:aspect-[25/14] flex items-center justify-center overflow-hidden bg-site-dark"
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
          <div class="absolute inset-0 bg-black/40"></div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Carousel Content -->
    <div
      class="container relative z-10 text-center text-white px-4 pt-36 lg:pt-32"
    >
      <Transition name="fade-up" mode="out-in">
        <div :key="currentSlide" class="will-change-transform">
          <span
            class="hero-tag text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] mb-2 md:mb-6 block drop-shadow-md text-white/90"
          >
            {{ slides[currentSlide].tag }}
          </span>
          <h1
            class="hero-title text-2xl md:text-5xl lg:text-7xl font-serif leading-tight mb-2 md:mb-8 max-w-5xl mx-auto drop-shadow-2xl italic font-light"
          >
            {{ slides[currentSlide].title }}
          </h1>
          <p
            class="hero-text text-sm sm:text-lg md:text-xl lg:text-2xl font-light mb-0 max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md italic"
          >
            "{{ slides[currentSlide].text }}"
          </p>
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
      class="absolute bottom-10 md:bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 z-30 flex space-x-2 md:space-x-4"
    >
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="group relative p-1 md:p-2 outline-none"
      >
        <div
          class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500"
          :class="[
            currentSlide === index
              ? 'bg-white scale-125'
              : 'bg-white/30 group-hover:bg-white/60',
          ]"
        ></div>
      </button>
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

h1 {
  letter-spacing: -0.02em;
}

/* Fluid typography that follows screen reduction */
.hero-title {
  font-size: clamp(1.5rem, 5vh, 6rem);
  line-height: 1.1;
  margin-bottom: clamp(0.5rem, 2vh, 2rem);
  letter-spacing: -0.02em;
}

.hero-text {
  font-size: clamp(0.75rem, 2.5vh, 1.5rem);
  line-height: 1.4;
}

/* Ensure visibility on small screens */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.75rem !important;
  }
  .hero-text {
    font-size: 0.875rem !important;
  }
}
</style>
