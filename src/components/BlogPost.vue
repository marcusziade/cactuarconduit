<template>
  <div v-html="postContent" />
</template>

<script>
import FirstPost from './posts/first-post.md'
import Prism from 'prismjs'

export default {
  data() {
    return {
      postContent: FirstPost,
    }
  },
  updated() {
    Prism.highlightAll()
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

