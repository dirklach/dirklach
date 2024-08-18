<script setup>
const route = useRoute();
const isBlogActive = computed(() => {
  // Check if the current route path starts with '/blog'
  return route.path.startsWith("/blog");
});
</script>

<template>
  <div class="c-menu | container mx-auto">
    <NuxtLink to="/" class="c-menu__item">Index</NuxtLink>
    <NuxtLink to="/about" class="c-menu__item">About</NuxtLink>
    <NuxtLink
      to="/blog"
      class="c-menu__item"
      :class="{ 'c-menu__item--active': isBlogActive }"
      >Blog</NuxtLink
    >
  </div>
</template>
