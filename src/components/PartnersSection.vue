<script setup>
import { ref, onMounted } from "vue";

const currentIndex = ref(0);
const itemsToShow = ref(4);

const partners = [
  {
    name: "Vaticano",
    logo: "https://loremflickr.com/600/400/vatican,church?lock=1",
    link: "https://www.vatican.va",
  },
  {
    name: "CNBB",
    logo: "https://loremflickr.com/600/400/catholic,bible?lock=2",
    link: "https://www.cnbb.org.br",
  },
  {
    name: "Arquidiocese",
    logo: "https://loremflickr.com/600/400/brazil,cathedral?lock=3",
    link: "https://arqrio.org",
  },
  {
    name: "Canção Nova",
    logo: "https://loremflickr.com/600/400/catholic,event?lock=4",
    link: "https://www.cancaonova.com",
  },
  {
    name: "ACI Digital",
    logo: "https://loremflickr.com/600/400/pope,news?lock=5",
    link: "https://www.acidigital.com",
  },
  {
    name: "Vatican News",
    logo: "https://loremflickr.com/600/400/saint,statue?lock=6",
    link: "https://www.vaticannews.va",
  },
];

const nextPartners = () => {
  if (currentIndex.value + itemsToShow.value < partners.length) {
    currentIndex.value++;
  }
};

const prevPartners = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
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

  // Responsive items
  const updateItemsToShow = () => {
    if (window.innerWidth < 768) {
      itemsToShow.value = 1;
    } else if (window.innerWidth < 1024) {
      itemsToShow.value = 2;
    } else {
      itemsToShow.value = 4;
    }
  };

  updateItemsToShow();
  window.addEventListener("resize", updateItemsToShow);
});
</script>

<template>
  <section class="pt-5 pb-40 bg-white relative overflow-hidden">
    <div class="container relative z-10">
      <div class="text-center mb-16 reveal">
        <span
          class="text-site-terracotta text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
        >
          {{ $t("partners.badge") }}
        </span>
        <h2 class="text-site-dark text-4xl md:text-5xl mb-6">
          {{ $t("partners.title") }}
        </h2>
        <p class="text-site-dark/70 text-lg max-w-2xl mx-auto">
          {{ $t("partners.description") }}
        </p>
      </div>

      <!-- Carousel -->
      <div
        class="relative max-w-6xl mx-auto reveal reveal-delay-1 px-10 md:px-0"
      >
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out gap-8"
            :style="{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }"
          >
            <div
              v-for="(partner, index) in partners"
              :key="index"
              class="flex-shrink-0"
              :style="{
                width: `calc(${100 / itemsToShow}% - ${((itemsToShow - 1) * 32) / itemsToShow}px)`,
              }"
            >
              <a
                :href="partner.link"
                target="_blank"
                class="block bg-site-beige overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 h-56 flex items-center justify-center group"
              >
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="w-full h-full object-contain p-6 transition-all"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevPartners"
          :disabled="currentIndex === 0"
          class="absolute -left-4 md:-translate-x-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-site-terracotta hover:bg-site-terracotta/80 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all z-10"
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
          @click="nextPartners"
          :disabled="currentIndex + itemsToShow >= partners.length"
          class="absolute -right-4 md:translate-x-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-site-terracotta hover:bg-site-terracotta/80 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all z-10"
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
      class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10"
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
