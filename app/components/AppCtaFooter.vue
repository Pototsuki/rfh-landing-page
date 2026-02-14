<script setup lang="ts">
import { useI18n } from '#i18n';

const { locale } = useI18n();

const { data: pageContent } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);
</script>

<template>
  <UPageCTA
    title="Ready to be Part of Remote For Hive?"
    :description="'Please be part of remote for hive'"
    variant="solid"
  >
    <StarsBackground> </StarsBackground>
    <template #links>
      <UButton
        :href="pageContent?.external_links?.whatsapp"
        :aria-label="pageContent?.header?.button.join_now"
        target="_blank"
        color="primary"
        size="xl"
        variant="solid"
        :label="pageContent?.header?.button.join_now"
        class="p-3 px-8 bg-background-800 text-primary-text border-2 border-primary-500! tracking-wide"
      />
      <UButton
        :href="pageContent?.external_links?.course"
        :aria-label="pageContent?.header?.button.see_courses"
        target="_blank"
        color="primary"
        size="xl"
        variant="solid"
        :label="pageContent?.header?.button.see_courses"
        class="p-3 px-8 bg-background-800 text-primary-text border-2 border-primary-500! tracking-wide"
      />
    </template>
  </UPageCTA>
</template>
