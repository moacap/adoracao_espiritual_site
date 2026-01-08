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
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-3xl font-bold text-site-blue mb-12 text-center">Perguntas Frequentes</h2>
      
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <button 
            @click="toggleFaq(index)"
            class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span class="font-semibold text-gray-800">{{ faq.question }}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="2" 
              stroke="currentColor" 
              class="w-5 h-5 transition-transform duration-300"
              :class="{'rotate-180': faq.isOpen}"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          
          <div 
            v-show="faq.isOpen" 
            class="px-6 pb-4 text-gray-600 animate-fadeIn"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
