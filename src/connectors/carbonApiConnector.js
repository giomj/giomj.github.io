/**
 * Connector 2: API Connectors & Data Processing
 * Provides REST-like interface to carbon data with aggregations
 */

import { carbonDataConnector } from '../services/carbonDataConnector'

export const carbonApiConnector = {
  /**
   * Get top N countries by total replacement embodied carbon
   */
  async getTopCountriesByCarbon(limit = 10) {
    const data = await carbonDataConnector.fetchEuropeExposure()
    return data
      .sort((a, b) => parseFloat(b.TOTAL_REPL_EC_TON || 0) - parseFloat(a.TOTAL_REPL_EC_TON || 0))
      .slice(0, limit)
  },

  /**
   * Calculate average embodied carbon per building by country
   */
  async getAverageECPerBuilding() {
    const data = await carbonDataConnector.fetchEuropeExposure()
    return data.map(row => ({
      country: row.COUNTRY,
      totalBuildings: row.BUILDINGS,
      totalEC: parseFloat(row.TOTAL_REPL_EC_TON || 0),
      averagePerBuilding: parseFloat(row.TOTAL_REPL_EC_TON || 0) / (row.BUILDINGS || 1)
    }))
  },

  /**
   * Get structural vs non-structural carbon breakdown
   */
  async getStructuralBreakdown() {
    const data = await carbonDataConnector.fetchEuropeExposure()
    return data.map(row => ({
      country: row.COUNTRY,
      structural: parseFloat(row.EC_STRUCTURAL_TON || 0),
      nonStructural: parseFloat(row.EC_NONSTRUCTURAL_TON || 0),
      total: parseFloat(row.TOTAL_REPL_EC_TON || 0),
      structuralPercent: (parseFloat(row.EC_STRUCTURAL_TON || 0) / parseFloat(row.TOTAL_REPL_EC_TON || 1) * 100).toFixed(1)
    }))
  },

  /**
   * Get aggregate stats for Europe
   */
  async getEuropeStats() {
    const data = await carbonDataConnector.fetchEuropeExposure()
    const risk = await carbonDataConnector.fetchSeismicRisk()
    
    const totalBuildings = data.reduce((sum, row) => sum + (row.BUILDINGS || 0), 0)
    const totalEC = data.reduce((sum, row) => sum + parseFloat(row.TOTAL_REPL_EC_TON || 0), 0)
    const totalAAEC = risk.reduce((sum, row) => sum + parseFloat(row.AAEC_TOTAL_TON || 0), 0)
    
    return {
      countries: data.length,
      totalBuildings,
      totalReplacementEC: totalEC.toFixed(0),
      totalAnnualAAEC: totalAAEC.toFixed(0),
      averageECPerBuilding: (totalEC / totalBuildings).toFixed(2),
      riskLevel: totalAAEC > 100000 ? 'High' : totalAAEC > 50000 ? 'Medium' : 'Low'
    }
  },

  /**
   * Get country details with all metrics
   */
  async getCountryDetails(country) {
    const exposure = await carbonDataConnector.fetchEuropeExposure()
    const risk = await carbonDataConnector.fetchSeismicRisk()
    
    const expData = exposure.find(d => d.COUNTRY?.toUpperCase() === country.toUpperCase())
    const riskData = risk.find(d => d.COUNTRY?.toUpperCase() === country.toUpperCase())
    
    if (!expData) return null
    
    return {
      country: expData.COUNTRY,
      buildings: expData.BUILDINGS,
      totalArea: expData.TOTAL_AREA_SQM,
      replacementCost: expData.TOTAL_REPL_COST_USD,
      replacementEC: parseFloat(expData.TOTAL_REPL_EC_TON || 0),
      structuralEC: parseFloat(expData.EC_STRUCTURAL_TON || 0),
      nonStructuralEC: parseFloat(expData.EC_NONSTRUCTURAL_TON || 0),
      annualAAEC: riskData ? parseFloat(riskData.AAEC_TOTAL_TON || 0) : 0,
      averagePerBuilding: (parseFloat(expData.TOTAL_REPL_EC_TON || 0) / (expData.BUILDINGS || 1)).toFixed(2),
      areaPerBuilding: (expData.TOTAL_AREA_SQM / (expData.BUILDINGS || 1)).toFixed(0)
    }
  }
}
