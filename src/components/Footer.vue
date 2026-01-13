<script setup>
import aePretoLogo from '../assets/ae-preto.png';
</script>

<template>
  <footer class="bg-site-beige pt-24 pb-12 border-t border-black/5">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <img 
            :src="aePretoLogo" 
            alt="Adoção Espiritual" 
            class="h-16 w-auto mb-8 grayscale opacity-80"
          />
          <p class="text-site-dark/70 text-lg leading-relaxed mb-8">
            Um movimento de oração em defesa dos nascituros, protegendo a vida desde a concepção.
          </p>
          <div class="flex space-x-4">
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
          <h4 class="text-xl font-bold uppercase tracking-widest mb-8 text-site-dark">Adoção</h4>
          <ul class="space-y-4 text-site-dark/70 text-lg">
            <li><a href="#" class="hover:text-site-terracotta transition-colors">O que é?</a></li>
            <li><a href="#" class="hover:text-site-terracotta transition-colors">Como funciona</a></li>
            <li><a href="#" class="hover:text-site-terracotta transition-colors">Compromisso Diário</a></li>
            <li><a href="#" class="hover:text-site-terracotta transition-colors">Orações</a></li>
          </ul>
        </div>

        <!-- Links 2 -->
        <div>
          <h4 class="text-xl font-bold uppercase tracking-widest mb-8 text-site-dark">Recursos</h4>
          <ul class="space-y-4 text-site-dark/70 text-lg">
            <li><a href="#" class="hover:text-site-terracotta transition-colors">Blog & Notícias</a></li>
            <li><a href="#" class="hover:text-site-terracotta transition-colors">Testemunhos</a></li>
            <li><a href="#" class="hover:text-site-terracotta transition-colors">Materiais para Download</a></li>
            <li><a href="#" class="hover:text-site-terracotta transition-colors">Galeria</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xl font-bold uppercase tracking-widest mb-8 text-site-dark">Contato</h4>
          <div class="space-y-6 text-site-dark/70 text-lg">
            <div class="flex gap-4">
              <svg class="w-6 h-6 text-site-terracotta shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <p>Rio de Janeiro, Brasil</p>
            </div>
            <div class="flex gap-4">
              <svg class="w-6 h-6 text-site-terracotta shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <p>contato@adocaoespiritual.org.br</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-site-dark/50 text-[15px]">
        <p>© 2026 Adoção Espiritual. Todos os direitos reservados. v3.8</p>
        <div class="flex space-x-8">
          <a href="#" class="hover:text-site-terracotta transition-colors">Privacidade</a>
          <a href="#" class="hover:text-site-terracotta transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
</template>
