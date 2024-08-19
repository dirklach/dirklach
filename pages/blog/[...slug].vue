<template>
  <div>
    <main class="c-markdown | max-w-[1200px]">
      <NuxtLink to="/blog" class="opacity-20">Back</NuxtLink>
      <ContentDoc />
    </main>
    <div>
      <h1 class="text-4xl mb-16 mt-12">More Articles</h1>
      <LazyContentArticles />
    </div>
  </div>
</template>
