<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);

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

const cards = [
  {
    title: "Administrative",
    description:
      "Executive-level support including calendar mastery, complex travel logistics, and inbox zero management.",
    class: "lg:col-span-2 lg:row-span-2 text-3xl!",
  },
  {
    title: "HR & Recruitment",
    description: "End-to-end talent sourcing and compliance.",
    class: "text-2xl",
  },
  {
    title: "Customer Support",
    description: "Ticketing systems and CSAT excellence.",
    class: "text-2xl",
  },
  {
    title: "Operations",
    description:
      "Standardizing workflows, process optimization, and CRM management for scaling teams.",
    class: "lg:row-span-2 text-2xl",
  },
  {
    title: "Social Media",
    description:
      "Content scheduling, community engagement, and trend monitoring across all platforms.",
    class: "text-2xl",
  },
  {
    title: "Lead Generation",
    description: "Strategic outbound outreach and pipeline building.",
    class: "text-2xl",
  },
  {
    title: "Data Annotation",
    description: "High-accuracy AI training and labeling.",
    class: "text-2xl",
  },
  {
    title: "Custom Roles",
    description:
      "Tailored to Partner SOPs. We build bespoke workflows and specialized training modules exclusively for your unique business requirements.",
    class: "text-2xl",
  },
];
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden">
    <!-- RIGHT SMALL BLURRED GRADIENT -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute top-1/2 -right-16 h-80 w-80 -translate-y-1/2 rounded-full bg-primary-400/30 blur-3xl"
      ></div>
    </div>

    <UContainer>
      <UPageSection
        description="Remote For Hive provides function-based Virtual Assistants, not one-size-fits-all support.
Available Specializations:"
      >
        <template #title>
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-secondary-500"
          >
            VA Specialization Tracks
          </h2>
        </template>
        <Motion
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }"
          :transition="{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
        >
          <UPageGrid
            class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
          >
            <UCard
              v-for="(card, i) in cards"
              :key="i"
              :class="['group transition-all duration-300', card.class]"
            >
              <div class="flex flex-col gap-3">
                <h3
                  class="font-black bg-linear-to-r from-secondary-200 to-secondary-900 bg-clip-text text-transparent drop-shadow-sm transition-all duration-300 group-hover:from-primary-200 group-hover:to-primary-900"
                >
                  {{ card.title }}
                </h3>

                <p class="text-lg">
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
