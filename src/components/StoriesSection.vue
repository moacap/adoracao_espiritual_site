<script setup>
import { onMounted } from "vue";

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
  <section class="pt-5 pb-40 bg-site-beige relative overflow-hidden">
    <div class="container relative z-10">
      <div
        class="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 text-center lg:text-left"
      >
        <!-- Right Content -->
        <div class="lg:w-1/2">
          <div class="mb-6 inline-block reveal">
            <span
              class="text-site-terracotta text-sm font-bold uppercase tracking-widest pb-1 border-b border-site-terracotta/20"
            >
              {{ $t("stories.badge") }}
            </span>
          </div>
          <h2
            class="reveal reveal-delay-1 text-site-dark text-4xl md:text-5xl leading-tight mb-8"
          >
            {{ $t("stories.title") }}
          </h2>

          <div
            class="reveal reveal-delay-2 space-y-6 text-site-dark/80 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            <p>
              {{ $t("stories.description") }}
            </p>
          </div>

          <div class="reveal reveal-delay-3 mt-8">
            <a
              href="#"
              class="group relative inline-flex items-center h-12 pr-14 pl-6"
            >
              <span
                class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-site-terracotta whitespace-nowrap"
              >
                {{ $t("stories.button") }}
              </span>
              <div
                class="absolute right-0 top-0 h-full w-12 border border-site-terracotta rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full bg-white/0"
              >
                <div
                  class="absolute right-0 top-0 w-12 h-full flex items-center justify-center"
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Left Image -->
        <div class="lg:w-1/2">
          <div
            class="reveal reveal-delay-1 rounded-sm overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
          >
            <img
              src="https://cms.adocaoespiritualrio.org.br/uploads/papa_joao_paulo_II_cc80df17b9.jpg"
              alt="Histórias Inspiradoras"
              class="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Single Wavy Divider white -->
    <div
      class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="relative block w-full h-[40px] md:h-[80px] lg:h-[110px]"
      >
        <path
          d="M0,110 C200,110 400,0 600,0 C800,0 1000,120 1200,60 V120 H0 Z"
          fill="#FFFFFF"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
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

.reveal-delay-1 {
  transition-delay: 0.1s;
}
.reveal-delay-2 {
  transition-delay: 0.2s;
}
.reveal-delay-3 {
  transition-delay: 0.3s;
}
</style>
