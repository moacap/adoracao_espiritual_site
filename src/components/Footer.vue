<script setup></script>

<template>
  <footer class="bg-site-terracotta pt-24 pb-24 text-white">
    <div class="container mx-auto px-4 lg:px-20">
      <div class="max-w-4xl">
        <!-- Brand Section -->
        <div class="mb-20">
          <h4
            class="text-2xl font-serif font-bold uppercase tracking-[0.1em] mb-4"
          >
            {{ $t("footer.links1.title") }}
          </h4>
          <p class="text-white text-lg leading-relaxed max-w-2xl font-sans">
            {{ $t("footer.brand.desc") }}
          </p>
        </div>

        <!-- Links Section -->
        <nav>
          <ul class="flex flex-col space-y-6 text-lg font-sans">
            <li>
              <a
                href="who_we_are.html"
                class="hover:opacity-70 transition-opacity"
                >{{ $t("footer.links1.item1") }}</a
              >
            </li>
            <li>
              <a
                href="mailto:contato@adocaoespiritual.org.br"
                class="hover:opacity-70 transition-opacity"
                >{{ $t("footer.links1.item2") }}</a
              >
            </li>
            <li>
              <a
                href="donate.html"
                class="hover:opacity-70 transition-opacity"
                >{{ $t("footer.links1.item3") }}</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-70 transition-opacity"
                >{{ $t("footer.links1.item4") }}</a
              >
            </li>
            <li>
              <a
                href="privacy_policy.html"
                class="hover:opacity-70 transition-opacity"
                >{{ $t("footer.links1.item5") }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>
