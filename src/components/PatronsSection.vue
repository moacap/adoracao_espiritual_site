<script setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import padroeiraGuadalupe from "../assets/padroeira_guadalupe.png";
import familiaUlma from "../assets/familia_ulma_cropped.png";

const { t } = useI18n();

const currentSlide = ref(0);

const patrons = computed(() => [
  {
    name: t("patrons.guadalupe.name"),
    image: padroeiraGuadalupe,
    description: t("patrons.guadalupe.description"),
    link: "#",
  },
  {
    name: t("patrons.ulma.name"),
    image: familiaUlma,
    description: t("patrons.ulma.description"),
    link: "familia_ulma.html",
  },
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % patrons.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + patrons.value.length) % patrons.value.length;
};

// Navigation logic is now only via next/prev buttons


onMounted(() => {
  const observerOptions = {
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <section class="pt-5 pb-16 md:pb-24 lg:pb-32 bg-site-beige relative overflow-hidden">
    <div class="container relative z-10">
      <div class="text-center mb-16 reveal">

        <h2 class="text-site-terracotta text-4xl md:text-5xl mb-6">
          {{ $t("patrons.title") }}
        </h2>
        <p class="text-site-dark/70 text-lg max-w-2xl mx-auto">
          {{ $t("patrons.description") }}
        </p>
      </div>

      <!-- Slider -->
      <div
        class="relative max-w-5xl mx-auto reveal reveal-delay-1 px-10 md:px-0"
      >
        <div class="overflow-hidden rounded-sm">
      <div class="relative h-[580px] md:h-[650px]">
             <div
               v-for="(patron, index) in patrons"
               :key="index"
               class="absolute inset-0 transition-all duration-500 ease-in-out"
               :class="
                 currentSlide === index
                   ? 'opacity-100 translate-x-0'
                   : 'opacity-0 translate-x-full'
               "
             >
               <div class="block h-full">
                  <div class="bg-gray-300 rounded-sm p-4 h-full flex flex-col relative">
                   <!-- Título e Subtítulo -->
                   <div class="text-center mb-4 z-10">
                     <h3 class="text-xl font-bold mb-1 text-black">
                       {{ patron.name }}
                     </h3>
                     <p class="text-gray-600 text-sm md:text-base leading-tight">
                       {{ patron.description }}
                     </p>
                   </div>
 
                   <!-- Imagem -->
                   <div class="relative flex-1 flex items-center justify-center -mt-2 pb-4 px-8 md:pb-8 md:px-14">
                     <img
                       :src="patron.image"
                       :alt="patron.name"
                        class="w-full h-[320px] md:h-[420px] object-contain pointer-events-none mix-blend-multiply"
                       draggable="false"
                     />
                   </div>
                    
                  <!-- Botão SAIBA MAIS no canto inferior direito -->
                  <div class="absolute bottom-4 right-6 md:bottom-8 md:right-10 z-20">
                    <a 
                      :href="patron.link" 
                      class="group relative inline-flex items-center h-10 md:h-12 pr-10 md:pr-14 pl-4 md:pl-6 cursor-pointer"
                    >
                      <span class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-site-terracotta whitespace-nowrap z-10">
                        {{ $t("patrons.button") }}
                      </span>
                      <div class="absolute right-0 top-0 h-full w-10 md:w-12 border border-site-terracotta rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full bg-transparent">
                        <div class="absolute right-0 top-0 w-10 md:w-12 h-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 md:w-5 md:h-5 text-site-terracotta">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute -left-4 md:-translate-x-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-site-terracotta/90 hover:bg-site-terracotta text-white rounded-full flex items-center justify-center transition-all z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="absolute -right-4 md:translate-x-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-site-terracotta/90 hover:bg-site-terracotta text-white rounded-full flex items-center justify-center transition-all z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

      </div>
    </div>

    <!-- Single Wavy Divider beige -->
    <div
      class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="relative block w-full h-[40px] md:h-[80px] lg:h-[110px]"
      >
        <path
          d="M0,110 C200,110 400,0 600,0 C800,0 1000,120 1200,60 V120 H0 Z"
          fill="#FFFFFF"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, opacity;
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 {
  transition-delay: 0.1s;
}
</style>
