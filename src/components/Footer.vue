<script setup>
import aePretoLogo from '../assets/ae-preto.png';
</script>

<template>
  <footer class="bg-site-beige pt-24 pb-12">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
        <!-- Brand -->
        <div class="lg:col-span-1 flex flex-col items-center md:items-start">
          <img 
            :src="aePretoLogo" 
            alt="Adoção Espiritual" 
            class="h-16 w-auto mb-8 grayscale opacity-80"
          />
          <p class="text-site-dark/70 text-lg leading-relaxed mb-8">
            {{ $t('footer.brand.desc') }}
          </p>
          <div class="flex space-x-4 justify-center md:justify-start">
            <a href="#" class="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center text-site-dark hover:bg-site-terracotta hover:text-white hover:border-site-terracotta transition-all">
              <i class="fab fa-facebook-f text-sm"></i>
            </a>
            <a href="#" class="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center text-site-dark hover:bg-site-terracotta hover:text-white hover:border-site-terracotta transition-all">
              <i class="fab fa-instagram text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Links 1 -->
        <div>
          <h4 class="text-xl font-bold uppercase tracking-widest mb-8 text-site-dark">{{ $t('footer.links1.title') }}</h4>
          <ul class="space-y-4 text-site-dark/70 text-lg">
            <li><a href="#" class="hover:text-site-terracotta transition-colors">{{ $t('footer.links1.item1') }}</a></li>
            <li><a href="mailto:contato@adocaoespiritual.org.br" class="hover:text-site-terracotta transition-colors">{{ $t('footer.links1.item2') }}</a></li>
            <li><a href="#" class="hover:text-site-terracotta transition-colors">{{ $t('footer.links1.item3') }}</a></li>
            <li><a href="#" class="hover:text-site-terracotta transition-colors">{{ $t('footer.links1.item4') }}</a></li>
            <li><a href="privacy_policy.html" class="hover:text-site-terracotta transition-colors">{{ $t('footer.links1.item5') }}</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-site-dark/50 text-[15px]">
        <p>{{ $t('footer.bottom.rights') }}</p>
        <p>{{ $t('footer.bottom.version') }}</p>
      </div>
    </div>
  </footer>
</template>
