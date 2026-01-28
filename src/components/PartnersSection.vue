<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import jesusMeninoLogo from '../assets/partners/Parceiro_Jesus Menino.webp';
import missaoDuasVidasLogo from '../assets/partners/missao_duas_vidas_new.png';
import associacaoGuadalupeLogo from '../assets/partners/LOGO-G3-1.png';
import rndvfLogo from '../assets/RNDVF-logo-v5-final-noBorder.svg';
import cmvdLogo from '../assets/cropped-CMVD-Por-Extensopng-1.png';

const partners = [
  {
    name: "Comunidade Católica Jesus Menino",
    logo: jesusMeninoLogo,
    link: "https://comunidadejesusmenino.org.br/",
    bgColor: "bg-[#008ADA]",
    imgClass: "brightness-0 invert",
  },
  {
    name: "Missão Duas Vidas",
    logo: missaoDuasVidasLogo,
    link: "https://missaoduasvidas.org/pt",
  },
  {
    name: "Associação Guadalupe",
    logo: associacaoGuadalupeLogo,
    link: "https://associacaoguadalupe.org.br/",
    bgColor: "bg-[#5A8CA5]",
  },
  {
    name: "Comunidade Mãe do Verbo Divino",
    logo: cmvdLogo,
    link: "https://www.cmvd.org/",
  },
  {
    name: "Rede Nacional em Defesa da Vida e da Família",
    logo: rndvfLogo,
    link: "https://redenacionalemdefesadavida.org/",
  },
];

const scrollContainer = ref(null);
const isDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const handleMouseDown = (e) => {
  isDown.value = true;
  scrollContainer.value.classList.add('active');
  startX.value = e.pageX - scrollContainer.value.offsetLeft;
  scrollLeft.value = scrollContainer.value.scrollLeft;
};

const handleMouseLeave = () => {
  isDown.value = false;
  scrollContainer.value.classList.remove('active');
};

const handleMouseUp = () => {
  isDown.value = false;
  scrollContainer.value.classList.remove('active');
};

const handleMouseMove = (e) => {
  if (!isDown.value) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.value.offsetLeft;
  const walk = (x - startX.value) * 2; // scroll-fast
  scrollContainer.value.scrollLeft = scrollLeft.value - walk;
};

onMounted(() => {
  const observerOptions = {
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <section class="py-24 bg-site-beige relative overflow-hidden border-t border-site-terracotta/5">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <h2 class="text-site-terracotta text-4xl md:text-5xl font-serif mb-4">
          {{ $t("partners.title") }}
        </h2>
        <p class="text-site-dark/70 text-lg max-w-2xl mx-auto">
          {{ $t("partners.description") }}
        </p>
      </div>

    <!-- Partners Scroll Area - Removed 'container' to allow edge-to-edge bleed which demonstrates scrollability -->
    <div 
      ref="scrollContainer"
      class="partners-scroll-container flex items-center gap-12 md:gap-20 overflow-x-auto py-10 cursor-grab active:cursor-grabbing select-none reveal reveal-delay-1 px-6 md:px-[10vw] snap-x snap-mandatory"
      @mousedown="handleMouseDown"
      @mouseleave="handleMouseLeave"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"
    >
      <div
        v-for="(partner, index) in partners"
        :key="index"
        class="flex-shrink-0 flex items-center justify-center transition-all duration-500 snap-center"
      >
        <a
          :href="partner.link"
          target="_blank"
          class="block w-52 h-52 md:w-64 md:h-64 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center p-8 group snap-center"
          :class="partner.bgColor ? partner.bgColor : 'bg-white border border-site-terracotta/5'"
          @click="(e) => isDown && e.preventDefault()"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="w-full h-full object-contain pointer-events-none transition-all duration-500 group-hover:scale-110"
            :class="partner.imgClass"
            draggable="false"
          />
        </a>
      </div>
      <!-- Empty space at the end to allow for overflow visualization -->
      <div class="flex-shrink-0 w-6 md:w-[10vw]"></div>
    </div>
    </div>
  </section>
</template>

<style scoped>
.partners-scroll-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  -webkit-overflow-scrolling: touch;
}

.partners-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, opacity;
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 {
  transition-delay: 0.1s;
}

</style>
