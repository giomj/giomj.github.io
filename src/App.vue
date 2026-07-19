<template>
  <div class="app">
    <header>
      <div class="brand" role="button" tabindex="0" @click="goHome" @keydown.enter="goHome" style="display:flex;align-items:center;cursor:pointer">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#9bd" stroke-width="1.5" fill="none" />
          <path d="M6 12h12M12 6v12" stroke="#9bd" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        <span style="margin-left:10px;font-weight:600;color:#fff">Giomj</span>
      </div>
      <nav>
        <a href="#/" @click.prevent="goHome" style="cursor:pointer">Landing</a>
        <a href="#/kb" @click.prevent="goKB" style="cursor:pointer">Knowledge Base</a>
        <a href="#/carbon" @click.prevent="() => { location.hash = '#/carbon'; }" style="cursor:pointer">Carbon Data</a>
        <button class="icon-btn" @click="goKB" style="margin-left:12px;padding:6px 8px;border-radius:6px;border:none;cursor:pointer;background:#123; color:#9bd">KB</button>
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
import Carbon from './pages/Carbon.vue'

export default {
  name: 'App',
  components: { Landing, KnowledgeBase, Carbon },
  computed: {
    currentView() {
      const hash = location.hash.replace('#', '') || '/'
      if (hash.startsWith('/kb')) return 'KnowledgeBase'
      if (hash.startsWith('/carbon')) return 'Carbon'
      return 'Landing'
    }
  },
  methods: {
    goHome() {
      location.hash = '#/'
      this.$forceUpdate()
    },
    goKB() {
      location.hash = '#/kb'
      this.$forceUpdate()
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
