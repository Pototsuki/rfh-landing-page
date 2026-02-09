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
  <section ref="sectionRef" class="relative py-28 overflow-hidden">
    <UContainer>
      <UPageSection :description="page?.pipeline?.description">
        <!-- TITLE -->
        <template #title>
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-text"
          >
            {{ page?.pipeline?.title_parts[0] }}
            {{ page?.pipeline?.title_parts[1] }}
            <span
              class="font-playfair bg-linear-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent"
            >
              {{ page?.pipeline?.title_parts[2] }}
            </span>
          </h2>
        </template>

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
                  class="relative flex h-9 w-9 items-center justify-center rounded-full text-background-900"
                  :class="
                    isPrimary(index) ? 'bg-primary-400' : 'bg-secondary-400'
                  "
                >
                  <UIcon
                    v-if="item.icon"
                    :name="`i-lucide-${item.icon}`"
                    class="h-4 w-4"
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
