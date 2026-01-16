<script setup>
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";
import supportHands from "./assets/support_hands_banner_1768606133450.png";

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <HeaderStart always-opaque />

    <main class="pt-[120px] pb-20 container mx-auto px-4 lg:px-20">
      <div class="max-w-4xl mx-auto">
        <!-- Title -->
        <h1
          class="text-4xl md:text-5xl font-serif text-site-terracotta mb-12 text-center"
        >
          Colabore com nosso projeto
        </h1>

        <!-- Image Banner with Overlay Text -->
        <div class="relative rounded-sm overflow-hidden shadow-2xl mb-12 aspect-[16/9]">
          <img
            :src="supportHands"
            alt="Colabore com nosso projeto"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/30 flex items-center justify-center p-6 text-center">
            <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-serif italic">
              Sua contribuição faz a diferença!
            </h2>
          </div>
        </div>

        <!-- Description -->
        <div class="prose prose-lg text-site-dark/80 max-w-none text-justify mb-16">
          <p>
            Você pode ajudar nosso projeto fazendo uma doação via chave PIX ou
            por transferência bancária. Sua contribuição nos auxilia a cobrir os
            custos dos materiais de divulgação como carteirinhas, panfletos,
            banners, entre outros, além de despesas operacionais e a manutenção
            de nossas mídias.
          </p>
        </div>

        <!-- Donation Info Boxes -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <!-- PIX Section -->
          <div class="bg-site-beige p-8 rounded-sm border border-black/5 hover:shadow-lg transition-all">
            <h3 class="text-xl font-bold text-site-terracotta uppercase tracking-wider mb-4 border-b border-site-terracotta/20 pb-2">
              PIX
            </h3>
            <div class="flex flex-col gap-2">
              <span class="text-site-dark/60 text-sm uppercase font-bold tracking-widest">Chave PIX (E-mail):</span>
              <p class="text-site-dark text-lg font-bold break-all">adocaoespiritualrio@gmail.com</p>
            </div>
          </div>

          <!-- Bank Account Section -->
          <div class="bg-site-beige p-8 rounded-sm border border-black/5 hover:shadow-lg transition-all">
            <h3 class="text-xl font-bold text-site-terracotta uppercase tracking-wider mb-4 border-b border-site-terracotta/20 pb-2">
              Dados Bancários
            </h3>
            <div class="space-y-4">
              <div>
                <span class="text-site-dark/60 text-xs uppercase font-bold tracking-widest block mb-1">Banco:</span>
                <p class="text-site-dark text-lg font-bold">Banco Bradesco</p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="text-site-dark/60 text-xs uppercase font-bold tracking-widest block mb-1">Agência:</span>
                  <p class="text-site-dark text-lg font-bold">0814</p>
                </div>
                <div>
                  <span class="text-site-dark/60 text-xs uppercase font-bold tracking-widest block mb-1">Conta Corrente:</span>
                  <p class="text-site-dark text-lg font-bold">77307-7</p>
                </div>
              </div>
              <div>
                <span class="text-site-dark/60 text-xs uppercase font-bold tracking-widest block mb-1">CNPJ:</span>
                <p class="text-site-dark text-lg font-bold">33.593.575/0001-14</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="flex justify-center">
          <button
            @click="goBack"
            class="group relative inline-flex items-center h-12 pl-14 pr-6"
          >
            <div
              class="absolute left-0 top-0 h-full w-12 border border-site-terracotta rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full bg-white/0"
            >
              <div
                class="absolute left-0 top-0 w-12 h-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-site-terracotta"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <span
              class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-site-terracotta whitespace-nowrap"
            >
              {{ $t("general.back") }}
            </span>
          </button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: -0.02em;
}

.prose p {
  line-height: 1.8;
}
</style>
