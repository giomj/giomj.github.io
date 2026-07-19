<template>
  <div class="carbon-viewer">
    <h3>🌍 Europe Embodied Carbon Database</h3>
    
    <div class="stats-grid" v-if="stats">
      <div class="stat-card">
        <div class="stat-value">{{ stats.countries }}</div>
        <div class="stat-label">Countries</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ (stats.totalBuildings / 1e6).toFixed(1) }}M</div>
        <div class="stat-label">Buildings</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ (stats.totalReplacementEC / 1e9).toFixed(2) }}B</div>
        <div class="stat-label">Ton CO₂e (Replacement)</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ (stats.totalAnnualAAEC / 1e6).toFixed(1) }}M</div>
        <div class="stat-label">Ton CO₂e/Year (Seismic)</div>
      </div>
    </div>

    <div class="table-container">
      <table class="carbon-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Buildings</th>
            <th>Total Area (km²)</th>
            <th>Replacement EC (ton)</th>
            <th>Structural EC (ton)</th>
            <th>Non-Structural EC (ton)</th>
            <th>Avg EC/Building (ton)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableData" :key="row.COUNTRY" @click="selectCountry(row)">
            <td>{{ row.COUNTRY }}</td>
            <td>{{ row.BUILDINGS?.toLocaleString() }}</td>
            <td>{{ (row.TOTAL_AREA_SQM / 1e6).toFixed(1) }}</td>
            <td>{{ parseFloat(row.TOTAL_REPL_EC_TON || 0).toLocaleString('en-US', { maximumFractionDigits: 0 }) }}</td>
            <td>{{ parseFloat(row.EC_STRUCTURAL_TON || 0).toLocaleString('en-US', { maximumFractionDigits: 0 }) }}</td>
            <td>{{ parseFloat(row.EC_NONSTRUCTURAL_TON || 0).toLocaleString('en-US', { maximumFractionDigits: 0 }) }}</td>
            <td>{{ (parseFloat(row.TOTAL_REPL_EC_TON || 0) / (row.BUILDINGS || 1)).toFixed(1) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="selectedCountry" class="country-detail">
      <h4>📊 {{ selectedCountry.country }} - Detailed Analysis</h4>
      <div class="detail-grid">
        <div class="detail-item">
          <span class="detail-label">Total Buildings:</span>
          <span class="detail-value">{{ selectedCountry.buildings?.toLocaleString() }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Total Area:</span>
          <span class="detail-value">{{ (selectedCountry.totalArea / 1e6).toFixed(1) }} km²</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Replacement EC:</span>
          <span class="detail-value">{{ selectedCountry.replacementEC?.toLocaleString('en-US', { maximumFractionDigits: 0 }) }} ton CO₂e</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Structural EC:</span>
          <span class="detail-value">{{ selectedCountry.structuralEC?.toLocaleString('en-US', { maximumFractionDigits: 0 }) }} ton CO₂e</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Non-Structural EC:</span>
          <span class="detail-value">{{ selectedCountry.nonStructuralEC?.toLocaleString('en-US', { maximumFractionDigits: 0 }) }} ton CO₂e</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Annual Seismic AAEC:</span>
          <span class="detail-value">{{ selectedCountry.annualAAEC?.toLocaleString('en-US', { maximumFractionDigits: 0 }) }} ton CO₂e/year</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { carbonDataConnector } from '../../services/carbonDataConnector'
import { carbonApiConnector } from '../../connectors/carbonApiConnector'

export default {
  name: 'CarbonViewer',
  data() {
    return {
      tableData: [],
      stats: null,
      selectedCountry: null,
      loading: true
    }
  },
  async created() {
    try {
      this.tableData = await carbonDataConnector.fetchEuropeExposure()
      this.stats = await carbonApiConnector.getEuropeStats()
      this.loading = false
    } catch (error) {
      console.error('Error loading carbon data:', error)
      this.loading = false
      this.tableData = []
      this.stats = null
    }
  },
  methods: {
    async selectCountry(row) {
      this.selectedCountry = await carbonApiConnector.getCountryDetails(row.COUNTRY)
    }
  }
}
</script>

<style scoped>
.carbon-viewer {
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.carbon-viewer h3 {
  margin-top: 0;
  color: #0b1220;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c5aa0;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.table-container {
  background: white;
  border-radius: 8px;
  overflow: auto;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.carbon-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.carbon-table thead {
  background: #0b1220;
  color: white;
  position: sticky;
  top: 0;
}

.carbon-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.carbon-table td {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #eee;
}

.carbon-table tbody tr {
  cursor: pointer;
  transition: background 0.2s;
}

.carbon-table tbody tr:hover {
  background: #f0f8ff;
}

.country-detail {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.country-detail h4 {
  margin-top: 0;
  color: #2c5aa0;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 6px;
}

.detail-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.detail-value {
  font-size: 1.1rem;
  font-weight: bold;
  color: #2c5aa0;
}
</style>
