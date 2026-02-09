<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);
const imageLoaded = ref(false);

const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);

useIntersectionObserver(
  sectionRef,
  (entries) => {
    const entry = entries[0];
    if (entry?.isIntersecting) {
      inView.value = true;
    }
  },
  { threshold: 0.3 },
);
</script>

<template>
  <!-- SECTION WRAPPER -->
  <section ref="sectionRef" class="relative overflow-hidden">
    <!-- BACKGROUND GRADIENT BLOBS -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <!-- Blob top-left -->
      <div
        class="absolute -top-24 -left-24 h-105 w-105 rounded-full bg-primary-400/30 blur-3xl"
      ></div>
    </div>

    <!-- CONTENT -->
    <UContainer>
      <UPageSection title="What We Do" orientation="horizontal">
        <template #title>
          <h2
            class="text-3xl sm:text-4xl lg:text-6xl text-pretty font-black text-primary-500"
          >
            {{ page?.about_us.title }}
          </h2>
        </template>
        <!-- LEFT / TEXT -->
        <template #description>
          <Motion
            :initial="{ opacity: 0, y: 32 }"
            :animate="{ opacity: inView ? 1 : 0, y: inView ? 0 : 32 }"
            :transition="{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }"
          >
            <div class="relative pl-6 space-y-5">
              <!-- Decorative vertical line -->
              <span
                class="absolute left-0 top-1 h-full w-1 rounded-full bg-linear-to-b from-primary-400 to-primary-700"
              ></span>

              <p class="text-lg text-primary-text">
                {{ page?.about_us.description }}
              </p>

              <!-- Statement -->
              <Motion
                :initial="{ opacity: 0, y: 16 }"
                :animate="{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }"
                :transition="{
                  delay: 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }"
              >
                <p
                  class="font-black bg-linear-to-r text-xl lg:text-3xl from-primary-300 via-primary-500 to-primary-700 bg-clip-text text-transparent drop-shadow-sm"
                >
                  {{ page?.about_us.remarks }}
                </p>
              </Motion>

              <!-- Supporting text -->
              <Motion
                :initial="{ opacity: 0, y: 12 }"
                :animate="{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }"
                :transition="{
                  delay: 0.25,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }"
              >
                <p class="text-base text-muted-foreground max-w-xl">
                  {{ page?.about_us.description_2 }}
                </p>
              </Motion>
            </div>
          </Motion>
        </template>

        <!-- RIGHT / IMAGE -->
        <Motion
          :initial="{ opacity: 0, x: 80 }"
          :animate="{
            opacity: inView && imageLoaded ? 1 : 0,
            x: inView && imageLoaded ? 0 : 80,
          }"
          :transition="{
            delay: 0.15,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }"
        >
          <div
            class="relative mt-10 lg:mt-0 flex justify-center"
            style="perspective: 1200px"
          >
            <!-- AMBIENT GLOW -->
            <div
              class="pointer-events-none absolute -inset-16 rounded-[48px] bg-primary-500/15 blur-[80px]"
              aria-hidden="true"
            ></div>

            <!-- CORE GLOW -->
            <div
              class="pointer-events-none absolute -inset-6 rounded-4xl bg-primary-400/20 blur-3xl"
              aria-hidden="true"
            ></div>

            <!-- Tilted frame -->
            <div
              class="relative transform-gpu rotate-2 -skew-y-1 transition-transform duration-700 ease-out hover:rotate-3 hover:skew-y-0"
            >
              <div
                class="relative border-2 border-primary-700/70 rounded-2xl bg-background-800 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]"
              >
                <NuxtImg
                  src="https://s29814.pcdn.co/wp-content/uploads/2022/11/shutterstock_1477336820.jpg.optimal.jpg"
                  alt="about-us-what-we-do"
                  format="webp"
                  sizes="(max-width: 1024px) 90vw, 704px"
                  preload
                  loading="eager"
                  class="relative top-3 right-3 lg:top-6 lg:right-6 w-full max-h-96 object-cover rounded-xl shadow-2xl"
                  @load="imageLoaded = true"
                />
              </div>
            </div>
          </div>
        </Motion>
      </UPageSection>
    </UContainer>
  </section>
</template>
