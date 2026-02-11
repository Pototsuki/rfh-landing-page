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
    <!-- ================= AMBIENT BACKGROUND ================= -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute left-1/2 top-1/2 h-[600px] w-[600px] lg:h-[800px] lg:w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-[180px]"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px), linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"
      />
    </div>

    <UContainer>
      <UPageSection>
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
                isMobile ? 'mt-3 max-w-2xl' : 'mt-4 max-w-2xl h-[90px] relative'
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
