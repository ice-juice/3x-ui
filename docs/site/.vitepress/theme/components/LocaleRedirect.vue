<script setup lang="ts">
import { inBrowser, useData } from 'vitepress'
import { onMounted, watchEffect } from 'vue'

const { lang, site } = useData()

const preferenceKey = '3x-ui-docs-locale'

function normalizePath(pathname: string, base: string) {
  return pathname.endsWith('/index.html')
    ? pathname.slice(0, -'index.html'.length)
    : pathname || base
}

function browserPrefersChinese() {
  return navigator.languages.some((language) => language.toLowerCase().startsWith('zh'))
}

onMounted(() => {
  if (!inBrowser) return

  const base = site.value.base
  const path = normalizePath(window.location.pathname, base)
  const query = new URLSearchParams(window.location.search)
  const explicitLang = query.get('lang')

  if (explicitLang === 'en') {
    window.localStorage.setItem(preferenceKey, 'en')
    window.history.replaceState(null, '', base)
    return
  }

  if (explicitLang === 'zh') {
    window.localStorage.setItem(preferenceKey, 'zh')
    window.location.replace(`${base}zh/`)
    return
  }

  if (path.startsWith(`${base}zh/`)) {
    window.localStorage.setItem(preferenceKey, 'zh')
    return
  }

  if (path !== base) return

  const savedPreference = window.localStorage.getItem(preferenceKey)
  if (savedPreference === 'zh') {
    window.location.replace(`${base}zh/`)
    return
  }

  if (savedPreference === 'en') return

  if (browserPrefersChinese()) {
    window.location.replace(`${base}zh/`)
  }
})

watchEffect(() => {
  if (!inBrowser) return

  if (lang.value.toLowerCase().startsWith('zh')) {
    window.localStorage.setItem(preferenceKey, 'zh')
  }
})
</script>

<template>
  <span hidden aria-hidden="true"></span>
</template>
