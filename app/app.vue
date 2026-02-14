<script setup>
import { useI18n } from '#i18n';

const { locale } = useI18n();

const { data: pageContent } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
  bodyAttrs: {
    class: "bg-background-950",
  },
});

const title = "Nuxt Starter Template";
const description =
  "A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterCard: "summary_large_image",
});

// Footer content with address
const footerData = {
  en: {
    address: "Our Office",
    lines: [
      "18 Office Park, Jl. TB Simatupang Kav. 18 Lt. 25,",
      "Suite A2 Kebagusan, Ps. Minggu, Kota Jakarta",
      "Selatan Daerah Khusus Ibukota Jakarta 12520"
    ]
  },
  id: {
    address: "Kantor Kami",
    lines: [
      "18 Office Park, Jl. TB Simatupang Kav. 18 Lt. 25,",
      "Suite A2 Kebagusan, Ps. Minggu, Kota Jakarta",
      "Selatan Daerah Khusus Ibukota Jakarta 12520"
    ]
  }
};
</script>

<template>
  <UApp>
    <AppHeader></AppHeader>

    <main>
      <UMain>
        <NuxtPage />
      </UMain>
    </main>

    <!-- Custom Footer with Address -->
    <footer class="w-full bg-background-900 border-t border-border-200 py-8 px-4 md:px-8">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        <div class="flex flex-col gap-2 text-sm">
          <p class="font-semibold text-gray-200 text-base">{{ footerData[locale]?.address }}</p>
          <address class="not-italic text-gray-400 leading-relaxed">
            <template v-for="(line, index) in footerData[locale]?.lines" :key="index">
              {{ line }}<br>
            </template>
          </address>
        </div>
      </div>
    </footer>
  </UApp>
</template>
