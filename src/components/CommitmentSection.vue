<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <section class="py-40 bg-site-terracotta text-white relative overflow-hidden">
    <!-- Subtle Pattern Overlay -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <svg class="h-full w-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" stroke-width="0.1"/>
      </svg>
    </div>

    <div class="container relative z-10 max-w-6xl">
      <div class="text-center mb-16 reveal">
        <span class="text-white/70 text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
          {{ $t('commitment.badge') }}
        </span>
        <h2 class="text-white text-4xl md:text-5xl mb-6">{{ $t('commitment.title') }}</h2>
        <div class="w-20 h-1 bg-white/30 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <!-- Step 1 -->
        <div class="reveal reveal-delay-1 bg-white/10 backdrop-blur-sm p-10 rounded-sm border border-white/10 hover:bg-white/20 transition-all duration-500">
          <div class="text-4xl font-serif mb-6 opacity-30 italic">01.</div>
          <h3 class="text-xl font-bold uppercase tracking-wider mb-4">{{ $t('commitment.step1.title') }}</h3>
          <p class="text-white/80 leading-relaxed font-medium">
            {{ $t('commitment.step1.text') }}
          </p>
        </div>

        <!-- Step 2 -->
        <div class="reveal reveal-delay-2 bg-white/10 backdrop-blur-sm p-10 rounded-sm border border-white/10 hover:bg-white/20 transition-all duration-500 md:scale-110 shadow-2xl z-10">
          <div class="text-4xl font-serif mb-6 opacity-30 italic">02.</div>
          <h3 class="text-xl font-bold uppercase tracking-wider mb-4">{{ $t('commitment.step2.title') }}</h3>
          <p class="text-white/85 leading-relaxed italic text-sm mb-6">
            {{ $t('commitment.step2.text') }}
          </p>
          <a href="#" class="text-xs font-bold uppercase tracking-widest pb-1 border-b border-white/20 hover:text-site-dark transition-colors">{{ $t('commitment.step2.link') }}</a>
        </div>

        <!-- Step 3 -->
        <div class="reveal reveal-delay-3 bg-white/10 backdrop-blur-sm p-10 rounded-sm border border-white/10 hover:bg-white/20 transition-all duration-500">
          <div class="text-4xl font-serif mb-6 opacity-30 italic">03.</div>
          <h3 class="text-xl font-bold uppercase tracking-wider mb-4">{{ $t('commitment.step3.title') }}</h3>
          <p class="text-white/80 leading-relaxed font-medium">
            {{ $t('commitment.step3.text') }}
          </p>
        </div>
      </div>

      <div class="mt-20 text-center reveal reveal-delay-3">
        <a 
          href="#" 
          class="group relative inline-flex items-center h-12 pr-14 pl-6"
        >
          <span class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white whitespace-nowrap">
            {{ $t('commitment.button') }}
          </span>
          <div class="absolute right-0 top-0 h-full w-12 border border-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full bg-white/0">
            <div class="absolute right-0 top-0 w-12 h-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Single Wavy Divider white -->
    <div class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[40px] md:h-[80px] lg:h-[110px]">
        <path d="M0,110 C200,110 400,0 600,0 C800,0 1000,120 1200,60 V120 H0 Z" fill="#FFFFFF"></path>
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

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
</style>
