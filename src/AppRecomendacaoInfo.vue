<script setup>
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";

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

    <main class="pt-[160px] pb-20 container mx-auto px-4 lg:px-20">
      <div class="max-w-4xl mx-auto">
        <h1
          class="text-4xl md:text-5xl font-serif text-site-terracotta mb-12 text-center"
        >
          {{ $t("participate_page.recommendations.title") }}
        </h1>

        <div class="prose prose-lg text-site-dark/80 max-w-none text-justify">
          
          <div class="space-y-12">
            <!-- Aborto -->
            <section>
              <h3 class="text-xl font-serif text-site-terracotta mb-4">
                {{ $t("participate_page.recommendations.aborto.title") }}
              </h3>
              <p>{{ $t("participate_page.recommendations.aborto.p1") }}</p>
              <p>{{ $t("participate_page.recommendations.aborto.p2") }}</p>
            </section>

            <!-- Idosos -->
            <section>
              <h3 class="text-xl font-serif text-site-terracotta mb-4">
                {{ $t("participate_page.recommendations.idosos.title") }}
              </h3>
              <p>{{ $t("participate_page.recommendations.idosos.p1") }}</p>
            </section>

            <!-- Jovens -->
            <section>
              <h3 class="text-xl font-serif text-site-terracotta mb-4">
                {{ $t("participate_page.recommendations.jovens.title") }}
              </h3>
              <p>{{ $t("participate_page.recommendations.jovens.p1") }}</p>
              <p>{{ $t("participate_page.recommendations.jovens.p2") }}</p>
            </section>

            <!-- Crianças -->
            <section>
              <h3 class="text-xl font-serif text-site-terracotta mb-4">
                {{ $t("participate_page.recommendations.criancas.title") }}
              </h3>
              <p>{{ $t("participate_page.recommendations.criancas.p1") }}</p>
            </section>

            <!-- Casais -->
            <section>
              <h3 class="text-xl font-serif text-site-terracotta mb-4">
                {{ $t("participate_page.recommendations.casais.title") }}
              </h3>
              <p>{{ $t("participate_page.recommendations.casais.p1") }}</p>
            </section>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-20 flex justify-center">
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

.prose :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #4a4a4a;
}

.prose :deep(h2) {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  color: #b25e5e;
  font-size: 2rem;
  margin-top: 4rem;
}

.prose :deep(h3) {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.4rem;
  margin-top: 2.5rem;
}

.prose :deep(h4) {
  font-family: inherit;
  font-weight: 700;
  color: #1a1a1a;
}

blockquote {
  position: relative;
  padding-left: 2rem;
  font-style: italic;
  color: #666;
  border-left: 4px solid #b25e5e;
  margin: 2rem 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .prose :deep(h2) {
    font-size: 1.75rem;
  }
  .prose :deep(h3) {
    font-size: 1.25rem;
  }
}
</style>
