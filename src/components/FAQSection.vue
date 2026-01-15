<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const faqs = computed(() => [
  {
    question: t('faq.q1.question'),
    answer: t('faq.q1.answer'),
    isOpen: false
  },
  {
    question: t('faq.q2.question'),
    answer: t('faq.q2.answer'),
    isOpen: false
  },
  {
    question: t('faq.q3.question'),
    answer: t('faq.q3.answer'),
    isOpen: false
  },
  {
    question: t('faq.q4.question'),
    answer: t('faq.q4.answer'),
    isOpen: false
  }
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
</script>

<template>
  <section class="py-40 bg-white relative overflow-hidden">
    <div class="container max-w-4xl mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-site-terracotta text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
          {{ $t('faq.badge') }}
        </span>
        <h2 class="text-site-dark text-4xl md:text-5xl mb-6">{{ $t('faq.title') }}</h2>
        <p class="text-site-dark/70 text-lg max-w-2xl mx-auto">{{ $t('faq.description') }}</p>
      </div>
      
      <div class="space-y-4 mb-12">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-sm overflow-hidden shadow-sm border border-black/5">
          <button 
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/[0.02] transition-colors group"
          >
            <span class="font-bold text-lg text-site-dark group-hover:text-site-terracotta transition-colors">{{ faq.question }}</span>
            <div 
              class="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300"
              :class="{'bg-site-terracotta border-site-terracotta text-white rotate-180': isFaqOpen(index)}"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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

      <!-- Button -->
      <div class="text-center mt-12">
        <a 
          href="#" 
          class="group relative inline-flex items-center h-12 pr-14 pl-6"
        >
          <span class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-site-terracotta whitespace-nowrap">
            {{ $t('faq.button') }}
          </span>
          <div class="absolute right-0 top-0 h-full w-12 border border-site-terracotta rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full bg-white/0">
            <div class="absolute right-0 top-0 w-12 h-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-site-terracotta">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Single Wavy Divider beige -->
    <div class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[40px] md:h-[80px] lg:h-[110px]">
        <path d="M0,110 C200,110 400,0 600,0 C800,0 1000,120 1200,60 V120 H0 Z" fill="#F1EDEA"></path>
      </svg>
    </div>
  </section>
</template>
