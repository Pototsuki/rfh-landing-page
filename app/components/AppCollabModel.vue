<script setup lang="ts">
import { ref } from "vue";
import {
  useIntersectionObserver,
  useBreakpoints,
  breakpointsTailwind,
} from "@vueuse/core";

const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);

const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);
const activeIndex = ref<number | null>(null);

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("lg");

useIntersectionObserver(
  sectionRef,
  ([entry]) => entry?.isIntersecting && (inView.value = true),
  { threshold: 0.3 },
);
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden py-20 lg:py-28">
    <!-- ================= LEFT ARCHITECT TEXTURE BACKGROUND ================= -->
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <!-- Base -->
      <div class="absolute inset-0 bg-background-950" />

      <!-- Subtle Top Depth -->
      <div
        class="absolute inset-0 bg-linear-to-b from-background-900/50 to-transparent"
      />

      <!-- 🔷 LEFT Glass Panel (DARKER + RESPONSIVE WIDTH) -->
      <div
        class="absolute -top-40 -left-72 w-200 h-325 lg:w-300 lg:h-400 rotate-[-14deg] bg-background-900/60"
      />

      <!-- 🔷 LEFT Inner Panel (Frame Layer) -->
      <div
        class="absolute -top-32 -left-48 w-162.5 h-287.5 lg:w-237.5 lg:h-362.5 rotate-[-14deg] border border-white/5"
      />

      <!-- LEFT Vertical Frame Lines -->
      <div class="absolute left-20 top-0 bottom-0 w-px bg-white/5" />
      <div class="absolute left-36 top-0 bottom-0 w-px bg-white/5" />

      <!-- Subtle Primary Glow -->
      <div
        class="absolute left-40 top-1/2 w-120 h-120 -translate-y-1/2 bg-primary-500/8 blur-[80px]"
      />
    </div>

    <UContainer>
      <UPageSection>
        <!-- ================= TITLE SLOT ================= -->
        <template #title>
          <div class="w-full text-center lg:text-right">
            <h2
              class="text-3xl sm:text-4xl lg:text-6xl font-black font-playfair text-primary-500 leading-tight text-pretty"
            >
              {{ page?.collaboration_models?.title }}
            </h2>
          </div>
        </template>

        <!-- ================= DESCRIPTION SLOT ================= -->
        <template #description>
          <div class="w-full text-center lg:text-right">
            <p
              class="max-w-xl mx-auto lg:ml-auto lg:mr-0 text-secondary-text leading-relaxed"
            >
              {{ page?.collaboration_models?.description }}
            </p>
          </div>
        </template>

        <div class="space-y-12 lg:space-y-16">
          <div
            v-for="(item, i) in page?.collaboration_models?.items"
            :key="i"
            class="transition-all duration-500"
            @mouseenter="!isMobile && (activeIndex = i)"
            @mouseleave="!isMobile && (activeIndex = null)"
          >
            <!-- Small Label -->

            <!-- Title -->
            <h3
              class="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight transition-all duration-500"
              :class="[
                isMobile
                  ? 'text-secondary-500'
                  : activeIndex === i
                    ? 'text-secondary-500 scale-[1.01]'
                    : 'text-white/20',
              ]"
            >
              {{ item.title }}
            </h3>

            <!-- Description -->
            <div
              :class="
                isMobile ? 'mt-3 max-w-2xl' : 'mt-4 max-w-2xl h-22 relative'
              "
            >
              <!-- MOBILE: always visible -->
              <template v-if="isMobile">
                <p
                  class="text-secondary-text leading-relaxed text-sm sm:text-base"
                >
                  {{ item.description }}
                </p>
              </template>

              <!-- DESKTOP: animated -->
              <template v-else>
                <Motion
                  :initial="{ opacity: 0, y: 8 }"
                  :animate="
                    activeIndex === i
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 8 }
                  "
                  :transition="{ duration: 0.35, ease: 'easeOut' }"
                  class="absolute inset-0"
                >
                  <p
                    class="text-secondary-text leading-relaxed text-sm sm:text-base"
                  >
                    {{ item.description }}
                  </p>
                </Motion>
              </template>
            </div>

            <!-- Divider -->
            <div class="mt-6 lg:mt-8 h-px w-full bg-white/5" />
          </div>
        </div>
      </UPageSection>
    </UContainer>
  </section>
</template>
