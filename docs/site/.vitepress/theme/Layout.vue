<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import LocaleRedirect from './components/LocaleRedirect.vue'
</script>

<template>
  <LocaleRedirect />
  <DefaultTheme.Layout />
</template>
