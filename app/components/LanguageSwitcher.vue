<script setup lang="ts">
const { locale, setLocale } = useI18n();

function switchLang(lang: "id" | "en") {
  setLocale(lang);
}
</script>

<template>
  <div class="flex gap-2">
    <button :class="{ active: locale === 'id' }" @click="switchLang('id')">
      ID
    </button>

    <button :class="{ active: locale === 'en' }" @click="switchLang('en')">
      EN
    </button>
  </div>
</template>
