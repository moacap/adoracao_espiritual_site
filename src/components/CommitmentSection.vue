<template>
  <section class="py-24 bg-site-blue text-white relative overflow-hidden flex items-center justify-center">
    <!-- Background overlay/gradient if needed -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-30 pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-5xl relative z-10">
      <!-- Main Card Container -->
      <div class="bg-white/10 backdrop-blur-md rounded-[50px] p-8 md:p-12 shadow-2xl border border-white/10">
        <div class="flex flex-col md:flex-row items-center gap-12">
          
          <!-- Left Image -->
          <div class="w-full md:w-5/12">
            <div class="relative rounded-[30px] overflow-hidden shadow-2xl aspect-[4/5] group">
              <img 
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1000&auto=format&fit=crop" 
                alt="Mãos segurando bebê" 
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-black/20"></div>
            </div>
          </div>

          <!-- Right Content -->
          <div class="w-full md:w-7/12 text-left">
            
            <!-- Title Header -->
            <div class="mb-10 text-center md:text-left">
               <img 
                src="https://cms.adocaoespiritualrio.org.br/uploads/daily_commitment_spiritual_adoption_47cab96e68.webp" 
                alt="Compromisso Diário" 
                class="h-24 md:h-32 w-auto mx-auto md:mx-0 mb-4 brightness-200"
              />
            </div>

            <!-- List -->
            <div class="space-y-6 text-[16px] leading-[26px] font-normal text-blue-50">
              <div class="flex gap-3">
                <span class="font-bold flex-shrink-0">1.</span>
                <p>Rezar um dos mistérios do Rosário.</p>
              </div>

              <div class="flex gap-3">
                <span class="font-bold flex-shrink-0">2.</span>
                <div>
                  <p class="mb-2">Rezar esta oração:</p>
                  <p class="italic text-white opacity-90">
                    "Senhor Jesus, pela intercessão de Maria, Vossa Mãe, que Vos acolheu com amor, e de São José, homem justo, que cuidou de Vós após o nascimento, peço-Vos por esta criança concebida, adotada espiritualmente por mim, que corre o perigo de ser morta pelo aborto. Dai aos seus pais amor e coragem para que a deixem viver a vida que Vós mesmo lhe destes. Amém."
                  </p>
                </div>
              </div>

              <div class="flex gap-3">
                 <span class="font-bold flex-shrink-0">3.</span>
                 <p>Pode também acrescentar espontaneamente um propósito diário.</p>
              </div>
            </div>

            <!-- Button -->
            <div class="mt-10 text-center md:text-left">
              <a 
                href="#" 
                class="inline-flex items-center bg-site-red text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-red-600 transition-all shadow-lg hover:shadow-red-500/30 hover:-translate-y-1"
              >
                Quero fazer uma adoção espiritual
                <svg class="ms-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
