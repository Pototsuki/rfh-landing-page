<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

/* =========================================================
   VECTOR IMPORTS
   ========================================================= */
import AdminVector from "./images/AdminVector.vue";
import HRVector from "./images/HRVector.vue";
import ServicesVector from "./images/ServicesVector.vue";
import OperationsVector from "./images/OperationsVector.vue";
import SocialVector from "./images/SocialVector.vue";
import LeadVector from "./images/LeadVector.vue";
import DataVector from "./images/DataVector.vue";
import CustomVector from "./images/CustomVector.vue";

/* =========================================================
   VECTOR TYPES
   ========================================================= */
type VectorKey =
  | "AdminVector"
  | "HRVector"
  | "ServicesVector"
  | "OperationsVector"
  | "SocialVector"
  | "LeadVector"
  | "DataVector"
  | "CustomVector";

const vectors: Record<VectorKey, unknown> = {
  AdminVector,
  HRVector,
  ServicesVector,
  OperationsVector,
  SocialVector,
  LeadVector,
  DataVector,
  CustomVector,
};

/* =========================================================
   CONTENT
   ========================================================= */
const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);

/* =========================================================
   INTERSECTION
   ========================================================= */
const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);

useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    if (entry?.isIntersecting) inView.value = true;
  },
  { threshold: 0.3 },
);
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden">
    <!-- AMBIENT BACKGROUND -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute top-1/2 -right-24 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-400/20 blur-3xl"
      />
    </div>

    <UContainer>
      <UPageSection :description="page?.va_specializations?.description">
        <!-- TITLE -->
        <template #title>
          <h2
            class="text-3xl sm:text-4xl lg:text-6xl text-pretty tracking-tight font-bold text-secondary-500 font-playfair"
          >
            {{ page?.va_specializations?.title }}
          </h2>
        </template>

        <!-- GRID -->
        <Motion
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }"
          :transition="{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
        >
          <UPageGrid
            class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
          >
            <!-- CARD -->
            <UCard
              v-for="(card, i) in page?.va_specializations?.items"
              :key="i"
              :class="[
                /* BASE */
                'group relative overflow-hidden transition-all duration-500 ease-out',
                'bg-background-800/80',
                'border border-white/5',

                /* HOVER (OPTIONAL, SAFE) */
                'hover:-translate-y-1',
                'hover:bg-background-800',
                'hover:border-primary-400/30',
                'hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]',

                /* CONTENT */
                card.class,
                card.featured && 'pb-16 lg:pb-24',
              ]"
            >
              <!-- INNER GLOW (OPTIONAL) -->
              <div
                class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div
                  class="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-primary-400/20 blur-3xl"
                />
              </div>

              <!-- VECTOR BACKGROUND (OPTIONAL) -->
              <div
                v-if="card.vector && vectors[card.vector as VectorKey]"
                class="pointer-events-none absolute bottom-0 right-0 z-0 w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
              >
                <component
                  :is="vectors[card.vector as VectorKey]"
                  class="w-full h-full text-primary-400 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
                  :class="
                    card.featured
                      ? 'opacity-45'
                      : 'opacity-30 group-hover:opacity-45'
                  "
                />
              </div>

              <!-- CONTENT -->
              <div class="relative z-10 flex flex-col gap-3">
                <h3
                  class="font-black bg-linear-to-r from-secondary-200 to-secondary-900 bg-clip-text text-transparent drop-shadow-sm transition-all duration-500 group-hover:from-primary-200 group-hover:to-primary-500"
                >
                  {{ card.title }}
                </h3>

                <p class="text-base lg:text-lg">
                  {{ card.description }}
                </p>
              </div>
            </UCard>
          </UPageGrid>
        </Motion>
      </UPageSection>
    </UContainer>
  </section>
</template>
