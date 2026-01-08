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
    <!-- Top Bar -->
    <div class="bg-site-beige py-2.5 border-b border-black/5 hidden md:block">
      <div class="container flex justify-between items-center text-[13px] font-medium text-site-dark/70">
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-site-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span>Rio de Janeiro, Brasil</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-site-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span>+55 (21) 1234-5678</span>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:text-site-terracotta transition-colors">PT</a>
          <a href="#" class="hover:text-site-terracotta transition-colors">EN</a>
          <div class="h-3 w-px bg-black/10 mx-2"></div>
          <div class="flex items-center space-x-3">
            <!-- Social Icons -->
            <a href="#" class="hover:text-site-terracotta"><i class="fab fa-facebook-f text-xs"></i></a>
            <a href="#" class="hover:text-site-terracotta"><i class="fab fa-instagram text-xs"></i></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav 
      :class="[
        'w-full transition-all duration-300 z-50',
        isSticky ? 'fixed top-0 left-0 bg-white shadow-lg py-3' : 'relative bg-white py-5'
      ]"
    >
      <div class="container flex justify-between items-center">
        <!-- Logo -->
        <a href="/" class="flex-shrink-0">
          <img 
            src="https://adocaoespiritual.org.br/assets/logo-0061352b.png" 
            alt="Adoção Espiritual" 
            class="h-12 lg:h-14 w-auto"
          />
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-[15px] font-bold uppercase tracking-wider text-site-dark hover:text-site-terracotta transition-colors flex items-center"
          >
            {{ link.name }}
            <svg v-if="link.hasDropdown" class="ms-1.5 w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" /></svg>
          </a>
          <a 
            href="#" 
            class="bg-site-terracotta text-white px-7 py-3 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-site-dark transition-all transform hover:-translate-y-0.5"
          >
            Apoie
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button class="lg:hidden text-site-dark">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
    </nav>
  </header>
</template>
