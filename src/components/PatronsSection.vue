<script setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import padroeiraGuadalupe from "../assets/padroeira_guadalupe.jpg";
import familiaUlma from "../assets/familia_ulma.png";

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
    link: "#",
  },
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % patrons.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + patrons.value.length) % patrons.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

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
  <section class="pt-5 pb-40 bg-white relative overflow-hidden">
    <div class="container relative z-10">
      <div class="text-center mb-16 reveal">
        <span
          class="text-site-terracotta text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
        >
          {{ $t("patrons.badge") }}
        </span>
        <h2 class="text-site-dark text-4xl md:text-5xl mb-6">
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
          <div class="relative h-[580px] md:h-[500px]">
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
              <a :href="patron.link" class="block h-full group cursor-pointer">
                <div
                  class="grid md:grid-cols-2 gap-4 md:gap-8 h-full bg-site-beige p-6 md:p-8 rounded-sm border border-black/5 hover:shadow-xl transition-all"
                >
                  <div class="flex items-center justify-center md:ps-16">
                    <img
                      :src="patron.image"
                      :alt="patron.name"
                      class="w-full h-auto object-contain max-h-[220px] md:max-h-[400px] rounded-sm shadow-2xl"
                    />
                  </div>
                  <div
                    class="flex flex-col justify-center text-center md:text-left mt-4 md:mt-0"
                  >
                    <h3
                      class="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-site-dark"
                    >
                      {{ patron.name }}
                    </h3>
                    <p
                      class="text-site-dark/70 text-sm md:text-lg leading-relaxed mb-6"
                    >
                      {{ patron.description }}
                    </p>
                    <div
                      class="flex items-center justify-center md:justify-start"
                    >
                      <div
                        class="group relative inline-flex items-center h-12 pr-14 pl-6"
                      >
                        <span
                          class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-site-terracotta whitespace-nowrap"
                        >
                          {{ $t("patrons.button") }}
                        </span>
                        <div
                          class="absolute right-0 top-0 h-full w-12 border border-site-terracotta rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full bg-white/0"
                        >
                          <div
                            class="absolute right-0 top-0 w-12 h-full flex items-center justify-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5 text-site-terracotta"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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

        <!-- Dots -->
        <div class="flex justify-center gap-3 mt-8">
          <button
            v-for="(patron, index) in patrons"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all"
            :class="
              currentSlide === index
                ? 'bg-site-terracotta w-8'
                : 'bg-site-terracotta/20 hover:bg-site-terracotta/40'
            "
          ></button>
        </div>
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
          fill="#F1EDEA"
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
