<template>
  <div>
    <div class="h-64 container mx-auto pt-12 flex justify-between">
      <div class="pl-2 pr-2 sm:pl-0 sm:pr-0 lg:ml-12">
        <header class="text-lg lg:text-4xl text-white font-semibold font-serif">
          Blog Entries
        </header>
        <div class="text-md lg:text-2xl text-white font-sans p-6">
          I write mostly about my interests in software and programming languages
        </div>
      </div>
      <div class="relative z-0 lg:mr-36 hidden md:block">
        <div class="fancy-terminal">
          <nuxt-content :document="helloWorld" />
        </div>
      </div>
    </div>
    <content-start>
      <div class="flex flex-col container mx-auto">
        <NuxtLink
          v-for="article in articles"
          :key="article.slug"
          :to="`/blog/${article.slug}`"
          tag="div"
          class="cursor-pointer"
        >
          <h1 class="font-bold">
            {{ article.title }}
          </h1>
          <p>{{ article.description }}</p>
        </NuxtLink>
      </div>
    </content-start>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { IContentDocument } from '@nuxt/content/types/content'
import { asArray, first } from '~/src/collections'

const PER_PAGE = 4

export default Vue.extend({
  async asyncData ({ $content, params }: Context) {
    let page = +(params.slug ?? 0)
    page = isNaN(page) ? 0 : page
    const articles: IContentDocument[] = asArray(
      await $content()
        .only(['title', 'description', 'slug'])
        .sortBy('createdAt', 'desc')
        .limit(PER_PAGE + 1)
        .skip(Math.max(0, page * PER_PAGE - 1))
        .fetch()
    )

    const helloWorld = first(await $content('snippets/hello-world').fetch())

    return {
      articles,
      helloWorld,
      prev: page > 0 ? page - 1 : undefined,
      next: articles.length === PER_PAGE + 1 ? page + 1 : undefined
    }
  }
})
</script>

<style>
.fancy-terminal {
  @apply font-mono text-black relative;
  background-color: #f5f2f0;
}
.fancy-terminal::before {
  z-index: -2;
  filter: blur(20px);
}
.fancy-terminal::after {
  z-index: -1
}
.fancy-terminal::before, .fancy-terminal::after {
  position: absolute;
  content: '';
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  background: linear-gradient(-268deg, rgba(68,93,222,1) 0%, rgba(183,71,223,1) 54%, rgba(217,60,92,1) 100%);
}
</style>
