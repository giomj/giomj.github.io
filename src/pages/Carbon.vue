<template>
  <div class="carbon-page">
    <h2>🌍 Global Embodied Carbon Model Integration</h2>
    
    <div class="intro">
      <p>
        This page integrates the <strong>Global Embodied Carbon Model</strong> with live data connectors.
      </p>
    </div>

    <div class="debug">
      <p v-if="!loaded" style="color: red;">⚠️ Loading data...</p>
      <p v-if="error" style="color: red;">❌ Error: {{ error }}</p>
    </div>

    <div v-if="loaded" class="tabs">
      <button 
        :class="{ active: activeTab === 'overview' }"
        @click="activeTab = 'overview'"
      >
        📊 Overview & Table
      </button>
      <button 
        :class="{ active: activeTab === 'search' }"
        @click="activeTab = 'search'"
      >
        🔍 Search & Filter
      </button>
      <button 
        :class="{ active: activeTab === 'about' }"
        @click="activeTab = 'about'"
      >
        ℹ️ About Data
      </button>
    </div>

    <div v-if="loaded && activeTab === 'overview'" class="tab-content">
      <CarbonViewer />
    </div>

    <div v-if="loaded && activeTab === 'search'" class="tab-content">
      <CarbonSearch />
    </div>

    <div v-if="loaded && activeTab === 'about'" class="tab-content about">
      <h3>About the Data</h3>
      <section>
        <h4>🔗 Data Connectors</h4>
        <p>This page demonstrates integration with the Global Embodied Carbon Model repository.</p>
      </section>
    </div>
  </div>
</template>

<script>
import CarbonViewer from '../components/data/CarbonViewer.vue'
import CarbonSearch from '../components/data/CarbonSearch.vue'

export default {
  name: 'CarbonPage',
  components: { CarbonViewer, CarbonSearch },
  data() {
    return {
      activeTab: 'overview',
      loaded: false,
      error: null
    }
  },
  async mounted() {
    try {
      this.loaded = true
    } catch (err) {
      this.error = err.message
      console.error('Carbon page error:', err)
    }
  }
}
</script>

<style scoped>
.carbon-page {
  max-width: 1200px;
  margin: 0 auto;
}

.carbon-page h2 {
  color: #0b1220;
  margin-bottom: 1rem;
}

.intro {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid #2c5aa0;
}

.intro p {
  margin: 0.5rem 0;
  color: #333;
}

.debug {
  padding: 1rem;
  margin-bottom: 1rem;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #eee;
}

.tabs button {
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  transition: all 0.2s;
}

.tabs button:hover {
  color: #0b1220;
}

.tabs button.active {
  color: #2c5aa0;
  border-bottom-color: #2c5aa0;
}

.tab-content {
  margin-bottom: 2rem;
}
</style>
