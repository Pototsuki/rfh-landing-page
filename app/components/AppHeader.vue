<script setup lang="ts">
import { useI18n } from '#i18n';

const { locale } = useI18n();

const { data: pageContent } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" aria-label="Home">
        <AppLogo class="w-auto h-8 md:h-10 shrink-0" />
      </NuxtLink>
    </template>

    <template #right>
      <!-- Desktop -->
      <LanguageSwitcher></LanguageSwitcher>
      <UButton
        :href="pageContent?.external_links?.whatsapp"
        :aria-label="pageContent?.header?.button.join_now"
        target="_blank"
        color="primary"
        size="md"
        variant="solid"
        :label="pageContent?.header?.button.join_now"
        class="hover:bg-primary-900 p-3 px-5 bg-linear-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent drop-shadow-sm"
      />
    </template>

    <template #body>
      <USeparator class="my-6" />
    </template>
  </UHeader>
</template>
