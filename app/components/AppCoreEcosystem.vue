<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);

const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);
const activeIndex = ref<number | null>(null);

useIntersectionObserver(
  sectionRef,
  ([entry]) => entry?.isIntersecting && (inView.value = true),
  { threshold: 0.5 },
);
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden py-24 lg:py-44">
    <!-- ================= AMBIENT BACKGROUND ================= -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute left-1/2 top-1/2 h-130 w-130 lg:h-225 lg:w-225-translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/20 blur-[180px] lg:blur-[220px]"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px), linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"
      />
    </div>

    <UContainer>
      <UPageSection>
        <!-- ================= MOBILE ================= -->
        <div class="lg:hidden space-y-10">
          <!-- MOBILE HEADER -->
          <div class="text-center space-y-4">
            <div class="mx-auto h-px w-16 bg-primary-400/40" />

            <h2
              class="font-playfair font-black text-3xl sm:text-4xl bg-linear-to-r from-secondary-500 to-secondary-900 bg-clip-text text-transparent drop-shadow-sm py-2"
            >
              {{ page?.ecosystem?.title }}
            </h2>

            <p class="text-base text-secondary-text leading-relaxed px-4">
              {{ page?.ecosystem?.description }}
            </p>
          </div>

          <!-- MOBILE CARDS -->
          <div class="space-y-6">
            <UCard
              v-for="(item, i) in page?.ecosystem?.items"
              :key="i"
              class="w-full max-w-sm mx-auto bg-background-800/80 border border-white/5"
            >
              <div class="space-y-3 text-center">
                <h3
                  class="font-playfair italic font-bold text-primary-400 text-lg"
                >
                  {{ item.title }}
                </h3>
                <p class="text-sm opacity-80">
                  {{ item.description }}
                </p>
              </div>
            </UCard>
          </div>
        </div>

        <!-- ================= DESKTOP FRAME ================= -->
        <div class="relative mt-24 hidden justify-center lg:flex">
          <div class="relative h-130 w-full max-w-6xl">
            <!-- FRAME -->
            <div
              class="absolute inset-0 rounded-3xl bg-background-900/20 transition-all duration-500"
              :class="
                activeIndex !== null
                  ? 'border border-primary-400/50 shadow-[0_0_120px_-40px_rgba(212,175,55,0.35)]'
                  : 'border border-primary-400/30'
              "
            />

            <!-- INNER FRAME -->
            <div
              class="pointer-events-none absolute inset-8 rounded-2xl border border-dashed border-secondary-500/40"
            />

            <!-- ================= CENTER CORE ================= -->
            <Motion
              :initial="{ opacity: 0, scale: 0.96 }"
              :animate="{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.96 }"
              :transition="{ duration: 0.6, delay: 0.15 }"
              class="absolute inset-0 flex items-center justify-center"
            >
              <div
                class="max-w-md text-center space-y-4 px-6 transition-all duration-500"
                :class="activeIndex !== null ? 'opacity-100' : 'opacity-90'"
              >
                <div class="mx-auto h-px w-16 bg-primary-400/40" />

                <h2
                  class="font-playfair font-black text-3xl sm:text-4xl lg:text-6xl bg-linear-to-r from-secondary-500 to-secondary-900 bg-clip-text text-transparent drop-shadow-sm py-3"
                >
                  {{ page?.ecosystem?.title }}
                </h2>

                <p
                  class="text-base lg:text-lg text-secondary-text leading-relaxed"
                >
                  {{ page?.ecosystem?.description }}
                </p>
              </div>
            </Motion>

            <!-- ================= CORNER CARDS ================= -->
            <Motion
              v-for="(item, i) in page?.ecosystem?.items"
              :key="i"
              :initial="{
                opacity: 0,
                x: i === 0 || i === 3 ? -40 : 40,
                y: i <= 1 ? -40 : 40,
              }"
              :animate="{ opacity: inView ? 1 : 0, x: 0, y: 0 }"
              :transition="{ duration: 0.7, delay: 0.2 + i * 0.25 }"
              class="absolute"
              :class="[
                i === 0 && '-top-12 -left-12',
                i === 1 && '-top-12 -right-12',
                i === 2 && '-bottom-12 -right-12',
                i === 3 && '-bottom-12 -left-12',
              ]"
            >
              <UCard
                class="w-[320px] bg-background-800/80 border border-white/5 transition-all duration-300"
                :class="[
                  activeIndex !== null && activeIndex !== i
                    ? 'opacity-60'
                    : 'opacity-100',
                  activeIndex === i
                    ? 'scale-[1.03] shadow-[0_30px_90px_-30px_rgba(212,175,55,0.45)]'
                    : '',
                ]"
                @mouseenter="activeIndex = i"
                @mouseleave="activeIndex = null"
              >
                <div class="space-y-3 text-center">
                  <h3
                    class="text-xl font-playfair italic font-bold text-primary-400"
                  >
                    {{ item.title }}
                  </h3>
                  <p class="text-sm opacity-80">
                    {{ item.description }}
                  </p>
                </div>
              </UCard>
            </Motion>
          </div>
        </div>
      </UPageSection>
    </UContainer>
  </section>
</template>
