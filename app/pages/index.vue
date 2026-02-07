<script setup lang="ts">
const { data: seoPage } = await useAsyncData(() =>
  queryCollection("index").where("locale", "=", "id").first(),
);

useSeoMeta({
  title: seoPage.value?.seo?.title,
  description: seoPage.value?.seo?.description,
});
</script>

<template>
  <AppMainHero></AppMainHero>
</template>
