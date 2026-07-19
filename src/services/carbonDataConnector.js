/**
 * Connector 1: Data Loading & Fetching
 * Fetches embodied carbon data from the Global Embodied Carbon Model
 * GitHub: https://github.com/giomj/global_embodied_carbon_model
 */

import Papa from 'papaparse'

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main'

export const carbonDataConnector = {
  /**
   * Fetch Europe exposure summary (country-level embodied carbon)
   */
  async fetchEuropeExposure() {
    try {
      const url = `${GITHUB_RAW_BASE}/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv`
      const response = await fetch(url)
      const csv = await response.text()
      const parsed = Papa.parse(csv, { header: true, dynamicTyping: true })
      return parsed.data.filter(row => row.COUNTRY)
    } catch (error) {
      console.error('Error fetching Europe exposure data:', error)
      return []
    }
  },

  /**
   * Fetch embodied carbon factors for A1-A3 (Production)
   */
  async fetchEcFactorsA1A3() {
    try {
      const url = `${GITHUB_RAW_BASE}/Europe/Replacement_Embodied_Carbon/embodied_carbon_factors/Europe_A1-A3_EC_factors.csv`
      const response = await fetch(url)
      const csv = await response.text()
      const parsed = Papa.parse(csv, { header: true })
      return parsed.data.filter(row => row.ITEM)
    } catch (error) {
      console.error('Error fetching EC factors:', error)
      return []
    }
  },

  /**
   * Fetch seismic risk data
   */
  async fetchSeismicRisk() {
    try {
      const url = `${GITHUB_RAW_BASE}/Europe/Seismic_Embodied_Carbon/Europe_risk_summary.csv`
      const response = await fetch(url)
      const csv = await response.text()
      const parsed = Papa.parse(csv, { header: true, dynamicTyping: true })
      return parsed.data.filter(row => row.COUNTRY)
    } catch (error) {
      console.error('Error fetching seismic risk data:', error)
      return []
    }
  }
}
