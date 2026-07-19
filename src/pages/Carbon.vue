<template>
  <div class="carbon-page">
    <h2>🌍 Global Embodied Carbon Model Integration</h2>
    
    <div class="intro">
      <p>
        This page integrates the <strong>Global Embodied Carbon Model</strong> with live data connectors.
        Data is fetched from: <a href="https://github.com/giomj/global_embodied_carbon_model" target="_blank">github.com/giomj/global_embodied_carbon_model</a>
      </p>
      <p>
        <strong>Data Source:</strong> Europe's embodied carbon associated with replacement and repair of residential, commercial, and industrial building stock.
      </p>
    </div>

    <div class="tabs">
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

    <div v-if="activeTab === 'overview'" class="tab-content">
      <CarbonViewer />
    </div>

    <div v-if="activeTab === 'search'" class="tab-content">
      <CarbonSearch />
    </div>

    <div v-if="activeTab === 'about'" class="tab-content about">
      <h3>About the Data</h3>
      
      <section>
        <h4>🔗 Data Connectors</h4>
        <ul>
          <li><strong>Connector 1 - Data Loading:</strong> Fetches CSV data from GitHub repository using Papa Parse</li>
          <li><strong>Connector 2 - API Layer:</strong> RESTful interface for aggregations and calculations</li>
          <li><strong>Connector 3 - Data Tables:</strong> Interactive tabular viewer with sorting and details</li>
          <li><strong>Connector 4 - Search/Filter:</strong> Full-text search with advanced filtering and visualization</li>
        </ul>
      </section>

      <section>
        <h4>📊 Data Structure</h4>
        <p><strong>Exposure Summary Fields:</strong></p>
        <ul>
          <li>COUNTRY - Country name</li>
          <li>BUILDINGS - Total number of buildings</li>
          <li>TOTAL_AREA_SQM - Total built area in square meters</li>
          <li>TOTAL_REPL_COST_USD - Total replacement cost in USD</li>
          <li>TOTAL_REPL_EC_TON - Total replacement embodied carbon in tons CO₂e</li>
          <li>EC_STRUCTURAL_TON - Structural components embodied carbon</li>
          <li>EC_NONSTRUCTURAL_TON - Non-structural components embodied carbon</li>
        </ul>
      </section>

      <section>
        <h4>🧮 Calculation Methodology</h4>
        <p><strong>Life Cycle Assessment (LCA) Modules:</strong></p>
        <ul>
          <li><strong>A1-A3:</strong> Production - Material manufacturing</li>
          <li><strong>A4:</strong> Transport - 120 km average distance</li>
          <li><strong>A5:</strong> Construction - On-site construction emissions</li>
          <li><strong>C1-C4:</strong> End-of-Life - Demolition and waste management</li>
          <li><strong>AAEC:</strong> Annual Average Loss Ratio × Replacement EC (Seismic)</li>
        </ul>
      </section>

      <section>
        <h4>📍 Geographic Coverage</h4>
        <p>
          This integration covers <strong>45+ European countries and territories</strong>, including:
        </p>
        <div class="countries-grid">
          <span>Albania</span>
          <span>Austria</span>
          <span>Belgium</span>
          <span>Bulgaria</span>
          <span>Croatia</span>
          <span>Czechia</span>
          <span>Denmark</span>
          <span>France</span>
          <span>Germany</span>
          <span>Greece</span>
          <span>Hungary</span>
          <span>Ireland</span>
          <span>Italy</span>
          <span>Poland</span>
          <span>Portugal</span>
          <span>Romania</span>
          <span>Spain</span>
          <span>Sweden</span>
          <span>Switzerland</span>
          <span>Turkey</span>
          <span>United Kingdom</span>
          <span>...and 24 more</span>
        </div>
      </section>

      <section>
        <h4>🔐 License & Attribution</h4>
        <p>
          <strong>License:</strong> CC BY-NC-SA 4.0 (Creative Commons Attribution-NonCommercial-ShareAlike)
        </p>
        <p>
          <strong>Source:</strong> Global Earthquake Model (GEM) Foundation
        </p>
        <p>
          <strong>Citation:</strong> Global Earthquake Model (GEM) Foundation. Global Seismic Embodied Carbon Model. 
          Available at: https://github.com/gem/global_embodied_carbon_model
        </p>
        <p>
          <strong>Publication:</strong> Caruso et al. "Unveiling the Environmental Impact of Earthquakes in Europe" (2024)
        </p>
      </section>

      <section>
        <h4>🔧 Technical Implementation</h4>
        <p><strong>Technologies Used:</strong></p>
        <ul>
          <li><strong>Vue.js 3:</strong> Reactive UI framework</li>
          <li><strong>Papa Parse:</strong> CSV parsing library</li>
          <li><strong>Fetch API:</strong> Data retrieval from GitHub</li>
          <li><strong>CORS:</strong> Cross-origin requests via GitHub raw content</li>
        </ul>
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
      activeTab: 'overview'
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

.intro a {
  color: #2c5aa0;
  text-decoration: none;
  font-weight: 600;
}

.intro a:hover {
  text-decoration: underline;
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

.about section {
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.about section h4 {
  margin-top: 0;
  color: #0b1220;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
}

.about section ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.about section li {
  margin: 0.5rem 0;
  color: #333;
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.countries-grid span {
  padding: 0.75rem;
  background: #f5f5f5;
  border-radius: 6px;
  text-align: center;
  font-size: 0.9rem;
  color: #333;
}

@media (max-width: 768px) {
  .tabs {
    flex-wrap: wrap;
  }
  
  .tabs button {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
