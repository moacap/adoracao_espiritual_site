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
  <section class="py-40 bg-white relative overflow-hidden">
    <div class="container relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 text-center lg:text-left">
        
        <!-- Left Content -->
        <div class="lg:w-1/2 order-2 lg:order-1">
          <div class="mb-6 inline-block reveal">
             <span class="text-site-terracotta text-sm font-bold uppercase tracking-widest pb-1 border-b border-site-terracotta/20">
               {{ $t('about.badge') }}
             </span>
          </div>
          <h2 class="reveal reveal-delay-1 text-site-dark text-4xl md:text-5xl leading-tight mb-8">
            {{ $t('about.title1') }} <br>
            {{ $t('about.title2') }}
            <span class="font-script text-site-terracotta text-7xl lowercase block mt-2">{{ $t('about.title3') }}</span>
          </h2>
          
          <div class="reveal reveal-delay-2 space-y-6 text-site-dark/80 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            <p>
              {{ $t('about.para1') }}
            </p>
            <p>
              {{ $t('about.para2') }}
            </p>
          </div>

          <div class="reveal reveal-delay-3">
            <a 
              href="#" 
              class="group relative inline-flex items-center h-12 pr-14 pl-6"
            >
              <span class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-site-terracotta whitespace-nowrap">
                {{ $t('about.button') }}
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

        <!-- Right Image Collage -->
        <div class="lg:w-1/2 order-1 lg:order-2">
          <div class="grid grid-cols-2 gap-6 relative">
            <div class="space-y-6">
              <div class="reveal reveal-delay-1 rounded-sm overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto1_ee9008fbf4.webp" alt="Baby 1" class="w-full h-auto object-cover aspect-[4/5]" />
              </div>
              <div class="reveal reveal-delay-2 rounded-sm overflow-hidden shadow-2xl transform translate-x-12 hover:scale-105 transition-transform duration-500">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto2_4699f045db.webp" alt="Baby 2" class="w-full h-auto object-cover aspect-square" />
              </div>
            </div>
            <div class="space-y-6 pt-12">
              <div class="reveal reveal-delay-2 rounded-sm overflow-hidden shadow-2xl transform -translate-x-6 hover:scale-105 transition-transform duration-500">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto3_f31817b12c.webp" alt="Baby 3" class="w-full h-auto object-cover aspect-square" />
              </div>
              <div class="reveal reveal-delay-3 rounded-sm overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto4_608a3d20a8.webp" alt="Baby 4" class="w-full h-auto object-cover aspect-[4/5]" />
              </div>
            </div>
            <!-- Decorative Element -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-site-beige -z-10 rounded-sm"></div>
          </div>
        </div>

      </div>
    </div>

    <!-- Single Wavy Divider footer-terracotta -->
    <div class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[40px] md:h-[80px] lg:h-[110px]">
        <path d="M0,110 C200,110 400,0 600,0 C800,0 1000,120 1200,60 V120 H0 Z" fill="#BC6F65"></path>
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
