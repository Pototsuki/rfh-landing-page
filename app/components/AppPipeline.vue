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

useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    if (entry?.isIntersecting) inView.value = true;
  },
  { threshold: 0.3 },
);
</script>

<template>
  <section ref="sectionRef" class="relative py-24 overflow-hidden">
    <UContainer>
      <UPageSection
        :title="page?.pipeline?.title"
        :description="page?.pipeline?.description"
      >
        <!-- ================= MOBILE / TABLET ================= -->
        <div class="mx-auto max-w-md lg:hidden">
          <div
            v-for="(item, index) in page?.pipeline?.phases"
            :key="index"
            class="flex flex-col items-center"
          >
            <!-- CARD -->
            <UCard class="w-full text-center">
              <div class="space-y-2">
                <span
                  class="text-xs font-semibold tracking-widest text-primary-400"
                >
                  {{ item.phase }}
                </span>

                <h3 class="text-lg font-semibold">
                  {{ item.title }}
                </h3>

                <p class="text-sm opacity-80">
                  {{ item.description }}
                </p>
              </div>
            </UCard>

            <!-- CONNECTOR (ONLY BETWEEN CARDS) -->
            <div
              v-if="index !== page!.pipeline!.phases.length - 1"
              class="h-12 w-px bg-primary-400/40"
            />
          </div>
        </div>

        <!-- ================= DESKTOP ================= -->
        <div class="relative mx-auto hidden max-w-6xl space-y-20 lg:block">
          <!-- AXIS -->
          <div
            class="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary-400/40"
          />

          <div
            v-for="(item, index) in page?.pipeline?.phases"
            :key="index"
            class="relative grid grid-cols-[1fr_1fr]"
          >
            <!-- DOT -->
            <div
              class="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 lg:flex"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute h-16 w-16 rounded-full bg-primary-400/20 blur-md"
                ></div>
                <div
                  class="absolute h-10 w-10 rounded-full bg-primary-400/30"
                ></div>
                <div class="relative h-4 w-4 rounded-full bg-primary-400"></div>
              </div>
            </div>

            <!-- LEFT -->
            <div class="flex justify-end pr-16">
              <UCard v-if="item.side === 'left'" class="max-w-md text-right">
                <div class="space-y-2">
                  <span
                    class="text-xs font-semibold tracking-widest text-primary-400"
                  >
                    {{ item.phase }}
                  </span>
                  <h3 class="text-lg font-semibold">
                    {{ item.title }}
                  </h3>
                  <p class="text-sm opacity-80">
                    {{ item.description }}
                  </p>
                </div>
              </UCard>
            </div>

            <!-- RIGHT -->
            <div class="flex justify-start pl-16">
              <UCard v-if="item.side === 'right'" class="max-w-md">
                <div class="space-y-2">
                  <span
                    class="text-xs font-semibold tracking-widest text-primary-400"
                  >
                    {{ item.phase }}
                  </span>
                  <h3 class="text-lg font-semibold">
                    {{ item.title }}
                  </h3>
                  <p class="text-sm opacity-80">
                    {{ item.description }}
                  </p>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </UPageSection>
    </UContainer>
  </section>
</template>
