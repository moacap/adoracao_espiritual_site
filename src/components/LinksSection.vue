<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import aePretoLogo from "../assets/ae-preto.png";
import babyAppLogo from "../assets/logo_transparent_1768482338198.png";

const { t } = useI18n();

const links = computed(() => [
  {
    type: "internal",
    title: t("links.item1.title"),
    subtitle: t("links.item1.subtitle"),
    description: t("links.item1.description"),
    icon: aePretoLogo,
    href: "/site_page.html",
  },

  {
    type: "social",
    title: t("links.item2.title"),
    description: t("links.item2.description"),
    icon: "fab fa-instagram",
    color: "text-[#E1306C]",
    href: "https://instagram.com/adocaoespiritualrio",
  },
  {
    type: "social",
    title: t("links.item3.title"),
    description: t("links.item3.description"),
    icon: "fab fa-facebook",
    color: "text-[#1877F2]",
    href: "https://facebook.com/adocaoespiritualrio",
  },
  {
    type: "social",
    title: t("links.item4.title"),
    description: t("links.item4.description"),
    icon: "fab fa-youtube",
    color: "text-[#FF0000]",
    href: "https://youtube.com/@adocaoespiritualrio",
  },
  {
    type: "contact",
    title: "WhatsApp",
    description: t("links.item5.description"),
    icon: "fab fa-whatsapp",
    color: "text-[#25D366]",
    href: "https://wa.me/552112345678",
  },
  {
    type: "app",
    title: t("links.item_app.title"),
    description: t("links.item_app.description"),
    icon: babyAppLogo,
    androidHref:
      "https://play.google.com/store/apps/details?id=pl.abksolutions.adoptujzycie",
    iosHref: "https://apps.apple.com/br/app/adote-a-vida/id1127974449",
  },
  {
    type: "contact",
    title: "E-MAIL",
    description: t("links.item6.description"),
    icon: "far fa-envelope",
    color: "text-site-terracotta",
    href: "mailto:contato@adocaoespiritual.org.br",
  },
]);
</script>

<template>
  <section class="pt-[45px] pb-32 bg-white relative overflow-hidden">
    <div class="container max-w-2xl mx-auto px-6 relative z-10">
      <div class="space-y-0">
        <div v-for="(link, index) in links" :key="index">
          <component
            :is="link.type === 'app' ? 'div' : 'a'"
            :href="link.type === 'app' ? undefined : link.href"
            :target="
              link.type === 'app'
                ? undefined
                : link.href.includes('://') || link.href.startsWith('mailto:')
                ? '_blank'
                : '_self'
            "
            class="group block py-8 hover:bg-gray-50/50 transition-all duration-300 rounded-lg px-4 -mx-4"
          >
            <div class="flex items-start gap-6">
              <!-- Icon/Logo Column -->
              <div
                class="flex-shrink-0 w-16 h-16 flex items-center justify-center"
              >
                <template v-if="link.type === 'internal'">
                  <img
                    :src="link.icon"
                    alt="Logo"
                    class="w-full h-auto object-contain"
                  />
                </template>
                <template v-else-if="link.type === 'app'">
                  <div
                    class="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110"
                  >
                    <img
                      :src="link.icon"
                      alt="App Logo"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </template>
                <template v-else>
                  <i
                    :class="[
                      link.icon,
                      link.color,
                      'text-4xl transition-transform group-hover:scale-110',
                    ]"
                  ></i>
                </template>
              </div>

              <!-- Content Column -->
              <div class="flex-grow pt-1">
                <div class="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3
                    class="text-xl font-bold text-site-dark uppercase tracking-wide"
                  >
                    {{ link.title }}
                  </h3>
                  <span
                    v-if="link.subtitle"
                    class="text-site-terracotta font-serif italic text-lg"
                  >
                    {{ link.subtitle }}
                  </span>
                  <span
                    v-if="link.handle"
                    class="text-site-dark font-bold text-lg"
                  >
                    {{ link.handle }}
                  </span>
                </div>

                <p class="text-gray-600 text-base leading-relaxed">
                  {{ link.description }}
                </p>

                <!-- App Download Links -->
                <div
                  v-if="link.type === 'app'"
                  class="mt-3 flex items-center gap-4 text-sm"
                >
                  <span class="text-gray-500">{{
                    $t("links.item_app.download")
                  }}</span>
                  <div class="flex items-center gap-4 font-bold text-site-dark">
                    <a
                      :href="link.androidHref"
                      target="_blank"
                      class="flex items-center gap-1.5 hover:text-site-terracotta transition-colors"
                    >
                      <i class="fab fa-android text-lg"></i>
                      {{ $t("links.item_app.android") }}
                    </a>
                    <span class="text-gray-300 font-normal">{{
                      $t("links.item_app.or")
                    }}</span>
                    <a
                      :href="link.iosHref"
                      target="_blank"
                      class="flex items-center gap-1.5 hover:text-site-terracotta transition-colors"
                    >
                      <i class="fab fa-apple text-lg"></i>
                      {{ $t("links.item_app.ios") }}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Arrow -->
              <div
                v-if="link.type !== 'app'"
                class="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </component>
          <!-- Separator -->
          <hr v-if="index !== links.length - 1" class="border-gray-100" />
        </div>
      </div>
    </div>

    <!-- Single Wavy Divider beige -->
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
          fill="#BC6F65"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
}
</style>
