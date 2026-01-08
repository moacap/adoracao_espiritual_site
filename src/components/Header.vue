<script setup>
import { ref } from 'vue';

const navLinks = [
  { name: 'Histórias de Vida', href: '#' },
  { name: 'Em Defesa da Vida', href: '#', hasDropdown: true },
  { name: 'Os Papas sobre o Aborto', href: '#' },
  { name: 'Carteirinha da Adoção', href: '#' },
  { name: 'Faça sua Adoção Espiritual', href: '#' },
  { name: 'Doações', href: '#' },
];
</script>

<template>
  <header class="w-full font-sans">
    <!-- Top Row -->
    <div class="bg-white border-b border-gray-100">
      <div class="container mx-auto px-4 max-w-7xl py-3 flex items-center justify-between">
        <!-- Spacer -->
        <div class="hidden lg:block w-32"></div>

        <!-- Central Logo Image -->
        <div class="flex-1 flex justify-center">
          <img 
            src="https://adocaoespiritual.org.br/assets/logo-0061352b.png" 
            alt="Adoção Espiritual Logo" 
            class="h-16 lg:h-20 w-auto object-contain"
          />
        </div>

        <!-- Language Selector -->
        <div class="flex items-center space-x-2">
          <select class="text-xs font-semibold border border-gray-200 rounded px-2 py-1 bg-white cursor-pointer hover:border-gray-400 outline-none">
            <option>Português</option>
            <option>English</option>
            <option>Polski</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Bottom Ribbon -->
    <div class="bg-[#f0443c]">
      <div class="container mx-auto px-4 max-w-7xl">
        <nav class="hidden lg:flex items-center justify-center space-x-1">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href" 
            class="px-5 py-3.5 text-[16px] font-semibold text-white hover:bg-black/5 transition-colors flex items-center leading-[24px]"
          >
            {{ link.name }}
            <svg v-if="link.hasDropdown" class="ms-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </nav>

        <!-- Mobile -->
        <div class="lg:hidden flex items-center justify-between py-3">
          <span class="text-white font-bold text-sm tracking-widest">MENU</span>
          <button class="text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
