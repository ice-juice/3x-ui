<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import LocaleRedirect from './components/LocaleRedirect.vue'
import HomeOrbitScene from './components/HomeOrbitScene.vue'
import HomeLandingContent from './components/HomeLandingContent.vue'
</script>

<template>
  <LocaleRedirect />
  <DefaultTheme.Layout>
    <template #home-hero-after>
      <HomeOrbitScene />
      <HomeLandingContent />
    </template>
  </DefaultTheme.Layout>
</template>
