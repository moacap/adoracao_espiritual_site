<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: 'Quem pode participar da Adoção Espiritual?',
    answer: 'Qualquer pessoa: leigos, religiosos, crianças, jovens e adultos. Basta ter o desejo de salvar uma vida através da oração.',
    isOpen: false
  },
  {
    question: 'Posso adotar mais de uma criança por vez?',
    answer: 'A regra recomenda adotar uma criança de cada vez, para que o compromisso seja vivido com fidelidade durante os 9 meses.',
    isOpen: false
  },
  {
    question: 'O que fazer se eu esquecer de rezar um dia?',
    answer: 'Não é pecado, mas o esquecimento prolongado interrompe a Adoção. Se esquecer um dia, continue normalmente no dia seguinte. Se esquecer por muito tempo, deve-se reiniciar o compromisso.',
    isOpen: false
  },
  {
    question: 'Como escolher o nome da criança?',
    answer: 'Você não precisa escolher um nome, pois Deus já a conhece. Mas se desejar, pode dar um nome simbólico para facilitar sua oração.',
    isOpen: false
  }
]);

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<template>
  <section class="py-24 bg-site-beige">
    <div class="container max-w-4xl mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-site-terracotta text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
          Dúvidas Comuns
        </span>
        <h2 class="text-site-dark text-4xl md:text-5xl">Dúvidas Frequentes</h2>
      </div>
      
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-sm overflow-hidden shadow-sm border border-black/5">
          <button 
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/[0.02] transition-colors group"
          >
            <span class="font-bold text-lg text-site-dark group-hover:text-site-terracotta transition-colors">{{ faq.question }}</span>
            <div 
              class="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300"
              :class="{'bg-site-terracotta border-site-terracotta text-white rotate-180': faq.isOpen}"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </button>
          
          <div 
            v-if="faq.isOpen" 
            class="px-8 pb-8 text-site-dark/70 text-lg leading-relaxed border-t border-black/5 pt-6 mx-8 mb-2"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
