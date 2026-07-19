<template>
  <div class="app">
    <header>
      <h1>Giomj — Personal Site</h1>
      <nav>
        <a href="#/">Landing</a>
        <a href="#/kb">Knowledge Base</a>
      </nav>
    </header>
    <main>
      <component :is="currentView" />
    </main>
  </div>
</template>

<script>
import Landing from './pages/Landing.vue'
import KnowledgeBase from './pages/KnowledgeBase.vue'

export default {
  name: 'App',
  components: { Landing, KnowledgeBase },
  computed: {
    currentView() {
      const hash = location.hash.replace('#', '') || '/'
      if (hash.startsWith('/kb')) return 'KnowledgeBase'
      return 'Landing'
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => this.$forceUpdate())
  }
}
</script>

<style>
body { font-family: system-ui, Arial, sans-serif; margin:0; }
.app header { padding: 1rem; background:#0b1220; color: #fff; display:flex; justify-content:space-between; align-items:center }
.app header nav a { color:#9bd; margin-left:1rem; text-decoration:none }
main { padding: 1rem }
</style>
