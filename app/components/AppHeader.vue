<script setup lang="ts">
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
      <UColorModeButton class="hidden md:inline-flex cursor-pointer" />

      <UButton
        aria-label="Join Now"
        color="primary"
        size="lg"
        variant="solid"
        :label="pageContent?.header?.button.join_now"
        class="hover:bg-primary-700"
      />
    </template>

    <template #body>
      <USeparator class="my-6" />

      <UColorModeButton class="cursor-pointer" />
    </template>
  </UHeader>
</template>
