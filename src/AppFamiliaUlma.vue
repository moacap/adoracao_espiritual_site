<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";
import familiaUlma from "./assets/familia_ulma_cropped.png";

const { t } = useI18n();

const footerRef = ref(null);
const buttonBottom = ref('2rem'); // 32px standard spacing

const handleScroll = () => {
  if (!footerRef.value) return;
  const footerRect = footerRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerRect.top < windowHeight) {
    // Footer is entering the viewport
    const overlap = windowHeight - footerRect.top;
    // Push the button up by the overlap amount + original spacing
    buttonBottom.value = `${32 + overlap}px`;
  } else {
    buttonBottom.value = '2rem';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleScroll);
});

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <header-start always-opaque />

    <main class="pt-[160px] pb-20 container mx-auto px-4 lg:px-20">
      <div class="max-w-4xl mx-auto">
        <h1
          class="text-4xl md:text-5xl font-serif text-site-terracotta mb-6 text-center"
        >
          {{ $t("patrons_content.ulma.title") }}
        </h1>
        <p class="text-xl md:text-2xl font-serif text-site-dark/60 mb-12 text-center italic">
          {{ $t("patrons_content.ulma.subtitle") }}
        </p>

        <div class="mb-0 flex justify-center">
          <img 
            :src="familiaUlma" 
            :alt="$t('patrons_content.ulma.title')"
            class="max-w-full h-auto md:max-h-[500px] mix-blend-multiply"
          />
        </div>

        <div class="prose prose-lg text-site-dark/80 max-w-none text-justify">
          <p>{{ $t("patrons_content.ulma.p1") }}</p>
          <p>{{ $t("patrons_content.ulma.p2") }}</p>
          <p>{{ $t("patrons_content.ulma.p3") }}</p>
          <p>{{ $t("patrons_content.ulma.p4") }}</p>
          <p>{{ $t("patrons_content.ulma.p5") }}</p>
          <p>{{ $t("patrons_content.ulma.p6") }}</p>
          <p>{{ $t("patrons_content.ulma.p7") }}</p>
          <p>{{ $t("patrons_content.ulma.p8") }}</p>

          <h2 class="text-3xl font-serif text-site-dark mt-16 mb-8">
            {{ $t("patrons_content.ulma.beatification_title") }}
          </h2>
          <p>{{ $t("patrons_content.ulma.beatification_p1") }}</p>
          <p>{{ $t("patrons_content.ulma.beatification_p2") }}</p>
          <p>{{ $t("patrons_content.ulma.beatification_p3") }}</p>
          
          <blockquote class="border-l-4 border-site-terracotta pl-6 py-2 my-10 italic text-site-dark/90 bg-site-beige/30 rounded-r-sm">
            {{ $t("patrons_content.ulma.quote") }}
          </blockquote>

          <p>{{ $t("patrons_content.ulma.p9") }}</p>
          <p>{{ $t("patrons_content.ulma.p10") }}</p>
        </div>

        <!-- Back Button -->
        <div 
          class="fixed right-6 md:right-12 z-50 will-change-auto"
          :style="{ bottom: buttonBottom }"
        >
          <button
            @click="goBack"
            class="group relative inline-flex items-center h-12 pl-14 pr-6 bg-white/90 backdrop-blur rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div
              class="absolute left-0 top-0 h-full w-12 border border-site-terracotta rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full bg-white/0"
            >
              <div
                class="absolute left-0 top-0 w-12 h-full flex items-center justify-center"
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <span
              class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-site-terracotta whitespace-nowrap"
            >
              {{ $t("general.back") }}
            </span>
          </button>
        </div>
      </div>
    </main>

    <div ref="footerRef">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: -0.01em;
}

:deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

blockquote {
  line-height: 1.8;
}
</style>
