<script setup lang="ts">
const { locale } = useI18n();

const { data: pageContent } = await useAsyncData(
  () => queryCollection("index").where("locale", "=", locale.value).first(),
  { watch: [locale] },
);
</script>

<template>
  <UPageCTA
    title="Ready to be Part of Remote For Hive?"
    :description="'Lorem ipsum dolor sit amet'"
    variant="solid"
  >
    <StarsBackground> </StarsBackground>
    <template #links>
      <UButton
        aria-label="Join Now"
        color="primary"
        size="xl"
        variant="solid"
        :label="pageContent?.header?.button.join_now"
        class="hover:bg-primary-900 p-3 px-8 bg-background-800 tracking-wide"
      />
      <UButton
        aria-label="Join Now"
        color="primary"
        size="xl"
        variant="solid"
        :label="'See Courses'"
        class="hover:bg-primary-900 p-3 px-8 bg-background-800 tracking-wide"
      />
    </template>
  </UPageCTA>
</template>
