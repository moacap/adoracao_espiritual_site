<script setup>
import { onMounted } from 'vue';
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import IntroSection from './components/IntroSection.vue'
import HowToParticipateSection from './components/HowToParticipateSection.vue'
import PatronsSection from './components/PatronsSection.vue'
import StoriesSection from './components/StoriesSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import FormationSection from './components/FormationSection.vue'
import FAQSection from './components/FAQSection.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <Hero />
      <IntroSection />
      <HowToParticipateSection />
      <PatronsSection />
      <StoriesSection />
      <PartnersSection />
      <FormationSection />
      
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

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, opacity;
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
</style>
