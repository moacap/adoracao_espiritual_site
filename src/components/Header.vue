<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isSticky = ref(false);

const navLinks = [
  { name: 'Histórias', href: '#' },
  { name: 'Em Defesa da Vida', href: '#', hasDropdown: true },
  { name: 'Os Papas', href: '#' },
  { name: 'Carteirinha', href: '#' },
  { name: 'Adoção Espiritual', href: '#' },
  { name: 'Doações', href: '#' },
];

const handleScroll = () => {
  isSticky.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="w-full">


    <!-- Main Navigation -->
    <nav 
      :class="[
        'w-full transition-all duration-300 z-50',
        isSticky ? 'fixed top-0 left-0 bg-white/60 backdrop-blur-md shadow-lg py-3' : 'relative bg-white/50 backdrop-blur-md py-5'
      ]"
    >
      <div class="container flex items-center justify-center gap-8">
        <!-- Logo -->
        <a href="/" class="flex-shrink-0">
          <img 
            src="https://adocaoespiritual.org.br/assets/logo-0061352b.png" 
            alt="Adoção Espiritual" 
            class="h-12 lg:h-14 w-auto"
          />
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center justify-center space-x-8">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" class="text-[15px] font-bold uppercase tracking-wider text-site-dark hover:text-site-terracotta transition-colors flex items-center whitespace-nowrap">{{ link.name }}<svg v-if="link.hasDropdown" class="ms-1.5 w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" /></svg></a>
          <a href="#" class="bg-site-terracotta text-white px-7 py-3 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-site-dark transition-all transform hover:-translate-y-0.5 whitespace-nowrap">Apoie</a>
        </div>

        <!-- Mobile Toggle -->
        <button class="lg:hidden text-site-dark">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
    </nav>
  </header>
</template>
