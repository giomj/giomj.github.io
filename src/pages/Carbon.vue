<template>
  <div class="carbon">
    <h2>🌍 Carbon Data Dashboard</h2>
    
    <div class="config-section">
      <h3>Digital Ocean Backend</h3>
      <div class="form-row">
        <input 
          v-model="apiUrl"
          type="text"
          placeholder="Paste your DO function URL here"
          class="input"
        />
        <small>Example: https://faas-nyc1-xxx.doserverless.co/api/v1/web/.../default/hook</small>
      </div>
      <button @click="loadData" class="btn">📊 Load Data from Digital Ocean</button>
      <button @click="loadFromGithub" class="btn secondary">📦 Load Data from GitHub</button>
    </div>

    <div v-if="loading" class="loading">⏳ Loading...</div>

    <div v-if="stats && !loading" class="stats">
      <div class="stat">
        <strong>Countries:</strong> {{ stats.countries }}
      </div>
      <div class="stat">
        <strong>Buildings:</strong> {{ (stats.totalBuildings / 1e6).toFixed(1) }}M
      </div>
      <div class="stat">
        <strong>CO₂e (tons):</strong> {{ (stats.totalReplacementEC / 1e9).toFixed(2) }}B
      </div>
    </div>

    <div v-if="error" class="error">❌ {{ error }}</div>
    <div v-if="success" class="success">✅ {{ success }}</div>

    <div v-if="data.length > 0" class="table">
      <h3>Top 10 Countries by Embodied Carbon</h3>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Buildings</th>
            <th>CO₂e (ton)</th>
            <th>Avg/Building</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data.slice(0, 10)" :key="row.COUNTRY">
            <td>{{ row.COUNTRY }}</td>
            <td>{{ parseInt(row.BUILDINGS || 0).toLocaleString() }}</td>
            <td>{{ parseFloat(row.TOTAL_REPL_EC_TON || 0).toLocaleString('en-US', { maximumFractionDigits: 0 }) }}</td>
            <td>{{ (parseFloat(row.TOTAL_REPL_EC_TON || 0) / parseInt(row.BUILDINGS || 1)).toFixed(1) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carbon',
  data() {
    return {
      apiUrl: localStorage.getItem('carbon_do_url') || '',
      data: [],
      stats: null,
      loading: false,
      error: null,
      success: null
    }
  },
  methods: {
    async loadData() {
      if (!this.apiUrl) {
        this.error = '❌ Please enter your Digital Ocean function URL'
        return
      }

      this.loading = true
      this.error = null
      this.success = null
      this.data = []
      this.stats = null
      localStorage.setItem('carbon_do_url', this.apiUrl)

      try {
        const url = this.apiUrl.endsWith('/') ? this.apiUrl : this.apiUrl + '/'
        
        const res = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
        
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)

        const csv = await res.text()
        this.parseAndDisplay(csv)
        this.success = '✅ Data loaded from Digital Ocean!'
      } catch (err) {
        this.error = '❌ Digital Ocean: ' + err.message
      } finally {
        this.loading = false
      }
    },

    async loadFromGithub() {
      this.loading = true
      this.error = null
      this.success = null
      this.data = []
      this.stats = null

      try {
        const url = 'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv'
        
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const csv = await res.text()
        this.parseAndDisplay(csv)
        this.success = '✅ Data loaded from GitHub!'
      } catch (err) {
        this.error = '❌ GitHub: ' + err.message
      } finally {
        this.loading = false
      }
    },

    parseAndDisplay(csv) {
      const lines = csv.split('\n').filter(l => l.trim())
      if (lines.length < 2) throw new Error('Invalid CSV data')
      
      const header = lines[0].split(',').map(h => h.trim())
      
      const rows = lines.slice(1)
        .map(line => {
          const vals = line.split(',').map(v => v.trim())
          const obj = {}
          header.forEach((h, i) => obj[h] = vals[i])
          return obj
        })
        .filter(r => r.COUNTRY)

      // Sort by CO2 descending
      rows.sort((a, b) => parseFloat(b.TOTAL_REPL_EC_TON || 0) - parseFloat(a.TOTAL_REPL_EC_TON || 0))

      this.data = rows
      
      if (rows.length > 0) {
        this.stats = {
          countries: rows.length,
          totalBuildings: rows.reduce((sum, r) => sum + parseInt(r.BUILDINGS || 0), 0),
          totalReplacementEC: rows.reduce((sum, r) => sum + parseFloat(r.TOTAL_REPL_EC_TON || 0), 0)
        }
      }
    }
  }
}
</script>

<style scoped>
.carbon {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
}

.carbon h2 {
  color: #0b1220;
  margin-bottom: 1.5rem;
}

.config-section {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.config-section h3 {
  margin-top: 0;
  color: #333;
}

.form-row {
  margin-bottom: 1rem;
}

.form-row small {
  display: block;
  margin-top: 0.25rem;
  color: #666;
  font-size: 0.85rem;
  font-family: monospace;
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.85rem;
  font-family: monospace;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #2c5aa0;
}

.btn {
  padding: 0.75rem 1.5rem;
  background: #2c5aa0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}

.btn:hover {
  background: #1a3a70;
}

.btn.secondary {
  background: #666;
}

.btn.secondary:hover {
  background: #444;
}

.loading {
  padding: 2rem;
  text-align: center;
  color: #666;
  font-size: 1.1rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat {
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  border-left: 4px solid #2c5aa0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.stat strong {
  display: block;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.error {
  background: #ffebee;
  padding: 1rem;
  border-radius: 4px;
  color: #c62828;
  margin-bottom: 1rem;
  border-left: 4px solid #f44336;
}

.success {
  background: #e8f5e9;
  padding: 1rem;
  border-radius: 4px;
  color: #2e7d32;
  margin-bottom: 1rem;
  border-left: 4px solid #4caf50;
}

.table {
  background: white;
  border-radius: 4px;
  overflow: auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.table h3 {
  margin: 0;
  padding: 1rem;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

thead {
  background: #0b1220;
  color: white;
  position: sticky;
  top: 0;
}

th, td {
  padding: 0.75rem;
  text-align: left;
}

th {
  font-weight: 600;
}

tbody tr:hover {
  background: #f5f5f5;
}

tbody tr:nth-child(even) {
  background: #fafafa;
}
</style>
