<script setup lang="ts">
const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);

const { data: seoPage } = await useAsyncData(() =>
  queryCollection("index").where("locale", "=", "id").first(),
);

useSeoMeta({
  title: seoPage.value?.seo?.title,
  description: seoPage.value?.seo?.description,
});
</script>

<template>
  <section
    class="relative overflow-hidden"
    style="height: calc(100vh - var(--ui-header-height))"
  >
    <!-- Background Image -->
    <NuxtImg
      src="https://s29814.pcdn.co/wp-content/uploads/2022/11/shutterstock_1477336820.jpg.optimal.jpg"
      alt="Hero background"
      class="absolute inset-0 h-full w-full object-cover"
      sizes="100vw"
      preload
    />

    <!-- Mobile: full ultra dark -->
    <div
      class="absolute inset-0 bg-primary-500/90 dark:bg-black/90 lg:hidden"
    />

    <!-- Desktop: ultra dark left, smooth fade -->
    <Motion
      class="absolute inset-0 hidden lg:block origin-left bg-linear-to-r from-primary-500 dark:from-black via-primary-900/95 dark:via-black/95 via-50% to-transparent"
      :initial="{ opacity: 0, scaleX: 0.85 }"
      :animate="{ opacity: 1, scaleX: 1 }"
      :transition="{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15,
      }"
    />

    <!-- Content -->
    <div class="relative z-10 h-full grid place-items-center">
      <UContainer class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- LEFT -->
          <div class="max-w-full">
            <Motion
              :initial="{ opacity: 0, y: 24, scale: 0.98 }"
              :animate="{ opacity: 1, y: 0, scale: 1 }"
              :transition="{
                type: 'spring',
                stiffness: 120,
                damping: 20,
              }"
            >
              <h1
                class="text-4xl lg:text-6xl font-bold leading-snug text-white"
              >
                {{ page?.hero.title }}
              </h1>

              <Motion
                as="p"
                class="mt-4 text-lg lg:text-xl text-white"
                :initial="{ opacity: 0, y: 16 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{
                  type: 'spring',
                  stiffness: 100,
                  damping: 22,
                  delay: 0.25,
                }"
              >
                {{ page?.hero.subtitle }}
              </Motion>
            </Motion>
          </div>

          <!-- RIGHT -->
          <div class="hidden lg:block"></div>
        </div>
      </UContainer>
    </div>
  </section>
</template>
