<template>
  <div>
    <h2>Knowledge Base</h2>
    <div v-if="posts.length===0">No markdown content found in /src/content</div>
    <ul>
      <li v-for="p in posts" :key="p.path"><a href="" @click.prevent="open(p)">{{ p.title }}</a></li>
    </ul>
    <article v-if="active">
      <h3>{{ active.title }}</h3>
      <div v-html="active.html"></div>
    </article>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'KnowledgeBase',
  data() { return { posts: [], active: null } },
  async created() {
    // load markdown files placed in src/content via Vite's import.meta.glob
    const modules = import.meta.glob('../content/*.md', { as: 'raw' })
    const entries = await Promise.all(Object.entries(modules).map(async ([path, loader]) => {
      const raw = await loader()
      const title = raw.split('\n')[0].replace(/^#\s+/, '') || path
      return { path, raw, title, html: md.render(raw) }
    }))
    this.posts = entries
  },
  methods: {
    open(p) { this.active = p }
  }
}
</script>
