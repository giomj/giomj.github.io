/**
 * Digital Ocean Serverless Function - Node.js 14
 * Carbon Data API
 * 
 * Copy this entire code into your DO function
 */

async function main(params) {
  try {
    // Parse request
    const method = params.__ow_method || 'GET'
    const path = params.__ow_path || '/'
    
    // CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json'
    }

    // Handle CORS preflight
    if (method === 'OPTIONS') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ status: 'ok' })
      }
    }

    // Health check
    if (path === '/health' || path === '/api/health') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: 'ok',
          timestamp: new Date().toISOString()
        })
      }
    }

    // Fetch CSV data from GitHub
    if (path === '/europe-exposure' || path === '/api/carbon/europe-exposure') {
      const csvUrl = 'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv'
      
      const res = await fetch(csvUrl)
      const csv = await res.text()
      
      return {
        statusCode: 200,
        headers: { ...headers, 'Content-Type': 'text/csv' },
        body: csv
      }
    }

    // Return stats JSON
    if (path === '/stats' || path === '/api/carbon/stats') {
      const csvUrl = 'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv'
      
      const res = await fetch(csvUrl)
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

      const stats = {
        countries: rows.length,
        totalBuildings: rows.reduce((sum, r) => sum + (parseInt(r.BUILDINGS) || 0), 0),
        totalReplacementEC: rows.reduce((sum, r) => sum + (parseFloat(r.TOTAL_REPL_EC_TON) || 0), 0),
        timestamp: new Date().toISOString()
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(stats)
      }
    }

    // Default - return CSV
    const csvUrl = 'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv'
    const res = await fetch(csvUrl)
    const csv = await res.text()
    
    return {
      statusCode: 200,
      headers: { ...headers, 'Content-Type': 'text/csv' },
      body: csv
    }

  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: error.message,
        stack: process.env.DEBUG ? error.stack : undefined
      })
    }
  }
}

exports.main = main
