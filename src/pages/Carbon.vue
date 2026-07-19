<template>
  <div class="carbon-page">
    <h2>🌍 Global Embodied Carbon Model</h2>
    
    <div class="intro">
      <p>
        Interactive carbon data dashboard integrating the <strong>Global Embodied Carbon Model</strong>.
      </p>
    </div>

    <!-- Auth Section -->
    <div class="auth-section">
      <h3>🔐 Backend Configuration</h3>
      <div class="auth-form">
        <div class="form-group">
          <label>API Endpoint URL:</label>
          <input 
            v-model="apiEndpoint"
            type="text"
            placeholder="https://your-do-function.com or leave blank for GitHub"
            @change="saveConfig"
          />
          <small>Leave blank to fetch directly from GitHub (CORS may apply)</small>
        </div>
        <div class="form-group">
          <label>API Key (optional):</label>
          <input 
            v-model="apiKey"
            type="password"
            placeholder="Your API key for backend authentication"
            @change="saveConfig"
          />
        </div>
        <button @click="testConnection" class="btn-test">🔗 Test Connection</button>
        <div v-if="connectionStatus" :class="['status', connectionStatus.success ? 'success' : 'error']">
          {{ connectionStatus.message }}
        </div>
      </div>
    </div>

    <!-- Data Display -->
    <div v-if="!connectionStatus || connectionStatus.success" class="data-section">
      <div v-if="loading" class="loading">
        <p>⏳ Loading carbon data...</p>
      </div>

      <div v-if="!loading && stats" class="stats-grid">
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
          <div class="stat-label">Ton CO₂e</div>
        </div>
      </div>

      <div v-if="!loading && tableData.length > 0" class="table-section">
        <h3>Country Data</h3>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Buildings</th>
                <th>Total EC (ton)</th>
                <th>Avg per Building</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in tableData.slice(0, 10)" :key="row.COUNTRY">
                <td>{{ row.COUNTRY }}</td>
                <td>{{ row.BUILDINGS?.toLocaleString() }}</td>
                <td>{{ parseFloat(row.TOTAL_REPL_EC_TON || 0).toLocaleString('en-US', { maximumFractionDigits: 0 }) }}</td>
                <td>{{ (parseFloat(row.TOTAL_REPL_EC_TON || 0) / (row.BUILDINGS || 1)).toFixed(1) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-if="!loading && (!tableData || tableData.length === 0)" class="no-data">
        <p>📭 No data loaded. Click "Test Connection" above to load data.</p>
      </div>
    </div>

    <div v-if="error" class="error-section">
      <h4>⚠️ Error</h4>
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarbonPage',
  data() {
    return {
      apiEndpoint: '',
      apiKey: '',
      tableData: [],
      stats: null,
      loading: false,
      error: null,
      connectionStatus: null
    }
  },
  mounted() {
    this.loadConfig()
  },
  methods: {
    saveConfig() {
      localStorage.setItem('carbon_api_endpoint', this.apiEndpoint)
      localStorage.setItem('carbon_api_key', this.apiKey)
    },
    loadConfig() {
      this.apiEndpoint = localStorage.getItem('carbon_api_endpoint') || ''
      this.apiKey = localStorage.getItem('carbon_api_key') || ''
    },
    async testConnection() {
      this.loading = true
      this.error = null
      this.connectionStatus = null

      try {
        let url, options
        
        if (this.apiEndpoint) {
          // Use custom backend endpoint
          url = `${this.apiEndpoint}/api/carbon/europe-exposure`
          options = {
            method: 'GET',
            headers: this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {}
          }
        } else {
          // Fetch directly from GitHub
          url = 'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv'
          options = { method: 'GET' }
        }

        const response = await fetch(url, options)
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const data = await response.text()
        
        // Parse CSV
        const lines = data.trim().split('\n')
        if (lines.length < 2) throw new Error('Invalid CSV data')
        
        const headers = lines[0].split(',')
        const rows = lines.slice(1).map(line => {
          const values = line.split(',')
          const row = {}
          headers.forEach((h, i) => row[h.trim()] = values[i]?.trim())
          return row
        }).filter(r => r.COUNTRY)

        this.tableData = rows
        this.stats = {
          countries: rows.length,
          totalBuildings: rows.reduce((sum, r) => sum + (parseInt(r.BUILDINGS) || 0), 0),
          totalReplacementEC: rows.reduce((sum, r) => sum + (parseFloat(r.TOTAL_REPL_EC_TON) || 0), 0)
        }

        this.connectionStatus = {
          success: true,
          message: `✅ Connected! Loaded ${rows.length} countries.`
        }
        this.loading = false
      } catch (err) {
        this.error = err.message
        this.connectionStatus = {
          success: false,
          message: `❌ Connection failed: ${err.message}`
        }
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.carbon-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
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
  margin: 0;
  color: #333;
}

.auth-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.auth-section h3 {
  margin-top: 0;
  color: #0b1220;
}

.auth-form {
  display: grid;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-group input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: monospace;
}

.form-group input:focus {
  outline: none;
  border-color: #2c5aa0;
  box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
}

.form-group small {
  margin-top: 0.25rem;
  color: #666;
  font-size: 0.85rem;
}

.btn-test {
  padding: 0.75rem 1.5rem;
  background: #2c5aa0;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s;
}

.btn-test:hover {
  background: #1a3a70;
}

.btn-test:active {
  transform: scale(0.98);
}

.status {
  padding: 1rem;
  border-radius: 6px;
  font-weight: 500;
}

.status.success {
  background: #e8f5e9;
  color: #2e7d32;
  border-left: 4px solid #4caf50;
}

.status.error {
  background: #ffebee;
  color: #c62828;
  border-left: 4px solid #f44336;
}

.data-section {
  margin-bottom: 2rem;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #666;
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

.table-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.table-section h3 {
  margin-top: 0;
  color: #0b1220;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.data-table thead {
  background: #0b1220;
  color: white;
}

.data-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.data-table td {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #eee;
}

.data-table tbody tr:hover {
  background: #f5f5f5;
}

.no-data {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color: #666;
}

.error-section {
  background: #ffebee;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #f44336;
}

.error-section h4 {
  margin-top: 0;
  color: #c62828;
}

.error-section p {
  margin-bottom: 0;
  color: #b71c1c;
  font-family: monospace;
  font-size: 0.85rem;
}
</style>
