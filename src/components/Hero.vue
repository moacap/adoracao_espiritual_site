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
    tag: t('hero.slide1.tag'),
    title: t('hero.slide1.title'),
    text: t('hero.slide1.text'),
    image:
      "https://cms.adocaoespiritualrio.org.br/uploads/banner_principal_0a4797804c.webp",
  },
  {
    tag: t('hero.slide2.tag'),
    title: t('hero.slide2.title'),
    text: t('hero.slide2.text'),
    image: bebeCrucifixo,
  },
  {
    tag: t('hero.slide3.tag'),
    title: t('hero.slide3.title'),
    text: t('hero.slide3.text'),
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
    class="relative w-full aspect-[16/31] sm:aspect-[21/14] lg:aspect-[25/10] flex items-center justify-center overflow-hidden bg-site-dark"
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
      class="container relative z-10 text-center text-white px-4 pt-32 md:pt-40 lg:pt-24"
    >
      <Transition name="fade-up" mode="out-in">
        <div :key="currentSlide" class="will-change-transform">
          <span
            class="hero-tag text-xs md:text-lg font-bold uppercase tracking-[0.4em] mb-4 md:mb-6 block drop-shadow-md text-white/90"
          >
            {{ slides[currentSlide].tag }}
          </span>
          <h1
            class="hero-title text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-serif leading-tight mb-4 md:mb-8 max-w-5xl mx-auto drop-shadow-2xl"
          >
            {{ slides[currentSlide].title }}
          </h1>
          <p
            class="hero-text text-base md:text-2xl lg:text-4xl font-medium mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md"
          >
            {{ slides[currentSlide].text }}
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
          fill="#F1EDEA"
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
        >{{ $t('hero.scroll') }}</span
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

/* Fluid typography that follows screen reduction */
.hero-title {
  font-size: clamp(2rem, 10vh, 8rem);
  line-height: 1.1;
  margin-bottom: clamp(1rem, 3vh, 2rem);
}

.hero-text {
  font-size: clamp(1rem, 3vh, 2.25rem);
  line-height: 1.4;
  margin-bottom: clamp(1.5rem, 4vh, 3rem);
}

/* Hide hero tag earlier on short viewports */
@media (max-width: 768px), (max-height: 750px) {
  .hero-tag {
    display: none !important;
  }
}

/* Extra reduction for very short viewports */
@media (max-height: 600px) {
  .hero-title {
    font-size: clamp(1.5rem, 12vh, 4rem) !important;
  }
  .hero-text {
    display: none; /* Hide subtext on very short screens to save space */
  }
}
</style>
