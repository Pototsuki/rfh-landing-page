<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);

/* ================= INTERSECTION ================= */
const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);

useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    if (entry?.isIntersecting) inView.value = true;
  },
  { threshold: 0.3 },
);

/* ================= COLOR ALTERNATOR ================= */
const isPrimary = (index: number) => index % 2 === 0;
</script>

<template>
  <section
    ref="sectionRef"
    class="relative py-28 overflow-hidden bg-background-900/40"
  >
    <!-- ================= BACKGROUND DECORATION ================= -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-safe:animate-pulse-slow"
    >
      <!-- LEFT AMBIENT GLOW -->
      <div
        class="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-primary-500/15 blur-[140px]"
      />

      <!-- RIGHT AMBIENT GLOW -->
      <div
        class="absolute top-1/3 -right-40 h-130 w-130 rounded-full bg-secondary-500/15 blur-[140px]"
      />

      <!-- CENTER RADIAL FOCUS -->
      <div
        class="absolute left-1/2 top-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/10 blur-[180px]"
      />

      <!-- SUBTLE GRID -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
      />
    </div>
    <UContainer>
      <UPageSection :description="page?.pipeline?.description">
        <!-- TITLE -->
        <template #title>
          <h2
            class="font-playfair text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-primary-text"
          >
            {{ page?.pipeline?.title_parts[0] }}
            {{ page?.pipeline?.title_parts[1] }}
            <span
              class="bg-linear-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent italic leading-[1.2] pr-2"
            >
              {{ page?.pipeline?.title_parts[2] }}
            </span>
          </h2>
        </template>

        <!-- ================= MOBILE / TABLET ================= -->
        <div class="mx-auto max-w-md space-y-10 lg:hidden">
          <div
            v-for="(item, index) in page?.pipeline?.phases"
            :key="index"
            class="relative flex flex-col items-center"
          >
            <!-- DOT -->
            <div class="relative mb-4 flex items-center justify-center">
              <div
                class="absolute h-12 w-12 rounded-full blur-md"
                :class="
                  isPrimary(index) ? 'bg-primary-400/25' : 'bg-secondary-400/25'
                "
              />
              <div
                class="relative flex h-8 w-8 items-center justify-center rounded-full text-background-900"
                :class="
                  isPrimary(index) ? 'bg-primary-400' : 'bg-secondary-400'
                "
              >
                <UIcon
                  v-if="item.icon"
                  :name="`i-lucide-${item.icon}`"
                  class="h-6 w-6"
                />
              </div>
            </div>

            <!-- CARD -->
            <UCard
              class="w-full text-center transition-all duration-500 bg-background-800/80 border border-white/5"
              :class="
                isPrimary(index)
                  ? 'hover:border-primary-400/30'
                  : 'hover:border-secondary-400/30'
              "
            >
              <div class="space-y-2">
                <span
                  class="text-xs font-semibold tracking-widest"
                  :class="
                    isPrimary(index) ? 'text-primary-400' : 'text-secondary-400'
                  "
                >
                  {{ item.phase }}
                </span>

                <h3
                  class="text-lg font-bold font-playfair italic"
                  :class="
                    isPrimary(index) ? 'text-primary-400' : 'text-secondary-400'
                  "
                >
                  {{ item.title }}
                </h3>

                <p class="text-sm opacity-80">
                  {{ item.description }}
                </p>
              </div>
            </UCard>

            <!-- CONNECTOR -->
            <div
              v-if="index !== page!.pipeline!.phases.length - 1"
              class="mt-6 h-10 w-px"
              :class="
                isPrimary(index) ? 'bg-primary-400/40' : 'bg-secondary-400/40'
              "
            />
          </div>
        </div>

        <!-- ================= DESKTOP ================= -->
        <div class="relative mx-auto hidden max-w-7xl space-y-28 lg:block">
          <!-- AXIS -->
          <div
            class="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary-400/30"
          />

          <div
            v-for="(item, index) in page?.pipeline?.phases"
            :key="index"
            class="relative grid grid-cols-[1fr_1fr]"
          >
            <!-- ================= DOT ================= -->
            <div
              class="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 lg:flex"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute h-18 w-18 rounded-full blur-lg"
                  :class="
                    isPrimary(index)
                      ? 'bg-primary-400/25'
                      : 'bg-secondary-400/25'
                  "
                />
                <div
                  class="absolute h-12 w-12 rounded-full"
                  :class="
                    isPrimary(index)
                      ? 'bg-primary-400/30'
                      : 'bg-secondary-400/30'
                  "
                />
                <div
                  class="relative flex h-12 w-12 items-center justify-center rounded-full text-background-900"
                  :class="
                    isPrimary(index) ? 'bg-primary-400' : 'bg-secondary-400'
                  "
                >
                  <UIcon
                    v-if="item.icon"
                    :name="`i-lucide-${item.icon}`"
                    class="h-6 w-6"
                  />
                </div>
              </div>
            </div>

            <!-- ================= LEFT CARD ================= -->
            <div class="flex justify-end pr-20">
              <UCard
                v-if="item.side === 'left'"
                class="group relative w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl text-right transition-all duration-500 ease-out bg-background-800/80 border border-white/5 hover:-translate-y-1 hover:shadow-[0_40px_120px_-40px_rgba(0,0,0,0.65)]"
                :class="
                  isPrimary(index)
                    ? 'hover:border-primary-400/30'
                    : 'hover:border-secondary-400/30'
                "
              >
                <!-- GLOW LEFT -->
                <div
                  class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <div
                    class="absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-3xl"
                    :class="
                      isPrimary(index)
                        ? 'bg-primary-400/25'
                        : 'bg-secondary-400/25'
                    "
                  />
                </div>

                <div class="relative z-10 space-y-3">
                  <span
                    class="text-xs font-semibold tracking-widest"
                    :class="
                      isPrimary(index)
                        ? 'text-primary-400'
                        : 'text-secondary-400'
                    "
                  >
                    {{ item.phase }}
                  </span>

                  <h3
                    class="text-xl lg:text-2xl font-bold font-playfair italic transition-all duration-300 group-hover:tracking-wide"
                    :class="
                      isPrimary(index)
                        ? 'text-primary-400'
                        : 'text-secondary-400'
                    "
                  >
                    {{ item.title }}
                  </h3>

                  <p class="text-base opacity-80 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </UCard>
            </div>

            <!-- ================= RIGHT CARD ================= -->
            <div class="flex justify-start pl-20">
              <UCard
                v-if="item.side === 'right'"
                class="group relative w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl transition-all duration-500 ease-out bg-background-800/80 border border-white/5 hover:-translate-y-1 hover:shadow-[0_40px_120px_-40px_rgba(0,0,0,0.65)]"
                :class="
                  isPrimary(index)
                    ? 'hover:border-primary-400/30'
                    : 'hover:border-secondary-400/30'
                "
              >
                <!-- GLOW RIGHT -->
                <div
                  class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <div
                    class="absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl"
                    :class="
                      isPrimary(index)
                        ? 'bg-primary-400/25'
                        : 'bg-secondary-400/25'
                    "
                  />
                </div>

                <div class="relative z-10 space-y-3">
                  <span
                    class="text-xs font-semibold tracking-widest"
                    :class="
                      isPrimary(index)
                        ? 'text-primary-400'
                        : 'text-secondary-400'
                    "
                  >
                    {{ item.phase }}
                  </span>

                  <h3
                    class="text-xl lg:text-2xl font-bold font-playfair italic transition-all duration-300 group-hover:tracking-wide"
                    :class="
                      isPrimary(index)
                        ? 'text-primary-400'
                        : 'text-secondary-400'
                    "
                  >
                    {{ item.title }}
                  </h3>

                  <p class="text-base opacity-80 leading-relaxed">
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
