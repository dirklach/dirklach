<script setup lang="ts">
const blogPosts = await queryContent("/blog")
  .sort({ date: -1 })
  .where({ _partial: false })
  .find();
</script>

<template>
  <div>
    <h1 class="text-8xl mb-12">Blog Articles</h1>
    <ul class="grid grid-cols-4 gap-12">
      <li
        v-for="{ _path: slug, title, description } in blogPosts"
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
