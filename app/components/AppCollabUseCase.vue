<script setup lang="ts">
const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);
</script>

<template>
  <section class="relative overflow-hidden py-28 lg:py-36">
    <!-- ================= BRIGHT DEEP BLUE ART BACKGROUND ================= -->
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <!-- Base Deep -->
      <div class="absolute inset-0 bg-background-950" />

      <!-- Subtle Vertical Depth -->
      <div
        class="absolute inset-0 bg-linear-to-b from-background-900/50 to-transparent"
      />

      <!-- 🔷 Large Light Band 1 -->
      <div
        class="absolute -top-40 -left-80 w-300 h-125 rotate-20 bg-linear-to-r from-transparent via-secondary-500/10 to-transparent"
      />

      <!-- 🔷 Large Light Band 2 -->
      <div
        class="absolute -bottom-50 -right-75 w-350 h-150 rotate-[-18deg] bg-linear-to-r from-transparent via-secondary-500/10 to-transparent"
      />

      <!-- Soft Center Lift -->
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,61,90,0.25)_0%,transparent_70%)]"
      />

      <!-- Edge Vignette -->
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(7,20,36,0.7)_100%)]"
      />
    </div>

    <UContainer>
      <!-- ================= HEADER ================= -->
      <div class="text-center max-w-4xl mx-auto mb-20 space-y-6">
        <p class="text-xs tracking-[0.3em] uppercase text-primary-400">
          {{ page?.collaboration_usecase?.description }}
        </p>

        <h2
          class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight font-playfair text-primary-text"
        >
          {{ page?.collaboration_usecase?.title }}
        </h2>
      </div>

      <!-- ================= CARDS ================= -->
      <div class="relative grid gap-10 lg:grid-cols-3 items-stretch">
        <div
          v-for="(item, i) in page?.collaboration_usecase?.items"
          :key="i"
          class="group relative h-full"
        >
          <!-- Offset Border (hover only) -->
          <div
            class="absolute inset-0 rounded-3xl border border-secondary-500/60 opacity-0 translate-x-0 translate-y-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-3 group-hover:translate-y-3"
          />

          <!-- Card Body -->
          <div
            class="relative rounded-3xl bg-background-900 border border-primary-500/40 p-10 h-full min-h-105 flex flex-col transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary-500/70"
          >
            <!-- Accent Line -->
            <div
              class="mb-8 h-0.5 w-20 bg-linear-to-r from-secondary-500 to-primary-500"
            />

            <!-- Title -->
            <h3
              class="text-2xl lg:text-3xl font-semibold text-white mb-8 leading-snug"
            >
              {{ item.title }}
            </h3>

            <!-- Points -->
            <ul class="space-y-4 text-secondary-text flex-1">
              <li
                v-for="(point, idx) in item.points"
                :key="idx"
                class="flex items-start gap-4"
              >
                <span
                  class="mt-2 h-2 w-2 rounded-full bg-linear-to-br from-secondary-500 to-primary-500"
                />
                <span class="leading-relaxed">
                  {{ point }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
