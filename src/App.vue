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
      
      <!-- Highlights Section -->
      <section class="py-24 bg-white border-t border-black/5">
        <div class="container">
          <div class="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div class="max-w-xl">
              <span class="text-site-terracotta text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
                Fique por dentro
              </span>
              <h2 class="text-site-dark text-4xl md:text-5xl">Destaques & Notícias</h2>
            </div>
            <a href="#" class="text-site-terracotta font-bold uppercase tracking-widest text-sm flex items-center hover:text-site-dark transition-colors border-b border-site-terracotta pb-1">
              Ver todos
              <svg xmlns="http://www.w3.org/2000/svg" class="ms-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <!-- News 1 -->
            <div class="group cursor-pointer flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="overflow-hidden h-64 relative">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/papa_francesco_8e27546ba4.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div class="absolute top-4 left-4 bg-site-terracotta text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Igreja
                </div>
              </div>
              <div class="p-8 flex flex-col flex-1">
                <h3 class="text-2xl text-site-dark group-hover:text-site-terracotta transition-colors mb-4">Os Papas sobre o Aborto</h3>
                <p class="text-site-dark/70 text-lg leading-relaxed mb-6 line-clamp-3">
                  Confira o que os últimos Papas falaram sobre a importância de defender a vida desde a concepção.
                </p>
                <div class="mt-auto flex items-center text-site-terracotta font-bold text-xs uppercase tracking-widest">
                  Leia mais 
                  <span class="ms-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            <!-- News 2 -->
            <div class="group cursor-pointer flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="overflow-hidden h-64 relative">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/papa_joao_paulo_II_cc80df17b9.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div class="absolute top-4 left-4 bg-site-terracotta text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Testemunho
                </div>
              </div>
              <div class="p-8 flex flex-col flex-1">
                <h3 class="text-2xl text-site-dark group-hover:text-site-terracotta transition-colors mb-4">Testemunhos de Vida</h3>
                <p class="text-site-dark/70 text-lg leading-relaxed mb-6 line-clamp-3">
                  Relatos emocionantes de quem diz sim à vida mesmo em meio às dificuldades da gestação.
                </p>
                <div class="mt-auto flex items-center text-site-terracotta font-bold text-xs uppercase tracking-widest">
                  Leia mais 
                  <span class="ms-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            <!-- News 3 -->
            <div class="group cursor-pointer flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="overflow-hidden h-64 relative">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/what_is_spiritual_adoption_e404113954.webp" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div class="absolute top-4 left-4 bg-site-terracotta text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Missão
                </div>
              </div>
              <div class="p-8 flex flex-col flex-1">
                <h3 class="text-2xl text-site-dark group-hover:text-site-terracotta transition-colors mb-4">Em Defesa da Vida</h3>
                <p class="text-site-dark/70 text-lg leading-relaxed mb-6 line-clamp-3">
                  Conheça as ações práticas que realizamos para proteger os que ainda não têm voz.
                </p>
                <div class="mt-auto flex items-center text-site-terracotta font-bold text-xs uppercase tracking-widest">
                  Leia mais 
                  <span class="ms-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
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
