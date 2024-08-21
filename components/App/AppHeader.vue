<script setup>
const route = useRoute();
const isBlogActive = computed(() => {
  return route.path.startsWith("/articles");
});
</script>

<template>
  <div class="c-header | mx-12 flex flex-row justify-between mx-auto">
    <div class="c-logo">
      <div class="c-logo">Dirk Lach</div>
      <div class="c-claim">Designer and Developer</div>
    </div>
    <div class="c-menu">
      <NuxtLink to="/" class="c-menu__item">Index</NuxtLink>
      <NuxtLink to="/about" class="c-menu__item">About</NuxtLink>
      <NuxtLink
        to="/articles"
        class="c-menu__item"
        :class="{ 'c-menu__item--active': isBlogActive }"
        >Articles</NuxtLink
      >
    </div>
  </div>
</template>
