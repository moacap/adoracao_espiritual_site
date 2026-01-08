<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <!-- Right side background blur -->
    <div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <!-- Left Content -->
        <div class="lg:w-1/2 order-2 lg:order-1">
          <h2 class="text-site-blue font-sans font-bold text-[40px] leading-[48px] tracking-tight mb-8">
            A Adoção Espiritual é um <br>
            amoroso acolhimento <br>
            espiritual através da
            <span class="font-script text-site-red text-[80px] leading-none block mt-2 transform -rotate-3">oração!</span>
          </h2>
          
          <div class="space-y-6 text-site-gray text-[16px] font-normal leading-[26px] max-w-xl">
            <p>
              A Adoção Espiritual é um amoroso acolhimento espiritual através da oração. Dura nove meses e consiste em uma recitação diária de um dos mistérios do Rosário e uma oração especial pela criança e por sua família.
            </p>
            <p>
              A adoção espiritual dos nascituros surgiu como fruto das aparições de Nossa Senhora em Fátima. Maria pediu que rezemos o Terço, façamos a penitência e reparação pelos pecados.
            </p>
          </div>

          <a 
            href="#" 
            class="inline-flex items-center bg-site-red text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-red-600 transition-all shadow-lg hover:shadow-red-200 mt-10"
          >
            Faça sua adoção espiritual
            <svg class="ms-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <!-- Right Image Collage -->
        <div class="lg:w-1/2 order-1 lg:order-2">
          <div class="grid grid-cols-3 gap-4 items-center">
             
             <!-- Col 1 -->
             <div class="flex flex-col gap-4">
                <div class="rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto1_ee9008fbf4.webp" alt="Baby 1" class="w-full h-auto object-cover aspect-[3/4]" />
                </div>
             </div>

             <!-- Col 2 -->
             <div class="flex flex-col gap-4 -mt-12">
                <div class="rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto2_4699f045db.webp" alt="Baby 2" class="w-full h-auto object-cover aspect-square" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto5_1c4b409cc7.webp" alt="Baby 3" class="w-full h-auto object-cover aspect-square" />
                </div>
             </div>

             <!-- Col 3 -->
             <div class="flex flex-col gap-4 -mt-24">
                <div class="rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto3_f31817b12c.webp" alt="Baby 4" class="w-full h-auto object-cover aspect-square" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-xl">
                   <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto4_608a3d20a8.webp" alt="Baby 5" class="w-full h-auto object-cover aspect-[3/4]" />
                </div>
             </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
