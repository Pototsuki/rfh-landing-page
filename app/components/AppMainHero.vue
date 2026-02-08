<script setup lang="ts">
const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);
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
    <div class="absolute inset-0 bg-background-800/90 lg:hidden" />

    <!-- Desktop: ultra dark left, smooth fade -->
    <Motion
      class="absolute inset-0 hidden lg:block origin-left bg-linear-to-r from-background-800 via-background-900/95 via-50% to-transparent"
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
          <div class="max-w-full space-y-10 lg:space-y-5">
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
                class="text-3xl sm:text-4xl lg:text-6xl text-pretty font-black leading-snug text-primary-text"
              >
                {{ page?.hero.title_parts[0] }}
                <span
                  class="font-black bg-linear-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent drop-shadow-sm"
                >
                  {{ page?.hero.title_parts[1] }}
                </span>
                {{ page?.hero.title_parts[2] }}
              </h1>
            </Motion>

            <Motion
              :initial="{ opacity: 0, y: 16 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{
                type: 'spring',
                stiffness: 100,
                damping: 22,
                delay: 0.25,
              }"
            >
              <p
                class="mt-4 text-lg lg:text-2xl text-primary-text font-semibold"
              >
                {{ page?.hero.subtitle }}
              </p>
              <p class="mt-2 text-primary-text text-base lg:text-xl">
                {{ page?.hero.supporting }}
              </p>
            </Motion>

            <Motion
              :initial="{ opacity: 0, y: 16 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{
                type: 'spring',
                stiffness: 100,
                damping: 22,
                delay: 0.5,
              }"
            >
              <div class="flex mt-5 gap-3 lg:gap-5 max-w-xl flex-wrap w-full">
                <UButton
                  v-for="cta in page?.hero.cta"
                  :key="cta.label"
                  :label="cta.label"
                  class="text-sm px-4 py-2 lg:text-base lg:px-6 lg:py-3 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
                />
              </div>
            </Motion>
          </div>

          <!-- RIGHT -->
          <div class="hidden lg:block"></div>
        </div>
      </UContainer>
    </div>
  </section>
</template>
