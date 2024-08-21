<template>
  <div>
    <main class="c-markdown | max-w-[75ch] mx-auto">
      <NuxtLink to="/articles" class="opacity-20">Back</NuxtLink>
      <div>
        <ContentDoc />
      </div>
    </main>

    <div>
      <h1 class="text-4xl mb-16 mt-12">More Articles</h1>
      <LazyContentArticles />
    </div>
  </div>
</template>
