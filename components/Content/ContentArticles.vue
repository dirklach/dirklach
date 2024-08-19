<script setup lang="ts">
const route = useRoute(); // Get the current route
console.log(route);
const blogPosts = await queryContent("/blog")
  .sort({ date: -1 })
  .where({ _partial: false })
  .find(); // Get all blog posts

// Filter out the current article TODO: UNDERSTAND THIS
const filteredPosts = blogPosts.filter((post) => post._path !== route.path);
</script>

<template>
  <div>
    <ul class="grid grid-cols-4 gap-12">
      <li
        v-for="{ _path: slug, title, description } in filteredPosts"
        :key="slug"
        class="mb-4"
      >
        <NuxtLink :to="slug">
          <h1 class="text-2xl mb-4">
            {{ title }}
          </h1>
        </NuxtLink>
        <p class="text-s opacity-40">
          {{ description }}
        </p>
      </li>
    </ul>
  </div>
</template>
