<template>
  <div class="carbon-search">
    <h3>🔍 Carbon Data Search & Filter</h3>
    
    <div class="search-controls">
      <div class="search-box">
        <input 
          v-model="searchQuery"
          type="text"
          placeholder="Search countries, metrics..."
          @input="performSearch"
        />
      </div>
      
      <div class="filter-controls">
        <div class="filter-group">
          <label>Sort By:</label>
          <select v-model="sortBy" @change="applyFilters">
            <option value="country">Country (A-Z)</option>
            <option value="buildings">Buildings</option>
            <option value="totalEC">Total Embodied Carbon</option>
            <option value="structuralEC">Structural EC</option>
            <option value="averageEC">Avg EC per Building</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Order:</label>
          <select v-model="sortOrder" @change="applyFilters">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Min Buildings:</label>
          <input v-model.number="minBuildings" type="number" @input="applyFilters" />
        </div>

        <div class="filter-group">
          <label>Max Buildings:</label>
          <input v-model.number="maxBuildings" type="number" @input="applyFilters" />
        </div>
      </div>
    </div>

    <div v-if="searchResults.length > 0" class="results">
      <div class="results-summary">
        <strong>{{ searchResults.length }} result(s)</strong>
      </div>
      
      <div class="results-list">
        <div 
          v-for="result in searchResults" 
          :key="result.COUNTRY"
          class="result-card"
          @click="selectResult(result)"
        >
          <div class="result-header">
            <h4>{{ result.COUNTRY }}</h4>
            <span class="result-ec">{{ parseFloat(result.TOTAL_REPL_EC_TON || 0).toLocaleString('en-US', { maximumFractionDigits: 0 }) }} ton CO₂e</span>
          </div>
          <div class="result-stats">
            <div class="stat">
              <span class="label">Buildings:</span>
              <span class="value">{{ result.BUILDINGS?.toLocaleString() }}</span>
            </div>
            <div class="stat">
              <span class="label">Avg EC/Bldg:</span>
              <span class="value">{{ (parseFloat(result.TOTAL_REPL_EC_TON || 0) / (result.BUILDINGS || 1)).toFixed(1) }} ton</span>
            </div>
            <div class="stat">
              <span class="label">Structural:</span>
              <span class="value">{{ (parseFloat(result.EC_STRUCTURAL_TON || 0) / parseFloat(result.TOTAL_REPL_EC_TON || 1) * 100).toFixed(1) }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="no-results">
      <p>No results found. Try adjusting your search or filters.</p>
    </div>

    <div v-if="selectedResult" class="detailed-view">
      <h4>📈 {{ selectedResult.COUNTRY }} - Detailed Breakdown</h4>
      <div class="chart-container">
        <div class="chart">
          <div class="chart-title">Structural vs Non-Structural Carbon</div>
          <div class="bar-chart">
            <div class="bar-group">
              <div class="bar" :style="{ height: structuralPercent + '%', backgroundColor: '#2c5aa0' }"></div>
              <div class="bar-label">Structural<br>{{ structuralPercent }}%</div>
            </div>
            <div class="bar-group">
              <div class="bar" :style="{ height: nonStructuralPercent + '%', backgroundColor: '#7fccb6' }"></div>
              <div class="bar-label">Non-Structural<br>{{ nonStructuralPercent }}%</div>
            </div>
          </div>
        </div>

        <div class="metrics">
          <div class="metric-item">
            <span class="metric-label">Total Embodied Carbon:</span>
            <span class="metric-value">{{ parseFloat(selectedResult.TOTAL_REPL_EC_TON || 0).toLocaleString('en-US', { maximumFractionDigits: 0 }) }} ton CO₂e</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Total Buildings:</span>
            <span class="metric-value">{{ selectedResult.BUILDINGS?.toLocaleString() }}</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Average per Building:</span>
            <span class="metric-value">{{ (parseFloat(selectedResult.TOTAL_REPL_EC_TON || 0) / (selectedResult.BUILDINGS || 1)).toFixed(1) }} ton CO₂e</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Total Area:</span>
            <span class="metric-value">{{ (selectedResult.TOTAL_AREA_SQM / 1e6).toFixed(1) }} km²</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { carbonDataConnector } from '../../services/carbonDataConnector'

export default {
  name: 'CarbonSearch',
  data() {
    return {
      allData: [],
      searchResults: [],
      selectedResult: null,
      searchQuery: '',
      sortBy: 'totalEC',
      sortOrder: 'desc',
      minBuildings: 0,
      maxBuildings: Infinity
    }
  },
  computed: {
    structuralPercent() {
      if (!this.selectedResult) return 0
      return (parseFloat(this.selectedResult.EC_STRUCTURAL_TON || 0) / parseFloat(this.selectedResult.TOTAL_REPL_EC_TON || 1) * 100).toFixed(1)
    },
    nonStructuralPercent() {
      if (!this.selectedResult) return 0
      return (parseFloat(this.selectedResult.EC_NONSTRUCTURAL_TON || 0) / parseFloat(this.selectedResult.TOTAL_REPL_EC_TON || 1) * 100).toFixed(1)
    }
  },
  async created() {
    try {
      this.allData = await carbonDataConnector.fetchEuropeExposure()
      this.searchResults = this.allData
    } catch (error) {
      console.error('Error loading carbon data:', error)
    }
  },
  methods: {
    performSearch() {
      this.applyFilters()
    },
    applyFilters() {
      let results = this.allData

      // Search query filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        results = results.filter(row => 
          row.COUNTRY?.toLowerCase().includes(query) ||
          row.BUILDINGS?.toString().includes(query) ||
          row.TOTAL_REPL_EC_TON?.toString().includes(query)
        )
      }

      // Building count filter
      results = results.filter(row => {
        const buildings = row.BUILDINGS || 0
        return buildings >= this.minBuildings && buildings <= this.maxBuildings
      })

      // Sort results
      results.sort((a, b) => {
        let aVal, bVal
        
        switch (this.sortBy) {
          case 'country':
            aVal = a.COUNTRY || ''
            bVal = b.COUNTRY || ''
            break
          case 'buildings':
            aVal = a.BUILDINGS || 0
            bVal = b.BUILDINGS || 0
            break
          case 'totalEC':
            aVal = parseFloat(a.TOTAL_REPL_EC_TON || 0)
            bVal = parseFloat(b.TOTAL_REPL_EC_TON || 0)
            break
          case 'structuralEC':
            aVal = parseFloat(a.EC_STRUCTURAL_TON || 0)
            bVal = parseFloat(b.EC_STRUCTURAL_TON || 0)
            break
          case 'averageEC':
            aVal = parseFloat(a.TOTAL_REPL_EC_TON || 0) / (a.BUILDINGS || 1)
            bVal = parseFloat(b.TOTAL_REPL_EC_TON || 0) / (b.BUILDINGS || 1)
            break
          default:
            aVal = a.COUNTRY || ''
            bVal = b.COUNTRY || ''
        }

        if (typeof aVal === 'string') {
          return this.sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
        }
        return this.sortOrder === 'asc' ? aVal - bVal : bVal - aVal
      })

      this.searchResults = results
      this.selectedResult = null
    },
    selectResult(result) {
      this.selectedResult = result
    }
  }
}
</script>

<style scoped>
.carbon-search {
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.carbon-search h3 {
  margin-top: 0;
  color: #0b1220;
}

.search-controls {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.search-box {
  margin-bottom: 1rem;
}

.search-box input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  transition: border-color 0.2s;
}

.search-box input:focus {
  outline: none;
  border-color: #2c5aa0;
}

.filter-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.filter-group select,
.filter-group input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}

.results-summary {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #666;
}

.results-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.result-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.result-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.result-header h4 {
  margin: 0;
  color: #0b1220;
}

.result-ec {
  font-size: 0.9rem;
  font-weight: bold;
  color: #2c5aa0;
  background: #f0f8ff;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
}

.result-stats {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.stat {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: #f9f9f9;
  border-radius: 4px;
}

.stat .label {
  font-weight: 600;
  color: #666;
}

.stat .value {
  color: #2c5aa0;
  font-weight: bold;
}

.no-results {
  text-align: center;
  padding: 2rem;
  color: #666;
  background: white;
  border-radius: 8px;
}

.detailed-view {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.detailed-view h4 {
  margin-top: 0;
  color: #0b1220;
}

.chart-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.chart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.bar-chart {
  display: flex;
  gap: 2rem;
  height: 200px;
  align-items: flex-end;
}

.bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.bar {
  width: 60px;
  min-height: 20px;
  border-radius: 4px 4px 0 0;
  transition: all 0.2s;
}

.bar-label {
  font-size: 0.85rem;
  text-align: center;
  font-weight: 600;
  color: #666;
}

.metrics {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.metric-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 6px;
  border-left: 4px solid #2c5aa0;
}

.metric-label {
  font-weight: 600;
  color: #666;
}

.metric-value {
  font-weight: bold;
  color: #2c5aa0;
  font-size: 1.1rem;
}
</style>
