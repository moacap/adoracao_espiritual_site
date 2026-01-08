<template>
  <section class="py-24 bg-site-terracotta text-white relative overflow-hidden">
    <!-- Subtle Pattern Overlay -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <svg class="h-full w-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" stroke-width="0.1"/>
      </svg>
    </div>

    <div class="container relative z-10 max-w-6xl">
      <div class="text-center mb-16">
        <span class="text-white/70 text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
          Seu Compromisso
        </span>
        <h2 class="text-white text-4xl md:text-5xl mb-6">Compromisso Diário</h2>
        <div class="w-20 h-1 bg-white/30 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <!-- Step 1 -->
        <div class="bg-white/10 backdrop-blur-sm p-10 rounded-sm border border-white/10 hover:bg-white/20 transition-all duration-500">
          <div class="text-4xl font-serif mb-6 opacity-30 italic">01.</div>
          <h3 class="text-xl font-bold uppercase tracking-wider mb-4">Santo Rosário</h3>
          <p class="text-white/80 leading-relaxed font-medium">
            Rezar um dos mistérios do Rosário (uma dezena) todos os dias durante nove meses.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="bg-white/10 backdrop-blur-sm p-10 rounded-sm border border-white/10 hover:bg-white/20 transition-all duration-500 md:scale-110 shadow-2xl z-10">
          <div class="text-4xl font-serif mb-6 opacity-30 italic">02.</div>
          <h3 class="text-xl font-bold uppercase tracking-wider mb-4">Oração Especial</h3>
          <p class="text-white/85 leading-relaxed italic text-sm mb-6">
            "Senhor Jesus, peço-Vos por esta criança concebida, adotada espiritualmente por mim, que corre o perigo de ser morta pelo aborto..."
          </p>
          <a href="#" class="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-site-dark hover:border-site-dark transition-colors">Ver oração completa</a>
        </div>

        <!-- Step 3 -->
        <div class="bg-white/10 backdrop-blur-sm p-10 rounded-sm border border-white/10 hover:bg-white/20 transition-all duration-500">
          <div class="text-4xl font-serif mb-6 opacity-30 italic">03.</div>
          <h3 class="text-xl font-bold uppercase tracking-wider mb-4">Ação Adicional</h3>
          <p class="text-white/80 leading-relaxed font-medium">
            Acrescentar espontaneamente um propósito diário, como um pequeno sacrifício ou boa obra.
          </p>
        </div>
      </div>

      <div class="mt-20 text-center">
        <a 
          href="#" 
          class="inline-block bg-white text-site-terracotta px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-site-dark hover:text-white transition-all duration-300 shadow-xl"
        >
          Iniciar Adoção agora
        </a>
      </div>
    </div>
  </section>
</template>
