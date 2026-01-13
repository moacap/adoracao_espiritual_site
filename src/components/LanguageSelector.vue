<script setup>
import { ref } from 'vue';

const props = defineProps({
  isWhite: {
    type: Boolean,
    default: false
  }
});

const languages = [
  { code: 'PT', name: 'Português', flag: 'https://flagcdn.com/w40/br.png' },
  { code: 'ES', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'EN', name: 'English', flag: 'https://flagcdn.com/w40/us.png' }
];

const currentLang = ref(languages[0]);
const isOpen = ref(false);

const selectLanguage = (lang) => {
  currentLang.value = lang;
  isOpen.value = false;
};

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Close dropdown when clicking outside
const closeDropdown = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="relative inline-block text-left">
    <div>
      <button 
        type="button" 
        @click="toggleDropdown"
        class="flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors focus:outline-none"
        :class="isWhite ? 'hover:bg-black/5' : 'hover:bg-white/10'"
        id="language-menu-button"
        aria-expanded="true" 
        aria-haspopup="true"
      >
        <img :src="currentLang.flag" :alt="currentLang.name" class="w-4 h-auto rounded-[1px] shadow-sm" />
        <span 
          class="text-[11px] font-bold tracking-widest uppercase"
          :class="isWhite ? 'text-site-dark/80' : 'text-white'"
        >
          {{ currentLang.code }}
        </span>
        <svg 
          class="w-3 h-3 opacity-40 transition-transform duration-200" 
          :class="[isWhite ? 'text-site-dark' : 'text-white', isOpen ? 'rotate-180' : '']"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <!-- Dropdown panel -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div 
        v-if="isOpen"
        class="absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-lg backdrop-blur-xl shadow-2xl ring-1 focus:outline-none overflow-hidden border"
        :class="[
          isWhite 
            ? 'bg-white/95 border-black/5 ring-black/5' 
            : 'bg-black/25 border-white/10 ring-white/10'
        ]"
        role="menu" 
        aria-orientation="vertical" 
        aria-labelledby="language-menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang)"
            class="flex items-center w-full px-4 py-3.5 text-sm transition-all duration-300 gap-3 group"
            :class="[
              isWhite 
                ? 'text-site-dark hover:bg-black/5' 
                : 'text-white hover:bg-white/10',
              currentLang.code === lang.code ? (isWhite ? 'bg-black/5' : 'bg-white/10') : ''
            ]"
            role="menuitem"
            tabindex="-1"
          >
            <div class="relative">
              <img :src="lang.flag" :alt="lang.name" class="w-5 h-auto rounded-sm shadow-sm grayscale-[0.2] group-hover:grayscale-0 transition-all border border-black/5" />
              <div v-if="currentLang.code === lang.code" class="absolute -top-1 -right-1 w-2 h-2 bg-site-terracotta rounded-full border border-white"></div>
            </div>
            <span 
              class="flex-1 text-left tracking-wide" 
              :class="[
                currentLang.code === lang.code 
                  ? (isWhite ? 'font-bold text-site-terracotta' : 'font-bold text-white') 
                  : (isWhite ? 'font-medium opacity-80 group-hover:opacity-100' : 'font-medium opacity-70 group-hover:opacity-100')
              ]"
            >{{ lang.name }}</span>
            <svg 
              v-if="currentLang.code === lang.code" 
              class="w-4 h-4" 
              :class="isWhite ? 'text-site-terracotta' : 'text-white'"
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
    
    <!-- Overlay to close dropdown -->
    <div v-if="isOpen" @click="closeDropdown" class="fixed inset-0 z-40"></div>
  </div>
</template>
