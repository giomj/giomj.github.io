/**
 * Digital Ocean Function - Carbon Data API
 * Deploy to Digital Ocean App Platform / Functions
 * 
 * Usage:
 * 1. Create a new Digital Ocean Function
 * 2. Copy this code into packages/main/index.js
 * 3. Deploy
 * 4. Use endpoint in Carbon page: https://your-do-function/api/carbon/europe-exposure
 */

const https = require('https');
const http = require('http');

function fetchCSV(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1)
    .map(line => {
      const values = line.split(',').map(v => v.trim());
      const row = {};
      headers.forEach((h, i) => row[h] = values[i]);
      return row;
    })
    .filter(row => row.COUNTRY);
}

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  // Simple Bearer token auth (optional)
  const token = req.headers.authorization?.replace('Bearer ', '');
  const expectedToken = process.env.API_TOKEN || 'your-secret-token';
  
  if (token && token !== expectedToken) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: 'Unauthorized' }));
    return;
  }

  const path = req.url.split('?')[0];

  try {
    if (path === '/api/carbon/europe-exposure') {
      const csv = await fetchCSV(
        'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv'
      );
      const data = parseCSV(csv);
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/csv');
      res.end(csv);
    } 
    else if (path === '/api/carbon/europe-exposure-json') {
      const csv = await fetchCSV(
        'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv'
      );
      const data = parseCSV(csv);
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
    else if (path === '/api/carbon/stats') {
      const csv = await fetchCSV(
        'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv'
      );
      const data = parseCSV(csv);
      
      const stats = {
        countries: data.length,
        totalBuildings: data.reduce((sum, r) => sum + (parseInt(r.BUILDINGS) || 0), 0),
        totalReplacementEC: data.reduce((sum, r) => sum + (parseFloat(r.TOTAL_REPL_EC_TON) || 0), 0),
        timestamp: new Date().toISOString()
      };
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(stats));
    }
    else if (path === '/api/health') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
    }
    else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  } catch (err) {
    console.error('Error:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message }));
  }
};
