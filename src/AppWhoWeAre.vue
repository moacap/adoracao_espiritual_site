<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";

const { t } = useI18n();

const footerRef = ref(null);
const buttonBottom = ref('2rem'); // 32px standard spacing

const handleScroll = () => {
  if (!footerRef.value) return;
  const footerRect = footerRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerRect.top < windowHeight) {
    const overlap = windowHeight - footerRect.top;
    buttonBottom.value = `${32 + overlap}px`;
  } else {
    buttonBottom.value = '2rem';
  }
};

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  handleScroll(); 
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleScroll);
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <HeaderStart always-opaque />

    <main class="pt-[160px] pb-20 container mx-auto px-4 lg:px-20">
      <div class="max-w-4xl mx-auto">
        <h1
          class="text-4xl md:text-5xl font-serif text-site-terracotta mb-12 text-center"
        >
          {{ $t("who_we_are.title") }}
        </h1>

        <div class="prose prose-lg text-site-dark/80 max-w-none text-justify">
          <p>{{ $t("who_we_are.text") }}</p>
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
/* Custom typography styles matching the project's elegant feel */
h1 {
  letter-spacing: -0.02em;
}

.prose :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.prose :deep(a) {
  color: #b25e5e;
  text-decoration: underline;
  transition: opacity 0.2s;
}

.prose :deep(a:hover) {
  opacity: 0.8;
}
</style>
