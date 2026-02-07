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
  <section>
    <AppMainHero></AppMainHero>
    <AppAboutUs></AppAboutUs>
    <AppSpecialization></AppSpecialization>
    <AppPipeline></AppPipeline>
    <AppFaq></AppFaq>
    <USeparator color="primary"></USeparator>
    <AppCtaFooter></AppCtaFooter>
  </section>
</template>
