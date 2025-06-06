const axios = require('axios');

exports.calculateRisk = async (params) => {
  // Call the Flask microservice for risk assessment
  const response = await axios.get('http://localhost:6000/assess', { params });
  return response.data;
};

exports.getVitalSigns = async (params) => {
  // fetch vital signs from the Python service
  const response = await axios.get('http://localhost:6000/vitals', { params });
  return response.data;
};
