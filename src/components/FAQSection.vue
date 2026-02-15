<script setup>
import { computed, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const faqs = computed(() => [
  {
    question: t("faq.q1.question"),
    answer: t("faq.q1.answer"),
    isOpen: false,
  },
  {
    question: t("faq.q2.question"),
    answer: t("faq.q2.answer"),
    isOpen: false,
  },
  {
    question: t("faq.q3.question"),
    answer: t("faq.q3.answer"),
    isOpen: false,
  },
  {
    question: t("faq.q4.question"),
    answer: t("faq.q4.answer"),
    isOpen: false,
  },
]);

// Since we are using computed, we need a local state for isOpen
const openIndices = ref(new Set());

const toggleFaq = (index) => {
  if (openIndices.value.has(index)) {
    openIndices.value.delete(index);
  } else {
    openIndices.value.add(index);
  }
};

const isFaqOpen = (index) => openIndices.value.has(index);

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
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
    <div class="container max-w-4xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="reveal reveal-delay-1 text-site-terracotta text-4xl md:text-5xl mb-6">
          {{ $t("faq.title") }}
        </h2>
        <p class="reveal reveal-delay-2 text-site-dark/70 text-lg max-w-2xl mx-auto">
          {{ $t("faq.description") }}
        </p>
      </div>

      <div class="space-y-4 mb-6">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="reveal reveal-delay-3 bg-white rounded-sm overflow-hidden shadow-sm border border-black/5"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/[0.02] transition-colors group"
          >
            <span
              class="font-bold text-lg text-site-dark group-hover:text-site-terracotta transition-colors"
              >{{ faq.question }}</span
            >
            <div
              class="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300"
              :class="{
                'bg-site-terracotta border-site-terracotta text-white rotate-180':
                  isFaqOpen(index),
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </button>

          <div
            v-if="isFaqOpen(index)"
            class="px-8 pb-8 text-site-dark/70 text-lg leading-relaxed pt-6 mx-8 mb-2"
          >
            {{ faq.answer }}
          </div>
        </div>
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
          fill="#BC6F65"
        ></path>
      </svg>
    </div>
  </section>
</template>
