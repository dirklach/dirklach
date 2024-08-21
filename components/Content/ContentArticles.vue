<script setup lang="ts">
const route = useRoute(); // Get the current route
console.log(route);
const blogPosts = await queryContent("/articles")
  .sort({ date: -1 })
  .where({ _partial: false })
  .find(); // Get all blog posts

// Filter out the current article TODO: UNDERSTAND THIS
const filteredPosts = blogPosts.filter((post) => post._path !== route.path);
console.log(filteredPosts);
</script>

<template>
  <div>
    <ul class="grid grid-cols-4 gap-6">
      <li
        v-for="{
          _path: slug,
          title,
          description,
          featuredImage,
        } in filteredPosts"
        :key="slug"
      >
        <NuxtLink :to="slug" class="mb-4 flex flex-col gap-4">
          <img :src="featuredImage || '/img/articles/placeholder.png'" />

          <h1 class="text-2xl mb-4">
            {{ title }}
          </h1>

          <p class="text-s opacity-40">
            {{ description }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
