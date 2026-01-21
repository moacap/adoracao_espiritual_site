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
          {{ $t("what_is_page.title") }}
        </h1>

        <div class="prose prose-lg text-site-dark/80 max-w-none text-justify">
          <p>{{ $t("what_is_page.intro_p1") }}</p>
          <p>{{ $t("what_is_page.intro_p2") }}</p>

          <h2 class="text-2xl font-serif text-site-terracotta mt-12 mb-6 border-b border-site-terracotta/20 pb-2">
            {{ $t("what_is_page.manifesto.title") }}
          </h2>
          <p>{{ $t("what_is_page.manifesto.p1") }}</p>
          <p>{{ $t("what_is_page.manifesto.p2") }}</p>
          <p>{{ $t("what_is_page.manifesto.p3") }}</p>

          <h2 class="text-2xl font-serif text-site-terracotta mt-12 mb-6 border-b border-site-terracotta/20 pb-2">
            {{ $t("what_is_page.child_gesture.title") }}
          </h2>
          <p>{{ $t("what_is_page.child_gesture.p1") }}</p>
          <p>{{ $t("what_is_page.child_gesture.p2") }}</p>
          <p>{{ $t("what_is_page.child_gesture.p3") }}</p>
          <p>{{ $t("what_is_page.child_gesture.p4") }}</p>

          <h2 class="text-2xl font-serif text-site-terracotta mt-12 mb-6 border-b border-site-terracotta/20 pb-2">
            {{ $t("what_is_page.mother_gesture.title") }}
          </h2>
          <p>{{ $t("what_is_page.mother_gesture.p1") }}</p>
          <p>{{ $t("what_is_page.mother_gesture.p2") }}</p>
          <ul class="space-y-4 my-6 list-none pl-0">
            <li class="flex items-start gap-3 bg-site-terracotta/5 p-4 rounded-lg">
              <span class="text-site-terracotta mt-1">•</span>
              <span>{{ $t("what_is_page.mother_gesture.bullet1") }}</span>
            </li>
            <li class="flex items-start gap-3 bg-site-terracotta/5 p-4 rounded-lg">
              <span class="text-site-terracotta mt-1">•</span>
              <span>{{ $t("what_is_page.mother_gesture.bullet2") }}</span>
            </li>
            <li class="flex items-start gap-3 bg-site-terracotta/5 p-4 rounded-lg">
              <span class="text-site-terracotta mt-1">•</span>
              <span>{{ $t("what_is_page.mother_gesture.bullet3") }}</span>
            </li>
          </ul>

          <h3 class="text-xl font-serif text-site-terracotta mt-10 mb-4 italic">
            {{ $t("what_is_page.physical_consequences.title") }}
          </h3>
          <p>{{ $t("what_is_page.physical_consequences.text") }}</p>

          <h3 class="text-xl font-serif text-site-terracotta mt-10 mb-4 italic">
            {{ $t("what_is_page.psychological_consequences.title") }}
          </h3>
          <p>{{ $t("what_is_page.psychological_consequences.p1") }}</p>
          <p>{{ $t("what_is_page.psychological_consequences.p2") }}</p>
          <p>{{ $t("what_is_page.psychological_consequences.p3") }}</p>
          <p>{{ $t("what_is_page.psychological_consequences.p4") }}</p>

          <h2 class="text-2xl font-serif text-site-terracotta mt-12 mb-6 border-b border-site-terracotta/20 pb-2">
            {{ $t("what_is_page.spiritual_consequences.title") }}
          </h2>
          <p>{{ $t("what_is_page.spiritual_consequences.p1") }}</p>
          <p>{{ $t("what_is_page.spiritual_consequences.p2") }}</p>
          <p>{{ $t("what_is_page.spiritual_consequences.p3") }}</p>
          <p>{{ $t("what_is_page.spiritual_consequences.p4") }}</p>
          
          <p class="font-bold text-site-terracotta mt-8">{{ $t("what_is_page.spiritual_consequences.citations_intro") }}</p>

          <div class="mt-8 space-y-10 pl-4 border-l-2 border-site-terracotta/30">
            <section>
              <h4 class="text-lg font-bold text-site-terracotta mb-4 uppercase tracking-wider text-sm">
                {{ $t("what_is_page.spiritual_consequences.donum_vitae.title") }}
              </h4>
              <blockquote class="italic text-site-dark/70 my-4">
                {{ $t("what_is_page.spiritual_consequences.donum_vitae.quote1") }}
              </blockquote>
              <blockquote class="italic text-site-dark/70 my-4">
                {{ $t("what_is_page.spiritual_consequences.donum_vitae.quote2") }}
              </blockquote>
            </section>

            <section>
              <h4 class="text-lg font-bold text-site-terracotta mb-4 uppercase tracking-wider text-sm">
                {{ $t("what_is_page.spiritual_consequences.gaudium_et_spes.title") }}
              </h4>
              <blockquote class="italic text-site-dark/70 my-4">
                {{ $t("what_is_page.spiritual_consequences.gaudium_et_spes.quote") }}
              </blockquote>
            </section>

            <section>
              <h4 class="text-lg font-bold text-site-terracotta mb-4 uppercase tracking-wider text-sm">
                {{ $t("what_is_page.spiritual_consequences.catechism.title") }}
              </h4>
              <p>{{ $t("what_is_page.spiritual_consequences.catechism.p2271") }}</p>
              <p>{{ $t("what_is_page.spiritual_consequences.catechism.p2272") }}</p>
            </section>
          </div>

          <h2 class="text-2xl font-serif text-site-terracotta mt-16 mb-6 border-b border-site-terracotta/20 pb-2">
            {{ $t("what_is_page.family_gesture.title") }}
          </h2>
          <p>{{ $t("what_is_page.family_gesture.p1") }}</p>
          <p>{{ $t("what_is_page.family_gesture.p2") }}</p>
          <p>{{ $t("what_is_page.family_gesture.p3") }}</p>
          <p>{{ $t("what_is_page.family_gesture.p4") }}</p>

          <h2 class="text-2xl font-serif text-site-terracotta mt-16 mb-6 border-b border-site-terracotta/20 pb-2">
            {{ $t("what_is_page.history.title") }}
          </h2>
          <p>{{ $t("what_is_page.history.p1") }}</p>
          <p>{{ $t("what_is_page.history.p2") }}</p>
          <p>{{ $t("what_is_page.history.p3") }}</p>
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
/* Custom typography styles matching the project's elegant feel */
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
  color: #b25e5e;
}

.prose :deep(h4) {
  font-family: inherit;
  font-weight: 700;
  color: #b25e5e;
}

blockquote {
  position: relative;
  padding-left: 2rem;
  font-style: italic;
  color: #666;
  border-left: 4px solid #b25e5e;
  margin: 2rem 0;
}

.prose :deep(a) {
  color: #b25e5e;
  text-decoration: underline;
  transition: opacity 0.2s;
}

.prose :deep(a:hover) {
  opacity: 0.8;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  :deep(h2) {
    font-size: 1.75rem;
  }
  :deep(h3) {
    font-size: 1.25rem;
  }
}
</style>
