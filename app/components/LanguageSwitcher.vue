<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";

const { locale, setLocale } = useI18n();

const options: SelectItem[] = [
  { label: "EN", value: "en", icon: "i-heroicons-language" },
  { label: "ID", value: "id", icon: "i-heroicons-language" },
];
</script>

<template>
  <USelect
    v-model="locale"
    :items="options"
    size="lg"
    variant="soft"
    class="w-full"
    :ui="{
      base: 'rounded-full text-primary-text max-w-24',
    }"
    @update:model-value="(v) => setLocale(v as 'en' | 'id')"
  />
</template>
