<template>
  <div class="carbon">
    <h2>🌍 Carbon Data Dashboard</h2>
    
    <div class="config-section">
      <h3>Backend Configuration</h3>
      <div class="form-row">
        <input 
          v-model="apiUrl"
          type="text"
          placeholder="API endpoint (leave blank for GitHub)"
          class="input"
        />
      </div>
      <div class="form-row">
        <input 
          v-model="apiKey"
          type="password"
          placeholder="API key (optional)"
          class="input"
        />
      </div>
      <button @click="loadData" class="btn">📊 Load Data</button>
    </div>

    <div v-if="loading" class="loading">Loading...</div>

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

    <div v-if="data.length > 0" class="table">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Buildings</th>
            <th>CO₂e (ton)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data.slice(0, 10)" :key="row.COUNTRY">
            <td>{{ row.COUNTRY }}</td>
            <td>{{ row.BUILDINGS }}</td>
            <td>{{ row.TOTAL_REPL_EC_TON }}</td>
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
      apiUrl: '',
      apiKey: '',
      data: [],
      stats: null,
      loading: false,
      error: null
    }
  },
  methods: {
    async loadData() {
      this.loading = true
      this.error = null
      this.data = []
      this.stats = null

      try {
        let url = this.apiUrl || 'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv'
        
        const headers = {}
        if (this.apiKey) {
          headers['Authorization'] = 'Bearer ' + this.apiKey
        }

        const res = await fetch(url, { headers })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const csv = await res.text()
        const lines = csv.split('\n')
        const header = lines[0].split(',').map(h => h.trim())
        
        const rows = lines.slice(1)
          .map(line => {
            const vals = line.split(',').map(v => v.trim())
            const obj = {}
            header.forEach((h, i) => obj[h] = vals[i])
            return obj
          })
          .filter(r => r.COUNTRY)

        this.data = rows
        
        if (rows.length > 0) {
          this.stats = {
            countries: rows.length,
            totalBuildings: rows.reduce((sum, r) => sum + parseInt(r.BUILDINGS || 0), 0),
            totalReplacementEC: rows.reduce((sum, r) => sum + parseFloat(r.TOTAL_REPL_EC_TON || 0), 0)
          }
        }

        this.loading = false
      } catch (err) {
        this.error = err.message
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.carbon {
  max-width: 900px;
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

.input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: monospace;
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
}

.btn:hover {
  background: #1a3a70;
}

.btn:active {
  transform: scale(0.98);
}

.loading {
  padding: 2rem;
  text-align: center;
  color: #666;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat {
  background: white;
  padding: 1rem;
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
}

.table {
  background: white;
  border-radius: 4px;
  overflow: auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

thead {
  background: #0b1220;
  color: white;
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
