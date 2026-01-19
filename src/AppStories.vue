<script setup>
import { onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";
const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
};

const { t } = useI18n();

const getStoryLink = (storyId) => {
  switch (storyId) {
    case 1: return "story-famosos.html";
    case 2: return "story-padre-pio.html";
    case 4: return "story-melissa.html";
    case 3: return "story-matheus.html";
    case 5: return "story-tong.html";
    default: return "#";
  }
};

const navigateTo = (storyId) => {
  const link = getStoryLink(storyId);
  if (link && link !== "#") {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  }
};

const stories = computed(() => [
  {
    id: 1,
    title: t("stories_page.items.1.title"),
    date: t("stories_page.items.1.date"),
    category: t("stories.title"),
    description: t("stories_page.items.1.description"),
    image: "https://cms.adocaoespiritualrio.org.br/uploads/steve_jobs_de28ae9f15.jpg",
  },
  {
    id: 2,
    title: t("stories_page.items.2.title"),
    date: t("stories_page.items.2.date"),
    category: t("stories.title"),
    description: t("stories_page.items.2.description"),
    image: "https://cms.adocaoespiritualrio.org.br/uploads/padre_pio_29a89a4224.jpg",
  },
  {
    id: 3,
    title: t("stories_page.items.3.title"),
    date: t("stories_page.items.3.date"),
    category: t("stories.title"),
    description: t("stories_page.items.3.description"),
    image: "https://cms.adocaoespiritualrio.org.br/uploads/padre_matheus_aquino_a907c69db1.jpg",
    isVideo: true
  },
  {
    id: 4,
    title: t("stories_page.items.4.title"),
    date: t("stories_page.items.4.date"),
    category: t("stories.title"),
    description: t("stories_page.items.4.description"),
    image: "https://cms.adocaoespiritualrio.org.br/uploads/Melissa_Ohden_You_Tube_Susan_B_Anthony_List_060217_7a4018f526.jpg",
  },
  {
    id: 5,
    title: t("stories_page.items.5.title"),
    date: t("stories_page.items.5.date"),
    category: t("stories.title"),
    description: t("stories_page.items.5.description"),
    image: "https://cms.adocaoespiritualrio.org.br/uploads/tong_phuoc_phuc_uai_675x450_4ae56360db.jpg", 
  }
]);

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
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
  <div class="min-h-screen bg-white">
    <HeaderStart always-opaque />

    <main class="pt-[140px] pb-20 container mx-auto px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Title Section -->
        <div class="text-center mb-16 reveal">
          <span class="text-site-terracotta text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
            {{ $t("stories_page.badge") }}
          </span>
          <h1 class="text-site-dark text-4xl md:text-5xl font-serif-site leading-tight">
            {{ $t("stories_page.title") }}
          </h1>
        </div>

        <!-- Stories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-24">
          <article 
            v-for="(story, index) in stories" 
            :key="story.id"
            class="reveal group flex flex-col h-full"
            :class="'reveal-delay-' + (index % 3 + 1)"
          >
            <!-- Image Container -->
            <div 
              class="relative aspect-[16/10] bg-site-beige rounded-sm overflow-hidden mb-6"
            >
              <img 
                :src="story.image" 
                :alt="story.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <!-- Video Overlay Icon if applicable -->
              <div v-if="story.isVideo" class="absolute inset-0 flex items-center justify-center bg-black/20">
                 <div class="w-12 h-12 bg-black/60 rounded-lg flex items-center justify-center transition-all group-hover:bg-site-terracotta/90">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 text-white fill-current"><path d="M8 5v14l11-7z"/></svg>
                 </div>
              </div>
            </div>

            <!-- Meta -->
            <div class="flex items-center gap-3 text-sm text-site-dark/50 mb-3">
              <span>{{ story.date }}</span>
              <span class="px-3 py-1 bg-site-terracotta/10 rounded-full text-[12px] font-bold text-site-terracotta uppercase tracking-[0.1em]">
                {{ story.category }}
              </span>
            </div>

            <!-- Content -->
            <h2 
              class="text-2xl text-site-dark mb-4 leading-tight font-serif-site transition-colors duration-300"
            >
              {{ story.title }}
            </h2>
            <p class="text-site-dark/70 text-lg leading-relaxed line-clamp-3 mb-6">
              {{ story.description }}
            </p>

            <div class="mt-auto flex justify-center">
              <a 
                :href="getStoryLink(story.id)"
                :target="getStoryLink(story.id).startsWith('http') ? '_blank' : '_self'"
                class="relative inline-flex items-center h-10 pr-12 pl-0 transition-all cursor-pointer group/btn"
                @click.stop
              >
                <span class="text-[11px] font-bold uppercase tracking-[0.2em] text-site-terracotta whitespace-nowrap group-hover/btn:px-4 transition-all duration-500">
                  {{ $t("stories_page.read_more") }}
                </span>
                <div class="absolute right-0 top-0 h-full w-10 border border-site-terracotta rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/btn:w-full bg-white/0">
                  <div class="absolute right-0 top-0 w-10 h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-site-terracotta">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </article>
        </div>

        <!-- Back Button -->
        <div class="flex justify-center reveal pb-10">
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
