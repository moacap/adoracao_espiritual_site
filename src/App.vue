<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import AboutSection from './components/AboutSection.vue'
import CommitmentSection from './components/CommitmentSection.vue'
import FAQSection from './components/FAQSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <Hero />
      <AboutSection />
      <CommitmentSection />
      <section class="py-24 bg-white border-t border-gray-50">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="flex items-center justify-between mb-16">
            <h2 class="text-[30px] font-bold text-site-blue leading-[36px] tracking-tight-heading">Destaques</h2>
            <a href="#" class="text-site-red font-bold flex items-center hover:underline">
              Ver todos
              <svg xmlns="http://www.w3.org/2000/svg" class="ms-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <!-- News 1 -->
            <div class="group cursor-pointer flex flex-col h-full">
              <div class="overflow-hidden rounded-[30px] mb-6 h-64 shadow-xl">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/papa_francesco_8e27546ba4.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 class="text-2xl font-bold text-site-blue group-hover:text-site-red transition-colors mb-3">Os Papas sobre o Aborto</h3>
              <p class="text-site-gray line-clamp-2 text-[18px] font-normal leading-[32px]">
                Confira o que os últimos Papas falaram sobre a importância de defender a vida desde a concepção.
              </p>
            </div>

            <!-- News 2 -->
            <div class="group cursor-pointer flex flex-col h-full">
              <div class="overflow-hidden rounded-[30px] mb-6 h-64 shadow-xl">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/papa_joao_paulo_II_cc80df17b9.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 class="text-2xl font-bold text-site-blue group-hover:text-site-red transition-colors mb-3">Testemunhos de Vida</h3>
              <p class="text-site-gray line-clamp-2 text-[18px] font-normal leading-[32px]">
                Relatos emocionantes de quem diz sim à vida mesmo em meio às dificuldades.
              </p>
            </div>

            <!-- News 3 (Duplicate for layout fidelity if original has 3) -->
            <div class="group cursor-pointer flex flex-col h-full">
              <div class="overflow-hidden rounded-[30px] mb-6 h-64 shadow-xl">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/what_is_spiritual_adoption_e404113954.webp" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 class="text-2xl font-bold text-site-blue group-hover:text-site-red transition-colors mb-3">Em Defesa da Vida</h3>
              <p class="text-site-gray line-clamp-2 text-[18px] font-normal leading-[32px]">
                Conheça as ações práticas que realizamos para proteger os que não têm voz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
