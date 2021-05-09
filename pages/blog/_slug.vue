<template>
  <article v-if="article !== undefined" class="simple-container prose prose-sm sm:prose lg:prose-md">
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { IContentDocument } from '@nuxt/content/types/content'
import { first } from '~/src/collections'

export default Vue.extend({
  async asyncData ({ $content, params }: Context): Promise<{} | { article: IContentDocument }> {
    const article = first(await $content(params.slug).fetch())

    return { article }
  }
})
</script>
