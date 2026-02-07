<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);

/**
 * Map FAQ content → UAccordion items
 */
const items = computed<AccordionItem[]>(() => {
  if (!page.value?.faq?.items) return [];

  return page.value.faq.items.map((faq) => ({
    label: faq.question,
    content: faq.answer,
  }));
});
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- BACKGROUND GRADIENT BLOB -->
    <div
      class="pointer-events-none absolute -left-32 top-30 h-80 w-80 rounded-full bg-primary-400/20 blur-3xl"
    />

    <UContainer>
      <UPageSection
        v-if="page?.faq"
        :title="page.faq.title || 'Frequently Asked Questions'"
        :description="page.faq.description"
      >
        <UAccordion type="multiple" :items="items" />
      </UPageSection>
    </UContainer>
  </section>
</template>
