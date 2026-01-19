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
    <!-- Reusing HeaderStart but forcing non-sticky style initially if needed, 
         though HeaderStart handles scroll logic. -->
    <HeaderStart always-opaque />

    <main class="pt-[90px] pb-20 container mx-auto px-4 lg:px-20">
      <div class="max-w-4xl mx-auto">
        <h1
          class="text-4xl md:text-5xl font-serif text-site-terracotta mb-12 text-center"
        >
          {{ $t("privacy.title") }}
        </h1>

        <div class="prose prose-lg text-site-dark/80 max-w-none text-justify">
          <p>{{ $t("privacy.intro") }}</p>
          <p>{{ $t("privacy.p1") }}</p>
          <p>{{ $t("privacy.p2") }}</p>
          <p>{{ $t("privacy.p3") }}</p>
          <p>{{ $t("privacy.p4") }}</p>
          <p>{{ $t("privacy.p5") }}</p>
          <p>{{ $t("privacy.p6") }}</p>

          <h2 class="text-2xl font-serif text-site-dark mt-10 mb-6">
            {{ $t("privacy.cookies.title") }}
          </h2>

          <h3>{{ $t("privacy.cookies.what_title") }}</h3>
          <p>{{ $t("privacy.cookies.what_text") }}</p>

          <h3>{{ $t("privacy.cookies.how_title") }}</h3>
          <p>{{ $t("privacy.cookies.how_text") }}</p>

          <h3>{{ $t("privacy.cookies.disable_title") }}</h3>
          <p>{{ $t("privacy.cookies.disable_text") }}</p>

          <h3>{{ $t("privacy.cookies.set_title") }}</h3>
          <ul class="list-none pl-0 space-y-6 mt-4">
            <li>{{ $t("privacy.cookies.account") }}</li>
            <li>{{ $t("privacy.cookies.login") }}</li>
            <li>{{ $t("privacy.cookies.newsletter") }}</li>
            <li>{{ $t("privacy.cookies.orders") }}</li>
            <li>{{ $t("privacy.cookies.surveys") }}</li>
            <li>{{ $t("privacy.cookies.forms") }}</li>
            <li>{{ $t("privacy.cookies.preferences") }}</li>
          </ul>

          <h3>{{ $t("privacy.third_party.title") }}</h3>
          <p>{{ $t("privacy.third_party.intro") }}</p>
          <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>{{ $t("privacy.third_party.analytics") }}</li>
            <li>{{ $t("privacy.third_party.third_party_analytics") }}</li>
            <li>{{ $t("privacy.third_party.testing") }}</li>
            <li>{{ $t("privacy.third_party.ads") }}</li>
          </ul>

          <h3>{{ $t("privacy.more_info.title") }}</h3>
          <p>{{ $t("privacy.more_info.text") }}</p>

          <p class="mt-12 pt-6 border-t border-gray-200 text-sm opacity-70">
            {{ $t("privacy.effective_date") }}
          </p>
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

:deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

:deep(h3) {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.5rem; /* 24px */
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

:deep(ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

:deep(li) {
  margin-bottom: 0.5rem;
}

.prose :deep(a) {
  color: #b25e5e; /* terracotta-ish color if available, hardcoded typical value */
  text-decoration: underline;
  transition: opacity 0.2s;
}

.prose :deep(a:hover) {
  opacity: 0.8;
}
</style>
