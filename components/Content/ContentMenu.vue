<template>
  <div class="c-menu | container mx-auto">
    <ContentList v-slot="{ list }" path="/articles">
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        class="hehe"
        :to="article._path"
      >
        <h2 class="haha">{{ article.title }}</h2>
        <p class="hihi">{{ article.description }}</p>
      </NuxtLink>
    </ContentList>
  </div>
</template>
