<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);
const imageLoaded = ref(false);

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
      <UPageSection
        title="What We Do"
        description="Remote For Hive helps companies and institutions access Virtual Assistants with role-specific expertise, delivered through a structured, community-based system."
        orientation="horizontal"
      >
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
                Remote For Hive helps companies and institutions access Virtual
                Assistants with role-specific expertise, delivered through a
                structured, community-based system.
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
                  We do not simply place VAs.
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
                  We design training programs, curate top talent, and provide
                  ongoing supervision to ensure every Virtual Assistant is
                  aligned with your workflows, SOPs, and business goals.
                </p>
              </Motion>
            </div>
          </Motion>
        </template>

        <!-- RIGHT / IMAGE -->
        <Motion
          :initial="{ opacity: 0, y: 40 }"
          :animate="{
            opacity: inView && imageLoaded ? 1 : 0,
            y: inView && imageLoaded ? 0 : 40,
          }"
          :transition="{
            delay: 0.1,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }"
        >
          <div
            class="relative mt-10 lg:mt-0 w-full lg:w-auto flex justify-center"
          >
            <!-- Image glow -->
            <div
              class="absolute -inset-6 rounded-3xl bg-primary-600/10 blur-2xl"
              aria-hidden="true"
            ></div>

            <!-- Frame -->
            <div
              class="relative border-2 border-primary-800 rounded-2xl w-full max-w-lg lg:max-w-none"
            >
              <NuxtImg
                src="https://s29814.pcdn.co/wp-content/uploads/2022/11/shutterstock_1477336820.jpg.optimal.jpg"
                alt="about-us-what-we-do"
                format="webp"
                sizes="(max-width: 1024px) 90vw, 704px"
                preload
                loading="eager"
                class="relative top-2 left-2 sm:top-3 sm:left-3 lg:top-8 lg:left-8 w-full max-h-96 object-cover rounded-xl shadow-2xl"
                @load="imageLoaded = true"
              />
            </div>
          </div>
        </Motion>
      </UPageSection>
    </UContainer>
  </section>
</template>
