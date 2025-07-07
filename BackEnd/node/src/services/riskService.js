// node/src/services/riskService.js
const axios = require('axios');

exports.calculateRisk = async (params) => {
  const response = await axios.get('http://localhost:5000/assess', { params });
  return response.data;
};

exports.getVitalSigns = async (params) => {
  const response = await axios.get('http://localhost:5000/vitals', { params });
  return response.data;
};